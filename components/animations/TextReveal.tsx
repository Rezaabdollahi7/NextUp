"use client";

import { Fragment, useEffect, useRef } from "react";
import type { ElementType } from "react";

import { prefersReducedMotion } from "@/lib/motion";
import { cn } from "@/lib/utils";

type TextRevealProps = {
  text: string;
  /** کلماتی که با رنگ برند مشخص می‌شوند. */
  highlight?: string[];
  as?: ElementType;
  className?: string;
  delay?: number;
  /**
   * تیترهای بالای صفحه را با `critical` علامت بزنید.
   *
   * در این حالت انیمیشن کاملاً با CSS اجرا می‌شود و متن هیچ‌گاه پنهان
   * نمی‌ماند؛ چون تیتر اصلی معمولاً همان عنصر LCP است و منتظر ماندنش برای
   * بارگذاری جاوااسکریپت، سنجه‌ی سرعت را چند ثانیه عقب می‌اندازد.
   */
  critical?: boolean;
};

/** فاصله‌ی زمانی بین ظاهر شدن کلمات، بر حسب ثانیه. */
const WORD_STEP = 0.045;

/**
 * نمایش پلکانی کلمه‌به‌کلمه‌ی یک تیتر.
 *
 * تقسیم فقط روی فاصله‌ی معمولی انجام می‌شود، بنابراین نیم‌فاصله و اتصال
 * حروف فارسی داخل کلمه دست‌نخورده باقی می‌ماند.
 */
export function TextReveal({
  text,
  highlight = [],
  as: Tag = "h2",
  className,
  delay = 0,
  critical = false,
}: TextRevealProps) {
  const ref = useRef<HTMLElement>(null);
  const words = text.split(" ");

  useEffect(() => {
    if (critical) return;

    const element = ref.current;
    if (!element) return;

    if (prefersReducedMotion()) {
      element.dataset.reveal = "done";
      return;
    }

    const targets = element.querySelectorAll("[data-word]");

    let revert: (() => void) | undefined;
    let cancelled = false;

    void import("@/lib/gsap").then(({ gsap }) => {
      if (cancelled) return;

      const context = gsap.context(() => {
        gsap.fromTo(
          targets,
          { opacity: 0, y: "0.5em" },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            delay,
            ease: "power3.out",
            stagger: 0.055,
            onStart: () => {
              element.dataset.reveal = "done";
            },
          },
        );
      }, element);

      revert = () => context.revert();
    });

    return () => {
      cancelled = true;
      revert?.();
    };
  }, [critical, delay, text]);

  return (
    <Tag
      ref={ref}
      data-reveal="words"
      data-critical={critical || undefined}
      className={cn(className)}
    >
      {words.map((word, index) => (
        <Fragment key={`${word}-${index}`}>
          <span
            data-word
            style={
              critical ? { animationDelay: `${delay + index * WORD_STEP}s` } : undefined
            }
            className={cn(
              "inline-block",
              critical && "animate-lift-in",
              highlight.includes(word) && "text-brand-text",
            )}
          >
            {word}
          </span>
          {index < words.length - 1 ? " " : null}
        </Fragment>
      ))}
    </Tag>
  );
}
