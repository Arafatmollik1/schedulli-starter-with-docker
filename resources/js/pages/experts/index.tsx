import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';

interface Expert {
    id: number;
    name: string;
    email: string;
    specialty: string;
    hourly_rate: number;
    status: string;
}

interface Props {
    experts: {
        data: Expert[];
        current_page: number;
        last_page: number;
    };
}

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Experts',
        href: '/experts',
    },
];

export default function ExpertsIndex({ experts }: Props) {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Experts" />
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                <div className="rounded-lg border border-sidebar-border/70 bg-sidebar p-6 dark:border-sidebar-border">
                    <h1 className="mb-4 text-2xl font-bold">Experts</h1>
                    <div className="space-y-2">
                        {experts.data.map((expert) => (
                            <div
                                key={expert.id}
                                className="rounded-md border border-sidebar-border/70 p-4 dark:border-sidebar-border"
                            >
                                <div className="flex items-center justify-between">
                                    <div>
                                        <h3 className="font-semibold">{expert.name}</h3>
                                        <p className="text-sm text-sidebar-foreground/70">{expert.email}</p>
                                        <p className="text-sm text-sidebar-foreground/70">
                                            {expert.specialty} • ${expert.hourly_rate}/hr
                                        </p>
                                    </div>
                                    <span
                                        className={`rounded-full px-3 py-1 text-xs ${
                                            expert.status === 'active'
                                                ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                                                : 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200'
                                        }`}
                                    >
                                        {expert.status}
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

