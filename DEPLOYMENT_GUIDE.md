# Woodpecker CI Deployment Guide

This guide will help you set up automatic deployment to `demo.schedulli.com` when you push to the `master` branch.

## Prerequisites

- Woodpecker CI running at `woodpecker.schedulli.com`
- SSH access to `demo.schedulli.com`
- Docker and Docker Compose installed on production server
- Your repository connected to Woodpecker

---

## Step 1: Woodpecker UI Setup

### 1.1 Activate Your Repository

1. Go to `https://woodpecker.schedulli.com`
2. Click on **"Repositories"** in the sidebar
3. Find your `schedulli` repository and click **"Enable"** or **"Activate"**
4. This will set up the webhook automatically

### 1.2 Configure Repository Secrets

Navigate to your repository settings in Woodpecker UI, then go to **"Secrets"** section. Add the following secrets:

| Secret Name | Value | Description |
|-------------|-------|-------------|
| `deploy_host` | `demo.schedulli.com` | Your production server hostname |
| `deploy_user` | `root` (or your user) | SSH user for deployment |
| `deploy_path` | `/var/www/schedulli` | Path where app will be deployed |
| `deploy_ssh_key` | `(your private key)` | SSH private key for authentication |

**To get your SSH key:**
```bash
# On your local machine or CI server
cat ~/.ssh/id_rsa
# Copy the entire output including BEGIN and END lines
```

**Note:** Make sure the public key (`id_rsa.pub`) is added to `~/.ssh/authorized_keys` on the production server.

---

## Step 2: Server Setup (demo.schedulli.com)

### 2.1 Create Deployment Directory

SSH into your production server and create the deployment directory:

```bash
ssh root@demo.schedulli.com

# Create application directory
mkdir -p /var/www/schedulli
cd /var/www/schedulli

# Set proper ownership (adjust user as needed)
chown -R www-data:www-data /var/www/schedulli
# OR if using your user:
chown -R $USER:$USER /var/www/schedulli
```

### 2.2 Create Production .env File

Create the `.env` file on the server with production settings:

```bash
cd /var/www/schedulli
nano .env
```

Add the following content (adjust values):

```env
APP_NAME="Schedulli"
APP_ENV=production
APP_KEY=base64:YOUR_APP_KEY_HERE
APP_DEBUG=false
APP_TIMEZONE=UTC
APP_URL=https://demo.schedulli.com

APP_LOCALE=en
APP_FALLBACK_LOCALE=en
APP_FAKER_LOCALE=en_US

APP_MAINTENANCE_DRIVER=file
APP_MAINTENANCE_STORE=database

# Logging
LOG_CHANNEL=stack
LOG_STACK=single
LOG_DEPRECATIONS_CHANNEL=null
LOG_LEVEL=error

# Database
DB_CONNECTION=pgsql
DB_HOST=db
DB_PORT=5432
DB_DATABASE=schedulli_prod
DB_USERNAME=schedulli_user
DB_PASSWORD=YOUR_SECURE_PASSWORD_HERE

# Redis
REDIS_HOST=redis
REDIS_PASSWORD=YOUR_REDIS_PASSWORD_HERE
REDIS_PORT=6379

# Cache & Session
CACHE_STORE=redis
SESSION_DRIVER=redis
SESSION_LIFETIME=120
SESSION_ENCRYPT=false
SESSION_PATH=/
SESSION_DOMAIN=demo.schedulli.com

# Queue
QUEUE_CONNECTION=redis

# Mail (configure as needed)
MAIL_MAILER=log
MAIL_HOST=127.0.0.1
MAIL_PORT=2525
MAIL_USERNAME=null
MAIL_PASSWORD=null
MAIL_ENCRYPTION=null
MAIL_FROM_ADDRESS="noreply@demo.schedulli.com"
MAIL_FROM_NAME="${APP_NAME}"

# Docker Ports
APP_PORT=80
APP_SSL_PORT=443
```

