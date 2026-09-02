import type { ComponentProps } from "react";

import { cn } from "@/lib/utils";

/** موتیف ستاره‌ی چهارپر — عنصر تزئینی امضای برند در تیترها و برچسب‌ها. */
export function Sparkle({ className, ...props }: ComponentProps<"svg">) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
      focusable="false"
      className={cn("size-4 text-brand", className)}
      {...props}
    >
      <path d="M12 1.5c.9 6.1 4.4 9.6 10.5 10.5-6.1.9-9.6 4.4-10.5 10.5-.9-6.1-4.4-9.6-10.5-10.5C7.6 11.1 11.1 7.6 12 1.5Z" />
    </svg>
  );
}
