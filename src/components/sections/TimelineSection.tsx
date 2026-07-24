/**
 * TimelineSection — vertical timeline showing the 4 contest phases.
 *
 * Animation design:
 *  - Each step card fades in upward when it scrolls into view.
 *  - The vertical connector line between steps uses `scaleY` from 0→1
 *    with `transformOrigin: "top"`, creating a "drawing in" effect as
 *    the user scrolls down through the timeline.
 *
 * RTL layout:
 *  In RTL, flex children are laid out right → left. So the first flex child
 *  (the step indicator column with dot + line) appears on the physical right
 *  side, and the content card is to its left — which is the correct reading
 *  direction for Persian users.
 */
import { motion } from "motion/react";
import { FadeIn } from "@/components/animations/FadeIn";
import { ClipboardList, Code2, Trophy, Award } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  TIMELINE,
  TIMELINE_SECTION_EYEBROW,
  TIMELINE_SECTION_TITLE,
  TIMELINE_SECTION_SUBTITLE,
  TIMELINE_SECTION_OL_ARIA,
  CTA_REGISTER,
} from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

// ── Icon registry ─────────────────────────────────────────────────────────────
const ICON_MAP = { ClipboardList, Code2, Trophy, Award } as const;

// ── Per-step accent colour (dot + date text) ──────────────────────────────────
const STEP_ACCENTS = [
  { dot: "bg-sky-400", date: "text-sky-400/70", ring: "ring-sky-400/20" },
  {
    dot: "bg-violet-400",
    date: "text-violet-400/70",
    ring: "ring-violet-400/20",
  },
  { dot: "bg-primary", date: "text-primary/70", ring: "ring-primary/20" },
  {
    dot: "bg-emerald-400",
    date: "text-emerald-400/70",
    ring: "ring-emerald-400/20",
  },
] as const;

export function TimelineSection() {
  return (
    <section
      className="relative py-20 md:py-28 px-4 bg-background overflow-hidden"
      aria-labelledby="timeline-heading"
    >
      {/* Faint radial glow top-right */}
      <div
        className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full blur-3xl pointer-events-none -translate-y-1/3 translate-x-1/4"
        style={{
          background:
            "radial-gradient(ellipse, oklch(0.62 0.18 287 / 0.07) 0%, transparent 65%)",
        }}
        aria-hidden="true"
      />

      <div className="container relative z-10 mx-auto max-w-3xl">
        {/* ── Section heading ─────────────────────────────────────────────── */}
        <FadeIn direction="up" className="text-center mb-14 md:mb-16">
          <div className="inline-flex items-center gap-2 mb-5 px-3.5 py-1.5 rounded-full border border-white/10 bg-white/[0.04] text-xs text-white/50">
            <span
              className="size-1.5 rounded-full bg-primary"
              aria-hidden="true"
            />
            {TIMELINE_SECTION_EYEBROW}
          </div>

          <h2
            id="timeline-heading"
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 leading-tight"
          >
            {TIMELINE_SECTION_TITLE}
          </h2>

          <p className="text-muted-foreground text-base max-w-md mx-auto leading-relaxed">
            {TIMELINE_SECTION_SUBTITLE}
          </p>
        </FadeIn>

        {/* ── Timeline steps ───────────────────────────────────────────────── */}
        <ol
          className="relative flex flex-col"
          aria-label={TIMELINE_SECTION_OL_ARIA}
        >
          {TIMELINE.map((step, i) => {
            const Icon = ICON_MAP[step.icon as keyof typeof ICON_MAP];
            const accent = STEP_ACCENTS[i];
            const isLast = i === TIMELINE.length - 1;

            return (
              <li key={step.phase} className="flex gap-5 md:gap-7">
                {/* ── Indicator column (appears on the right in RTL) ──────── */}
                <div className="flex flex-col items-center shrink-0">
                  {/* Dot with coloured ring */}
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{
                      duration: 0.35,
                      delay: i * 0.1,
                      ease: [0.21, 0.47, 0.32, 0.98],
                    }}
                    className={cn(
                      "relative mt-1 size-3.5 rounded-full shrink-0 ring-4",
                      accent.dot,
                      accent.ring,
                    )}
                    aria-hidden="true"
                  />

                  {/* Connector line — draws downward as it enters the viewport */}
                  {!isLast && (
                    <motion.div
                      initial={{ scaleY: 0 }}
                      whileInView={{ scaleY: 1 }}
                      viewport={{ once: true, margin: "-40px" }}
                      transition={{
                        duration: 0.7,
                        delay: 0.1 + i * 0.1,
                        ease: "easeOut",
                      }}
                      style={{ transformOrigin: "top" }}
                      className="w-px flex-1 min-h-[56px] mt-2 bg-gradient-to-b from-white/15 to-transparent"
                      aria-hidden="true"
                    />
                  )}
                </div>

                {/* ── Step card ──────────────────────────────────────────── */}
                <FadeIn
                  direction="up"
                  delay={i * 0.1}
                  className={cn("flex-1", !isLast && "pb-8 md:pb-10")}
                >
                  <article
                    className={cn(
                      "group relative flex flex-col gap-3 rounded-2xl p-5 md:p-6",
                      "bg-white/[0.03] border border-white/[0.07]",
                      "hover:bg-white/[0.06] hover:border-white/[0.12]",
                      "transition-all duration-300",
                    )}
                  >
                    {/* Date + icon row */}
                    <div className="flex items-center justify-between gap-2">
                      <span className={cn(" text-xs font-medium", accent.date)}>
                        {step.date}
                      </span>
                      <span
                        className="size-7 rounded-lg bg-white/5 border border-white/8 flex items-center justify-center shrink-0"
                        aria-hidden="true"
                      >
                        <Icon
                          className="size-3.5 text-white/40"
                          strokeWidth={1.75}
                        />
                      </span>
                    </div>

                    {/* Phase name */}
                    <h3 className="font-bold text-foreground text-base leading-snug">
                      {step.phase}
                    </h3>

                    {/* Description */}
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {step.description}
                    </p>

                    {/* Accent line — slides in on hover via CSS */}
                    <span
                      className={cn(
                        "absolute bottom-0 right-0 h-[2px] w-0 rounded-full transition-all duration-500 group-hover:w-full",
                        accent.dot,
                        "opacity-40",
                      )}
                      aria-hidden="true"
                    />
                  </article>
                </FadeIn>
              </li>
            );
          })}
        </ol>

        {/* ── Bottom CTA ──────────────────────────────────────────────────── */}
        <FadeIn
          direction="up"
          delay={0.3}
          className="mt-12 flex justify-center"
        >
          <Button
            size="lg"
            className="group rounded-full px-8 h-12 text-base
              bg-gradient-to-l from-primary to-violet-500
              shadow-lg shadow-primary/25 hover:shadow-primary/45
              hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
          >
            {CTA_REGISTER}
            <ArrowLeft className="size-4 mr-2 group-hover:-translate-x-1 transition-transform duration-300" />
          </Button>
        </FadeIn>
      </div>
    </section>
  );
}
