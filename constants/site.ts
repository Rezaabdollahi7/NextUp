export type SiteConfig = {
  name: string;
  tagline: string;
  description: string;
  url: string;
  locale: string;
  email: string;
  github: string;
  /** خالی بگذارید تا در رابط کاربری نمایش داده نشود. */
  telegram: string;
  /** خالی بگذارید تا در رابط کاربری نمایش داده نشود. */
  phone: string;
};

/** اطلاعات پایه‌ی سایت که در Metadata، Footer و Structured Data استفاده می‌شود. */
export const siteConfig: SiteConfig = {
  name: "NextUp",
  tagline: "استودیو توسعه محصولات دیجیتال",
  description:
    "ما در NextUp محصولات دیجیتال مدرن و حرفه‌ای می‌سازیم؛ از وب‌سایت و فروشگاه اینترنتی تا وب‌اپلیکیشن‌ها و محصولات SaaS.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://nextup.ir",
  locale: "fa_IR",
  email: "srezaabdollahi7@gmail.com",
  github: "https://github.com/Rezaabdollahi7",

  /**
   * راه‌های تماس اختیاری. تا وقتی خالی باشند، در فوتر و صفحه‌ی تماس
   * نمایش داده نمی‌شوند. نمونه:
   *   telegram: "https://t.me/nextup"
   *   phone: "+989120000000"
   */
  telegram: "",
  phone: "",
};
