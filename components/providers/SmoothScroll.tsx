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
  const isFirstRender = useRef(true);
  const isHistoryNavigation = useRef(false);

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

  // پیمایش با دکمه‌ی «بازگشت» مرورگر نباید موقعیت ذخیره‌شده را از دست بدهد.
  useEffect(() => {
    const markHistoryNavigation = () => {
      isHistoryNavigation.current = true;
    };

    window.addEventListener("popstate", markHistoryNavigation);
    return () => window.removeEventListener("popstate", markHistoryNavigation);
  }, []);

  /**
   * با تغییر مسیر باید از بالای صفحه‌ی جدید شروع کنیم.
   *
   * وقتی Lenis فعال است، بازنشانی خودکار اسکرول در Next انجام نمی‌شود و
   * صفحه‌ی جدید از وسط باز می‌شود. علاوه بر آن `ScrollTrigger.refresh()`
   * عمداً موقعیت اسکرول را حفظ می‌کند؛ پس ترتیب مهم است: اول اندازه‌گیری
   * دوباره، بعد بازنشانی قطعی موقعیت.
   */
  useEffect(() => {
    // اولین رندر: مسیر تازه باز شده و ممکن است لنگر (#hash) داشته باشد.
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    if (isHistoryNavigation.current) {
      isHistoryNavigation.current = false;
      ScrollTrigger.refresh();
      return;
    }

    const toTop = () => {
      lenisRef.current?.scrollTo(0, { immediate: true, force: true });
      window.scrollTo(0, 0);
    };

    toTop();

    // ارتفاع صفحه‌ی جدید هنوز اندازه‌گیری نشده است؛ بعد از اولین فریم
    // دوباره اندازه می‌گیریم و موقعیت را نهایی می‌کنیم.
    const frame = requestAnimationFrame(() => {
      ScrollTrigger.refresh();
      toTop();
    });

    return () => cancelAnimationFrame(frame);
  }, [pathname]);

  return null;
}
