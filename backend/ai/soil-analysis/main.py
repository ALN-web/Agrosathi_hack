import os
import sys

sys.path.append(os.path.abspath(os.path.join(os.path.dirname(__file__), "..")))

from shared_foundation import create_ai_service_app, success_response

app = create_ai_service_app(title="AgroSathi Soil Analysis AI Service")


@app.get("/api/v1/soil-analysis/health")
async def health_check():
    return success_response(
        data={"service": "soil-analysis-ai", "status": "HEALTHY"},
        message="Soil Analysis AI Foundation Operational",
    )


if __name__ == "__main__":
    import uvicorn

    uvicorn.run(app, host="0.0.0.0", port=8081)
