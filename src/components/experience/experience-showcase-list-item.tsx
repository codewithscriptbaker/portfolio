import { RefObject, useRef } from "react";
import Link from "next/link";

import { motion, useScroll } from "framer-motion";

import { scrollViewport } from "@/animation/scroll-reveal";

export interface ExperienceListIconProps {
  iconRef: RefObject<HTMLElement>;
}

function ShowCaseLiIcon(props: ExperienceListIconProps) {
  const { scrollYProgress } = useScroll({
    target: props.iconRef,
    offset: ["center end", "center center"],
    layoutEffect: false,
  });
  return (
    <figure className="absolute -left-2 top-0 stroke-zinc-900 sm:left-0">
      <svg width="75" height="75" viewBox="0 0 100 100" aria-hidden>
        <circle
          cx="50"
          cy="27"
          r="20"
          className="fill-none stroke-accent stroke-1"
        />
        <motion.circle
          style={{
            pathLength: scrollYProgress,
          }}
          cx="50"
          cy="27"
          r="20"
          className="fill-background stroke-background stroke-[5px]"
        />
        <circle cx="50" cy="27" r="10" className="fill-accent stroke-1" />
      </svg>
    </figure>
  );
}

export interface ExperienceShowcaseListItemProps {
  title: string;
  organisation: {
    name: string;
    href: string;
  };
  date: string;
  location: string;
  description: string;
}

export default function ExperienceShowcaseListItem(
  props: ExperienceShowcaseListItemProps,
) {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="relative mx-auto mb-8 flex w-[90%] flex-col gap-1 pl-14 last:mb-0 sm:mb-10 sm:w-[80%] sm:pl-16 md:mb-14 md:w-[70%]"
    >
      <ShowCaseLiIcon iconRef={ref} />
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={scrollViewport}
        transition={{ duration: 0.45, ease: "easeOut" }}
        className="relative z-10"
      >
        <h3 className="text-base font-bold text-foreground sm:text-xl md:text-2xl">
          {props.title}{" "}
          <Link
            href={props.organisation.href}
            className="cursor-pointer text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            target="_blank"
            rel="nofollow noopener noreferrer"
          >
            @{props.organisation.name}
          </Link>
        </h3>
        <span className="text-sm font-medium text-zinc-700 dark:text-zinc-300 xs:text-base">
          {props.date} | {props.location}
        </span>
        <p className="mt-1 text-sm font-medium text-zinc-600 dark:text-zinc-300 xs:text-base">
          {props.description}
        </p>
      </motion.div>
    </li>
  );
}
