import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';

interface Customer {
    id: number;
    name: string;
    email: string;
    phone: string;
    address: string;
    city: string;
    state: string;
    zip_code: string;
    appointments: Array<{
        id: number;
        scheduled_at: string;
        status: string;
        expert: {
            name: string;
            specialty: string;
        };
    }>;
}

interface Props {
    customer: Customer;
}

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Customers',
        href: '/customers',
    },
];

export default function CustomersShow({ customer }: Props) {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title={`Customer: ${customer.name}`} />
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                <div className="rounded-lg border border-sidebar-border/70 bg-sidebar p-6 dark:border-sidebar-border">
                    <h1 className="mb-4 text-2xl font-bold">{customer.name}</h1>
                    <div className="mb-4 space-y-2">
                        <p className="text-sm">
                            <span className="font-semibold">Email:</span> {customer.email}
                        </p>
                        <p className="text-sm">
                            <span className="font-semibold">Phone:</span> {customer.phone || 'N/A'}
                        </p>
                        {(customer.address || customer.city) && (
                            <p className="text-sm">
                                <span className="font-semibold">Address:</span> {customer.address || ''}{' '}
                                {customer.city ? `${customer.city}, ` : ''}
                                {customer.state || ''} {customer.zip_code || ''}
                            </p>
                        )}
                    </div>
                    <div className="mt-6">
                        <h2 className="mb-2 text-lg font-semibold">Appointments</h2>
                        {customer.appointments.length > 0 ? (
                            <div className="space-y-2">
                                {customer.appointments.map((appointment) => (
                                    <div
                                        key={appointment.id}
                                        className="rounded-md border border-sidebar-border/70 p-3 dark:border-sidebar-border"
                                    >
                                        <p className="text-sm">
                                            <span className="font-semibold">Expert:</span> {appointment.expert.name} (
                                            {appointment.expert.specialty})
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

