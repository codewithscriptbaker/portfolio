import { useMemo, useState, type MouseEvent } from "react";
import Link from "next/link";

import { AnimatePresence, motion } from "framer-motion";
import { FiDownload } from "react-icons/fi";

import MenuLogo from "@/components/utility/menu-button";
import ThemeSwitch from "@/components/utility/theme-switch";
import AnimatedLogo from "@/animation/animated-logo";
import MobileMenu from "@/components/utility/mobile-menu";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { classNames } from "@/utility/classNames";
import { siteMetadata } from "@/data/siteMetaData.mjs";
import {
  scrollToSection,
  useActiveSection,
} from "@/hooks/useActiveSection";

export type NavbarRoute = {
  title: string;
  href: string;
};

export type NavbarRoutes = NavbarRoute[];

export interface NavbarProps {
  routes: NavbarRoutes;
}

export default function Navbar(props: NavbarProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const sectionIds = useMemo(
    () => props.routes.map((route) => route.href.replace(/^#/, "")),
    [props.routes],
  );
  const activeId = useActiveSection(sectionIds);

  const toggleModal = () => {
    setIsModalOpen((prev) => !prev);
  };

  const handleNavClick = (
    event: MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    if (!href.startsWith("#")) return;
    event.preventDefault();
    scrollToSection(href);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/80 bg-background/95 shadow-sm backdrop-blur-xl">
      <div className="mx-auto flex h-16 items-center justify-between gap-3 px-6 sm:h-[4.25rem] sm:px-14 md:px-20 lg:max-w-7xl">
        <Link
          href="/#home"
          onClick={(event) => handleNavClick(event, "#home")}
          className="flex items-center justify-center focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          aria-label="Return to home"
        >
          <div className="relative h-11 w-11 sm:h-12 sm:w-12">
            <AnimatedLogo />
          </div>
        </Link>

        <nav
          aria-label="Primary"
          className="hidden items-center gap-1 rounded-full border border-accent/25 bg-muted px-2 py-1.5 shadow-md dark:border-accent/40 dark:bg-zinc-900 md:flex"
        >
          <ul className="flex items-center gap-0.5 text-sm font-medium">
            {props.routes.map((_link, index) => {
              const isActive = activeId === _link.href.replace(/^#/, "");
              return (
                <li key={index}>
                  <a
                    href={_link.href}
                    onClick={(event) => handleNavClick(event, _link.href)}
                    className={classNames(
                      isActive
                        ? "font-semibold text-background"
                        : "text-foreground hover:bg-accent/10 hover:text-accent",
                      "relative inline-flex rounded-full px-3 py-2 transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent lg:px-3.5",
                    )}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="tab-pill"
                        className="absolute inset-0 z-0 rounded-full bg-accent"
                        transition={{
                          type: "spring",
                          stiffness: 380,
                          damping: 30,
                        }}
                      />
                    )}
                    <span className="relative z-10">{_link.title}</span>
                  </a>
                </li>
              );
            })}
          </ul>
          <div className="mx-1 h-5 w-px bg-border dark:bg-accent/30" />
          <a
            href={siteMetadata.resume}
            download
            target="_blank"
            rel="noreferrer"
            aria-label="Download resume"
            className="inline-flex h-8 w-8 items-center justify-center rounded-full text-accent transition-colors hover:bg-accent/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            title="Download resume"
          >
            <FiDownload className="h-4 w-4" />
          </a>
          <a
            href={siteMetadata.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn profile"
            className="inline-flex h-8 w-8 items-center justify-center rounded-full text-accent transition-colors hover:bg-accent/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            <LinkedinIcon className="h-4 w-4" />
          </a>
          <a
            href={siteMetadata.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub profile"
            className="inline-flex h-8 w-8 items-center justify-center rounded-full text-accent transition-colors hover:bg-accent/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            <GithubIcon className="h-4 w-4" />
          </a>
          <ThemeSwitch />
        </nav>

        <AnimatePresence>
          <MenuLogo open={isModalOpen} toggle={toggleModal} />
        </AnimatePresence>
      </div>

      <MobileMenu
        routes={props.routes}
        openMenu={isModalOpen}
        setOpenMenu={setIsModalOpen}
        activeId={activeId}
      />
    </header>
  );
}
