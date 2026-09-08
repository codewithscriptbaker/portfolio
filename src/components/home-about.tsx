import { type MouseEvent } from "react";

import { motion } from "framer-motion";

import ScrollReveal, {
  fadeUpItem,
  scrollViewport,
  staggerContainer,
} from "@/animation/scroll-reveal";
import Button from "@/components/ui/button";
import { siteMetadata } from "@/data/siteMetaData.mjs";
import { scrollToSection } from "@/hooks/useActiveSection";

const HIGHLIGHTS = [
  { value: "3+", label: "AI products led" },
  { value: "4+", label: "Years shipping AI systems" },
  { value: "95%+", label: "RAG retrieval accuracy" },
  { value: "25–40%", label: "LLM metric gains" },
];

export default function HomeAbout() {
  const handleContactClick = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    scrollToSection("#contact");
  };

  return (
    <section
      id="about"
      className="relative z-10 isolate scroll-mt-24 border-t border-border/60 bg-background px-6 py-24 sm:px-14 md:px-20"
    >
      <div className="mx-auto max-w-7xl">
        <ScrollReveal>
          <h2 className="text-xl font-semibold text-accent sm:text-3xl">
            About
          </h2>
          <p className="mt-2 max-w-2xl text-sm text-zinc-600 dark:text-zinc-300 sm:text-base">
            AI Engineer focused on offline-ready, production ML systems
          </p>
        </ScrollReveal>

        <div className="mt-10 grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
          <ScrollReveal delay={0.08}>
            <div className="space-y-5 text-base font-medium leading-relaxed text-zinc-800 dark:text-zinc-200 sm:text-lg">
              <p>
                I&apos;m Muhammad Sawaiz — an AI Engineer and full-stack Python
                developer specializing in machine learning, NLP, and generative
                AI. I design and ship end-to-end pipelines with Django, FastAPI,
                Whisper, NLLB, and RAG for real production use.
              </p>
              <p>
                My niche is air-gapped and self-hosted AI: translation,
                transcription, document intelligence, and structured reporting
                that run reliably without depending on public cloud APIs.
              </p>
              <p>Languages: English · Urdu · Punjabi</p>
              <div className="flex flex-wrap gap-3 pt-2">
                <Button
                  variant="primary"
                  href="/#contact"
                  onClick={handleContactClick}
                >
                  Contact me
                </Button>
                <Button
                  variant="secondary"
                  href={siteMetadata.github}
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </Button>
                <Button
                  variant="tertiary"
                  href={siteMetadata.resume}
                  download
                  target="_blank"
                  rel="noreferrer"
                >
                  Resume
                </Button>
              </div>
            </div>
          </ScrollReveal>

          <motion.div
            className="grid grid-cols-2 gap-4"
            initial="hidden"
            whileInView="visible"
            viewport={scrollViewport}
            variants={staggerContainer}
          >
            {HIGHLIGHTS.map((item) => (
              <motion.div
                key={item.label}
                variants={fadeUpItem}
                className="rounded-xl border border-accent/20 bg-white p-4 shadow-sm dark:bg-zinc-900"
              >
                <div className="text-2xl font-bold text-accent sm:text-3xl">
                  {item.value}
                </div>
                <div className="mt-1 text-xs font-medium text-zinc-600 dark:text-zinc-300 sm:text-sm">
                  {item.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
