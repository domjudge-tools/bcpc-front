/**
 * ContestFormatSection — explains the four pillars of the ICPC contest format.
 * Uses a code-aesthetic card layout: line numbers, muted icon accent colours,
 * and CSS-only hover transitions (no Framer Motion for hover per AGENTS.md).
 */
import { FadeIn } from "@/components/animations/FadeIn";
import {
  CONTEST_FORMAT,
  FORMAT_SECTION_EYEBROW,
  FORMAT_SECTION_TITLE_PREFIX,
  FORMAT_SECTION_TITLE_ACCENT,
  FORMAT_SECTION_SUBTITLE,
  FORMAT_SECTION_NOTE,
} from "@/lib/constants";
import { Users, Monitor, Clock, Zap } from "lucide-react";
import { cn } from "@/lib/utils";

// ── Icon registry ────────────────────────────────────────────────────────────
const ICON_MAP = { Users, Monitor, Clock, Zap } as const;

// ── Per-card accent palette (icon bg / text / border) ───────────────────────
// Intentionally desaturated so they complement the dark background without
// fighting with the primary purple used elsewhere.
const CARD_ACCENTS = [
  "bg-sky-500/10 text-sky-400 border-sky-500/20",
  "bg-violet-500/10 text-violet-400 border-violet-500/20",
  "bg-amber-500/10 text-amber-400 border-amber-500/20",
  "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
] as const;

// Zero-padded line numbers for the code aesthetic
const LINE_NUMBERS = ["01", "02", "03", "04"] as const;

export function ContestFormatSection() {
  return (
    <section
      className="relative py-20 md:py-28 px-4 bg-background overflow-hidden"
      aria-labelledby="format-heading"
    >
      {/* Subtle radial glow behind the heading */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] -translate-y-1/2 rounded-full blur-3xl pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse, oklch(0.62 0.18 287 / 0.07) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="container relative z-10 mx-auto max-w-5xl">
        {/* ── Section heading ─────────────────────────────────────────────── */}
        <FadeIn direction="up" className="text-center mb-12 md:mb-16">
          {/* Eyebrow pill */}
          <div className="inline-flex items-center gap-2 mb-5 px-3.5 py-1.5 rounded-full border border-white/10 bg-white/[0.04] text-xs text-white/50">
            <span
              className="size-1.5 rounded-full bg-primary"
              aria-hidden="true"
            />
            {FORMAT_SECTION_EYEBROW}
          </div>

          <h2
            id="format-heading"
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 leading-tight"
          >
            {FORMAT_SECTION_TITLE_PREFIX}
            {" "}
            <span className="bg-gradient-to-l from-primary via-violet-400 to-primary/60 bg-clip-text text-transparent">
              {FORMAT_SECTION_TITLE_ACCENT}
            </span>
          </h2>

          <p className="text-muted-foreground max-w-xl mx-auto text-base leading-relaxed">
            {FORMAT_SECTION_SUBTITLE}
          </p>
        </FadeIn>

        {/* ── Cards grid ──────────────────────────────────────────────────── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {CONTEST_FORMAT.map((item, i) => {
            const Icon = ICON_MAP[item.icon as keyof typeof ICON_MAP];

            return (
              <FadeIn key={item.title} direction="up" delay={i * 0.08}>
                {/*
                  Hover is handled entirely with CSS transitions — no Framer Motion.
                  This is faster and respects the AGENTS.md guideline for hover states.
                */}
                <article
                  className={cn(
                    "group relative flex flex-col gap-5 h-full rounded-2xl p-5 md:p-6",
                    "bg-white/[0.03] border border-white/[0.07]",
                    "hover:bg-white/[0.06] hover:border-white/[0.13] hover:-translate-y-1",
                    "transition-all duration-300",
                  )}
                >
                  {/* Line number — terminal/code motif, purely decorative */}
                  <span
                    className="absolute top-4 left-5 font-mono text-[11px] text-white/[0.12] select-none"
                    aria-hidden="true"
                  >
                    .{LINE_NUMBERS[i]}
                  </span>

                  {/* Icon container */}
                  <div
                    className={cn(
                      "w-10 h-10 rounded-xl flex items-center justify-center border shrink-0 mt-4",
                      CARD_ACCENTS[i],
                    )}
                    aria-hidden="true"
                  >
                    <Icon className="size-[18px]" strokeWidth={2} />
                  </div>

                  {/* Content */}
                  <div className="flex flex-col gap-2">
                    <h3 className="font-bold text-foreground text-base leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </article>
              </FadeIn>
            );
          })}
        </div>

        {/* ── ICPC connection note ─────────────────────────────────────────── */}
        <FadeIn direction="up" delay={0.3} className="mt-10 text-center">
          <p className="text-xs text-muted-foreground/60">
            {"// "}
            {FORMAT_SECTION_NOTE}
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
