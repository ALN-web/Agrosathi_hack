import { Response } from 'express';
import { ApiResponse, HttpStatus } from '@agrosathi/types';

/**
 * Standard utility to send consistent success JSON response
 */
export function sendSuccess<T = any>(
  res: Response,
  data: T,
  message = 'Request completed successfully',
  statusCode: HttpStatus = HttpStatus.OK,
): Response {
  const response: ApiResponse<T> = {
    success: true,
    message,
    data,
    timestamp: new Date().toISOString(),
  };
  return res.status(statusCode).json(response);
}

/**
 * Standard utility to send consistent error JSON response
 */
export function sendError(
  res: Response,
  message: string,
  statusCode: HttpStatus = HttpStatus.INTERNAL_SERVER_ERROR,
  code = 'ERROR',
  details?: any,
): Response {
  const response: ApiResponse = {
    success: false,
    message,
    error: {
      code,
      details,
    },
    timestamp: new Date().toISOString(),
  };
  return res.status(statusCode).json(response);
}
