import type { Metadata } from "next";
import { ArrowUpLeft, Mail } from "lucide-react";

import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Badge } from "@/components/ui/badge";
import { Button, ButtonIcon } from "@/components/ui/button";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { SectionHeading } from "@/components/ui/section-heading";
import { Sparkle } from "@/components/ui/sparkle";

export const metadata: Metadata = {
  title: "Style Guide",
  robots: { index: false, follow: false },
};

const swatches = [
  ["brand", "bg-brand"],
  ["brand-strong", "bg-brand-strong"],
  ["brand-soft", "bg-brand-soft"],
  ["ink", "bg-ink"],
  ["ink-soft", "bg-ink-soft"],
  ["sand", "bg-sand"],
  ["sand-soft", "bg-sand-soft"],
] as const;

const typeScale = [
  ["display-xl", "text-display-xl"],
  ["display-lg", "text-display-lg"],
  ["display-md", "text-display-md"],
  ["display-sm", "text-display-sm"],
] as const;

function Buttons() {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <Button trailingIcon>
        شروع یک پروژه
        <ButtonIcon>
          <ArrowUpLeft className="size-4" />
        </ButtonIcon>
      </Button>
      <Button variant="contrast">مشاهده نمونه‌کارها</Button>
      <Button variant="outline">تماس با ما</Button>
      <Button variant="ghost">بیشتر بدانید</Button>
      <Button variant="outline" size="icon" aria-label="ایمیل">
        <Mail className="size-4" />
      </Button>
      <Button size="sm" variant="contrast">
        دکمه کوچک
      </Button>
      <Button size="lg" trailingIcon>
        دکمه بزرگ
        <ButtonIcon>
          <ArrowUpLeft className="size-5" />
        </ButtonIcon>
      </Button>
    </div>
  );
}

function Cards() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      <Card interactive>
        <CardTitle>کارت استاندارد</CardTitle>
        <CardDescription className="mt-2">
          کارت پیش‌فرض روی پس‌زمینه‌ی بخش.
        </CardDescription>
      </Card>
      <Card variant="outline">
        <CardTitle>کارت خطی</CardTitle>
        <CardDescription className="mt-2">بدون پس‌زمینه، فقط خط دور.</CardDescription>
      </Card>
      <Card variant="brand">
        <CardTitle>کارت برند</CardTitle>
        <CardDescription className="mt-2 text-ink/70">
          برای تأکید روی یک آیتم.
        </CardDescription>
      </Card>
      <Card variant="invert">
        <CardTitle>کارت تیره</CardTitle>
        <CardDescription className="mt-2">
          حتی روی بخش روشن، تیره می‌ماند.
        </CardDescription>
      </Card>
    </div>
  );
}

export default function StyleGuidePage() {
  return (
    <>
      <Section>
        <Container className="space-y-16">
          <SectionHeading
            label="سیستم طراحی"
            as="h1"
            size="xl"
            title="پایه‌های بصری NextUp"
            description="این صفحه فقط برای بررسی داخلی است و در نتایج جست‌وجو ایندکس نمی‌شود."
          />

          <div className="space-y-4">
            <h2 className="text-display-sm">رنگ‌ها</h2>
            <div className="flex flex-wrap gap-4">
              {swatches.map(([name, bg]) => (
                <div key={name} className="w-28 space-y-2">
                  <div className={`h-16 rounded-2xl border border-line ${bg}`} />
                  <p className="text-xs text-muted">{name}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-display-sm">تایپوگرافی</h2>
            <div className="space-y-4">
              {typeScale.map(([name, cls]) => (
                <div key={name} className="border-b border-line pb-4">
                  <p className="mb-1 text-xs text-muted">{name} — Kaghaz</p>
                  <p className={`font-display ${cls}`}>
                    ایده بعدی شما از اینجا شروع می‌شود
                  </p>
                </div>
              ))}
              <div>
                <p className="mb-1 text-xs text-muted">body — IRANSansX</p>
                <p className="max-w-2xl">
                  ما در NextUp محصولات دیجیتال مدرن و حرفه‌ای می‌سازیم؛ از وب‌سایت و
                  فروشگاه اینترنتی تا وب‌اپلیکیشن‌ها و محصولات SaaS. اعداد: ۱۲۳۴۵۶ /
                  123456
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-display-sm">دکمه‌ها</h2>
            <Buttons />
          </div>

          <div className="space-y-4">
            <h2 className="text-display-sm">برچسب‌ها</h2>
            <div className="flex flex-wrap items-center gap-3">
              <Badge>
                <Sparkle className="size-3" />
                خدمات ما
              </Badge>
              <Badge variant="brand">SaaS Platform</Badge>
              <Badge variant="outline">React</Badge>
              <Badge variant="solid">۰۱</Badge>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-display-sm">کارت‌ها</h2>
            <Cards />
          </div>
        </Container>
      </Section>

      <Section surface="dark">
        <Container className="space-y-12">
          <SectionHeading
            label="بخش تیره"
            title="همان کامپوننت‌ها، پالت معکوس"
            description="با گذاشتن surface=dark روی بخش، تمام توکن‌های رنگ برای فرزندان معکوس می‌شوند؛ کامپوننت‌ها هیچ prop اضافه‌ای نمی‌گیرند."
          />
          <Buttons />
          <Cards />
        </Container>
      </Section>

      <Section surface="soft">
        <Container>
          <SectionHeading
            label="بخش ملایم"
            title="پس‌زمینه‌ی روشن ثانویه"
            description="برای ایجاد تنوع بین بخش‌های پشت‌سرهم استفاده می‌شود."
            align="center"
          />
        </Container>
      </Section>
    </>
  );
}
