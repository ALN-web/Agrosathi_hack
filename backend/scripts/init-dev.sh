#!/usr/bin/env bash
set -e

echo "🚀 Bootstrapping AgroSathi Enterprise Monorepo Development Environment..."

echo "1. Installing Node.js monorepo workspace dependencies..."
npm install

echo "2. Generating Prisma ORM client..."
npm run prisma:generate --workspace=@agrosathi/database || echo "⚠️ Database URL offline; Prisma client generation deferred."

echo "3. Building shared TypeScript packages..."
npm run build --workspaces --if-present

echo "✅ AgroSathi Backend Monorepo ready for local or containerized execution!"
