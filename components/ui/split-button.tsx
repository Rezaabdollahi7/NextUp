import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import type { ComponentProps } from "react";

import { cn } from "@/lib/utils";

type SplitButtonProps = Omit<ComponentProps<typeof Link>, "children"> & {
  children: React.ReactNode;
  /** رنگ قاب بیرونی — روی بخش‌های تیره باید معکوس شود. */
  tone?: "ink" | "surface";
};

const tones = {
  ink: "bg-ink",
  surface: "bg-on-surface",
} as const;

/**
 * دکمه‌ی دوتکه‌ی قالب: یک قاب گرد تیره که داخلش یک پیل نارنجی و یک دایره‌ی
 * فلش سفید نشسته است. در فوتر و CTA پایانی استفاده می‌شود.
 */
export function SplitButton({
  children,
  className,
  tone = "ink",
  ...props
}: SplitButtonProps) {
  return (
    <Link
      className={cn(
        "group/split inline-flex items-center gap-1.5 rounded-pill p-1.5",
        tones[tone],
        className,
      )}
      {...props}
    >
      <span className="inline-flex h-11 items-center rounded-pill bg-brand px-6 text-sm font-medium text-ink transition-colors group-hover/split:bg-brand-strong">
        {children}
      </span>
      <span
        aria-hidden
        className="grid size-11 shrink-0 place-items-center rounded-full bg-white text-ink transition-transform duration-300 ease-out-expo group-hover/split:-translate-x-0.5"
      >
        <ArrowLeft className="size-4" />
      </span>
    </Link>
  );
}
