import ScrollReveal from "@/animation/scroll-reveal";
import ContactButton from "@/components/contact-form/contact-button";
import { GithubIcon, LinkedinIcon, TwitterIcon } from "@/components/icons";
import { siteMetadata } from "@/data/siteMetaData.mjs";

export default function Footer() {
  return (
    <footer
      id="contact"
      className="relative z-10 isolate flex w-full scroll-mt-24 flex-col items-center gap-16 border-t border-border/60 bg-background px-6 py-10 sm:px-14 md:px-20"
    >
      <ScrollReveal className="w-full max-w-7xl">
        <div className="mx-auto flex w-full flex-col items-center gap-8 rounded-2xl bg-accent p-8 text-background sm:p-12 md:gap-10 lg:p-16">
          <div className="text-center">
            <span className="inline-block rounded-full bg-background px-3 py-1 text-xs font-semibold uppercase tracking-wide text-accent md:text-sm">
              Contact
            </span>
            <p className="mx-auto mt-4 max-w-xl text-sm text-background sm:text-base">
              Open to AI engineering roles, freelance work, and collaborations on
              offline / RAG / NLP systems.
            </p>
          </div>
          <p className="text-center text-lg font-semibold sm:text-2xl lg:text-3xl">
            {siteMetadata.email}
          </p>
          <ContactButton />
        </div>
      </ScrollReveal>

      <div className="flex w-full flex-col items-center justify-between gap-8 text-center md:flex-row md:justify-between lg:mx-auto lg:max-w-7xl">
        <span className="text-foreground">©2026 Muhammad Sawaiz</span>
        <div className="flex gap-8">
          <a
            href={siteMetadata.github}
            target="_blank"
            rel="noreferrer"
            className="h-6 w-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            aria-label="GitHub"
          >
            <GithubIcon className="text-accent transition-colors duration-150 hover:text-accent/80" />
          </a>
          <a
            href={siteMetadata.twitter}
            target="_blank"
            rel="noreferrer"
            className="h-6 w-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            aria-label="Twitter"
          >
            <TwitterIcon className="text-accent transition-colors duration-150 hover:text-accent/80" />
          </a>
          <a
            href={siteMetadata.linkedin}
            target="_blank"
            rel="noreferrer"
            className="h-6 w-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            aria-label="LinkedIn"
          >
            <LinkedinIcon className="text-accent transition-colors duration-150 hover:text-accent/80" />
          </a>
        </div>
      </div>
    </footer>
  );
}
