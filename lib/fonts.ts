import localFont from "next/font/local";

/**
 * تنظیمات فونت پروژه.
 *
 * - `fontSans`  → IRANSansX برای تمام متن‌های عادی، دکمه‌ها و رابط کاربری.
 * - `fontDisplay` → Kaghaz برای تیترها و عنوان‌های بزرگ.
 *
 * فایل‌های فونت در `app/fonts` نگهداری می‌شوند. برای افزودن وزن جدید کافی است
 * فایل woff2 را کنار بقیه قرار دهید و یک آیتم به آرایه‌ی `src` اضافه کنید.
 * توجه: هر فایل اضافه، حجم preload را بالا می‌برد؛ فقط وزن‌های واقعاً استفاده‌شده
 * را نگه دارید.
 */

/** فونت متن — IRANSansX (وزن‌های ۴۰۰ / ۵۰۰ / ۷۰۰). */
export const fontSans = localFont({
  src: [
    {
      path: "../app/fonts/iransans/IRANSansX-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../app/fonts/iransans/IRANSansX-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../app/fonts/iransans/IRANSansX-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-sans-local",
  display: "swap",
  preload: true,
  adjustFontFallback: false,
  fallback: ["Tahoma", "Segoe UI", "system-ui", "sans-serif"],
});

/** فونت تیتر — Kaghaz (وزن ۷۰۰ «Kaghaz Alef» و وزن ۹۰۰ «Kaghaz Bold»). */
export const fontDisplay = localFont({
  src: [
    {
      path: "../app/fonts/kaghaz/kaghaz-alef.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../app/fonts/kaghaz/kaghaz-bold.woff2",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-display-local",
  display: "swap",
  preload: true,
  adjustFontFallback: false,
  fallback: ["Tahoma", "Segoe UI", "system-ui", "sans-serif"],
});

/** کلاس‌های متغیر فونت برای اعمال روی تگ `<html>`. */
export const fontVariables = `${fontSans.variable} ${fontDisplay.variable}`;
