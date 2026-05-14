export default function GrayZone() {
    return (
        <section className="border-b border-zinc-200 bg-white px-12 py-10 md:px-12">
            <div className="">
                <div className="max-w-4xl">
                    <p className="mb-4 text-xs font-bold uppercase tracking-[0.22em] text-violet-600">
                        Zona cinzenta operacional
                    </p>

                    <h2 className="text-4xl font-bold leading-tight tracking-tight md:text-5xl">
                        Entre "está tudo bem" e "temos um incidente" <span className="text-violet-600">existe um espaço silencioso.</span>
                    </h2>

                    <div className="mt-8 space-y-5 text-base leading-relaxed text-zinc-600">
                        <p>
                            A maioria das operações não falha de forma explícita.
                        </p>

                        <p>
                            Elas degradam progressivamente:
                        </p>

                        <ul className="space-y-3 border-l border-zinc-300 pl-6 text-zinc-700">
                            <li>• Pequenas inconsistências</li>
                            <li>• Jornadas mais lentas</li>
                            <li>• Recuperações mais caras</li>
                            <li>• Comportamento menos previsível</li>
                        </ul>

                        <p>
                            Até que o problema finalmente se torne impossível de ignorar.
                        </p>
                    </div>
                </div>

                <div className="mt-10 overflow-hidden rounded-3xl border border-zinc-200 bg-white p-10 shadow-sm">
                    <div className="flex flex-col gap-8 lg:flex-row lg:items-center">
                        {[
                            "NORMAL",
                            "DESCONFORTO",
                            "DEGRADAÇÃO",
                            "INCIDENTE",
                        ].map((step, index) => (
                            <div
                                key={step}
                                className="flex flex-1 items-center gap-4"
                            >
                                <div className="flex h-14 w-14 items-center justify-center rounded-full border border-zinc-200 bg-zinc-50 text-xs font-bold tracking-[0.16em] text-zinc-500">
                                    {index + 1}
                                </div>

                                <div className="flex-1">
                                    <p className="text-sm font-semibold uppercase tracking-[0.16em] text-zinc-900">
                                        {step}
                                    </p>

                                    {["DESCONFORTO", "DEGRADAÇÃO"].includes(step) && (
                                        <p className="mt-2 text-sm leading-relaxed text-violet-700">
                                            Ohrly atua aqui.
                                        </p>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}