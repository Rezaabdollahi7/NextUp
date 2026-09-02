"use client";

import { useEffect, useRef } from "react";
import type { ComponentProps } from "react";

import { prefersReducedMotion } from "@/lib/motion";
import { cn, mergeRefs } from "@/lib/utils";

type ParallaxProps = ComponentProps<"div"> & {
  /** بیشترین جابه‌جایی عمودی بر حسب پیکسل در طول عبور از صفحه. */
  distance?: number;
};

/**
 * جابه‌جایی بسیار ملایم عمودی هنگام اسکرول.
 * فقط `transform` را تغییر می‌دهد تا هزینه‌ی رندر نزدیک به صفر بماند و
 * روی صفحه‌های کوچک یا حالت کاهش حرکت اصلاً اجرا نمی‌شود.
 */
export function Parallax({
  ref: forwardedRef,
  distance = 40,
  className,
  ...props
}: ParallaxProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    if (prefersReducedMotion()) return;
    if (window.matchMedia("(max-width: 767px)").matches) return;

    let revert: (() => void) | undefined;
    let cancelled = false;

    void import("@/lib/gsap").then(({ gsap }) => {
      if (cancelled) return;

      const context = gsap.context(() => {
        gsap.fromTo(
          element,
          { y: distance / 2 },
          {
            y: -distance / 2,
            ease: "none",
            scrollTrigger: {
              trigger: element,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
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
  }, [distance]);

  return (
    <div
      ref={mergeRefs(forwardedRef, ref)}
      className={cn("will-change-transform", className)}
      {...props}
    />
  );
}
