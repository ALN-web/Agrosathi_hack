import { Request, Response, NextFunction } from 'express';
import { HttpStatus } from '@agrosathi/types';
import { AppError } from '../errors/AppError';
import { sendError } from '../utils/response.util';

/**
 * Enterprise Centralized Error Handling Middleware
 * Catches all errors and outputs standard JSON envelope
 */
export function globalErrorHandler(
  err: Error | AppError,
  req: Request,
  res: Response,
  _next: NextFunction,
): Response {
  const statusCode =
    err instanceof AppError ? err.statusCode : HttpStatus.INTERNAL_SERVER_ERROR;
  const errorCode = err instanceof AppError ? err.code : 'INTERNAL_SERVER_ERROR';
  const message =
    err instanceof AppError
      ? err.message
      : process.env.NODE_ENV === 'production'
        ? 'An internal server error occurred'
        : err.message || 'Internal Server Error';

  const details = err instanceof AppError ? err.details : undefined;

  // Log error for observability
  if (statusCode >= 500) {
    console.error(`❌ [Enterprise Error] [${req.method} ${req.url}]:`, err);
  }

  return sendError(res, message, statusCode, errorCode, details);
}
