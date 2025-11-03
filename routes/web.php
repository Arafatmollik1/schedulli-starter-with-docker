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
        $totalCustomers = \App\Models\Customer::count();
        $totalExperts = \App\Models\Expert::where('status', 'active')->count();
        $upcomingAppointmentsCount = \App\Models\Appointment::where('scheduled_at', '>', now())
            ->where('status', '!=', 'cancelled')
            ->count();
        $todayAppointmentsCount = \App\Models\Appointment::whereDate('scheduled_at', today())
            ->where('status', '!=', 'cancelled')
            ->count();

        $expertsWithUpcomingAppointments = \App\Models\Expert::with(['appointments' => function ($query) {
            $query->where('scheduled_at', '>', now())
                ->where('status', '!=', 'cancelled')
                ->orderBy('scheduled_at', 'asc')
                ->limit(3)
                ->with('customer');
        }])
            ->whereHas('appointments', function ($query) {
                $query->where('scheduled_at', '>', now())
                    ->where('status', '!=', 'cancelled');
            })
            ->where('status', 'active')
            ->get()
            ->map(function ($expert) {
                return [
                    'id' => $expert->id,
                    'name' => $expert->name,
                    'specialty' => $expert->specialty,
                    'email' => $expert->email,
                    'upcoming_appointments' => $expert->appointments->map(function ($appointment) {
                        return [
                            'id' => $appointment->id,
                            'scheduled_at' => $appointment->scheduled_at->toISOString(),
                            'customer_name' => $appointment->customer->name,
                            'duration_minutes' => $appointment->duration_minutes,
                            'status' => $appointment->status,
                        ];
                    }),
                ];
            });

        return Inertia::render('dashboard', [
            'statistics' => [
                'total_customers' => $totalCustomers,
                'total_experts' => $totalExperts,
                'upcoming_appointments' => $upcomingAppointmentsCount,
                'today_appointments' => $todayAppointmentsCount,
            ],
            'experts_with_appointments' => $expertsWithUpcomingAppointments,
        ]);
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
