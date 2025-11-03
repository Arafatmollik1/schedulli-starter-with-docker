<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreAppointmentRequest;
use App\Http\Requests\UpdateAppointmentRequest;
use App\Http\Resources\AppointmentResource;
use App\Models\Appointment;
use Illuminate\Http\JsonResponse;
use Inertia\Inertia;
use Inertia\Response;

class AppointmentController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(): Response|JsonResponse
    {
        $appointments = Appointment::with(['expert', 'customer'])->paginate(10);

        if (request()->wantsJson()) {
            return AppointmentResource::collection($appointments)->response();
        }

        return Inertia::render('appointments/index', [
            'appointments' => $appointments,
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show(Appointment $appointment): Response|JsonResponse
    {
        $appointment->load(['expert', 'customer']);

        if (request()->wantsJson()) {
            return (new AppointmentResource($appointment))->response();
        }

        return Inertia::render('appointments/show', [
            'appointment' => $appointment,
        ]);
    }

    /**
     * Store a newly created resource in storage (API).
     */
    public function store(StoreAppointmentRequest $request): JsonResponse
    {
        $appointment = Appointment::create($request->validated());
        $appointment->load(['expert', 'customer']);

        return (new AppointmentResource($appointment))->response()->setStatusCode(201);
    }

    /**
     * Update the specified resource in storage (API).
     */
    public function update(UpdateAppointmentRequest $request, Appointment $appointment): JsonResponse
    {
        $appointment->update($request->validated());
        $appointment->load(['expert', 'customer']);

        return (new AppointmentResource($appointment))->response();
    }

    /**
     * Remove the specified resource from storage (API).
     */
    public function destroy(Appointment $appointment): JsonResponse
    {
        $appointment->delete();

        return response()->json(['message' => 'Appointment deleted successfully'], 200);
    }
}
