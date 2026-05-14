export default function CTA() {
  return (
    <section className="relative overflow-hidden bg-zinc-950 px-8 py-32 text-white md:px-12">
      <div className="absolute inset-0 opacity-[0.04]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage: `
                linear-gradient(to right, #ffffff 1px, transparent 1px),
                linear-gradient(to bottom, #ffffff 1px, transparent 1px)
              `,
            backgroundSize: "48px 48px",
          }}
        />
      </div>

      <div className="absolute left-[-10%] top-[-10%] h-[500px] w-[500px] rounded-full bg-violet-500/10 blur-3xl" />
      <div className="absolute bottom-[-10%] right-[-10%] h-[500px] w-[500px] rounded-full bg-violet-400/10 blur-3xl" />

      <div className="relative mx-auto max-w-5xl text-center">
        <p className="text-xs font-bold uppercase tracking-[0.22em] text-violet-300">
          Manifesto operacional
        </p>

        <h2 className="mt-8 text-5xl font-bold leading-tight tracking-tight md:text-6xl">
          Empresas não sofrem apenas com incidentes.
        </h2>

        <p className="mx-auto mt-10 max-w-3xl text-xl leading-relaxed text-zinc-300">
          Elas sofrem com perda gradual de coerência entre estratégia e comportamento operacional.
        </p>

        <div className="mt-16 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <button className="rounded-full bg-white px-8 py-4 text-sm font-semibold text-zinc-950 transition hover:bg-zinc-200">
            Explorar a tese
          </button>

          <button className="rounded-full border border-zinc-700 px-8 py-4 text-sm font-semibold text-zinc-200 transition hover:border-zinc-500 hover:bg-zinc-900">
            Ver casos operacionais
          </button>
        </div>
      </div>
    </section>
  )
}