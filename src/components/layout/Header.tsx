"use client";

/**
 * Header — completely redesigned navigation bar.
 *
 * Design language:
 *  • Full-width bar — no floating glass card, no rounded border.
 *  • Transparent on hero, gains a dark bg + bottom border on scroll.
 *  • Logo: `{B}` bracket motif in primary colour — code/terminal aesthetic.
 *  • Active link: a sliding underline driven by Framer Motion layoutId.
 *  • CTA: primary gradient pill — visible on any background.
 *  • Mobile: hamburger → full-width dropdown panel slides down from header.
 *  • Scroll-progress bar sits as a 2px line at the very bottom of the bar.
 */

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowLeft, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  NAV_LINKS,
  SITE_SHORT_NAME,
  SITE_UNIVERSITY,
  CTA_REGISTER_SHORT,
  CTA_REGISTER,
  HEADER_LOGO_ARIA,
  NAV_DESKTOP_ARIA,
  NAV_MOBILE_ARIA,
  MOBILE_MENU_OPEN_ARIA,
  MOBILE_MENU_CLOSE_ARIA,
} from "@/lib/constants";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activePath, setActivePath] = useState("/");
  const headerRef = useRef<HTMLElement>(null);

  // ── Scroll tracking ───────────────────────────────────────────────────────
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setIsScrolled(y > 40);
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(max > 0 ? (y / max) * 100 : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // ── Active path ───────────────────────────────────────────────────────────
  useEffect(() => {
    setActivePath(window.location.pathname);
  }, []);

  // ── Body scroll lock while mobile menu is open ────────────────────────────
  useEffect(() => {
    document.body.style.overflow = isMobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileOpen]);

  const closeMenu = () => setIsMobileOpen(false);

  return (
    <>
      {/* ── Header bar ──────────────────────────────────────────────────── */}
      <motion.header
        ref={headerRef}
        initial={{ y: -72, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] }}
        className={cn(
          "fixed top-0 inset-x-0 z-50 h-16 transition-all duration-500",
          isScrolled
            ? "bg-slate-950/90 backdrop-blur-xl border-b border-white/[0.07]"
            : "bg-transparent",
        )}
      >
        <div className="container mx-auto h-full px-4 md:px-6 max-w-6xl flex items-center justify-between gap-6">
          {/* ── Logo ────────────────────────────────────────────────────── */}
          <a
            href="/"
            aria-label={HEADER_LOGO_ARIA}
            className="flex items-center gap-3 shrink-0 group"
          >
            {/* {B} bracket motif */}
            <span
              className="font-mono font-black text-xl leading-none select-none"
              aria-hidden="true"
            >
              <span className="text-primary transition-colors duration-300 group-hover:text-violet-400">
                {"{ "}
              </span>
              <span className="text-white">B</span>
              <span className="text-primary transition-colors duration-300 group-hover:text-violet-400">
                {" }"}
              </span>
            </span>

            {/* Name + subtitle */}
            <div className="flex flex-col leading-none gap-[3px]">
              <span className="font-mono font-bold text-[13px] text-white tracking-tight">
                {SITE_SHORT_NAME}
              </span>
              <span className="font-mono text-[9px] text-white/35 tracking-wider uppercase">
                {SITE_UNIVERSITY}
              </span>
            </div>
          </a>

          {/* ── Desktop nav ─────────────────────────────────────────────── */}
          <nav
            className="hidden md:flex items-center gap-1"
            aria-label={NAV_DESKTOP_ARIA}
          >
            {NAV_LINKS.map((link) => {
              const isActive = activePath === link.href;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "relative px-3.5 py-1 font-medium transition-colors duration-200 text-sm",
                    isActive
                      ? "text-white"
                      : "text-white/45 hover:text-white/80",
                  )}
                >
                  {link.label}

                  {/* Sliding underline — shared layoutId slides between links */}
                  {isActive && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute inset-x-2 -bottom-[1px] h-[2px] rounded-full bg-primary"
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 32,
                      }}
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* ── Actions ─────────────────────────────────────────────────── */}
          <div className="flex items-center gap-3 shrink-0">
            {/* CTA — gradient pill, visible on dark hero and light sections */}
            <a
              href="/register"
              className={cn(
                "hidden sm:inline-flex items-center gap-2",
                "h-8 px-4 rounded-full text-xs font-bold text-white",
                "bg-gradient-to-l from-primary to-violet-500",
                "shadow-md shadow-primary/25",
                "hover:shadow-primary/45 hover:scale-[1.04]",
                "active:scale-[0.97]",
                "transition-all duration-200",
              )}
              aria-label={CTA_REGISTER}
            >
              {CTA_REGISTER_SHORT}
              <ArrowLeft className="size-3" aria-hidden="true" />
            </a>

            {/* Hamburger — mobile only */}
            <button
              type="button"
              onClick={() => setIsMobileOpen((v) => !v)}
              aria-label={
                isMobileOpen ? MOBILE_MENU_CLOSE_ARIA : MOBILE_MENU_OPEN_ARIA
              }
              aria-expanded={isMobileOpen}
              className={cn(
                "md:hidden flex items-center justify-center",
                "size-8 rounded-lg transition-colors duration-200",
                "text-white/60 hover:text-white",
                isMobileOpen ? "bg-white/10" : "hover:bg-white/8",
              )}
            >
              <AnimatePresence mode="wait" initial={false}>
                {isMobileOpen ? (
                  <motion.span
                    key="x"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.15 }}
                  >
                    <X className="size-4" />
                  </motion.span>
                ) : (
                  <motion.span
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.15 }}
                  >
                    <Menu className="size-4" />
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>

        {/* ── Scroll progress — 2px line at the bottom of the header ──── */}
        <div
          className="absolute bottom-0 left-0 h-[2px] bg-primary/70 origin-left transition-none"
          style={{ width: `${scrollProgress}%` }}
          aria-hidden="true"
        />
      </motion.header>

      {/* ── Mobile dropdown ─────────────────────────────────────────────── */}
      <AnimatePresence>
        {isMobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={closeMenu}
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm md:hidden"
            />

            {/* Panel — slides down from under the header */}
            <motion.div
              key="panel"
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.22, ease: [0.21, 0.47, 0.32, 0.98] }}
              className={cn(
                "fixed inset-x-0 top-16 z-40 md:hidden",
                "bg-slate-950 border-b border-white/[0.08]",
              )}
            >
              <nav
                className="container mx-auto max-w-6xl px-4 py-4 flex flex-col gap-1"
                aria-label={NAV_MOBILE_ARIA}
              >
                {NAV_LINKS.map((link, i) => {
                  const isActive = activePath === link.href;
                  return (
                    <motion.a
                      key={link.href}
                      href={link.href}
                      onClick={closeMenu}
                      initial={{ opacity: 0, x: 12 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.04, duration: 0.18 }}
                      className={cn(
                        "flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium",
                        "transition-colors duration-150",
                        isActive
                          ? "text-white bg-white/[0.07]"
                          : "text-white/50 hover:text-white hover:bg-white/[0.04]",
                      )}
                    >
                      {/* Active accent bar */}
                      <span
                        className={cn(
                          "shrink-0 w-[3px] h-4 rounded-full transition-all duration-200",
                          isActive ? "bg-primary" : "bg-transparent",
                        )}
                        aria-hidden="true"
                      />
                      {link.label}
                    </motion.a>
                  );
                })}

                {/* CTA at the bottom of the drawer */}
                <motion.div
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: NAV_LINKS.length * 0.04 + 0.06 }}
                  className="mt-3 pt-3 border-t border-white/[0.06] px-1"
                >
                  <a
                    href="/register"
                    onClick={closeMenu}
                    className={cn(
                      "flex items-center justify-center gap-2 w-full",
                      "h-11 rounded-xl text-sm font-bold text-white",
                      "bg-gradient-to-l from-primary to-violet-500",
                      "shadow-lg shadow-primary/20",
                      "hover:shadow-primary/40 transition-all duration-200",
                    )}
                  >
                    {CTA_REGISTER}
                    <ArrowLeft className="size-4" aria-hidden="true" />
                  </a>
                </motion.div>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
