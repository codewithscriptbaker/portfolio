import { Dispatch, SetStateAction } from "react";

import { MailIcon } from "@/components/icons";

export interface FloatingMailButtonProps {
  openModal: Dispatch<SetStateAction<boolean>>;
}

export const floatingMailButtonoptions = {
  root: null,
  rootMargin: "100px",
  threshold: 0.1,
};

export default function FloatingMailButton({
  openModal,
}: FloatingMailButtonProps) {
  return (
    <button
      aria-label="Open contact form"
      type="button"
      className="fixed bottom-6 right-6 z-[60] flex h-12 w-12 items-center justify-center rounded-full bg-accent p-2.5 text-background shadow-lg shadow-accent/30 transition-colors duration-150 hover:bg-accent/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent sm:bottom-8 sm:right-8"
      onClick={() => openModal(true)}
    >
      <MailIcon />
    </button>
  );
}
