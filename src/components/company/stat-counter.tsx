import { useEffect, useRef, useState } from "react";

import { animate, motion, useInView, useReducedMotion } from "framer-motion";

type StatCounterProps = {
  value: number;
  suffix?: string;
  label: string;
  rangeEnd?: number;
  triggerOnMount?: boolean;
};

export default function StatCounter({
  value,
  suffix = "",
  label,
  rangeEnd,
  triggerOnMount = false,
}: StatCounterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });
  const reduceMotion = useReducedMotion();
  const [display, setDisplay] = useState(0);
  const [displayEnd, setDisplayEnd] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    if (triggerOnMount) {
      const id = window.setTimeout(() => setStarted(true), 350);
      return () => window.clearTimeout(id);
    }
  }, [triggerOnMount]);

  useEffect(() => {
    if (inView) setStarted(true);
  }, [inView]);

  useEffect(() => {
    if (!started) return;

    if (reduceMotion) {
      setDisplay(value);
      if (rangeEnd != null) setDisplayEnd(rangeEnd);
      return;
    }

    const primary = animate(0, value, {
      duration: 1.35,
      ease: "easeOut",
      onUpdate: (latest) => setDisplay(Math.max(0, Math.round(latest))),
    });

    const secondary =
      rangeEnd != null
        ? animate(0, rangeEnd, {
            duration: 1.35,
            ease: "easeOut",
            onUpdate: (latest) =>
              setDisplayEnd(Math.max(0, Math.round(latest))),
          })
        : null;

    return () => {
      primary.stop();
      secondary?.stop();
    };
  }, [started, value, rangeEnd, reduceMotion]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
    >
      <p className="font-display text-3xl font-bold text-brand-mint sm:text-4xl">
        {rangeEnd != null ? (
          <>
            {display}–{displayEnd}%
          </>
        ) : (
          <>
            {display}
            {suffix}
          </>
        )}
      </p>
      <p className="mt-1 text-sm text-zinc-400">{label}</p>
    </motion.div>
  );
}
