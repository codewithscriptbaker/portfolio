import { useEffect, useState } from "react";

import { AnimatePresence, motion } from "framer-motion";
import { FiArrowUp } from "react-icons/fi";

import { scrollToSection } from "@/hooks/useActiveSection";

const SHOW_AFTER_PX = 400;

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > SHOW_AFTER_PX);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = () => {
    scrollToSection("#top");
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          type="button"
          aria-label="Scroll to top"
          onClick={handleClick}
          initial={{ opacity: 0, y: 16, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 16, scale: 0.9 }}
          transition={{ duration: 0.2 }}
          // Sits above the floating mail button (bottom-6/8 + 12/14 height + gap)
          className="fixed bottom-[5.25rem] right-6 z-[60] flex h-12 w-12 items-center justify-center rounded-full border border-accent/30 bg-background text-accent shadow-lg transition-colors hover:bg-accent hover:text-background focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent sm:bottom-[6.5rem] sm:right-8"
        >
          <FiArrowUp className="h-5 w-5" strokeWidth={2.5} />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
