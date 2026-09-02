import { ArrowLeft, ExternalLink } from "lucide-react";
import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { ProjectImage } from "@/components/ui/project-image";
import { cn } from "@/lib/utils";
import type { Project } from "@/types";

type ProjectCardProps = {
  project: Project;
  className?: string;
  /** رنگ Placeholder تصویر تا وقتی اسکرین‌شات واقعی اضافه نشده. */
  tone?: "ink" | "brand";
  priority?: boolean;
  sizes?: string;
};

/** کارت پروژه — در صفحه‌ی اصلی و صفحه‌ی نمونه‌کارها مشترک است. */
export function ProjectCard({
  project,
  className,
  tone,
  priority,
  sizes,
}: ProjectCardProps) {
  return (
    <Card
      padding="sm"
      interactive
      className={cn("group/project flex flex-col gap-5", className)}
    >
      <ProjectImage
        src={project.images.cover}
        title={project.title}
        tone={tone}
        priority={priority}
        sizes={sizes}
      />

      <div className="flex flex-1 flex-col gap-4 px-1 pb-1">
        <div className="flex flex-wrap items-center gap-2">
          <Badge size="sm" variant="brand">
            {project.category}
          </Badge>
          {project.technologies.slice(0, 2).map((tech) => (
            <Badge key={tech} size="sm" variant="outline">
              {tech}
            </Badge>
          ))}
        </div>

        <h3 className="text-display-sm" dir="ltr">
          {project.title}
        </h3>

        <p className="flex-1 text-sm text-muted">{project.shortDescription}</p>

        <div className="flex items-center justify-between gap-3 border-t border-line pt-4">
          <Link
            href={`/work/${project.slug}`}
            className="inline-flex items-center gap-2 text-sm font-medium transition-colors hover:text-brand"
          >
            {/*
              پوشش کل کارت تا هرجای آن قابل کلیک باشد، بدون تودرتو شدن لینک‌ها.
            */}
            <span className="absolute inset-0 z-0" aria-hidden />
            مطالعه Case Study
            <ArrowLeft className="size-4 transition-transform duration-300 ease-out-expo group-hover/project:-translate-x-1" />
          </Link>

          {project.links.live ? (
            <a
              href={project.links.live}
              target="_blank"
              rel="noreferrer noopener"
              aria-label={`مشاهده نسخه زنده ${project.title}`}
              className="relative z-10 grid size-10 shrink-0 place-items-center rounded-full border border-line transition-colors hover:border-brand hover:bg-brand"
            >
              <ExternalLink className="size-4" />
            </a>
          ) : null}
        </div>
      </div>
    </Card>
  );
}
