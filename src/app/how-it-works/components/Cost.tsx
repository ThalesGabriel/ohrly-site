export default function Cost() {
    return (
        <section className="relative overflow-hidden border-b border-zinc-200 bg-white px-12 py-10 md:px-12">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(139,92,246,0.08),transparent_35%)]" />

            <div className="relative mx-auto">
                <div className="max-w-4xl">
                    <p className="mb-4 text-xs font-bold uppercase tracking-[0.22em] text-violet-700">
                        Impacto operacional
                    </p>

                    <h2 className="text-4xl font-bold leading-tight tracking-tight md:text-5xl">
                        O impacto começa antes do alerta.
                    </h2>

                    <div className="mt-10 space-y-5 text-lg leading-relaxed text-zinc-600 md:text-xl">
                        <p>
                            O problema raramente começa quando o incidente aparece.
                        </p>

                        <p>Ele começa quando:</p>

                        <ul className="space-y-3 border-l border-violet-200 pl-6 text-zinc-700">
                            <li>• A recuperação fica mais lenta</li>
                            <li>• As jornadas perdem previsibilidade</li>
                            <li>• A operação começa a oscilar sem estabilizar</li>
                            <li>• Continuar esperando começa a ficar caro</li>
                        </ul>

                        <p>Mas nenhum indicador preocupa porque nenhum limite formal foi ultrapassado.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}