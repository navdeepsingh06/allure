import { Facebook, Phone, Mail } from "lucide-react";

import { business, telHref, mailtoHref, legal, nav } from "@/data/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line bg-ink text-canvas">
      <div className="container-page py-14">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          {/* Brand */}
          <div>
            <p className="font-serif text-2xl tracking-tightish text-canvas">
              {business.shortName}
            </p>
            <p className="mt-1 text-xs uppercase tracking-[0.22em] text-canvas/60">
              Laser Hair Treatment
            </p>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-canvas/70">
              Personalized laser hair removal in {business.address.city},{" "}
              {business.address.region}.
            </p>
          </div>

          {/* Quick links */}
          <nav aria-label="Footer">
            <p className="text-sm font-semibold text-canvas">Explore</p>
            <ul className="mt-4 space-y-2.5">
              {nav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-sm text-canvas/70 transition-colors hover:text-canvas"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div>
            <p className="text-sm font-semibold text-canvas">Get in touch</p>
            <ul className="mt-4 space-y-2.5">
              <li>
                <a
                  href={telHref}
                  className="inline-flex items-center gap-2 text-sm text-canvas/70 transition-colors hover:text-canvas"
                >
                  <Phone size={16} aria-hidden="true" />
                  {business.phone}
                </a>
              </li>
              <li>
                <a
                  href={mailtoHref}
                  className="inline-flex items-center gap-2 text-sm text-canvas/70 transition-colors hover:text-canvas"
                >
                  <Mail size={16} aria-hidden="true" />
                  {business.email}
                </a>
              </li>
              <li>
                <a
                  href={business.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-canvas/70 transition-colors hover:text-canvas"
                >
                  <Facebook size={16} aria-hidden="true" />
                  Facebook
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-canvas/15 pt-6 text-xs text-canvas/60 sm:flex-row sm:items-center">
          <p>
            © {year} {business.name}. All rights reserved.
          </p>
          <a href={legal.privacyUrl} className="transition-colors hover:text-canvas">
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
}
