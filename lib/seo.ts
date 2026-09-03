import type { Metadata } from "next";

import { siteConfig } from "@/constants/site";

/**
 * تصویر پیش‌فرض اشتراک‌گذاری.
 *
 * Next.js فایل `app/opengraph-image.png` را فقط وقتی خودکار اضافه می‌کند که
 * صفحه، `openGraph` خودش را تعریف نکرده باشد. چون صفحات داخلی عنوان و نشانی
 * اختصاصی دارند، تصویر باید صریح اعلام شود وگرنه پیش‌نمایش لینک بدون تصویر
 * می‌ماند.
 */
const ogImage = {
  url: "/opengraph-image.png",
  // کارت ۱۲۰۰×۶۳۰ با مقیاس ۲ برابر رندر می‌شود تا روی نمایشگر رتینا واضح
  // بماند؛ این اعداد باید با خروجی `scripts/generate-og.mjs` یکی بمانند،
  // وگرنه اندازه‌ی اعلام‌شده با فایل واقعی نمی‌خواند.
  width: 2400,
  height: 1260,
  alt: `${siteConfig.name} — ${siteConfig.tagline}`,
};

type PageMetadataInput = {
  title: string;
  description: string;
  /** مسیر صفحه با اسلش ابتدایی، مثلاً `/about`. */
  path: string;
  /** برای صفحات محتوایی مثل مطالعه‌ی موردی. */
  type?: "website" | "article";
};

/**
 * Metadata یکدست برای صفحات داخلی.
 *
 * `openGraph` و `twitter` در Next.js به‌جای ادغام، جایگزین مقدار والد می‌شوند؛
 * پس هر صفحه‌ای که یکی را تعریف کند باید همه‌ی فیلدهایش را بدهد. این تابع آن
 * تکرار را در یک جا نگه می‌دارد تا هیچ صفحه‌ای عنوان یا تصویر اشتباه نگیرد.
 */
export function pageMetadata({
  title,
  description,
  path,
  type = "website",
}: PageMetadataInput): Metadata {
  const fullTitle = `${title} | ${siteConfig.name}`;

  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type,
      locale: siteConfig.locale,
      siteName: siteConfig.name,
      url: path,
      title: fullTitle,
      description,
      images: [ogImage],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [ogImage.url],
    },
  };
}
