import { siteConfig } from "@/constants/site";
import { toTelHref } from "@/lib/utils";
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

/**
 * راه‌های ارتباطی — در فوتر و صفحه‌ی تماس مشترک است.
 * موارد خالی (تلگرام و شماره تماس تا وقتی در `siteConfig` پر نشده‌اند)
 * به‌صورت خودکار حذف می‌شوند.
 */
export const contactLinks: ContactLink[] = [
  {
    title: "ایمیل",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
    icon: "mail",
  },
  ...(siteConfig.telegram
    ? [
        {
          title: "تلگرام",
          value: siteConfig.telegram.replace(/^https?:\/\//, ""),
          href: siteConfig.telegram,
          icon: "telegram",
          external: true,
        } satisfies ContactLink,
      ]
    : []),
  ...(siteConfig.phone
    ? [
        {
          title: "شماره تماس",
          value: siteConfig.phone,
          href: `tel:${toTelHref(siteConfig.phone)}`,
          icon: "phone",
        } satisfies ContactLink,
      ]
    : []),
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
  ...(siteConfig.telegram
    ? [
        {
          title: "تلگرام",
          href: siteConfig.telegram,
          icon: "telegram",
          external: true,
        } satisfies ContactLink,
      ]
    : []),
  {
    title: "ایمیل",
    href: `mailto:${siteConfig.email}`,
    icon: "mail",
  },
];
