import { Reveal } from "@/components/animations/Reveal";
import { TextReveal } from "@/components/animations/TextReveal";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Badge } from "@/components/ui/badge";
import { Sparkle } from "@/components/ui/sparkle";
import { teamStats } from "@/constants/stats";

export function Introduction() {
  return (
    <Section surface="soft" id="introduction">
      <Container>
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col gap-5">
            <Reveal>
              <Badge size="sm" className="w-fit gap-1.5">
                <Sparkle className="size-3" />
                درباره NextUp
              </Badge>
            </Reveal>

            <TextReveal
              as="h2"
              text="یک تیم کوچک، برای ساخت ایده‌های بزرگ."
              highlight={["بزرگ."]}
              className="text-display-lg text-balance"
            />
          </div>

          <Reveal delay={0.1} className="flex flex-col gap-8">
            <p className="text-base text-muted">
              NextUp یک تیم توسعه نرم‌افزار است که روی ساخت محصولات دیجیتال سریع،
              مقیاس‌پذیر و کاربردی تمرکز دارد. ما طراحی و مهندسی را کنار هم قرار می‌دهیم
              تا ایده‌ها را به محصولاتی واقعی تبدیل کنیم.
            </p>

            <dl className="grid grid-cols-2 gap-6 border-t border-line pt-8 sm:grid-cols-4">
              {teamStats.map((stat) => (
                <div key={stat.label}>
                  <dt className="sr-only">{stat.label}</dt>
                  <dd>
                    <span className="block font-display text-3xl text-brand">
                      {stat.value}
                    </span>
                    <span className="mt-1 block text-xs text-muted">{stat.label}</span>
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
