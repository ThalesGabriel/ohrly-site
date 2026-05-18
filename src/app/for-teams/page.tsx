import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  Bot,
  Boxes,
  CheckCircle2,
  Code2,
  CreditCard,
  DollarSign,
  Eye,
  Landmark,
  MessageCircle,
  Rocket,
  ShieldCheck,
  ShoppingCart,
  Target,
  TimerReset,
  TrendingUp,
  Users,
  XCircle,
  Zap,
} from "lucide-react";

type Feature = {
  icon: React.ElementType;
  title: string;
  description: string;
};

type Segment = {
  icon: React.ElementType;
  title: string;
  tone: "green" | "blue" | "violet" | "orange";
  criticalFlows: string[];
  risks: string[];
  example: string;
};

const fitSignals: Feature[] = [
  {
    icon: Code2,
    title: "Muda constantemente",
    description: "Muitas releases, ajustes e integrações.",
  },
  {
    icon: Target,
    title: "Depende de fluxos digitais críticos",
    description: "Jornadas que precisam funcionar sempre.",
  },
  {
    icon: Users,
    title: "Possui múltiplos times / squads",
    description: "Várias áreas mexendo nos mesmos fluxos.",
  },
  {
    icon: Zap,
    title: "Sofre impacto silencioso de mudanças",
    description: "Sem incidentes, mas com perda de performance.",
  },
  {
    icon: ShieldCheck,
    title: "Depende de estabilidade contínua",
    description: "Qualquer atrito vira custo, risco ou perda de receita.",
  },
  {
    icon: DollarSign,
    title: "Possui alto custo de regressão",
    description: "Rollback, retrabalho, suporte e perda de confiança.",
  },
  {
    icon: BarChart3,
    title: "Opera em escala",
    description: "Pequenas degradações viram grandes impactos com o tempo.",
  },
];

const symptoms: Feature[] = [
  {
    icon: TrendingUp,
    title: "O sistema continua funcionando, mas a conversão piorou.",
    description: "A degradação aparece no resultado antes de aparecer como falha.",
  },
  {
    icon: MessageCircle,
    title: "O chatbot ainda responde, mas o fallback aumentou.",
    description: "O fluxo segue ativo, mas exige mais esforço humano.",
  },
  {
    icon: Rocket,
    title: "O deploy passou, mas o fluxo ficou estranho.",
    description: "A mudança não quebrou o sistema, mas alterou o comportamento.",
  },
  {
    icon: TimerReset,
    title: "As métricas parecem saudáveis, mas a operação perdeu fluidez.",
    description: "O problema fica escondido entre dashboards e interpretação humana.",
  },
  {
    icon: ArrowRight,
    title: "O problema só fica claro quando recuperar já ficou caro.",
    description: "A janela de decisão existia, mas ninguém conseguia nomeá-la.",
  },
];

const segments: Segment[] = [
  {
    icon: Landmark,
    title: "Fintechs e Bancos Digitais",
    tone: "green",
    criticalFlows: ["Onboarding", "Crédito / Aprovação", "Autenticação", "Pagamentos", "Chatbots"],
    risks: ["Queda de conversão", "Aumento de fraude", "Fricção na jornada", "Custo de suporte"],
    example: "Cada 1% de queda no onboarding pode representar milhões em receita perdida.",
  },
  {
    icon: ShoppingCart,
    title: "E-commerce",
    tone: "blue",
    criticalFlows: ["Checkout", "Login", "Carrinho", "Promoções", "Entrega"],
    risks: ["Abandono gradual", "Falhas silenciosas", "Perda de receita", "Aumento de chargebacks"],
    example: "Pequenas fricções no checkout viram grandes perdas acumuladas.",
  },
  {
    icon: Bot,
    title: "Operações Conversacionais",
    tone: "violet",
    criticalFlows: ["Chatbots / IA", "Handoff", "Resolução", "Fallbacks", "Retenção"],
    risks: ["Experiência degradada", "Aumento de custo", "Handoff desnecessário", "Queda de satisfação"],
    example: "Aumento silencioso de fallback pode multiplicar o custo operacional.",
  },
  {
    icon: Boxes,
    title: "SaaS B2B",
    tone: "orange",
    criticalFlows: ["Onboarding", "Ativação", "Billing", "Self-service", "Expansão"],
    risks: ["Queda de ativação", "Churn silencioso", "Ticket volume", "Perda de expansão"],
    example: "Pequenas falhas no onboarding reduzem retenção e expansão futura.",
  },
];

const notIdeal = [
  "Sua operação possui poucas mudanças.",
  "Os fluxos críticos ainda não são digitais.",
  "O custo de regressão é muito baixo.",
  "A operação ainda não possui escala suficiente.",
  "Ainda não existe histórico operacional relevante.",
];

const idealStage = [
  "Já possui observabilidade técnica básica (APMs, logs, métricas).",
  "Já possui dados operacionais estruturados.",
  "Já sofreu regressões difíceis de interpretar.",
  "Já percebeu que incidentes começam antes do alerta.",
  "Busca tomar decisões mais cedo, com mais contexto.",
];

