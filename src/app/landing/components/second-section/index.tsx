
export default function SecondSection() {
    return (
        <section className="border-y border-white/5 px-12 py-10">
            <div className="mx-auto grid items-center gap-14 lg:grid-cols-[0.75fr_1.25fr]">

                <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.28em] text-violet-300">
                        O problema invisível
                    </p>

                    <h2 className="mt-5 text-3xl font-semibold tracking-tight text-white md:text-4xl">
                        Existe uma zona cinzenta entre
                        "está tudo bem" e "precisamos agir".
                    </h2>

                    <p className="mt-6 text-lg leading-8 text-slate-300">
                        A maioria das perdas começa aqui.
                        Mas ferramentas tradicionais só reagem
                        quando o dano já aconteceu.
                    </p>

                    <div className="mt-8 rounded-2xl border border-amber-400/20 bg-amber-400/5 p-5">
                        <p className="text-sm leading-7 text-amber-100">
                            O Ohrly torna explícito o momento em que
                            continuar esperando deixa de ser uma decisão neutra.
                        </p>
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
    )
}