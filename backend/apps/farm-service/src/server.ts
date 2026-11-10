import express from 'express';
import {
  applySecurityMiddlewares,
  requestIdMiddleware,
  requestLogger,
  globalErrorHandler,
  sendSuccess,
} from '@agrosathi/shared';
import { HttpStatus } from '@agrosathi/types';

const app = express();
applySecurityMiddlewares(app);
app.use(requestIdMiddleware);
app.use(express.json());
app.use(requestLogger);

app.get('/api/v1/farms/health', (_req, res) => {
  return sendSuccess(res, { service: 'farm-service', status: 'HEALTHY' }, 'Farm service operational', HttpStatus.OK);
});

app.use(globalErrorHandler);

const PORT = Number(process.env.FARM_SERVICE_PORT) || 8002;
const server = app.listen(PORT, () => {
  console.info(`🌾 [Farm Service] Active on port ${PORT}`);
});

process.on('SIGTERM', () => server.close(() => process.exit(0)));
