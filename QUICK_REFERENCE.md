# Quick Reference Guide

## Woodpecker CI Setup Summary

### Required Secrets in Woodpecker UI

Go to Repository Settings → Secrets and add:

| Secret Name | Example Value |
|-------------|---------------|
| `deploy_host` | `demo.schedulli.com` |
| `deploy_user` | `root` |
| `deploy_path` | `/var/www/schedulli` |
| `deploy_ssh_key` | Your SSH private key |

---

## Server Setup Commands (One-Time)

```bash
# 1. SSH into server
ssh root@demo.schedulli.com

# 2. Create deployment directory
mkdir -p /var/www/schedulli
cd /var/www/schedulli

# 3. Create .env file (copy from local or use the example in DEPLOYMENT_GUIDE.md)
nano .env

# 4. Create necessary directories
mkdir -p storage/{app,framework,logs}
mkdir -p storage/framework/{cache,sessions,views}
mkdir -p storage/app/{public,private}
mkdir -p bootstrap/cache
chmod -R 775 storage bootstrap/cache
chown -R www-data:www-data storage bootstrap/cache

# 5. Setup Nginx (see DEPLOYMENT_GUIDE.md for full config)
nano /etc/nginx/sites-available/demo.schedulli.com
ln -s /etc/nginx/sites-available/demo.schedulli.com /etc/nginx/sites-enabled/
nginx -t
systemctl reload nginx
```

---

## Deployment Trigger

Simply push to master branch:

```bash
git add .
git commit -m "your commit message"
git push origin master
```

Woodpecker will automatically:
1. Build frontend assets
2. Deploy to server
3. Build Docker containers
4. Run migrations
5. Cache configs

---

## Useful Server Commands

### Check Container Status
```bash
ssh root@demo.schedulli.com
cd /var/www/schedulli
docker-compose -f docker-compose.prod.yml ps
```

### View Logs
```bash
# All services
docker-compose -f docker-compose.prod.yml logs -f

# Specific service
docker-compose -f docker-compose.prod.yml logs -f app
docker-compose -f docker-compose.prod.yml logs -f nginx
docker-compose -f docker-compose.prod.yml logs -f db
```

### Restart Services
```bash
# Restart all
docker-compose -f docker-compose.prod.yml restart

# Restart specific service
docker-compose -f docker-compose.prod.yml restart app
```

### Run Artisan Commands
```bash
docker-compose -f docker-compose.prod.yml exec app php artisan [command]

# Examples:
docker-compose -f docker-compose.prod.yml exec app php artisan config:clear
docker-compose -f docker-compose.prod.yml exec app php artisan migrate
docker-compose -f docker-compose.prod.yml exec app php artisan tinker
```

### Manual Deployment
```bash
cd /var/www/schedulli
./deploy.sh
```

### Access Container Shell
```bash
docker-compose -f docker-compose.prod.yml exec app sh
```

---

## Troubleshooting

### Pipeline Failed
1. Check Woodpecker logs at `woodpecker.schedulli.com`
2. Verify secrets are correctly set
3. Test SSH connection: `ssh -i ~/.ssh/id_rsa root@demo.schedulli.com`

### Site Not Loading
```bash
# Check containers
docker-compose -f docker-compose.prod.yml ps

# Check Nginx
systemctl status nginx
tail -f /var/log/nginx/demo.schedulli.com.error.log

# Check app logs
docker-compose -f docker-compose.prod.yml logs app
```

### Fix Permissions
```bash
cd /var/www/schedulli
chown -R www-data:www-data storage bootstrap/cache
chmod -R 775 storage bootstrap/cache
```

### Rebuild Everything
```bash
cd /var/www/schedulli
docker-compose -f docker-compose.prod.yml down
docker-compose -f docker-compose.prod.yml build --no-cache
docker-compose -f docker-compose.prod.yml up -d
```

---

## File Locations

- **Woodpecker Pipeline**: `.woodpecker/deploy.yaml`
- **Deployment Script**: `deploy.sh` (deployed to server)
- **Server .env**: `/var/www/schedulli/.env` (on server)
- **Nginx Config**: `/etc/nginx/sites-available/demo.schedulli.com` (on server)
- **Docker Compose**: `docker-compose.prod.yml`

---

## Important Notes

- ⚠️ Never commit `.env` file to repository
- ⚠️ Keep your SSH keys secure
- ⚠️ Backup your `.env` file on the server
- ✅ SSL is recommended - use certbot for free certificates
- ✅ Test deployments in a staging environment first if possible

