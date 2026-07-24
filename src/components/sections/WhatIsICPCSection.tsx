/**
 * WhatIsICPCSection — two-column layout explaining ICPC and BCPC's place in it.
 *
 * Left col  (desktop): animated ICPC pipeline ladder (Local → Regional → World Finals)
 * Right col (desktop): text intro, highlights list, and CTA
 *
 * In RTL the right column renders first (closest to the reader), which is correct:
 * text first, then the supporting diagram.
 */
import { motion } from "motion/react";
import { FadeIn } from "@/components/animations/FadeIn";
import {
  Globe2,
  CalendarDays,
  Star,
  ChevronDown,
  ArrowLeft,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  ICPC_SECTION_EYEBROW,
  ICPC_SECTION_TITLE,
  ICPC_PARAGRAPHS,
  ICPC_HIGHLIGHTS,
  ICPC_PIPELINE,
  ICPC_HIGHLIGHTS_ARIA,
  ICPC_PIPELINE_ARIA,
  ICPC_PIPELINE_HEADER,
  ICPC_PIPELINE_YOU_HERE,
  ICPC_PIPELINE_NOTE,
  CTA_REGISTER,
  CTA_ABOUT,
} from "@/lib/constants";

// ── Icon registry ─────────────────────────────────────────────────────────────
const HIGHLIGHT_ICONS = { Globe2, CalendarDays, Star } as const;

