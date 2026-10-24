import { motion } from "framer-motion";

import {
  fadeUpItem,
  scrollViewport,
  staggerContainer,
} from "@/animation/scroll-reveal";
import SectionHeader from "@/components/company/section-header";
import { CASE_STUDIES } from "@/data/company";

export default function WorkSection() {
  return (
    <section
      id="work"
      className="relative z-10 scroll-mt-24 bg-background px-6 py-16 sm:px-14 md:px-20 md:py-24"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Case studies"
          title="Real systems, running in real environments"
          lead="Three products from our portfolio. Client deployments are described without names."
        />

        <motion.div
          className="grid gap-5 lg:grid-cols-3"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={scrollViewport}
        >
          {CASE_STUDIES.map((study) => (
            <motion.article
              key={study.code}
              variants={fadeUpItem}
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 360, damping: 28 }}
              className="flex flex-col rounded-2xl border border-border bg-white p-7 shadow-sm dark:bg-muted"
            >
              <p className="mb-3 font-display text-sm font-bold text-brand-warm">
                {study.code}
              </p>
              <h3 className="font-display text-lg font-semibold leading-snug text-foreground">
                {study.title}
              </h3>
              <dl className="mt-4 flex-1 space-y-3 text-sm">
                <div>
                  <dt className="font-semibold text-foreground">Problem</dt>
                  <dd className="mt-1 text-muted-foreground">
                    {study.problem}
                  </dd>
                </div>
                <div>
                  <dt className="font-semibold text-foreground">Solution</dt>
                  <dd className="mt-1 text-muted-foreground">
                    {study.solution}
                  </dd>
                </div>
              </dl>
              <p className="mt-5 rounded-lg bg-accent/10 px-3.5 py-2.5 text-sm font-semibold text-accent">
                Result: {study.result}
              </p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
