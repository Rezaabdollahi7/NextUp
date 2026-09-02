import type { ComponentProps } from "react";

import { Badge } from "@/components/ui/badge";
import { techIconPaths } from "@/constants/tech-icons";
import { cn } from "@/lib/utils";

/** نشان تکنولوژی؛ اگر برای آن نامی نشانی ثبت نشده باشد چیزی رندر نمی‌شود. */
export function TechIcon({
  name,
  className,
  ...props
}: ComponentProps<"svg"> & { name: string }) {
  const path = techIconPaths[name];
  if (!path) return null;

  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
      focusable="false"
      className={cn("size-3.5 shrink-0", className)}
      {...props}
    >
      <path d={path} />
    </svg>
  );
}

type TechBadgeProps = Omit<ComponentProps<typeof Badge>, "children"> & {
  name: string;
};

/** برچسب تکنولوژی همراه با نشان برند آن. */
export function TechBadge({ name, className, ...props }: TechBadgeProps) {
  return (
    <Badge className={cn("gap-2", className)} {...props}>
      <TechIcon name={name} />
      <span dir="ltr">{name}</span>
    </Badge>
  );
}
