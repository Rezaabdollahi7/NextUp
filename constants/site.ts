/** اطلاعات پایه‌ی سایت که در Metadata، Footer و Structured Data استفاده می‌شود. */
export const siteConfig = {
  name: "NextUp",
  tagline: "استودیو توسعه محصولات دیجیتال",
  description:
    "ما در NextUp محصولات دیجیتال مدرن و حرفه‌ای می‌سازیم؛ از وب‌سایت و فروشگاه اینترنتی تا وب‌اپلیکیشن‌ها و محصولات SaaS.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://nextup.dev",
  locale: "fa_IR",
  email: "srezaabdollahi7@gmail.com",
  github: "https://github.com/Rezaabdollahi7",
} as const;

export type SiteConfig = typeof siteConfig;
