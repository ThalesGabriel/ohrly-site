export function ArchetypesIntro() {
  const archetypes = [
    {
      title: "Choque operacional",
      description:
        "Mudança forte, rápida e localizada. Chama atenção pela intensidade, mas ainda pode não ter persistência suficiente para indicar degradação estrutural.",
      pattern: "alta magnitude · baixa persistência",
      color: "bg-amber-500",
    },
    {
      title: "Degradação localizada",
      description:
        "O comportamento persiste além do esperado em uma parte específica da operação, mas ainda não se espalhou de forma relevante.",
      pattern: "alta persistência · baixa propagação",
      color: "bg-orange-500",
    },
    {
      title: "Degradação sistêmica",
      description:
        "A degradação persiste, cresce em intensidade e começa a aparecer em mais regiões, etapas ou sinais da operação.",
      pattern: "persistência · magnitude · propagação",
      color: "bg-red-600",
    },
  ];

  return (
    <section className="border-b border-zinc-200 bg-white px-12 py-14">
      <div className="mb-10 max-w-5xl">
        <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-violet-600">
          Arquétipos operacionais
        </p>

        <h2 className="max-w-4xl text-3xl font-bold leading-tight text-zinc-950">
          Nem toda degradação se comporta do mesmo jeito.
        </h2>

        <p className="mt-4 text-sm leading-relaxed text-zinc-600">
          Depois que um comportamento deixa de parecer ruído, a Ohrly interpreta
          qual tipo de padrão operacional está se formando. Isso ajuda a separar
          uma oscilação intensa, mas passageira, de uma degradação persistente
          ou de um problema que começou a se espalhar pela operação.
        </p>
      </div>

      <div className="mb-8 grid gap-5 lg:grid-cols-3">
        {archetypes.map((item) => (
          <article
            key={item.title}
            className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm"
          >
            <div className={`mb-5 h-2 w-16 rounded-full ${item.color}`} />

            <h3 className="text-xl font-bold text-zinc-950">{item.title}</h3>

            <p className="mt-3 text-sm leading-relaxed text-zinc-600">
              {item.description}
            </p>

            <div className="mt-5 rounded-2xl bg-zinc-50 p-4">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-zinc-500">
                Padrão dominante
              </p>

              <p className="mt-2 text-sm font-semibold text-zinc-800">
                {item.pattern}
              </p>
            </div>
          </article>
        ))}
      </div>

      <div className="rounded-2xl border border-violet-200 bg-violet-50 p-5">
        <p className="text-sm leading-relaxed text-violet-900">
          Estados ajudam a responder em que condição a operação está. Arquétipos
          ajudam a entender a forma da degradação: se ela é intensa, persistente,
          localizada ou propagada.
        </p>
      </div>
    </section>
  );
}