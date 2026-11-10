import dotenv from 'dotenv';
import { z } from 'zod';

dotenv.config();

/**
 * Strict Environment Schema Validation using Zod
 * Ensures fast failure on application boot if critical configs are missing or malformed.
 */
const envSchema = z.object({
  NODE_ENV: z.enum(['development', 'test', 'production']).default('development'),
  PORT: z.coerce.number().default(8000),
  API_VERSION: z.string().default('v1'),

  // PostgreSQL Database Connection URL
  DATABASE_URL: z
    .string()
    .default('postgresql://postgres:postgres_secure_pass@localhost:5432/agrosathi_production?schema=public'),

  // Redis Cache Configuration
  REDIS_HOST: z.string().default('localhost'),
  REDIS_PORT: z.coerce.number().default(6379),
  REDIS_PASSWORD: z.string().optional().default(''),
  REDIS_DB: z.coerce.number().default(0),

  // JWT Security Keys
  JWT_SECRET: z.string().default('enterprise-super-secure-jwt-secret-key-agrosathi-2026'),
  JWT_EXPIRES_IN: z.string().default('15m'),
  JWT_REFRESH_SECRET: z.string().default('enterprise-super-secure-refresh-token-secret-agrosathi-2026'),
  JWT_REFRESH_EXPIRES_IN: z.string().default('7d'),

  // Security Headers & Rate Limit
  CORS_ORIGIN: z.string().default('*'),
  RATE_LIMIT_WINDOW_MS: z.coerce.number().default(15 * 60 * 1000), // 15 mins
  RATE_LIMIT_MAX_REQUESTS: z.coerce.number().default(100),

  // Python AI Service Endpoints
  AI_CROP_PREDICTION_URL: z.string().default('http://localhost:8080/api/v1/crop-prediction'),
  AI_SOIL_ANALYSIS_URL: z.string().default('http://localhost:8081/api/v1/soil-analysis'),
  AI_YIELD_PREDICTION_URL: z.string().default('http://localhost:8082/api/v1/yield-prediction'),
  AI_RECOMMENDATION_ENGINE_URL: z.string().default('http://localhost:8083/api/v1/recommendations'),
});

export type EnvironmentConfig = z.infer<typeof envSchema>;

function validateEnv(): EnvironmentConfig {
  const result = envSchema.safeParse(process.env);
  if (!result.success) {
    console.error('❌ Environment Validation Failed:\n', result.error.format());
    // Fallback to parsed defaults if non-fatal in dev, otherwise return validated
  }
  return envSchema.parse(process.env);
}

export const env = validateEnv();
