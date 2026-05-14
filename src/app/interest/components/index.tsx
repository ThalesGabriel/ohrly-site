import {
    ArrowRight,
    BarChart3,
    BrainCircuit,
    CalendarDays,
    CheckCircle2,
    FileText,
    MessageCircle,
    ShieldCheck,
    Sparkles,
} from "lucide-react";

const fitItems = [
    "Operações digitais críticas",
    "Fluxos com filas, pendências ou retrabalho",
    "Times que sentem degradação antes dos dashboards",
    "Mudanças frequentes em produto, operação ou engenharia",
    "Jornadas com estados intermediários relevantes",
];

const analysisItems = [
    "Persistência operacional",
    "Propagação de pressão",
    "Capacidade natural de recuperação",
    "Arquétipos de degradação",
    "Janela operacional de decisão",
    "Timeline comportamental",
];

const steps = [
    {
        icon: MessageCircle,
        title: "1. Conversa inicial",
        text: "Entendemos o contexto da operação, os fluxos críticos e os sinais que já preocupam o time.",
    },
    {
        icon: FileText,
        title: "2. Amostra de dados",
        text: "Você compartilha uma amostra em CSV, logs, eventos, métricas ou estados operacionais.",
    },
    {
        icon: BrainCircuit,
        title: "3. Leitura comportamental",
        text: "A Ohrly interpreta padrões de persistência, recuperação, propagação e pressão operacional.",
    },
    {
        icon: CalendarDays,
        title: "4. Walkthrough dos achados",
        text: "Apresentamos os principais sinais encontrados e discutimos se faz sentido evoluir para um piloto.",
    },
];

const deliverables = [
    "Sinais persistentes de drift",
    "Fluxos ou regiões com degradação localizada",
    "Ciclos naturais de recuperação",
    "Padrões de propagação operacional",
    "Hipóteses de perda adaptativa",
    "Recomendação de próximo passo",
];

