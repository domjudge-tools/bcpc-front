/**
 * PrizesSection — podium-style layout showing the three prize tiers.
 *
 * Layout:
 *   Desktop: flex-row with `items-end` so card bottoms align. The gold card
 *            has more vertical padding, making it naturally taller — creating
 *            the podium step without any magic numbers.
 *   Mobile:  flex-col with gold first (via `order-first`).
 *
 * The PRIZES array is ordered [rank2, rank1, rank3] so the gold card sits
 * in the centre on desktop (RTL: right=rank2, centre=rank1, left=rank3).
 *
 * Animation: cards rise from below with a staggered delay. The gold card
 * has a continuous subtle float animation to draw the eye.
 */
import { motion } from "motion/react";
import { FadeIn } from "@/components/animations/FadeIn";
import { cn } from "@/lib/utils";
import {
  PRIZES,
  PRIZES_SECTION_EYEBROW,
  PRIZES_SECTION_TITLE,
  PRIZES_SECTION_SUBTITLE,
  PRIZES_ARIA,
  CTA_REGISTER,
} from "@/lib/constants";
import { ArrowLeft, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

// ── Visual style map keyed by variant ────────────────────────────────────────
const VARIANT_STYLES = {
  gold: {
    outerGlow: "shadow-2xl shadow-yellow-500/20",
    border: "border-yellow-400/35",
    bg: "bg-gradient-to-b from-yellow-400/10 to-yellow-500/[0.04]",
    medalSize: "text-5xl",
    titleColor: "text-yellow-300",
    badgeBg: "bg-yellow-400/10 border-yellow-400/25 text-yellow-300",
    accentLine: "bg-gradient-to-r from-yellow-400 to-amber-400",
    rankDot: "bg-yellow-400",
  },
  silver: {
    outerGlow: "shadow-lg shadow-slate-400/10",
    border: "border-slate-400/20",
    bg: "bg-gradient-to-b from-slate-400/8 to-slate-400/[0.03]",
    medalSize: "text-4xl",
    titleColor: "text-slate-300",
    badgeBg: "bg-slate-400/10 border-slate-400/20 text-slate-300",
    accentLine: "bg-gradient-to-r from-slate-400 to-slate-300",
    rankDot: "bg-slate-400",
  },
  bronze: {
    outerGlow: "shadow-lg shadow-amber-700/10",
    border: "border-amber-600/20",
    bg: "bg-gradient-to-b from-amber-700/8 to-amber-700/[0.03]",
    medalSize: "text-4xl",
    titleColor: "text-amber-400",
    badgeBg: "bg-amber-700/10 border-amber-600/20 text-amber-400",
    accentLine: "bg-gradient-to-r from-amber-600 to-amber-500",
    rankDot: "bg-amber-600",
  },
} as const;

export function PrizesSection() {
  return (
    <section
      className="relative py-20 md:py-28 px-4 bg-slate-900 overflow-hidden"
      aria-labelledby="prizes-heading"
    >
      {/* Background texture */}
      <div
        className="absolute inset-0 hero-dot-grid opacity-[0.08]"
        aria-hidden="true"
      />

      {/* Glow centred behind the podium */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full blur-3xl pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse, oklch(0.75 0.16 80 / 0.06) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="container relative z-10 mx-auto max-w-4xl">
        {/* ── Heading ──────────────────────────────────────────────────────── */}
        <FadeIn direction="up" className="text-center mb-14 md:mb-16">
          <div className="inline-flex items-center gap-2 mb-5 px-3.5 py-1.5 rounded-full border border-white/10 bg-white/[0.04] text-xs text-white/50">
            <Star className="size-3 text-yellow-400" aria-hidden="true" />
            {PRIZES_SECTION_EYEBROW}
          </div>

          <h2
            id="prizes-heading"
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 leading-tight"
          >
            {PRIZES_SECTION_TITLE}
          </h2>

          <p className="text-muted-foreground text-base max-w-lg mx-auto leading-relaxed">
            {PRIZES_SECTION_SUBTITLE}
          </p>
        </FadeIn>

        {/* ── Podium ───────────────────────────────────────────────────────── */}
        <ol
          className="flex flex-col md:flex-row md:items-end gap-4 md:gap-5"
          aria-label={PRIZES_ARIA}
        >
          {PRIZES.map((prize, i) => {
            const style = VARIANT_STYLES[prize.variant];
            const isGold = prize.variant === "gold";

            return (
              <li
                key={prize.rank}
                className={cn(
                  "flex-1",
                  // On mobile: gold card always renders first
                  isGold ? "order-first md:order-none" : "",
                )}
              >
                <FadeIn direction="up" delay={i * 0.1}>
                  {/* Gold card gets a continuous float animation */}
                  <motion.div
                    animate={isGold ? { y: [0, -6, 0] } : {}}
                    transition={
                      isGold
                        ? { duration: 3.5, repeat: Infinity, ease: "easeInOut" }
                        : {}
                    }
                    className={cn(
                      "relative flex flex-col items-center text-center rounded-2xl border",
                      "transition-all duration-300 cursor-default",
                      "hover:scale-[1.02]",
                      style.bg,
                      style.border,
                      style.outerGlow,
                      // Gold card is taller via padding → creates podium step
                      isGold ? "px-6 pt-10 pb-8" : "px-5 pt-7 pb-6",
                    )}
                  >
                    {/* Accent line at top */}
                    <span
                      className={cn(
                        "absolute top-0 inset-x-6 h-[2px] rounded-full",
                        style.accentLine,
                      )}
                      aria-hidden="true"
                    />

                    {/* Medal emoji */}
                    <span
                      className={cn(
                        "mb-4 leading-none select-none",
                        style.medalSize,
                      )}
                      role="img"
                      aria-label={prize.title}
                    >
                      {prize.medal}
                    </span>

                    {/* Rank badge */}
                    <span
                      className={cn(
                        "inline-flex items-center gap-1 font-mono text-[11px] font-bold px-2.5 py-1 rounded-full border mb-3",
                        style.badgeBg,
                      )}
                    >
                      <span
                        className={cn(
                          "size-1.5 rounded-full shrink-0",
                          style.rankDot,
                        )}
                        aria-hidden="true"
                      />
                      #{prize.rank}
                    </span>

                    {/* Title */}
                    <h3
                      className={cn(
                        "font-bold text-base md:text-lg mb-2",
                        style.titleColor,
                      )}
                    >
                      {prize.title}
                    </h3>

                    {/* Divider */}
                    <span
                      className="block w-8 h-px bg-white/10 rounded-full mb-3"
                      aria-hidden="true"
                    />

                    {/* Reward */}
                    <p className="text-xs md:text-sm text-white/45 leading-relaxed">
                      {prize.reward}
                    </p>
                  </motion.div>
                </FadeIn>
              </li>
            );
          })}
        </ol>

        {/* ── CTA ──────────────────────────────────────────────────────────── */}
        <FadeIn
          direction="up"
          delay={0.35}
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
