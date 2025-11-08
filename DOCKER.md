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

   **Note:** Ensure you have created the Caddyfile at `./docker/caddy/Caddyfile.dev` for development. The docker-compose file expects this file to exist.

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
   docker-compose -f docker-compose.dev.yml run --rm frankenphp php artisan key:generate
   ```

4. **Start all services:**
   ```bash
   docker-compose -f docker-compose.dev.yml up --build
   ```

5. **Access your application:**
   - Application: http://localhost:${APP_PORT:-8000}
   - HTTPS: https://localhost:8443
   - Vite HMR: http://localhost:5173

### Development Commands

**Start services in background:**
```bash
docker-compose -f docker-compose.dev.yml up -d
```

**View logs:**
```bash
# All services
docker-compose -f docker-compose.dev.yml logs -f

# Specific service
docker-compose -f docker-compose.dev.yml logs -f <service-name>
```

**Run migrations:**
```bash
docker-compose -f docker-compose.dev.yml exec frankenphp php artisan migrate
```

**Run Artisan commands:**
```bash
docker-compose -f docker-compose.dev.yml exec frankenphp php artisan <command>
```

**Run Composer commands:**
```bash
docker-compose -f docker-compose.dev.yml exec frankenphp composer <command>
```

**Run NPM commands:**
```bash
# In running node container
docker-compose -f docker-compose.dev.yml exec node npm <command>

# Or run one-off command
docker-compose -f docker-compose.dev.yml run --rm node npm <command>
```

**Access database:**
```bash
# From container
docker-compose -f docker-compose.dev.yml exec db psql -U postgres -d schedulli

# From host (if DB_PORT is exposed)
psql -h localhost -p ${DB_PORT:-5432} -U postgres -d schedulli
```

**Stop all services:**
```bash
docker-compose -f docker-compose.dev.yml down
```

**Stop and remove volumes (clean slate):**
```bash
docker-compose -f docker-compose.dev.yml down -v
```

### Development Features

- **Hot Reload**: Code changes are immediately reflected via volume mounts
- **Vite HMR**: Vite dev server runs on port 5173 with WebSocket support through Caddy
- **Volume Mounts**: All code changes are immediately reflected in containers
- **HTTP/3**: Enabled in Caddy on port 8443 (HTTPS)

### Development Services

- **frankenphp**: FrankenPHP with Laravel Octane (port 8000 internal, healthcheck enabled)
- **caddy**: Caddy web server (port ${APP_PORT:-8000} → 80, 8443 → 443) with Vite HMR proxy
- **node**: Node.js with Vite dev server running `npm run dev` on port 5173
- **db**: PostgreSQL 16 database (port ${DB_PORT:-5432} exposed)
- **redis**: Redis 7 for cache/sessions/queues (port ${REDIS_PORT:-6380} exposed)
- **queue**: Laravel queue worker running `php artisan queue:work redis`

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
   This builds your React/Vite assets into `public/build`. The node service runs once and exits after building.

3. **Configure Caddy domain and email:**
   ```bash
   # Add to your .env file
   CADDY_DOMAIN=yourdomain.com
   CADDY_EMAIL=your-email@example.com
   ```

   **Note:** Ensure you have created the Caddyfile at `./docker/caddy/Caddyfile` for production. The docker-compose file expects this file to exist.

4. **Generate application key:**
   ```bash
   docker-compose -f docker-compose.prod.yml run --rm frankenphp php artisan key:generate
   ```

5. **Start all services:**
   ```bash
   docker-compose -f docker-compose.prod.yml up -d --build
   ```
   
   **Note:** On first start, Caddy will automatically obtain SSL certificates from Let's Encrypt. This may take a few minutes.

6. **Run initial migrations:**
   ```bash
   docker-compose -f docker-compose.prod.yml exec frankenphp php artisan migrate --force
   ```

7. **Access your application:**
   - Application: https://yourdomain.com (Caddy handles SSL automatically)
   - HTTP/3 (QUIC) is automatically enabled

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
docker-compose -f docker-compose.prod.yml logs -f frankenphp
docker-compose -f docker-compose.prod.yml logs -f caddy
docker-compose -f docker-compose.prod.yml logs -f queue
docker-compose -f docker-compose.prod.yml logs -f scheduler
```

