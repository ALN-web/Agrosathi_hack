import express from 'express';
import { env } from '@agrosathi/config';
import {
  applySecurityMiddlewares,
  requestIdMiddleware,
  requestLogger,
  apiRateLimiter,
  globalErrorHandler,
  redisCache,
  NotFoundError,
} from '@agrosathi/shared';
import { v1Router } from './routes';
import { healthRouter } from './routes/health.routes';

const app = express();

// 1. Enterprise Security Middlewares (Helmet, CORS, Compression)
applySecurityMiddlewares(app);

// 2. Request Tracing & Body Parsing
app.use(requestIdMiddleware);
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// 3. Observability Request Logging
app.use(requestLogger);

// 4. DDoS / Brute-Force Rate Limiter
app.use(apiRateLimiter);

// 5. Global Health Check Probe (also mounted outside /api/v1 for orchestrator probes)
app.use('/health', healthRouter);

// 6. API Version 1 Routes & Automated Swagger Docs
app.use('/api/v1', v1Router);

// 7. 404 Route Handler
app.use('*', () => {
  throw new NotFoundError('Endpoint does not exist on AgroSathi API Gateway');
});

// 8. Global Centralized Error Handler
app.use(globalErrorHandler);

const PORT = env.PORT || 8000;

const server = app.listen(PORT, async () => {
  console.info(`🚀 [Enterprise Gateway] Active on port ${PORT} [ENV: ${env.NODE_ENV}]`);
  console.info(`📘 [OpenAPI Documentation] Available at http://localhost:${PORT}/api/v1/docs`);

  // Initialize Redis connection asynchronously
  await redisCache.connect();
});

// ==========================================
// GRACEFUL SHUTDOWN HANDLER
// ==========================================
const handleShutdown = async (signal: string) => {
  console.info(`⚠️ Received ${signal}. Starting graceful shutdown of AgroSathi Gateway...`);

  server.close(async () => {
    console.info('HTTP server closed.');

    try {
      await redisCache.disconnect();
      console.info('Redis connection cleanly terminated.');
    } catch (err: any) {
      console.error('Error disconnecting Redis:', err.message);
    }

    process.exit(0);
  });

  // Force close after 10 seconds if connections fail to drain
  setTimeout(() => {
    console.error('Force terminating process after shutdown timeout.');
    process.exit(1);
  }, 10000);
};

process.on('SIGTERM', () => handleShutdown('SIGTERM'));
process.on('SIGINT', () => handleShutdown('SIGINT'));
