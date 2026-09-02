import type { ComponentProps, ReactNode } from "react";

import { Badge } from "@/components/ui/badge";
import { Sparkle } from "@/components/ui/sparkle";
import { cn } from "@/lib/utils";

type SectionHeadingProps = Omit<ComponentProps<"div">, "title"> & {
  /** برچسب کوچک بالای تیتر — مثلاً «خدمات ما». */
  label?: string;
  title: ReactNode;
  description?: ReactNode;
  /** تگ تیتر؛ در صفحات داخلی ممکن است `h1` لازم باشد. */
  as?: "h1" | "h2" | "h3";
  size?: "xl" | "lg" | "md";
  align?: "start" | "center";
  /** نمایش ستاره‌ی تزئینی کنار تیتر. */
  sparkle?: boolean;
};

const sizes = {
  xl: "text-display-xl",
  lg: "text-display-lg",
  md: "text-display-md",
} as const;

/** تیتر استاندارد بخش‌ها: برچسب + عنوان + توضیح. */
export function SectionHeading({
  label,
  title,
  description,
  as: Tag = "h2",
  size = "lg",
  align = "start",
  sparkle = true,
  className,
  ...props
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        align === "center" && "items-center text-center",
        className,
      )}
      {...props}
    >
      {label ? (
        <Badge
          size="sm"
          className={cn(
            "w-fit gap-1.5",
            align === "center" ? "self-center" : "self-start",
          )}
        >
          <Sparkle className="size-3" />
          {label}
        </Badge>
      ) : null}

      <Tag className={cn(sizes[size], "max-w-3xl text-balance")}>
        {title}
        {sparkle ? (
          <Sparkle className="me-1.5 inline-block size-[0.45em] align-super" />
        ) : null}
      </Tag>

      {description ? (
        <p
          className={cn(
            "max-w-2xl text-base text-muted",
            align === "center" && "mx-auto",
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
