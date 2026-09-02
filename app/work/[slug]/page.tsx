import { Check } from "lucide-react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { Reveal } from "@/components/animations/Reveal";
import { CaseStudyBlock } from "@/components/sections/work/CaseStudyBlock";
import { CaseStudyHero } from "@/components/sections/work/CaseStudyHero";
import { NextProject } from "@/components/sections/work/NextProject";
import { Badge } from "@/components/ui/badge";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { ProjectImage } from "@/components/ui/project-image";
import { TechBadge } from "@/components/ui/tech-badge";
import { toPersianDigits } from "@/lib/utils";
import { getNextProject, getProjectBySlug, projects } from "@/data/projects";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata(
  props: PageProps<"/work/[slug]">,
): Promise<Metadata> {
  const { slug } = await props.params;
  const project = getProjectBySlug(slug);

  if (!project) return {};

  return {
    title: `${project.title} — ${project.category}`,
    description: project.shortDescription,
    alternates: { canonical: `/work/${project.slug}` },
    openGraph: {
      type: "article",
      title: `${project.title} — ${project.category}`,
      description: project.shortDescription,
      url: `/work/${project.slug}`,
    },
  };
}

export default async function ProjectPage(props: PageProps<"/work/[slug]">) {
  const { slug } = await props.params;
  const project = getProjectBySlug(slug);

  if (!project) notFound();

  const nextProject = getNextProject(slug);
  const gallery = project.images.gallery?.length
    ? project.images.gallery
    : [undefined, undefined];

  const meta = [
    { label: "دسته‌بندی", value: project.category },
    { label: "سال", value: project.year },
    { label: "تیم", value: "NextUp" },
    { label: "تکنولوژی‌ها", value: `${project.technologies.length} مورد` },
  ];

  return (
    <>
      <CaseStudyHero project={project} />

      {/* --- ۲. معرفی --- */}
      <CaseStudyBlock surface="soft" label="معرفی پروژه" title="این پروژه چیست؟">
        <div className="grid gap-8 lg:grid-cols-[1.6fr_1fr] lg:gap-12">
          <Reveal>
            <p className="text-base">{project.overview}</p>
          </Reveal>

          <Reveal delay={0.1}>
            <Card padding="lg">
              <dl className="divide-y divide-line">
                {meta.map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center justify-between gap-4 py-3 first:pt-0 last:pb-0"
                  >
                    <dt className="text-sm text-muted">{item.label}</dt>
                    <dd className="text-sm font-medium">{item.value}</dd>
                  </div>
                ))}
              </dl>
            </Card>
          </Reveal>
        </div>
      </CaseStudyBlock>

      {/* --- ۳ و ۴. مسئله و راه‌حل --- */}
      <CaseStudyBlock label="مسئله و راه‌حل" title="از کجا شروع شد و چطور حلش کردیم">
        <Reveal stagger className="grid gap-5 lg:grid-cols-2">
          <Card variant="outline" padding="lg">
            <Badge size="sm" variant="outline" className="mb-4">
              مسئله
            </Badge>
            <p className="text-sm text-muted">{project.problem}</p>
          </Card>

          <Card variant="invert" padding="lg">
            <Badge size="sm" variant="brand" className="mb-4">
              راه‌حل
            </Badge>
            <p className="text-sm text-muted">{project.solution}</p>
          </Card>
        </Reveal>
      </CaseStudyBlock>

      {/* --- ۵. ویژگی‌های کلیدی --- */}
      <CaseStudyBlock surface="soft" label="ویژگی‌ها" title="مهم‌ترین قابلیت‌های محصول">
        <Reveal stagger className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {project.features.map((feature, index) => (
            <Card key={feature.title} padding="lg" interactive>
              <span className="font-display nums-tabular text-sm text-brand">
                {toPersianDigits(String(index + 1).padStart(2, "0"))}
              </span>
              <CardTitle className="mt-3">{feature.title}</CardTitle>
              <CardDescription className="mt-2">{feature.description}</CardDescription>
            </Card>
          ))}
        </Reveal>
      </CaseStudyBlock>

      {/* --- ۶. تکنولوژی‌ها --- */}
      <CaseStudyBlock
        surface="dark"
        label="تکنولوژی"
        title="با چه چیزی ساخته شده"
        description="انتخاب هر تکنولوژی بر اساس نیاز همین پروژه انجام شده، نه عادت."
      >
        <Reveal>
          <ul className="flex flex-wrap gap-3">
            {project.technologies.map((tech) => (
              <li key={tech}>
                <TechBadge name={tech} size="md" variant="outline" />
              </li>
            ))}
          </ul>
        </Reveal>
      </CaseStudyBlock>

      {/* --- ۷. معماری --- */}
      <CaseStudyBlock surface="dark" label="معماری" title="ساختار فنی پروژه">
        <Reveal stagger className="flex flex-col gap-8 border-s border-line ps-6">
          {project.architecture.map((item) => (
            <div key={item.title} className="relative">
              <span
                aria-hidden
                className="absolute -start-[1.9rem] top-2 size-3 rounded-full bg-brand"
              />
              <h3 className="text-display-sm">{item.title}</h3>
              <p className="mt-2 max-w-2xl text-sm text-muted">{item.description}</p>
            </div>
          ))}
        </Reveal>
      </CaseStudyBlock>

      {/* --- ۸. چالش‌ها --- */}
      <CaseStudyBlock label="چالش‌ها" title="سخت‌ترین بخش‌های کار">
        <Reveal stagger className="grid gap-4 md:grid-cols-2">
          {project.challenges.map((item) => (
            <Card key={item.title} padding="lg" className="border-brand/40">
              <CardTitle>{item.title}</CardTitle>
              <CardDescription className="mt-2">{item.description}</CardDescription>
            </Card>
          ))}
        </Reveal>
      </CaseStudyBlock>

      {/* --- ۹. نتایج --- */}
      <CaseStudyBlock surface="soft" label="نتیجه" title="چه چیزی تغییر کرد">
        <Reveal stagger className="grid gap-4 md:grid-cols-2">
          {project.results.map((result) => (
            <div key={result} className="flex items-start gap-3">
              <span className="mt-0.5 grid size-7 shrink-0 place-items-center rounded-full bg-brand text-ink">
                <Check className="size-4" />
              </span>
              <p className="text-sm">{result}</p>
            </div>
          ))}
        </Reveal>
      </CaseStudyBlock>

      {/* --- ۱۰. گالری --- */}
      <CaseStudyBlock label="گالری" title="نماهایی از محصول">
        <Reveal stagger className="grid gap-5 md:grid-cols-2">
          {gallery.map((image, index) => (
            <ProjectImage
              key={image ?? index}
              src={image}
              title={project.title}
              tone={index % 2 === 1 ? "brand" : "ink"}
              sizes="(min-width: 768px) 50vw, 100vw"
            />
          ))}
        </Reveal>
      </CaseStudyBlock>

      {/* --- ۱۱. پروژه بعدی --- */}
      {nextProject ? <NextProject project={nextProject} /> : null}
    </>
  );
}
