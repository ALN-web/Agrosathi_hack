import express from 'express';
import {
  applySecurityMiddlewares,
  requestIdMiddleware,
  requestLogger,
  globalErrorHandler,
  redisCache,
} from '@agrosathi/shared';
import { authRouter } from './routes/auth.routes';

const app = express();

applySecurityMiddlewares(app);
app.use(requestIdMiddleware);
app.use(express.json());
app.use(requestLogger);

app.use('/api/v1/auth', authRouter);
app.use(globalErrorHandler);

const PORT = Number(process.env.AUTH_SERVICE_PORT) || 8001;

const server = app.listen(PORT, async () => {
  console.info(`🔐 [Auth Service] Listening on port ${PORT}`);
  await redisCache.connect();
});

process.on('SIGTERM', () => {
  server.close(() => process.exit(0));
});
