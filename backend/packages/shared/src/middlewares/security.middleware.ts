import { Express } from 'express';
import helmet from 'helmet';
import cors from 'cors';
import compression from 'compression';

/**
 * Configures enterprise security & optimization middlewares for any Express application
 */
export function applySecurityMiddlewares(app: Express): void {
  // Helmet Hardened HTTP Security Headers
  app.use(
    helmet({
      contentSecurityPolicy: process.env.NODE_ENV === 'production',
      crossOriginEmbedderPolicy: false,
    }),
  );

  // CORS Configuration
  const allowedOrigins = (process.env.CORS_ORIGIN || '*').split(',');
  app.use(
    cors({
      origin: allowedOrigins.includes('*') ? '*' : allowedOrigins,
      credentials: true,
      methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
      allowedHeaders: ['Content-Type', 'Authorization', 'X-Request-Id'],
    }),
  );

  // Gzip / Brotli Payload Compression
  app.use(compression());
}
