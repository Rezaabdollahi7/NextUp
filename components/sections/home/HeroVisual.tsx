import { Badge } from "@/components/ui/badge";
import { Sparkle } from "@/components/ui/sparkle";

const sidebarItems = [true, false, false, false];
const chartBars = [38, 62, 46, 78, 54, 92];

/**
 * بلوک بصری انتزاعی Hero — نمایی ساده‌شده از یک محصول وب.
 * کاملاً با CSS ساخته شده است: بدون تصویر، بدون درخواست شبکه و بدون Layout Shift.
 */
export function HeroVisual() {
  return (
    <div className="relative mx-auto w-full max-w-2xl">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 grid place-items-center"
      >
        <span className="absolute aspect-square w-[86%] rounded-full border border-line" />
        <span className="absolute aspect-square w-[110%] rounded-full border border-line" />
        <span className="absolute aspect-square w-[134%] rounded-full border border-line" />
      </div>

      <div
        data-surface="dark"
        className="relative rounded-panel bg-surface p-3 shadow-lift sm:p-4"
      >
        <div className="flex items-center gap-2 px-2 pb-3">
          <span className="flex gap-1.5" aria-hidden>
            <span className="size-2.5 rounded-full bg-brand" />
            <span className="size-2.5 rounded-full bg-on-surface/25" />
            <span className="size-2.5 rounded-full bg-on-surface/25" />
          </span>
          <span className="ms-2 h-6 flex-1 rounded-pill bg-on-surface/8" aria-hidden />
        </div>

        <div className="grid grid-cols-[auto_1fr] gap-3 rounded-card bg-surface-soft p-3 sm:gap-4 sm:p-4">
          <aside className="flex w-12 flex-col gap-2 sm:w-14" aria-hidden>
            {sidebarItems.map((active, index) => (
              <span
                key={index}
                className={
                  active ? "h-7 rounded-xl bg-brand" : "h-7 rounded-xl bg-on-surface/8"
                }
              />
            ))}
          </aside>

          <div className="space-y-3">
            <div className="grid grid-cols-2 gap-3">
              <div className="rounded-card border border-line bg-surface p-3 sm:p-4">
                <span
                  className="block h-2 w-12 rounded-full bg-on-surface/12"
                  aria-hidden
                />
                <p className="mt-3 font-display nums-tabular text-xl sm:text-2xl">۹۸٪</p>
                <span
                  className="mt-3 block h-1.5 w-full rounded-full bg-on-surface/8"
                  aria-hidden
                >
                  <span className="block h-full w-[82%] rounded-full bg-brand" />
                </span>
              </div>

              <div className="rounded-card bg-brand p-3 text-ink sm:p-4">
                <span className="block h-2 w-10 rounded-full bg-ink/20" aria-hidden />
                <p className="mt-3 font-display text-lg sm:text-xl">Production</p>
                <p className="mt-1 text-xs text-ink/70">Ready</p>
              </div>
            </div>

            <div className="rounded-card border border-line bg-surface p-3 sm:p-4">
              <div className="flex items-center justify-between">
                <span
                  className="block h-2 w-16 rounded-full bg-on-surface/12"
                  aria-hidden
                />
                <Sparkle className="size-3.5" />
              </div>
              <div
                className="mt-4 flex h-16 items-end gap-1.5 sm:h-20 sm:gap-2"
                aria-hidden
              >
                {chartBars.map((height, index) => (
                  <span
                    key={index}
                    style={{ height: `${height}%` }}
                    className={
                      index === chartBars.length - 1
                        ? "flex-1 rounded-t-md bg-brand"
                        : "flex-1 rounded-t-md bg-on-surface/12"
                    }
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Badge
        variant="solid"
        className="absolute start-2 -bottom-4 shadow-card sm:start-6 sm:-bottom-5"
      >
        <Sparkle className="size-3" />
        از ایده تا انتشار
      </Badge>

      <Badge
        variant="brand"
        className="absolute end-2 -top-4 shadow-card sm:end-6 sm:-top-5"
      >
        Full-Stack
      </Badge>
    </div>
  );
}
