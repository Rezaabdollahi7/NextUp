import type { ReactNode } from "react";

import { Reveal } from "@/components/animations/Reveal";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/ui/section-heading";

type CaseStudyBlockProps = {
  id?: string;
  label: string;
  title: string;
  description?: string;
  surface?: "light" | "soft" | "dark";
  children: ReactNode;
};

/**
 * پوسته‌ی مشترک بخش‌های Case Study — برچسب، تیتر و محتوا با ریتم یکسان.
 * باعث می‌شود صفحه‌ی پروژه از یازده بخش تکراری ساخته نشود.
 */
export function CaseStudyBlock({
  id,
  label,
  title,
  description,
  surface = "light",
  children,
}: CaseStudyBlockProps) {
  return (
    <Section id={id} surface={surface}>
      <Container>
        <Reveal>
          <SectionHeading label={label} title={title} description={description} />
        </Reveal>

        <div className="mt-10">{children}</div>
      </Container>
    </Section>
  );
}
