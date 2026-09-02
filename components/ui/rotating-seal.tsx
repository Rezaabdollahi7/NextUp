import { ArrowLeft } from "lucide-react";
import Link from "next/link";

import { cn } from "@/lib/utils";

type RotatingSealProps = {
  href: string;
  /**
   * متن چرخان دور دایره. لاتین است چون مرورگرها متن فارسی را روی مسیر
   * منحنی (`textPath`) درست شکل نمی‌دهند.
   */
  label: string;
  /** توضیح فارسی برای صفحه‌خوان‌ها. */
  srLabel: string;
  className?: string;
};

/**
 * مُهر گرد با متن چرخان — معادل نشان «HIRE ME» قالب.
 * چرخش با CSS انجام می‌شود و در حالت کاهش حرکت متوقف می‌ماند.
 */
export function RotatingSeal({ href, label, srLabel, className }: RotatingSealProps) {
  return (
    <Link
      href={href}
      aria-label={srLabel}
      className={cn(
        "group/seal relative grid size-28 shrink-0 place-items-center rounded-full bg-ink sm:size-32",
        className,
      )}
    >
      <svg
        viewBox="0 0 100 100"
        aria-hidden
        className="absolute inset-0 size-full animate-[spin_20s_linear_infinite] motion-reduce:animate-none"
      >
        <defs>
          <path
            id="seal-path"
            d="M50 50m-36 0a36 36 0 1 1 72 0a36 36 0 1 1 -72 0"
            fill="none"
          />
        </defs>
        <text
          style={{ direction: "ltr" }}
          className="fill-sand-soft text-[8px] font-medium tracking-[0.22em] uppercase"
        >
          <textPath href="#seal-path" startOffset="0">
            {`${label} • ${label} • `}
          </textPath>
        </text>
      </svg>

      <span className="grid size-12 place-items-center rounded-full bg-brand text-ink transition-transform duration-500 ease-out-expo group-hover/seal:scale-110 sm:size-14">
        <ArrowLeft className="size-5" />
      </span>
    </Link>
  );
}
