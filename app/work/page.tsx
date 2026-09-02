import type { Metadata } from "next";

import { Container } from "@/components/layout/Container";
import { PageHeader } from "@/components/layout/PageHeader";
import { Section } from "@/components/layout/Section";
import { WorkGrid, type WorkGridItem } from "@/components/sections/work/WorkGrid";
import { ProjectCard } from "@/components/ui/project-card";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "نمونه‌کارها",
  description:
    "محصولات دیجیتالی که تیم NextUp ساخته است؛ از پلتفرم‌های SaaS و وب‌اپلیکیشن تا وب‌سایت‌های مارکتینگ.",
  alternates: { canonical: "/work" },
};

export default function WorkPage() {
  // کارت‌ها در سرور رندر می‌شوند و فقط انتخابشان به کلاینت سپرده می‌شود.
  const items: WorkGridItem[] = projects.map((project, index) => ({
    id: project.id,
    category: project.category,
    card: (
      <ProjectCard
        project={project}
        tone={index % 3 === 1 ? "brand" : "ink"}
        priority={index < 2}
        sizes="(min-width: 768px) 50vw, 100vw"
      />
    ),
  }));

  return (
    <>
      <PageHeader
        label="نمونه‌کارها"
        title="محصولاتی که از ایده تا انتشار ساخته‌ایم"
        highlight={["انتشار"]}
        description="هر پروژه یک Case Study کامل دارد: مسئله‌ای که حل شد، تصمیم‌های فنی و نتیجه‌ی نهایی."
      />

      <Section flush className="pt-4 pb-16 md:pb-24 lg:pb-32">
        <Container>
          <WorkGrid items={items} />
        </Container>
      </Section>
    </>
  );
}
