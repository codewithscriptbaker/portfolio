import { motion } from "framer-motion";

import {
  fadeUpItem,
  scrollViewport,
  staggerContainer,
} from "@/animation/scroll-reveal";
import SectionHeader from "@/components/company/section-header";
import { PROCESS } from "@/data/company";

export default function ProcessSection() {
  return (
    <section
      id="process"
      className="brand-dark relative z-10 scroll-mt-24 px-6 py-16 sm:px-14 md:px-20 md:py-24"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          dark
          eyebrow="How we work"
          title="From first call to a system you control"
          lead="A simple four-step process with a clear deliverable at each stage."
        />

        <motion.div
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={scrollViewport}
        >
          {PROCESS.map((step, index) => (
            <motion.article
              key={step.step}
              variants={fadeUpItem}
              whileHover={{ y: -3 }}
              className="relative rounded-2xl border border-white/10 bg-white/[0.04] p-6"
            >
              {index < PROCESS.length - 1 ? (
                <span
                  className="absolute -right-3 top-10 z-10 hidden h-px w-6 bg-brand-mint/40 lg:block"
                  aria-hidden
                />
              ) : null}
              <p className="mb-3 font-display text-xs font-bold tracking-wide text-brand-mint">
                {step.step}
              </p>
              <h3 className="font-display text-lg font-semibold text-white">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                {step.body}
              </p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
