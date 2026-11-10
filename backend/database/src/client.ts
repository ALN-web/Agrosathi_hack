import { PrismaClient } from '@prisma/client';

/**
 * Enterprise Singleton Prisma ORM Client
 * Prevents connection pool exhaustion in serverless or multi-module Node.js processes.
 */
class DatabaseClient {
  private static instance: PrismaClient;

  public static getInstance(): PrismaClient {
    if (!DatabaseClient.instance) {
      DatabaseClient.instance = new PrismaClient({
        log: process.env.NODE_ENV === 'development' ? ['query', 'warn', 'error'] : ['error'],
      });
    }
    return DatabaseClient.instance;
  }

  /**
   * Health Check Probe for PostgreSQL Cluster
   */
  public static async healthCheck(): Promise<boolean> {
    try {
      const client = DatabaseClient.getInstance();
      await client.$queryRaw`SELECT 1`;
      return true;
    } catch {
      return false;
    }
  }
}

export const prisma = DatabaseClient.getInstance();
export const checkDatabaseHealth = DatabaseClient.healthCheck;
