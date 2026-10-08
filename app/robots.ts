import type { MetadataRoute } from "next";

import { business } from "@/data/site";

// Required for `output: export` (static hosting like GitHub Pages).
export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${business.siteUrl}/sitemap.xml`,
  };
}
