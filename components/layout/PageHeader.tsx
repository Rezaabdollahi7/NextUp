import type { ReactNode } from "react";

import { Reveal } from "@/components/animations/Reveal";
import { TextReveal } from "@/components/animations/TextReveal";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Badge } from "@/components/ui/badge";
import { Sparkle } from "@/components/ui/sparkle";

type PageHeaderProps = {
  label: string;
  title: string;
  /** کلماتی از تیتر که با رنگ برند مشخص می‌شوند. */
  highlight?: string[];
  description?: string;
  children?: ReactNode;
};

/** سربرگ مشترک صفحات داخلی — نمونه‌کارها، درباره ما و تماس. */
export function PageHeader({
  label,
  title,
  highlight,
  description,
  children,
}: PageHeaderProps) {
  return (
    <Section flush className="relative overflow-hidden pt-10 pb-14 sm:pt-16 sm:pb-20">
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-grid" />

      <Container className="relative flex flex-col gap-5">
        <Reveal immediate>
          <Badge size="sm" className="w-fit gap-1.5">
            <Sparkle className="size-3" />
            {label}
          </Badge>
        </Reveal>

        <TextReveal
          as="h1"
          delay={0.1}
          text={title}
          highlight={highlight}
          className="max-w-4xl text-display-xl text-balance"
        />

        {description ? (
          <Reveal immediate delay={0.3}>
            <p className="max-w-2xl text-base text-muted">{description}</p>
          </Reveal>
        ) : null}

        {children}
      </Container>
    </Section>
  );
}