**Rebuild assets after code changes:**
```bash
docker-compose -f docker-compose.prod.yml up node --build
docker-compose -f docker-compose.prod.yml restart caddy
```

**Run migrations:**
```bash
docker-compose -f docker-compose.prod.yml exec frankenphp php artisan migrate --force
```

**Clear application cache:**
```bash
docker-compose -f docker-compose.prod.yml exec frankenphp php artisan config:clear
docker-compose -f docker-compose.prod.yml exec frankenphp php artisan route:clear
docker-compose -f docker-compose.prod.yml exec frankenphp php artisan view:clear
```

**Optimize for production:**
```bash
docker-compose -f docker-compose.prod.yml exec frankenphp php artisan config:cache
docker-compose -f docker-compose.prod.yml exec frankenphp php artisan route:cache
docker-compose -f docker-compose.prod.yml exec frankenphp php artisan view:cache
```

**Restart Octane server:**
```bash
docker-compose -f docker-compose.prod.yml restart frankenphp
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

- **frankenphp**: FrankenPHP with Laravel Octane (port 8000 internal, runs as www-data)
- **caddy**: Caddy web server with HTTP/3 support (ports 80/443, reads from `./docker/caddy/Caddyfile`)
- **node**: Node.js build service (runs `npm run build` once, then exits)
- **db**: PostgreSQL 16 with health checks (no exposed ports, internal only)
- **redis**: Redis 7 with password protection and health checks (no exposed ports, internal only)
- **queue**: Laravel queue worker running `php artisan queue:work redis` (runs as www-data)
- **scheduler**: Laravel task scheduler running `php artisan schedule:run` every 60 seconds (runs as www-data)

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
| `CADDY_DOMAIN` | N/A | `yourdomain.com` | Domain name for Caddy SSL (production) |
| `CADDY_EMAIL` | N/A | `admin@example.com` | Email for Let's Encrypt notifications (production) |

### Optional Variables

| Variable | Default | Description |
|----------|---------|-------------|
| `APP_PORT` | `8000` | Port for Caddy in development (maps to container port 80) |
| `DB_PORT` | `5432` (dev) | Database port (exposed in dev only, internal in prod) |
| `REDIS_PORT` | `6380` (dev) | Redis port (exposed in dev only, internal in prod) |
| `REDIS_PASSWORD` | `null` (dev) | Redis password (required in prod) |
| `OCTANE_SERVER` | `frankenphp` | Octane server type (frankenphp/swoole/roadrunner) |
| `UID` | `1000` (dev) | User ID for file permissions (dev only) |
| `GID` | `1000` (dev) | Group ID for file permissions (dev only) |

## Important Notes

### Database Host

⚠️ **Important**: In Docker, use `DB_HOST=db` (the service name), **NOT** `127.0.0.1` or `localhost`. Services communicate via Docker's internal network.

**Development:** Database port is exposed to host (default 5432) for direct access  
**Production:** Database port is internal only for security

### Development vs Production Differences

| Feature | Development | Production |
|---------|------------|------------|
| **Hot Reload** | ✅ Volume mounts enable instant code changes | ❌ Requires rebuild |
| **Debug Mode** | ✅ `APP_DEBUG=true` | ❌ `APP_DEBUG=false` |
| **Vite** | ✅ Dev server (`npm run dev`) | ❌ Build only (`npm run build`) |
| **Ports** | Exposed (DB, Redis, App) | Internal only (DB, Redis) |
| **User** | Custom UID/GID | `www-data` |
| **Restart Policy** | `unless-stopped` | `always` |
| **Volumes** | Full codebase mounted | Read-only + storage/cache only |
| **Scheduler** | ❌ Not included | ✅ Included |
| **Health Checks** | FrankenPHP only | DB, Redis, FrankenPHP |
| **HTTPS** | Port 8443 (dev cert) | Ports 80/443 (Let's Encrypt) |

### SSL/HTTPS

**Development:**
- HTTPS available on port 8443 (self-signed certificate)
- Access via `https://localhost:8443`
- HTTP/3 (QUIC) enabled on port 8443/udp

