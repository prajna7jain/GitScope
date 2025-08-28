from fastapi import APIRouter, HTTPException, Query
from typing import Optional

from ..services.github import github_get


router = APIRouter(tags=["repo"])


@router.get("/repo/{owner}/{repo}")
def get_repo(owner: str, repo: str):
    try:
        return github_get(f"/repos/{owner}/{repo}")
    except HTTPException:
        raise


@router.get("/repo/{owner}/{repo}/contributors")
def get_contributors(owner: str, repo: str, anon: Optional[str] = Query(None)):
    params = {}
    if anon is not None:
        params["anon"] = anon
    try:
        return github_get(f"/repos/{owner}/{repo}/contributors", params=params)
    except HTTPException:
        raise


@router.get("/repo/{owner}/{repo}/commits")
def get_commits(owner: str, repo: str, per_page: int = Query(30, ge=1, le=100)):
    try:
        return github_get(f"/repos/{owner}/{repo}/commits", params={"per_page": per_page})
    except HTTPException:
        raise


# Not listed in the spec, but required by the existing frontend
@router.get("/repo/{owner}/{repo}/pulls")
def get_pulls(
    owner: str,
    repo: str,
    state: str = Query("open", pattern="^(open|closed|all)$"),
    per_page: int = Query(30, ge=1, le=100),
):
    try:
        return github_get(
            f"/repos/{owner}/{repo}/pulls",
            params={"state": state, "per_page": per_page},
        )
    except HTTPException:
        raise

