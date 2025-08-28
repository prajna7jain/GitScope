from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from .routes.repo import router as repo_router
from .routes.user import router as user_router


def create_app() -> FastAPI:
    app = FastAPI(title="Git Scope Backend", version="1.0.0")

    # CORS for local frontend (Vite default port 5173) and others as needed
    app.add_middleware(
        CORSMiddleware,
        allow_origins=["*"],
        allow_credentials=False,
        allow_methods=["*"],
        allow_headers=["*"],
    )

    app.include_router(repo_router, prefix="/api")
    app.include_router(user_router, prefix="/api")

    return app


app = create_app()

