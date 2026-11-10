import { Request, Response } from 'express';
import { sendSuccess, sendError, ValidationError } from '@agrosathi/shared';
import { HttpStatus } from '@agrosathi/types';
import { authService } from '../services/auth.service';
import { registerValidatorSchema } from '../validators/auth.validator';

/**
 * Clean Architecture Controller Layer:
 * No business logic. Parses requests, validates payload, delegates to service, sends standard response.
 */
export class AuthController {
  public async register(req: Request, res: Response): Promise<Response> {
    const parseResult = registerValidatorSchema.safeParse(req.body);
    if (!parseResult.success) {
      throw new ValidationError('Invalid registration input', parseResult.error.format());
    }

    // Delegate token session creation to AuthService
    const tokens = await authService.generateSessionTokens('user_uuid_placeholder');

    return sendSuccess(
      res,
      tokens,
      'User registration foundation successful',
      HttpStatus.CREATED,
    );
  }

  public async health(_req: Request, res: Response): Promise<Response> {
    const healthy = await authService.checkServiceHealth();
    if (!healthy) {
      return sendError(res, 'Auth service DB connectivity degraded', HttpStatus.SERVICE_UNAVAILABLE);
    }
    return sendSuccess(res, { service: 'auth-service', status: 'HEALTHY' });
  }
}

export const authController = new AuthController();
