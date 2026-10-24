import { useMemo, useState, type MouseEvent } from "react";
import Link from "next/link";

import { AnimatePresence, motion } from "framer-motion";

import MenuLogo from "@/components/utility/menu-button";
import ThemeSwitch from "@/components/utility/theme-switch";
import MobileMenu from "@/components/utility/mobile-menu";
import { classNames } from "@/utility/classNames";
import { scrollToSection, useActiveSection } from "@/hooks/useActiveSection";

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
    () => ["top", ...props.routes.map((route) => route.href.replace(/^#/, ""))],
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
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-brand-dark/95 shadow-sm backdrop-blur-xl">
      <div className="mx-auto flex h-16 items-center justify-between gap-3 px-6 sm:h-[4.25rem] sm:px-14 md:px-20 lg:max-w-7xl">
        <Link
          href="/#top"
          onClick={(event) => handleNavClick(event, "#top")}
          className="font-display text-xl font-bold tracking-tight text-white transition-colors hover:text-brand-mint focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-mint sm:text-2xl"
          aria-label="CleanCraft home"
        >
          CleanCraft
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-1 md:flex">
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
                        ? "text-brand-mint"
                        : "text-zinc-300 hover:text-white",
                      "relative inline-flex rounded-lg px-3 py-2 transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-mint lg:px-3.5",
                    )}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="tab-underline"
                        className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-brand-mint"
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
          <div className="bg-white/15 mx-2 h-5 w-px" />
          <a
            href="#contact"
            onClick={(event) => handleNavClick(event, "#contact")}
            className="inline-flex items-center justify-center rounded-xl bg-brand-mint px-4 py-2 text-sm font-semibold text-brand-dark transition hover:bg-brand-mint/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-mint"
          >
            Book a consult
          </a>
          <ThemeSwitch />
        </nav>

        <div className="flex items-center gap-2 md:hidden">
          <a
            href="#contact"
            onClick={(event) => handleNavClick(event, "#contact")}
            className="inline-flex items-center justify-center rounded-lg bg-brand-mint px-3 py-1.5 text-xs font-semibold text-brand-dark"
          >
            Consult
          </a>
          <AnimatePresence>
            <MenuLogo open={isModalOpen} toggle={toggleModal} />
          </AnimatePresence>
        </div>
      </div>

      <MobileMenu
        routes={[...props.routes, { title: "Contact", href: "#contact" }]}
        openMenu={isModalOpen}
        setOpenMenu={setIsModalOpen}
        activeId={activeId}
      />
    </header>
  );
}
