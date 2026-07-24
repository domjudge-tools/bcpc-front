/**
 * FAQSection — custom accordion, one item open at a time.
 *
 * Animation:
 *   - Answer panel: height 0 → "auto" via Framer Motion AnimatePresence.
 *     `overflow-hidden` on the wrapper clips content during animation.
 *   - Chevron: rotates 180° via CSS transition when item is open.
 *   - No scale, no layout-thrashing properties — only height + opacity.
 *
 * Accessibility:
 *   - Uses `<button>` for the trigger (keyboard navigable).
 *   - `aria-expanded` reflects open state.
 *   - `aria-controls` links the trigger to its answer panel.
 *   - Each panel has a unique `id` derived from its index.
 */
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown } from "lucide-react";
import { FadeIn } from "@/components/animations/FadeIn";
import { cn } from "@/lib/utils";
import {
  FAQ_ITEMS,
  FAQ_SECTION_EYEBROW,
  FAQ_SECTION_TITLE,
  FAQ_SECTION_SUBTITLE,
  FAQ_OPEN_ARIA,
  FAQ_CLOSE_ARIA,
  FAQ_CONTACT_LINK,
  FAQ_CONTACT_TEXT,
  FAQ_BOTTOM_NOTE,
  CTA_REGISTER,
} from "@/lib/constants";

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => setOpenIndex((prev) => (prev === i ? null : i));

  return (
    <section
      className="relative py-20 md:py-28 px-4 bg-background overflow-hidden"
      aria-labelledby="faq-heading"
    >
      {/* Glow — bottom-centre */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-[500px] h-[300px] rounded-full blur-3xl pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse, oklch(0.62 0.18 287 / 0.07) 0%, transparent 65%)",
        }}
        aria-hidden="true"
      />

      <div className="container relative z-10 mx-auto max-w-3xl">
        {/* ── Heading ──────────────────────────────────────────────────────── */}
        <FadeIn direction="up" className="text-center mb-12 md:mb-14">
          <div className="inline-flex items-center gap-2 mb-5 px-3.5 py-1.5 rounded-full border border-white/10 bg-white/[0.04] text-xs text-white/50">
            <span
              className="size-1.5 rounded-full bg-primary"
              aria-hidden="true"
            />
            {FAQ_SECTION_EYEBROW}
          </div>

          <h2
            id="faq-heading"
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 leading-tight"
          >
            {FAQ_SECTION_TITLE}
          </h2>

          <p className="text-muted-foreground text-base max-w-md mx-auto leading-relaxed">
            {FAQ_SECTION_SUBTITLE}{" "}
            <a
              href={FAQ_CONTACT_LINK}
              className="text-primary/80 hover:text-primary underline underline-offset-2 transition-colors"
            >
              {FAQ_CONTACT_TEXT}
            </a>
          </p>
        </FadeIn>

        {/* ── Accordion list ───────────────────────────────────────────────── */}
        <dl className="flex flex-col gap-2.5">
          {FAQ_ITEMS.map((item, i) => {
            const isOpen = openIndex === i;
            const panelId = `faq-panel-${i}`;
            const triggerId = `faq-trigger-${i}`;

            return (
              <FadeIn key={i} direction="up" delay={i * 0.05}>
                <div
                  className={cn(
                    "rounded-xl border overflow-hidden transition-all duration-300",
                    isOpen
                      ? "bg-white/[0.05] border-white/[0.12]"
                      : "bg-white/[0.02] border-white/[0.06] hover:bg-white/[0.04] hover:border-white/[0.09]",
                  )}
                >
                  {/* ── Trigger ────────────────────────────────────────────── */}
                  <dt>
                    <button
                      id={triggerId}
                      type="button"
                      onClick={() => toggle(i)}
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      aria-label={isOpen ? FAQ_CLOSE_ARIA : FAQ_OPEN_ARIA}
                      className="w-full flex items-center justify-between gap-4 px-5 py-4 text-right"
                    >
                      <span
                        className={cn(
                          "font-medium text-sm md:text-base leading-snug transition-colors duration-200 text-right",
                          isOpen ? "text-foreground" : "text-foreground/75",
                        )}
                      >
                        {item.question}
                      </span>

                      {/* Animated chevron */}
                      <span
                        className={cn(
                          "shrink-0 size-6 rounded-full flex items-center justify-center border transition-all duration-300",
                          isOpen
                            ? "bg-primary/15 border-primary/30 text-primary"
                            : "bg-white/5 border-white/10 text-white/40",
                        )}
                        aria-hidden="true"
                      >
                        <ChevronDown
                          className={cn(
                            "size-3.5 transition-transform duration-300",
                            isOpen && "rotate-180",
                          )}
                          strokeWidth={2.5}
                        />
                      </span>
                    </button>
                  </dt>

                  {/* ── Answer panel ───────────────────────────────────────── */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.dd
                        id={panelId}
                        role="region"
                        aria-labelledby={triggerId}
                        key="answer"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{
                          height: {
                            duration: 0.32,
                            ease: [0.21, 0.47, 0.32, 0.98],
                          },
                          opacity: { duration: 0.2, ease: "easeOut" },
                        }}
                        className="overflow-hidden"
                      >
                        <p className="px-5 pb-5 pt-1 text-sm md:text-base text-muted-foreground leading-relaxed border-t border-white/[0.06]">
                          {item.answer}
                        </p>
                      </motion.dd>
                    )}
                  </AnimatePresence>
                </div>
              </FadeIn>
            );
          })}
        </dl>

        {/* ── Bottom CTA ───────────────────────────────────────────────────── */}
        <FadeIn direction="up" delay={0.3} className="mt-12 text-center">
          <p className="text-sm text-muted-foreground/60 mb-5">
            {FAQ_BOTTOM_NOTE}
          </p>
          <a
            href="/register"
            className="inline-flex items-center gap-2 font-medium text-sm text-primary hover:text-primary/80 transition-colors"
          >
            {CTA_REGISTER} ←
          </a>
        </FadeIn>
      </div>
    </section>
  );
}
