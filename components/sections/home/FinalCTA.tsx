import { ArrowLeft } from "lucide-react";
import Link from "next/link";

import { Reveal } from "@/components/animations/Reveal";
import { TextReveal } from "@/components/animations/TextReveal";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Badge } from "@/components/ui/badge";
import { Button, ButtonIcon } from "@/components/ui/button";
import { Sparkle } from "@/components/ui/sparkle";

export function FinalCTA() {
  return (
    <Section surface="dark" className="relative overflow-hidden">
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-grid" />

      <Container className="relative flex flex-col items-center gap-6 text-center">
        <Reveal>
          <Badge size="sm" className="gap-1.5">
            <Sparkle className="size-3" />
            آماده‌ی شروع
          </Badge>
        </Reveal>

        <TextReveal
          as="h2"
          text="ایده‌ای دارید که ارزش ساخته شدن دارد؟"
          highlight={["ارزش"]}
          className="max-w-3xl text-display-lg text-balance"
        />

        <Reveal delay={0.1}>
          <p className="max-w-xl text-base text-balance text-muted">
            بیایید آن را به یک محصول واقعی تبدیل کنیم.
          </p>
        </Reveal>

        <Reveal
          delay={0.2}
          className="mt-2 flex flex-wrap items-center justify-center gap-3"
        >
          <Button asChild size="lg" trailingIcon>
            <Link href="/contact">
              شروع یک پروژه
              <ButtonIcon>
                <ArrowLeft className="size-5" />
              </ButtonIcon>
            </Link>
          </Button>

          <Button asChild size="lg" variant="outline">
            <Link href="/work">مشاهده نمونه‌کارها</Link>
          </Button>
        </Reveal>
      </Container>
    </Section>
  );
}
