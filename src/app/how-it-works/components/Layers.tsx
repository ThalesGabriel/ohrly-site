import {
    Compass,
    Activity,
    Route,
    Layers as LayersIcon,
} from "lucide-react";

const layers = [
    {
        title: "Estratégia",
        icon: Compass,
        question: "A operação ainda reflete a companhia?",
        description:
            "Ohrly interpreta continuamente o quanto a operação continua coerente com a intenção estratégica.",
    },
    {
        title: "Dinâmica",
        icon: Activity,
        question: "Como a operação está evoluindo?",
        description:
            "Operações saudáveis também oscilam. O problema começa quando deixam de absorver mudanças.",
    },
    {
        title: "Trajetória",
        icon: Route,
        question: "Por que a operação está degradando?",
        description:
            "Jornadas começam a perder previsibilidade e capacidade de recuperação.",
    },
    {
        title: "Contexto",
        icon: LayersIcon,
        question: "O que influencia esse comportamento?",
        description:
            "Contexto, horário, fluxo e operação alteram continuamente o comportamento dos sistemas.",
    },
];

export default function Layers() {
    return (
        <section className="border-b border-zinc-200 bg-white px-12 py-10">
            <div>
                <div className="">
                    <p className="mb-4 text-xs font-bold uppercase tracking-[0.22em] text-violet-600">
                        Camadas interpretativas
                    </p>

                    <h2 className="text-4xl font-bold leading-tight tracking-tight md:text-5xl">
                        Como o Ohrly interpreta operações.
                    </h2>

                    <p className="mt-6 max-w-3xl text-lg leading-relaxed text-zinc-600 md:text-xl">
                        Toda operação possui contexto, comportamento, dinâmica e intenção.
                        O problema é que essas camadas raramente são interpretadas juntas.
                    </p>
                </div>

                <div className="mt-10 grid gap-4 lg:grid-cols-4">
                    {layers.map((layer) => {
                        const Icon = layer.icon;
                        return (
                            <div
                                key={layer.title}
                                className="group rounded-2xl border border-zinc-200 bg-zinc-50 p-6 transition hover:border-violet-200 hover:bg-violet-50"
                            >
                                <div className="flex gap-[10px] items-center">
                                <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-violet-200 bg-violet-50 text-violet-700">
                                    <Icon className="h-5 w-5" />
                                </div>
                                    <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-violet-700">
                                        {layer.title}
                                    </p>
                                    </div>

                                <h3 className="mt-4 text-lg font-semibold leading-snug text-zinc-950">
                                    {layer.question}
                                </h3>

                                <p className="mt-4 text-sm leading-relaxed text-zinc-600">
                                    {layer.description}
                                </p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    );
}