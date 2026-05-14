"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Activity,
  BookOpen,
  ChevronLeft,
  ChevronRight,
  Compass,
  FileText,
  GitBranch,
  Home,
  Layers,
  Lightbulb,
  MessageCircle,
} from "lucide-react";

import { useSidebar } from "./layout/sidebar-context";

const items = [
  { label: "Visão Geral", route: "/", icon: Home },

  {
    label: "Como funciona",
    route: "/how-it-works",
    icon: BookOpen,

    children: [
      {
        label: "Estratégia operacional",
        route: "/operational-strategy",
        icon: Compass,
      },

      {
        label: "Dinâmica operacional",
        route: "/operational-dynamics",
        icon: Activity,
      },

      {
        label: "Trajetória operacional",
        route: "/operational-trajectory",
        icon: GitBranch,
      },

      {
        label: "Contexto operacional",
        route: "/operational-context",
        icon: Layers,
      },
    ],

  },

  {
    label: "Modelo operacional",
    route: "/operational-model",
    icon: Activity,

  },

  {
    label: "Estudos de Caso",
    route: "/use-cases",
    icon: FileText,

    children: [
      {
        label: "Sefaz 156 Emlurb 2025",
        route: "/use-cases/sefaz-156-emlurb",
        icon: Activity,
      },
    ]
  },

  {
    label: "Quero usar",
    route: "/interest",
    icon: Lightbulb,
  },
];

export function Sidebar() {
  const pathname = usePathname();

  const { collapsed, setCollapsed } = useSidebar();

  return (
    <aside
      className={`fixed left-0 top-0 z-40 flex h-screen flex-col border-r border-zinc-200 bg-white transition-all duration-300 ${
        collapsed ? "w-[88px]" : "w-[240px]"
      }`}
    >
      <div className="flex items-center justify-between px-6 py-8">
        <Link
          href="/"
          className={`overflow-hidden transition-all duration-300 ${
            collapsed ? "w-0 opacity-0" : "w-[140px] opacity-100"
          }`}
        >
          <Image
            src="/images/logo-white.png"
            alt="Ohrly"
            width={140}
            height={48}
            priority
            className="h-auto min-w-[140px]"
          />
        </Link>

        <button
          type="button"
          onClick={() => setCollapsed(!collapsed)}
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-zinc-200 bg-white text-zinc-500 transition hover:border-violet-200 hover:bg-violet-50 hover:text-violet-700"
        >
          {collapsed ? (
            <ChevronRight className="h-4 w-4" />
          ) : (
            <ChevronLeft className="h-4 w-4" />
          )}
        </button>
      </div>

      <nav className="flex-1 space-y-2 px-4">
        {items.map((item) => {
          const Icon = item.icon;

          const isActive =
            item.route === "/"
              ? pathname === "/"
              : pathname.startsWith(item.route);

          return (
            <div key={item.route}>
              <Link
                href={item.route}
                className={`group relative flex items-center rounded-2xl py-3 text-sm transition-all duration-200 ${
                  isActive
                    ? "bg-violet-50 font-medium text-violet-700"
                    : "text-zinc-500 hover:bg-zinc-50 hover:text-zinc-900"
                } ${collapsed ? "justify-center px-0" : "gap-3 px-4"}`}
              >
                {isActive && (
                  <span className="absolute left-0 top-1/2 h-6 w-1 -translate-y-1/2 rounded-r-full bg-violet-600" />
                )}

                <Icon className="h-4 w-4 shrink-0" />

                <span
                  className={`overflow-hidden whitespace-nowrap transition-all duration-300 ${
                    collapsed ? "w-0 opacity-0" : "w-auto opacity-100"
                  }`}
                >
                  {item.label}
                </span>

                {collapsed && (
                  <div className="pointer-events-none absolute left-[72px] z-50 rounded-xl border border-zinc-200 bg-white px-3 py-2 text-xs font-medium text-zinc-700 opacity-0 shadow-lg transition-all duration-200 group-hover:opacity-100">
                    {item.label}
                  </div>
                )}
              </Link>

              {!collapsed && item.children && isActive && (
                <div className="ml-5 mt-2 space-y-1 border-l border-zinc-200 pl-4">
                  {item.children.map((child) => {
                    const ChildIcon = child.icon;

                    const isChildActive = pathname === child.route;

                    return (
                      <Link
                        key={child.route}
                        href={child.route}
                        className={`flex items-center gap-2 rounded-xl px-3 py-2 text-xs transition ${
                          isChildActive
                            ? "bg-violet-50 font-medium text-violet-700"
                            : "text-zinc-500 hover:bg-zinc-50 hover:text-zinc-900"
                        }`}
                      >
                        <ChildIcon className="h-3.5 w-3.5 shrink-0" />

                        <span>{child.label}</span>
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </nav>

      <div className="p-4">
        <div
          className={`overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-50 transition-all duration-300 ${
            collapsed ? "p-3" : "p-5"
          }`}
        >
          {collapsed ? (
            <div className="flex items-center justify-center">
              <MessageCircle className="h-5 w-5 text-zinc-500" />
            </div>
          ) : (
            <>
              <p className="mb-2 text-sm font-semibold text-zinc-800">
                Fale com nosso time
              </p>

              <p className="text-xs leading-relaxed text-zinc-500">
                Vamos conversar sobre sua operação
              </p>

              <button className="mt-4 inline-flex w-full items-center justify-center rounded-xl bg-violet-600 px-4 py-2 text-xs font-semibold text-white transition hover:bg-violet-500">
                Conversar
              </button>
            </>
          )}
        </div>
      </div>
    </aside>
  );
}