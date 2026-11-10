import { UserRole } from '@agrosathi/types';

export interface RegisterUserDto {
  email: string;
  phone?: string;
  passwordHash: string;
  role: UserRole;
}

export interface AuthTokensDto {
  accessToken: string;
  refreshToken: string;
  expiresInSeconds: number;
}
