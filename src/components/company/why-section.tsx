import { motion } from "framer-motion";

import {
  fadeUpItem,
  scrollViewport,
  staggerContainer,
} from "@/animation/scroll-reveal";
import SectionHeader from "@/components/company/section-header";
import { WHY_US } from "@/data/company";

export default function WhySection() {
  return (
    <section
      id="why"
      className="brand-dark relative z-10 scroll-mt-24 px-6 py-16 sm:px-14 md:px-20 md:py-24"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          dark
          eyebrow="Why CleanCraft"
          title="Built for organizations that can’t take chances with data"
          lead="Public AI tools are fast to start and hard to approve. We build the alternative."
        />

        <motion.div
          className="grid gap-4 sm:grid-cols-2 lg:gap-5"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={scrollViewport}
        >
          {WHY_US.map((item) => (
            <motion.article
              key={item.title}
              variants={fadeUpItem}
              whileHover={{ y: -3 }}
              className="rounded-2xl border border-white/10 bg-white/[0.04] p-7 backdrop-blur-sm"
            >
              <h3 className="font-display text-lg font-semibold text-white">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-400 sm:text-[15px]">
                {item.body}
              </p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
