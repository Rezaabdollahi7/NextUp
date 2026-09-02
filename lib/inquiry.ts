import { siteConfig } from "@/constants/site";
import type { InquiryValues } from "@/lib/validation/inquiry";

/**
 * تبدیل مقادیر فرم به یک پیام خوانا.
 *
 * فرم فعلاً به هیچ سرویسی وصل نیست و درخواست را با ایمیل‌کلاینت خود کاربر
 * ارسال می‌کند. هر وقت خواستید درخواست‌ها جایی ذخیره یا ارسال شوند
 * (ایمیل سرویس، تلگرام، دیتابیس)، فقط همین فایل تغییر می‌کند.
 */
export function formatInquiry(values: InquiryValues) {
  const lines = [
    `نام: ${values.name}`,
    `ایمیل: ${values.email}`,
    values.company ? `شرکت: ${values.company}` : null,
    `نوع پروژه: ${values.projectType}`,
    `بودجه تقریبی: ${values.budget}`,
    "",
    "توضیحات پروژه:",
    values.message,
  ].filter(Boolean);

  return lines.join("\n");
}

export function buildInquiryMailto(values: InquiryValues) {
  const subject = `درخواست پروژه — ${values.projectType} — ${values.name}`;
  const body = formatInquiry(values);

  return `mailto:${siteConfig.email}?subject=${encodeURIComponent(
    subject,
  )}&body=${encodeURIComponent(body)}`;
}
