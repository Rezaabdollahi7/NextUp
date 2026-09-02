"use client";

import { useEffect, useRef } from "react";
import type { ComponentProps, ElementType } from "react";

import { gsap, prefersReducedMotion } from "@/lib/gsap";
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
  /** اجرا بدون انتظار برای اسکرول — برای محتوای بالای صفحه. */
  immediate?: boolean;
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
  immediate = false,
  className,
  ...props
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const targets = stagger ? Array.from(element.children) : [element];

    if (prefersReducedMotion()) {
      gsap.set(targets, { opacity: 1, y: 0 });
      element.dataset.reveal = "done";
      return;
    }

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
          ...(immediate
            ? {}
            : {
                scrollTrigger: {
                  trigger: element,
                  start: "top 88%",
                  once: true,
                },
              }),
        },
      );
    }, element);

    return () => context.revert();
  }, [delay, distance, immediate, stagger]);

  return (
    <Tag
      ref={mergeRefs(forwardedRef, ref)}
      data-reveal={stagger ? "children" : "self"}
      className={cn(className)}
      {...props}
    />
  );
}
