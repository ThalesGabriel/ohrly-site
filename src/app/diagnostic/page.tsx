import Link from "next/link";
import {
  Activity,
  ArrowRight,
  BarChart3,
  CalendarDays,
  Check,
  ChevronDown,
  Eye,
  Flag,
  LockKeyhole,
  Map,
  Search,
  ShieldCheck,
  Sparkles,
  Target,
  TrendingDown,
  Waves,
  X,
} from "lucide-react";

const whatWeFind = [
  {
    icon: Waves,
    title: "Sinais persistentes de degradação",
  },
  {
    icon: BarChart3,
    title: "Mudanças comportamentais relevantes",
  },
  {
    icon: Target,
    title: "Regiões de ambiguidade operacional",
  },
  {
    icon: Activity,
    title: "Perda gradual de recuperação e consistência",
  },
  {
    icon: Eye,
    title: "Fluxos que parecem saudáveis, mas mudaram de comportamento",
  },
];

const howItWorks = [
  {
    icon: Search,
    title: "Escolhemos um fluxo crítico",
    description:
      "Juntos, definimos o fluxo da sua operação que tem maior impacto para o negócio hoje.",
  },
  {
    icon: Activity,
    title: "Analisamos o comportamento operacional",
    description:
      "Aplicamos nossa metodologia para identificar padrões, persistência, desvios e sinais de degradação além do esperado.",
  },
  {
    icon: Flag,
    title: "Entregamos clareza operacional",
    description:
      "Transformamos os achados em insights acionáveis e uma janela de decisão antecipada para seu time.",
  },
];

const deliverables = [
  {
    icon: Map,
    title: "Mapa comportamental do fluxo",
    description:
      "Onde o comportamento mudou, quando começou e como evoluiu ao longo do tempo.",
  },
  {
    icon: CalendarDays,
    title: "Janela operacional de decisão",
    description:
      "Quanto tempo existia para agir antes do impacto explícito e quando o comportamento deixou de ser ruído.",
  },
  {
    icon: Sparkles,
    title: "Hipóteses operacionais",
    description:
      "Onde a degradação se concentra, possíveis causas comportamentais e impacto potencial.",
  },
  {
    icon: Check,
    title: "Recomendações iniciais",
    description:
      "Caminhos sugeridos: monitorar, investigar, ajustar, rollback parcial ou acompanhar.",
  },
];

const notNecessary = [
  "Substituir ferramentas atuais",
  "Integrar toda a sua stack",
  "Enviar dados sensíveis",
  "Mudar sua operação",
  "Alinhar com times técnicos de imediato",
];

const bestFit = [
  "Existem mudanças frequentes nos sistemas",
  "Há fluxos digitais críticos para o negócio",
  "Já ocorreram regressões difíceis de explicar",
  "Existem dados operacionais mínimos disponíveis",
  "A operação depende de estabilidade contínua",
];

const footerInsights = [
  {
    icon: CalendarDays,
    title: "Sinais aparecem antes",
    description: "Dias ou semanas antes do impacto explícito.",
  },
  {
    icon: BarChart3,
    title: "Decidir cedo reduz custo",
    description: "Menos retrabalho, menos impacto e mais contexto.",
  },
  {
    icon: ShieldCheck,
    title: "Clareza antecipada",
    description: "Mais confiança para investigar antes da urgência.",
  },
];

