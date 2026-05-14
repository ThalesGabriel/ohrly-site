import {
  Activity,
  ArrowRight,
  GitBranch,
  Layers3,
  Network,
  Radar,
  Waves,
} from "lucide-react";

const shifts = [
  {
    icon: Activity,
    title: "Intensidade não explicava a trajetória",
    text:
      "Dois episódios severos podiam evoluir de formas diferentes: um como choque absorvível, outro como degradação persistente.",
  },
  {
    icon: Waves,
    title: "Persistência não explicava o alcance",
    text:
      "Um drift podia durar muito tempo e ainda assim permanecer localizado em poucas dimensões operacionais.",
  },
  {
    icon: Network,
    title: "Propagação indicava evolução",
    text:
      "Quando múltiplas dimensões começavam a ser afetadas, o problema deixava de parecer apenas local e passava a revelar trajetória.",
  },
];

const archetypes = [
  {
    name: "OSCILAÇÃO_OPERACIONAL",
    title: "Variação absorvível",
    text:
      "Desvio de curta ou média duração, sem força suficiente para alterar o comportamento estrutural da operação.",
    tone: "border-zinc-200 bg-zinc-50 text-zinc-700",
  },
  {
    name: "CHOQUE_OPERACIONAL",
    title: "Explosão intensa e curta",
    text:
      "Alta magnitude concentrada em pouco tempo. Assusta, mas pode ser absorvida se não persistir.",
    tone: "border-amber-200 bg-amber-50 text-amber-800",
  },
  {
    name: "DEGRADAÇÃO_LOCALIZADA",
    title: "Persistente, mas contida",
    text:
      "O problema sobrevive ao ciclo natural de recuperação, mas ainda não se espalha por muitas dimensões.",
    tone: "border-orange-200 bg-orange-50 text-orange-800",
  },
  {
    name: "DEGRADAÇÃO_PROGRESSIVA",
    title: "Propagação em evolução",
    text:
      "O desvio começa a afetar mais dimensões, indicando que a degradação está deixando de ser apenas local.",
    tone: "border-violet-200 bg-violet-50 text-violet-800",
  },
];

const examples = [
  {
    rpa: "RPA 1",
    archetype: "DEGRADAÇÃO_PROGRESSIVA",
    magnitude: "82,80",
    propagation: "3",
    persistence: "MEDIUM",
    text:
      "Magnitude extrema e propagação relevante, mas ainda sem ultrapassar o ciclo extremo de recuperação. Não era apenas evento severo: era uma trajetória de propagação em andamento.",
    tone: "border-violet-200 bg-violet-50 text-violet-800",
  },
  {
    rpa: "RPA 4",
    archetype: "DEGRADAÇÃO_LOCALIZADA",
    magnitude: "35,39",
    propagation: "2",
    persistence: "BEYOND_RECOVERY_CYCLE",
    text:
      "Drift muito longo e severo, mas com propagação inicial. O problema era estrutural, porém ainda relativamente contido.",
    tone: "border-orange-200 bg-orange-50 text-orange-800",
  },
  {
    rpa: "RPA 2",
    archetype: "OSCILAÇÃO_OPERACIONAL",
    magnitude: "19,32",
    propagation: "1",
    persistence: "SHORT",
    text:
      "Magnitude alta, mas curta e localizada. O comportamento ainda cabia como oscilação operacional absorvível.",
    tone: "border-zinc-200 bg-zinc-50 text-zinc-700",
  },
];

