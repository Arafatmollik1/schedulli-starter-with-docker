import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';

interface Customer {
    id: number;
    name: string;
    email: string;
    phone: string;
    city: string;
    state: string;
}

interface Props {
    customers: {
        data: Customer[];
        current_page: number;
        last_page: number;
    };
}

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Customers',
        href: '/customers',
    },
];

export default function CustomersIndex({ customers }: Props) {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Customers" />
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                <div className="rounded-lg border border-sidebar-border/70 bg-sidebar p-6 dark:border-sidebar-border">
                    <h1 className="mb-4 text-2xl font-bold">Customers</h1>
                    <div className="space-y-2">
                        {customers.data.map((customer) => (
                            <div
                                key={customer.id}
                                className="rounded-md border border-sidebar-border/70 p-4 dark:border-sidebar-border"
                            >
                                <div className="flex items-center justify-between">
                                    <div>
                                        <h3 className="font-semibold">{customer.name}</h3>
                                        <p className="text-sm text-sidebar-foreground/70">{customer.email}</p>
                                        <p className="text-sm text-sidebar-foreground/70">
                                            {customer.phone || 'No phone'} • {customer.city}, {customer.state}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}

