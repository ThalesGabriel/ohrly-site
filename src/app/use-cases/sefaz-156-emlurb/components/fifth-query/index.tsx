import {
  Activity,
  AlertTriangle,
  GitBranch,
  Network,
  ShieldCheck,
  Waves,
} from "lucide-react";

const insights = [
  {
    icon: Activity,
    title: "Severidade ainda podia ser localizada",
    text:
      "Mesmo episódios longos e intensos podiam permanecer concentrados em poucas dimensões da operação.",
  },
  {
    icon: GitBranch,
    title: "Propagação virou critério de regime",
    text:
      "O modelo passou a observar quantas dimensões operacionais eram afetadas ao mesmo tempo.",
  },
  {
    icon: ShieldCheck,
    title: "O modelo ficou mais conservador",
    text:
      "Casos graves deixaram de virar pré-incidente automaticamente quando não havia propagação suficiente.",
  },
];

const examples = [
  {
    rpa: "RPA 5",
    duration: "30 dias",
    cycle: "p90: 4 dias",
    magnitude: "32,98",
    propagation: "1",
    regime: "EVENTO_SEVERO",
    description:
      "Persistência extrema e magnitude severa, mas propagação localizada. O comportamento era grave, porém ainda não sistêmico.",
    tone: "border-amber-200 bg-amber-50 text-amber-800",
  },
  {
    rpa: "RPA 2",
    duration: "21 dias",
    cycle: "p90: 11,2 dias",
    magnitude: "42,40",
    propagation: "2",
    regime: "EVENTO_SEVERO",
    description:
      "Perda de recuperação natural e magnitude severa, mas ainda com propagação inicial, insuficiente para pré-incidente.",
    tone: "border-orange-200 bg-orange-50 text-orange-800",
  },
  {
    rpa: "RPA 1",
    duration: "7 dias",
    cycle: "p90: 11,8 dias",
    magnitude: "82,80",
    propagation: "3",
    regime: "EVENTO_SEVERO",
    description:
      "Magnitude extrema e propagação relevante, mas ainda dentro do ciclo natural. Forte, espalhado, mas absorvível.",
    tone: "border-violet-200 bg-violet-50 text-violet-800",
  },
];

const propagationLevels = [
  {
    label: "LOCALIZED",
    description: "O desvio permanece concentrado em uma dimensão principal.",
  },
  {
    label: "INITIAL_PROPAGATION",
    description: "O comportamento começa a afetar mais de uma dimensão.",
  },
  {
    label: "RELEVANT_PROPAGATION",
    description: "A degradação aparece em múltiplas dimensões operacionais.",
  },
  {
    label: "SYSTEMIC_PROPAGATION",
    description: "O desvio deixa de parecer local e passa a sugerir contaminação sistêmica.",
  },
];

export function FifthQuery() {
  return (
    <section className="border-t border-zinc-200 bg-white px-12 py-10">
      <div className="max-w-7xl">
        <span className="mb-4 inline-flex rounded-full bg-violet-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-violet-700">
          Quinta leitura comportamental
        </span>

        <h2 className="max-w-6xl text-3xl font-semibold tracking-tight text-zinc-950 md:text-4xl">
          Pré-incidente deixou de ser apenas severidade persistente. Passou a exigir propagação.
        </h2>

        <p className="mt-5 max-w-6xl text-base leading-7 text-zinc-600">
          A quinta leitura refinou a interpretação anterior. Até aqui, uma operação
          poderia parecer crítica quando combinava perda de recuperação natural e
          magnitude severa. Mas os resultados mostraram que isso ainda não era
          suficiente para chamar o estado de pré-incidente.
        </p>

        <p className="mt-4 max-w-6xl text-base leading-7 text-zinc-600">
          Faltava entender se a degradação permanecia localizada ou se começava a
          se espalhar por múltiplas dimensões da operação, como queda de atendimento,
          excesso em preparação, execução, pendência ou envelhecimento operacional.
        </p>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {insights.map((item) => {
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
              <Network className="h-5 w-5" />
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-violet-700">
                Propagation score
              </p>

              <h3 className="mt-1 text-xl font-semibold tracking-tight text-zinc-950">
                O modelo passou a perguntar: quantas dimensões estão sendo afetadas ao mesmo tempo?
              </h3>
            </div>
          </div>

          <p className="mt-5 max-w-6xl text-base leading-7 text-zinc-600">
            Cada dimensão operacional relevante acima do limite adicionava um ponto
            de propagação. Assim, a leitura deixou de olhar apenas para a força do
            desvio e passou a observar sua capacidade de espalhamento.
          </p>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-4">
          {propagationLevels.map((level) => (
            <div
              key={level.label}
              className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-zinc-950">
                {level.label}
              </p>

              <p className="mt-3 text-sm leading-6 text-zinc-600">
                {level.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500">
            O que mudou nos resultados
          </p>

          <h3 className="mt-3 max-w-6xl text-2xl font-semibold tracking-tight text-zinc-950">
            Casos que pareciam pré-incidente foram rebaixados para evento severo.
          </h3>

          <p className="mt-4 max-w-6xl text-base leading-7 text-zinc-600">
            Isso não enfraqueceu o modelo. Pelo contrário: tornou a interpretação
            mais precisa. A Ohrly passou a diferenciar operações graves, mas ainda
            localizadas, de degradações que começavam a se comportar como fenômenos
            sistêmicos.
          </p>
        </div>

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

                  <h4 className="mt-2 text-lg font-semibold">
                    {example.regime}
                  </h4>
                </div>

                <Activity className="h-5 w-5 opacity-70" />
              </div>

              <div className="mt-5 grid grid-cols-2 gap-3 text-sm md:grid-cols-4">
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

                <div className="rounded-xl bg-white/60 p-3">
                  <p className="text-xs font-medium uppercase tracking-[0.16em] opacity-70">
                    Prop.
                  </p>
                  <p className="mt-1 font-semibold">{example.propagation}</p>
                </div>
              </div>

              <p className="mt-5 text-sm leading-6 opacity-90">
                {example.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-5 rounded-3xl border border-violet-200 bg-violet-50/40 p-8 shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-700">
            Insight central
          </p>

          <p className="mt-5 max-w-6xl text-base leading-7 text-zinc-700">
            A quinta leitura tornou o modelo mais conservador: pré-incidente passou
            a exigir perda de recuperação natural, magnitude severa e propagação
            suficiente para indicar que a degradação deixou de ser local. Isso
            reduziu falsos positivos conceituais e aproximou a interpretação de uma
            leitura mais sistêmica da operação.
          </p>
        </div>
      </div>
    </section>
  );
}
