import os
from typing import Any, Dict, Optional

import requests
from fastapi import HTTPException
from dotenv import load_dotenv


GITHUB_API_BASE = "https://api.github.com"


def _build_headers() -> Dict[str, str]:
    load_dotenv()
    headers: Dict[str, str] = {
        "Accept": "application/vnd.github+json",
        "User-Agent": "git-scope-backend",
    }
    token = os.getenv("GITHUB_TOKEN")
    if token:
        headers["Authorization"] = f"Bearer {token}"
    return headers


def github_get(path: str, params: Optional[Dict[str, Any]] = None) -> Any:
    url = f"{GITHUB_API_BASE}{path}"
    try:
        response = requests.get(url, headers=_build_headers(), params=params, timeout=20)
    except requests.RequestException as exc:
        raise HTTPException(status_code=502, detail=f"Upstream request error: {exc}")

    if response.status_code == 404:
        raise HTTPException(status_code=404, detail="Resource not found on GitHub")

    if response.status_code == 403:
        # Could be rate limit or forbidden
        detail = response.json() if _is_json(response) else {"message": response.text}
        message = detail.get("message", "Forbidden or rate limited by GitHub") if isinstance(detail, dict) else str(detail)
        raise HTTPException(status_code=403, detail=message)

    if response.status_code >= 400:
        detail = response.json() if _is_json(response) else {"message": response.text}
        raise HTTPException(status_code=response.status_code, detail=detail)

    return response.json()


def _is_json(response: requests.Response) -> bool:
    try:
        response.json()
        return True
    except Exception:
        return False

