import { Reveal } from "@/components/animations/Reveal";
import { Container } from "@/components/layout/Container";
import { PageHeader } from "@/components/layout/PageHeader";
import { Section } from "@/components/layout/Section";
import { ContactChannels } from "@/components/sections/contact/ContactChannels";
import { InquiryForm } from "@/components/sections/contact/InquiryForm";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "تماس با ما",
  description:
    "درخواست پروژه‌ی خود را برای تیم NextUp بفرستید یا مستقیم از طریق ایمیل و گیت‌هاب در تماس باشید.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <PageHeader
        label="تماس"
        title="بیایید درباره‌ی پروژه‌ی شما حرف بزنیم."
        highlight={["پروژه‌ی"]}
        description="فرم زیر را پر کنید تا با تصویر روشنی از پروژه شروع کنیم؛ یا اگر ترجیح می‌دهید، مستقیم پیام بدهید."
      />

      <Section flush className="pb-16 md:pb-24 lg:pb-32">
        <Container>
          {/*
            بدون `min-w-0` آیتم‌های گرید زیر عرض ذاتی محتوایشان کوچک
            نمی‌شوند و روی نمایشگرهای باریک از کانتینر بیرون می‌زنند.
          */}
          <div className="grid items-start gap-6 lg:grid-cols-[1.6fr_1fr] [&>*]:min-w-0">
            <Reveal>
              <InquiryForm />
            </Reveal>

            <ContactChannels />
          </div>
        </Container>
      </Section>
    </>
  );
}
