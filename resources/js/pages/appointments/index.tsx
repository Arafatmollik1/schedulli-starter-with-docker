import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';

interface Appointment {
    id: number;
    scheduled_at: string;
    duration_minutes: number;
    status: string;
    expert: {
        id: number;
        name: string;
        specialty: string;
    };
    customer: {
        id: number;
        name: string;
        email: string;
    };
}

interface Props {
    appointments: {
        data: Appointment[];
        current_page: number;
        last_page: number;
    };
}

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Appointments',
        href: '/appointments',
    },
];

export default function AppointmentsIndex({ appointments }: Props) {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Appointments" />
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                <div className="rounded-lg border border-sidebar-border/70 bg-sidebar p-6 dark:border-sidebar-border">
                    <h1 className="mb-4 text-2xl font-bold">Appointments</h1>
                    <div className="space-y-2">
                        {appointments.data.map((appointment) => (
                            <div
                                key={appointment.id}
                                className="rounded-md border border-sidebar-border/70 p-4 dark:border-sidebar-border"
                            >
                                <div className="flex items-start justify-between">
                                    <div>
                                        <h3 className="font-semibold">
                                            {appointment.expert.name} with {appointment.customer.name}
                                        </h3>
                                        <p className="text-sm text-sidebar-foreground/70">
                                            {appointment.expert.specialty}
                                        </p>
                                        <p className="text-sm text-sidebar-foreground/70">
                                            {new Date(appointment.scheduled_at).toLocaleString()} •{' '}
                                            {appointment.duration_minutes} minutes
                                        </p>
                                    </div>
                                    <span
                                        className={`rounded-full px-3 py-1 text-xs ${
                                            appointment.status === 'scheduled'
                                                ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
                                                : appointment.status === 'completed'
                                                  ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                                                  : 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
                                        }`}
                                    >
                                        {appointment.status}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}

