import { Router } from 'express';
import swaggerUi from 'swagger-ui-express';
import { healthRouter } from './health.routes';
import { openApiSpec } from '../swagger/openapi.config';

export const v1Router = Router();

// Automated Swagger/OpenAPI Documentation
v1Router.use('/docs', swaggerUi.serve, swaggerUi.setup(openApiSpec));

// System Health Probe
v1Router.use('/health', healthRouter);

// Service Routes Placeholder Hook
// In production deployment, downstream microservices plug into /auth, /farms, /weather, /market, /ai
