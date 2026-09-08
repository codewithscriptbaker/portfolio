import { useState, type MouseEvent } from "react";

import FadeUp from "@/animation/fade-up";
import ContactFormModal from "@/components/contact-form/contact-form-modal";
import Button from "@/components/ui/button";
import { siteMetadata } from "@/data/siteMetaData.mjs";
import { scrollToSection } from "@/hooks/useActiveSection";

export default function LandingHero() {
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
        id="home"
        className="relative isolate z-10 bg-background px-6 pb-20 pt-4 sm:px-14 md:px-20 md:pb-28"
      >
        <div className="mx-auto flex min-h-[calc(100vh-7rem)] max-w-7xl items-center">
          <div className="w-full">
            <FadeUp duration={0.55}>
              <div className="mb-6 inline-flex items-center gap-2 rounded-md border border-accent/30 bg-accent/10 px-3 py-1.5 text-sm font-medium text-accent">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                </span>
                Open to work · Available for freelance
              </div>
            </FadeUp>
            <FadeUp duration={0.55} delay={0.05}>
              <h1 className="bg-accent bg-clip-text py-2 text-5xl font-bold text-transparent sm:text-6xl md:text-7xl xl:text-8xl">
                Muhammad Sawaiz
              </h1>
              <span className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 md:text-3xl">
                AI Engineer | Machine Learning &amp; NLP
              </span>
            </FadeUp>
            <FadeUp duration={0.55} delay={0.15}>
              <p className="mt-8 max-w-3xl text-base font-medium leading-relaxed text-zinc-800 dark:text-zinc-200 sm:text-lg md:text-xl">
                I design and ship production AI systems for multilingual
                translation, speech transcription, document intelligence, and
                structured reporting — including air-gapped deployments. Stack
                includes{" "}
                <span className="font-semibold text-accent">Python</span>,{" "}
                <span className="font-semibold text-accent">
                  Django / FastAPI
                </span>
                , <span className="font-semibold text-accent">Whisper</span>,{" "}
                <span className="font-semibold text-accent">NLLB</span>,{" "}
                <span className="font-semibold text-accent">RAG</span>, and{" "}
                <span className="font-semibold text-accent">Next.js</span>.
              </p>
            </FadeUp>
            <FadeUp duration={0.55} delay={0.25}>
              <div className="mt-10 flex flex-wrap items-center gap-3">
                <Button variant="primary" onClick={() => setIsOpenModal(true)}>
                  Get in touch
                </Button>
                <Button
                  variant="secondary"
                  href="#projects"
                  onClick={(event) => handleSectionLink(event, "#projects")}
                >
                  View projects
                </Button>
                <Button
                  variant="tertiary"
                  href={siteMetadata.resume}
                  download
                  target="_blank"
                  rel="noreferrer"
                >
                  Download resume
                </Button>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>
      <ContactFormModal showModal={isOpenModal} setShowModal={setIsOpenModal} />
    </>
  );
}
