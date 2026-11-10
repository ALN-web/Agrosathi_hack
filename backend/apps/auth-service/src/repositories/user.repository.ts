import { prisma } from '@agrosathi/database';
import { RegisterUserDto } from '../dtos/auth.dto';

/**
 * Clean Architecture Repository Layer abstraction for User data access
 */
export class UserRepository {
  /**
   * Check if PostgreSQL database is reachable before executing queries
   */
  public async ping(): Promise<boolean> {
    try {
      await prisma.$queryRaw`SELECT 1`;
      return true;
    } catch {
      return false;
    }
  }

  // Future user methods plug here cleanly when Prisma user tables are generated:
  // public async findByEmail(email: string) { ... }
  // public async create(data: RegisterUserDto) { ... }
}

export const userRepository = new UserRepository();
