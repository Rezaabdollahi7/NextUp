import { Reveal } from "@/components/animations/Reveal";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Sparkle } from "@/components/ui/sparkle";
import { SectionHeading } from "@/components/ui/section-heading";
import { techStack } from "@/data/tech-stack";

export function TechStack() {
  return (
    <Section surface="soft" id="tech-stack">
      <Container>
        <Reveal>
          <SectionHeading
            label="تکنولوژی"
            title="تکنولوژی پشت محصولات ما."
            description="ابزارها را بر اساس نیاز پروژه انتخاب می‌کنیم، نه بر اساس مد روز."
          />
        </Reveal>

        <Reveal
          stagger
          className="mt-12 grid items-start gap-4 md:grid-cols-2 lg:grid-cols-3"
        >
          {techStack.map((group) => (
            <Card key={group.id} padding="lg" interactive>
              <div className="flex items-center gap-2">
                <Sparkle className="size-4" />
                <h3 className="font-display text-lg" dir="ltr">
                  {group.title}
                </h3>
              </div>

              <ul className="mt-5 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li key={item}>
                    <Badge size="sm" variant="outline">
                      {item}
                    </Badge>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </Reveal>
      </Container>
    </Section>
  );
}
