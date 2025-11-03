# Docker Setup Guide

This guide explains how to run the Schedulli application using Docker for both development and production environments.

## Prerequisites

- Docker Engine 20.10+
- Docker Compose 2.0+
- Git

## Development Environment

### Quick Start

1. **Create environment file:**
   ```bash
   cp .env.example .env
   ```

2. **Configure your `.env` file:**
   ```bash
   APP_NAME="Schedulli"
   APP_ENV=local
   APP_DEBUG=true
   APP_URL=http://localhost:8000
   
   # Database (PostgreSQL in Docker)
   DB_CONNECTION=pgsql
   DB_HOST=db
   DB_PORT=5432
   DB_DATABASE=schedulli
   DB_USERNAME=postgres
   DB_PASSWORD=postgres
   
   # Redis
   REDIS_HOST=redis
   REDIS_PORT=6379
   
   # WorkOS
   WORKOS_CLIENT_ID=your-workos-client-id
   WORKOS_API_KEY=your-workos-api-key
   WORKOS_REDIRECT_URL="http://localhost:8000/authenticate"
   ```

3. **Generate application key:**
   ```bash
   docker-compose -f docker-compose.dev.yml run --rm app php artisan key:generate
   ```

4. **Start all services:**
   ```bash
   docker-compose -f docker-compose.dev.yml up --build
   ```

5. **Access your application:**
   - Application: http://localhost:8000
   - Vite HMR: http://localhost:5173

### Development Commands

**Start services in background:**
```bash
docker-compose -f docker-compose.dev.yml up -d
```

**View logs:**
```bash
docker-compose -f docker-compose.dev.yml logs -f
```

**Run migrations:**
```bash
docker-compose -f docker-compose.dev.yml exec app php artisan migrate
```

**Run Artisan commands:**
```bash
docker-compose -f docker-compose.dev.yml exec app php artisan <command>
```

**Run Composer commands:**
```bash
docker-compose -f docker-compose.dev.yml exec app composer <command>
```

**Run NPM commands:**
```bash
docker-compose -f docker-compose.dev.yml exec node npm <command>
```

**Access database:**
```bash
docker-compose -f docker-compose.dev.yml exec db psql -U postgres -d schedulli
```

**Stop all services:**
```bash
docker-compose -f docker-compose.dev.yml down
```

**Stop and remove volumes (clean slate):**
```bash
docker-compose -f docker-compose.dev.yml down -v
```

### Development Services

- **app**: PHP-FPM 8.4 with Laravel (hot reload via volumes)
- **nginx**: Web server on port 8000
- **node**: Node.js with Vite dev server on port 5173
- **db**: PostgreSQL 16 database
- **redis**: Redis 7 for cache/sessions/queues
- **queue**: Laravel queue worker

## Production Environment

### Initial Setup

1. **Create production `.env` file:**
   ```bash
   APP_NAME="Schedulli"
   APP_ENV=production
   APP_DEBUG=false
   APP_URL=https://yourdomain.com
   
   # Generate a secure key
   APP_KEY=base64:your-generated-key-here
   
   # Database
   DB_CONNECTION=pgsql
   DB_HOST=db
   DB_PORT=5432
   DB_DATABASE=schedulli_production
   DB_USERNAME=schedulli_user
   DB_PASSWORD=change-to-strong-password
   
   # Redis
   REDIS_HOST=redis
   REDIS_PASSWORD=change-to-strong-redis-password
   REDIS_PORT=6379
   
   # WorkOS
   WORKOS_CLIENT_ID=your-production-client-id
   WORKOS_API_KEY=your-production-api-key
   WORKOS_REDIRECT_URL="https://yourdomain.com/authenticate"
   
   # Mail (use a real service)
   MAIL_MAILER=smtp
   MAIL_HOST=smtp.mailtrap.io
   MAIL_PORT=2525
   MAIL_USERNAME=your-username
   MAIL_PASSWORD=your-password
   MAIL_ENCRYPTION=tls
   ```

2. **Build production assets:**
   ```bash
   docker-compose -f docker-compose.prod.yml up node --build
   ```
   This builds your React/Vite assets into `public/build`.

3. **Generate application key:**
   ```bash
   docker-compose -f docker-compose.prod.yml run --rm app php artisan key:generate
   ```

4. **Start all services:**
   ```bash
   docker-compose -f docker-compose.prod.yml up -d --build
   ```

5. **Run initial migrations:**
   ```bash
   docker-compose -f docker-compose.prod.yml exec app php artisan migrate --force
   ```

6. **Access your application:**
   - Application: http://your-domain (or configured port)
   - SSL: Configure certificates in `docker/nginx/ssl/` and uncomment SSL config in `docker/nginx/prod.conf`

### Production Commands

**Start services:**
```bash
docker-compose -f docker-compose.prod.yml up -d
```

**View logs:**
```bash
docker-compose -f docker-compose.prod.yml logs -f
```

**View specific service logs:**
```bash
docker-compose -f docker-compose.prod.yml logs -f app
docker-compose -f docker-compose.prod.yml logs -f queue
docker-compose -f docker-compose.prod.yml logs -f scheduler
```

**Rebuild assets after code changes:**
```bash
docker-compose -f docker-compose.prod.yml up node --build
docker-compose -f docker-compose.prod.yml restart nginx
```

