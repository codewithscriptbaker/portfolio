import FadeUp from "@/animation/fade-up";
import { COMPANY } from "@/data/company";
import { siteMetadata } from "@/data/siteMetaData.mjs";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="brand-dark relative z-10 scroll-mt-24 px-6 py-16 sm:px-14 md:px-20 md:py-24"
    >
      <div className="mx-auto max-w-7xl">
        <FadeUp whileInView>
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.08em] text-brand-mint">
            About CleanCraft
          </p>
        </FadeUp>
        <FadeUp whileInView delay={0.06}>
          <h2 className="text-balance max-w-3xl font-display text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl md:text-[2.5rem]">
            A small team that treats privacy as a design requirement
          </h2>
        </FadeUp>
        <FadeUp whileInView delay={0.12}>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-zinc-300 sm:text-lg">
            {COMPANY.about}
          </p>
        </FadeUp>
        <FadeUp whileInView delay={0.18}>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-zinc-400">
            Founded{" "}
            <span className="font-semibold text-[#F2A98A]">
              {siteMetadata.founded}
            </span>{" "}
            in{" "}
            <span className="font-semibold text-[#F2A98A]">
              {siteMetadata.location}
            </span>
            . Led by engineers who ship offline AI for regulated and air-gapped
            environments.
          </p>
        </FadeUp>
      </div>
    </section>
  );
}
