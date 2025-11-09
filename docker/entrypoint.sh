#!/bin/sh
set -e

# Wait for database to be ready
echo "Waiting for database..."
DB_HOST="${DB_HOST:-db}"
DB_PORT="${DB_PORT:-5432}"
DB_USERNAME="${DB_USERNAME:-postgres}"
DB_PASSWORD="${DB_PASSWORD:-postgres}"
DB_DATABASE="${DB_DATABASE:-postgres}"

# First wait for PostgreSQL to accept connections (using postgres database)
until php -r "
try {
    \$pdo = new PDO(
        'pgsql:host=${DB_HOST};port=${DB_PORT};dbname=postgres',
        '${DB_USERNAME}',
        '${DB_PASSWORD}'
    );
    \$pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    echo 'Database server is ready!' . PHP_EOL;
    exit(0);
} catch (PDOException \$e) {
    exit(1);
}
" 2>/dev/null; do
    echo "Database is unavailable - sleeping"
    sleep 2
done

# Then verify the actual database exists
echo "Verifying database '${DB_DATABASE}' exists..."
until php -r "
try {
    \$pdo = new PDO(
        'pgsql:host=${DB_HOST};port=${DB_PORT};dbname=${DB_DATABASE}',
        '${DB_USERNAME}',
        '${DB_PASSWORD}'
    );
    \$pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    echo 'Database \"${DB_DATABASE}\" is ready!' . PHP_EOL;
    exit(0);
} catch (PDOException \$e) {
    exit(1);
}
" 2>/dev/null; do
    echo "Database '${DB_DATABASE}' is not ready yet - sleeping"
    sleep 2
done

# Run Laravel setup commands only for the main app service
# Skip for queue workers and scheduler
if [ "$SKIP_SETUP" != "true" ]; then
    # Install/update Composer dependencies if vendor directory doesn't exist or Octane is missing
    if [ ! -d "vendor" ]; then
        echo "Installing Composer dependencies..."
        composer install --no-interaction --prefer-dist || composer update --no-interaction --prefer-dist
    elif [ ! -d "vendor/laravel/octane" ]; then
        echo "Octane package missing, updating Composer dependencies..."
        composer update --no-interaction --prefer-dist
    fi
    
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
    
    # Publish Octane configuration if not exists
    if [ ! -f config/octane.php ]; then
        echo "Publishing Octane configuration..."
        php artisan octane:install --server=frankenphp --no-interaction || true
    fi
fi

# Execute the provided command
exec "$@"

