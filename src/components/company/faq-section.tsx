import { useState } from "react";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

import FadeUp from "@/animation/fade-up";
import SectionHeader from "@/components/company/section-header";
import { FAQ } from "@/data/company";
import { classNames } from "@/utility/classNames";

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="relative z-10 scroll-mt-24 bg-background px-6 py-16 sm:px-14 md:px-20 md:py-24"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeader eyebrow="FAQ" title="Common questions" />

        <div className="mx-auto max-w-3xl space-y-3">
          {FAQ.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <FadeUp key={item.q} whileInView delay={index * 0.04}>
                <div className="overflow-hidden rounded-xl border border-border bg-white dark:bg-muted">
                  <button
                    type="button"
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left sm:px-6"
                    aria-expanded={isOpen}
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                  >
                    <span className="font-semibold leading-snug text-foreground">
                      {item.q}
                    </span>
                    <motion.span
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.25 }}
                      className="shrink-0 text-accent"
                    >
                      <ChevronDown className="h-5 w-5" />
                    </motion.span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen ? (
                      <motion.div
                        key="content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.28, ease: "easeOut" }}
                        className="overflow-hidden"
                      >
                        <p
                          className={classNames(
                            "border-t border-border px-5 pb-5 pt-3 text-sm leading-relaxed text-muted-foreground sm:px-6",
                          )}
                        >
                          {item.a}
                        </p>
                      </motion.div>
                    ) : null}
                  </AnimatePresence>
                </div>
              </FadeUp>
            );
          })}
        </div>
      </div>
    </section>
  );
}
