export function NoiseVsSignal() {
  return (
    <section className="border-b border-zinc-200 bg-white px-12 py-10">
      <div className="max-w-5xl">
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-violet-600">
          Operações saudáveis
        </p>

        <h2 className="text-3xl font-bold leading-tight text-zinc-950 md:text-4xl">
          Operações saudáveis também oscilam.
        </h2>

        <p className="mt-4 text-sm leading-relaxed text-zinc-600 md:text-base">
          Nem toda variação significa degradação. O problema começa quando o
          comportamento deixa de voltar sozinho ao padrão esperado.
        </p>
      </div>

      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        <div className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm">
          <div className="mb-6 flex items-center gap-3">
            <div className="h-3 w-3 rounded-full bg-emerald-500" />

            <p className="text-sm font-semibold text-zinc-950">
              Oscilação saudável
            </p>
          </div>

          <div className="relative h-28 overflow-hidden rounded-2xl bg-zinc-50">
            <div className="absolute inset-0 flex items-center px-4">
              <div className="h-px w-full border-t border-dashed border-zinc-300" />
            </div>

            <svg
              viewBox="0 0 400 120"
              className="absolute inset-0 h-full w-full"
              preserveAspectRatio="none"
            >
              <path
                d="M0 60 C40 40, 80 85, 120 60 S200 35, 240 60 S320 85, 400 60"
                fill="none"
                stroke="currentColor"
                className="text-emerald-500"
                strokeWidth="3"
                strokeLinecap="round"
              />
            </svg>
          </div>

          <p className="mt-5 text-sm leading-relaxed text-zinc-600">
            A operação oscila, mas continua conseguindo retornar naturalmente ao
            comportamento esperado.
          </p>
        </div>

        <div className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm">
          <div className="mb-6 flex items-center gap-3">
            <div className="h-3 w-3 rounded-full bg-red-500" />

            <p className="text-sm font-semibold text-zinc-950">
              Degradação persistente
            </p>
          </div>

          <div className="relative h-28 overflow-hidden rounded-2xl bg-zinc-50">
            <div className="absolute inset-0 flex items-center px-4">
              <div className="h-px w-full border-t border-dashed border-zinc-300" />
            </div>

            <svg
              viewBox="0 0 400 120"
              className="absolute inset-0 h-full w-full"
              preserveAspectRatio="none"
            >
              <path
                d="M0 60 C40 40, 80 70, 120 65 S200 80, 240 90 S320 100, 400 110"
                fill="none"
                stroke="currentColor"
                className="text-red-500"
                strokeWidth="3"
                strokeLinecap="round"
              />
            </svg>
          </div>

          <p className="mt-5 text-sm leading-relaxed text-zinc-600">
            O comportamento continua se afastando do baseline e já não consegue
            mais se recuperar sozinho.
          </p>
        </div>
      </div>

      <div className="mt-8 rounded-3xl border border-violet-200 bg-violet-50 p-6">
        <p className="text-sm leading-relaxed text-violet-900">
          O Ohrly não tenta detectar qualquer oscilação. Ele busca entender
          quando uma operação começou a sobreviver além do seu ciclo natural de
          recuperação.
        </p>
      </div>
    </section>
  );
}