export default function ExploreOperationPage() {
    return (
        <>
            <section className="px-12 py-10">
                <div className="mx-auto max-w-7xl">
                    <span className="inline-flex rounded-full bg-violet-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-violet-700">
                        Leitura operacional assistida
                    </span>

                    <div className="mt-8 grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
                        <div>
                            <h1 className="max-w-5xl text-5xl font-semibold tracking-tight text-zinc-950 md:text-6xl">
                                Descubra como sua operação degrada antes do incidente explícito.
                            </h1>

                            <p className="mt-6 max-w-3xl text-xl leading-9 text-zinc-700">
                                O Ohrly ainda não é uma plataforma self-service. Hoje trabalhamos
                                com leituras operacionais assistidas para entender, junto com o
                                seu time, se existem sinais de degradação silenciosa nos seus dados.
                            </p>

                            <div className="mt-8 flex flex-wrap gap-3">
                                <a
                                    href="#contact"
                                    className="inline-flex items-center gap-2 rounded-full bg-violet-700 px-6 py-3 text-sm font-semibold text-white transition hover:bg-violet-800"
                                >
                                    Solicitar leitura operacional
                                    <ArrowRight className="h-4 w-4" />
                                </a>

                                <a
                                    href="#how-it-works"
                                    className="inline-flex items-center gap-2 rounded-full border border-zinc-300 bg-white px-6 py-3 text-sm font-semibold text-zinc-700 transition hover:bg-zinc-50"
                                >
                                    Ver como funciona
                                </a>
                            </div>
                        </div>

                        <div className="rounded-[2rem] border border-zinc-200 bg-white p-8 shadow-sm">
                            <div className="flex items-center gap-3">
                                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-violet-100 text-violet-700">
                                    <Sparkles className="h-6 w-6" />
                                </div>

                                <div>
                                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500">
                                        O que você recebe
                                    </p>
                                    <h2 className="mt-1 text-2xl font-semibold tracking-tight">
                                        Uma primeira leitura do comportamento real da sua operação.
                                    </h2>
                                </div>
                            </div>

                            <div className="mt-6 grid gap-3">
                                {deliverables.map((item) => (
                                    <div key={item} className="flex items-start gap-3">
                                        <CheckCircle2 className="mt-0.5 h-5 w-5 text-violet-700" />
                                        <p className="text-sm leading-6 text-zinc-700">{item}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="border-t border-zinc-200 bg-white px-12 py-14">
                <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2">
                    <div className="rounded-3xl border border-zinc-200 bg-zinc-50/70 p-8">
                        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500">
                            Para quem faz sentido
                        </p>

                        <h2 className="mt-3 text-3xl font-semibold tracking-tight">
                            Para times que sabem que algo piorou, mas não conseguem dizer exatamente quando.
                        </h2>

                        <div className="mt-6 space-y-3">
                            {fitItems.map((item) => (
                                <p key={item} className="text-base leading-7 text-zinc-700">
                                    • {item}
                                </p>
                            ))}
                        </div>
                    </div>

                    <div className="rounded-3xl border border-violet-200 bg-violet-50/40 p-8">
                        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-700">
                            O que analisamos
                        </p>

                        <h2 className="mt-3 text-3xl font-semibold tracking-tight">
                            Não procuramos apenas incidentes. Procuramos perda de comportamento saudável.
                        </h2>

                        <div className="mt-6 grid gap-3 sm:grid-cols-2">
                            {analysisItems.map((item) => (
                                <div
                                    key={item}
                                    className="rounded-2xl border border-violet-200 bg-white/70 p-4 text-sm font-medium text-zinc-700"
                                >
                                    {item}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section id="how-it-works" className="border-t border-zinc-200 bg-white px-12 py-16">
                <div className="mx-auto max-w-7xl">
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500">
                        Como funciona
                    </p>

                    <h2 className="mt-3 max-w-4xl text-4xl font-semibold tracking-tight">
                        Uma exploração assistida, antes de qualquer piloto robusto.
                    </h2>

                    <div className="mt-8 grid gap-4 md:grid-cols-4">
                        {steps.map((step) => {
                            const Icon = step.icon;

                            return (
                                <div
                                    key={step.title}
                                    className="rounded-3xl border border-zinc-200 bg-zinc-50/70 p-6"
                                >
                                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-violet-100 text-violet-700">
                                        <Icon className="h-5 w-5" />
                                    </div>

                                    <h3 className="mt-5 text-base font-semibold text-zinc-950">
                                        {step.title}
                                    </h3>

                                    <p className="mt-3 text-sm leading-6 text-zinc-600">
                                        {step.text}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            <section className="border-t border-zinc-200 bg-[#faf8f5] px-12 py-16">
                <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-3">
                    <div className="rounded-3xl border border-zinc-200 bg-white p-8">
                        <BarChart3 className="h-6 w-6 text-violet-700" />
                        <h3 className="mt-5 text-xl font-semibold">Não é dashboard</h3>
                        <p className="mt-3 text-base leading-7 text-zinc-600">
                            A leitura não entrega apenas gráficos. Ela interpreta a trajetória
                            comportamental da operação.
                        </p>
                    </div>

                    <div className="rounded-3xl border border-zinc-200 bg-white p-8">
                        <ShieldCheck className="h-6 w-6 text-violet-700" />
                        <h3 className="mt-5 text-xl font-semibold">Não é promessa automática</h3>
                        <p className="mt-3 text-base leading-7 text-zinc-600">
                            Cada operação tem contexto próprio. Por isso, a primeira leitura é
                            conduzida de forma assistida.
                        </p>
                    </div>

                    <div className="rounded-3xl border border-zinc-200 bg-white p-8">
                        <BrainCircuit className="h-6 w-6 text-violet-700" />
                        <h3 className="mt-5 text-xl font-semibold">Pode virar piloto</h3>
                        <p className="mt-3 text-base leading-7 text-zinc-600">
                            Se houver aderência, evoluímos para um piloto pago com análise mais
                            contínua e direcionada.
                        </p>
                    </div>
                </div>
            </section>

            <section id="contact" className="border-t border-zinc-200 bg-white px-12 py-20">
                <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
                    <div>
                        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-700">
                            Solicite uma conversa
                        </p>

                        <h2 className="mt-3 text-4xl font-semibold tracking-tight">
                            Quer entender se sua operação já apresenta esses padrões?
                        </h2>

                        <p className="mt-5 text-base leading-7 text-zinc-600">
                            Conte um pouco sobre seu fluxo crítico. A partir disso, avaliamos
                            se faz sentido uma leitura inicial e qual amostra de dados seria
                            necessária.
                        </p>
                    </div>

                    <form className="rounded-3xl border border-zinc-200 bg-zinc-50/70 p-8">
                        <div className="grid gap-5 md:grid-cols-2">
                            <div>
                                <label className="text-sm font-medium text-zinc-700">
                                    Nome
                                </label>
                                <input className="mt-2 w-full rounded-xl border border-zinc-300 bg-white px-4 py-3 outline-none focus:border-violet-500" />
                            </div>

                            <div>
                                <label className="text-sm font-medium text-zinc-700">
                                    E-mail
                                </label>
                                <input className="mt-2 w-full rounded-xl border border-zinc-300 bg-white px-4 py-3 outline-none focus:border-violet-500" />
                            </div>

                            <div>
                                <label className="text-sm font-medium text-zinc-700">
                                    Empresa
                                </label>
                                <input className="mt-2 w-full rounded-xl border border-zinc-300 bg-white px-4 py-3 outline-none focus:border-violet-500" />
                            </div>

                            <div>
                                <label className="text-sm font-medium text-zinc-700">
                                    Tipo de operação
                                </label>
                                <input
                                    placeholder="Ex: chatbot, backoffice, pagamentos..."
                                    className="mt-2 w-full rounded-xl border border-zinc-300 bg-white px-4 py-3 outline-none focus:border-violet-500"
                                />
                            </div>
                        </div>

                        <div className="mt-5">
                            <label className="text-sm font-medium text-zinc-700">
                                O que você gostaria de investigar?
                            </label>
                            <textarea
                                rows={5}
                                placeholder="Conte brevemente sobre o fluxo, a dor percebida e os sinais que vocês já acompanham."
                                className="mt-2 w-full rounded-xl border border-zinc-300 bg-white px-4 py-3 outline-none focus:border-violet-500"
                            />
                        </div>

                        <button
                            type="submit"
                            className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-violet-700 px-6 py-3 text-sm font-semibold text-white transition hover:bg-violet-800"
                        >
                            Solicitar leitura operacional
                            <ArrowRight className="h-4 w-4" />
                        </button>

                        <p className="mt-4 text-center text-xs leading-5 text-zinc-500">
                            A leitura inicial depende de aderência do caso e disponibilidade de
                            dados mínimos para análise.
                        </p>
                    </form>
                </div>
            </section>
        </>
    );
}