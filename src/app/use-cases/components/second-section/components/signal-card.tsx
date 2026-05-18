import { TrendingUp } from "lucide-react";

export default function SignalCard({
    title,
    value,
    detail,
    icon: Icon,
}: {
    title: string;
    value: string;
    detail: string;
    icon: typeof TrendingUp;
}) {
    return (
        <div className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm">
            <div className="flex gap-[10px] items-center">
                <Icon className="h-5 w-5 text-indigo-500" />

                <h3 className="text-sm font-semibold text-zinc-950">
                    {title}
                </h3>
            </div>

            {/* <p className="mt-4 text-lg font-semibold leading-snug text-indigo-600">
                {value}
            </p> */}

            <p className="mt-3 text-sm leading-6 text-zinc-600">
                {detail}
            </p>
        </div>
    );
}