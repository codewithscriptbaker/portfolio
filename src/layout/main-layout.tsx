import { ReactNode } from "react";

import Navbar from "@/layout/navbar";
import Footer from "@/layout/footer";
import ScrollToTop from "@/components/utility/scroll-to-top";
import { routes } from "@/data/navigationRoutes";
import { classNames } from "@/utility/classNames";

export interface MainLayoutProps {
  children: ReactNode;
}

export default function MainLayout(props: MainLayoutProps) {
  return (
    <>
      <div className={classNames("min-h-screen font-sans")}>
        <Navbar routes={routes} />
        <main className="relative z-0 overflow-x-hidden bg-background pt-16 sm:pt-[4.25rem]">
          {props.children}
        </main>
      </div>
      <Footer />
      <ScrollToTop />
    </>
  );
}
