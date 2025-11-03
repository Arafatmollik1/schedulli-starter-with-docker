#!/bin/sh
set -e

# Wait for database to be ready
echo "Waiting for database..."
until php -r "
try {
    \$pdo = new PDO(
        'pgsql:host=${DB_HOST:-db};port=${DB_PORT:-5432}',
        '${DB_USERNAME:-postgres}',
        '${DB_PASSWORD:-postgres}'
    );
    \$pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    echo 'Database is ready!' . PHP_EOL;
    exit(0);
} catch (PDOException \$e) {
    exit(1);
}
" 2>/dev/null; do
    echo "Database is unavailable - sleeping"
    sleep 2
done

# Run Laravel setup commands only for the main app service
# Skip for queue workers and scheduler
if [ "$SKIP_SETUP" != "true" ]; then
    if [ "$APP_ENV" = "production" ]; then
        echo "Running production setup..."
        php artisan config:cache
        php artisan route:cache
        php artisan view:cache
    else
        echo "Running development setup..."
        php artisan config:clear
        php artisan route:clear
        php artisan view:clear
    fi

    # Run migrations
    php artisan migrate --force
fi

exec "$@"

