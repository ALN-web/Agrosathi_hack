import express from 'express';
import { applySecurityMiddlewares, requestIdMiddleware, globalErrorHandler, sendSuccess } from '@agrosathi/shared';
import { HttpStatus } from '@agrosathi/types';

const app = express();
applySecurityMiddlewares(app);
app.use(requestIdMiddleware);
app.use(express.json());

app.get('/api/v1/market/health', (_req, res) => {
  return sendSuccess(res, { service: 'market-service', status: 'HEALTHY' }, 'Market service operational', HttpStatus.OK);
});

app.use(globalErrorHandler);

const PORT = Number(process.env.MARKET_SERVICE_PORT) || 8004;
app.listen(PORT, () => console.info(`📈 [Market Service] Active on port ${PORT}`));
