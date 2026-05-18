import { LineChart } from "lucide-react";

export default function InfoCard({
    icon: Icon,
    title,
    description,
}: {
    icon: typeof LineChart;
    title: string;
    description?: string;
}) {
    return (
        <div className="rounded-2xl border border-zinc-200 bg-white p-5 text-center shadow-sm">
            <Icon className="mx-auto h-6 w-6 text-indigo-500" />
            <h3 className="mt-4 text-sm font-semibold text-zinc-950">{title}</h3>
            {description && (
                <p className="mt-2 text-sm leading-6 text-zinc-600">{description}</p>
            )}
        </div>
    );
}