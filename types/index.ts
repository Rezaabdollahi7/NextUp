/** آیکون‌های مجاز برای لینک‌های داده‌محور (نگاشت به کامپوننت در لایه‌ی UI). */
export type IconName =
  | "github"
  | "mail"
  | "globe"
  | "phone"
  | "map-pin"
  | "rocket"
  | "trending-up"
  | "message"
  | "shield-check";

export type NavItem = {
  title: string;
  href: string;
  /** لینک خارجی — با target و rel مناسب رندر می‌شود. */
  external?: boolean;
};

export type NavGroup = {
  title: string;
  items: NavItem[];
};

export type TeamMember = {
  id: string;
  name: string;
  role: string;
  location: string;
  bio: string;
  /** تمرکزهای اصلی — به‌صورت فهرست کوتاه زیر بیوگرافی نمایش داده می‌شود. */
  focus: string[];
  skills: string[];
  /** مسیر تصویر در `public/images/team`. */
  image: string;
  links: {
    portfolio?: string;
    github?: string;
    email: string;
  };
};

export type ContactLink = NavItem & {
  icon: IconName;
  /** متنی که به کاربر نمایش داده می‌شود؛ اگر نبود از `title` استفاده می‌شود. */
  value?: string;
};
