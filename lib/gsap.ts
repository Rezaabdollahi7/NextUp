import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// پلاگین فقط در مرورگر ثبت می‌شود؛ در رندر سمت سرور نیازی به آن نیست.
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

/** کاربر خواسته است انیمیشن‌ها کم شوند؟ */
export function prefersReducedMotion() {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export { gsap, ScrollTrigger };
