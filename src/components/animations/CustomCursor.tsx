/**
 * CustomCursor — replaces the native OS cursor on mouse devices.
 *
 * Two layers:
 *  1. Dot   — `size-2` circle that tracks the exact mouse position with zero lag.
 *  2. Ring  — `size-9` circle that follows with spring physics, creating a
 *             satisfying lag that communicates the cursor's momentum.
 *
 * Interactive state (hovering over a, button, input, etc.):
 *  - Dot shrinks to invisible (scale 0).
 *  - Ring grows (scale 1.7) and brightens — acts like a "highlight" around the element.
 *
 * Guards:
 *  - Only mounts on `pointer: fine` devices (mouse). Touch screens keep default behaviour.
 *  - Respects `prefers-reduced-motion`: both layers snap to position, no spring lag.
 *  - Hides while cursor is outside the window.
 *
 * Performance:
 *  - All movement uses CSS `transform` via Framer Motion `useMotionValue` — no
 *    `top`/`left` layout properties, always GPU-composited.
 *  - The dot uses a raw MotionValue (no spring) for pixel-perfect precision.
 */
import { useEffect, useState } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useReducedMotion,
} from "motion/react";

// Selector for elements that trigger the hover state
const INTERACTIVE = "a, button, input, textarea, select, label, [role='button'], [tabindex]";

export function CustomCursor() {
  const [visible,    setVisible]    = useState(false);
  const [hovering,   setHovering]   = useState(false);
  const [isFine,     setIsFine]     = useState(false);
  const prefersReduced = useReducedMotion();

  // Raw motion values — updated synchronously on mousemove
  const rawX = useMotionValue(-200);
  const rawY = useMotionValue(-200);

  // Spring config: adjust stiffness/damping to taste
  // Higher stiffness → snappier, lower damping → more oscillation
  const springCfg = prefersReduced
    ? { stiffness: 10_000, damping: 1_000 }   // effectively instant
    : { stiffness: 140,    damping: 20, mass: 0.6 };

  const springX = useSpring(rawX, springCfg);
  const springY = useSpring(rawY, springCfg);

  useEffect(() => {
    // Only activate on true mouse/trackpad devices
    const fine = window.matchMedia("(pointer: fine)").matches;
    setIsFine(fine);
    if (!fine) return;

    const onMove = (e: MouseEvent) => {
      rawX.set(e.clientX);
      rawY.set(e.clientY);
      setVisible(true);
    };

    const onOver = (e: MouseEvent) => {
      setHovering(!!(e.target as HTMLElement).closest(INTERACTIVE));
    };

    const onLeave = () => setVisible(false);
    const onEnter = () => setVisible(true);

    window.addEventListener("mousemove",   onMove,   { passive: true });
    window.addEventListener("mouseover",   onOver,   { passive: true });
    document.addEventListener("mouseleave", onLeave);
    document.addEventListener("mouseenter", onEnter);

    return () => {
      window.removeEventListener("mousemove",   onMove);
      window.removeEventListener("mouseover",   onOver);
      document.removeEventListener("mouseleave", onLeave);
      document.removeEventListener("mouseenter", onEnter);
    };
  }, [rawX, rawY]);

  // Don't render anything on touch devices (avoids invisible overlay)
  if (!isFine) return null;

  return (
    <div aria-hidden="true" className="select-none pointer-events-none">

      {/* ── Dot — precise, zero-lag ────────────────────────────────────── */}
      <motion.div
        style={{ x: rawX, y: rawY }}
        animate={{
          opacity : visible ? 1 : 0,
          scale   : hovering ? 0 : 1,
        }}
        transition={{ duration: 0.15, ease: "easeOut" }}
        className="fixed top-0 left-0 z-[9999] pointer-events-none
          -translate-x-1/2 -translate-y-1/2
          size-2 rounded-full bg-white"
        style={{ x: rawX, y: rawY, mixBlendMode: "difference" }}
      />

      {/* ── Ring — spring lag, expands on hover ───────────────────────── */}
      <motion.div
        style={{ x: springX, y: springY }}
        animate={{
          opacity : visible ? 1 : 0,
          scale   : hovering ? 1.7 : 1,
        }}
        transition={{ opacity: { duration: 0.2 }, scale: { duration: 0.25, ease: [0.21, 0.47, 0.32, 0.98] } }}
        className="fixed top-0 left-0 z-[9998] pointer-events-none
          -translate-x-1/2 -translate-y-1/2
          size-9 rounded-full
          border border-primary/50"
        style={{
          x: springX,
          y: springY,
          boxShadow: "0 0 12px 1px oklch(0.62 0.18 287 / 0.2)",
        }}
      />

    </div>
  );
}