export function WhatIsICPCSection() {
  return (
    <section
      className="relative py-20 md:py-28 px-4 bg-slate-900 overflow-hidden"
      aria-labelledby="icpc-heading"
    >
      {/* Background texture — faint dot grid for continuity */}
      <div
        className="absolute inset-0 hero-dot-grid opacity-[0.1]"
        aria-hidden="true"
      />

      {/* Soft glow anchored bottom-left */}
      <div
        className="absolute bottom-0 left-0 w-[500px] h-[400px] rounded-full blur-3xl pointer-events-none translate-y-1/2 -translate-x-1/4"
        style={{
          background:
            "radial-gradient(ellipse, oklch(0.62 0.18 287 / 0.08) 0%, transparent 65%)",
        }}
        aria-hidden="true"
      />

      <div className="container relative z-10 mx-auto max-w-5xl">
        {/*
          Two-column grid. In RTL the DOM order maps to:
            col 1 (right side) → text content   ← readers see this first ✓
            col 2 (left side)  → pipeline diagram
        */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* ── Right col: Text content ─────────────────────────────────── */}
          <div>
            <FadeIn direction="up">
              {/* Eyebrow */}
              <div className="inline-flex items-center gap-2 mb-5 px-3.5 py-1.5 rounded-full border border-white/10 bg-white/[0.04] text-xs text-white/50">
                <span
                  className="size-1.5 rounded-full bg-primary"
                  aria-hidden="true"
                />
                {ICPC_SECTION_EYEBROW}
              </div>

              {/* Title */}
              <h2
                id="icpc-heading"
                className="text-3xl md:text-4xl font-bold text-foreground mb-6 leading-snug"
              >
                {ICPC_SECTION_TITLE}
              </h2>
            </FadeIn>

            {/* Paragraphs */}
            <div className="flex flex-col gap-4 mb-8">
              {ICPC_PARAGRAPHS.map((para, i) => (
                <FadeIn key={i} direction="up" delay={0.1 + i * 0.08}>
                  <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                    {para}
                  </p>
                </FadeIn>
              ))}
            </div>

            {/* Highlights list */}
            <FadeIn direction="up" delay={0.25}>
              <ul
                className="flex flex-col gap-3 mb-8"
                aria-label={ICPC_HIGHLIGHTS_ARIA}
              >
                {ICPC_HIGHLIGHTS.map((item) => {
                  const Icon =
                    HIGHLIGHT_ICONS[item.icon as keyof typeof HIGHLIGHT_ICONS];
                  return (
                    <li key={item.text} className="flex items-center gap-3">
                      <span className="size-7 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                        <Icon
                          className="size-3.5 text-primary"
                          aria-hidden="true"
                        />
                      </span>
                      <span className="text-sm text-white/60">{item.text}</span>
                    </li>
                  );
                })}
              </ul>
            </FadeIn>

            {/* CTA */}
            <FadeIn direction="up" delay={0.32}>
              <div className="flex flex-wrap gap-3">
                <Button
                  size="lg"
                  className="group rounded-full px-7 h-11 text-sm
                    bg-gradient-to-l from-primary to-violet-500
                    shadow-lg shadow-primary/25 hover:shadow-primary/45
                    hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
                >
                  {CTA_REGISTER}
                  <ArrowLeft className="size-4 mr-2 group-hover:-translate-x-1 transition-transform duration-300" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="rounded-full px-7 h-11 text-sm
                    border-white/15 text-white/70
                    hover:bg-white/[0.06] hover:text-white hover:border-white/25
                    transition-all duration-200"
                >
                  {CTA_ABOUT}
                </Button>
              </div>
            </FadeIn>
          </div>

          {/* ── Left col: Pipeline diagram ──────────────────────────────── */}
          <FadeIn
            direction="up"
            delay={0.15}
            className="flex justify-center lg:justify-start"
          >
            <PipelineDiagram />
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

// ─── Pipeline diagram sub-component ──────────────────────────────────────────

function PipelineDiagram() {
  return (
    <div className="relative w-full max-w-sm" aria-label={ICPC_PIPELINE_ARIA}>
      {/* Outer glass card */}
      <div className="liquid-glass-strong rounded-2xl p-6 md:p-8">
        {/* Diagram title */}
        <p className="text-xs text-white/30 mb-6 text-center tracking-wider uppercase">
          {ICPC_PIPELINE_HEADER}
        </p>

        <div className="flex flex-col gap-0">
          {ICPC_PIPELINE.map((step, i) => (
            <div key={step.label}>
              {/* Step card */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.45,
                  delay: 0.1 + i * 0.12,
                  ease: [0.21, 0.47, 0.32, 0.98],
                }}
                className={cn(
                  "relative flex items-center gap-4 rounded-xl px-4 py-3.5 border transition-all duration-300",
                  step.isCurrent
                    ? "bg-primary/10 border-primary/30"
                    : "bg-white/[0.04] border-white/[0.08]",
                )}
              >
                {/* Step number */}
                <span
                  className={cn(
                    "font-mono font-black text-sm shrink-0 size-9 rounded-lg flex items-center justify-center border",
                    step.isCurrent
                      ? "bg-primary text-white border-primary shadow-md shadow-primary/40"
                      : "bg-white/5 text-white/30 border-white/10",
                  )}
                >
                  {step.step}
                </span>

                {/* Label */}
                <div className="flex-1 min-w-0">
                  <p
                    className={cn(
                      "font-bold text-sm leading-tight",
                      step.isCurrent ? "text-white" : "text-white/40",
                    )}
                  >
                    {step.label}
                  </p>
                  <p
                    className={cn(
                      "text-[11px] mt-0.5 leading-tight",
                      step.isCurrent ? "text-white/55" : "text-white/20",
                    )}
                  >
                    {step.sublabel}
                  </p>
                </div>

                {/* "You are here" badge — only on current step */}
                {step.isCurrent && (
                  <span className="shrink-0 text-[10px] text-primary/80 bg-primary/10 border border-primary/20 rounded-full px-2 py-0.5 leading-none">
                    {ICPC_PIPELINE_YOU_HERE}
                  </span>
                )}
              </motion.div>

              {/* Arrow connector between steps */}
              {i < ICPC_PIPELINE.length - 1 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.3, delay: 0.25 + i * 0.12 }}
                  className="flex justify-center py-1.5"
                  aria-hidden="true"
                >
                  <ChevronDown className="size-4 text-primary/30" />
                </motion.div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <p className=" text-[10px] text-white/20 text-center mt-6 leading-relaxed">
          {ICPC_PIPELINE_NOTE}
        </p>
      </div>
    </div>
  );
}
