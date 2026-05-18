import { ArrowRight, BarChart3, CircleDot, Database, Sparkles } from "lucide-react";

const steps = [
  {
    icon: Database,
    title: "Dados operacionais",
    description: "Eventos, estados e jornadas reais.",
  },
  {
    icon: BarChart3,
    title: "Interpretação",
    description: "Baseline contextual, distribuição e envelhecimento.",
  },
  {
    icon: CircleDot,
    title: "Estado da operação",
    description: "Consistência, persistência e degradação identificadas.",
  },
  {
    icon: Sparkles,
    title: "Contexto para decisão",
    description: "Clareza antecipada para agir com mais confiança.",
  },
];

export default function FourthSection() {

    return (<section className="px-12 py-10">
        <div className="">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-violet-300">
                Como funciona
            </p>

            <h2 className="mt-4 text-4xl font-semibold tracking-tight text-white">
                O Ohrly transforma comportamento operacional em clareza antecipada.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-300">
                Não analisamos apenas métricas isoladas.
                Interpretamos como a operação evolui ao longo do tempo.
            </p>
        </div>

        <div className="relative mt-14">
            {/* linha de conexão */}
            <div className="absolute left-0 right-0 top-16 hidden h-px bg-gradient-to-r from-violet-500/0 via-violet-400/40 to-violet-500/0 lg:block" />

            <div className="grid gap-6 lg:grid-cols-4">
                {steps.map((step, index) => {
                    const Icon = step.icon;
                    const isLast = index === steps.length - 1;

                    return (
                        <div key={step.title} className="relative">
                            {/* connector */}
                            {index < steps.length - 1 && (
                                <div className="absolute -right-3 top-14 z-20 hidden lg:flex">
                                    <div className="flex h-6 w-6 items-center justify-center rounded-full border border-violet-400/20 bg-[#0B1120] shadow-lg shadow-violet-500/10">
                                        <ArrowRight className="h-3.5 w-3.5 text-violet-300" />
                                    </div>
                                </div>
                            )}

                            <div
                                className={`relative h-full overflow-hidden rounded-3xl border p-7 transition-all duration-300 ${isLast
                                    ? "border-violet-400/30 bg-gradient-to-b from-violet-500/10 to-[#0B1120] shadow-[0_0_60px_rgba(139,92,246,0.18)]"
                                    : "border-white/10 bg-white/[0.03]"
                                    }`}
                            >
                                {/* glow */}
                                {isLast && (
                                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(139,92,246,0.25),transparent_60%)]" />
                                )}

                                <div className="relative z-10">
                                    <div
                                        className={`flex h-14 w-14 items-center justify-center rounded-2xl border ${isLast
                                            ? "border-violet-300/40 bg-violet-500/20 text-violet-200"
                                            : "border-violet-400/20 bg-violet-500/10 text-violet-300"
                                            }`}
                                    >
                                        <Icon className="h-7 w-7" />
                                    </div>

                                    <div className="mt-8">
                                        <h3
                                            className={`mt-3 text-xl font-semibold ${isLast ? "text-white" : "text-slate-100"
                                                }`}
                                        >
                                            {step.title}
                                        </h3>

                                        <p
                                            className={`mt-4 text-sm leading-7 ${isLast ? "text-slate-200" : "text-slate-400"
                                                }`}
                                        >
                                            {step.description}
                                        </p>
                                    </div>

                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    </section>
    )
}