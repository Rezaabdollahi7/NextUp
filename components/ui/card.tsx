import { cva, type VariantProps } from "class-variance-authority";
import type { ComponentProps, ElementType } from "react";

import { cn } from "@/lib/utils";

const cardVariants = cva("relative rounded-card border transition-all duration-500", {
  variants: {
    variant: {
      /** کارت سفید/تیره‌ی استاندارد روی پس‌زمینه‌ی بخش. */
      solid: "border-line bg-card",
      /** کارت هم‌رنگ پس‌زمینه با خط دور — برای فهرست‌ها و ردیف‌ها. */
      outline: "border-line bg-transparent",
      /** کارت تأکیدی نارنجی. */
      brand: "border-transparent bg-brand text-ink",
      /** کارت تیره حتی روی بخش روشن. */
      invert: "border-transparent bg-ink text-sand-soft",
    },
    padding: {
      none: "p-0",
      sm: "p-5",
      md: "p-6 sm:p-7",
      lg: "p-7 sm:p-9",
    },
    interactive: {
      true: "ease-out-expo hover:-translate-y-1 hover:shadow-card",
      false: "",
    },
  },
  defaultVariants: {
    variant: "solid",
    padding: "md",
    interactive: false,
  },
});

type CardProps = ComponentProps<"div"> &
  VariantProps<typeof cardVariants> & {
    /** تگ خروجی — برای کارت‌هایی که معنای معنایی دارند، مثلاً `figure`. */
    as?: ElementType;
  };

export function Card({
  as: Tag = "div",
  className,
  variant,
  padding,
  interactive,
  ...props
}: CardProps) {
  return (
    <Tag
      data-slot="card"
      data-surface={variant === "invert" ? "dark" : undefined}
      className={cn(cardVariants({ variant, padding, interactive }), className)}
      {...props}
    />
  );
}

export function CardTitle({ className, ...props }: ComponentProps<"h3">) {
  return <h3 className={cn("text-display-sm", className)} {...props} />;
}

export function CardDescription({ className, ...props }: ComponentProps<"p">) {
  return <p className={cn("text-sm text-muted", className)} {...props} />;
}

export { cardVariants };
