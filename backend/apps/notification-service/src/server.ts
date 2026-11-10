import express from 'express';
import { applySecurityMiddlewares, requestIdMiddleware, globalErrorHandler, sendSuccess } from '@agrosathi/shared';
import { HttpStatus } from '@agrosathi/types';

const app = express();
applySecurityMiddlewares(app);
app.use(requestIdMiddleware);
app.use(express.json());

app.get('/api/v1/notifications/health', (_req, res) => {
  return sendSuccess(res, { service: 'notification-service', status: 'HEALTHY' }, 'Notification service operational', HttpStatus.OK);
});

app.use(globalErrorHandler);

const PORT = Number(process.env.NOTIFICATION_SERVICE_PORT) || 8005;
app.listen(PORT, () => console.info(`🔔 [Notification Service] Active on port ${PORT}`));
