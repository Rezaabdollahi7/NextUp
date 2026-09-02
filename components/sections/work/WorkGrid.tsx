"use client";

import { useMemo, useState } from "react";

import { Reveal } from "@/components/animations/Reveal";
import { ProjectCard } from "@/components/ui/project-card";
import { projects } from "@/data/projects";
import { cn } from "@/lib/utils";

const ALL = "همه";

/** فهرست همه‌ی پروژه‌ها با فیلتر دسته‌بندی. */
export function WorkGrid() {
  const categories = useMemo(
    () => [ALL, ...Array.from(new Set(projects.map((project) => project.category)))],
    [],
  );

  const [active, setActive] = useState(ALL);

  const visible = useMemo(
    () =>
      active === ALL
        ? projects
        : projects.filter((project) => project.category === active),
    [active],
  );

  return (
    <div>
      <ul className="flex flex-wrap gap-2" role="list">
        {categories.map((category) => {
          const isActive = category === active;

          return (
            <li key={category}>
              <button
                type="button"
                aria-pressed={isActive}
                onClick={() => setActive(category)}
                className={cn(
                  "rounded-pill border px-4 py-2 text-sm transition-colors duration-300",
                  isActive
                    ? "border-brand bg-brand text-ink"
                    : "border-line text-muted hover:border-on-surface/30 hover:text-on-surface",
                )}
              >
                {category}
              </button>
            </li>
          );
        })}
      </ul>

      {/*
        کلید روی دسته‌بندی فعال است تا با تغییر فیلتر، انیمیشن ورود دوباره اجرا
        شود و کارت‌های جدید بدون پرش جایگزین شوند.
      */}
      <Reveal key={active} stagger className="mt-8 grid gap-5 md:grid-cols-2">
        {visible.map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            tone={index % 3 === 1 ? "brand" : "ink"}
            priority={index < 2}
            sizes="(min-width: 768px) 50vw, 100vw"
          />
        ))}
      </Reveal>

      {visible.length === 0 ? (
        <p className="mt-8 text-sm text-muted">
          فعلاً پروژه‌ای در این دسته‌بندی منتشر نشده است.
        </p>
      ) : null}
    </div>
  );
}
