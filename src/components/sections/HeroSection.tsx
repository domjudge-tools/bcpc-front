import { motion, AnimatePresence } from "motion/react";
import { Button } from "@/components/ui/button";
import { useCountdown } from "@/hooks/use-countdown";
import {
  HERO_BADGE,
  HERO_EYEBROW,
  HERO_TITLE_LINE1,
  HERO_TITLE_ACCENT,
  HERO_SUBTITLE,
  CTA_REGISTER,
  CTA_ABOUT,
  COUNTDOWN_LABEL,
  CONTEST_DATE,
  CONTEST_DATE_PERSIAN,
  CONTEST_LOCATION,
  SITE_SHORT_NAME,
  TIME_UNIT_LABELS,
  SCROLL_INDICATOR_TEXT,
} from "@/lib/constants";
import {
  StaggerContainer,
  StaggerItem,
} from "@/components/animations/StaggerContainer";
import { CodeBackground } from "@/components/animations/CodeBackground";
import {
  CalendarDays,
  ArrowLeft,
  ChevronDown,
  MapPin,
  Terminal,
} from "lucide-react";

interface TimeUnit {
  label: string;
  value: number;
}

export function HeroSection() {
  const timeLeft = useCountdown(CONTEST_DATE);

  const timeUnits: TimeUnit[] = [
    { label: TIME_UNIT_LABELS.days, value: timeLeft.days },
    { label: TIME_UNIT_LABELS.hours, value: timeLeft.hours },
    { label: TIME_UNIT_LABELS.minutes, value: timeLeft.minutes },
    { label: TIME_UNIT_LABELS.seconds, value: timeLeft.seconds },
  ];

  return (
    // h-[100svh]: exact viewport height on mobile (svh = small viewport height,
    // accounts for collapsible browser UI bars like Safari's address bar).
    // overflow-hidden: nothing can bleed outside this viewport frame.
    <section className="relative h-[100svh] overflow-hidden bg-slate-950">
      <CodeBackground />

      {/* Content column — fills the full height, with top padding to clear
          the fixed header (~72px). The inner flex centers everything. */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-4 pt-20">
        <div className="w-full max-w-5xl mx-auto">
          <StaggerContainer staggerDelay={0.1}>
            {/* ── Eyebrow ───────────────────────────────────────────────── */}
            {/* <StaggerItem>
              <div className="flex justify-center mb-3 md:mb-4">
                <div className="liquid-glass-pill inline-flex items-center gap-2 text-xs font-medium text-white/60 border border-white/10">
                  <Terminal className="size-3 text-primary" />
                  <span>{HERO_EYEBROW}</span>
                </div>
              </div>
            </StaggerItem> */}

            {/* ── ICPC live badge ───────────────────────────────────────── */}
            {/* <StaggerItem>
              <div className="flex justify-center mb-4 md:mb-5">
                <div className="flex items-center gap-2.5">
                  <span className="relative flex size-2">
                    <span className="absolute inline-flex size-full rounded-full bg-primary opacity-75 animate-ping" />
                    <span className="relative inline-flex size-2 rounded-full bg-primary" />
                  </span>
                  <span className="font-mono text-[11px] tracking-widest text-primary/70 uppercase">
                    {HERO_BADGE}
                  </span>
                </div>
              </div>
            </StaggerItem> */}

            {/* ── Main title ────────────────────────────────────────────── */}
            <StaggerItem>
              <h1 className="text-center mb-3 md:mb-5 leading-[1.08] tracking-tight">
                {/* "BCPC" — focal point, monospace, gradient */}
                <span
                  className="block font-mono font-black bg-gradient-to-l from-primary via-violet-400 to-primary/60 bg-clip-text text-transparent
                    text-[clamp(3rem,12vw,7rem)]"
                >
                  {SITE_SHORT_NAME}
                </span>
                {/* Persian line 1 */}
                <span
                  className="block font-bold text-white/90
                  text-[clamp(1.25rem,4.5vw,3rem)]"
                >
                  {HERO_TITLE_LINE1}
                </span>
                {/* Persian line 2 — accent */}
                <span
                  className="block font-bold bg-gradient-to-l from-violet-300 via-primary to-purple-400 bg-clip-text text-transparent
                  text-[clamp(1.25rem,4.5vw,3rem)]"
                >
                  {HERO_TITLE_ACCENT}
                </span>
              </h1>
            </StaggerItem>

            {/* ── Subtitle ──────────────────────────────────────────────── */}
            <StaggerItem>
              <p
                className="text-center text-white/45 max-w-2xl mx-auto mb-3 md:mb-4 leading-relaxed
                text-[clamp(0.8rem,2vw,1.05rem)]"
              >
                {HERO_SUBTITLE}
              </p>
            </StaggerItem>

            {/* ── Date & Location — hidden on very small screens ─────────── */}
            <StaggerItem>
              <div className="hidden sm:flex flex-wrap items-center justify-center gap-4 mb-5 md:mb-6 text-xs text-white/35">
                <span className="flex items-center gap-1.5">
                  <CalendarDays className="size-3 text-primary/50" />
                  {CONTEST_DATE_PERSIAN}
                </span>
                <span className="size-1 rounded-full bg-white/15" />
                <span className="flex items-center gap-1.5">
                  <MapPin className="size-3 text-primary/50" />
                  {CONTEST_LOCATION}
                </span>
              </div>
            </StaggerItem>

            {/* ── CTAs ──────────────────────────────────────────────────── */}
            <StaggerItem>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-2.5 mb-6 md:mb-8">
                <Button
                  size="lg"
                  className="group w-full sm:w-auto text-sm md:text-base px-7 h-11 rounded-full
                    bg-gradient-to-l from-primary to-violet-500
                    shadow-lg shadow-primary/25 hover:shadow-primary/45
                    hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
                  aria-label={CTA_REGISTER}
                >
                  {CTA_REGISTER}
                  <ArrowLeft className="size-4 mr-2 group-hover:-translate-x-1 transition-transform duration-300" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto liquid-glass text-sm md:text-base px-7 h-11 rounded-full border-0 text-white/75 hover:text-white"
                  aria-label={CTA_ABOUT}
                >
                  {CTA_ABOUT}
                </Button>
              </div>
            </StaggerItem>

            {/* ── Countdown ─────────────────────────────────────────────── */}
            <StaggerItem>
              <div className="flex justify-center">
                <div className="liquid-glass-strong w-full max-w-lg px-4 py-4 md:px-7 md:py-5 rounded-2xl">
                  <p className="text-center text-[10px] text-white/35 mb-3 md:mb-4 tracking-widest uppercase">
                    {COUNTDOWN_LABEL}
                  </p>
                  <div dir="ltr" className="grid grid-cols-4 gap-2 md:gap-3">
                    {timeUnits.map((unit, i) => (
                      <CountdownUnit key={unit.label} unit={unit} index={i} />
                    ))}
                  </div>
                </div>
              </div>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </div>

      {/* ── Scroll indicator ────────────────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 0.8 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-1.5"
        aria-hidden="true"
      >
        <span className="text-[9px] text-white/20 tracking-widest uppercase">
          {SCROLL_INDICATOR_TEXT}
        </span>
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="size-3.5 text-white/20" />
        </motion.div>
      </motion.div>
    </section>
  );
}

// ─── CountdownUnit ─────────────────────────────────────────────────────────────
// Uses AnimatePresence so both the old digit and the new digit animate
// simultaneously (old exits downward, new enters from above).
// The overflow-hidden clip on the number container prevents any bleed.

interface CountdownUnitProps {
  unit: TimeUnit;
  index: number;
}

function CountdownUnit({ unit, index }: CountdownUnitProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.55 + index * 0.07, duration: 0.35 }}
      className="flex flex-col items-center gap-1 p-2 md:p-3.5 rounded-xl bg-white/[0.05] border border-white/[0.07]"
    >
      {/* Fixed-height clip container prevents layout shift during digit swap */}
      <div className="relative h-8 md:h-11 w-full flex items-center justify-center overflow-hidden">
        <AnimatePresence mode="popLayout" initial={false}>
          <motion.span
            key={unit.value}
            initial={{ y: -22, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 22, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.32, 0, 0.67, 0] }}
            className="absolute font-mono font-bold tabular-nums text-white
              text-xl md:text-3xl leading-none"
          >
            {unit.value.toString().padStart(2, "0")}
          </motion.span>
        </AnimatePresence>
      </div>

      <span className="h-px w-5 bg-white/[0.08] rounded-full" />

      <span className="text-[9px] md:text-[11px] text-white/30 font-medium">
        {unit.label}
      </span>
    </motion.div>
  );
}
