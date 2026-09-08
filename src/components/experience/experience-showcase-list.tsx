import { useRef } from "react";

import { motion, useScroll } from "framer-motion";

import ScrollReveal from "@/animation/scroll-reveal";
import ExperienceShowcaseListItem, {
  type ExperienceShowcaseListItemProps,
} from "@/components/experience/experience-showcase-list-item";
import { classNames } from "@/utility/classNames";

export interface ExperienceShowcaseListProps {
  title: string;
  details: ExperienceShowcaseListItemProps[];
  id?: string;
  className?: string;
}

export default function ExperienceShowcaseList(
  props: ExperienceShowcaseListProps,
) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <section
      id={props.id}
      className={classNames(
        "relative isolate z-10 overflow-hidden bg-background px-6 py-24 sm:px-14 md:px-20",
        "scroll-mt-24 border-t border-border/60",
        props.className,
      )}
    >
      <div className="mx-auto max-w-7xl">
        <ScrollReveal>
          <h2 className="mb-12 w-full bg-gradient-to-r from-accent/70 to-accent bg-clip-text text-center text-3xl font-bold text-transparent xs:text-4xl sm:mb-16 sm:text-5xl md:text-6xl">
            {props.title}
          </h2>
        </ScrollReveal>
        <div ref={ref} className="relative w-full md:mx-auto md:w-[85%]">
          <motion.div
            style={{ scaleY: scrollYProgress }}
            className="absolute left-9 top-5 h-full w-[5px] origin-top rounded-lg bg-accent"
            aria-hidden
          />
          <ul className="relative ml-4 w-full">
            {props.details.map((_details, index) => (
              <ExperienceShowcaseListItem key={index} {..._details} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
