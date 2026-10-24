import { useState } from "react";

import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { Loader2Icon } from "lucide-react";
import { motion } from "framer-motion";

import FadeUp from "@/animation/fade-up";
import ContactMailToast, {
  type MailSentToastState,
} from "@/components/contact-form/contact-mail-toast";
import CustomInput from "@/components/utility/custom-input";
import CustomTextarea from "@/components/utility/custom-textarea";
import { COMPANY, SERVICE_OPTIONS } from "@/data/company";
import { siteMetadata } from "@/data/siteMetaData.mjs";
import { type FormiKInputFieldProps } from "@/utility/types";

const consultationSchema = Yup.object({
  name: Yup.string().required("Name required"),
  email: Yup.string().email("Invalid email").required("Email required"),
  company: Yup.string(),
  need: Yup.string().required("Please select what you need"),
  message: Yup.string().required("Message required"),
});

type ConsultationValues = Yup.InferType<typeof consultationSchema>;

const initialValues: ConsultationValues = {
  name: "",
  email: "",
  company: "",
  need: SERVICE_OPTIONS[0],
  message: "",
};

export default function ContactSection() {
  const [isSending, setIsSending] = useState(false);
  const [toastState, setToastState] = useState<MailSentToastState>({
    type: null,
    value: false,
    message: "",
  });

  const handleSubmit = async (
    values: ConsultationValues,
    { resetForm }: { resetForm: () => void },
  ) => {
    setIsSending(true);
    try {
      const response = await fetch("/api/sendmail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: values.name,
          email: values.email,
          subject: `Consultation: ${values.need}${
            values.company ? ` — ${values.company}` : ""
          }`,
          message: values.message,
        }),
      });
      if (response.ok) {
        setToastState({
          type: "success",
          value: true,
          message: "Successfully sent — we’ll reply soon",
        });
        resetForm();
      } else {
        setToastState({
          type: response.status === 429 ? "warning" : "failure",
          value: true,
          message:
            response.status === 429
              ? "Rate Limiter: Only 5 email per hour"
              : "Unable to send email",
        });
      }
    } catch {
      setToastState({
        type: "failure",
        value: true,
        message: "Unable to send email",
      });
    } finally {
      setIsSending(false);
    }
  };

  return (
    <>
      <section
        id="contact"
        className="brand-dark relative z-10 scroll-mt-24 px-6 py-16 sm:px-14 md:px-20 md:py-24"
      >
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <FadeUp whileInView>
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.08em] text-brand-mint">
                Contact
              </p>
            </FadeUp>
            <FadeUp whileInView delay={0.06}>
              <h2 className="text-balance font-display text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl md:text-[2.5rem]">
                Book a free consultation
              </h2>
            </FadeUp>
            <FadeUp whileInView delay={0.12}>
              <p className="mt-5 max-w-md text-base leading-relaxed text-zinc-300 sm:text-lg">
                Tell us what you need to keep private. We’ll reply within{" "}
                <span className="font-semibold text-[#F2A98A]">
                  {COMPANY.responseTime}
                </span>{" "}
                with next steps, no obligation.
              </p>
            </FadeUp>
            <FadeUp whileInView delay={0.18}>
              <a
                href={`mailto:${siteMetadata.email}`}
                className="mt-6 inline-block font-semibold text-brand-mint transition-colors hover:text-white"
              >
                {siteMetadata.email}
              </a>
            </FadeUp>
          </div>

          <FadeUp whileInView delay={0.1}>
            <motion.div
              className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 sm:p-8"
              whileHover={{ borderColor: "rgba(94,234,212,0.25)" }}
            >
              <Formik
                initialValues={initialValues}
                validationSchema={consultationSchema}
                onSubmit={handleSubmit}
                validateOnChange
              >
                <Form className="space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="cc-name"
                        className="mb-1.5 block text-sm font-semibold text-zinc-200"
                      >
                        Name
                      </label>
                      <div className="relative">
                        <Field name="name">
                          {({ field, meta }: FormiKInputFieldProps<string>) => (
                            <>
                              <CustomInput
                                id="cc-name"
                                {...field}
                                placeholder="Your name"
                                autoComplete="name"
                                className="!bg-white/95 !text-foreground"
                              />
                              {Boolean(meta.touched && meta.error) && (
                                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-bold text-red-400">
                                  {meta.error}
                                </span>
                              )}
                            </>
                          )}
                        </Field>
                      </div>
                    </div>
                    <div>
                      <label
                        htmlFor="cc-email"
                        className="mb-1.5 block text-sm font-semibold text-zinc-200"
                      >
                        Work email
                      </label>
                      <div className="relative">
                        <Field name="email">
                          {({ field, meta }: FormiKInputFieldProps<string>) => (
                            <>
                              <CustomInput
                                id="cc-email"
                                {...field}
                                type="email"
                                placeholder="you@company.com"
                                autoComplete="email"
                                className="!bg-white/95 !text-foreground"
                              />
                              {Boolean(meta.touched && meta.error) && (
                                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-bold text-red-400">
                                  {meta.error}
                                </span>
                              )}
                            </>
                          )}
                        </Field>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="cc-company"
                      className="mb-1.5 block text-sm font-semibold text-zinc-200"
                    >
                      Company
                    </label>
                    <Field name="company">
                      {({ field }: FormiKInputFieldProps<string>) => (
                        <CustomInput
                          id="cc-company"
                          {...field}
                          placeholder="Organization (optional)"
                          autoComplete="organization"
                          className="!bg-white/95 !text-foreground"
                        />
                      )}
                    </Field>
                  </div>

                  <div>
                    <label
                      htmlFor="cc-need"
                      className="mb-1.5 block text-sm font-semibold text-zinc-200"
                    >
                      What do you need?
                    </label>
                    <Field
                      as="select"
                      id="cc-need"
                      name="need"
                      className="w-full rounded-lg border-none bg-white/95 px-3 py-2.5 text-sm font-semibold text-foreground focus:ring-2 focus:ring-accent"
                    >
                      {SERVICE_OPTIONS.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </Field>
                  </div>

                  <div>
                    <label
                      htmlFor="cc-message"
                      className="mb-1.5 block text-sm font-semibold text-zinc-200"
                    >
                      Tell us about your project
                    </label>
                    <div className="relative">
                      <Field name="message">
                        {({ field, meta }: FormiKInputFieldProps<string>) => (
                          <>
                            <CustomTextarea
                              id="cc-message"
                              {...field}
                              placeholder="Data constraints, timeline, goals…"
                              className="min-h-[110px] !bg-white/95 !text-foreground"
                            />
                            {Boolean(meta.touched && meta.error) && (
                              <span className="absolute right-3 top-3 text-xs font-bold text-red-400">
                                {meta.error}
                              </span>
                            )}
                          </>
                        )}
                      </Field>
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isSending}
                    className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-brand-mint px-6 py-3.5 text-sm font-semibold text-brand-dark transition hover:bg-brand-mint/90 disabled:opacity-60 sm:w-auto sm:text-base"
                  >
                    {isSending ? (
                      <>
                        <Loader2Icon className="h-4 w-4 animate-spin" />
                        Sending…
                      </>
                    ) : (
                      "Book a free consultation"
                    )}
                  </button>
                </Form>
              </Formik>
            </motion.div>
          </FadeUp>
        </div>
      </section>

      <ContactMailToast toastState={toastState} showToast={setToastState} />
    </>
  );
}
