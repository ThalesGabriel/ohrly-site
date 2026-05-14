import {
  Activity,
  AlertTriangle,
  Gauge,
  GitCompare,
  TimerReset,
  Waves,
} from "lucide-react";

const regimeInsights = [
  {
    icon: Gauge,
    title: "Severidade isolada não bastava",
    text:
      "Um episódio podia ter magnitude muito alta e ainda assim ser absorvido dentro do ciclo natural da operação.",
  },
  {
    icon: TimerReset,
    title: "Persistência isolada também não bastava",
    text:
      "Um drift podia ultrapassar o ciclo de recuperação, mas só virava pré-incidente quando mantinha magnitude severa.",
  },
  {
    icon: GitCompare,
    title: "O regime dependia da combinação",
    text:
      "A leitura passou a combinar duração relativa, magnitude contextual e perda de recuperação natural.",
  },
];

const examples = [
  {
    label: "Evento severo",
    rpa: "RPA 1",
    duration: "7 dias",
    cycle: "p90: 11,8 dias",
    magnitude: "82,80",
    description:
      "Magnitude extrema, mas ainda dentro do ciclo natural de recuperação. A operação sofreu um choque forte, porém absorvível.",
    tone: "border-amber-200 bg-amber-50 text-amber-800",
  },
  {
    label: "Degradation",
    rpa: "RPA 3",
    duration: "10 dias",
    cycle: "p90: 9,4 dias",
    magnitude: "16,78",
    description:
      "Magnitude menor, mas persistência além do ciclo. O problema deixou de ser pico e passou a indicar perda estrutural de recuperação.",
    tone: "border-orange-200 bg-orange-50 text-orange-800",
  },
  {
    label: "Pre-incident",
    rpa: "RPA 5",
    duration: "30 dias",
    cycle: "p90: 4 dias",
    magnitude: "32,98",
    description:
      "Persistência muito além do ciclo e magnitude severa sustentada. Aqui a operação já indicava mudança de regime operacional.",
    tone: "border-violet-200 bg-violet-50 text-violet-800",
  },
];

const regimes = [
  {
    name: "RUÍDO",
    description: "Desvio absorvível dentro do comportamento esperado.",
  },
  {
    name: "EVENTO_SEVERO",
    description: "Alta magnitude, mas ainda dentro da capacidade de recuperação.",
  },
  {
    name: "SINAL_RELEVANTE",
    description: "Persistência relevante, mas sem severidade sustentada.",
  },
  {
    name: "DEGRADATION",
    description: "Perda de recuperação natural com magnitude alta.",
  },
  {
    name: "PRE_INCIDENT",
    description: "Perda de recuperação natural com severidade sustentada.",
  },
];

export function OperationalRegimeSection() {
  return (
    <section className="border-t border-zinc-200 bg-white px-12 py-10">
      <div className="max-w-7xl">
        <span className="mb-4 inline-flex rounded-full bg-violet-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-violet-700">
          Quarta leitura comportamental
        </span>

        <h2 className="max-w-6xl text-3xl font-semibold tracking-tight text-zinc-950 md:text-4xl">
          O modelo passou a distinguir evento severo, degradação e pré-incidente.
        </h2>

        <p className="mt-5 max-w-6xl text-base leading-7 text-zinc-600">
          A quarta leitura respondeu uma dúvida central do estudo: ultrapassar o
          ciclo natural de recuperação era suficiente para chamar algo de
          pré-incidente? A resposta foi não. O regime operacional precisava
          combinar persistência contextual e magnitude sustentada.
        </p>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {regimeInsights.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-violet-100 text-violet-700">
                    <Icon className="h-5 w-5" />
                  </div>

                  <h3 className="text-sm font-semibold text-zinc-950">
                    {item.title}
                  </h3>
                </div>

                <p className="mt-3 text-sm leading-6 text-zinc-600">
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-8 rounded-3xl border border-zinc-200 bg-zinc-50/70 p-6">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-violet-700 shadow-sm">
              <GitCompare className="h-5 w-5" />
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-violet-700">
                A mudança conceitual
              </p>

              <h3 className="mt-1 text-xl font-semibold tracking-tight text-zinc-950">
                A mesma severidade podia representar estados diferentes.
              </h3>
            </div>
          </div>

          <p className="mt-5 max-w-6xl text-base leading-7 text-zinc-600">
            Um pico extremo não significava automaticamente risco estrutural se a
            operação conseguia absorvê-lo dentro do próprio ciclo. Ao mesmo tempo,
            um desvio menos intenso podia representar degradação real quando
            sobrevivia além da capacidade histórica de recuperação.
          </p>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {examples.map((example) => (
            <div
              key={example.label}
              className={`rounded-2xl border p-5 shadow-sm ${example.tone}`}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] opacity-80">
                    {example.rpa}
                  </p>

                  <h3 className="mt-2 text-lg font-semibold">
                    {example.label}
                  </h3>
                </div>

                {example.label === "Pre-incident" ? (
                  <AlertTriangle className="h-5 w-5 opacity-70" />
                ) : example.label === "Degradation" ? (
                  <Waves className="h-5 w-5 opacity-70" />
                ) : (
                  <Activity className="h-5 w-5 opacity-70" />
                )}
              </div>

              <div className="mt-5 grid grid-cols-3 gap-3 text-sm">
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

                <div className="rounded-xl bg-white/60 p-3">
                  <p className="text-xs font-medium uppercase tracking-[0.16em] opacity-70">
                    Magnitude
                  </p>
                  <p className="mt-1 font-semibold">{example.magnitude}</p>
                </div>
              </div>

              <p className="mt-5 text-sm leading-6 opacity-90">
                {example.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-8 rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500">
            Nova taxonomia operacional
          </p>

          <div className="mt-5 grid gap-3 md:grid-cols-5">
            {regimes.map((regime) => (
              <div
                key={regime.name}
                className="rounded-2xl border border-zinc-200 bg-zinc-50/70 p-4"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-zinc-950">
                  {regime.name}
                </p>

                <p className="mt-3 text-sm leading-6 text-zinc-600">
                  {regime.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-5 rounded-3xl border border-violet-200 bg-violet-50/40 p-8 shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-700">
            Insight central
          </p>

          <p className="mt-5 max-w-6xl text-base leading-7 text-zinc-700">
            A quarta leitura mostrou que pré-incidente não é apenas uma operação
            severa, nem apenas uma operação persistente. Pré-incidente é quando a
            pressão sobrevive além do ciclo natural de recuperação e continua
            severa o suficiente para sugerir mudança de regime operacional.
          </p>
        </div>
      </div>
    </section>
  );
}
