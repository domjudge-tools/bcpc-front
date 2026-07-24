/**
 * Footer — site-wide footer with logo, nav columns, social links, and copyright.
 *
 * Design:
 *   `bg-slate-950` mirrors the hero — creating a dark "bookend" that frames
 *   all the content sections between them.
 *
 * Back-to-top: smooth-scrolls via `window.scrollTo`. Falls back gracefully
 * if the user prefers reduced motion (uses instant scroll in that case).
 *
 * Placed in `components/layout/` because it belongs to every page, not a
 * single section. Move it to `Layout.astro` when more pages are built.
 */
import { Globe2, MessageCircle, Code2, ArrowUp } from "lucide-react";
import { FadeIn } from "@/components/animations/FadeIn";
import { cn } from "@/lib/utils";
import {
  SITE_SHORT_NAME,
  SITE_UNIVERSITY,
  FOOTER_TAGLINE,
  FOOTER_LINKS,
  FOOTER_COPYRIGHT,
  FOOTER_BACK_TO_TOP,
  FOOTER_SOCIAL,
  FOOTER_SOCIAL_ARIA,
  NAV_LINKS,
} from "@/lib/constants";

// ── Social icon registry ──────────────────────────────────────────────────────
const SOCIAL_ICONS = { Globe2, MessageCircle, Code2 } as const;

export function Footer() {
  const handleBackToTop = () => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    window.scrollTo({
      top: 0,
      behavior: prefersReduced ? "instant" : "smooth",
    });
  };

  return (
    <footer
      className="relative bg-slate-950 border-t border-white/[0.06] overflow-hidden"
      aria-label="پاورقی سایت"
    >
      {/* Subtle top glow to blend with the last section */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[1px]"
        style={{
          background:
            "linear-gradient(90deg, transparent, oklch(0.62 0.18 287 / 0.3), transparent)",
        }}
        aria-hidden="true"
      />

      {/* ── Main content ─────────────────────────────────────────────────────── */}
      <div className="container mx-auto max-w-5xl px-4 pt-14 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_auto] gap-10 md:gap-16 mb-12">
          {/* ── Brand column ───────────────────────────────────────────────── */}
          <FadeIn direction="up">
            <div className="flex flex-col gap-5">
              {/* Logo mark */}
              <div className="flex items-center gap-2.5">
                <div className="size-9 rounded-lg bg-foreground/90 flex items-center justify-center shrink-0">
                  <span className="font-mono font-black text-sm text-background leading-none">
                    {SITE_SHORT_NAME.charAt(0)}
                  </span>
                </div>
                <div className="flex flex-col leading-none gap-0.5">
                  <span className="font-mono font-black text-sm text-foreground tracking-tight">
                    {SITE_SHORT_NAME}
                  </span>
                  <span className="text-[10px] text-muted-foreground font-medium">
                    {SITE_UNIVERSITY}
                  </span>
                </div>
              </div>

              {/* Tagline */}
              <p className="text-sm text-white/40 leading-relaxed max-w-[260px]">
                {FOOTER_TAGLINE}
              </p>

              {/* Social links */}
              <nav aria-label={FOOTER_SOCIAL_ARIA}>
                <ul className="flex items-center gap-2">
                  {FOOTER_SOCIAL.map((social) => {
                    const Icon =
                      SOCIAL_ICONS[social.icon as keyof typeof SOCIAL_ICONS];
                    return (
                      <li key={social.label}>
                        <a
                          href={social.href}
                          aria-label={social.label}
                          className={cn(
                            "size-8 rounded-lg flex items-center justify-center",
                            "bg-white/[0.04] border border-white/[0.08]",
                            "text-white/40 hover:text-white/80 hover:bg-white/[0.08] hover:border-white/[0.15]",
                            "transition-all duration-200",
                          )}
                        >
                          <Icon className="size-3.5" aria-hidden="true" />
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </nav>
            </div>
          </FadeIn>

          {/* ── Nav link columns ───────────────────────────────────────────── */}
          {FOOTER_LINKS.map((group, gi) => (
            <FadeIn key={group.title} direction="up" delay={0.08 + gi * 0.06}>
              <div>
                <p className="text-xs text-white/30 mb-4 uppercase tracking-widest">
                  {group.title}
                </p>
                <ul className="flex flex-col gap-2.5">
                  {group.links.map((link) => (
                    <li key={link.href}>
                      <a
                        href={link.href}
                        className="text-sm text-white/50 hover:text-white/85 transition-colors duration-200"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* ── Divider ──────────────────────────────────────────────────────── */}
        <div
          className="h-px bg-gradient-to-r from-transparent via-white/8 to-transparent mb-6"
          aria-hidden="true"
        />

        {/* ── Bottom bar ───────────────────────────────────────────────────── */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Copyright */}
          <p className="text-xs text-white/25 order-2 sm:order-none text-center sm:text-right">
            {FOOTER_COPYRIGHT}
          </p>

          {/* Built-with note */}
          <p className="hidden md:flex items-center gap-1.5 text-xs text-white/15 font-mono">
            <Code2 className="size-3" aria-hidden="true" />
            BCPC · Birjand
          </p>

          {/* Back to top */}
          <button
            type="button"
            onClick={handleBackToTop}
            className={cn(
              "order-1 sm:order-none inline-flex items-center gap-2 text-xs text-white/30",
              "hover:text-white/60 transition-colors duration-200 group",
            )}
            aria-label={FOOTER_BACK_TO_TOP}
          >
            {FOOTER_BACK_TO_TOP}
            <span
              className={cn(
                "size-6 rounded-full flex items-center justify-center",
                "bg-white/5 border border-white/10",
                "group-hover:bg-white/10 group-hover:border-white/20 transition-all duration-200",
              )}
              aria-hidden="true"
            >
              <ArrowUp className="size-3" />
            </span>
          </button>
        </div>
      </div>
    </footer>
  );
}
