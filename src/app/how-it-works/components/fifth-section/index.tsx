import {
    BarChart3,
    Gauge,
    Radar,
    ShieldCheck,
    Zap,
} from "lucide-react";

const delivers = [
    "Estado atual da operação em linguagem simples.",
    "Detecção precoce de degradações silenciosas.",
    "Fluxos e áreas mais impactadas.",
    "Contexto para decisões humanas mais assertivas.",
    "Histórico para aprendizado operacional.",
];

export default function FifthSection() {
    return (
        <section className="border-t border-slate-200 bg-white px-12 py-10 text-slate-950 md:px-12">
            <div className="grid gap-12 lg:grid-cols-[0.65fr_1.35fr]">
                <div>
                    <div className="flex gap-[10px] items-center">
                        <span className="font-bold text-indigo-600 text-3xl">5.</span>
                        <h2 className="text-2xl font-semibold">
                            O que o Ohrly entrega
                        </h2>
                    </div>

                    <p className="mt-4 leading-7 text-slate-600">
                        Mais do que dashboards, o Ohrly entrega clareza operacional para
                        reconhecer estados antes que eles se tornem incidentes.
                    </p>
                </div>

                <div className="grid gap-4 md:grid-cols-5">
                    {delivers.map((item, index) => {
                        const icons = [ShieldCheck, Zap, BarChart3, Gauge, Radar];
                        const Icon = icons[index];

                        return (
                            <div
                                key={item}
                                className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
                            >
                                <Icon className="h-6 w-6 text-indigo-600" />
                                <p className="mt-5 text-sm font-medium leading-6">{item}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}