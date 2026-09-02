import localFont from "next/font/local";

/**
 * تنظیمات فونت پروژه.
 *
 * فونت فعلی «وزیرمتن» است و به‌صورت فایل محلی در `app/fonts` نگهداری می‌شود.
 * برای جایگزینی با فونت اختصاصی تیم:
 *   ۱. فایل‌های فونت (ترجیحاً woff2 و variable) را در `app/fonts` قرار دهید.
 *   ۲. مقادیر `src` را در همین فایل به‌روزرسانی کنید.
 *   ۳. در صورت نیاز `fallback` را تغییر دهید.
 * هیچ جای دیگری از پروژه نیازی به تغییر ندارد؛ همه‌جا از متغیر `--font-sans` استفاده می‌شود.
 */
export const fontSans = localFont({
  src: [
    {
      path: "../app/fonts/vazirmatn-arabic-variable.woff2",
      weight: "100 900",
      style: "normal",
    },
    {
      path: "../app/fonts/vazirmatn-latin-variable.woff2",
      weight: "100 900",
      style: "normal",
    },
  ],
  variable: "--font-sans-local",
  display: "swap",
  preload: true,
  adjustFontFallback: false,
  fallback: ["Vazirmatn", "Tahoma", "Segoe UI", "system-ui", "sans-serif"],
});

/** کلاس‌های متغیر فونت برای اعمال روی تگ `<html>`. */
export const fontVariables = fontSans.variable;
