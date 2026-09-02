"use client";

import Lenis from "lenis";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

import { ScrollTrigger, gsap, prefersReducedMotion } from "@/lib/gsap";

/** فاصله‌ای که هنگام پرش به یک بخش، زیر نوار بالای صفحه باز می‌ماند. */
const ANCHOR_OFFSET = -112;

/**
 * اسکرول نرم با Lenis، هماهنگ‌شده با ScrollTrigger.
 *
 * نکات:
 * - اگر کاربر کاهش حرکت را فعال کرده باشد، Lenis اصلاً اجرا نمی‌شود.
 * - روی لمس، اسکرول بومی دستگاه دست‌نخورده می‌ماند (`syncTouch` خاموش است)
 *   تا عملکرد روی موبایل افت نکند.
 * - لینک‌های داخل‌صفحه‌ای با خود Lenis پیمایش می‌شوند تا با اسکرول مجازی
 *   ناهماهنگ نشوند.
 */
export function SmoothScroll() {
  const pathname = usePathname();
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    if (prefersReducedMotion()) return;

    const lenis = new Lenis({
      duration: 1.05,
      easing: (t) => 1 - Math.pow(1 - t, 3),
      smoothWheel: true,
      syncTouch: false,
    });

    lenisRef.current = lenis;

    lenis.on("scroll", ScrollTrigger.update);

    const raf = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(raf);
    gsap.ticker.lagSmoothing(0);

    const handleAnchorClick = (event: MouseEvent) => {
      if (event.defaultPrevented || event.button !== 0) return;
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;

      const anchor = (event.target as HTMLElement | null)?.closest("a");
      const href = anchor?.getAttribute("href");
      if (!anchor || !href || !href.includes("#")) return;

      const [path, hash] = href.split("#");
      if (!hash) return;
      // لینک به بخشی از صفحه‌ی دیگر: بگذار مسیریابی معمولی انجام شود.
      if (path && path !== "/" && path !== window.location.pathname) return;
      if (path === "/" && window.location.pathname !== "/") return;

      const target = document.getElementById(hash);
      if (!target) return;

      event.preventDefault();
      lenis.scrollTo(target, { offset: ANCHOR_OFFSET });
      window.history.replaceState(null, "", `#${hash}`);
    };

    document.addEventListener("click", handleAnchorClick);

    return () => {
      document.removeEventListener("click", handleAnchorClick);
      gsap.ticker.remove(raf);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  // با تغییر مسیر، اسکرول مجازی باید به بالای صفحه برگردد.
  useEffect(() => {
    lenisRef.current?.scrollTo(0, { immediate: true });
    ScrollTrigger.refresh();
  }, [pathname]);

  return null;
}
