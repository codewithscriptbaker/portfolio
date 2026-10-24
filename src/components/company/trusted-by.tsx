import { motion } from "framer-motion";

import FadeUp from "@/animation/fade-up";
import {
  fadeUpItem,
  scrollViewport,
  staggerContainer,
} from "@/animation/scroll-reveal";
import { COMPANY } from "@/data/company";

const PLACEHOLDERS = Array.from({ length: 5 }, (_, i) => i);

export default function TrustedBy() {
  return (
    <section className="relative z-10 border-b border-border/60 bg-background px-6 py-12 sm:px-14 md:px-20 md:py-16">
      <div className="mx-auto max-w-7xl">
        <FadeUp whileInView>
          <p className="mb-6 text-xs font-semibold uppercase tracking-[0.08em] text-accent">
            Trusted by
          </p>
        </FadeUp>

        <motion.div
          className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-5 md:gap-4"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={scrollViewport}
        >
          {PLACEHOLDERS.map((i) => (
            <motion.div
              key={i}
              variants={fadeUpItem}
              className="flex items-center justify-center rounded-xl border border-dashed border-border px-4 py-5 text-center text-xs font-medium text-muted-foreground"
            >
              Client logo
            </motion.div>
          ))}
        </motion.div>

        <FadeUp whileInView delay={0.1}>
          <p className="mt-5 text-sm text-muted-foreground">
            Serving teams in{" "}
            {COMPANY.sectors.map((sector, i) => (
              <span key={sector}>
                <span className="font-semibold text-brand-warm">{sector}</span>
                {i < COMPANY.sectors.length - 2
                  ? ", "
                  : i === COMPANY.sectors.length - 2
                  ? " and "
                  : ""}
              </span>
            ))}
            . Client names withheld under NDA.
          </p>
        </FadeUp>
      </div>
    </section>
  );
}
