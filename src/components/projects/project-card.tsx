import { useState } from "react";
import Image from "next/image";

import { motion, AnimatePresence } from "framer-motion";
import { FiExternalLink, FiChevronDown } from "react-icons/fi";

import Corosel from "@/components/utility/corosel";
import { GithubIcon } from "@/components/icons";
import { scrollViewport } from "@/animation/scroll-reveal";
import type { PortfolioProject } from "@/data/projects";
import Button from "@/components/ui/button";

export type ProjectCardProps = PortfolioProject & {
  animationDelay?: number;
};

export default function ProjectCard(props: ProjectCardProps) {
  const [open, setOpen] = useState(false);
  const hasCaseStudy = Boolean(props.caseStudy);

  return (
    <motion.article
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={scrollViewport}
      transition={{
        duration: 0.5,
        ease: "easeOut",
        delay: props.animationDelay ?? 0,
      }}
      className="flex h-full w-full flex-col overflow-hidden rounded-lg border border-accent/20 bg-background shadow-md dark:bg-zinc-900"
    >
      <div className="relative">
        {props.imageUrl.length > 1 ? (
          <Corosel
            images={props.imageUrl}
            aspectRatio={2.1}
            alt={props.imageAlt}
          />
        ) : (
          <div className="relative w-full overflow-hidden" style={{ aspectRatio: 2.1 }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={props.imageUrl[0]}
              alt={props.imageAlt}
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col p-4 text-foreground sm:p-5">
        <div className="flex items-center gap-3">
          <span className="relative h-5 w-5 shrink-0">
            <Image src={props.favicon} alt="" fill aria-hidden />
          </span>
          <h3 className="text-sm font-semibold sm:text-base">{props.name}</h3>
        </div>

        <p className="mt-3 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
          {props.description}
        </p>

        {hasCaseStudy && (
          <div className="mt-4">
            <Button
              variant="tertiary"
              className="px-0 py-1 text-sm"
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
            >
              {open ? "Hide case study" : "Read case study"}
              <FiChevronDown
                className={`h-4 w-4 transition-transform ${open ? "rotate-180" : ""}`}
              />
            </Button>
            <AnimatePresence initial={false}>
              {open && props.caseStudy && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25 }}
                  className="overflow-hidden"
                >
                  <dl className="mt-3 space-y-3 rounded-md border border-accent/15 bg-muted/50 p-3 text-sm dark:bg-zinc-800/60">
                    <div>
                      <dt className="font-semibold text-accent">Problem</dt>
                      <dd className="mt-1 text-zinc-700 dark:text-zinc-300">
                        {props.caseStudy.problem}
                      </dd>
                    </div>
                    <div>
                      <dt className="font-semibold text-accent">Approach</dt>
                      <dd className="mt-1 text-zinc-700 dark:text-zinc-300">
                        {props.caseStudy.approach}
                      </dd>
                    </div>
                    <div>
                      <dt className="font-semibold text-accent">Result</dt>
                      <dd className="mt-1 text-zinc-700 dark:text-zinc-300">
                        {props.caseStudy.result}
                      </dd>
                    </div>
                  </dl>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )}

        <div className="mt-auto flex items-center justify-end gap-5 pt-5">
          <a
            href={props.sourceCodeHref}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1 text-sm text-foreground underline underline-offset-2 hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            <GithubIcon className="h-5 w-5" /> Source code
          </a>
          {props.liveWebsiteHref && (
            <a
              href={props.liveWebsiteHref}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1 text-sm text-foreground underline underline-offset-2 hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              <FiExternalLink className="h-5 w-5" /> Live
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}
