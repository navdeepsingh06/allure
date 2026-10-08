import { MapPin, Phone, Mail, Clock, Facebook, ExternalLink } from "lucide-react";

import { business, telHref, mailtoHref } from "@/data/site";
import { SectionHeading } from "@/components/SectionHeading";
import { ContactForm } from "@/components/ContactForm";
import { FadeIn } from "@/components/FadeIn";

export function Contact() {
  const { address } = business;
  const fullAddress = `${address.street}, ${address.city}, ${address.region} ${address.postalCode}`;

  return (
    <section id="contact" className="scroll-mt-24 py-20 md:py-28">
      <div className="container-page">
        <SectionHeading
          eyebrow="Contact"
          title="Book Your Consultation"
          description="Send us a message or reach out directly — we're happy to answer any questions."
        />

        <div className="mt-14 grid grid-cols-1 gap-10 lg:grid-cols-5">
          {/* Contact details + map */}
          <FadeIn className="lg:col-span-2">
            <div className="flex h-full flex-col gap-6">
              <ul className="space-y-5">
                <li className="flex items-start gap-3">
                  <MapPin className="mt-0.5 shrink-0 text-plum" size={20} aria-hidden="true" />
                  <div>
                    <p className="text-sm font-semibold text-ink">Visit us</p>
                    <p className="text-sm leading-relaxed text-muted">{fullAddress}</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Phone className="mt-0.5 shrink-0 text-plum" size={20} aria-hidden="true" />
                  <div>
                    <p className="text-sm font-semibold text-ink">Call</p>
                    <a href={telHref} className="text-sm text-muted transition-colors hover:text-plum">
                      {business.phone}
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Mail className="mt-0.5 shrink-0 text-plum" size={20} aria-hidden="true" />
                  <div>
                    <p className="text-sm font-semibold text-ink">Email</p>
                    <a href={mailtoHref} className="text-sm text-muted transition-colors hover:text-plum">
                      {business.email}
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Clock className="mt-0.5 shrink-0 text-plum" size={20} aria-hidden="true" />
                  <div>
                    <p className="text-sm font-semibold text-ink">Hours</p>
                    <ul className="mt-1 space-y-0.5 text-sm text-muted">
                      {business.hours.map((h) => (
                        <li key={h.day} className="flex justify-between gap-6">
                          <span>{h.day}</span>
                          <span>{h.time}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              </ul>

              {/* Lightweight map card linking to the real Google Maps place */}
              <a
                href={business.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative mt-auto flex min-h-[160px] flex-1 flex-col justify-end overflow-hidden rounded-2xl border border-line bg-plum-soft p-5 shadow-soft transition-shadow hover:shadow-lift"
                aria-label="Open our location in Google Maps (opens in a new tab)"
              >
                {/* Decorative map-grid backdrop */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 opacity-50"
                  style={{
                    backgroundImage:
                      "linear-gradient(rgb(var(--color-plum) / 0.08) 1px, transparent 1px), linear-gradient(90deg, rgb(var(--color-plum) / 0.08) 1px, transparent 1px)",
                    backgroundSize: "28px 28px",
                  }}
                />
                <MapPin
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-plum"
                  size={34}
                  aria-hidden="true"
                />
                <span className="relative inline-flex items-center gap-1.5 text-sm font-semibold text-plum">
                  Open in Google Maps
                  <ExternalLink
                    size={15}
                    className="transition-transform duration-300 group-hover:translate-x-0.5"
                    aria-hidden="true"
                  />
                </span>
              </a>

              <a
                href={business.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-muted transition-colors hover:text-plum"
              >
                <Facebook size={18} aria-hidden="true" />
                Follow us on Facebook
              </a>
            </div>
          </FadeIn>

          {/* Form */}
          <FadeIn delay={0.1} className="lg:col-span-3">
            <ContactForm />
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
