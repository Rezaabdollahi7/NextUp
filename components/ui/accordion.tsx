"use client";

import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { Plus } from "lucide-react";
import type { ComponentProps } from "react";

import { cn } from "@/lib/utils";

/**
 * آکاردئون بر پایه‌ی Radix — دسترس‌پذیری، پیمایش با صفحه‌کلید و انیمیشن ارتفاع
 * را فراهم می‌کند. آیتم باز با کلاس `surface-dark` پالت تیره می‌گیرد،
 * دقیقاً مثل قالب.
 */
export const Accordion = AccordionPrimitive.Root;

export function AccordionItem({
  className,
  ...props
}: ComponentProps<typeof AccordionPrimitive.Item>) {
  return (
    <AccordionPrimitive.Item
      className={cn(
        "group/accordion rounded-card border border-line bg-card transition-colors duration-500",
        "data-[state=open]:bg-surface data-[state=open]:surface-dark",
        "data-[state=open]:border-transparent",
        className,
      )}
      {...props}
    />
  );
}

export function AccordionTrigger({
  className,
  children,
  ...props
}: ComponentProps<typeof AccordionPrimitive.Trigger>) {
  return (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        className={cn(
          "flex flex-1 items-center justify-between gap-4 p-5 text-start sm:p-6",
          "outline-none",
          className,
        )}
        {...props}
      >
        {children}
        <span
          aria-hidden
          className={cn(
            "grid size-10 shrink-0 place-items-center rounded-full bg-brand text-ink sm:size-11",
            "transition-transform duration-500 ease-out-expo",
            "group-data-[state=open]/accordion:rotate-[135deg]",
          )}
        >
          <Plus className="size-5" />
        </span>
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  );
}

export function AccordionContent({
  className,
  children,
  ...props
}: ComponentProps<typeof AccordionPrimitive.Content>) {
  return (
    <AccordionPrimitive.Content
      className={cn(
        "overflow-hidden",
        "data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
      )}
      {...props}
    >
      <div className={cn("px-5 pb-6 sm:px-6", className)}>{children}</div>
    </AccordionPrimitive.Content>
  );
}
