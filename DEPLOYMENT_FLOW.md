# Deployment Flow Diagram

## Overview
This document explains how the automated deployment works from push to production.

---

## The Flow

```
┌─────────────────────────────────────────────────────────────┐
│  Step 1: Developer Pushes to Master Branch                 │
│                                                             │
│  $ git push origin master                                   │
└────────────────────┬────────────────────────────────────────┘
                     │
                     ▼
┌─────────────────────────────────────────────────────────────┐
│  Step 2: GitHub/GitLab Webhook Triggers                    │
│                                                             │
│  Sends webhook to woodpecker.schedulli.com                  │
└────────────────────┬────────────────────────────────────────┘
                     │
                     ▼
┌─────────────────────────────────────────────────────────────┐
│  Step 3: Woodpecker CI Starts Pipeline                     │
│                                                             │
│  Reads: .woodpecker/deploy.yaml                             │
│  Checks: Event = push && Branch = master                    │
└────────────────────┬────────────────────────────────────────┘
                     │
                     ▼
┌─────────────────────────────────────────────────────────────┐
│  Step 4: Build Frontend (Node Container)                   │
│                                                             │
│  - npm ci                                                   │
│  - npm run build                                            │
│  - Creates optimized production assets                      │
└────────────────────┬────────────────────────────────────────┘
                     │
                     ▼
┌─────────────────────────────────────────────────────────────┐
│  Step 5: Deploy to Production Server                       │
│                                                             │
│  Using Docker container with SSH & rsync:                   │
│  - Setup SSH authentication                                 │
│  - Rsync code to demo.schedulli.com:/var/www/schedulli/    │
│  - Excludes: .git, node_modules, .env, logs, cache         │
└────────────────────┬────────────────────────────────────────┘
                     │
                     ▼
┌─────────────────────────────────────────────────────────────┐
│  Step 6: Execute deploy.sh on Server                       │
│                                                             │
│  SSH into demo.schedulli.com and run:                       │
│                                                             │
│  1. Stop containers: docker-compose down                    │
│  2. Build images:    docker-compose build --no-cache        │
│  3. Start services:  docker-compose up -d                   │
│  4. Run migrations:  php artisan migrate --force            │
│  5. Cache configs:   php artisan config:cache               │
│  6. Cache routes:    php artisan route:cache                │
│  7. Cache views:     php artisan view:cache                 │
└────────────────────┬────────────────────────────────────────┘
                     │
                     ▼
┌─────────────────────────────────────────────────────────────┐
│  Step 7: Docker Containers Running                         │
│                                                             │
│  Services running on demo.schedulli.com:                    │
│  - app (PHP-FPM)                                            │
│  - nginx (Web Server)                                       │
│  - db (PostgreSQL)                                          │
│  - redis (Cache & Queue)                                    │
│  - queue (Queue Worker)                                     │
│  - scheduler (Task Scheduler)                               │
└────────────────────┬────────────────────────────────────────┘
                     │
                     ▼
┌─────────────────────────────────────────────────────────────┐
│  Step 8: Nginx Proxies Traffic                             │
│                                                             │
│  Internet → demo.schedulli.com:80                           │
│          → Nginx (server)                                   │
│          → Docker Nginx Container                           │
│          → PHP-FPM App Container                            │
│          → Response back to user                            │
└─────────────────────────────────────────────────────────────┘
```

---

## Components Diagram

```
┌─────────────────────────────────────────────────────────────┐
│                      Internet Users                         │
└────────────────────┬────────────────────────────────────────┘
                     │ HTTPS/HTTP
                     ▼
┌─────────────────────────────────────────────────────────────┐
│              demo.schedulli.com Server                      │
│                                                             │
│  ┌──────────────────────────────────────────────────────┐  │
│  │  Host Nginx (Port 80/443)                            │  │
│  │  /etc/nginx/sites-enabled/demo.schedulli.com         │  │
│  └──────────────────┬───────────────────────────────────┘  │
│                     │ Proxy                                 │
│                     ▼                                       │
│  ┌──────────────────────────────────────────────────────┐  │
│  │  Docker Compose Network                              │  │
│  │                                                       │  │
│  │  ┌────────────┐  ┌────────────┐  ┌────────────┐    │  │
│  │  │   nginx    │  │    app     │  │     db     │    │  │
│  │  │  (Alpine)  │◄─┤ (PHP-FPM)  │◄─┤ (Postgres) │    │  │
│  │  │   :80      │  │   :9000    │  │   :5432    │    │  │
│  │  └────────────┘  └─────┬──────┘  └────────────┘    │  │
│  │                        │                             │  │
│  │                        ▼                             │  │
│  │  ┌────────────┐  ┌────────────┐  ┌────────────┐    │  │
│  │  │   redis    │  │   queue    │  │ scheduler  │    │  │
│  │  │  :6379     │◄─┤  (worker)  │  │  (cron)    │    │  │
│  │  └────────────┘  └────────────┘  └────────────┘    │  │
│  │                                                       │  │
│  └───────────────────────────────────────────────────────┘  │
│                                                             │
│  Application Files: /var/www/schedulli/                    │
│  Environment File:  /var/www/schedulli/.env                │
└─────────────────────────────────────────────────────────────┘
```