export default function InitialDiagnosisPage() {
  return (
    <main className="min-h-screen bg-[#f7f8fc] text-slate-950">
      <section className="relative overflow-hidden bg-[#020817] text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(99,102,241,0.22),transparent_34%),radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.16),transparent_28%)]" />
        <div className="relative mx-auto max-w-7xl px-6 py-6 lg:px-8">
          <header className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3">
              <div className="h-8 w-8 rounded-full border-[6px] border-indigo-500 border-r-indigo-300" />
              <span className="text-2xl font-semibold tracking-tight">ohrly</span>
            </Link>

            <nav className="hidden items-center gap-10 text-sm font-medium text-slate-200 md:flex">
              <Link className="hover:text-white" href="/how-it-works">
                Como funciona
              </Link>
              <Link className="hover:text-white" href="/use-cases">
                Casos de estudo
              </Link>
              <Link className="hover:text-white" href="/behavioral-observability">
                Behavioral Observability
              </Link>
              <Link className="hover:text-white" href="/for-whom">
                Para quem é
              </Link>
            </nav>

            <Link
              href="/diagnosis"
              className="hidden rounded-lg bg-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-950/30 transition hover:bg-indigo-500 md:inline-flex"
            >
              Solicitar diagnóstico
            </Link>
          </header>

          <div className="grid gap-12 py-16 lg:grid-cols-[1fr_1.05fr] lg:items-center lg:py-20">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-indigo-300">
                Diagnóstico inicial
              </p>
              <h1 className="mt-6 max-w-2xl text-4xl font-semibold tracking-tight text-white md:text-6xl md:leading-[1.05]">
                Descubra onde sua operação começou a degradar antes do incidente.
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
                Analisamos um fluxo crítico da sua operação para identificar sinais
                persistentes de degradação silenciosa e transformar comportamento em
                clareza para decisão.
              </p>

              <div className="mt-10 grid gap-5 sm:grid-cols-2">
                <TrustItem
                  icon={ShieldCheck}
                  title="Sem compromisso"
                  description="Análise inicial gratuita e sem obrigação."
                />
                <TrustItem
                  icon={LockKeyhole}
                  title="Confidencial e seguro"
                  description="Seus dados são tratados com segurança e sigilo absoluto."
                />
              </div>
            </div>

            <DiagnosticTimeline />
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-6 py-10 lg:grid-cols-[1fr_440px] lg:px-8 lg:py-12">
        <div className="space-y-8">
          <ContentSection number="1" title="O que é este diagnóstico?">
            <p className="max-w-3xl text-base leading-7 text-slate-600">
              Um olhar especializado sobre o comportamento real da sua operação
              para identificar degradações silenciosas que dashboards tradicionais
              não conseguem tornar evidentes.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
              {whatWeFind.map((item) => (
                <IconCard key={item.title} {...item} />
              ))}
            </div>
          </ContentSection>

          <ContentSection number="2" title="Como funciona">
            <div className="grid gap-6 md:grid-cols-3">
              {howItWorks.map((item, index) => (
                <ProcessStep key={item.title} index={index + 1} {...item} />
              ))}
            </div>
          </ContentSection>

          <ContentSection number="3" title="O que você recebe">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {deliverables.map((item) => (
                <DeliverableCard key={item.title} {...item} />
              ))}
            </div>
          </ContentSection>

          <div className="grid gap-6 lg:grid-cols-2">
            <ChecklistCard
              number="4"
              title="O que não é necessário"
              items={notNecessary}
              variant="positive"
            />
            <ChecklistCard
              number="5"
              title="Este diagnóstico gera mais valor quando:"
              items={bestFit}
              variant="positive"
            />
          </div>
        </div>

        <aside className="lg:sticky lg:top-6 lg:self-start">
          <DiagnosisForm />
        </aside>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="overflow-hidden rounded-2xl bg-[#020817] text-white shadow-2xl shadow-slate-950/20">
          <div className="grid gap-8 p-8 lg:grid-cols-[1.4fr_1fr] lg:p-10">
            <div className="border-l-2 border-indigo-500 pl-6">
              <h2 className="max-w-xl text-2xl font-semibold tracking-tight md:text-3xl">
                A maioria das operações não percebe quando começa a degradar.
              </h2>
              <p className="mt-4 text-xl font-semibold text-indigo-300">
                Só percebe quando recuperar já ficou caro.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-3">
              {footerInsights.map((item) => (
                <FooterInsight key={item.title} {...item} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function TrustItem({
  icon: Icon,
  title,
  description,
}: {
  icon: React.ElementType;
  title: string;
  description: string;
}) {
  return (
    <div className="flex gap-4">
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-indigo-400/30 bg-indigo-400/10 text-indigo-300">
        <Icon className="h-5 w-5" />
      </div>
      <div>
        <h3 className="font-semibold text-white">{title}</h3>
        <p className="mt-1 text-sm leading-6 text-slate-300">{description}</p>
      </div>
    </div>
  );
}

function DiagnosticTimeline() {
  const stages = [
    {
      label: "Normal",
      description: "Operação saudável, tudo dentro do esperado.",
      dot: "bg-indigo-300",
    },
    {
      label: "Sinais estranhos",
      description: "Pequenas variações começam a aparecer.",
      dot: "bg-slate-200",
    },
    {
      label: "Degradação silenciosa",
      description: "Comportamento se afasta do padrão de forma persistente.",
      dot: "bg-amber-400 shadow-[0_0_35px_rgba(251,191,36,0.9)]",
      active: true,
    },
    {
      label: "Incidente",
      description: "Impacto explícito, alertas disparam e urgência é acionada.",
      dot: "bg-red-500",
    },
  ];

  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 shadow-2xl shadow-black/20 backdrop-blur lg:p-8">
      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-indigo-300">
        O que costumamos encontrar
      </p>

      <div className="relative mt-10">
        <div className="absolute left-5 right-5 top-4 h-1 rounded-full bg-gradient-to-r from-indigo-400 via-amber-300 to-red-500" />
        <div className="grid grid-cols-4 gap-4">
          {stages.map((stage) => (
            <div key={stage.label} className="relative pt-10 text-center">
              <div
                className={`absolute left-1/2 top-0 h-8 w-8 -translate-x-1/2 rounded-full border-4 border-[#111827] ${stage.dot}`}
              />
              {stage.active && (
                <div className="absolute -top-16 left-1/2 hidden w-48 -translate-x-1/2 rounded-lg border border-amber-400/30 bg-amber-400/10 px-4 py-2 text-sm font-semibold text-amber-300 md:block">
                  Ohrly torna visível essa zona cinzenta.
                </div>
              )}
              <h3 className={stage.active ? "font-semibold text-amber-300" : "font-semibold text-white"}>
                {stage.label}
              </h3>
              <p className="mt-3 text-xs leading-5 text-slate-300 md:text-sm">
                {stage.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8 rounded-xl border border-white/10 bg-white/[0.04] p-5">
        <p className="text-sm leading-6 text-slate-200">
          A maioria das operações não percebe quando começa a degradar.
        </p>
        <p className="mt-1 font-semibold text-indigo-300">
          Só percebe quando recuperar já ficou caro.
        </p>
      </div>
    </div>
  );
}

function ContentSection({
  number,
  title,
  children,
}: {
  number: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="border-b border-slate-200 pb-8">
      <div className="flex items-start gap-4">
        <span className="text-2xl font-semibold text-indigo-600">{number}.</span>
        <div className="w-full">
          <h2 className="text-xl font-semibold tracking-tight text-slate-950 md:text-2xl">
            {title}
          </h2>
          <div className="mt-5">{children}</div>
        </div>
      </div>
    </section>
  );
}

function IconCard({ icon: Icon, title }: { icon: React.ElementType; title: string }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 text-center shadow-sm shadow-slate-200/60">
      <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600">
        <Icon className="h-6 w-6" />
      </div>
      <p className="mt-4 text-sm font-semibold leading-5 text-slate-900">{title}</p>
    </div>
  );
}

function ProcessStep({
  icon: Icon,
  title,
  description,
  index,
}: {
  icon: React.ElementType;
  title: string;
  description: string;
  index: number;
}) {
  return (
    <div className="relative rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
      <div className="flex items-center gap-4">
        <div className="flex h-16 w-16 items-center justify-center rounded-full border border-indigo-200 bg-indigo-50 text-indigo-600">
          <Icon className="h-7 w-7" />
        </div>
        {index < 3 && (
          <ArrowRight className="absolute -right-5 top-14 hidden h-6 w-6 text-indigo-500 md:block" />
        )}
      </div>
      <div className="mt-6 flex items-start gap-3">
        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-indigo-600 text-xs font-semibold text-white">
          {index}
        </span>
        <div>
          <h3 className="font-semibold text-slate-950">{title}</h3>
          <p className="mt-3 text-sm leading-6 text-slate-600">{description}</p>
        </div>
      </div>
    </div>
  );
}

function DeliverableCard({
  icon: Icon,
  title,
  description,
}: {
  icon: React.ElementType;
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 text-center shadow-sm shadow-slate-200/60">
      <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="mt-4 text-sm font-semibold text-slate-950">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-slate-600">{description}</p>
    </div>
  );
}

function ChecklistCard({
  number,
  title,
  items,
}: {
  number: string;
  title: string;
  items: string[];
  variant?: "positive" | "negative";
}) {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm shadow-slate-200/70">
      <h2 className="flex items-center gap-3 text-lg font-semibold text-slate-950">
        <span className="text-2xl text-indigo-600">{number}.</span>
        {title}
      </h2>
      <ul className="mt-5 space-y-3">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-3 text-sm text-slate-700">
            <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-emerald-200 bg-emerald-50 text-emerald-600">
              <Check className="h-3.5 w-3.5" />
            </span>
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
}

function DiagnosisForm() {
  return (
    <form className="rounded-2xl border border-slate-200 bg-white p-7 shadow-xl shadow-slate-200/80">
      <span className="text-2xl font-semibold text-indigo-600">6.</span>
      <h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-950">
        Vamos começar?
      </h2>
      <p className="mt-3 text-sm leading-6 text-slate-600">
        Preencha os campos abaixo para iniciarmos seu diagnóstico.
      </p>

      <div className="mt-7 space-y-5">
        <FormField label="Nome" required placeholder="Seu nome" />
        <FormField label="E-mail corporativo" required placeholder="seu@email.com" type="email" />
        <FormField label="Empresa" required placeholder="Sua empresa" />

        <SelectField
          label="Qual fluxo você considera mais crítico hoje?"
          required
          placeholder="Selecione um fluxo"
        />
        <SelectField
          label="O que mais preocupa na sua operação atualmente?"
          required
          placeholder="Selecione uma ou mais opções"
        />

        <div>
          <label className="text-sm font-semibold text-slate-950">
            Existe algum comportamento “estranho”, mas difícil de provar? Conte-nos.
          </label>
          <textarea
            placeholder="Descreva aqui (opcional)"
            maxLength={500}
            className="mt-2 min-h-36 w-full resize-none rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-indigo-400 focus:ring-4 focus:ring-indigo-100"
          />
          <p className="mt-1 text-right text-xs text-slate-400">0/500</p>
        </div>
      </div>

      <button
        type="button"
        className="mt-6 inline-flex w-full items-center justify-center gap-3 rounded-xl bg-indigo-600 px-6 py-4 font-semibold text-white shadow-lg shadow-indigo-200 transition hover:bg-indigo-500"
      >
        Solicitar diagnóstico
        <ArrowRight className="h-5 w-5" />
      </button>

      <p className="mt-5 text-center text-sm leading-6 text-slate-500">
        Em até 5 dias úteis, nosso time entra em contato para agendar a análise do
        seu fluxo crítico.
      </p>
    </form>
  );
}

function FormField({
  label,
  placeholder,
  required,
  type = "text",
}: {
  label: string;
  placeholder: string;
  required?: boolean;
  type?: string;
}) {
  return (
    <div>
      <label className="text-sm font-semibold text-slate-950">
        {label}
        {required && <span className="text-red-500">*</span>}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        className="mt-2 h-12 w-full rounded-xl border border-slate-200 bg-white px-4 text-sm outline-none transition placeholder:text-slate-400 focus:border-indigo-400 focus:ring-4 focus:ring-indigo-100"
      />
    </div>
  );
}

function SelectField({
  label,
  placeholder,
  required,
}: {
  label: string;
  placeholder: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="text-sm font-semibold text-slate-950">
        {label}
        {required && <span className="text-red-500">*</span>}
      </label>
      <button
        type="button"
        className="mt-2 flex h-12 w-full items-center justify-between rounded-xl border border-slate-200 bg-white px-4 text-left text-sm text-slate-400 outline-none transition focus:border-indigo-400 focus:ring-4 focus:ring-indigo-100"
      >
        {placeholder}
        <ChevronDown className="h-4 w-4 text-slate-400" />
      </button>
    </div>
  );
}

function FooterInsight({
  icon: Icon,
  title,
  description,
}: {
  icon: React.ElementType;
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
      <Icon className="h-6 w-6 text-indigo-300" />
      <h3 className="mt-3 font-semibold text-white">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-slate-300">{description}</p>
    </div>
  );
}
