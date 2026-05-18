import {
    Activity,
    ArrowRight,
    BarChart3,
    Database,
    Radar,
    Target,
} from "lucide-react";

const steps = [
    {
        icon: Database,
        title: "Dados operacionais",
        description: "Eventos, estados e jornadas reais da operação.",
    },
    {
        icon: BarChart3,
        title: "Baseline contextual",
        description: "Entendemos o que é normal para cada contexto.",
    },
    {
        icon: Activity,
        title: "Persistência temporal",
        description: "Detectamos mudanças que se mantêm além do esperado.",
    },
    {
        icon: Target,
        title: "Estado comportamental",
        description: "Classificamos o estado atual da operação.",
    },
    {
        icon: Radar,
        title: "Contexto para decisão",
        description: "Entregamos clareza para agir antes do impacto.",
    },
];

export default function ThirdSection() {
    return (
        <section className="border-t border-slate-200 bg-white px-12 py-10 text-slate-950 md:px-12">
            <div >
                <div>
                    <div className="flex gap-[10px] items-center">
                        <span className="font-bold text-indigo-600 text-3xl">3.</span>
                        <h2 className="text-2xl font-semibold">
                            Como o comportamento vira estado
                        </h2>
                    </div>

                    <p className="mt-4 leading-7 text-slate-600">
                        O Ohrly combina múltiplas dimensões para entender a saúde real da
                        operação, sem depender apenas de thresholds fixos.
                    </p>
                </div>

                <div className="mt-12 grid gap-5 md:grid-cols-5">
                    {steps.map((step, index) => {
                        const Icon = step.icon;

                        return (
                            <div key={step.title} className="relative">
                                <div className="rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm">
                                    <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-indigo-200 bg-indigo-50 text-indigo-600">
                                        <Icon className="h-6 w-6" />
                                    </div>

                                    <h3 className="mt-5 font-semibold">{step.title}</h3>

                                    <p className="mt-2 text-sm leading-6 text-slate-600">
                                        {step.description}
                                    </p>
                                </div>

                                {index < steps.length - 1 && (
                                    <ArrowRight className="absolute -right-4 top-1/2 hidden h-5 w-5 -translate-y-1/2 text-indigo-400 md:block" />
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}