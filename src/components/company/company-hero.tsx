import { useState, type MouseEvent } from "react";

import { motion } from "framer-motion";

import FadeUp from "@/animation/fade-up";
import ContactFormModal from "@/components/contact-form/contact-form-modal";
import NetworkGraphic from "@/components/company/network-graphic";
import StatCounter from "@/components/company/stat-counter";
import Button from "@/components/ui/button";
import { COMPANY, STATS } from "@/data/company";
import { scrollToSection } from "@/hooks/useActiveSection";

export default function CompanyHero() {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const handleSectionLink = (
    event: MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    event.preventDefault();
    scrollToSection(href);
  };

  return (
    <>
      <section
        id="top"
        className="brand-dark relative isolate scroll-mt-24 overflow-hidden"
      >
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_80%_20%,hsl(var(--brand-mint)/0.14),transparent_60%)]" />
        <NetworkGraphic className="pointer-events-none absolute right-4 top-8 hidden h-auto w-[min(44%,460px)] text-brand-mint opacity-30 md:block" />

        <div className="relative mx-auto max-w-7xl px-6 pb-20 pt-10 sm:px-14 md:px-20 md:pb-28 md:pt-14">
          <FadeUp duration={0.6}>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.08em] text-brand-mint sm:text-sm">
              {COMPANY.eyebrow}
            </p>
          </FadeUp>

          <FadeUp duration={0.65} delay={0.08}>
            <h1 className="text-balance max-w-4xl font-display text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-[3.75rem]">
              {COMPANY.headline}
            </h1>
          </FadeUp>

          <FadeUp duration={0.6} delay={0.16}>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-zinc-300 sm:text-lg md:text-xl">
              {COMPANY.lead}
            </p>
          </FadeUp>

          <FadeUp duration={0.55} delay={0.24}>
            <div className="mt-10 flex flex-wrap items-center gap-3">
              <Button
                variant="primary"
                className="rounded-xl bg-brand-mint px-6 py-3.5 text-brand-dark hover:bg-brand-mint/90"
                onClick={() => setIsOpenModal(true)}
              >
                Book a free consultation
              </Button>
              <Button
                variant="secondary"
                href="#work"
                className="rounded-xl border-zinc-500 text-zinc-100 hover:bg-white/5"
                onClick={(event) => handleSectionLink(event, "#work")}
              >
                See our work
              </Button>
            </div>
          </FadeUp>

          <motion.div
            className="mt-16 grid grid-cols-2 gap-6 border-t border-white/10 pt-8 md:grid-cols-4 md:gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.45, duration: 0.5 }}
          >
            {STATS.map((stat) => (
              <StatCounter
                key={stat.label}
                value={stat.value}
                suffix={"suffix" in stat ? stat.suffix : ""}
                label={stat.label}
                rangeEnd={"rangeEnd" in stat ? stat.rangeEnd : undefined}
                triggerOnMount
              />
            ))}
          </motion.div>
        </div>
      </section>

      <ContactFormModal showModal={isOpenModal} setShowModal={setIsOpenModal} />
    </>
  );
}
