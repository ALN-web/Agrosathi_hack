import { z } from 'zod';

export const registerValidatorSchema = z.object({
  email: z.string().email('Valid email address is required'),
  phone: z.string().optional(),
  password: z.string().min(8, 'Password must be at least 8 characters long'),
  role: z.enum(['FARMER', 'AGRONOMIST', 'ENTERPRISE_ADMIN']).default('FARMER'),
});

export const loginValidatorSchema = z.object({
  email: z.string().email(),
  password: z.string().min(1),
});