**Run migrations:**
```bash
docker-compose -f docker-compose.prod.yml exec app php artisan migrate --force
```

**Clear application cache:**
```bash
docker-compose -f docker-compose.prod.yml exec app php artisan config:clear
docker-compose -f docker-compose.prod.yml exec app php artisan route:clear
docker-compose -f docker-compose.prod.yml exec app php artisan view:clear
```

**Optimize for production:**
```bash
docker-compose -f docker-compose.prod.yml exec app php artisan config:cache
docker-compose -f docker-compose.prod.yml exec app php artisan route:cache
docker-compose -f docker-compose.prod.yml exec app php artisan view:cache
```

**Stop services:**
```bash
docker-compose -f docker-compose.prod.yml down
```

**Stop and remove volumes (⚠️ destroys data):**
```bash
docker-compose -f docker-compose.prod.yml down -v
```

### Production Services

- **app**: PHP-FPM 8.4 with Laravel (optimized)
- **nginx**: Web server (port 80/443)
- **node**: Node.js build service (runs once to build assets)
- **db**: PostgreSQL 16 with health checks
- **redis**: Redis 7 with password protection
- **queue**: Laravel queue worker
- **scheduler**: Laravel task scheduler (cron)

## Environment Variables

### Required Variables

| Variable | Dev Example | Prod Example | Description |
|----------|-------------|--------------|-------------|
| `APP_KEY` | (generated) | `base64:...` | Laravel application key |
| `DB_DATABASE` | `schedulli` | `schedulli_prod` | Database name |
| `DB_USERNAME` | `postgres` | `schedulli_user` | Database user |
| `DB_PASSWORD` | `postgres` | `strong-password` | Database password |
| `WORKOS_CLIENT_ID` | Your client ID | Production client ID | WorkOS client ID |
| `WORKOS_API_KEY` | Your API key | Production API key | WorkOS API key |
| `WORKOS_REDIRECT_URL` | `http://localhost:8000/authenticate` | `https://domain.com/authenticate` | WorkOS redirect URL |

### Optional Variables

| Variable | Default | Description |
|----------|---------|-------------|
| `APP_PORT` | `8000` | Port for nginx (dev) |
| `DB_PORT` | `5432` (dev) | Database port |
| `REDIS_PORT` | `6379` | Redis port |
| `REDIS_PASSWORD` | `null` (dev) | Redis password (required in prod) |

## Important Notes

### Database Host

⚠️ **Important**: In Docker, use `DB_HOST=db` (the service name), **NOT** `127.0.0.1` or `localhost`. Services communicate via Docker's internal network.

### Development vs Production

- **Development**: Hot reload, volume mounts, debug enabled
- **Production**: Optimized builds, caching enabled, secure defaults

### SSL/HTTPS

For production HTTPS:
1. Place SSL certificates in `docker/nginx/ssl/cert.pem` and `docker/nginx/ssl/key.pem`
2. Uncomment SSL configuration in `docker/nginx/prod.conf`
3. Update `APP_URL` to `https://`

## Troubleshooting

### Port Already in Use

If port 8000 is taken, change it in `.env`:
```bash
APP_PORT=8001
```

### Database Connection Issues

1. Check if database container is running:
   ```bash
   docker-compose -f docker-compose.dev.yml ps db
   ```

2. Verify database credentials in `.env` match docker-compose

3. Wait for database to be ready (entrypoint script handles this automatically)

### Assets Not Loading

**Development:**
- Ensure Vite dev server is running: `docker-compose -f docker-compose.dev.yml ps node`
- Check nginx proxy configuration

**Production:**
- Rebuild assets: `docker-compose -f docker-compose.prod.yml up node --build`
- Clear browser cache

### Permission Issues

```bash
# Fix storage permissions
docker-compose -f docker-compose.dev.yml exec app chmod -R 755 storage bootstrap/cache
```

### Redis Connection Issues

**Development:** Redis runs without password  
**Production:** Set `REDIS_PASSWORD` in `.env` and ensure it matches docker-compose

### View Container Logs

```bash
# All services
docker-compose -f docker-compose.dev.yml logs -f

# Specific service
docker-compose -f docker-compose.dev.yml logs -f app
docker-compose -f docker-compose.dev.yml logs -f nginx
docker-compose -f docker-compose.dev.yml logs -f node
```

## Updating Dependencies

### PHP Dependencies

```bash
# Update Composer packages
docker-compose -f docker-compose.dev.yml exec app composer update

# Install new package
docker-compose -f docker-compose.dev.yml exec app composer require vendor/package
```

### Node Dependencies

```bash
# Update npm packages
docker-compose -f docker-compose.dev.yml exec node npm update

# Install new package
docker-compose -f docker-compose.dev.yml exec node npm install package-name
```

## Cleanup

**Remove all containers and volumes:**
```bash
# Development
docker-compose -f docker-compose.dev.yml down -v

# Production
docker-compose -f docker-compose.prod.yml down -v
```

**Remove Docker images:**
```bash
docker-compose -f docker-compose.dev.yml down --rmi all
docker-compose -f docker-compose.prod.yml down --rmi all
```

## Switching Between Dev and Prod

To switch between environments, use the appropriate compose file:

- Development: `docker-compose -f docker-compose.dev.yml`
- Production: `docker-compose -f docker-compose.prod.yml`

Both environments use separate volumes, so data is isolated.

