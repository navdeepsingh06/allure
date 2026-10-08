"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

import { business, nav } from "@/data/site";
import { bookHref, bookIsExternal } from "@/lib/booking";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  // Solidify the header once the user scrolls past the top of the hero.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile menu on Escape and lock scroll while it's open.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  // Solid background whenever scrolled OR the mobile menu is open.
  const solid = scrolled || open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        solid
          ? "border-b border-line bg-canvas/90 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="container-page flex h-16 items-center justify-between md:h-20">
        {/* Wordmark */}
        <a
          href="#top"
          className="flex flex-col leading-none"
          aria-label={`${business.name} — home`}
        >
          <span className="font-serif text-xl tracking-tightish text-ink sm:text-2xl">
            {business.shortName}
          </span>
          <span className="mt-0.5 text-[0.62rem] uppercase tracking-[0.22em] text-muted">
            Laser Hair Treatment
          </span>
        </a>

        {/* Desktop nav */}
        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex items-center gap-8">
            {nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="text-sm font-medium text-ink/80 transition-colors hover:text-plum"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={bookHref}
            {...(bookIsExternal
              ? { target: "_blank", rel: "noopener noreferrer" }
              : {})}
            className="hidden rounded-full bg-plum px-5 py-2.5 text-sm font-semibold text-canvas shadow-soft transition-colors hover:bg-plum-hover md:inline-flex"
          >
            Book Now
          </a>

          {/* Mobile menu toggle */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full text-ink transition-colors hover:bg-sand md:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={`overflow-hidden border-t border-line bg-canvas transition-[max-height] duration-300 md:hidden ${
          open ? "max-h-96" : "max-h-0 border-t-transparent"
        }`}
      >
        <nav aria-label="Mobile" className="container-page py-4">
          <ul className="flex flex-col">
            {nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-2 py-3 text-base font-medium text-ink transition-colors hover:bg-sand hover:text-plum"
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li className="mt-2">
              <a
                href={bookHref}
                {...(bookIsExternal
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                onClick={() => setOpen(false)}
                className="block rounded-full bg-plum px-5 py-3 text-center text-base font-semibold text-canvas transition-colors hover:bg-plum-hover"
              >
                Book Now
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