const teams = ["Produto", "Engenharia", "SRE / DevOps", "Operações", "Dados", "Liderança Técnica"];

const toneClasses = {
  green: "border-emerald-200 bg-emerald-50/70 text-emerald-700",
  blue: "border-blue-200 bg-blue-50/70 text-blue-700",
  violet: "border-violet-200 bg-violet-50/70 text-violet-700",
  orange: "border-orange-200 bg-orange-50/70 text-orange-700",
};

function SectionNumber({ children }: { children: React.ReactNode }) {
  return <span className="text-2xl font-semibold text-violet-600">{children}</span>;
}

function IconBadge({ icon: Icon, className = "" }: { icon: React.ElementType; className?: string }) {
  return (
    <div className={`flex h-11 w-11 items-center justify-center rounded-2xl border border-violet-200 bg-white text-violet-600 shadow-sm ${className}`}>
      <Icon className="h-5 w-5" />
    </div>
  );
}

export default function ParaQuemEPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-950">
      <section className="relative overflow-hidden bg-[#06101f] text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(99,102,241,0.24),transparent_26%),radial-gradient(circle_at_80%_5%,rgba(124,58,237,0.18),transparent_24%)]" />
        <div className="relative mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-8">
          <Link href="/" className="flex items-center gap-3 text-2xl font-bold tracking-tight">
            <span className="h-8 w-8 rounded-full border-[7px] border-violet-500 border-r-violet-900" />
            ohrly
          </Link>

          <nav className="hidden items-center gap-10 text-sm font-medium text-slate-200 md:flex">
            <Link href="/how-it-works" className="hover:text-white">Como funciona</Link>
            <Link href="/use-cases" className="hover:text-white">Casos de estudo</Link>
            <Link href="/behavioral-observability" className="hover:text-white">Behavioral Observability</Link>
            <Link href="/for-who" className="border-b border-violet-400 pb-2 text-violet-300">Para quem é</Link>
          </nav>

          <Link
            href="/interest"
            className="hidden rounded-xl bg-violet-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-violet-950/30 transition hover:bg-violet-500 sm:inline-flex"
          >
            Solicitar diagnóstico
          </Link>
        </div>

        <div className="relative mx-auto grid max-w-7xl gap-12 px-6 pb-20 pt-12 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:pb-24 lg:pt-16">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-violet-300">Para quem é</p>
            <h1 className="mt-6 max-w-3xl text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
              O Ohrly foi pensado para operações que não podem esperar o incidente acontecer.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              O problema mais caro raramente começa como falha explícita. Ele começa como comportamento persistente difícil de interpretar.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-7 shadow-2xl shadow-black/30 backdrop-blur">
            <p className="text-base font-semibold text-violet-200">Se você já viveu isso, o Ohrly faz sentido.</p>
            <div className="mt-6 space-y-5">
              {[
                [Code2, "Mudanças frequentes em sistemas e fluxos críticos"],
                [Eye, "Impactos silenciosos que só aparecem tarde demais"],
                [TrendingUp, "Métricas que parecem saudáveis, mas não contam toda a história"],
                [ShieldCheck, "Decisões difíceis por falta de clareza sobre o comportamento real"],
                [DollarSign, "Alto custo quando descobrir o problema já é tarde"],
              ].map(([Icon, text]) => (
                <div key={text as string} className="flex items-start gap-4 text-sm text-slate-200">
                  <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-xl border border-violet-400/30 bg-violet-500/10 text-violet-300">
                    <Icon className="h-4 w-4" />
                  </div>
                  <span className="leading-7">{text as string}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
        <div className="flex items-center gap-4">
          <SectionNumber>1.</SectionNumber>
          <h2 className="text-2xl font-semibold tracking-tight">O Ohrly faz sentido quando sua operação...</h2>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-7">
          {fitSignals.map((item) => (
            <article key={item.title} className="rounded-3xl border border-slate-200 bg-white p-5 text-center shadow-sm">
              <IconBadge icon={item.icon} className="mx-auto" />
              <h3 className="mt-5 text-sm font-semibold">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
          <div className="flex items-center gap-4">
            <SectionNumber>2.</SectionNumber>
            <h2 className="text-2xl font-semibold tracking-tight">Sua operação talvez já viva isso</h2>
          </div>

          <div className="mt-8 grid gap-4 lg:grid-cols-[1fr_1fr_1fr_1fr_1fr_1.35fr]">
            {symptoms.map((item) => (
              <article key={item.title} className="rounded-3xl border border-orange-100 bg-orange-50/50 p-5">
                <item.icon className="h-7 w-7 text-orange-500" />
                <h3 className="mt-5 text-sm font-semibold leading-6">{item.title}</h3>
              </article>
            ))}

            <aside className="rounded-3xl border border-violet-100 bg-violet-50 p-6">
              <p className="text-base font-semibold leading-7 text-slate-900">
                Se você reconheceu alguns desses sinais, o Ohrly foi feito para você.
              </p>
              <div className="mt-8 h-24 rounded-2xl bg-white p-4">
                <svg viewBox="0 0 260 90" className="h-full w-full overflow-visible">
                  <defs>
                    <linearGradient id="line" x1="0" y1="0" x2="1" y2="0">
                      <stop offset="0" stopColor="#6366f1" />
                      <stop offset="1" stopColor="#7c3aed" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M5 70 C 25 55, 34 74, 52 58 S 84 52, 100 42 S 130 55, 146 34 S 184 20, 205 32 S 230 18, 255 8"
                    fill="none"
                    stroke="url(#line)"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />
                  <circle cx="205" cy="32" r="10" fill="#ede9fe" stroke="#7c3aed" strokeWidth="3" />
                </svg>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
        <div className="flex items-center gap-4">
          <SectionNumber>3.</SectionNumber>
          <h2 className="text-2xl font-semibold tracking-tight">Segmentos onde o Ohrly gera mais impacto</h2>
        </div>

        <div className="mt-8 grid gap-5 lg:grid-cols-4">
          {segments.map((segment) => (
            <article key={segment.title} className={`rounded-3xl border p-6 shadow-sm ${toneClasses[segment.tone]}`}>
              <div className="flex items-center gap-3">
                <segment.icon className="h-8 w-8" />
                <h3 className="font-semibold text-slate-950">{segment.title}</h3>
              </div>

              <div className="mt-7 grid gap-6 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                <div>
                  <p className="text-xs font-bold uppercase tracking-wide text-slate-700">Fluxos críticos</p>
                  <ul className="mt-3 space-y-2 text-sm text-slate-700">
                    {segment.criticalFlows.map((item) => (
                      <li key={item} className="flex gap-2">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wide text-slate-700">Riscos comuns</p>
                  <ul className="mt-3 space-y-2 text-sm text-slate-700">
                    {segment.risks.map((item) => (
                      <li key={item} className="flex gap-2">
                        <ArrowRight className="mt-0.5 h-4 w-4 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-7 border-t border-slate-200/80 pt-5">
                <p className="text-xs font-bold uppercase tracking-wide text-slate-700">Exemplo de impacto</p>
                <p className="mt-2 text-sm leading-6 text-slate-700">{segment.example}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="border-t border-slate-200 bg-white">
        <div className="mx-auto grid max-w-7xl gap-6 px-6 py-14 lg:grid-cols-[1fr_1fr_0.75fr] lg:px-8">
          <article className="rounded-3xl border border-slate-200 bg-slate-50 p-7">
            <div className="flex items-center gap-4">
              <SectionNumber>4.</SectionNumber>
              <h2 className="text-xl font-semibold tracking-tight">Quando o Ohrly ainda não faz sentido</h2>
            </div>
            <ul className="mt-7 space-y-4">
              {notIdeal.map((item) => (
                <li key={item} className="flex gap-3 text-sm text-slate-700">
                  <XCircle className="mt-0.5 h-5 w-5 shrink-0 text-red-500" />
                  {item}
                </li>
              ))}
            </ul>
          </article>

          <article className="rounded-3xl border border-slate-200 bg-slate-50 p-7">
            <div className="flex items-center gap-4">
              <SectionNumber>5.</SectionNumber>
              <h2 className="text-xl font-semibold tracking-tight">O estágio ideal da empresa</h2>
            </div>
            <ul className="mt-7 space-y-4">
              {idealStage.map((item) => (
                <li key={item} className="flex gap-3 text-sm text-slate-700">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-500" />
                  {item}
                </li>
              ))}
            </ul>
          </article>

          <aside className="rounded-3xl border border-violet-100 bg-violet-50 p-7">
            <p className="font-semibold text-slate-950">Times que mais se beneficiam</p>
            <ul className="mt-6 space-y-4 text-sm text-slate-700">
              {teams.map((team) => (
                <li key={team} className="flex items-center gap-3">
                  <Users className="h-4 w-4 text-violet-600" />
                  {team}
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </section>

      <section className="px-6 py-12 lg:px-8">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl bg-[#06101f] p-8 text-white shadow-2xl shadow-slate-300 md:p-12">
          <div className="absolute inset-y-0 right-0 w-1/2 bg-[radial-gradient(circle_at_80%_45%,rgba(124,58,237,0.35),transparent_30%)]" />
          <div className="relative grid gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-center">
            <div>
              <h2 className="max-w-xl text-3xl font-semibold tracking-tight md:text-4xl">
                Descubra se sua operação já entrou na zona cinzenta.
              </h2>
              <p className="mt-4 max-w-xl text-base leading-7 text-slate-300">
                Analisamos um fluxo crítico da sua operação e mostramos onde estão os sinais que hoje parecem invisíveis.
              </p>
            </div>
            <div className="lg:justify-self-center">
              <Link
                href="/interest"
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-violet-600 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-violet-950/30 transition hover:bg-violet-500"
              >
                Solicitar diagnóstico
                <ArrowRight className="h-5 w-5" />
              </Link>
              <p className="mt-3 text-sm text-slate-400">Análise inicial gratuita e sem compromisso.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
