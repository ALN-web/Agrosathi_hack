import os
import sys

sys.path.append(os.path.abspath(os.path.join(os.path.dirname(__file__), "..")))

from shared_foundation import create_ai_service_app, success_response

app = create_ai_service_app(title="AgroSathi Recommendation Engine AI Service")


@app.get("/api/v1/recommendations/health")
async def health_check():
    return success_response(
        data={"service": "recommendation-engine-ai", "status": "HEALTHY"},
        message="Recommendation Engine AI Foundation Operational",
    )


if __name__ == "__main__":
    import uvicorn

    uvicorn.run(app, host="0.0.0.0", port=8083)
