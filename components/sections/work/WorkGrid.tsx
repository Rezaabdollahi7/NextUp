"use client";

import { Fragment, useMemo, useState, type ReactNode } from "react";

import { Reveal } from "@/components/animations/Reveal";
import { cn } from "@/lib/utils";

const ALL = "همه";

export type WorkGridItem = {
  id: string;
  category: string;
  /** کارت پروژه که در سرور رندر شده است. */
  card: ReactNode;
};

/**
 * فیلتر دسته‌بندی پروژه‌ها.
 *
 * کارت‌ها به‌صورت آماده از سرور می‌آیند و اینجا فقط انتخاب می‌شوند؛ بنابراین
 * کد کارت و مسیر نشان تکنولوژی‌ها هرگز به باندل کلاینت اضافه نمی‌شود.
 */
export function WorkGrid({ items }: { items: WorkGridItem[] }) {
  const categories = useMemo(
    () => [ALL, ...Array.from(new Set(items.map((item) => item.category)))],
    [items],
  );

  const [active, setActive] = useState(ALL);

  const visible = useMemo(
    () => (active === ALL ? items : items.filter((item) => item.category === active)),
    [active, items],
  );

  return (
    <div>
      {/*
        عنوان پنهان: کارت‌های پروژه با h3 شروع می‌شوند و بدون این سرفصل،
        ترتیب تیترهای صفحه از h1 مستقیم به h3 می‌پرد.
      */}
      <h2 className="sr-only">فهرست پروژه‌ها</h2>

      <ul className="flex flex-wrap gap-2" role="list">
        {categories.map((category) => {
          const isActive = category === active;

          return (
            <li key={category}>
              <button
                type="button"
                aria-pressed={isActive}
                onClick={() => setActive(category)}
                className={cn(
                  "rounded-pill border px-4 py-2 text-sm transition-colors duration-300",
                  isActive
                    ? "border-brand bg-brand text-ink"
                    : "border-line text-muted hover:border-on-surface/30 hover:text-on-surface",
                )}
              >
                {category}
              </button>
            </li>
          );
        })}
      </ul>

      {/*
        کلید روی دسته‌بندی فعال است تا با تغییر فیلتر، انیمیشن ورود دوباره اجرا
        شود و کارت‌های جدید بدون پرش جایگزین شوند.
      */}
      <Reveal key={active} stagger className="mt-8 grid gap-5 md:grid-cols-2">
        {visible.map((item) => (
          <Fragment key={item.id}>{item.card}</Fragment>
        ))}
      </Reveal>

      {visible.length === 0 ? (
        <p className="mt-8 text-sm text-muted">
          فعلاً پروژه‌ای در این دسته‌بندی منتشر نشده است.
        </p>
      ) : null}
    </div>
  );
}
