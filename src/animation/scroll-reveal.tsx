import { ReactNode } from "react";

import { motion, type Variants } from "framer-motion";

/**
 * Use a small amount — tall sections can never reach 0.4+ visible ratio,
 * so whileInView would never fire.
 */
export const scrollViewport = {
  once: true,
  amount: 0.15,
  margin: "0px 0px -80px 0px",
} as const;

export const fadeUpItem: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export const fadeRightItem: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.07,
      delayChildren: 0.05,
    },
  },
};

export interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

/** Reliable scroll-in reveal for a single block. */
export default function ScrollReveal({
  children,
  className,
  delay = 0,
}: ScrollRevealProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={scrollViewport}
      transition={{ duration: 0.5, ease: "easeOut", delay }}
    >
      {children}
    </motion.div>
  );
}
