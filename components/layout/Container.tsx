import type { ComponentProps, ElementType } from "react";

import { cn } from "@/lib/utils";

type ContainerProps = ComponentProps<"div"> & {
  /** تگ رندرشونده — مثلاً `header` یا `footer`. پیش‌فرض `div`. */
  as?: ElementType;
  /** عرض محتوا. `wide` برای بخش‌های تمام‌عرض و `narrow` برای متن‌های طولانی. */
  width?: "default" | "wide" | "narrow";
};

const widths = {
  default: "max-w-page",
  wide: "max-w-[96rem]",
  narrow: "max-w-3xl",
} as const;

/** نگه‌دارنده‌ی عرض و پدینگ افقی یکسان در تمام صفحات. */
export function Container({
  as: Tag = "div",
  width = "default",
  className,
  ...props
}: ContainerProps) {
  return (
    <Tag
      className={cn("mx-auto w-full px-5 sm:px-6 lg:px-8", widths[width], className)}
      {...props}
    />
  );
}
