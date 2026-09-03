import type { MetadataRoute } from "next";

import { siteConfig } from "@/constants/site";

/**
 * مانیفست وب‌اپلیکیشن.
 *
 * جایگزین فایل استاتیک `site.webmanifest` است تا نام و رنگ‌ها از همان منبعی
 * بیایند که بقیه‌ی سایت استفاده می‌کند و از هم جدا نیفتند.
 */
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${siteConfig.name} — ${siteConfig.tagline}`,
    short_name: siteConfig.name,
    description: siteConfig.description,
    lang: "fa-IR",
    dir: "rtl",
    start_url: "/",
    display: "standalone",
    // هم‌رنگ پس‌زمینه‌ی سایت تا صفحه‌ی راه‌اندازی پرش رنگ نداشته باشد.
    background_color: "#f4f3e7",
    theme_color: "#1a120a",
    icons: [
      {
        src: "/icons/web-app-manifest-192x192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "/icons/web-app-manifest-512x512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
