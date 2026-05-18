"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "Início", href: "/" },
  { label: "Como funciona", href: "/how-it-works" },
  { label: "Casos de estudo", href: "/use-cases" },
  { label: "Behavioral Observability", href: "/behavioral-observability" },
  { label: "Para quem é", href: "/for-teams" },
];

export default function Header() {
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }

    return pathname.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-[#050b16]/80 backdrop-blur-xl">
      <div className="mx-auto flex w-full items-center justify-between px-6 py-5 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <span className="relative flex h-9 w-9 items-center justify-center rounded-full border border-violet-400/60 bg-violet-500/10">
            <span className="absolute h-5 w-5 rounded-full border-4 border-violet-500 border-r-transparent" />
          </span>

          <span className="text-2xl font-semibold tracking-tight text-white">
            ohrly
          </span>
        </Link>

        <nav className="hidden items-center gap-2 lg:flex">
          {navItems.map((item) => {
            const active = isActive(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative rounded-xl px-4 py-2 text-sm font-medium transition-all duration-200 ${
                  active
                    ? "bg-violet-500/10 text-white"
                    : "text-slate-300 hover:bg-white/[0.04] hover:text-white"
                }`}
              >
                {active && (
                  <span className="absolute inset-x-3 -bottom-px h-px bg-gradient-to-r from-transparent via-violet-400 to-transparent" />
                )}

                {item.label}
              </Link>
            );
          })}
        </nav>

        <Link
          href="/diagnostic"
          className="rounded-xl bg-violet-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-violet-600/25 transition hover:bg-violet-500"
        >
          Solicitar diagnóstico
        </Link>
      </div>
    </header>
  );
}