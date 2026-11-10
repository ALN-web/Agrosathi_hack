import express from 'express';
import { applySecurityMiddlewares, requestIdMiddleware, globalErrorHandler, sendSuccess } from '@agrosathi/shared';
import { HttpStatus } from '@agrosathi/types';

const app = express();
applySecurityMiddlewares(app);
app.use(requestIdMiddleware);
app.use(express.json());

app.get('/api/v1/weather/health', (_req, res) => {
  return sendSuccess(res, { service: 'weather-service', status: 'HEALTHY' }, 'Weather service operational', HttpStatus.OK);
});

app.use(globalErrorHandler);

const PORT = Number(process.env.WEATHER_SERVICE_PORT) || 8003;
app.listen(PORT, () => console.info(`🌤️ [Weather Service] Active on port ${PORT}`));
