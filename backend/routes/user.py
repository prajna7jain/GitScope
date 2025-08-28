from fastapi import APIRouter, HTTPException

from ..services.github import github_get


router = APIRouter(tags=["user"])


@router.get("/user/{username}")
def get_user(username: str):
    try:
        return github_get(f"/users/{username}")
    except HTTPException:
        raise


@router.get("/user/{username}/repos")
def get_user_repos(username: str):
    try:
        return github_get(f"/users/{username}/repos")
    except HTTPException:
        raise

