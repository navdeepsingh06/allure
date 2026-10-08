import { business, legal } from "@/data/site";

/**
 * LocalBusiness structured data (HealthAndBeautyBusiness subtype) using the
 * real, confirmed details. Helps search engines show accurate business info.
 * Note: address/phone use placeholder values until filled in /data/site.ts.
 */
export function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "HealthAndBeautyBusiness",
    name: business.name,
    description: legal.seoDescription,
    url: business.siteUrl,
    telephone: business.phone,
    email: business.email,
    image: `${business.siteUrl}/images/hero.jpg`,
    address: {
      "@type": "PostalAddress",
      streetAddress: business.address.street,
      addressLocality: business.address.city,
      addressRegion: business.address.region,
      postalCode: business.address.postalCode,
      addressCountry: business.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: business.geo.lat,
      longitude: business.geo.lng,
    },
    areaServed: "Winnipeg, Manitoba",
    sameAs: [business.facebookUrl],
    hasMap: business.mapsUrl,
  };

  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
