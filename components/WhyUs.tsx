import { whyUs } from "@/data/site";
import { SectionHeading } from "@/components/SectionHeading";
import { FadeIn } from "@/components/FadeIn";

export function WhyUs() {
  return (
    <section id="why-us" className="scroll-mt-24 bg-sand py-20 md:py-28">
      <div className="container-page">
        <SectionHeading
          eyebrow="Why Choose Us"
          title="Care That Puts You First"
          description="A calm, considered approach to every treatment — honest guidance and comfort at each step."
        />

        <ul className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {whyUs.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <FadeIn as="li" key={feature.title} delay={(i % 4) * 0.06}>
                <div className="flex h-full flex-col rounded-2xl border border-line bg-canvas p-7 shadow-soft">
                  <span
                    className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-plum-soft text-plum"
                    aria-hidden="true"
                  >
                    <Icon size={22} />
                  </span>
                  <h3 className="mt-5 text-lg">{feature.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {feature.description}
                  </p>
                </div>
              </FadeIn>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
