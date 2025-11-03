<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Laravel\WorkOS\Http\Middleware\ValidateSessionWithWorkOS;

Route::get('/', function () {
    return Inertia::render('welcome');
})->name('home');

Route::middleware([
    'auth',
    ValidateSessionWithWorkOS::class,
])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');

    Route::get('/experts', [\App\Http\Controllers\ExpertController::class, 'index'])->name('experts.index');
    Route::get('/experts/{expert}', [\App\Http\Controllers\ExpertController::class, 'show'])->name('experts.show');
    Route::get('/customers', [\App\Http\Controllers\CustomerController::class, 'index'])->name('customers.index');
    Route::get('/customers/{customer}', [\App\Http\Controllers\CustomerController::class, 'show'])->name('customers.show');
    Route::get('/appointments', [\App\Http\Controllers\AppointmentController::class, 'index'])->name('appointments.index');
    Route::get('/appointments/{appointment}', [\App\Http\Controllers\AppointmentController::class, 'show'])->name('appointments.show');
    Route::get('/customer-service', [\App\Http\Controllers\CustomerServiceController::class, 'index'])->name('customer-service.index');
});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
