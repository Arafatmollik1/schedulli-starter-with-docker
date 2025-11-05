#!/bin/bash

set -e

echo "🚀 Starting deployment..."

# Stop running containers
echo "⏹️  Stopping containers..."
docker compose -f docker-compose.prod.yml down

# Build containers
echo "🔨 Building containers..."
docker compose -f docker-compose.prod.yml build --no-cache

# Start containers
echo "▶️  Starting containers..."
docker compose -f docker-compose.prod.yml up -d

# Wait for containers to be healthy
echo "⏳ Waiting for containers to be ready..."
sleep 10

# Run migrations
echo "🗄️  Running database migrations..."
docker compose -f docker-compose.prod.yml exec -T app php artisan migrate --force

# Cache configuration
echo "⚡ Caching configuration..."
docker compose -f docker-compose.prod.yml exec -T app php artisan config:cache
docker compose -f docker-compose.prod.yml exec -T app php artisan route:cache
docker compose -f docker-compose.prod.yml exec -T app php artisan view:cache

# Show running containers
echo "✅ Deployment completed! Running containers:"
docker compose -f docker-compose.prod.yml ps

echo "🎉 Deployment successful!"

