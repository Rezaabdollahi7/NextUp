"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

import { Logo } from "@/components/layout/Logo";
import { MobileNav } from "@/components/layout/MobileNav";
import { Button } from "@/components/ui/button";
import { Icon } from "@/components/ui/icon";
import { siteConfig } from "@/constants/site";
import { mainNav } from "@/data/navigation";
import { cn } from "@/lib/utils";

/** لینک‌های دارای «#» به بخشی از همان صفحه اشاره می‌کنند و حالت فعال نمی‌گیرند. */
function isActive(pathname: string, href: string) {
  if (href.includes("#")) return false;
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function Navbar() {
  const pathname = usePathname();
  const sentinel = useRef<HTMLDivElement>(null);
  const [scrolled, setScrolled] = useState(false);

  // به‌جای گوش دادن به رویداد scroll، یک نگهبان کوچک بالای صفحه رصد می‌شود.
  useEffect(() => {
    const node = sentinel.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => setScrolled(!entry.isIntersecting),
      { rootMargin: "0px" },
    );
    observer.observe(node);

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div ref={sentinel} aria-hidden className="absolute top-0 h-px w-full" />

      <header
        className={cn(
          "fixed inset-x-0 top-0 z-40 transition-[padding] duration-500 ease-out-expo",
          scrolled ? "pt-2 sm:pt-3" : "pt-3 sm:pt-5",
        )}
      >
        <div className="mx-auto w-full max-w-page px-3 sm:px-6 lg:px-8">
          <nav
            data-surface="dark"
            className={cn(
              "grid grid-cols-[1fr_auto_1fr] items-center gap-4 bg-surface text-on-surface",
              "rounded-pill py-2 ps-3 pe-2 transition-shadow duration-500",
              scrolled && "shadow-lift",
            )}
          >
            <Logo />

            <ul className="col-start-2 hidden items-center gap-1 lg:flex">
              {mainNav.map((item) => {
                const active = isActive(pathname, item.href);

                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      aria-current={active ? "page" : undefined}
                      className={cn(
                        "relative inline-flex h-10 items-center rounded-pill px-4 text-sm transition-colors",
                        active
                          ? "text-brand"
                          : "text-on-surface/78 hover:text-on-surface",
                      )}
                    >
                      {item.title}
                      {active ? (
                        <span
                          aria-hidden
                          className="absolute inset-x-4 bottom-1.5 h-px bg-brand"
                        />
                      ) : null}
                    </Link>
                  </li>
                );
              })}
            </ul>

            <div className="col-start-3 flex items-center justify-end gap-2">
              <a
                href={siteConfig.github}
                target="_blank"
                rel="noreferrer noopener"
                aria-label="گیت‌هاب NextUp"
                className="hidden size-11 place-items-center rounded-full border border-line transition-colors hover:bg-on-surface/8 sm:grid"
              >
                <Icon name="github" className="size-4" />
              </a>

              <Button asChild variant="contrast" className="hidden sm:inline-flex">
                <Link href="/contact">شروع پروژه</Link>
              </Button>

              <MobileNav />
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}
