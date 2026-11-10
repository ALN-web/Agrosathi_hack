import Redis from 'ioredis';

/**
 * Enterprise Production Redis Cache Service
 * Provides resilient caching with automatic serialization, TTL expiry, and pattern invalidation.
 */
export class RedisCacheService {
  private static instance: RedisCacheService;
  private client: Redis;

  private constructor() {
    const redisHost = process.env.REDIS_HOST || 'localhost';
    const redisPort = Number(process.env.REDIS_PORT) || 6379;
    const redisPassword = process.env.REDIS_PASSWORD || undefined;

    this.client = new Redis({
      host: redisHost,
      port: redisPort,
      password: redisPassword,
      lazyConnect: true,
      retryStrategy: (times) => {
        const delay = Math.min(times * 50, 2000);
        return delay;
      },
    });

    this.client.on('error', (err) => {
      console.error('❌ Redis Cache Error:', err.message);
    });
  }

  public static getInstance(): RedisCacheService {
    if (!RedisCacheService.instance) {
      RedisCacheService.instance = new RedisCacheService();
    }
    return RedisCacheService.instance;
  }

  public async connect(): Promise<void> {
    try {
      await this.client.connect();
      console.info('✅ Connected to Redis Cache Cluster');
    } catch (error: any) {
      console.warn('⚠️ Redis initial connection deferred:', error.message);
    }
  }

  public async get<T>(key: string): Promise<T | null> {
    const data = await this.client.get(key);
    if (!data) return null;
    try {
      return JSON.parse(data) as T;
    } catch {
      return data as unknown as T;
    }
  }

  public async set(key: string, value: any, ttlSeconds = 3600): Promise<void> {
    const payload = typeof value === 'string' ? value : JSON.stringify(value);
    await this.client.set(key, payload, 'EX', ttlSeconds);
  }

  public async del(key: string): Promise<void> {
    await this.client.del(key);
  }

  public async deleteByPattern(pattern: string): Promise<void> {
    const keys = await this.client.keys(pattern);
    if (keys.length > 0) {
      await this.client.del(...keys);
    }
  }

  public async exists(key: string): Promise<boolean> {
    const count = await this.client.exists(key);
    return count > 0;
  }

  public async healthCheck(): Promise<boolean> {
    try {
      const response = await this.client.ping();
      return response === 'PONG';
    } catch {
      return false;
    }
  }

  public async disconnect(): Promise<void> {
    await this.client.quit();
  }
}

export const redisCache = RedisCacheService.getInstance();
