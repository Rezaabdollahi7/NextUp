/**
 * کمک‌تابع‌های حرکت — عمداً از GSAP جدا نگه داشته شده‌اند تا کامپوننت‌ها
 * بتوانند بدون وارد کردن کل کتابخانه، ترجیح کاربر را بررسی کنند.
 */

/** کاربر خواسته است انیمیشن‌ها کم شوند؟ */
export function prefersReducedMotion() {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}
