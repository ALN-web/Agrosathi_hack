/**
 * Enterprise OpenAPI 3.0 Specification for AgroSathi API Gateway
 * Served automatically at /api/v1/docs
 */
export const openApiSpec = {
  openapi: '3.0.3',
  info: {
    title: 'AgroSathi Enterprise Precision Agriculture Platform API',
    version: '1.0.0',
    description:
      'Production-grade API Gateway documentation for AgroSathi microservices and AI prediction models.',
    contact: {
      name: 'AgroSathi Enterprise Engineering',
      url: 'https://agrosathi.com',
    },
  },
  servers: [
    {
      url: '/api/v1',
      description: 'API Version 1 Gateway Endpoint',
    },
  ],
  components: {
    securitySchemes: {
      BearerAuth: {
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT',
      },
    },
  },
  paths: {
    '/health': {
      get: {
        summary: 'System Health & Deep Dependency Probe',
        description: 'Checks connectivity to PostgreSQL Cluster and Redis Cache Cluster.',
        responses: {
          '200': {
            description: 'All enterprise services are healthy and operational.',
          },
          '503': {
            description: 'One or more underlying data stores are degraded or unreachable.',
          },
        },
      },
    },
  },
};
