import type { Metadata } from "next";

import { Container } from "@/components/layout/Container";
import { PageHeader } from "@/components/layout/PageHeader";
import { Section } from "@/components/layout/Section";
import { WorkGrid } from "@/components/sections/work/WorkGrid";

export const metadata: Metadata = {
  title: "نمونه‌کارها",
  description:
    "محصولات دیجیتالی که تیم NextUp ساخته است؛ از پلتفرم‌های SaaS و وب‌اپلیکیشن تا وب‌سایت‌های مارکتینگ.",
  alternates: { canonical: "/work" },
};

export default function WorkPage() {
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
          <WorkGrid />
        </Container>
      </Section>
    </>
  );
}
