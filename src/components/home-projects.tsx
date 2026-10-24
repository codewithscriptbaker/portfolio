import ScrollReveal from "@/animation/scroll-reveal";
import ProjectCard from "@/components/projects/project-card";
import { PROJECTS_CARD } from "@/data/projects";
import { siteMetadata } from "@/data/siteMetaData.mjs";

export default function HomeProjects() {
  return (
    <section
      id="projects"
      className="relative isolate z-10 scroll-mt-24 border-t border-border/60 bg-background px-6 py-8 sm:px-14 sm:py-10 md:px-20 md:py-14"
    >
      <div className="mx-auto max-w-7xl">
        <ScrollReveal>
          <h2 className="text-xl font-semibold text-accent sm:text-3xl">
            Projects
          </h2>
          <p className="mt-2 max-w-2xl text-sm text-zinc-600 dark:text-zinc-300 sm:text-base">
            Selected systems in offline translation, document intelligence, and
            local speech analysis
          </p>
        </ScrollReveal>

        <div className="mt-5 grid grid-cols-1 gap-x-6 gap-y-5 sm:mt-6 sm:gap-y-6 md:gap-y-8 lg:grid-cols-2">
          {PROJECTS_CARD.map((card, index) => (
            <ProjectCard
              key={card.name}
              {...card}
              animationDelay={index * 0.05}
            />
          ))}
        </div>

        <ScrollReveal className="mt-8 sm:mt-10" delay={0.05}>
          <p className="text-center text-base text-foreground md:text-lg">
            More work on{" "}
            <a
              href={`${siteMetadata.github}?tab=repositories`}
              target="_blank"
              rel="noreferrer"
              className="font-semibold text-accent underline underline-offset-2 hover:text-accent/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              GitHub
            </a>
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
