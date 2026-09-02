import type { IconName } from "@/types";

export type Advantage = {
  id: string;
  title: string;
  description: string;
  icon: IconName;
};

export const advantages: Advantage[] = [
  {
    id: "idea-to-launch",
    title: "از ایده تا انتشار",
    description:
      "از تحلیل اولیه تا توسعه و انتشار محصول در کنار شما هستیم؛ لازم نیست هر مرحله را به یک تیم جدا بسپارید.",
    icon: "rocket",
  },
  {
    id: "built-to-grow",
    title: "ساخته‌شده برای رشد",
    description:
      "ما فقط برای امروز توسعه نمی‌دهیم. محصولات باید بتوانند همراه کسب‌وکار شما رشد کنند.",
    icon: "trending-up",
  },
  {
    id: "direct-contact",
    title: "ارتباط مستقیم",
    description:
      "شما مستقیماً با افرادی در ارتباط هستید که محصول شما را طراحی و توسعه می‌کنند؛ بدون لایه‌های غیرضروری ارتباطی.",
    icon: "message",
  },
  {
    id: "real-projects",
    title: "تجربه پروژه‌های واقعی",
    description:
      "تمرکز ما فقط روی پروژه‌های نمایشی نیست. تجربه ساخت و نگهداری محصولات واقعی و Production را داریم.",
    icon: "shield-check",
  },
];
