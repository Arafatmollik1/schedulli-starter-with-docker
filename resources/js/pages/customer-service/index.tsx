import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';

interface Ticket {
    id: number;
    subject: string;
    status: string;
    priority: string;
    created_at: string;
}

interface Props {
    tickets: Ticket[];
    statistics: {
        total_tickets: number;
        open_tickets: number;
        resolved_today: number;
        average_response_time: string;
    };
    recent_activity: Array<{
        id: number;
        type: string;
        description: string;
        time: string;
    }>;
}

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Customer Service',
        href: '/customer-service',
    },
];

export default function CustomerServiceIndex({ tickets, statistics, recent_activity }: Props) {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Customer Service" />
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                <div className="rounded-lg border border-sidebar-border/70 bg-sidebar p-6 dark:border-sidebar-border">
                    <h1 className="mb-4 text-2xl font-bold">Customer Service Dashboard</h1>
                    <div className="mb-6 grid gap-4 md:grid-cols-4">
                        <div className="rounded-md border border-sidebar-border/70 p-4 dark:border-sidebar-border">
                            <p className="text-sm text-sidebar-foreground/70">Total Tickets</p>
                            <p className="text-2xl font-bold">{statistics.total_tickets}</p>
                        </div>
                        <div className="rounded-md border border-sidebar-border/70 p-4 dark:border-sidebar-border">
                            <p className="text-sm text-sidebar-foreground/70">Open Tickets</p>
                            <p className="text-2xl font-bold">{statistics.open_tickets}</p>
                        </div>
                        <div className="rounded-md border border-sidebar-border/70 p-4 dark:border-sidebar-border">
                            <p className="text-sm text-sidebar-foreground/70">Resolved Today</p>
                            <p className="text-2xl font-bold">{statistics.resolved_today}</p>
                        </div>
                        <div className="rounded-md border border-sidebar-border/70 p-4 dark:border-sidebar-border">
                            <p className="text-sm text-sidebar-foreground/70">Avg Response Time</p>
                            <p className="text-2xl font-bold">{statistics.average_response_time}</p>
                        </div>
                    </div>
                    <div className="mb-6">
                        <h2 className="mb-2 text-lg font-semibold">Recent Tickets</h2>
                        <div className="space-y-2">
                            {tickets.map((ticket) => (
                                <div
                                    key={ticket.id}
                                    className="rounded-md border border-sidebar-border/70 p-3 dark:border-sidebar-border"
                                >
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <p className="font-semibold">{ticket.subject}</p>
                                            <p className="text-sm text-sidebar-foreground/70">
                                                Created: {ticket.created_at}
                                            </p>
                                        </div>
                                        <div className="flex gap-2">
                                            <span
                                                className={`rounded-full px-2 py-1 text-xs ${
                                                    ticket.priority === 'high'
                                                        ? 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
                                                        : ticket.priority === 'medium'
                                                          ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
                                                          : 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                                                }`}
                                            >
                                                {ticket.priority}
                                            </span>
                                            <span
                                                className={`rounded-full px-2 py-1 text-xs ${
                                                    ticket.status === 'open'
                                                        ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
                                                        : ticket.status === 'resolved'
                                                          ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                                                          : 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200'
                                                }`}
                                            >
                                                {ticket.status}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div>
                        <h2 className="mb-2 text-lg font-semibold">Recent Activity</h2>
                        <div className="space-y-2">
                            {recent_activity.map((activity) => (
                                <div
                                    key={activity.id}
                                    className="rounded-md border border-sidebar-border/70 p-3 dark:border-sidebar-border"
                                >
                                    <p className="text-sm">{activity.description}</p>
                                    <p className="text-xs text-sidebar-foreground/70">{activity.time}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}

