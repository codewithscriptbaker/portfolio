import { motion } from "framer-motion";

import FadeUp from "@/animation/fade-up";
import {
  fadeUpItem,
  scrollViewport,
  staggerContainer,
} from "@/animation/scroll-reveal";
import { TECH_STACK } from "@/data/company";

export default function TechSection() {
  return (
    <section className="relative z-10 bg-muted/80 px-6 py-16 sm:px-14 md:px-20 md:py-20">
      <div className="mx-auto max-w-7xl">
        <FadeUp whileInView>
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.08em] text-accent">
            Technology
          </p>
        </FadeUp>
        <FadeUp whileInView delay={0.06}>
          <h2 className="text-balance max-w-3xl font-display text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl">
            Open, proven tools we run on your hardware
          </h2>
        </FadeUp>

        <motion.div
          className="mt-8 flex flex-wrap gap-2.5"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={scrollViewport}
        >
          {TECH_STACK.map((tech) => (
            <motion.span
              key={tech}
              variants={fadeUpItem}
              whileHover={{ y: -2, scale: 1.03 }}
              className="inline-flex rounded-full border border-border bg-white px-4 py-2 text-sm font-medium text-foreground shadow-sm dark:bg-background"
            >
              {tech}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
