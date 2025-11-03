<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreExpertRequest;
use App\Http\Requests\UpdateExpertRequest;
use App\Http\Resources\ExpertResource;
use App\Models\Expert;
use Illuminate\Http\JsonResponse;
use Inertia\Inertia;
use Inertia\Response;

class ExpertController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(): Response|JsonResponse
    {
        $experts = Expert::paginate(10);

        if (request()->wantsJson()) {
            return ExpertResource::collection($experts)->response();
        }

        return Inertia::render('experts/index', [
            'experts' => $experts,
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show(Expert $expert): Response|JsonResponse
    {
        $expert->load('appointments.customer');

        if (request()->wantsJson()) {
            return (new ExpertResource($expert))->response();
        }

        return Inertia::render('experts/show', [
            'expert' => $expert,
        ]);
    }

    /**
     * Store a newly created resource in storage (API).
     */
    public function store(StoreExpertRequest $request): JsonResponse
    {
        $expert = Expert::create($request->validated());

        return (new ExpertResource($expert))->response()->setStatusCode(201);
    }

    /**
     * Update the specified resource in storage (API).
     */
    public function update(UpdateExpertRequest $request, Expert $expert): JsonResponse
    {
        $expert->update($request->validated());

        return (new ExpertResource($expert))->response();
    }

    /**
     * Remove the specified resource from storage (API).
     */
    public function destroy(Expert $expert): JsonResponse
    {
        $expert->delete();

        return response()->json(['message' => 'Expert deleted successfully'], 200);
    }
}
