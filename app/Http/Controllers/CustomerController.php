<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreCustomerRequest;
use App\Http\Requests\UpdateCustomerRequest;
use App\Http\Resources\CustomerResource;
use App\Models\Customer;
use Illuminate\Http\JsonResponse;
use Inertia\Inertia;
use Inertia\Response;

class CustomerController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(): Response|JsonResponse
    {
        $customers = Customer::paginate(10);

        if (request()->wantsJson()) {
            return CustomerResource::collection($customers)->response();
        }

        return Inertia::render('customers/index', [
            'customers' => $customers,
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show(Customer $customer): Response|JsonResponse
    {
        $customer->load('appointments.expert');

        if (request()->wantsJson()) {
            return (new CustomerResource($customer))->response();
        }

        return Inertia::render('customers/show', [
            'customer' => $customer,
        ]);
    }

    /**
     * Store a newly created resource in storage (API).
     */
    public function store(StoreCustomerRequest $request): JsonResponse
    {
        $customer = Customer::create($request->validated());

        return (new CustomerResource($customer))->response()->setStatusCode(201);
    }

    /**
     * Update the specified resource in storage (API).
     */
    public function update(UpdateCustomerRequest $request, Customer $customer): JsonResponse
    {
        $customer->update($request->validated());

        return (new CustomerResource($customer))->response();
    }

    /**
     * Remove the specified resource from storage (API).
     */
    public function destroy(Customer $customer): JsonResponse
    {
        $customer->delete();

        return response()->json(['message' => 'Customer deleted successfully'], 200);
    }
}
