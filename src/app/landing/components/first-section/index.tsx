import { ArrowRight, ShieldCheck } from "lucide-react";
import Link from "next/link";
import ConsistencyCard from "../consistency-card";

const heroSignals = [
    "Detecta mudanças comportamentais antes do impacto",
    "Monitora consistência de fluxos críticos em tempo real",
    "Transforma sinais em decisões acionáveis",
];

export default function FirstSection() {
    return (
        <section className="grid w-full items-center gap-12 lg:grid-cols-[1fr_0.95fr] px-12 py-10">
            <div>
                <p className="text-sm font-semibold uppercase tracking-[0.28em] text-violet-300">
                    Observabilidade comportamental
                </p>

                <h1 className="mt-7 max-w-4xl text-5xl font-semibold leading-[1.05] tracking-tight text-white md:text-6xl lg:text-7xl">
                    A sua operação começa a degradar antes que você perceba.
                </h1>

                <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300">
                    O Ohrly torna visível a degradação silenciosa que acontece antes de incidentes,
                    perdas e decisões tardias.
                </p>

                <div className="mt-8 grid gap-4 text-sm text-slate-300 md:grid-cols-3">
                    {heroSignals.map((signal) => (
                        <div key={signal} className="flex gap-3">
                            <ShieldCheck className="mt-1 h-5 w-5 shrink-0 text-violet-300" />
                            <span>{signal}</span>
                        </div>
                    ))}
                </div>

                <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
                    <Link
                        href="/interest"
                        className="inline-flex items-center justify-center rounded-lg bg-violet-600 px-6 py-4 text-sm font-semibold shadow-lg shadow-violet-600/25 transition hover:bg-violet-500"
                    >
                        Solicitar diagnóstico
                    </Link>
                    <Link
                        href="/use-cases"
                        className="inline-flex items-center justify-center gap-2 rounded-lg px-6 py-4 text-sm font-semibold text-slate-200 transition hover:bg-white/5 hover:text-white"
                    >
                        Ver casos de estudo <ArrowRight className="h-4 w-4" />
                    </Link>
                </div>
            </div>

            <ConsistencyCard />
        </section>
    )
}