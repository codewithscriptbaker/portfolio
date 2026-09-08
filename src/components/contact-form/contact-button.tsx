import { useEffect, useRef, useState } from "react";

import { MailIcon } from "lucide-react";

import FloatingMailButton, {
  floatingMailButtonoptions,
} from "@/components/contact-form/floating-mail-button";
import ContactFormModal from "@/components/contact-form/contact-form-modal";

export default function ContactButton() {
  const refSendBtn = useRef<HTMLButtonElement>(null);

  const [isBtnVisible, setIsBtnVisible] = useState(false);
  const [isOpenModal, setIsOpenModal] = useState(false);

  const observerCallback = (entries: IntersectionObserverEntry[]) => {
    const [entry] = entries;
    setIsBtnVisible(!entry.isIntersecting);
  };

  useEffect(() => {
    const btn = refSendBtn.current;
    const observer = new IntersectionObserver(
      observerCallback,
      floatingMailButtonoptions,
    );
    if (btn) observer.observe(btn);
    return () => {
      if (btn) observer.unobserve(btn);
    };
  }, [refSendBtn]);

  return (
    <>
      {isBtnVisible && !isOpenModal && (
        <FloatingMailButton openModal={setIsOpenModal} />
      )}

      <button
        ref={refSendBtn}
        type="button"
        className="inline-flex items-center gap-2 rounded-md bg-background px-4 py-2.5 text-accent transition-transform duration-150 hover:scale-[1.03] hover:bg-zinc-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-background"
        onClick={() => setIsOpenModal(true)}
      >
        <MailIcon className="h-6 w-6 sm:h-7 sm:w-7 lg:h-8 lg:w-8" aria-hidden />
        <span className="text-base font-semibold sm:text-lg lg:text-xl">
          Send message
        </span>
      </button>

      <ContactFormModal showModal={isOpenModal} setShowModal={setIsOpenModal} />
    </>
  );
}
