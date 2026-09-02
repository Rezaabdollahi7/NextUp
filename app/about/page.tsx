import type { Metadata } from "next";

import { Reveal } from "@/components/animations/Reveal";
import { Container } from "@/components/layout/Container";
import { PageHeader } from "@/components/layout/PageHeader";
import { Section } from "@/components/layout/Section";
import { FinalCTA } from "@/components/sections/home/FinalCTA";
import { Process } from "@/components/sections/home/Process";
import { Team } from "@/components/sections/home/Team";
import { TechStack } from "@/components/sections/home/TechStack";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { Icon } from "@/components/ui/icon";
import { SectionHeading } from "@/components/ui/section-heading";
import { teamStats } from "@/constants/stats";
import { principles, story } from "@/data/about";

export const metadata: Metadata = {
  title: "درباره ما",
  description:
    "NextUp یک تیم دو نفره‌ی توسعه نرم‌افزار است که محصولات دیجیتال را از ایده تا Production می‌سازد. داستان، فلسفه‌ی کاری و اعضای تیم.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        label="درباره ما"
        title="یک تیم کوچک که محصول می‌سازد، نه فقط کد."
        highlight={["محصول"]}
        description="از تحلیل ایده تا انتشار و نگهداری، همان آدم‌هایی که با شما حرف می‌زنند محصول را می‌سازند."
      />

      {/* --- داستان --- */}
      <Section surface="soft">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
            <Reveal>
              <SectionHeading label="داستان ما" title="چطور شروع شد" sparkle={false} />
            </Reveal>

            <Reveal delay={0.1} className="flex flex-col gap-5">
              {story.map((paragraph) => (
                <p key={paragraph} className="text-base text-muted">
                  {paragraph}
                </p>
              ))}

              <dl className="mt-4 grid grid-cols-2 gap-6 border-t border-line pt-8 sm:grid-cols-4">
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

      {/* --- فلسفه کاری --- */}
      <Section>
        <Container>
          <Reveal>
            <SectionHeading
              label="فلسفه کاری"
              title="چهار چیزی که سر آن کوتاه نمی‌آییم"
              description="این‌ها شعار نیستند؛ تصمیم‌های روزمره‌ی ما در پروژه‌ها بر اساس همین‌ها گرفته می‌شود."
            />
          </Reveal>

          <Reveal stagger className="mt-12 grid gap-4 md:grid-cols-2">
            {principles.map((principle) => (
              <Card key={principle.id} padding="lg" interactive className="flex gap-5">
                <span className="grid size-12 shrink-0 place-items-center rounded-full bg-brand text-ink">
                  <Icon name={principle.icon} className="size-5" />
                </span>

                <div>
                  <CardTitle>{principle.title}</CardTitle>
                  <CardDescription className="mt-2">
                    {principle.description}
                  </CardDescription>
                </div>
              </Card>
            ))}
          </Reveal>
        </Container>
      </Section>

      {/* --- نحوه کار، تیم و تکنولوژی — از همان کامپوننت‌های صفحه اصلی --- */}
      <Process />
      <Team surface="soft" />
      <TechStack surface="light" />
      <FinalCTA />
    </>
  );
}
