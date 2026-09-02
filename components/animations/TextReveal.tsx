"use client";

import { Fragment, useEffect, useRef } from "react";
import type { ElementType } from "react";

import { gsap, prefersReducedMotion } from "@/lib/gsap";
import { cn } from "@/lib/utils";

type TextRevealProps = {
  text: string;
  /** کلماتی که با رنگ برند مشخص می‌شوند. */
  highlight?: string[];
  as?: ElementType;
  className?: string;
  delay?: number;
};

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
}: TextRevealProps) {
  const ref = useRef<HTMLElement>(null);
  const words = text.split(" ");

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const targets = element.querySelectorAll("[data-word]");

    if (prefersReducedMotion()) {
      gsap.set(targets, { opacity: 1, y: 0 });
      element.dataset.reveal = "done";
      return;
    }

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

    return () => context.revert();
  }, [delay, text]);

  return (
    <Tag ref={ref} data-reveal="words" className={cn(className)}>
      {words.map((word, index) => (
        <Fragment key={`${word}-${index}`}>
          <span
            data-word
            className={cn("inline-block", highlight.includes(word) && "text-brand")}
          >
            {word}
          </span>
          {index < words.length - 1 ? " " : null}
        </Fragment>
      ))}
    </Tag>
  );
}
