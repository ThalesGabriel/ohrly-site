import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Hero() {
    return (
        <section className="relative overflow-hidden border-b border-white/10 px-12 py-10 md:px-12">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(99,102,241,0.24),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(14,165,233,0.18),transparent_35%)]" />

            <div className="relative mx-auto grid gap-14 lg:grid-cols-[1fr_1.05fr] lg:items-center">
                <div>
                    <span className="text-sm font-semibold uppercase tracking-[0.28em] text-violet-300">
                        Como funciona
                    </span>

                    <h1 className="mt-7 max-w-7xl text-5xl font-semibold leading-[1.05] tracking-tight text-white md:text-6xl lg:text-7xl">
                        Transformamos comportamento operacional em decisões mais cedo.
                    </h1>

                    <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
                        O Ohrly observa mudanças persistentes no comportamento da operação e
                        entrega clareza antes que elas virem incidente, retrabalho ou perda
                        de confiança.
                    </p>

                    <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                        <Link
                            href="/interest"
                            className="inline-flex items-center justify-center rounded-xl bg-indigo-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-500/25 transition hover:bg-indigo-400"
                        >
                            Solicitar diagnóstico
                        </Link>

                        <Link
                            href="/use-cases"
                            className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 px-6 py-3 text-sm font-semibold text-slate-200 transition hover:bg-white/5"
                        >
                            Ver casos de estudo
                            <ArrowRight className="h-4 w-4" />
                        </Link>
                    </div>
                </div>

                <div className="relative">
                    <div className="absolute inset-0 rounded-[32px] bg-violet-500/10 blur-3xl" />

                    <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-slate-950/60 shadow-2xl shadow-black/40">
                        <img
                            src="/images/decision-grey-zone.png"
                            alt="Zona cinzenta da decisão"
                            className="h-full w-full object-cover"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}