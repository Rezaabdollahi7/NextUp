"use client";

import type Lenis from "lenis";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

import { prefersReducedMotion } from "@/lib/motion";

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

    let teardown: (() => void) | undefined;
    let cancelled = false;

    /*
      Lenis و GSAP برای اولین رنگ‌آمیزی لازم نیستند. راه‌اندازی‌شان تا بی‌کار
      شدن مرورگر عقب می‌افتد تا زمان اجرای اسکریپت قبل از نمایش محتوا
      کوتاه‌تر بماند.
    */
    const start = async () => {
      const [{ default: LenisClass }, { gsap, ScrollTrigger }] = await Promise.all([
        import("lenis"),
        import("@/lib/gsap"),
      ]);

      if (cancelled) return;

      const lenis = new LenisClass({
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

      document.addEventListener("click", handleAnchorClick);

      teardown = () => {
        document.removeEventListener("click", handleAnchorClick);
        gsap.ticker.remove(raf);
        lenis.destroy();
        lenisRef.current = null;
      };
    };

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
      lenisRef.current?.scrollTo(target, { offset: ANCHOR_OFFSET });
      window.history.replaceState(null, "", `#${hash}`);
    };

    // سافاری تا نسخه‌های اخیر `requestIdleCallback` نداشت.
    const supportsIdle = typeof window.requestIdleCallback === "function";

    const idle = supportsIdle
      ? window.requestIdleCallback(() => void start(), { timeout: 1500 })
      : window.setTimeout(() => void start(), 300);

    return () => {
      cancelled = true;

      if (supportsIdle) {
        window.cancelIdleCallback(idle);
      } else {
        window.clearTimeout(idle);
      }

      teardown?.();
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
      void import("@/lib/gsap").then(({ ScrollTrigger }) => ScrollTrigger.refresh());
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
      void import("@/lib/gsap").then(({ ScrollTrigger }) => {
        ScrollTrigger.refresh();
        toTop();
      });
    });

    return () => cancelAnimationFrame(frame);
  }, [pathname]);

  return null;
}
