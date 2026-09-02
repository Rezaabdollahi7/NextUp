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
  /**
   * مسیر تصویر در `public/images/team` — مثلاً `/images/team/reza-abdollahi.jpg`.
   * تا وقتی خالی باشد، آواتار برندشده با حرف اول نام نمایش داده می‌شود.
   */
  image?: string;
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

/** یک آیتم عنوان‌دار — در ویژگی‌ها، معماری و چالش‌های Case Study استفاده می‌شود. */
export type TitledItem = {
  title: string;
  description: string;
};

export type Project = {
  id: string;
  slug: string;
  title: string;
  category: string;
  /** سال یا بازه‌ی انجام پروژه. */
  year: string;
  shortDescription: string;

  // --- محتوای Case Study ---
  overview: string;
  problem: string;
  solution: string;
  features: TitledItem[];
  technologies: string[];
  architecture: TitledItem[];
  challenges: TitledItem[];
  results: string[];

  images: {
    /**
     * مسیر تصویر کاور در `public/images/projects`.
     * تا وقتی خالی باشد، Placeholder برندشده با همان نسبت تصویر نمایش داده
     * می‌شود؛ بنابراین جایگزینی تصویر واقعی هیچ Layout Shift ایجاد نمی‌کند.
     */
    cover?: string;
    gallery?: string[];
  };

  links: {
    /** نشانی نسخه‌ی زنده — اگر نبود، دکمه‌ی «مشاهده پروژه» نمایش داده نمی‌شود. */
    live?: string;
    repo?: string;
  };

  /** نمایش در بخش «نمونه‌کارهای منتخب» صفحه اصلی. */
  featured: boolean;
};
