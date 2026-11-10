import os
import sys

# Ensure shared foundation is importable
sys.path.append(os.path.abspath(os.path.join(os.path.dirname(__file__), "..")))

from shared_foundation import create_ai_service_app, success_response

app = create_ai_service_app(title="AgroSathi Crop Prediction AI Service")


@app.get("/api/v1/crop-prediction/health")
async def health_check():
    """
    Health check probe for Crop Prediction Engine foundation.
    Future inference models plug into POST /api/v1/crop-prediction/predict.
    """
    return success_response(
        data={"service": "crop-prediction-ai", "status": "HEALTHY", "modelLoaded": False},
        message="Crop Prediction AI Foundation Operational",
    )


if __name__ == "__main__":
    import uvicorn

    uvicorn.run(app, host="0.0.0.0", port=8080)
