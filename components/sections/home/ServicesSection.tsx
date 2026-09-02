import Link from "next/link";

import { Reveal } from "@/components/animations/Reveal";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { ServicesAccordion } from "@/components/sections/home/Services";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/section-heading";

export function ServicesSection() {
  return (
    <Section id="services">
      <Container>
        <Reveal className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            label="خدمات ما"
            title="چطور ایده‌ها را به محصول تبدیل می‌کنیم"
            description="از یک صفحه‌ی فرود ساده تا یک محصول SaaS چندمستاجری — روی چیزی کار می‌کنیم که برای کسب‌وکار شما نتیجه بدهد."
          />

          <Button asChild variant="outline" className="shrink-0">
            <Link href="/contact">درخواست مشاوره</Link>
          </Button>
        </Reveal>

        <div className="mt-12">
          <ServicesAccordion />
        </div>
      </Container>
    </Section>
  );
}
