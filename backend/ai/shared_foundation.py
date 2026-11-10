from datetime import datetime, timezone
from typing import Any, Optional
from fastapi import FastAPI, Request
from fastapi.responses import JSONResponse
from fastapi.middleware.cors import CORSMiddleware
from fastapi.exceptions import RequestValidationError
from pydantic import BaseModel


class ApiResponse(BaseModel):
    success: bool
    message: str
    data: Optional[Any] = None
    error: Optional[Any] = None
    timestamp: str


def create_ai_service_app(title: str, version: str = "1.0.0") -> FastAPI:
    """
    Factory function for enterprise AgroSathi FastAPI AI services.
    Enforces uniform JSON envelope responses and CORS middleware.
    """
    app = FastAPI(
        title=title,
        version=version,
        description="AgroSathi Precision Agriculture Machine Learning Engine",
    )

    app.add_middleware(
        CORSMiddleware,
        allow_origins=["*"],
        allow_credentials=True,
        allow_methods=["*"],
        allow_headers=["*"],
    )

    @app.exception_handler(RequestValidationError)
    async def validation_exception_handler(
        request: Request, exc: RequestValidationError
    ):
        return JSONResponse(
            status_code=400,
            content={
                "success": False,
                "message": "AI request payload validation failed",
                "error": {"code": "VALIDATION_ERROR", "details": exc.errors()},
                "timestamp": datetime.now(timezone.utc).isoformat(),
            },
        )

    @app.exception_handler(Exception)
    async def global_exception_handler(request: Request, exc: Exception):
        return JSONResponse(
            status_code=500,
            content={
                "success": False,
                "message": str(exc) or "AI Internal Engine Error",
                "error": {"code": "AI_ENGINE_ERROR"},
                "timestamp": datetime.now(timezone.utc).isoformat(),
            },
        )

    return app


def success_response(
    data: Any, message: str = "Success", status_code: int = 200
) -> JSONResponse:
    return JSONResponse(
        status_code=status_code,
        content={
            "success": True,
            "message": message,
            "data": data,
            "timestamp": datetime.now(timezone.utc).isoformat(),
        },
    )
