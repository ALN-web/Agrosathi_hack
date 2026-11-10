import { Router, Request, Response } from 'express';
import { checkDatabaseHealth } from '@agrosathi/database';
import { redisCache, sendSuccess, sendError } from '@agrosathi/shared';
import { HttpStatus } from '@agrosathi/types';

export const healthRouter = Router();

healthRouter.get('/', async (_req: Request, res: Response) => {
  const [dbHealthy, redisHealthy] = await Promise.all([
    checkDatabaseHealth(),
    redisCache.healthCheck(),
  ]);

  const allHealthy = dbHealthy && redisHealthy;
  const healthData = {
    service: 'AgroSathi Enterprise API Gateway',
    status: allHealthy ? 'HEALTHY' : 'DEGRADED',
    uptimeSeconds: process.uptime(),
    memoryUsage: process.memoryUsage(),
    dependencies: {
      postgreSql: dbHealthy ? 'UP' : 'DOWN',
      redisCache: redisHealthy ? 'UP' : 'DOWN',
    },
    timestamp: new Date().toISOString(),
  };

  if (!allHealthy) {
    return sendError(
      res,
      'System health degraded: One or more data store dependencies unavailable',
      HttpStatus.SERVICE_UNAVAILABLE,
      'SYSTEM_DEGRADED',
      healthData,
    );
  }

  return sendSuccess(res, healthData, 'All system dependencies operational', HttpStatus.OK);
});
