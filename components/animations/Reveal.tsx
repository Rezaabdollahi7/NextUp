"use client";

import { useEffect, useRef } from "react";
import type { ComponentProps, ElementType } from "react";

import { prefersReducedMotion } from "@/lib/motion";
import { cn, mergeRefs } from "@/lib/utils";

type RevealProps = ComponentProps<"div"> & {
  as?: ElementType;
  /** تأخیر شروع انیمیشن بر حسب ثانیه. */
  delay?: number;
  /** فاصله‌ی جابه‌جایی اولیه بر حسب پیکسل. */
  distance?: number;
  /**
   * انیمیشن پلکانی روی فرزندان مستقیم به‌جای خود عنصر.
   * برای گریدها و فهرست‌های کارت مناسب است.
   */
  stagger?: boolean;
  /**
   * محتوای بالای صفحه را با `critical` علامت بزنید: انیمیشن با CSS اجرا
   * می‌شود و محتوا هرگز منتظر بارگذاری جاوااسکریپت نمی‌ماند.
   */
  critical?: boolean;
};

/**
 * ظاهر شدن نرم عنصر هنگام ورود به دید.
 * حالت پنهان اولیه با CSS و کلاس `js` اعمال می‌شود تا بدون جاوااسکریپت
 * یا در حالت کاهش حرکت، محتوا همیشه دیده شود.
 */
export function Reveal({
  as: Tag = "div",
  ref: forwardedRef,
  delay = 0,
  distance = 24,
  stagger = false,
  critical = false,
  className,
  ...props
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (critical) return;

    const element = ref.current;
    if (!element) return;

    if (prefersReducedMotion()) {
      element.dataset.reveal = "done";
      return;
    }

    const targets = stagger ? Array.from(element.children) : [element];

    let revert: (() => void) | undefined;
    let cancelled = false;

    void import("@/lib/gsap").then(({ gsap }) => {
      if (cancelled) return;

      const context = gsap.context(() => {
        gsap.fromTo(
          targets,
          { opacity: 0, y: distance },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            delay,
            ease: "power3.out",
            stagger: stagger ? 0.09 : 0,
            onStart: () => {
              element.dataset.reveal = "done";
            },
            scrollTrigger: {
              trigger: element,
              start: "top 88%",
              once: true,
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
  }, [critical, delay, distance, stagger]);

  return (
    <Tag
      ref={mergeRefs(forwardedRef, ref)}
      data-reveal={stagger ? "children" : "self"}
      data-critical={critical || undefined}
      style={critical ? { animationDelay: `${delay}s` } : undefined}
      className={cn(critical && "animate-rise-in", className)}
      {...props}
    />
  );
}
