import { siteConfig } from "@/constants/site";
import type { ContactLink, NavGroup, NavItem } from "@/types";

/** منوی اصلی — در Navbar و منوی موبایل استفاده می‌شود. */
export const mainNav: NavItem[] = [
  { title: "خانه", href: "/" },
  { title: "خدمات", href: "/#services" },
  { title: "نمونه‌کارها", href: "/work" },
  { title: "درباره ما", href: "/about" },
  { title: "تماس", href: "/contact" },
];

/** ستون‌های لینک در فوتر. */
export const footerNav: NavGroup[] = [
  {
    title: "پیمایش",
    items: [
      { title: "خانه", href: "/" },
      { title: "نمونه‌کارها", href: "/work" },
      { title: "درباره ما", href: "/about" },
      { title: "تماس با ما", href: "/contact" },
    ],
  },
];

/** راه‌های ارتباطی — در فوتر و صفحه‌ی تماس مشترک است. */
export const contactLinks: ContactLink[] = [
  {
    title: "ایمیل",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
    icon: "mail",
  },
  {
    title: "گیت‌هاب",
    value: "github.com/Rezaabdollahi7",
    href: siteConfig.github,
    icon: "github",
    external: true,
  },
  {
    title: "وب‌سایت",
    value: "nextup.ir",
    href: siteConfig.url,
    icon: "globe",
  },
];

/** لینک‌های اجتماعی تیم — به‌صورت دکمه‌های دایره‌ای نمایش داده می‌شوند. */
export const socialLinks: ContactLink[] = [
  {
    title: "گیت‌هاب",
    href: siteConfig.github,
    icon: "github",
    external: true,
  },
  {
    title: "ایمیل",
    href: `mailto:${siteConfig.email}`,
    icon: "mail",
  },
];

/** لینک‌های حقوقی نوار پایین فوتر. */
export const legalNav: NavItem[] = [{ title: "تماس با ما", href: "/contact" }];
