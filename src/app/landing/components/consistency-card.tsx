import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function ConsistencyCard() {
  const yAxis = [100, 75, 50, 25, 0];
  const xAxis = ["07/04", "14/04", "21/04", "28/04", "05/05"];

  return (
    <div className="rounded-2xl border border-white/10 bg-[#08111f]/80 p-6 shadow-2xl shadow-black/40 backdrop-blur">
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <p className="text-sm font-medium text-slate-200">Consistency Score</p>
            <span className="flex h-4 w-4 items-center justify-center rounded-full border border-slate-500 text-[10px] text-slate-400">
              i
            </span>
          </div>

          <div className="mt-4 flex items-end gap-3">
            <span className="text-5xl font-semibold tracking-tight text-white">62</span>
            <span className="pb-2 text-sm font-semibold text-amber-300">Persistência anômala</span>
          </div>
        </div>

        <button className="rounded-lg border border-white/10 bg-slate-950/40 px-3 py-2 text-xs text-slate-300 transition hover:bg-white/5">
          Últimos 30 dias⌄
        </button>
      </div>

      <div className="mt-7 rounded-xl border border-white/5 bg-[#07101d]/80 px-4 pb-4 pt-5">
        <div className="grid h-56 grid-cols-[34px_1fr] grid-rows-[1fr_24px] gap-x-3">
          <div className="relative row-start-1 text-xs text-slate-400">
            {yAxis.map((value, index) => (
              <span
                key={value}
                className="absolute right-0 translate-y-1/2"
                style={{ bottom: `${index * 25}%` }}
              >
                {value}
              </span>
            ))}
          </div>

          <div className="relative row-start-1 overflow-hidden rounded-lg">
            <div className="absolute inset-0">
              {[0, 25, 50, 75, 100].map((line) => (
                <div
                  key={line}
                  className="absolute inset-x-0 border-t border-dashed border-white/10"
                  style={{ bottom: `${line}%` }}
                />
              ))}
            </div>

            <div className="absolute bottom-0 left-0 top-0 w-px bg-slate-500/40" />
            <div className="absolute bottom-0 left-0 right-0 h-px bg-slate-500/40" />

            <div className="absolute inset-y-0 left-[76%] w-px border-l border-dashed border-amber-300/40" />
            <div className="absolute bottom-0 left-[58%] right-[18%] bg-amber-300/5" />

            <span className="absolute right-[15%] top-7 rounded-md bg-amber-300/20 px-3 py-1 text-xs font-semibold text-amber-200 shadow-lg shadow-amber-500/10">
              Mudança detectada
            </span>

            <svg viewBox="0 0 520 210" className="absolute inset-0 h-full w-full overflow-visible">
              <defs>
                <linearGradient id="consistencyGradient" x1="0" x2="1" y1="0" y2="0">
                  <stop offset="0%" stopColor="#8b5cf6" />
                  <stop offset="54%" stopColor="#8b5cf6" />
                  <stop offset="58%" stopColor="#fbbf24" />
                  <stop offset="84%" stopColor="#fbbf24" />
                  <stop offset="100%" stopColor="#f97316" />
                </linearGradient>

                <linearGradient id="areaGradient" x1="0" x2="0" y1="0" y2="1">
                  <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.28" />
                  <stop offset="65%" stopColor="#8b5cf6" stopOpacity="0.04" />
                  <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0" />
                </linearGradient>
              </defs>

              <path
                d="M0 55 L24 62 L48 58 L72 67 L96 52 L120 48 L144 77 L168 70 L192 73 L216 85 L240 82 L264 116 L288 111 L312 120 L336 111 L360 122 L384 105 L408 138 L432 145 L456 146 L480 168 L504 180 L520 166"
                fill="none"
                stroke="url(#consistencyGradient)"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />

              <path
                d="M0 55 L24 62 L48 58 L72 67 L96 52 L120 48 L144 77 L168 70 L192 73 L216 85 L240 82 L264 116 L288 111 L312 120 L336 111 L360 122 L384 105 L408 138 L432 145 L456 146 L480 168 L504 180 L520 166 L520 210 L0 210 Z"
                fill="url(#areaGradient)"
              />

              <circle cx="408" cy="138" r="17" fill="#fbbf24" opacity="0.16" />
              <circle cx="408" cy="138" r="7" fill="#fbbf24" />
              <circle cx="408" cy="138" r="22" fill="none" stroke="#fbbf24" strokeOpacity="0.35" />
            </svg>
          </div>

          <div className="col-start-2 row-start-2 grid grid-cols-5 pt-2 text-xs text-slate-400">
            {xAxis.map((date) => (
              <span key={date}>{date}</span>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-5 flex flex-col gap-4 rounded-xl border border-white/10 bg-white/[0.035] p-5 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h3 className="font-semibold text-white">O comportamento mudou.</h3>
          <p className="mt-1 max-w-md text-sm leading-6 text-slate-400">
            A operação permanece estável tecnicamente, mas a consistência está se deteriorando.
          </p>
        </div>

        <Link
          href="/use-cases"
          className="inline-flex shrink-0 items-center justify-center gap-2 rounded-lg border border-white/10 bg-slate-950/30 px-4 py-3 text-sm font-semibold text-slate-200 transition hover:bg-white/5 hover:text-white"
        >
          Ver análise <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  );
}