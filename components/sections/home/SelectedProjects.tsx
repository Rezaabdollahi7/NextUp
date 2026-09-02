import Link from "next/link";

import { Reveal } from "@/components/animations/Reveal";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Button, ButtonIcon } from "@/components/ui/button";
import { ProjectCard } from "@/components/ui/project-card";
import { SectionHeading } from "@/components/ui/section-heading";
import { featuredProjects } from "@/data/projects";
import { ArrowLeft } from "lucide-react";

export function SelectedProjects() {
  return (
    <Section surface="soft" id="projects">
      <Container>
        <Reveal className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            label="نمونه‌کارها"
            title="محصولاتی که ساخته‌ایم"
            description="هر کدام از این پروژه‌ها یک محصول واقعی است که از مرحله‌ی ایده تا انتشار همراهش بوده‌ایم."
          />

          <Button asChild variant="outline" trailingIcon className="shrink-0">
            <Link href="/work">
              همه نمونه‌کارها
              <ButtonIcon>
                <ArrowLeft className="size-4" />
              </ButtonIcon>
            </Link>
          </Button>
        </Reveal>

        <Reveal stagger className="mt-12 grid gap-5 md:grid-cols-2">
          {featuredProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              tone={index % 3 === 1 ? "brand" : "ink"}
              priority={index < 2}
              sizes="(min-width: 768px) 50vw, 100vw"
            />
          ))}
        </Reveal>
      </Container>
    </Section>
  );
}
