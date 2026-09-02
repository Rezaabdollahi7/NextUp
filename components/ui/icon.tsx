import {
  Globe,
  Mail,
  MapPin,
  MessagesSquare,
  Phone,
  Rocket,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";
import type { ComponentProps } from "react";

import type { IconName } from "@/types";

/** نسخه‌ی lucide v1 آیکون‌های برند را حذف کرده؛ نشان گیت‌هاب اینجا تعریف می‌شود. */
function GithubMark({ className, ...props }: ComponentProps<"svg">) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} {...props}>
      <path d="M12 .5a11.5 11.5 0 0 0-3.64 22.41c.58.1.79-.25.79-.55v-2.16c-3.2.7-3.88-1.36-3.88-1.36-.53-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.2 1.77 1.2 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.24 2.76.12 3.05.74.81 1.19 1.84 1.19 3.1 0 4.43-2.7 5.4-5.26 5.69.41.36.78 1.06.78 2.14v3.17c0 .3.21.66.8.55A11.5 11.5 0 0 0 12 .5Z" />
    </svg>
  );
}

/** نشان تلگرام — مثل گیت‌هاب در lucide v1 وجود ندارد. */
function TelegramMark({ className, ...props }: ComponentProps<"svg">) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} {...props}>
      <path d="M21.94 4.3 18.9 19.1c-.23 1.02-.84 1.27-1.7.79l-4.7-3.47-2.27 2.19c-.25.25-.46.46-.94.46l.33-4.78 8.7-7.86c.38-.34-.08-.53-.59-.19l-10.75 6.77-4.63-1.45c-1.01-.32-1.03-1.01.21-1.5l18.1-6.98c.84-.31 1.57.19 1.3 1.22Z" />
    </svg>
  );
}

const icons = {
  github: GithubMark,
  telegram: TelegramMark,
  mail: Mail,
  globe: Globe,
  phone: Phone,
  "map-pin": MapPin,
  rocket: Rocket,
  "trending-up": TrendingUp,
  message: MessagesSquare,
  "shield-check": ShieldCheck,
} as const;

type IconProps = ComponentProps<"svg"> & { name: IconName };

/**
 * نگاشت نام آیکون (که در فایل‌های `data/` ذخیره می‌شود) به کامپوننت آیکون.
 * این کار باعث می‌شود داده‌ها فقط رشته باشند و JSX داخلشان نرود.
 */
export function Icon({ name, ...props }: IconProps) {
  const Component = icons[name];
  return <Component aria-hidden {...props} />;
}
