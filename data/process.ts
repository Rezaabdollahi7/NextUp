export type ProcessStep = {
  id: string;
  title: string;
  description: string;
};

/** مراحل کار از ایده تا انتشار — بند ۱۸ سند پروژه. */
export const processSteps: ProcessStep[] = [
  {
    id: "discovery",
    title: "شناخت",
    description: "ایده، کسب‌وکار، کاربران و اهداف پروژه را بررسی می‌کنیم.",
  },
  {
    id: "planning",
    title: "برنامه‌ریزی",
    description: "ویژگی‌ها، ساختار محصول و مسیر فنی پروژه را مشخص می‌کنیم.",
  },
  {
    id: "build",
    title: "طراحی و توسعه",
    description: "ایده را به یک محصول واقعی و قابل استفاده تبدیل می‌کنیم.",
  },
  {
    id: "test",
    title: "تست و بهبود",
    description: "محصول را بررسی، تست و بهینه‌سازی می‌کنیم.",
  },
  {
    id: "launch",
    title: "انتشار",
    description: "محصول آماده ورود به دنیای واقعی و استفاده کاربران می‌شود.",
  },
];
