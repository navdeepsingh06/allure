import { business } from "@/data/site";

/**
 * Where every "Book" / CTA button should point.
 * If a real booking URL is set in site.ts, use it; otherwise send visitors
 * to the on-page contact form.
 */
export const bookHref = business.bookingUrl ? business.bookingUrl : "#contact";

/** External booking links should open in a new tab; the in-page anchor shouldn't. */
export const bookIsExternal = Boolean(business.bookingUrl);
