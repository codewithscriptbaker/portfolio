import FadeUp from "@/animation/fade-up";

type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  lead?: string;
  dark?: boolean;
};

export default function SectionHeader({
  eyebrow,
  title,
  lead,
  dark = false,
}: SectionHeaderProps) {
  return (
    <div className="mb-10 max-w-3xl md:mb-12">
      <FadeUp whileInView>
        <p
          className={`mb-3 text-xs font-semibold uppercase tracking-[0.08em] sm:text-sm ${
            dark ? "text-brand-mint" : "text-accent"
          }`}
        >
          {eyebrow}
        </p>
      </FadeUp>
      <FadeUp whileInView delay={0.06}>
        <h2
          className={`text-balance font-display text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-[2.5rem] ${
            dark ? "text-white" : "text-foreground"
          }`}
        >
          {title}
        </h2>
      </FadeUp>
      {lead ? (
        <FadeUp whileInView delay={0.12}>
          <p
            className={`mt-4 max-w-2xl text-base leading-relaxed sm:text-lg ${
              dark ? "text-zinc-300" : "text-muted-foreground"
            }`}
          >
            {lead}
          </p>
        </FadeUp>
      ) : null}
    </div>
  );
}
