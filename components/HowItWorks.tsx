import { steps } from "@/data/site";
import { SectionHeading } from "@/components/SectionHeading";
import { FadeIn } from "@/components/FadeIn";

export function HowItWorks() {
  return (
    <section id="how-it-works" className="scroll-mt-24 py-20 md:py-28">
      <div className="container-page">
        <SectionHeading
          eyebrow="How It Works"
          title="Three Simple Steps"
          description="From first questions to lasting results — here's what to expect."
        />

        <ol className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-3">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <FadeIn as="li" key={step.title} delay={i * 0.1}>
                <div className="relative flex h-full flex-col items-center px-4 text-center">
                  {/* Step number badge */}
                  <span className="flex h-16 w-16 items-center justify-center rounded-full border border-plum/20 bg-plum-soft text-plum">
                    <Icon size={26} aria-hidden="true" />
                  </span>
                  <span className="mt-4 text-xs font-semibold uppercase tracking-[0.18em] text-plum">
                    Step {i + 1}
                  </span>
                  <h3 className="mt-2 text-xl">{step.title}</h3>
                  <p className="mt-2 max-w-xs text-sm leading-relaxed text-muted">
                    {step.description}
                  </p>
                </div>
              </FadeIn>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
