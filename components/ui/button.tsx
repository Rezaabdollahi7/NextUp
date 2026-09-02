import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import type { ComponentProps } from "react";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  [
    "group/button relative inline-flex shrink-0 items-center justify-center gap-2",
    "rounded-pill font-medium whitespace-nowrap select-none",
    "transition-[background-color,color,border-color,box-shadow] duration-300",
    "ease-out-expo disabled:pointer-events-none disabled:opacity-50",
    "[&_svg]:pointer-events-none [&_svg]:shrink-0",
  ],
  {
    variants: {
      variant: {
        /** دکمه‌ی اصلی برند — نارنجی. */
        primary: [
          "bg-brand text-ink hover:bg-brand-strong",
          "[--btn-icon-bg:var(--color-ink)] [--btn-icon-fg:var(--color-brand)]",
        ],
        /** دکمه‌ی متضاد با پس‌زمینه — روی بخش روشن تیره و روی بخش تیره روشن. */
        contrast: [
          "bg-on-surface text-surface hover:bg-on-surface/88",
          "[--btn-icon-bg:var(--color-surface)] [--btn-icon-fg:var(--color-on-surface)]",
        ],
        outline: [
          "border border-line text-on-surface hover:border-brand hover:bg-brand/10",
          "[--btn-icon-bg:var(--color-brand)] [--btn-icon-fg:var(--color-ink)]",
        ],
        ghost: [
          "text-on-surface hover:bg-on-surface/6",
          "[--btn-icon-bg:var(--color-brand)] [--btn-icon-fg:var(--color-ink)]",
        ],
        link: "h-auto rounded-none p-0 text-on-surface underline decoration-line underline-offset-8 hover:decoration-brand",
      },
      size: {
        sm: "h-10 gap-1.5 px-4 text-[0.8125rem] [--btn-icon-size:--spacing(7)]",
        md: "h-12 px-5 text-sm [--btn-icon-size:--spacing(8)]",
        lg: "h-14 px-6 text-base [--btn-icon-size:--spacing(10)]",
        icon: "size-12 p-0",
        "icon-lg": "size-14 p-0",
      },
      /** فشرده کردن پدینگ سمت پایانی وقتی دکمه آیکون دایره‌ای دارد. */
      trailingIcon: {
        true: "pe-1.5",
        false: "",
      },
    },
    compoundVariants: [
      { size: "sm", trailingIcon: true, class: "pe-1" },
      { size: "lg", trailingIcon: true, class: "pe-2" },
    ],
    defaultVariants: {
      variant: "primary",
      size: "md",
      trailingIcon: false,
    },
  },
);

type ButtonProps = ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    /** رندر کردن استایل دکمه روی فرزند (مثلاً `<Link>`). */
    asChild?: boolean;
  };

export function Button({
  className,
  variant,
  size,
  trailingIcon,
  asChild = false,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, trailingIcon }), className)}
      {...props}
    />
  );
}

/**
 * آیکون دایره‌ای انتهای دکمه (الگوی تکرارشونده‌ی قالب).
 * رنگ‌ها از متغیرهایی می‌آیند که خود Button بر اساس variant تعیین می‌کند.
 */
export function ButtonIcon({ className, ...props }: ComponentProps<"span">) {
  return (
    <span
      aria-hidden
      data-slot="button-icon"
      className={cn(
        "grid size-(--btn-icon-size) shrink-0 place-items-center rounded-full",
        "bg-(--btn-icon-bg) text-(--btn-icon-fg)",
        // در چیدمان راست‌به‌چپ، «جلو رفتن» یعنی حرکت به سمت چپ.
        "transition-transform duration-300 ease-out-expo",
        "group-hover/button:-translate-x-0.5",
        className,
      )}
      {...props}
    />
  );
}

export { buttonVariants };
