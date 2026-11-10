/**
 * Role definitions for AgroSathi precision agriculture platform
 */
export enum UserRole {
  FARMER = 'FARMER',
  AGRONOMIST = 'AGRONOMIST',
  ENTERPRISE_ADMIN = 'ENTERPRISE_ADMIN',
  SYSTEM_SERVICE = 'SYSTEM_SERVICE',
}

/**
 * Standard JWT Access Token Payload
 */
export interface JwtPayload {
  sub: string; // User UUID
  email?: string;
  phone?: string;
  role: UserRole;
  iat?: number;
  exp?: number;
}

/**
 * Standard Refresh Token Payload
 */
export interface RefreshTokenPayload {
  sub: string;
  tokenId: string; // UUID of stored refresh token session
  iat?: number;
  exp?: number;
}

/**
 * Express Authenticated Request User Context
 */
export interface AuthUserContext {
  id: string;
  email?: string;
  phone?: string;
  role: UserRole;
}