**Production:**
1. Set `CADDY_DOMAIN` and `CADDY_EMAIL` in your `.env` file (or as environment variables)
2. Caddy automatically obtains SSL certificates from Let's Encrypt
3. HTTP/3 (QUIC) is automatically enabled on port 443/udp
4. Update `APP_URL` to `https://yourdomain.com`

**Note:** Ensure ports 80 and 443 (TCP and UDP) are open in your firewall for Caddy to function properly in production.

## Troubleshooting

### Port Already in Use

If port 8000 is taken, change it in `.env`:
```bash
APP_PORT=8001
```

If port 5173 (Vite) is taken, you may need to stop other Vite instances or change the port mapping in `docker-compose.dev.yml`.

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
- Check Caddy logs: `docker-compose -f docker-compose.dev.yml logs caddy`
- Restart Caddy: `docker-compose -f docker-compose.dev.yml restart caddy`

**Production:**
- Rebuild assets: `docker-compose -f docker-compose.prod.yml up node --build` (node service runs once and exits)
- Restart Caddy: `docker-compose -f docker-compose.prod.yml restart caddy`
- Clear browser cache

**Note:** The production node service is a one-time build service. After building assets, it exits. To rebuild, run the command above again.

### HTTP/3 Verification

To verify HTTP/3 is working:
1. Use browser developer tools (Chrome: Network tab → Protocol column should show "h3")
2. Visit https://tools.keycdn.com/http3-test
3. Check Caddy logs: `docker-compose -f docker-compose.prod.yml logs caddy | grep http3`

### Octane Worker Management

Octane workers are managed automatically. To restart Octane:
```bash
docker-compose -f docker-compose.prod.yml restart frankenphp
```

To check Octane status:
```bash
docker-compose -f docker-compose.prod.yml exec frankenphp php artisan octane:status
```

### Permission Issues

**Development:**
```bash
# Fix storage permissions
docker-compose -f docker-compose.dev.yml exec frankenphp chmod -R 755 storage bootstrap/cache
```

**Production:**
Production containers run as `www-data` user, so permissions should be handled correctly. If you encounter issues:
```bash
# Check ownership
docker-compose -f docker-compose.prod.yml exec frankenphp ls -la storage

# Fix if needed (run from host)
sudo chown -R www-data:www-data storage bootstrap/cache
```

### Redis Connection Issues

**Development:** 
- Redis runs without password on port ${REDIS_PORT:-6380} (mapped from container port 6379)
- Accessible from host at `localhost:6380`

**Production:** 
- Redis requires password protection
- Set `REDIS_PASSWORD` in `.env` and ensure it matches docker-compose
- Redis is not exposed to host (internal only)
- Access from other containers using `redis:6379` with password

### View Container Logs

```bash
# All services
docker-compose -f docker-compose.dev.yml logs -f

# Specific service
docker-compose -f docker-compose.dev.yml logs -f frankenphp
docker-compose -f docker-compose.dev.yml logs -f caddy
docker-compose -f docker-compose.dev.yml logs -f node

# Production services
docker-compose -f docker-compose.prod.yml logs -f frankenphp
docker-compose -f docker-compose.prod.yml logs -f caddy
```

## Updating Dependencies

### PHP Dependencies

```bash
# Update Composer packages
docker-compose -f docker-compose.dev.yml exec frankenphp composer update

# Install new package
docker-compose -f docker-compose.dev.yml exec frankenphp composer require vendor/package
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

