<?php

use App\Http\Controllers\AppointmentController;
use App\Http\Controllers\CustomerController;
use App\Http\Controllers\CustomerServiceController;
use App\Http\Controllers\ExpertController;
use Illuminate\Support\Facades\Route;

Route::middleware(['auth'])->group(function () {
    Route::apiResource('experts', ExpertController::class);
    Route::apiResource('customers', CustomerController::class);
    Route::apiResource('appointments', AppointmentController::class);
    Route::get('/customer-service', [CustomerServiceController::class, 'index']);
});
