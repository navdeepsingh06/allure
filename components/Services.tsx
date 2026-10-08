import { services } from "@/data/site";
import { SectionHeading } from "@/components/SectionHeading";
import { ServiceCard } from "@/components/ServiceCard";
import { FadeIn } from "@/components/FadeIn";

export function Services() {
  return (
    <section id="services" className="scroll-mt-24 py-20 md:py-28">
      <div className="container-page">
        <SectionHeading
          eyebrow="Treatment Areas"
          title="Laser Hair Removal, Tailored to You"
          description="Clean, comfortable sessions for the areas that matter most — each plan personalized at your consultation."
        />

        <ul className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <FadeIn as="li" key={service.name} delay={(i % 3) * 0.08}>
              <ServiceCard service={service} />
            </FadeIn>
          ))}
        </ul>
      </div>
    </section>
  );
}