export function SixthQuery() {
  return (
    <section className="border-t border-zinc-200 bg-white px-12 py-10">
      <div className="max-w-7xl">
        <span className="mb-4 inline-flex rounded-full bg-violet-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-violet-700">
          Sexta leitura comportamental
        </span>

        <h2 className="max-w-6xl text-3xl font-semibold tracking-tight text-zinc-950 md:text-4xl">
          O modelo deixou de perguntar apenas “qual é o estado?” e passou a perguntar “que tipo de degradação é essa?”.
        </h2>

        <p className="mt-5 max-w-6xl text-base leading-7 text-zinc-600">
          A sexta leitura surgiu porque o rótulo EVENTO_SEVERO ainda agrupava
          comportamentos muito diferentes. Um choque curto e intenso não tinha a
          mesma natureza de uma degradação longa, severa e localizada.
        </p>

        <p className="mt-4 max-w-6xl text-base leading-7 text-zinc-600">
          Por isso, a análise passou a separar estado operacional de arquétipo
          comportamental. O estado dizia o quão preocupante era a condição atual.
          O arquétipo descrevia a forma como o problema estava evoluindo.
        </p>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {shifts.map((item) => {
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
              <Layers3 className="h-5 w-5" />
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-violet-700">
                A mudança conceitual
              </p>

              <h3 className="mt-1 text-xl font-semibold tracking-tight text-zinc-950">
                Estado e arquétipo passaram a responder perguntas diferentes.
              </h3>
            </div>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-[1fr_auto_1fr] md:items-center">
            <div className="rounded-2xl border border-zinc-200 bg-white p-5">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-zinc-500">
                Estado operacional
              </p>

              <p className="mt-3 text-base leading-7 text-zinc-700">
                Indica o nível de atenção necessário agora: ruído, sinal relevante,
                degradação ou pré-incidente.
              </p>
            </div>

            <div className="hidden justify-center md:flex">
              <ArrowRight className="h-6 w-6 text-violet-500" />
            </div>

            <div className="rounded-2xl border border-violet-200 bg-violet-50/50 p-5">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-violet-700">
                Arquétipo comportamental
              </p>

              <p className="mt-3 text-base leading-7 text-zinc-700">
                Explica a natureza do fenômeno: oscilação, choque, degradação
                localizada ou degradação progressiva.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500">
            Arquétipos observados
          </p>

          <h3 className="mt-3 max-w-6xl text-2xl font-semibold tracking-tight text-zinc-950">
            A degradação passou a ser entendida pela sua dinâmica, não apenas pela sua gravidade.
          </h3>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-4">
          {archetypes.map((item) => (
            <div
              key={item.name}
              className={`rounded-2xl border p-5 shadow-sm ${item.tone}`}
            >
              <p className="text-xs font-semibold uppercase tracking-[0.14em] opacity-80">
                {item.name}
              </p>

              <h4 className="mt-3 text-base font-semibold">
                {item.title}
              </h4>

              <p className="mt-3 text-sm leading-6 opacity-90">
                {item.text}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500">
            Evidências nos resultados
          </p>

          <h3 className="mt-3 max-w-6xl text-2xl font-semibold tracking-tight text-zinc-950">
            Episódios parecidos em gravidade revelavam trajetórias diferentes.
          </h3>
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
                    {example.archetype}
                  </h4>
                </div>

                <Radar className="h-5 w-5 opacity-70" />
              </div>

              <div className="mt-5 grid grid-cols-3 gap-3 text-sm">
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

                <div className="rounded-xl bg-white/60 p-3">
                  <p className="text-xs font-medium uppercase tracking-[0.16em] opacity-70">
                    Persist.
                  </p>
                  <p className="mt-1 font-semibold">{example.persistence}</p>
                </div>
              </div>

              <p className="mt-5 text-sm leading-6 opacity-90">
                {example.text}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-5 rounded-3xl border border-violet-200 bg-violet-50/40 p-8 shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-700">
            Insight central
          </p>

          <p className="mt-5 max-w-6xl text-base leading-7 text-zinc-700">
            A sexta leitura mostrou que a operação não apenas entra em estados
            diferentes; ela degrada de formas diferentes. Ao separar estado e
            arquétipo, o Ohrly passou a interpretar a trajetória do problema — se
            ele é um choque, uma oscilação, uma degradação localizada ou uma
            degradação em propagação.
          </p>
        </div>
      </div>
    </section>
  );
}
