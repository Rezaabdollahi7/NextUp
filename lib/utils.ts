import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/** Merge conditional class names while resolving conflicting Tailwind utilities. */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * ترکیب چند ref روی یک عنصر — لازم است تا کامپوننت‌های انیمیشن بتوانند
 * داخل `asChild` رادیکس هم استفاده شوند.
 */
export function mergeRefs<T>(...refs: (React.Ref<T> | undefined)[]) {
  return (node: T | null) => {
    for (const ref of refs) {
      if (typeof ref === "function") {
        ref(node);
      } else if (ref) {
        (ref as React.RefObject<T | null>).current = node;
      }
    }
  };
}
