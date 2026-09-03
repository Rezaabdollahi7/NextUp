import { Reveal } from "@/components/animations/Reveal";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/ui/section-heading";
import { TestimonialCard } from "@/components/ui/testimonial-card";
import { testimonials } from "@/data/testimonials";
import { cn } from "@/lib/utils";

/**
 * نظرات کارفرمایان.
 *
 * چیدمان ستونی (`columns`) به‌جای گرید انتخاب شده تا کارت‌ها با متن‌های
 * نابرابر خودشان ارتفاع بگیرند و فضای خالی نماند؛ با اضافه‌شدن نظر جدید
 * هیچ عدد ثابتی لازم نیست تغییر کند.
 */
export function Testimonials({ surface = "light" }: { surface?: "light" | "soft" }) {
  if (testimonials.length === 0) return null;

  // مربع‌های تزئینی باید خط پشتشان را بپوشانند، پس هم‌رنگ پس‌زمینه‌ی بخش‌اند.
  const squareBg = surface === "soft" ? "bg-surface-soft" : "bg-surface";

  return (
    <Section surface={surface} id="testimonials">
      <Container>
        <Reveal>
          <SectionHeading
            align="center"
            label="نظرات کارفرمایان"
            title="کسانی که با ما کار کرده‌اند چه می‌گویند"
            description="هر پروژه با یک گفت‌وگو شروع شد و با یک محصول قابل استفاده تمام شد. این‌ها روایت خودشان است."
          />
        </Reveal>

        <Reveal stagger blur className="mt-12 gap-5 md:columns-2 lg:columns-3 [&>*]:mb-5">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </Reveal>

        {/* خط پایانی با مربع‌های گوشه — همان جزئیات تزئینی قالب. */}
        <div aria-hidden className="relative mt-4 border-b border-line">
          <span
            className={cn(
              "absolute -start-1.5 -bottom-1.5 size-3 border border-line",
              squareBg,
            )}
          />
          <span
            className={cn(
              "absolute -end-1.5 -bottom-1.5 size-3 border border-line",
              squareBg,
            )}
          />
        </div>
      </Container>
    </Section>
  );
}
