import { ArrowLeft, Quote } from "lucide-react";
import Link from "next/link";

import { Parallax } from "@/components/animations/Parallax";
import { Reveal } from "@/components/animations/Reveal";
import { TextReveal } from "@/components/animations/TextReveal";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { HeroVisual } from "@/components/sections/home/HeroVisual";
import { Badge } from "@/components/ui/badge";
import { Button, ButtonIcon } from "@/components/ui/button";
import { Icon } from "@/components/ui/icon";
import { Marquee } from "@/components/ui/marquee";
import { RotatingSeal } from "@/components/ui/rotating-seal";
import { Sparkle } from "@/components/ui/sparkle";
import { teamStats } from "@/constants/stats";
import { socialLinks } from "@/data/navigation";
import { serviceTitles } from "@/data/services";

const capabilities = [
  "Next.js",
  "SaaS",
  "فروشگاه اینترنتی",
  "Dashboard",
  "Node.js",
  "TypeScript",
];

export function Hero() {
  return (
    <Section flush className="relative overflow-hidden">
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-grid" />

      <Container className="relative pt-6 pb-16 sm:pt-10">
        <div className="relative flex flex-col items-center gap-5 text-center">
          <RotatingSeal
            href="/contact"
            label="Start a project"
            srLabel="شروع پروژه"
            className="absolute end-0 -top-2 hidden lg:grid"
          />

          <Reveal immediate>
            <Badge className="shadow-soft">
              <span className="grid size-6 place-items-center rounded-full bg-ink text-brand">
                <Sparkle className="size-3 text-current" />
              </span>
              تیم توسعه محصولات دیجیتال
            </Badge>
          </Reveal>

          <TextReveal
            as="h1"
            delay={0.1}
            text="ایده بعدی شما، از اینجا شروع می‌شود."
            highlight={["شروع"]}
            className="max-w-4xl text-display-xl text-balance"
          />

          <Reveal immediate delay={0.45}>
            <p className="max-w-xl text-base text-balance text-muted">
              از وب‌سایت و فروشگاه اینترنتی تا وب‌اپلیکیشن و محصولات SaaS.
            </p>
          </Reveal>
        </div>

        <div className="mt-10 grid items-center gap-10 lg:mt-14 lg:grid-cols-[1fr_1.7fr_1fr] lg:gap-10">
          <Reveal
            delay={0.1}
            className="order-2 flex flex-row items-center justify-between gap-6 lg:order-1 lg:flex-col lg:items-start"
          >
            <div>
              <p className="text-xs text-muted">ما را دنبال کنید</p>
              <ul className="mt-3 flex items-center gap-2">
                {socialLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      aria-label={link.title}
                      {...(link.external
                        ? { target: "_blank", rel: "noreferrer noopener" }
                        : {})}
                      className="grid size-11 place-items-center rounded-full border border-line bg-card transition-colors hover:border-brand hover:bg-brand"
                    >
                      <Icon name={link.icon} className="size-4" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <dl className="flex gap-6 lg:mt-4 lg:flex-col lg:gap-4">
              {teamStats.slice(0, 2).map((stat) => (
                <div key={stat.label}>
                  <dt className="sr-only">{stat.label}</dt>
                  <dd>
                    <span className="block font-display text-2xl">{stat.value}</span>
                    <span className="text-xs text-muted">{stat.label}</span>
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>

          <Parallax distance={36} className="order-1 lg:order-2">
            <HeroVisual />
          </Parallax>

          <Reveal delay={0.2} className="order-3 space-y-6">
            <figure>
              <Quote aria-hidden className="size-7 rotate-180 text-brand" />
              <blockquote className="mt-2 text-sm leading-8">
                ما ایده‌ها و نیازهای کسب‌وکارها را به محصولات دیجیتال واقعی تبدیل می‌کنیم.
              </blockquote>
            </figure>

            <ul className="flex flex-wrap gap-2">
              {capabilities.map((item, index) => (
                <li key={item}>
                  <Badge size="sm" variant={index % 3 === 1 ? "brand" : "solid"}>
                    {item}
                  </Badge>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <Reveal delay={0.15} className="mt-12 flex justify-center">
          <div className="inline-flex flex-col items-center gap-2 rounded-panel bg-card p-2 shadow-card sm:flex-row sm:rounded-pill">
            <Button asChild size="lg" trailingIcon className="w-full sm:w-auto">
              <Link href="/contact">
                شروع یک پروژه
                <ButtonIcon>
                  <ArrowLeft className="size-5" />
                </ButtonIcon>
              </Link>
            </Button>
            <Button asChild size="lg" variant="ghost" className="w-full sm:w-auto">
              <Link href="/work">مشاهده نمونه‌کارها</Link>
            </Button>
          </div>
        </Reveal>
      </Container>

      <Marquee items={serviceTitles} className="border-y-2 border-brand" />
    </Section>
  );
}
