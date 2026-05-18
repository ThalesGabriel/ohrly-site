import { CalendarDays } from "lucide-react";

export default function MetricCard({
    icon: Icon,
    label,
    value,
}: {
    icon: typeof CalendarDays;
    label: string;
    value: string;
}) {
    return (
        <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
            <Icon className="h-5 w-5 text-indigo-300" />
            <p className="mt-3 text-xs text-zinc-400">{label}</p>
            <p className="mt-1 text-sm font-medium text-white">{value}</p>
        </div>
    );
}