**Important:** Generate a secure APP_KEY:
```bash
# On your local machine with Laravel installed:
php artisan key:generate --show
# Copy the output to APP_KEY in your .env file
```

Save and exit (Ctrl+X, then Y, then Enter).

### 2.3 Set .env File Permissions

```bash
chmod 600 /var/www/schedulli/.env
chown www-data:www-data /var/www/schedulli/.env
```

### 2.4 Create Storage Directories

```bash
cd /var/www/schedulli
mkdir -p storage/{app,framework,logs}
mkdir -p storage/framework/{cache,sessions,views}
mkdir -p storage/app/{public,private}
mkdir -p bootstrap/cache

chmod -R 775 storage
chmod -R 775 bootstrap/cache
chown -R www-data:www-data storage bootstrap/cache
```

---

## Step 3: Nginx Configuration on Server

### 3.1 Install Nginx (if not already installed)

```bash
apt update
apt install nginx -y
```

### 3.2 Create Nginx Configuration

Create a new configuration file:

```bash
nano /etc/nginx/sites-available/demo.schedulli.com
```

Add the following configuration:

```nginx
server {
    listen 80;
    server_name demo.schedulli.com www.demo.schedulli.com;

    # Redirect to HTTPS (uncomment after SSL setup)
    # return 301 https://$server_name$request_uri;

    # Proxy to Docker
    location / {
        proxy_pass http://localhost:80;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        
        # WebSocket support (if needed)
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";
        
        # Timeouts
        proxy_connect_timeout 60s;
        proxy_send_timeout 60s;
        proxy_read_timeout 60s;
    }

    # Increase client max body size
    client_max_body_size 50M;

    access_log /var/log/nginx/demo.schedulli.com.access.log;
    error_log /var/log/nginx/demo.schedulli.com.error.log;
}

# HTTPS Configuration (uncomment after SSL setup with certbot)
# server {
#     listen 443 ssl http2;
#     server_name demo.schedulli.com www.demo.schedulli.com;
#
#     ssl_certificate /etc/letsencrypt/live/demo.schedulli.com/fullchain.pem;
#     ssl_certificate_key /etc/letsencrypt/live/demo.schedulli.com/privkey.pem;
#     ssl_protocols TLSv1.2 TLSv1.3;
#     ssl_ciphers HIGH:!aNULL:!MD5;
#     ssl_prefer_server_ciphers on;
#
#     location / {
#         proxy_pass http://localhost:80;
#         proxy_set_header Host $host;
#         proxy_set_header X-Real-IP $remote_addr;
#         proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
#         proxy_set_header X-Forwarded-Proto $scheme;
#         
#         proxy_http_version 1.1;
#         proxy_set_header Upgrade $http_upgrade;
#         proxy_set_header Connection "upgrade";
#         
#         proxy_connect_timeout 60s;
#         proxy_send_timeout 60s;
#         proxy_read_timeout 60s;
#     }
#
#     client_max_body_size 50M;
#
#     access_log /var/log/nginx/demo.schedulli.com.access.log;
#     error_log /var/log/nginx/demo.schedulli.com.error.log;
# }
```

### 3.3 Enable the Site

```bash
# Create symbolic link to enable site
ln -s /etc/nginx/sites-available/demo.schedulli.com /etc/nginx/sites-enabled/

# Test configuration
nginx -t

# Reload Nginx
systemctl reload nginx
```

### 3.4 Setup SSL (Optional but Recommended)

```bash
# Install certbot
apt install certbot python3-certbot-nginx -y

# Get SSL certificate
certbot --nginx -d demo.schedulli.com -d www.demo.schedulli.com

# Certbot will automatically configure SSL in your nginx config
# It will also set up auto-renewal
```

---

## Step 4: Test the Deployment Pipeline

### 4.1 Make a Test Commit

