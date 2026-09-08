import { ReactNode } from "react";

import { motion } from "framer-motion";

import { scrollViewport } from "@/animation/scroll-reveal";

export interface FadeRightProps {
  children: ReactNode;
  duration?: number;
  delay?: number;
  className?: string;
  whileInView?: boolean;
}

export default function FadeRight({
  children,
  duration = 0.35,
  delay = 0,
  className,
  whileInView = false,
}: FadeRightProps) {
  const visible = {
    opacity: 1,
    x: 0,
    transition: {
      duration,
      ease: "easeOut",
      delay,
    },
  };

  if (whileInView) {
    return (
      <motion.div
        className={className}
        initial={{ x: -28, opacity: 0 }}
        whileInView={visible}
        viewport={scrollViewport}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div
      className={className}
      initial={{ x: -28, opacity: 0 }}
      animate={visible}
    >
      {children}
    </motion.div>
  );
}
