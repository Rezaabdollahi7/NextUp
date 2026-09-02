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

const PERSIAN_DIGITS = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];

/** تبدیل ارقام لاتین به فارسی — برای شماره‌گذاری بخش‌ها و آمار. */
export function toPersianDigits(value: string | number) {
  return String(value).replace(/\d/g, (digit) => PERSIAN_DIGITS[Number(digit)]);
}

/**
 * ساخت لینک `tel:` از شماره‌ی محلی ایران.
 * ورودی «۰۹۲۱ ۹۸۱ ۱۹۸۰» یا «+98 936 853 5209» هر دو پذیرفته می‌شوند.
 */
export function toTelHref(phone: string) {
  const digits = phone.replace(/\D/g, "");

  if (digits.startsWith("98")) return `+${digits}`;
  if (digits.startsWith("0")) return `+98${digits.slice(1)}`;

  return `+${digits}`;
}
