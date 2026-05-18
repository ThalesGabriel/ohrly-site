import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  FileText,
  FlaskConical,
  FolderKanban,
  Library,
  MessageSquareText,
  Search,
  ShieldCheck,
  Sparkles,
  Tags,
} from "lucide-react";

type ContentArea = {
  href: string;
  title: string;
  eyebrow: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  featured?: boolean;
  items: string[];
};

const contentAreas: ContentArea[] = [
  {
    href: "/content/blog",
    title: "Blog",
    eyebrow: "Ideias e provocações",
    description:
      "Textos mais acessíveis sobre operações digitais, decisões tardias, incidentes invisíveis e os padrões humanos por trás da degradação operacional.",
    icon: MessageSquareText,
    items: [
      "O problema mais caro em empresas digitais",
      "Decisões têm consequências. Indecisões ainda mais.",
      "Por que métricas verdes ainda escondem perda de valor",
    ],
  },
  {
    href: "/content/research",
    title: "Research",
    eyebrow: "Hipóteses e experimentos",
    description:
      "Notas de pesquisa, experimentos, validações, limites conhecidos e evolução conceitual da tese de observabilidade comportamental.",
    icon: FlaskConical,
    featured: true,
    items: [
      "Persistência como unidade semântica",
      "Baseline contextual e regimes operacionais",
      "Custo da espera antes do incidente",
    ],
  },
  {
    href: "/content/case-studies",
    title: "Case Studies",
    eyebrow: "Aplicações práticas",
    description:
      "Estudos aplicados em dados públicos, simulados ou anonimizados para demonstrar como degradações silenciosas aparecem antes do impacto explícito.",
    icon: FolderKanban,
    items: [
      "Sefaz — degradação operacional persistente",
      "Olist — custo antes do alerta técnico",
      "Clima — estados comportamentais persistentes",
    ],
  },
  {
    href: "/content/docs",
    title: "Docs",
    eyebrow: "Base técnica e conceitual",
    description:
      "Documentação sobre os conceitos internos do Ohrly: estados, baseline, persistência, ciclos operacionais, score e contrato mínimo de observação.",
    icon: BookOpen,
    items: [
      "Como o estado comportamental é calculado",
      "Operational Recovery Cycle",
      "Consistency Score e estados operacionais",
    ],
  },
  {
    href: "/content/glossary",
    title: "Glossary",
    eyebrow: "Vocabulário da categoria",
    description:
      "Um glossário vivo para nomear conceitos que ainda não possuem linguagem comum nas operações digitais.",
    icon: Tags,
    items: [
      "Zona cinzenta da decisão",
      "Operational Drift Survival Time",
      "Coerência operacional estratégica",
    ],
  },
];

const sidebarItems = [
  { href: "#overview", label: "Overview" },
  { href: "#blog", label: "Blog" },
  { href: "#research", label: "Research" },
  { href: "#case-studies", label: "Case Studies" },
  { href: "#docs", label: "Docs" },
  { href: "#glossary", label: "Glossary" },
];

function Nav() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-[#050b18]/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <div className="relative h-8 w-8 rounded-full border-[6px] border-violet-500/80">
            <div className="absolute -right-1 top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-sky-300" />
          </div>
          <span className="text-2xl font-semibold tracking-tight text-white">ohrly</span>
        </Link>

        <nav className="hidden items-center gap-9 text-sm font-medium text-zinc-300 md:flex">
          <Link href="/como-funciona" className="transition hover:text-white">
            Como funciona
          </Link>
          <Link href="/casos-de-estudo" className="transition hover:text-white">
            Casos de estudo
          </Link>
          <Link href="/behavioral-observability" className="border-b border-violet-400 pb-1 text-violet-300">
            Behavioral Observability
          </Link>
          <Link href="/para-quem-e" className="transition hover:text-white">
            Para quem é
          </Link>
        </nav>

        <Link
          href="/solicitar-diagnostico"
          className="rounded-xl bg-violet-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-violet-950/40 transition hover:bg-violet-500"
        >
          Solicitar diagnóstico
        </Link>
      </div>
    </header>
  );
}

