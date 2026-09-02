import { cva, type VariantProps } from "class-variance-authority";
import type { ComponentProps } from "react";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center gap-2 rounded-pill text-xs font-medium whitespace-nowrap",
  {
    variants: {
      variant: {
        /** برچسب بالای هر بخش — پس‌زمینه‌ی ملایم با خط دور. */
        default: "border border-line bg-card text-on-surface",
        brand: "bg-brand text-ink",
        outline: "border border-line text-muted",
        solid: "bg-on-surface text-surface",
      },
      size: {
        sm: "h-7 px-3",
        md: "h-9 px-4",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  },
);

type BadgeProps = ComponentProps<"span"> & VariantProps<typeof badgeVariants>;

export function Badge({ className, variant, size, ...props }: BadgeProps) {
  return (
    <span
      data-slot="badge"
      className={cn(badgeVariants({ variant, size }), className)}
      {...props}
    />
  );
}

export { badgeVariants };
