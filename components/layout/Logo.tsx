import Link from "next/link";

import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
  /** فقط نشان دایره‌ای بدون نوشته. */
  markOnly?: boolean;
  size?: "sm" | "md";
};

const markSizes = {
  sm: "size-9",
  md: "size-11",
} as const;

const wordSizes = {
  sm: "text-lg",
  md: "text-xl",
} as const;

/** نشان و نام برند NextUp. */
export function Logo({ className, markOnly = false, size = "sm" }: LogoProps) {
  return (
    <Link
      href="/"
      aria-label="NextUp — صفحه اصلی"
      // نشان برند در هر صفحه هست؛ اگر Prefetch شود، صفحه‌ی اصلی روی خودِ
      // صفحه‌ی اصلی هم دوباره گرفته می‌شود. آیتم «خانه» در منو همان مسیر را
      // پوشش می‌دهد، پس اینجا لازم نیست.
      prefetch={false}
      className={cn("group/logo inline-flex items-center gap-2.5", className)}
    >
      <span
        className={cn(
          "grid shrink-0 place-items-center rounded-full bg-brand text-ink",
          "transition-transform duration-500 ease-out-expo group-hover/logo:-rotate-12",
          markSizes[size],
        )}
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2.6}
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden
          className="size-[55%]"
        >
          <path d="M12 16.5V8" />
          <path d="M7.5 12.5 12 8l4.5 4.5" />
        </svg>
      </span>

      {markOnly ? null : (
        <span
          dir="ltr"
          className={cn(
            "font-display leading-none font-black text-on-surface",
            wordSizes[size],
          )}
        >
          NextUp<span className="text-brand-text">.</span>
        </span>
      )}
    </Link>
  );
}
