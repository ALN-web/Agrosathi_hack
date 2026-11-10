import rateLimit from 'express-rate-limit';
import { HttpStatus } from '@agrosathi/types';

/**
 * Standard API Rate Limiter
 * Protects endpoints from DDoS or brute-force requests
 */
export const apiRateLimiter = rateLimit({
  windowMs: Number(process.env.RATE_LIMIT_WINDOW_MS) || 15 * 60 * 1000, // 15 mins default
  max: Number(process.env.RATE_LIMIT_MAX_REQUESTS) || 100,
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    success: false,
    message: 'Rate limit exceeded. Too many requests from this IP.',
    error: {
      code: 'RATE_LIMIT_EXCEEDED',
    },
    timestamp: new Date().toISOString(),
  },
  statusCode: HttpStatus.TOO_MANY_REQUESTS,
});
