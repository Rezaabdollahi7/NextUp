import Image from "next/image";

import { Sparkle } from "@/components/ui/sparkle";
import { cn } from "@/lib/utils";

type ProjectImageProps = {
  /** مسیر تصویر واقعی؛ اگر خالی باشد Placeholder برندشده رندر می‌شود. */
  src?: string;
  /** عنوان پروژه — هم برای alt و هم برای متن Placeholder. */
  title: string;
  className?: string;
  /** نسبت تصویر؛ در هر دو حالت یکسان است تا جایگزینی تصویر پرش ایجاد نکند. */
  ratio?: "video" | "wide" | "square";
  /** رنگ Placeholder — برای شکستن یکنواختی شبکه‌ی پروژه‌ها. */
  tone?: "ink" | "brand";
  priority?: boolean;
  sizes?: string;
};

const ratios = {
  video: "aspect-[4/3]",
  wide: "aspect-[16/9]",
  square: "aspect-square",
} as const;

/**
 * تصویر پروژه با Placeholder حرفه‌ای.
 *
 * تا وقتی اسکرین‌شات واقعی اضافه نشده، یک بلوک برندشده با همان نسبت تصویر
 * نمایش داده می‌شود. برای جایگزینی کافی است فایل را در
 * `public/images/projects` بگذارید و مسیرش را در `data/projects.ts` بنویسید.
 */
export function ProjectImage({
  src,
  title,
  className,
  ratio = "video",
  tone = "ink",
  priority = false,
  sizes = "(min-width: 1024px) 50vw, 100vw",
}: ProjectImageProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-card",
        tone === "brand" ? "bg-brand" : "bg-ink",
        ratios[ratio],
        className,
      )}
    >
      {src ? (
        <Image
          src={src}
          alt={`نمایی از پروژه ${title}`}
          fill
          sizes={sizes}
          priority={priority}
          className="object-cover transition-transform duration-700 ease-out-expo group-hover/project:scale-105"
        />
      ) : (
        <div
          {...(tone === "ink" ? { "data-surface": "dark" } : {})}
          className="absolute inset-0 grid place-items-center"
        >
          <div aria-hidden className="absolute inset-0 bg-grid" />

          <span
            aria-hidden
            className={cn(
              "absolute -end-16 -top-16 size-48 rounded-full border",
              tone === "brand" ? "border-ink/15" : "border-line",
            )}
          />
          <span
            aria-hidden
            className={cn(
              "absolute -start-10 -bottom-20 size-56 rounded-full border",
              tone === "brand" ? "border-ink/15" : "border-line",
            )}
          />

          <div className="relative flex flex-col items-center gap-3 px-6 text-center">
            <Sparkle className={tone === "brand" ? "size-5 text-ink" : "size-5"} />
            <span className="font-display text-xl sm:text-2xl" dir="ltr">
              {title}
            </span>
            <span
              className={tone === "brand" ? "text-xs text-ink/70" : "text-xs text-muted"}
            >
              تصویر پروژه به‌زودی
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
