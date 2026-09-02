"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { ArrowLeft, Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

import { Logo } from "@/components/layout/Logo";
import { Button, ButtonIcon } from "@/components/ui/button";
import { Icon } from "@/components/ui/icon";
import { mainNav, socialLinks } from "@/data/navigation";
import { cn } from "@/lib/utils";

/** منوی تمام‌صفحه‌ی موبایل. */
export function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger asChild>
        <button
          type="button"
          aria-label="باز کردن منو"
          className={cn(
            "grid size-11 shrink-0 place-items-center rounded-full text-on-surface",
            "border border-line transition-colors hover:bg-on-surface/8 lg:hidden",
          )}
        >
          <Menu className="size-5" />
        </button>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-ink/60 backdrop-blur-sm data-[state=closed]:animate-out data-[state=closed]:fade-out data-[state=open]:animate-in data-[state=open]:fade-in lg:hidden" />
        <Dialog.Content
          data-surface="dark"
          className={cn(
            "fixed inset-x-3 top-3 z-50 rounded-panel bg-surface p-5 text-on-surface lg:hidden",
            "data-[state=closed]:animate-out data-[state=open]:animate-in",
            "data-[state=closed]:slide-out-to-top-4 data-[state=open]:slide-in-from-top-4",
            "duration-300 data-[state=closed]:fade-out data-[state=open]:fade-in",
          )}
        >
          <Dialog.Title className="sr-only">منوی اصلی</Dialog.Title>

          <div className="flex items-center justify-between">
            <Logo />
            <Dialog.Close asChild>
              <button
                type="button"
                aria-label="بستن منو"
                className="grid size-11 place-items-center rounded-full border border-line transition-colors hover:bg-on-surface/8"
              >
                <X className="size-5" />
              </button>
            </Dialog.Close>
          </div>

          <nav className="mt-6">
            <ul className="flex flex-col">
              {mainNav.map((item) => (
                <li key={item.href} className="border-b border-line last:border-0">
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="block py-4 font-display text-xl font-black transition-colors hover:text-brand"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="mt-6 flex items-center justify-between gap-3">
            <Button asChild trailingIcon className="flex-1">
              <Link href="/contact" onClick={() => setOpen(false)}>
                شروع پروژه
                <ButtonIcon>
                  <ArrowLeft className="size-4" />
                </ButtonIcon>
              </Link>
            </Button>

            <div className="flex items-center gap-2">
              {socialLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  aria-label={link.title}
                  {...(link.external
                    ? { target: "_blank", rel: "noreferrer noopener" }
                    : {})}
                  className="grid size-11 place-items-center rounded-full border border-line transition-colors hover:border-brand hover:bg-brand hover:text-ink"
                >
                  <Icon name={link.icon} className="size-4" />
                </a>
              ))}
            </div>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
