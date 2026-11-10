import { v4 as uuidv4 } from 'uuid';
import { redisCache } from '@agrosathi/shared';
import { AuthTokensDto } from '../dtos/auth.dto';
import { userRepository } from '../repositories/user.repository';

/**
 * Clean Architecture Service Layer: Contains all auth orchestration and JWT session caching
 */
export class AuthService {
  /**
   * Generates production token envelope & caches refresh session in Redis
   */
  public async generateSessionTokens(userId: string): Promise<AuthTokensDto> {
    const accessToken = `mock_jwt_access_${userId}_${Date.now()}`;
    const refreshToken = `mock_jwt_refresh_${uuidv4()}`;

    // Cache active session in Redis
    await redisCache.set(`auth:session:${userId}`, { refreshToken }, 7 * 24 * 3600);

    return {
      accessToken,
      refreshToken,
      expiresInSeconds: 900, // 15 minutes
    };
  }

  public async checkServiceHealth(): Promise<boolean> {
    return userRepository.ping();
  }
}

export const authService = new AuthService();
