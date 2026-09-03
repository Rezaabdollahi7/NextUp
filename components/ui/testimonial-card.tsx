import Image from "next/image";

import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import type { Testimonial } from "@/types";

/** اندازه‌ی آواتار در هر دو حالت عکس و حرف اول — برابر تا جابه‌جایی رخ ندهد. */
const AVATAR_SIZE = 56;

function Avatar({ testimonial }: { testimonial: Testimonial }) {
  const { image, name, variant } = testimonial;

  if (image) {
    return (
      <Image
        src={image}
        alt={`عکس ${name}`}
        width={AVATAR_SIZE}
        height={AVATAR_SIZE}
        className="size-14 shrink-0 rounded-2xl object-cover"
      />
    );
  }

  return (
    <span
      aria-hidden
      className={cn(
        "grid size-14 shrink-0 place-items-center rounded-2xl font-display text-2xl",
        // روی کارت نارنجی، آواتار نارنجی دیده نمی‌شود؛ پس معکوس می‌شود.
        variant === "brand" ? "bg-ink text-brand" : "bg-brand text-ink",
      )}
    >
      {name.trim().charAt(0)}
    </span>
  );
}

/**
 * یک نظر کارفرما.
 *
 * از `blockquote`/`cite` استفاده می‌کند تا نقل‌قول برای صفحه‌خوان هم نقل‌قول
 * باشد، نه یک پاراگراف معمولی.
 */
export function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  const { quote, name, role, variant, featured } = testimonial;

  return (
    <Card
      as="figure"
      variant={variant}
      padding={featured ? "lg" : "md"}
      interactive
      className="flex break-inside-avoid flex-col gap-6 overflow-hidden"
    >
      {featured ? (
        // بافت گرید بدون ماسک، خط‌های تیزی روی کارت می‌اندازد که شبیه جدول
        // می‌شود؛ ماسک شعاعی آن را از بالا به پایین محو می‌کند.
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_75%_60%_at_50%_0%,#000_55%,transparent_100%)] [background-size:56px_56px]"
        />
      ) : null}

      <blockquote
        className={cn(
          "relative flex-1 text-pretty",
          featured ? "text-base" : "text-sm sm:text-base",
        )}
      >
        «{quote}»
      </blockquote>

      <figcaption className="relative flex items-center justify-between gap-4">
        <div className="min-w-0">
          <cite className="block truncate font-display text-lg not-italic">{name}</cite>
          <p
            className={cn(
              "mt-0.5 truncate text-sm",
              // روی کارت نارنجی متن کم‌رنگ خوانا نیست.
              variant === "brand" ? "text-ink/75" : "text-muted",
            )}
          >
            {role}
          </p>
        </div>

        <Avatar testimonial={testimonial} />
      </figcaption>
    </Card>
  );
}
