import { ChevronDown } from "lucide-react";
import type { ComponentProps, ReactNode } from "react";

import { cn } from "@/lib/utils";

const controlBase = [
  "w-full rounded-2xl border border-line bg-card px-4 text-sm text-on-surface",
  "placeholder:text-muted/70 transition-colors duration-300",
  "hover:border-on-surface/25 focus-visible:border-brand",
  "aria-[invalid=true]:border-danger",
].join(" ");

export function Input({ className, ...props }: ComponentProps<"input">) {
  return <input className={cn(controlBase, "h-12", className)} {...props} />;
}

export function Textarea({ className, ...props }: ComponentProps<"textarea">) {
  return (
    <textarea
      className={cn(controlBase, "min-h-36 resize-y py-3", className)}
      {...props}
    />
  );
}

/**
 * انتخابگر بومی مرورگر با ظاهر برند.
 * عمداً از کامپوننت سفارشی استفاده نشده: `select` بومی روی موبایل تجربه‌ی
 * بهتری دارد، با صفحه‌کلید و صفحه‌خوان کاملاً کار می‌کند و هیچ وابستگی
 * اضافه‌ای نمی‌خواهد.
 */
export function Select({ className, children, ...props }: ComponentProps<"select">) {
  return (
    <div className="relative">
      <select
        className={cn(controlBase, "h-12 appearance-none ps-10 pe-4", className)}
        {...props}
      >
        {children}
      </select>
      <ChevronDown
        aria-hidden
        className="pointer-events-none absolute start-4 top-1/2 size-4 -translate-y-1/2 text-muted"
      />
    </div>
  );
}

type FieldProps = {
  label: string;
  htmlFor: string;
  /** پیام خطای اعتبارسنجی. */
  error?: string;
  /** توضیح کوتاه زیر برچسب. */
  hint?: string;
  optional?: boolean;
  children: ReactNode;
};

/** یک ردیف فرم: برچسب، کنترل و پیام خطا با ارتباط ARIA درست. */
export function Field({
  label,
  htmlFor,
  error,
  hint,
  optional = false,
  children,
}: FieldProps) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={htmlFor} className="text-sm font-medium">
        {label}
        {optional ? <span className="me-1 text-xs text-muted"> (اختیاری)</span> : null}
      </label>

      {hint ? (
        <p id={`${htmlFor}-hint`} className="text-xs text-muted">
          {hint}
        </p>
      ) : null}

      {children}

      {error ? (
        <p id={`${htmlFor}-error`} role="alert" className="text-xs text-danger">
          {error}
        </p>
      ) : null}
    </div>
  );
}
