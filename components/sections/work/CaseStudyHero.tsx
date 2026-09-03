import { ArrowLeft, ArrowRight, ExternalLink } from "lucide-react";
import Link from "next/link";

import { Reveal } from "@/components/animations/Reveal";
import { TextReveal } from "@/components/animations/TextReveal";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Badge } from "@/components/ui/badge";
import { Button, ButtonIcon } from "@/components/ui/button";
import { Icon } from "@/components/ui/icon";
import { ProjectImage } from "@/components/ui/project-image";
import type { Project } from "@/types";

export function CaseStudyHero({ project }: { project: Project }) {
  return (
    <Section flush className="relative overflow-hidden pt-6 pb-14 sm:pt-10">
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-grid" />

      <Container className="relative">
        <Reveal critical>
          <Link
            href="/work"
            className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-on-surface"
          >
            <ArrowRight className="size-4" />
            بازگشت به نمونه‌کارها
          </Link>
        </Reveal>

        <div className="mt-8 flex flex-col gap-5">
          <Reveal critical delay={0.1} className="flex flex-wrap items-center gap-2">
            <Badge variant="brand">{project.category}</Badge>
            <Badge variant="outline">{project.year}</Badge>
          </Reveal>

          <TextReveal
            as="h1"
            critical
            delay={0.15}
            text={project.title}
            className="text-display-xl"
          />

          <Reveal critical delay={0.3}>
            <p className="max-w-2xl text-base text-muted">{project.shortDescription}</p>
          </Reveal>

          <Reveal critical delay={0.4} className="flex flex-wrap items-center gap-3">
            {project.links.live ? (
              <Button asChild trailingIcon>
                <a
                  href={project.links.live}
                  target="_blank"
                  rel="noreferrer noopener"
                  dir="ltr"
                >
                  مشاهده پروژه
                  <ButtonIcon>
                    <ExternalLink className="size-4" />
                  </ButtonIcon>
                </a>
              </Button>
            ) : null}

            {project.links.repo ? (
              <Button asChild variant="outline" trailingIcon>
                <a
                  href={project.links.repo}
                  target="_blank"
                  rel="noreferrer noopener"
                  dir="ltr"
                >
                  کد منبع
                  <ButtonIcon>
                    <Icon name="github" className="size-4" />
                  </ButtonIcon>
                </a>
              </Button>
            ) : null}

            <Button asChild variant="ghost" trailingIcon>
              <Link href="/contact">
                پروژه‌ی مشابه دارید؟
                <ButtonIcon>
                  <ArrowLeft className="size-4" />
                </ButtonIcon>
              </Link>
            </Button>
          </Reveal>
        </div>

        <Reveal delay={0.2} className="mt-12">
          <ProjectImage
            src={project.images.cover}
            title={project.title}
            ratio="wide"
            priority
            sizes="(min-width: 1280px) 1216px, 100vw"
          />
        </Reveal>
      </Container>
    </Section>
  );
}
