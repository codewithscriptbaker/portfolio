import { useState } from "react";

import { motion } from "framer-motion";

import ScrollReveal, {
  fadeRightItem,
  fadeUpItem,
  scrollViewport,
  staggerContainer,
} from "@/animation/scroll-reveal";
import Button from "@/components/ui/button";
import SkillPill, {
  type SkillPillProps,
} from "@/components/skills/skills-pill";

export interface SkillsShowcaseProps {
  skills: {
    sectionName: string;
    skills: SkillPillProps[];
    priority?: "core" | "supporting";
  }[];
}

export default function SkillsShowcase({ skills }: SkillsShowcaseProps) {
  const [showSupporting, setShowSupporting] = useState(false);

  const core = skills.filter((s) => s.priority !== "supporting");
  const supporting = skills.filter((s) => s.priority === "supporting");
  const visible = showSupporting ? skills : core;

  return (
    <section
      id="skills"
      className="relative isolate z-10 scroll-mt-24 overflow-x-clip border-t border-border/60 bg-background px-6 py-12 sm:px-14 sm:py-16 md:px-20 md:py-24"
    >
      <div className="relative mx-auto max-w-7xl">
        <ScrollReveal>
          <h2 className="text-xl font-semibold text-accent sm:text-3xl">
            Skills
          </h2>
          <p className="mt-2 max-w-2xl text-sm text-zinc-600 dark:text-zinc-300 sm:text-base">
            Core focus on AI/ML systems and Python backends — supporting tools
            available on request
          </p>
        </ScrollReveal>

        {visible.map((section) => {
          const isSupporting = section.priority === "supporting";
          return (
            <motion.div
              key={section.sectionName}
              className="mt-6 sm:mt-8"
              initial="hidden"
              whileInView="visible"
              viewport={scrollViewport}
              variants={staggerContainer}
            >
              <motion.span
                variants={fadeUpItem}
                className={`block text-xs font-semibold sm:text-sm ${
                  isSupporting
                    ? "text-zinc-500 dark:text-zinc-400"
                    : "text-foreground"
                }`}
              >
                {section.sectionName}
              </motion.span>
              <div
                className={`mt-2.5 flex flex-wrap gap-2 sm:mt-3 sm:gap-3 md:gap-4 ${
                  isSupporting ? "opacity-90" : ""
                }`}
              >
                {section.skills.map((pill) => (
                  <motion.div
                    key={`${section.sectionName}-${pill.name}`}
                    variants={fadeRightItem}
                    className={isSupporting ? "scale-[0.96]" : undefined}
                  >
                    <SkillPill {...pill} />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          );
        })}

        {supporting.length > 0 && (
          <div className="mt-6 sm:mt-8">
            <Button
              variant="secondary"
              onClick={() => setShowSupporting((v) => !v)}
              aria-expanded={showSupporting}
            >
              {showSupporting
                ? "Hide databases & DevOps"
                : "Show databases & DevOps"}
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
