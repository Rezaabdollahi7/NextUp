import { ArrowLeft } from "lucide-react";
import Link from "next/link";

import { Reveal } from "@/components/animations/Reveal";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Badge } from "@/components/ui/badge";
import { ProjectImage } from "@/components/ui/project-image";
import type { Project } from "@/types";

export function NextProject({ project }: { project: Project }) {
  return (
    <Section surface="dark">
      <Container>
        <Reveal>
          <Link
            href={`/work/${project.slug}`}
            className="group/next grid items-center gap-8 rounded-panel border border-line p-5 transition-colors hover:border-brand sm:p-8 lg:grid-cols-[1fr_1.1fr]"
          >
            <div className="flex flex-col gap-4">
              <span className="text-xs text-muted">پروژه بعدی</span>

              <h2 className="text-display-lg" dir="ltr">
                {project.title}
              </h2>

              <Badge variant="brand" size="sm" className="w-fit">
                {project.category}
              </Badge>

              <p className="max-w-md text-sm text-muted">{project.shortDescription}</p>

              <span className="mt-2 inline-flex items-center gap-2 text-sm font-medium text-brand-text">
                مطالعه Case Study
                <ArrowLeft className="size-4 transition-transform duration-300 ease-out-expo group-hover/next:-translate-x-1" />
              </span>
            </div>

            <ProjectImage
              src={project.images.cover}
              title={project.title}
              ratio="wide"
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="transition-opacity group-hover/next:opacity-90"
            />
          </Link>
        </Reveal>
      </Container>
    </Section>
  );
}
