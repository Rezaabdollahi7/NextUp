import type { Metadata, Viewport } from "next";

import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { SmoothScroll } from "@/components/providers/SmoothScroll";
import { siteConfig } from "@/constants/site";
import { fontVariables } from "@/lib/fonts";

import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} — ${siteConfig.tagline}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
};

export const viewport: Viewport = {
  themeColor: "#1a120a",
  colorScheme: "light",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="fa" dir="rtl" className={`${fontVariables} h-full`}>
      <head>
        {/*
          کلاس `js` قبل از اولین رنگ‌آمیزی اضافه می‌شود تا عناصر انیمیشن‌دار
          بدون پرش، پنهان شروع کنند و در نبود جاوااسکریپت همیشه دیده شوند.
        */}
        <script
          dangerouslySetInnerHTML={{
            __html: `document.documentElement.classList.add("js")`,
          }}
        />
      </head>
      <body className="flex min-h-full flex-col">
        <a
          href="#main"
          className="sr-only rounded-pill bg-brand px-5 py-3 text-sm font-medium text-ink focus:not-sr-only focus:absolute focus:end-4 focus:top-4 focus:z-50 focus:ring-ink"
        >
          پرش به محتوای اصلی
        </a>

        <SmoothScroll />
        <Navbar />

        <main id="main" className="flex-1 pt-24 sm:pt-28">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}
