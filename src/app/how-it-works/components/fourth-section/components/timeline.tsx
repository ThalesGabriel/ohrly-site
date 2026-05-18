export default function Timeline({ compact = false }: { compact?: boolean }) {
    const stages = [
        {
            title: "Normal",
            description: "Operação dentro do esperado",
            color: "bg-indigo-400",
        },
        {
            title: "Sinais estranhos",
            description: "Pequenas variações aparecem",
            color: "bg-slate-300",
        },
        {
            title: "Degradação silenciosa",
            description: "Comportamento se afasta do padrão",
            color: "bg-amber-400",
        },
        {
            title: "Incidente",
            description: "Impacto explícito",
            color: "bg-red-500",
        },
    ];

    return (
        <div>
            <div className="relative mx-auto max-w-4xl">
                <div className="absolute left-0 right-0 top-3 h-1 rounded-full bg-gradient-to-r from-indigo-400 via-amber-300 to-red-500" />

                <div className="relative grid grid-cols-4 gap-4">
                    {stages.map((stage) => (
                        <div key={stage.title} className="text-center">
                            <div
                                className={`mx-auto h-7 w-7 rounded-full border-4 border-white/70 ${stage.color}`}
                            />
                            <p
                                className={`mt-5 font-semibold ${compact ? "text-xs" : "text-sm"
                                    }`}
                            >
                                {stage.title}
                            </p>
                            <p
                                className={`mt-2 ${compact ? "text-[11px]" : "text-xs"
                                    } leading-5 text-slate-400`}
                            >
                                {stage.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}