---

## File Structure on Server

```
/var/www/schedulli/
├── .env                          # Environment variables (not in git!)
├── deploy.sh                     # Deployment script
├── docker-compose.prod.yml       # Production Docker setup
├── Dockerfile                    # App container image
├── Dockerfile.node               # Node build image
├── app/                          # Laravel application
├── public/                       # Web root
│   └── build/                    # Built frontend assets
├── storage/                      # Application storage
│   ├── app/
│   ├── framework/
│   └── logs/
├── bootstrap/cache/              # Bootstrap cache
└── vendor/                       # PHP dependencies
```

---

## Secrets Used by Pipeline

These are configured in Woodpecker UI (Repository Settings → Secrets):

| Secret | Purpose |
|--------|---------|
| `deploy_host` | Target server hostname (demo.schedulli.com) |
| `deploy_user` | SSH user for deployment (e.g., root) |
| `deploy_path` | Application path on server (/var/www/schedulli) |
| `deploy_ssh_key` | Private SSH key for authentication |

---

## Pipeline Trigger Conditions

The pipeline runs when:
- ✅ Event type is `push`
- ✅ Branch is `master`

It will NOT run for:
- ❌ Pull requests
- ❌ Other branches (develop, feature/*, etc.)
- ❌ Tags

To change this, edit `.woodpecker/deploy.yaml`

---

## Build Time Estimates

| Step | Estimated Time |
|------|----------------|
| Frontend Build | 1-3 minutes |
| Code Deployment (rsync) | 10-30 seconds |
| Docker Build | 2-5 minutes |
| Container Startup | 30 seconds |
| Migrations & Cache | 10-20 seconds |
| **Total** | **4-10 minutes** |

---

## Rollback Strategy

If a deployment fails or introduces issues:

### Option 1: Quick Fix and Redeploy
```bash
# Fix the issue locally
git add .
git commit -m "fix: issue description"
git push origin master
# Pipeline will redeploy automatically
```

### Option 2: Revert Commit
```bash
# Revert the problematic commit
git revert HEAD
git push origin master
# Pipeline will redeploy previous version
```

### Option 3: Manual Rollback on Server
```bash
ssh root@demo.schedulli.com
cd /var/www/schedulli

# Checkout previous commit
git checkout HEAD~1

# Redeploy
./deploy.sh
```

---

## Monitoring the Deployment

### View Pipeline Progress
1. Go to https://woodpecker.schedulli.com
2. Navigate to your repository
3. Click on the running pipeline
4. Watch real-time logs

### View Server Logs
```bash
ssh root@demo.schedulli.com
cd /var/www/schedulli

# Application logs
docker-compose -f docker-compose.prod.yml logs -f app

# Nginx access logs (on host)
tail -f /var/log/nginx/demo.schedulli.com.access.log

# Nginx error logs (on host)
tail -f /var/log/nginx/demo.schedulli.com.error.log
```

---

## Security Considerations

✅ **Good Practices in This Setup:**
- SSH keys used instead of passwords
- Secrets stored in Woodpecker, not in code
- `.env` excluded from repository
- Non-root user (www-data) runs PHP-FPM
- Nginx security headers configured

⚠️ **Additional Recommendations:**
- Set up SSL certificates (use certbot)
- Enable firewall (ufw) on server
- Regularly update Docker images
- Set up monitoring (e.g., Sentry, New Relic)
- Create database backups
- Use strong passwords for DB & Redis

---

## Next Steps / Improvements

Consider adding these later:

- [ ] Automated tests before deployment
- [ ] Staging environment
- [ ] Database backup before migrations
- [ ] Slack/Discord notifications
- [ ] Performance monitoring
- [ ] Error tracking (Sentry)
- [ ] CDN for static assets
- [ ] Redis caching layer
- [ ] Queue monitoring dashboard

