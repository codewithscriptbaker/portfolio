import ScrollReveal from "@/animation/scroll-reveal";
import { TESTIMONIALS } from "@/data/testimonials";

export default function HomeTestimonials() {
  if (TESTIMONIALS.length === 0) {
    return null;
  }

  return (
    <section
      id="testimonials"
      className="relative z-10 isolate scroll-mt-24 border-t border-border/60 bg-background px-6 py-24 sm:px-14 md:px-20"
    >
      <div className="mx-auto max-w-7xl">
        <ScrollReveal>
          <h2 className="text-xl font-semibold text-accent sm:text-3xl">
            Testimonials
          </h2>
          <p className="mt-2 max-w-2xl text-sm text-zinc-600 dark:text-zinc-300 sm:text-base">
            Feedback from collaborators and clients
          </p>
        </ScrollReveal>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {TESTIMONIALS.map((item) => (
            <ScrollReveal key={`${item.name}-${item.role}`}>
              <blockquote className="h-full rounded-xl border border-accent/20 bg-white p-6 dark:bg-zinc-900">
                <p className="text-base leading-relaxed text-zinc-800 dark:text-zinc-200">
                  “{item.quote}”
                </p>
                <footer className="mt-4 text-sm font-semibold text-accent">
                  {item.name}
                  <span className="mt-0.5 block font-medium text-zinc-600 dark:text-zinc-300">
                    {item.role}
                  </span>
                </footer>
              </blockquote>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
