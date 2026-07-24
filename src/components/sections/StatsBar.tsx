/**
 * StatsBar — a compact, high-contrast band that bridges the dark hero
 * into the main content area. Each stat uses AnimatedCounter so the
 * numbers count up as the section scrolls into view.
 */
import { FadeIn } from "@/components/animations/FadeIn";
import { AnimatedCounter } from "@/components/animations/AnimatedCounter";
import { STATS, STATS_SECTION_ARIA } from "@/lib/constants";

export function StatsBar() {
  return (
    <section
      className="relative bg-slate-900 border-y border-white/[0.06] overflow-hidden py-12 md:py-16 px-4"
      aria-label={STATS_SECTION_ARIA}
    >
      {/* Carry the dot-grid texture from the hero to maintain visual continuity */}
      <div
        className="absolute inset-0 hero-dot-grid opacity-[0.12]"
        aria-hidden="true"
      />

      {/* Gradient edges to blend with sections above and below */}
      <div
        className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-slate-900 to-transparent"
        aria-hidden="true"
      />
      <div
        className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-slate-900 to-transparent"
        aria-hidden="true"
      />

      <div className="container relative z-10 mx-auto max-w-4xl">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
          {STATS.map((stat, i) => (
            <FadeIn key={stat.label} direction="up" delay={i * 0.09}>
              <div className="flex flex-col items-center text-center gap-2.5">
                {/* Animated number */}
                <p className="font-mono font-black leading-none text-white text-4xl md:text-5xl lg:text-[3.5rem]">
                  <AnimatedCounter
                    target={stat.value}
                    suffix={stat.suffix}
                    duration={1.6}
                  />
                </p>

                {/* Thin accent line */}
                <span className="block w-6 h-px bg-primary/50 rounded-full" />

                {/* Label */}
                <p className="text-xs md:text-sm text-white/40 font-medium leading-snug">
                  {stat.label}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
