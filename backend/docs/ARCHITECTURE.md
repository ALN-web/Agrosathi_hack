# AgroSathi Backend Architecture & Microservice Integration Guide

## Overview
AgroSathi backend is built as an enterprise monorepo using Clean Architecture principles. It separates domain business logic from framework concerns and external data stores.

## Clean Architecture Layers
Every Node.js microservice (`apps/*`) is structured as follows:
- **Routes (`src/routes/`)**: Maps HTTP URLs and middleware chains to Controller methods.
- **Controllers (`src/controllers/`)**: Parses request parameters/body, calls Service methods, and returns standardized `ApiResponse` JSON envelopes. **Controllers contain zero business logic.**
- **Services (`src/services/`)**: Orchestrates domain workflows, caching via `redisCache`, and data calls.
- **Repositories (`src/repositories/`)**: Abstracts database queries using `PrismaClient`.
- **Validators (`src/validators/`)**: Strict Zod schemas validating request payload shapes.
- **DTOs (`src/dtos/`)**: Data Transfer Objects defining contract interfaces between layers.

## Adding a New Microservice
1. Create a new directory under `apps/my-new-service`.
2. Add `@agrosathi/config`, `@agrosathi/database`, `@agrosathi/shared`, and `@agrosathi/types` to its `package.json`.
3. Follow the Clean Architecture layer folder structure.
4. Mount or proxy the service in API Gateway (`apps/gateway/src/routes/index.ts`) or configure an Nginx upstream in `nginx/nginx.conf`.
