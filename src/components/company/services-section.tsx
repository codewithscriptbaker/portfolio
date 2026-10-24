import { motion } from "framer-motion";

import {
  fadeUpItem,
  scrollViewport,
  staggerContainer,
} from "@/animation/scroll-reveal";
import SectionHeader from "@/components/company/section-header";
import { SERVICES } from "@/data/company";

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="relative z-10 scroll-mt-24 bg-background px-6 py-16 sm:px-14 md:px-20 md:py-24"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Services"
          title="Six ways we put private AI to work"
          lead="Every engagement ends with a system your team owns and runs on your own infrastructure."
        />

        <motion.div
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={scrollViewport}
        >
          {SERVICES.map((service) => (
            <motion.article
              key={service.num}
              variants={fadeUpItem}
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 360, damping: 28 }}
              className="rounded-2xl border border-border bg-white p-7 shadow-sm dark:bg-muted"
            >
              <p className="mb-3 font-display text-sm font-bold text-brand-warm">
                {service.num}
              </p>
              <h3 className="font-display text-lg font-semibold leading-snug text-foreground">
                {service.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground sm:text-[15px]">
                {service.body}
              </p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
