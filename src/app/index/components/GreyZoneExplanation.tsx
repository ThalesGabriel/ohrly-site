import {
    AlertTriangle,
    Clock3,
    Repeat,
    ShieldAlert,
    TrendingDown,
} from "lucide-react";

const impacts = [
    {
        icon: TrendingDown,
        title: "Mais esforço",
        description:
            "Times começam a gastar mais energia para manter o mesmo resultado operacional.",
    },
    {
        icon: Repeat,
        title: "Mais retrabalho",
        description:
            "Problemas parcialmente absorvidos retornam continuamente para operação e engenharia.",
    },
    {
        icon: Clock3,
        title: "Mais atraso",
        description:
            "Fluxos continuam funcionando, mas cada vez mais longe do tempo esperado.",
    },
    {
        icon: AlertTriangle,
        title: "Mais exceções",
        description:
            "Casos manuais, desvios e comportamentos improvisados começam a virar rotina.",
    },
    {
        icon: ShieldAlert,
        title: "Menos confiança",
        description:
            "A operação perde clareza sobre quando agir e passa a depender de feeling.",
    },
];

export function GreyZoneExplanation() {
    return (
        <section className="relative overflow-hidden border-b border-zinc-200 bg-white px-12 py-16">
            <div className="relative mx-auto max-w-7xl">
                <div className="max-w-5xl">
                    <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-violet-600">
                        De onde vem esse custo silencioso
                    </p>

                    <h2 className="text-3xl font-bold leading-tight text-zinc-950 md:text-4xl">
                        Uma parte importante da sua margem é perdida pela falta de atenção à
                        <span className="text-violet-600"> Zona Cinzenta.</span>
                    </h2>

                    <p className="mt-4 max-w-5xl text-sm leading-relaxed text-zinc-600 md:text-base">
                        Ela aparece entre o comportamento normal e o incidente declarado.
                        Nesse espaço, os alertas ainda não disparam, os indicadores parecem
                        aceitáveis e a operação segue rodando.
                        Mas o comportamento já saiu do padrão esperado e começa a acumular{" "}
                        <span className="font-semibold text-zinc-950">
                            custo silencioso
                        </span>
                    </p>
                </div>

                <div className="mt-12 grid gap-4 xl:grid-cols-12">
                    {/* GRID DOS EFEITOS */}
                    <div className="grid gap-4 sm:grid-cols-2 xl:col-span-6">
                        {impacts
                            .filter((impact) => impact.title !== "Menos confiança")
                            .map((impact) => {
                                const Icon = impact.icon;

                                return (
                                    <div
                                        key={impact.title}
                                        className="group rounded-2xl border border-zinc-200 bg-white p-6 "
                                    >
                                        <div className="flex items-center gap-[10px]">
                                            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white shadow-sm ring-1 ring-zinc-200 transition group-hover:ring-violet-200">
                                                <Icon className="h-5 w-5 text-violet-600" />
                                            </div>

                                            <h3 className="text-lg font-semibold text-zinc-950">
                                                {impact.title}
                                            </h3>
                                        </div>

                                        <p className="mt-3 text-sm leading-relaxed text-zinc-600">
                                            {impact.description}
                                        </p>
                                    </div>
                                );
                            })}
                    </div>

                    {/* CARD PRINCIPAL */}
                    <div className="xl:col-span-6">
                        <div className="relative h-full overflow-hidden rounded-2xl border border-violet-300 bg-violet-50 p-7 shadow-[0_0_0_1px_rgba(139,92,246,0.15)]">
                            <div className="absolute right-4 top-4 rounded-full bg-violet-600 px-2 py-1 text-[10px] font-bold uppercase tracking-[0.15em] text-white">
                                Mais crítico
                            </div>

                            <div className="flex items-center gap-[10px]">
                                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-violet-600 shadow-sm ring-1 ring-violet-400">
                                    <ShieldAlert className="h-5 w-5 text-white" />
                                </div>

                                <h3 className="text-xl font-semibold text-violet-950">
                                    Menos confiança
                                </h3>
                            </div>

                            <p className="mt-4 text-sm leading-relaxed text-violet-900">
                                A operação perde clareza sobre quando agir e passa a depender de
                                feeling, percepção individual e pressão externa.
                            </p>

                            <div className="mt-6 rounded-xl border border-violet-200 bg-white/70 p-4">
                                <p className="text-sm leading-relaxed text-violet-800">
                                    Quando a confiança diminui, cada decisão parece arriscada:
                                </p>

                                <ul className="mt-4 space-y-3 text-sm text-violet-900">
                                    <li>• Esperar parece mais seguro do que agir cedo</li>
                                    <li>• O custo cresce antes da urgência aparecer</li>
                                    <li>• O sistema continua funcionando enquanto degrada</li>
                                </ul>
                            </div>

                            <p className="mt-6 text-sm font-medium leading-relaxed text-violet-700">
                                É nesse momento que a zona cinzenta deixa de ser apenas técnica e passa
                                a afetar diretamente a capacidade da empresa decidir.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}