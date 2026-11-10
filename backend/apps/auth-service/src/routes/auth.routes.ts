import { Router } from 'express';
import { asyncHandler } from '@agrosathi/shared';
import { authController } from '../controllers/auth.controller';

export const authRouter = Router();

authRouter.post('/register', asyncHandler((req, res) => authController.register(req, res)));
authRouter.get('/health', asyncHandler((req, res) => authController.health(req, res)));
