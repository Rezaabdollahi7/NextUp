import Image from "next/image";

import { Sparkle } from "@/components/ui/sparkle";
import { cn } from "@/lib/utils";

type TeamAvatarProps = {
  /** مسیر عکس واقعی؛ اگر خالی باشد آواتار برندشده رندر می‌شود. */
  src?: string;
  name: string;
  /** رنگ آواتار جایگزین — برای تفکیک بصری اعضا. */
  tone?: "brand" | "ink";
  className?: string;
  sizes?: string;
};

/**
 * تصویر عضو تیم با آواتار جایگزین.
 *
 * نسبت تصویر در هر دو حالت یکسان است، بنابراین جایگزینی عکس واقعی هیچ
 * Layout Shift ایجاد نمی‌کند: فایل را در `public/images/team` بگذارید و
 * مسیرش را در `data/team.ts` بنویسید.
 */
export function TeamAvatar({
  src,
  name,
  tone = "brand",
  className,
  sizes = "(min-width: 768px) 40vw, 100vw",
}: TeamAvatarProps) {
  const initial = name.trim().charAt(0);

  return (
    <div
      className={cn(
        "relative aspect-[4/5] overflow-hidden rounded-card",
        tone === "brand" ? "bg-brand-soft" : "bg-ink",
        className,
      )}
    >
      {src ? (
        <Image
          src={src}
          alt={`عکس ${name}`}
          fill
          sizes={sizes}
          className="object-cover"
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
              "absolute -start-12 -bottom-16 size-52 rounded-full border",
              tone === "brand" ? "border-ink/10" : "border-line",
            )}
          />

          <div className="relative flex flex-col items-center gap-4">
            <span
              className={cn(
                "grid size-24 place-items-center rounded-full font-display text-4xl",
                tone === "brand" ? "bg-ink text-brand" : "bg-brand text-ink",
              )}
              aria-hidden
            >
              {initial}
            </span>
            <Sparkle className={cn("size-4", tone === "brand" && "text-ink")} />
          </div>
        </div>
      )}
    </div>
  );
}
