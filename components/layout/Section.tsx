import type { ComponentProps, ElementType } from "react";

import { cn } from "@/lib/utils";

type SectionProps = ComponentProps<"section"> & {
  as?: ElementType;
  /**
   * پس‌زمینه‌ی بخش. `dark` پالت را برای تمام فرزندان معکوس می‌کند، بنابراین
   * دکمه‌ها و کارت‌ها بدون prop اضافه خودشان را تطبیق می‌دهند.
   */
  surface?: "light" | "soft" | "dark";
  /** حذف پدینگ عمودی پیش‌فرض (برای بخش‌هایی مثل Hero که چیدمان خاص دارند). */
  flush?: boolean;
};

const surfaces = {
  light: "bg-surface text-on-surface",
  soft: "bg-surface-soft text-on-surface",
  dark: "bg-surface text-on-surface",
} as const;

/** پوسته‌ی استاندارد بخش‌های صفحه: پس‌زمینه، ریتم عمودی و پالت. */
export function Section({
  as: Tag = "section",
  surface = "light",
  flush = false,
  className,
  ...props
}: SectionProps) {
  return (
    <Tag
      data-surface={surface === "dark" ? "dark" : undefined}
      className={cn(surfaces[surface], !flush && "section-y", className)}
      {...props}
    />
  );
}