```bash
# On your local machine
cd /home/arafat/ArafatPersonal/schedulli

# Make a small change (optional)
echo "# Production Deployment" >> README.md

# Commit and push to master
git add .
git commit -m "test: trigger deployment pipeline"
git push origin master
```

### 4.2 Monitor the Deployment

1. Go to `https://woodpecker.schedulli.com`
2. Click on your repository
3. You should see a new pipeline running
4. Watch the build logs to see progress

### 4.3 Verify Deployment

Once the pipeline completes:

```bash
# Check if containers are running
ssh root@demo.schedulli.com "cd /var/www/schedulli && docker-compose -f docker-compose.prod.yml ps"

# Check application logs
ssh root@demo.schedulli.com "cd /var/www/schedulli && docker-compose -f docker-compose.prod.yml logs -f app"
```

Visit `http://demo.schedulli.com` in your browser to see your application.

---

## Step 5: Environment Management Best Practices

### 5.1 Never Commit .env to Repository

Your `.env` file should **NEVER** be in git. It's already in `.gitignore`.

### 5.2 Managing .env Changes

When you need to add new environment variables:

1. **Update `.env.example` in your repository** with the new variable (without sensitive values)
2. **SSH into the server** and manually update `/var/www/schedulli/.env`
3. **Restart the containers** to pick up new variables

```bash
ssh root@demo.schedulli.com
cd /var/www/schedulli
nano .env
# Make your changes
docker-compose -f docker-compose.prod.yml restart
```

### 5.3 Backup Your .env

```bash
# On the server
cp /var/www/schedulli/.env /var/www/schedulli/.env.backup
```

---

## Troubleshooting

### Pipeline Fails at SSH Connection

- Verify the SSH key is correct in Woodpecker secrets
- Ensure the public key is in `~/.ssh/authorized_keys` on the server
- Check SSH connectivity: `ssh -i ~/.ssh/id_rsa root@demo.schedulli.com`

### Containers Won't Start

```bash
# Check logs
docker-compose -f docker-compose.prod.yml logs

# Check specific service
docker-compose -f docker-compose.prod.yml logs app

# Rebuild containers
docker-compose -f docker-compose.prod.yml down
docker-compose -f docker-compose.prod.yml build --no-cache
docker-compose -f docker-compose.prod.yml up -d
```

### Permission Issues

```bash
cd /var/www/schedulli
chown -R www-data:www-data storage bootstrap/cache
chmod -R 775 storage bootstrap/cache
```

### Database Connection Issues

- Verify database credentials in `.env`
- Check if database container is running
- Check database logs: `docker-compose -f docker-compose.prod.yml logs db`

### Can't Access Website

- Check if Nginx is running: `systemctl status nginx`
- Check Nginx error logs: `tail -f /var/log/nginx/demo.schedulli.com.error.log`
- Verify Docker containers are running: `docker ps`
- Check if port 80 is accessible: `netstat -tulpn | grep :80`

---

## Quick Reference Commands

```bash
# View running containers
docker-compose -f docker-compose.prod.yml ps

# View logs
docker-compose -f docker-compose.prod.yml logs -f

# Restart all services
docker-compose -f docker-compose.prod.yml restart

# Stop all services
docker-compose -f docker-compose.prod.yml down

# Start all services
docker-compose -f docker-compose.prod.yml up -d

# Run artisan commands
docker-compose -f docker-compose.prod.yml exec app php artisan [command]

# Access app container shell
docker-compose -f docker-compose.prod.yml exec app sh
```

---

## Summary

Your deployment pipeline is now configured to:

1. ✅ Trigger automatically on push to `master` branch
2. ✅ Build frontend assets
3. ✅ Deploy code to production server via SSH/rsync
4. ✅ Rebuild Docker containers
5. ✅ Run database migrations
6. ✅ Clear and cache configuration

Every time you push to `master`, your application will be automatically deployed to `demo.schedulli.com`!

