import { Reveal } from "@/components/animations/Reveal";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/ui/section-heading";
import { TeamCard } from "@/components/ui/team-card";
import { team } from "@/data/team";

export function Team({ surface = "light" }: { surface?: "light" | "soft" | "dark" }) {
  return (
    <Section surface={surface} id="team">
      <Container>
        <Reveal>
          <SectionHeading
            label="تیم"
            title="آدم‌های پشت NextUp."
            description="ما یک تیم کوچک هستیم با یک هدف مشترک: ساخت محصولات دیجیتال بهتر."
          />
        </Reveal>

        <Reveal stagger className="mt-12 grid gap-5 lg:grid-cols-2">
          {team.map((member, index) => (
            <TeamCard
              key={member.id}
              member={member}
              tone={index % 2 === 0 ? "brand" : "ink"}
            />
          ))}
        </Reveal>
      </Container>
    </Section>
  );
}