function HeroContinuum() {
  const stages = [
    { label: "Normal", description: "Operação saudável", color: "bg-violet-400" },
    { label: "Sinais", description: "Algo começa a mudar", color: "bg-zinc-200" },
    { label: "Zona cinzenta", description: "Degradação silenciosa", color: "bg-amber-400" },
    { label: "Incidente", description: "Impacto explícito", color: "bg-red-500" },
  ];

  return (
    <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 shadow-2xl shadow-black/30">
      <p className="text-sm font-semibold text-white">A operação se move em um contínuo</p>
      <div className="relative mt-10">
        <div className="absolute left-4 right-4 top-3 h-px bg-gradient-to-r from-violet-400 via-amber-300 to-red-500" />
        <div className="grid grid-cols-4 gap-4">
          {stages.map((stage) => (
            <div key={stage.label} className="relative pt-8 text-center">
              <div className={`absolute left-1/2 top-0 h-6 w-6 -translate-x-1/2 rounded-full border-4 border-[#08101f] ${stage.color}`} />
              <h3 className="text-sm font-semibold text-white">{stage.label}</h3>
              <p className="mt-2 text-xs leading-5 text-zinc-400">{stage.description}</p>
            </div>
          ))}
        </div>
        <div className="mx-auto mt-7 w-fit rounded-xl border border-amber-400/30 bg-amber-400/10 px-4 py-2 text-center text-xs font-semibold text-amber-300">
          Ohrly torna visível o que normalmente passa despercebido
        </div>
      </div>
      <div className="mt-8 rounded-2xl border border-white/10 bg-black/20 px-5 py-4 text-sm leading-6 text-zinc-300">
        Behavioral Observability não começa perguntando se algo quebrou. Ela pergunta se a operação ainda consegue se comportar e se recuperar como deveria.
      </div>
    </div>
  );
}

