import AppLayout from '@/layouts/app-layout';
import { dashboard } from '@/routes';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: dashboard().url,
    },
];

interface ExpertWithAppointments {
    id: number;
    name: string;
    specialty: string;
    email: string;
    upcoming_appointments: Array<{
        id: number;
        scheduled_at: string;
        customer_name: string;
        duration_minutes: number;
        status: string;
    }>;
}

interface Props {
    statistics: {
        total_customers: number;
        total_experts: number;
        upcoming_appointments: number;
        today_appointments: number;
    };
    experts_with_appointments: ExpertWithAppointments[];
}

export default function Dashboard({ statistics, experts_with_appointments }: Props) {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Dashboard" />
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                <div className="grid auto-rows-min gap-4 md:grid-cols-3">
                    <div className="rounded-xl border border-sidebar-border/70 bg-sidebar p-6 dark:border-sidebar-border">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm text-sidebar-foreground/70">Total Customers</p>
                                <p className="mt-2 text-3xl font-bold">{statistics.total_customers}</p>
                            </div>
                            <div className="rounded-full bg-blue-100 p-3 dark:bg-blue-900">
                                <svg
                                    className="h-6 w-6 text-blue-600 dark:text-blue-400"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                                    />
                                </svg>
                            </div>
                        </div>
                    </div>

                    <div className="rounded-xl border border-sidebar-border/70 bg-sidebar p-6 dark:border-sidebar-border">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm text-sidebar-foreground/70">Active Experts</p>
                                <p className="mt-2 text-3xl font-bold">{statistics.total_experts}</p>
                            </div>
                            <div className="rounded-full bg-green-100 p-3 dark:bg-green-900">
                                <svg
                                    className="h-6 w-6 text-green-600 dark:text-green-400"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                    />
                                </svg>
                            </div>
                        </div>
                    </div>

                    <div className="rounded-xl border border-sidebar-border/70 bg-sidebar p-6 dark:border-sidebar-border">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm text-sidebar-foreground/70">Upcoming Appointments</p>
                                <p className="mt-2 text-3xl font-bold">{statistics.upcoming_appointments}</p>
                                <p className="mt-1 text-xs text-sidebar-foreground/70">
                                    {statistics.today_appointments} today
                                </p>
                            </div>
                            <div className="rounded-full bg-purple-100 p-3 dark:bg-purple-900">
                                <svg
                                    className="h-6 w-6 text-purple-600 dark:text-purple-400"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                                    />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="rounded-xl border border-sidebar-border/70 bg-sidebar p-6 dark:border-sidebar-border">
                    <h2 className="mb-4 text-xl font-bold">Experts with Upcoming Appointments</h2>
                    {experts_with_appointments.length > 0 ? (
                        <div className="space-y-4">
                            {experts_with_appointments.map((expert) => (
                                <div
                                    key={expert.id}
                                    className="rounded-lg border border-sidebar-border/70 bg-background p-4 dark:border-sidebar-border"
                                >
                                    <div className="mb-3 flex items-center justify-between">
                                        <div>
                                            <h3 className="font-semibold">{expert.name}</h3>
                                            <p className="text-sm text-sidebar-foreground/70">
                                                {expert.specialty} • {expert.email}
                                            </p>
                                        </div>
                                        <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-800 dark:bg-green-900 dark:text-green-200">
                                            {expert.upcoming_appointments.length}{' '}
                                            {expert.upcoming_appointments.length === 1 ? 'appointment' : 'appointments'}
                                        </span>
                                    </div>
                                    <div className="space-y-2">
                                        {expert.upcoming_appointments.map((appointment) => (
                                            <div
                                                key={appointment.id}
                                                className="flex items-center justify-between rounded-md border border-sidebar-border/70 bg-sidebar p-3 dark:border-sidebar-border"
                                            >
                                                <div>
                                                    <p className="font-medium">{appointment.customer_name}</p>
                                                    <p className="text-sm text-sidebar-foreground/70">
                                                        {new Date(appointment.scheduled_at).toLocaleString('en-US', {
                                                            weekday: 'short',
                                                            month: 'short',
                                                            day: 'numeric',
                                                            hour: 'numeric',
                                                            minute: '2-digit',
                                                        })}{' '}
                                                        • {appointment.duration_minutes} minutes
                                                    </p>
                                                </div>
                                                <span
                                                    className={`rounded-full px-2 py-1 text-xs ${
                                                        appointment.status === 'scheduled'
                                                            ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
                                                            : appointment.status === 'completed'
                                                              ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                                                              : 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200'
                                                    }`}
                                                >
                                                    {appointment.status}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <p className="text-center text-sidebar-foreground/70">No upcoming appointments found.</p>
                    )}
                </div>
            </div>
        </AppLayout>
    );
}
