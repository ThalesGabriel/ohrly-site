import { ArrowRight, Bot, CalendarDays, CloudSun, Database, FileWarningIcon, LineChart, MapPin } from "lucide-react";
import MetricCard from "./components/metric-card";

const cases = [
    "Central 156 - SEFAZ / Emlurb",
    "Olist — Pagamentos",
];

export default function Hero() {
    return (
        <section className="bg-[#050816] text-white">
            <div className="mx-auto grid grid-cols-1 gap-10 px-6 pb-20 pt-10 lg:grid-cols-[240px_1fr_340px] lg:px-8">
                <aside className="hidden lg:block">
                    <p className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-indigo-300">
                        Casos de estudo
                    </p>

                    <div className="space-y-2">
                        {cases.map((item, index) => (
                            <button
                                key={item}
                                className={`flex w-full items-center gap-3 rounded-xl px-4 py-4 text-left text-sm transition ${index === 0
                                    ? "bg-white/10 text-white ring-1 ring-indigo-400/50"
                                    : "text-zinc-400 hover:bg-white/5 hover:text-white"
                                    }`}
                            >
                                {index === 0 ? (
                                    <LineChart className="h-4 w-4 text-indigo-300" />
                                ) : index === 1 ? (
                                    <Database className="h-4 w-4" />
                                ) : index === 2 ? (
                                    <Bot className="h-4 w-4" />
                                ) : index === 3 ? (
                                    <CloudSun className="h-4 w-4" />
                                ) : (
                                    <MapPin className="h-4 w-4" />
                                )}
                                {item}
                            </button>
                        ))}
                    </div>

                    <div className="mt-8 rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-sm leading-6 text-zinc-300">
                        Cada caso mostra como degradações silenciosas existem muito antes do
                        impacto explícito.
                    </div>
                </aside>

                <div>
                    <span className="inline-flex rounded-full border border-indigo-400/30 bg-indigo-400/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.22em] text-indigo-200">
                        Degradação operacional
                    </span>

                    <h1 className="mt-6 max-w-4xl text-5xl font-semibold tracking-tight md:text-6xl">
                        Central 156 - SEFAZ / Emlurb
                    </h1>

                    <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-300">
                        Uma operação determinística revelou que mesmo com estados bem definidos
                        ainda é possível observar uma janela de decisão operacional
                    </p>

                    <div className="mt-8 grid gap-3 md:grid-cols-6">
                        <MetricCard icon={CalendarDays} label="Período analisado" value="Ano de 2025" />
                        <MetricCard icon={Database} label="Volume total" value="86.966 registros" />
                        <MetricCard icon={FileWarningIcon} label="Não concluídas" value="21.094 solicitações" />
                        <MetricCard icon={FileWarningIcon} label="Índicador de consistência" value="37 / 100" />
                    </div>
                </div>

                <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-7 shadow-2xl shadow-indigo-950/40">
                    <p className="text-sm text-zinc-300">
                        Principal descoberta
                    </p>

                    <p className="mt-2 text-2xl font-semibold leading-snug text-white">
                        Mesmo um sistema determinístico possui propriedades observáveis.
                    </p>

                    <div className="my-6 h-px bg-white/10" />

                    <p className="text-sm text-zinc-300">
                        O que chamou atenção
                    </p>

                    <p className="mt-2 text-lg font-medium text-amber-300">
                        Estados comportamentais intermediários
                    </p>

                    <div className="my-6 h-px bg-white/10" />

                    <p className="text-sm text-zinc-300">
                        Hipótese fortalecida
                    </p>

                    <p className="mt-2 text-lg font-medium text-indigo-200">
                        A janela de decisão também emerge em operações determinísticas.
                    </p>
                </div>
            </div>
        </section>
    )
}