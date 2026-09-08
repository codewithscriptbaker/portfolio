import { ReactNode } from "react";

import { motion } from "framer-motion";

import { scrollViewport } from "@/animation/scroll-reveal";

export interface FadeUpProps {
  children: ReactNode;
  duration?: number;
  delay?: number;
  whileInView?: boolean;
  className?: string;
  yOffset?: number;
}

export default function FadeUp({
  children,
  duration = 0.5,
  delay = 0,
  whileInView = false,
  className,
  yOffset = 28,
}: FadeUpProps) {
  const transition = { duration, ease: "easeOut", delay };

  if (whileInView) {
    return (
      <motion.div
        className={className}
        initial={{ y: yOffset, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={scrollViewport}
        transition={transition}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div
      className={className}
      initial={{ y: yOffset, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={transition}
    >
      {children}
    </motion.div>
  );
}
