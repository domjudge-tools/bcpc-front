/**
 * SponsorsSection — displays contest sponsors grouped by tier.
 *
 * Since real logos aren't available yet, cards show the organisation name
 * with a tier badge. The layout is designed to drop in `<img>` logos later
 * without restructuring: just replace the name `<p>` with an `<img>`.
 *
 * Layout:
 *   - Platinum: full-width card (spans all columns)
 *   - Gold + Silver: sit in a 2-col grid below
 *   On mobile everything stacks.
 *
 * Hover: CSS opacity + border transition only (no Framer Motion for hover).
 */
import { FadeIn } from "@/components/animations/FadeIn";
import { cn } from "@/lib/utils";
import {
  SPONSORS,
  SPONSORS_SECTION_EYEBROW,
  SPONSORS_SECTION_TITLE,
  SPONSORS_SECTION_SUBTITLE,
  SPONSORS_TIER_LABELS,
  SPONSORS_BECOME_TEXT,
  SPONSORS_BECOME_HREF,
} from "@/lib/constants";
import { ArrowLeft, Building2 } from "lucide-react";

// ── Per-tier visual styles ────────────────────────────────────────────────────
const TIER_STYLES = {
  platinum: {
    card: "bg-white/[0.05] border-white/[0.14] hover:bg-white/[0.08] hover:border-white/[0.22]",
    badge: "bg-violet-400/10 border-violet-400/25 text-violet-300",
    nameSize: "text-2xl md:text-3xl font-bold",
    tagline: "text-white/50",
    iconColor: "text-violet-400",
    dot: "bg-violet-400",
  },
  gold: {
    card: "bg-white/[0.03] border-white/[0.09] hover:bg-white/[0.06] hover:border-white/[0.15]",
    badge: "bg-yellow-400/10 border-yellow-400/20 text-yellow-300",
    nameSize: "text-xl md:text-2xl font-semibold",
    tagline: "text-white/40",
    iconColor: "text-yellow-400",
    dot: "bg-yellow-400",
  },
  silver: {
    card: "bg-white/[0.02] border-white/[0.07] hover:bg-white/[0.05] hover:border-white/[0.12]",
    badge: "bg-slate-400/10 border-slate-400/20 text-slate-300",
    nameSize: "text-lg md:text-xl font-semibold",
    tagline: "text-white/30",
    iconColor: "text-slate-400",
    dot: "bg-slate-400",
  },
} as const;

export function SponsorsSection() {
  const platinum = SPONSORS.filter((s) => s.tier === "platinum");
  const rest = SPONSORS.filter((s) => s.tier !== "platinum");

  return (
    <section
      className="relative py-20 md:py-28 px-4 bg-slate-900 overflow-hidden"
      aria-labelledby="sponsors-heading"
    >
      {/* Dot-grid texture */}
      <div
        className="absolute inset-0 hero-dot-grid opacity-[0.09]"
        aria-hidden="true"
      />

      <div className="container relative z-10 mx-auto max-w-4xl">
        {/* ── Heading ──────────────────────────────────────────────────────── */}
        <FadeIn direction="up" className="text-center mb-12 md:mb-14">
          <div className="inline-flex items-center gap-2 mb-5 px-3.5 py-1.5 rounded-full border border-white/10 bg-white/[0.04] text-xs text-white/50">
            <span
              className="size-1.5 rounded-full bg-primary"
              aria-hidden="true"
            />
            {SPONSORS_SECTION_EYEBROW}
          </div>

          <h2
            id="sponsors-heading"
            className="text-3xl md:text-4xl font-bold text-foreground mb-4 leading-tight"
          >
            {SPONSORS_SECTION_TITLE}
          </h2>

          <p className="text-muted-foreground text-base max-w-sm mx-auto leading-relaxed">
            {SPONSORS_SECTION_SUBTITLE}
          </p>
        </FadeIn>

        {/* ── Platinum row (full-width) ─────────────────────────────────────── */}
        {platinum.length > 0 && (
          <div className="mb-4">
            {platinum.map((sponsor) => {
              const style = TIER_STYLES[sponsor.tier];
              return (
                <FadeIn key={sponsor.name} direction="up">
                  <SponsorCard sponsor={sponsor} style={style} large />
                </FadeIn>
              );
            })}
          </div>
        )}

        {/* ── Gold + Silver grid ────────────────────────────────────────────── */}
        {rest.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
            {rest.map((sponsor, i) => {
              const style = TIER_STYLES[sponsor.tier];
              return (
                <FadeIn key={sponsor.name} direction="up" delay={i * 0.1}>
                  <SponsorCard sponsor={sponsor} style={style} />
                </FadeIn>
              );
            })}
          </div>
        )}

        {/* ── Become a sponsor CTA ─────────────────────────────────────────── */}
        <FadeIn direction="up" delay={0.2} className="text-center">
          <a
            href={SPONSORS_BECOME_HREF}
            className="inline-flex items-center gap-2 text-sm font-medium text-white/40
              hover:text-white/70 transition-colors duration-200 group"
          >
            {SPONSORS_BECOME_TEXT}
            <ArrowLeft
              className="size-4 group-hover:-translate-x-1 transition-transform duration-200"
              aria-hidden="true"
            />
          </a>
        </FadeIn>
      </div>
    </section>
  );
}

// ─── SponsorCard sub-component ────────────────────────────────────────────────

interface SponsorData {
  readonly name: string;
  readonly tagline: string;
  readonly tier: "platinum" | "gold" | "silver";
}

interface SponsorCardProps {
  sponsor: SponsorData;
  style: (typeof TIER_STYLES)[keyof typeof TIER_STYLES];
  large?: boolean;
}

function SponsorCard({ sponsor, style, large = false }: SponsorCardProps) {
  return (
    <div
      className={cn(
        "relative flex items-center gap-5 rounded-2xl border px-6 transition-all duration-300",
        large ? "py-7" : "py-5",
        style.card,
      )}
    >
      {/* Icon placeholder — replace with <img> when logos are available */}
      <div
        className={cn(
          "shrink-0 rounded-xl bg-white/5 border border-white/8 flex items-center justify-center",
          large ? "size-14" : "size-11",
        )}
        aria-hidden="true"
      >
        <Building2
          className={cn(style.iconColor, large ? "size-7" : "size-5")}
          strokeWidth={1.5}
        />
      </div>

      {/* Name + tagline */}
      <div className="flex-1 min-w-0">
        <p className={cn("text-white leading-tight truncate", style.nameSize)}>
          {sponsor.name}
        </p>
        <p className={cn("text-xs mt-1 leading-snug truncate", style.tagline)}>
          {sponsor.tagline}
        </p>
      </div>

      {/* Tier badge */}
      <span
        className={cn(
          "shrink-0 inline-flex items-center gap-1.5 font-mono text-[10px] px-2.5 py-1 rounded-full border",
          style.badge,
        )}
      >
        <span
          className={cn("size-1.5 rounded-full", style.dot)}
          aria-hidden="true"
        />
        {SPONSORS_TIER_LABELS[sponsor.tier]}
      </span>
    </div>
  );
}
