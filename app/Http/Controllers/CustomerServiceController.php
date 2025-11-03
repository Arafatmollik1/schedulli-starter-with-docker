<?php

namespace App\Http\Controllers;

use Illuminate\Http\JsonResponse;
use Inertia\Inertia;
use Inertia\Response;

class CustomerServiceController extends Controller
{
    /**
     * Display customer service data.
     */
    public function index(): Response|JsonResponse
    {
        $dummyData = [
            'tickets' => [
                ['id' => 1, 'subject' => 'Login Issue', 'status' => 'open', 'priority' => 'high', 'created_at' => '2025-11-01 10:00:00'],
                ['id' => 2, 'subject' => 'Payment Problem', 'status' => 'resolved', 'priority' => 'medium', 'created_at' => '2025-11-02 14:30:00'],
                ['id' => 3, 'subject' => 'Account Setup', 'status' => 'open', 'priority' => 'low', 'created_at' => '2025-11-03 09:15:00'],
                ['id' => 4, 'subject' => 'Feature Request', 'status' => 'in_progress', 'priority' => 'medium', 'created_at' => '2025-11-03 11:45:00'],
            ],
            'statistics' => [
                'total_tickets' => 150,
                'open_tickets' => 23,
                'resolved_today' => 5,
                'average_response_time' => '2.5 hours',
            ],
            'recent_activity' => [
                ['id' => 1, 'type' => 'ticket_created', 'description' => 'New ticket created by John Doe', 'time' => '5 minutes ago'],
                ['id' => 2, 'type' => 'ticket_resolved', 'description' => 'Ticket #123 resolved by Support Team', 'time' => '1 hour ago'],
                ['id' => 3, 'type' => 'ticket_updated', 'description' => 'Ticket #456 updated with new information', 'time' => '2 hours ago'],
            ],
        ];

        if (request()->wantsJson()) {
            return response()->json($dummyData);
        }

        return Inertia::render('customer-service/index', $dummyData);
    }
}
