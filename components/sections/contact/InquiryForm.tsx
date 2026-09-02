"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowLeft, CheckCircle2, RotateCcw } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";

import { Button, ButtonIcon } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Field, Input, Select, Textarea } from "@/components/ui/field";
import { siteConfig } from "@/constants/site";
import { buildInquiryMailto } from "@/lib/inquiry";
import {
  budgetRanges,
  inquirySchema,
  projectTypes,
  type InquiryValues,
} from "@/lib/validation/inquiry";

export function InquiryForm() {
  const [sent, setSent] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<InquiryValues>({
    resolver: zodResolver(inquirySchema),
    mode: "onBlur",
    defaultValues: {
      name: "",
      email: "",
      company: "",
      message: "",
    },
  });

  const onSubmit = (values: InquiryValues) => {
    // فرم به سرویسی وصل نیست؛ درخواست با ایمیل‌کلاینت خود کاربر ارسال می‌شود.
    window.location.assign(buildInquiryMailto(values));
    setSent(true);
  };

  if (sent) {
    return (
      <Card padding="lg" className="flex flex-col items-start gap-4">
        <span className="grid size-12 place-items-center rounded-full bg-brand text-ink">
          <CheckCircle2 className="size-6" />
        </span>

        <h3 className="text-display-sm">درخواست شما آماده‌ی ارسال شد</h3>

        <p className="text-sm text-muted">
          ایمیل‌کلاینت شما با متن درخواست باز شد؛ کافی است آن را ارسال کنید. اگر باز نشد،
          مستقیماً به{" "}
          <a
            href={`mailto:${siteConfig.email}`}
            className="text-brand-text underline underline-offset-4"
            dir="ltr"
          >
            {siteConfig.email}
          </a>{" "}
          بنویسید.
        </p>

        <Button
          type="button"
          variant="outline"
          onClick={() => {
            reset();
            setSent(false);
          }}
        >
          <RotateCcw className="size-4" />
          ارسال درخواست دیگر
        </Button>
      </Card>
    );
  }

  return (
    <Card padding="lg">
      <form onSubmit={handleSubmit(onSubmit)} noValidate className="flex flex-col gap-5">
        <div className="grid gap-5 sm:grid-cols-2">
          <Field label="نام" htmlFor="name" error={errors.name?.message}>
            <Input
              id="name"
              autoComplete="name"
              placeholder="نام و نام خانوادگی"
              aria-invalid={Boolean(errors.name)}
              aria-describedby={errors.name ? "name-error" : undefined}
              {...register("name")}
            />
          </Field>

          <Field label="ایمیل" htmlFor="email" error={errors.email?.message}>
            <Input
              id="email"
              type="email"
              dir="ltr"
              autoComplete="email"
              placeholder="you@example.com"
              aria-invalid={Boolean(errors.email)}
              aria-describedby={errors.email ? "email-error" : undefined}
              {...register("email")}
            />
          </Field>
        </div>

        <Field
          label="نام شرکت"
          htmlFor="company"
          optional
          error={errors.company?.message}
        >
          <Input
            id="company"
            autoComplete="organization"
            placeholder="اگر از طرف یک کسب‌وکار تماس می‌گیرید"
            aria-invalid={Boolean(errors.company)}
            {...register("company")}
          />
        </Field>

        <div className="grid gap-5 sm:grid-cols-2">
          <Field
            label="نوع پروژه"
            htmlFor="projectType"
            error={errors.projectType?.message}
          >
            <Select
              id="projectType"
              defaultValue=""
              aria-invalid={Boolean(errors.projectType)}
              {...register("projectType")}
            >
              <option value="" disabled>
                انتخاب کنید
              </option>
              {projectTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </Select>
          </Field>

          <Field
            label="بودجه تقریبی"
            htmlFor="budget"
            hint="واحد: تومان"
            error={errors.budget?.message}
          >
            <Select
              id="budget"
              defaultValue=""
              aria-invalid={Boolean(errors.budget)}
              {...register("budget")}
            >
              <option value="" disabled>
                انتخاب کنید
              </option>
              {budgetRanges.map((range) => (
                <option key={range} value={range}>
                  {range}
                </option>
              ))}
            </Select>
          </Field>
        </div>

        <Field
          label="توضیحات پروژه"
          htmlFor="message"
          hint="چه چیزی می‌خواهید بسازید و چه مشکلی را باید حل کند؟"
          error={errors.message?.message}
        >
          <Textarea
            id="message"
            placeholder="هرچه بیشتر بنویسید، جواب دقیق‌تری می‌گیرید."
            aria-invalid={Boolean(errors.message)}
            aria-describedby={errors.message ? "message-error" : "message-hint"}
            {...register("message")}
          />
        </Field>

        <div className="flex flex-wrap items-center justify-between gap-4 border-t border-line pt-5">
          <p className="text-xs text-muted">
            اطلاعات شما فقط برای پاسخ به همین درخواست استفاده می‌شود.
          </p>

          <Button type="submit" size="lg" trailingIcon disabled={isSubmitting}>
            ارسال درخواست
            <ButtonIcon>
              <ArrowLeft className="size-5" />
            </ButtonIcon>
          </Button>
        </div>
      </form>
    </Card>
  );
}
