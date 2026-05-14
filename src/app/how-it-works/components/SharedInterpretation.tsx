import {
  ArrowRight,
  BarChart3,
  GitBranch,
  Headphones,
  Settings2,
  Users,
  Wrench,
} from "lucide-react";

export function SharedInterpretation() {
  const fragmentedSignals = [
    { area: "Produto", signal: "Queda de conversão", icon: BarChart3 },
    { area: "Operação", signal: "Fila aumentando", icon: Wrench },
    { area: "Engenharia", signal: "Pequenos desvios de latência", icon: Settings2 },
    { area: "Atendimento", signal: "Mais reclamações", icon: Headphones },
    { area: "Gestão", signal: "Crescimento desacelerando", icon: Users },
  ];

  const journeySteps = [
    { step: "START", label: "Usuário inicia solicitação", state: "normal" },
    { step: "BILL_REQUEST", label: "Solicita segunda via", state: "normal" },
    { step: "GENERATE_BILL", label: "Geração do boleto", state: "degraded" },
    { step: "RETRY", label: "Tentativas adicionais", state: "warning" },
    { step: "HUMAN_HANDOFF", label: "Transferência humana", state: "critical" },
  ];

  const impacts = [
    { value: "+42%", label: "tentativas adicionais" },
    { value: "+31%", label: "handoff humano" },
    { value: "+18%", label: "abandono após falha" },
    { value: "2.4x", label: "esforço médio da jornada" },
  ];

  const contexts = [
    { context: "PIX + MOBILE + NIGHT", signal: "+61% retries" },
    { context: "PIX + WEEKEND", signal: "2.8x mais esforço" },
    { context: "BILL_REQUEST + MOBILE", signal: "+34% handoff humano" },
    { context: "FIRST_ATTEMPT + NIGHT", signal: "+22% abandono" },
  ];

  const getStateColor = (state: string) => {
    if (state === "normal") return "bg-zinc-300";
    if (state === "warning") return "bg-amber-500";
    if (state === "degraded") return "bg-orange-500";
    return "bg-red-500";
  };

  return (
    <section className="border-b border-zinc-200 bg-white px-12 py-10">
      <div className="max-w-5xl">
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-violet-600">
          Interpretação operacional compartilhada
        </p>

        <h2 className="text-3xl font-bold leading-tight text-zinc-950 md:text-4xl">
          O problema não é falta de sinais. <span className="text-violet-600">É falta de uma trajetória comum.</span>
        </h2>

        <p className="mt-4 text-sm leading-relaxed text-zinc-600 md:text-base">
          Quando um estado comportamental aparece, a Ohrly reconstrói a
          trajetória da operação para mostrar onde o comportamento começou a
          mudar, como ele se espalhou e por que passou a importar para o negócio.
        </p>
      </div>

      <div className="mt-10">
        <p className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-zinc-500">
          Sem leitura compartilhada
        </p>

        <div className="overflow-x-auto pb-2">
          <div className="flex min-w-[960px] gap-4">
            {fragmentedSignals.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.area}
                  className="w-[220px] shrink-0 rounded-3xl border border-zinc-200 bg-white p-5 shadow-sm"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-zinc-100">
                    <Icon className="h-5 w-5 text-zinc-700" />
                  </div>

                  <p className="mt-5 text-xs font-bold uppercase tracking-[0.16em] text-zinc-500">
                    {item.area}
                  </p>

                  <p className="mt-3 text-base font-semibold leading-snug text-zinc-950">
                    {item.signal}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        <p className="mt-4 max-w-3xl text-sm leading-relaxed text-zinc-600">
          Os sinais existem, mas aparecem separados. A degradação deixa de
          parecer um comportamento único e passa a parecer vários problemas
          locais competindo por interpretação.
        </p>
      </div>

      <div className="mt-12 rounded-3xl border border-violet-200 bg-violet-50 p-6 shadow-sm">
        <p className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-violet-700">
          Leitura Ohrly
        </p>

        <h3 className="text-2xl font-bold leading-tight text-zinc-950">
          A trajetória que explica o estado comportamental
        </h3>

        <div className="mt-6 rounded-2xl border border-violet-200 bg-white p-6">
          <div className="flex items-start gap-4">
            <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-violet-100">
              <GitBranch className="h-5 w-5 text-violet-700" />
            </div>

            <div>
              <p className="text-base font-semibold leading-relaxed text-zinc-950">
                O fluxo <span className="text-violet-700">bill_request</span>{" "}
                entrou em degradação funcional há 3 dias.
              </p>

              <p className="mt-2 text-sm leading-relaxed text-zinc-700">
                A origem mais provável do estado está no passo{" "}
                <span className="font-semibold text-zinc-950">
                  GENERATE_BILL
                </span>
                , onde a jornada começou a perder capacidade natural de
                recuperação.
              </p>
            </div>
          </div>

          <div className="mt-8 rounded-2xl bg-zinc-50 p-5">
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.16em] text-zinc-500">
              Trajetória reconstruída
            </p>

            <div className="overflow-x-auto">
              <div className="flex min-w-[760px] items-start gap-3">
                {journeySteps.map((item, index) => (
                  <div key={item.step} className="flex flex-1 items-start gap-3">
                    <div className="w-full rounded-2xl border border-zinc-200 bg-white p-4">
                      <div
                        className={`mb-3 h-2 w-10 rounded-full ${getStateColor(
                          item.state
                        )}`}
                      />

                      <p className="text-xs font-bold uppercase tracking-[0.14em] text-zinc-500">
                        {item.step}
                      </p>

                      <p className="mt-2 text-sm font-medium leading-snug text-zinc-900">
                        {item.label}
                      </p>
                    </div>

                    {index < journeySteps.length - 1 && (
                      <ArrowRight className="mt-10 h-4 w-4 shrink-0 text-zinc-400" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-6 grid gap-4 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.16em] text-zinc-500">
                Desde então
              </p>

              <div className="grid gap-3 sm:grid-cols-2">
                {impacts.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-xl border border-zinc-200 bg-white p-4"
                  >
                    <p className="text-2xl font-bold text-zinc-950">
                      {item.value}
                    </p>

                    <p className="mt-1 text-sm leading-relaxed text-zinc-600">
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.16em] text-violet-700">
                Contextos onde degrada mais
              </p>

              <div className="grid gap-3 sm:grid-cols-2">
                {contexts.map((item) => (
                  <div
                    key={item.context}
                    className="rounded-xl border border-violet-200 bg-violet-50 p-4"
                  >
                    <p className="text-sm font-bold text-zinc-950">
                      {item.context}
                    </p>

                    <p className="mt-1 text-sm leading-relaxed text-zinc-600">
                      {item.signal}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-6 rounded-2xl border border-violet-200 bg-violet-50 p-5">
            <p className="text-sm leading-relaxed text-violet-900">
              A leitura Ohrly não mostra apenas que existe degradação. Ela
              reconstrói a trajetória do estado: onde começou, quais passos
              passaram a exigir mais esforço e em quais contextos o comportamento
              se tornou mais persistente.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}