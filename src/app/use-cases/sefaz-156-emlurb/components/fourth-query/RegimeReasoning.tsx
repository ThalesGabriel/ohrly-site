import {
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

export function RegimeReasoning() {
  return (
    <section className=" bg-white px-12 py-10">
      <div className="">
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

      </div>
    </section>
  );
}
