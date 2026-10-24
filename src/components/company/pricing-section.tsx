import { motion } from "framer-motion";

import {
  fadeUpItem,
  scrollViewport,
  staggerContainer,
} from "@/animation/scroll-reveal";
import SectionHeader from "@/components/company/section-header";
import { ENGAGEMENT } from "@/data/company";

export default function PricingSection() {
  return (
    <section
      id="pricing"
      className="relative z-10 scroll-mt-24 bg-background px-6 py-16 sm:px-14 md:px-20 md:py-24"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Engagement models"
          title="Choose how you want to work with us"
          lead="Pricing is tailored to scope. These are the three ways most clients start."
        />

        <motion.div
          className="grid gap-5 md:grid-cols-3"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={scrollViewport}
        >
          {ENGAGEMENT.map((item) => (
            <motion.article
              key={item.title}
              variants={fadeUpItem}
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 360, damping: 28 }}
              className="flex flex-col rounded-2xl border border-border bg-white p-7 shadow-sm dark:bg-muted"
            >
              <h3 className="font-display text-lg font-semibold text-foreground">
                {item.title}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                {item.body}
              </p>
              <p className="mt-5 rounded-lg bg-accent/10 px-3.5 py-2.5 text-sm font-semibold text-accent">
                {item.price}
              </p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
