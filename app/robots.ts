import type { MetadataRoute } from "next";

import { siteConfig } from "@/constants/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      // صفحه‌ی راهنمای داخلی سیستم طراحی نباید ایندکس شود.
      disallow: "/styleguide",
    },
    sitemap: `${siteConfig.url}/sitemap.xml`,
    host: siteConfig.url,
  };
}
