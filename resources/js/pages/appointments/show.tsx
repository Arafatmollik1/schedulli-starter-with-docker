import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';

interface Appointment {
    id: number;
    scheduled_at: string;
    duration_minutes: number;
    status: string;
    notes: string;
    expert: {
        id: number;
        name: string;
        email: string;
        specialty: string;
    };
    customer: {
        id: number;
        name: string;
        email: string;
        phone: string;
    };
}

interface Props {
    appointment: Appointment;
}

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Appointments',
        href: '/appointments',
    },
];

export default function AppointmentsShow({ appointment }: Props) {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title={`Appointment: ${appointment.expert.name} with ${appointment.customer.name}`} />
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                <div className="rounded-lg border border-sidebar-border/70 bg-sidebar p-6 dark:border-sidebar-border">
                    <h1 className="mb-4 text-2xl font-bold">Appointment Details</h1>
                    <div className="mb-4 space-y-2">
                        <p className="text-sm">
                            <span className="font-semibold">Scheduled:</span>{' '}
                            {new Date(appointment.scheduled_at).toLocaleString()}
                        </p>
                        <p className="text-sm">
                            <span className="font-semibold">Duration:</span> {appointment.duration_minutes} minutes
                        </p>
                        <p className="text-sm">
                            <span className="font-semibold">Status:</span>{' '}
                            <span
                                className={`rounded-full px-2 py-1 text-xs ${
                                    appointment.status === 'scheduled'
                                        ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
                                        : appointment.status === 'completed'
                                          ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                                          : 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
                                }`}
                            >
                                {appointment.status}
                            </span>
                        </p>
                        {appointment.notes && (
                            <div className="mt-4">
                                <p className="font-semibold">Notes:</p>
                                <p className="text-sm text-sidebar-foreground/70">{appointment.notes}</p>
                            </div>
                        )}
                    </div>
                    <div className="mt-6 grid gap-4 md:grid-cols-2">
                        <div>
                            <h2 className="mb-2 text-lg font-semibold">Expert</h2>
                            <div className="rounded-md border border-sidebar-border/70 p-3 dark:border-sidebar-border">
                                <p className="font-semibold">{appointment.expert.name}</p>
                                <p className="text-sm text-sidebar-foreground/70">{appointment.expert.email}</p>
                                <p className="text-sm text-sidebar-foreground/70">{appointment.expert.specialty}</p>
                            </div>
                        </div>
                        <div>
                            <h2 className="mb-2 text-lg font-semibold">Customer</h2>
                            <div className="rounded-md border border-sidebar-border/70 p-3 dark:border-sidebar-border">
                                <p className="font-semibold">{appointment.customer.name}</p>
                                <p className="text-sm text-sidebar-foreground/70">{appointment.customer.email}</p>
                                {appointment.customer.phone && (
                                    <p className="text-sm text-sidebar-foreground/70">{appointment.customer.phone}</p>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}