function Sidebar() {
  return (
    <aside className="hidden lg:block">
      <div className="sticky top-28 rounded-3xl border border-zinc-200 bg-white p-5 shadow-sm">
        <div className="flex items-center gap-3 border-b border-zinc-100 pb-5">
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-violet-50 text-violet-600">
            <Library className="h-5 w-5" />
          </div>
          <div>
            <p className="text-sm font-semibold text-zinc-950">/content</p>
            <p className="text-xs text-zinc-500">Base de conhecimento</p>
          </div>
        </div>

        <nav className="mt-5 space-y-1">
          {sidebarItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="block rounded-xl px-3 py-2 text-sm font-medium text-zinc-600 transition hover:bg-violet-50 hover:text-violet-700"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="mt-6 rounded-2xl bg-zinc-950 p-4 text-white">
          <p className="text-sm font-semibold">Uma categoria em construção.</p>
          <p className="mt-2 text-xs leading-5 text-zinc-400">
            Blog, pesquisa, casos, docs e glossário evoluem junto com a tese.
          </p>
        </div>
      </div>
    </aside>
  );
}

function ContentCard({ area }: { area: ContentArea }) {
  const Icon = area.icon;

  return (
    <Link
      id={area.href.split("/").at(-1)}
      href={area.href}
      className={`group block rounded-3xl border p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg ${
        area.featured
          ? "border-violet-200 bg-gradient-to-br from-violet-50 via-white to-sky-50"
          : "border-zinc-200 bg-white"
      }`}
    >
      <div className="flex items-start justify-between gap-6">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-violet-600 text-white shadow-lg shadow-violet-200">
          <Icon className="h-6 w-6" />
        </div>
        <ArrowRight className="h-5 w-5 text-zinc-400 transition group-hover:translate-x-1 group-hover:text-violet-600" />
      </div>

      <p className="mt-6 text-xs font-bold uppercase tracking-[0.18em] text-violet-600">{area.eyebrow}</p>
      <h2 className="mt-3 text-2xl font-semibold tracking-tight text-zinc-950">{area.title}</h2>
      <p className="mt-4 text-base leading-8 text-zinc-600">{area.description}</p>

      <div className="mt-6 space-y-3 border-t border-zinc-200 pt-5">
        {area.items.map((item) => (
          <div key={item} className="flex items-start gap-3 text-sm leading-6 text-zinc-700">
            <Sparkles className="mt-1 h-4 w-4 shrink-0 text-violet-500" />
            <span>{item}</span>
          </div>
        ))}
      </div>
    </Link>
  );
}

function FeaturedResearch() {
  return (
    <section id="overview" className="rounded-3xl border border-zinc-200 bg-white p-7 shadow-sm">
      <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-violet-600">Overview</p>
          <h2 className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight text-zinc-950">
            Uma base viva para formalizar observabilidade comportamental.
          </h2>
          <p className="mt-4 max-w-3xl text-base leading-8 text-zinc-600">
            Esta página organiza o conhecimento do Ohrly em camadas: ideias públicas, pesquisa aplicada, estudos de caso, documentação técnica e vocabulário da categoria.
          </p>
        </div>
        <Link
          href="/content"
          className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-zinc-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-zinc-800"
        >
          Explorar conteúdo
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-3">
        <div className="rounded-2xl bg-zinc-50 p-5">
          <FileText className="h-6 w-6 text-violet-600" />
          <h3 className="mt-4 font-semibold text-zinc-950">Publicar aprendizados</h3>
          <p className="mt-2 text-sm leading-6 text-zinc-600">Transformar conversas, experimentos e descobertas em conteúdo reutilizável.</p>
        </div>
        <div className="rounded-2xl bg-zinc-50 p-5">
          <Search className="h-6 w-6 text-violet-600" />
          <h3 className="mt-4 font-semibold text-zinc-950">Preservar memória</h3>
          <p className="mt-2 text-sm leading-6 text-zinc-600">Evitar que conceitos importantes se percam conforme a tese evolui.</p>
        </div>
        <div className="rounded-2xl bg-zinc-50 p-5">
          <ShieldCheck className="h-6 w-6 text-violet-600" />
          <h3 className="mt-4 font-semibold text-zinc-950">Gerar autoridade</h3>
          <p className="mt-2 text-sm leading-6 text-zinc-600">Mostrar que o Ohrly está criando linguagem, não apenas uma ferramenta.</p>
        </div>
      </div>
    </section>
  );
}

export default function BehavioralObservabilityPage() {
  return (
    <main className="min-h-screen bg-zinc-50 text-zinc-950">
      <section className="overflow-hidden bg-[#050b18] text-white">
        <Nav />

        <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-10 lg:px-8 lg:py-24">
          <div className="absolute -right-24 top-24 h-72 w-72 rounded-full bg-violet-600/20 blur-3xl" />
          <div className="absolute -bottom-24 left-20 h-72 w-72 rounded-full bg-sky-500/10 blur-3xl" />

          <div className="relative z-10">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-violet-300">Behavioral Observability</p>
            <h1 className="mt-6 max-w-7xl text-5xl font-semibold tracking-tight text-white md:text-6xl">
              Operações não falham apenas quando quebram.
            </h1>
            <p className="mt-6 max-w-7xl text-2xl leading-9 text-zinc-200">
              Elas falham quando deixam de conseguir absorver perturbações sem perder coerência.
            </p>
            <p className="mt-6 max-w-7xl text-base leading-8 text-zinc-400">
              Esta é a base viva do Ohrly para organizar ideias, pesquisas, estudos de caso, documentação e vocabulário sobre observabilidade comportamental.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/content"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-violet-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-violet-950/40 transition hover:bg-violet-500"
              >
                Explorar base de conhecimento
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/solicitar-diagnostico"
                className="inline-flex items-center justify-center rounded-xl border border-white/15 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Solicitar diagnóstico
              </Link>
            </div>
          </div>

        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-6 py-12 lg:grid-cols-[260px_1fr] lg:px-8 lg:py-16">
        <Sidebar />

        <div className="space-y-8">
          <FeaturedResearch />

          <div className="grid gap-6 md:grid-cols-2">
            {contentAreas.map((area) => (
              <ContentCard key={area.href} area={area} />
            ))}
          </div>

          <section className="rounded-3xl border border-zinc-200 bg-[#050b18] p-8 text-white shadow-2xl shadow-zinc-300">
            <div className="grid gap-8 lg:grid-cols-[1fr_0.7fr] lg:items-center">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-violet-300">Próximo passo</p>
                <h2 className="mt-4 max-w-2xl text-3xl font-semibold tracking-tight">
                  Conhecimento vira vantagem quando melhora a decisão.
                </h2>
                <p className="mt-4 max-w-2xl text-base leading-8 text-zinc-400">
                  A base de conteúdo organiza a tese. O diagnóstico aplica essa lente em um fluxo crítico real da sua operação.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                <p className="font-semibold text-white">O que buscamos encontrar:</p>
                <div className="mt-4 space-y-3 text-sm leading-6 text-zinc-300">
                  <p>• sinais persistentes de degradação</p>
                  <p>• perda gradual de recuperação</p>
                  <p>• mudanças comportamentais difíceis de provar</p>
                  <p>• zonas cinzentas antes do impacto explícito</p>
                </div>
                <Link
                  href="/solicitar-diagnostico"
                  className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-violet-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-violet-500"
                >
                  Solicitar diagnóstico
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}
