import { ArrowLeft } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Badge } from "@/components/ui/badge";
import { Button, ButtonIcon } from "@/components/ui/button";
import { Sparkle } from "@/components/ui/sparkle";
import { mainNav } from "@/data/navigation";

export const metadata: Metadata = {
  title: "صفحه پیدا نشد",
  robots: { index: false, follow: true },
  // بدون این، canonical صفحه‌ی اصلی به ارث می‌رسد و هر نشانی اشتباهی خود را
  // نسخه‌ی دیگری از صفحه‌ی خانه معرفی می‌کند.
  alternates: { canonical: null },
};

export default function NotFound() {
  return (
    <Section flush className="relative overflow-hidden py-20 sm:py-28">
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-grid" />

      <Container className="relative flex flex-col items-center gap-6 text-center">
        <Badge size="sm" className="gap-1.5">
          <Sparkle className="size-3" />
          خطای ۴۰۴
        </Badge>

        <p className="font-display nums-tabular text-6xl text-brand-text sm:text-8xl">
          ۴۰۴
        </p>

        <h1 className="max-w-2xl text-display-lg text-balance">
          این صفحه را پیدا نکردیم.
        </h1>

        <p className="max-w-md text-base text-balance text-muted">
          ممکن است نشانی اشتباه وارد شده باشد یا این صفحه جابه‌جا شده باشد.
        </p>

        <div className="mt-2 flex flex-wrap items-center justify-center gap-3">
          <Button asChild size="lg" trailingIcon>
            <Link href="/">
              بازگشت به خانه
              <ButtonIcon>
                <ArrowLeft className="size-5" />
              </ButtonIcon>
            </Link>
          </Button>

          <Button asChild size="lg" variant="outline">
            <Link href="/work">مشاهده نمونه‌کارها</Link>
          </Button>
        </div>

        <nav aria-label="صفحات اصلی" className="mt-6 border-t border-line pt-6">
          <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {mainNav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="inline-block py-1.5 text-sm text-muted transition-colors hover:text-on-surface"
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </Container>
    </Section>
  );
}
