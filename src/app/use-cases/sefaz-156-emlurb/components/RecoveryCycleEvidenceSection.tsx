import { Activity } from "lucide-react";

const examples = [
  {
    rpa: "RPA 4",
    duration: "35 dias",
    cycle: "p90: 24,8 dias",
    interpretation: "PRE_INCIDENT",
    text: "A degradação sobreviveu além do limite histórico de recuperação e indicou mudança estrutural de regime operacional.",
    tone: "border-violet-200 bg-violet-50 text-violet-800",
  },
  {
    rpa: "RPA 1",
    duration: "7 dias",
    cycle: "mediana: 7 dias",
    interpretation: "RUÍDO",
    text: "Mesmo com pressão extrema, o episódio ainda ocorreu dentro do ciclo esperado de recuperação da operação.",
    tone: "border-emerald-200 bg-emerald-50 text-emerald-800",
  },
  {
    rpa: "RPA 3",
    duration: "12 dias",
    cycle: "p90: 11 dias",
    interpretation: "DEGRADATION",
    text: "A pressão não foi a mais intensa, mas persistiu além do ciclo natural e passou a indicar perda de reversibilidade.",
    tone: "border-orange-200 bg-orange-50 text-orange-800",
  },
];

export function RecoveryCycleEvidenceSection() {
  return (
    <section className="border-t border-zinc-200 bg-white px-12 py-10">
      <div className="max-w-7xl">
        <span className="mb-4 inline-flex rounded-full bg-zinc-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-zinc-600">
          Evidências da terceira leitura
        </span>

        <h2 className="max-w-6xl text-3xl font-semibold tracking-tight text-zinc-950 md:text-4xl">
          O mesmo nível de pressão podia significar coisas diferentes em
          operações diferentes.
        </h2>

        <p className="mt-5 max-w-6xl text-base leading-7 text-zinc-600">
          Os resultados mostraram que a intensidade do desvio não bastava para
          classificar uma operação como degradada. O que importava era a relação
          entre duração, pressão e ciclo histórico de recuperação daquela RPA.
        </p>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {examples.map((example) => (
            <div
              key={example.rpa}
              className={`rounded-2xl border p-5 shadow-sm ${example.tone}`}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] opacity-80">
                    {example.rpa}
                  </p>

                  <h3 className="mt-2 text-lg font-semibold">
                    {example.interpretation}
                  </h3>
                </div>

                <Activity className="h-5 w-5 opacity-70" />
              </div>

              <div className="mt-5 grid grid-cols-2 gap-3 text-sm">
                <div className="rounded-xl bg-white/60 p-3">
                  <p className="text-xs font-medium uppercase tracking-[0.16em] opacity-70">
                    Drift
                  </p>
                  <p className="mt-1 font-semibold">{example.duration}</p>
                </div>

                <div className="rounded-xl bg-white/60 p-3">
                  <p className="text-xs font-medium uppercase tracking-[0.16em] opacity-70">
                    Ciclo
                  </p>
                  <p className="mt-1 font-semibold">{example.cycle}</p>
                </div>
              </div>

              <p className="mt-5 text-sm leading-6 opacity-90">
                {example.text}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}