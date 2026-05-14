export function RpiIntro() {
  const factors = [
    {
      title: "Persistência",
      value: "+18d",
      description:
        "o desvio continua sobrevivendo além do ciclo natural de recuperação",
    },
    {
      title: "Magnitude",
      value: "+42%",
      description:
        "o comportamento se afastou significativamente do baseline esperado",
    },
    {
      title: "Propagação",
      value: "3 fluxos",
      description:
        "a degradação começou a contaminar outras partes da operação",
    },
  ];

  return (
    <section className="relative overflow-hidden border-b border-zinc-200 bg-white px-12 py-10 md:px-12">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(1, 1, 1, 0.08),transparent_45%)]" />

      <div className="relative mx-auto ">
        <div className="grid gap-16 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-violet-600">
              Recovery Pressure Index
            </p>

            <h2 className="max-w-3xl text-4xl font-bold leading-tight tracking-tight text-zinc-950 md:text-5xl">
              O problema não é apenas a degradação.
              <span className="block text-violet-600">
                É quando continuar esperando começa a ficar caro.
              </span>
            </h2>

            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-zinc-600">
              O RPI transforma sinais dispersos em uma leitura contínua da
              pressão acumulada da operação.
            </p>

            <div className="mt-10 border-l-2 border-violet-500 pl-6">
              <p className="text-sm leading-relaxed text-zinc-600">
                Uma operação pode continuar funcionando enquanto perde,
                progressivamente, sua capacidade natural de recuperação.
              </p>

              <p className="mt-4 text-sm font-medium text-zinc-900">
                O RPI mede quando essa degradação começa a se tornar
                economicamente perigosa.
              </p>
            </div>
          </div>

          <div className="rounded-3xl border border-zinc-200 bg-zinc-50 p-6 shadow-[0_20px_80px_-40px_rgba(0,0,0,0.25)]">
            <div className="mb-8 flex items-center justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">
                  Recovery Pressure
                </p>

                <div className="mt-2 flex items-end gap-2">
                  <span className="text-6xl font-bold tracking-tight text-zinc-950">
                    579
                  </span>

                  <span className="mb-2 rounded-full bg-amber-100 px-3 py-1 text-xs font-medium text-amber-700">
                    CRITICAL RECOVERY ZONE
                  </span>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              {factors.map((factor) => (
                <div
                  key={factor.title}
                  className="rounded-2xl border border-zinc-200 bg-white p-5"
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-semibold text-zinc-900">
                      {factor.title}
                    </h3>

                    <span className="text-sm font-bold text-violet-600">
                      {factor.value}
                    </span>
                  </div>

                  <p className="mt-2 text-sm leading-relaxed text-zinc-600">
                    {factor.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <div className="mb-3 flex items-center justify-between text-xs text-zinc-500">
                <span>EARLY</span>
                <span>EXPENSIVE</span>
              </div>

              <div className="relative h-3 overflow-hidden rounded-full bg-zinc-200">
                <div className="absolute inset-y-0 left-0 w-[72%] rounded-full bg-gradient-to-r from-emerald-500 via-amber-500 to-red-500" />

                <div className="absolute right-[28%] top-1/2 h-5 w-5 -translate-y-1/2 rounded-full border-4 border-white bg-zinc-950 shadow-lg" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}