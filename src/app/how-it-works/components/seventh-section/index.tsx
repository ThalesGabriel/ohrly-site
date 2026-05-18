import Link from "next/link";

export default function SeventhSection() {
    return (
        <section className="relative overflow-hidden px-6 py-24 md:px-12">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(99,102,241,0.28),transparent_35%),radial-gradient(circle_at_top_right,rgba(14,165,233,0.18),transparent_35%)]" />

            <div className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_0.6fr] lg:items-center">
                <div>
                    <h2 className="max-w-2xl text-3xl font-semibold tracking-tight md:text-4xl">
                        Sua operação provavelmente já entrou na zona cinzenta antes.
                    </h2>
                    <p className="mt-4 text-lg text-slate-300">
                        Descubra onde ela está agora.
                    </p>
                </div>

                <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-8">
                    <p className="text-lg font-semibold">Análise de um fluxo crítico.</p>
                    <p className="mt-3 text-sm leading-6 text-slate-300">
                        Comece com uma leitura assistida para entender se existe degradação
                        silenciosa nos seus dados operacionais.
                    </p>

                    <Link
                        href="/interest"
                        className="mt-8 inline-flex w-full items-center justify-center rounded-xl bg-indigo-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-500/25 transition hover:bg-indigo-400"
                    >
                        Solicitar diagnóstico
                    </Link>
                </div>
            </div>
        </section>
    );
}