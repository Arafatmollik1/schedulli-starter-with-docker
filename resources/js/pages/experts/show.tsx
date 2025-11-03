import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';

interface Expert {
    id: number;
    name: string;
    email: string;
    phone: string;
    specialty: string;
    bio: string;
    hourly_rate: number;
    status: string;
    appointments: Array<{
        id: number;
        scheduled_at: string;
        status: string;
        customer: {
            name: string;
        };
    }>;
}

interface Props {
    expert: Expert;
}

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Experts',
        href: '/experts',
    },
];

export default function ExpertsShow({ expert }: Props) {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title={`Expert: ${expert.name}`} />
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                <div className="rounded-lg border border-sidebar-border/70 bg-sidebar p-6 dark:border-sidebar-border">
                    <h1 className="mb-4 text-2xl font-bold">{expert.name}</h1>
                    <div className="mb-4 space-y-2">
                        <p className="text-sm">
                            <span className="font-semibold">Email:</span> {expert.email}
                        </p>
                        <p className="text-sm">
                            <span className="font-semibold">Phone:</span> {expert.phone || 'N/A'}
                        </p>
                        <p className="text-sm">
                            <span className="font-semibold">Specialty:</span> {expert.specialty}
                        </p>
                        <p className="text-sm">
                            <span className="font-semibold">Hourly Rate:</span> ${expert.hourly_rate}
                        </p>
                        <p className="text-sm">
                            <span className="font-semibold">Status:</span>{' '}
                            <span
                                className={`rounded-full px-2 py-1 text-xs ${
                                    expert.status === 'active'
                                        ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                                        : 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200'
                                }`}
                            >
                                {expert.status}
                            </span>
                        </p>
                        {expert.bio && (
                            <div className="mt-4">
                                <p className="font-semibold">Bio:</p>
                                <p className="text-sm text-sidebar-foreground/70">{expert.bio}</p>
                            </div>
                        )}
                    </div>
                    <div className="mt-6">
                        <h2 className="mb-2 text-lg font-semibold">Appointments</h2>
                        {expert.appointments.length > 0 ? (
                            <div className="space-y-2">
                                {expert.appointments.map((appointment) => (
                                    <div
                                        key={appointment.id}
                                        className="rounded-md border border-sidebar-border/70 p-3 dark:border-sidebar-border"
                                    >
                                        <p className="text-sm">
                                            <span className="font-semibold">Customer:</span> {appointment.customer.name}
                                        </p>
                                        <p className="text-sm">
                                            <span className="font-semibold">Scheduled:</span>{' '}
                                            {new Date(appointment.scheduled_at).toLocaleString()}
                                        </p>
                                        <p className="text-sm">
                                            <span className="font-semibold">Status:</span> {appointment.status}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <p className="text-sm text-sidebar-foreground/70">No appointments yet.</p>
                        )}
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}

