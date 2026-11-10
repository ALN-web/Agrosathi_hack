import morgan from 'morgan';
import { Request, Response } from 'express';

/**
 * Custom Morgan Request Logger Middleware
 * Logs HTTP request method, URL, status code, response time, and Request ID
 */
export const requestLogger = morgan(
  (tokens, req: Request, res: Response) => {
    return [
      `[REQ_ID: ${req.headers['x-request-id'] || 'N/A'}]`,
      tokens.method(req, res),
      tokens.url(req, res),
      tokens.status(req, res),
      '-',
      tokens['response-time'](req, res),
      'ms',
    ].join(' ');
  },
  {
    skip: (req) => req.url === '/health' || req.url === '/api/v1/health',
  },
);
