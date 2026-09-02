import { Sparkle } from "@/components/ui/sparkle";
import { cn } from "@/lib/utils";

type MarqueeProps = {
  items: string[];
  className?: string;
};

/**
 * نوار متن متحرک — با CSS خالص و بدون جاوااسکریپت اجرا می‌شود.
 * محتوا دو بار رندر می‌شود تا حلقه بدون پرش بسته شود؛ نسخه‌ی دوم از
 * دید صفحه‌خوان‌ها پنهان است.
 */
export function Marquee({ items, className }: MarqueeProps) {
  return (
    <div
      data-surface="dark"
      className={cn("overflow-hidden bg-surface py-5 text-on-surface", className)}
    >
      <div className="flex w-max animate-marquee items-center motion-reduce:animate-none">
        {[0, 1].map((copy) => (
          <ul
            key={copy}
            aria-hidden={copy === 1 || undefined}
            className="flex shrink-0 items-center"
          >
            {items.map((item) => (
              <li key={item} className="flex shrink-0 items-center gap-8 px-8">
                <span className="font-display text-2xl whitespace-nowrap sm:text-3xl">
                  {item}
                </span>
                <Sparkle className="size-5 shrink-0" />
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
}
