import { Building2, Cloud, Gauge, MessageCircle, ShoppingCart } from "lucide-react";
import Link from "next/link";

const audiences = [
    { icon: Building2, label: "Fintechs e bancos digitais" },
    { icon: ShoppingCart, label: "E-commerce e marketplaces" },
    { icon: Cloud, label: "SaaS B2B" },
    { icon: MessageCircle, label: "Operações conversacionais" },
    { icon: Gauge, label: "Plataformas digitais" },
];
export default function FifthSection() {
    return (
        <section className="grid gap-8 lg:grid-cols-[1fr_0.45fr] px-12 py-10">
            <div>
                <p className="text-sm font-semibold uppercase tracking-[0.28em] text-violet-300">
                    Para quem é
                </p>

                <h2 className="mt-5 text-3xl font-semibold tracking-tight text-white md:text-4xl">
                    Para operações que normalizaram apenas reagir em vez de agir.
                </h2>

                <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
                    {audiences.map((audience) => {
                        const Icon = audience.icon;
                        return (
                            <div key={audience.label} className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-center">
                                <Icon className="mx-auto h-8 w-8 text-slate-400" />
                                <p className="mt-4 text-sm leading-5 text-slate-200">{audience.label}</p>
                            </div>
                        );
                    })}
                </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-7 shadow-2xl shadow-black/30">
                <h2 className="text-2xl font-semibold tracking-tight">Mudanças acontecem.</h2>
                <p className="mt-4 leading-7 text-slate-300">
                    Consistência é o que sustenta o que realmente importa.
                </p>
                <Link
                    href="/interest"
                    className="mt-8 inline-flex w-full items-center justify-center rounded-lg bg-violet-600 px-6 py-4 text-sm font-semibold shadow-lg shadow-violet-600/25 transition hover:bg-violet-500"
                >
                    Solicitar diagnóstico
                </Link>
            </div>
        </section>
    )
}