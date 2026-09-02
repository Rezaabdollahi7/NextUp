import { Reveal } from "@/components/animations/Reveal";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { SectionHeading } from "@/components/ui/section-heading";
import { processSteps } from "@/data/process";
import { toPersianDigits } from "@/lib/utils";

export function Process() {
  return (
    <Section id="process">
      <Container>
        <Reveal>
          <SectionHeading
            label="فرایند کار"
            title="از ایده تا انتشار."
            description="مسیر روشنی که هر پروژه از آن عبور می‌کند؛ در هر مرحله می‌دانید کجای کار هستیم."
          />
        </Reveal>

        <Reveal
          stagger
          className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5"
        >
          {processSteps.map((step, index) => (
            <Card key={step.id} padding="md" interactive className="flex flex-col">
              <span className="font-display nums-tabular text-2xl text-brand-text">
                {toPersianDigits(String(index + 1).padStart(2, "0"))}
              </span>

              <CardTitle className="mt-4">{step.title}</CardTitle>
              <CardDescription className="mt-2">{step.description}</CardDescription>
            </Card>
          ))}
        </Reveal>
      </Container>
    </Section>
  );
}
