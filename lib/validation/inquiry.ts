import { z } from "zod";

export const projectTypes = [
  "وب‌سایت",
  "وب‌اپلیکیشن",
  "محصول SaaS",
  "فروشگاه اینترنتی",
  "توسعه محصول دیجیتال",
  "موردی غیر از این‌ها",
] as const;

/**
 * بازه‌های بودجه — این مقادیر پیشنهادی‌اند و به‌راحتی قابل تغییرند.
 * واحد: تومان.
 */
export const budgetRanges = [
  "کمتر از ۵۰ میلیون",
  "۵۰ تا ۱۵۰ میلیون",
  "۱۵۰ تا ۳۰۰ میلیون",
  "بیش از ۳۰۰ میلیون",
  "هنوز مشخص نیست",
] as const;

export const inquirySchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, { message: "نام را کامل وارد کنید." })
    .max(80, { message: "نام طولانی‌تر از حد مجاز است." }),

  email: z.email({ message: "ایمیل معتبر وارد کنید." }),

  company: z
    .string()
    .trim()
    .max(80, { message: "نام شرکت طولانی‌تر از حد مجاز است." })
    .optional()
    .or(z.literal("")),

  projectType: z.enum(projectTypes, { message: "نوع پروژه را انتخاب کنید." }),

  budget: z.enum(budgetRanges, { message: "بازه بودجه را انتخاب کنید." }),

  message: z
    .string()
    .trim()
    .min(20, { message: "کمی بیشتر از پروژه بنویسید — دست‌کم ۲۰ کاراکتر." })
    .max(2000, { message: "توضیحات طولانی‌تر از حد مجاز است." }),
});

export type InquiryValues = z.infer<typeof inquirySchema>;
