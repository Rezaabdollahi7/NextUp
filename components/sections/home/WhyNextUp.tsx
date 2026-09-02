import { Reveal } from "@/components/animations/Reveal";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { Icon } from "@/components/ui/icon";
import { SectionHeading } from "@/components/ui/section-heading";
import { advantages } from "@/data/why-nextup";

export function WhyNextUp() {
  return (
    <Section surface="dark" id="why-nextup">
      <Container>
        <Reveal>
          <SectionHeading
            label="چرا NextUp؟"
            title="دلیل اینکه کسب‌وکارها ما را انتخاب می‌کنند"
            description="ما یک تیم کوچک و متمرکزیم؛ همین باعث می‌شود پروژه شما در صف نماند و مستقیم با سازنده‌اش در ارتباط باشید."
          />
        </Reveal>

        <Reveal stagger className="mt-12 grid gap-4 md:grid-cols-2">
          {advantages.map((advantage) => (
            <Card key={advantage.id} padding="lg" interactive className="flex gap-5">
              <span className="grid size-12 shrink-0 place-items-center rounded-full bg-brand text-ink">
                <Icon name={advantage.icon} className="size-5" />
              </span>

              <div>
                <CardTitle>{advantage.title}</CardTitle>
                <CardDescription className="mt-2">
                  {advantage.description}
                </CardDescription>
              </div>
            </Card>
          ))}
        </Reveal>
      </Container>
    </Section>
  );
}
