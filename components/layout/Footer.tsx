import Link from "next/link";

import { Container } from "@/components/layout/Container";
import { Logo } from "@/components/layout/Logo";
import { Icon } from "@/components/ui/icon";
import { SplitButton } from "@/components/ui/split-button";
import { siteConfig } from "@/constants/site";
import { contactLinks, footerNav, socialLinks } from "@/data/navigation";
import { teamLinks } from "@/data/team";

export function Footer() {
  const year = new Intl.DateTimeFormat("fa-IR", { year: "numeric" }).format(new Date());

  return (
    <footer className="border-t-4 border-brand">
      <div className="bg-surface-soft">
        <Container className="py-14 lg:py-20">
          <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
            <h2 className="max-w-xl text-display-lg text-balance">
              بیایید ایده‌تان را <span className="text-brand-text">شروع</span> کنیم
            </h2>
            <SplitButton href="/contact">تماس با ما</SplitButton>
          </div>

          <hr className="my-10 border-line lg:my-14" />

          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr_1fr]">
            <div className="max-w-sm">
              <Logo size="md" />
              <p className="mt-5 text-sm text-muted">
                NextUp یک تیم دو نفره‌ی توسعه نرم‌افزار است که ایده‌ها و نیازهای
                کسب‌وکارها را به محصولات دیجیتال واقعی تبدیل می‌کند.
              </p>
              <ul className="mt-6 flex items-center gap-2">
                {socialLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      aria-label={link.title}
                      {...(link.external
                        ? { target: "_blank", rel: "noreferrer noopener" }
                        : {})}
                      className="grid size-10 place-items-center rounded-full bg-brand text-ink transition-colors hover:bg-ink hover:text-brand"
                    >
                      <Icon name={link.icon} className="size-4" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {footerNav.map((group) => (
              <nav key={group.title} aria-labelledby={`footer-${group.title}`}>
                <h3
                  id={`footer-${group.title}`}
                  className="text-sm font-black text-brand-text"
                >
                  {group.title}
                </h3>
                <ul className="mt-4 space-y-1">
                  {group.items.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className="inline-block py-1.5 text-sm text-muted transition-colors hover:text-on-surface"
                      >
                        {item.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}

            <div>
              <h3 className="text-sm font-black text-brand-text">ارتباط</h3>
              <ul className="mt-4 space-y-1">
                {contactLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      {...(link.external
                        ? { target: "_blank", rel: "noreferrer noopener" }
                        : {})}
                      className="inline-flex items-center gap-2 py-1.5 text-sm text-muted transition-colors hover:text-on-surface"
                      dir="ltr"
                    >
                      <Icon name={link.icon} className="size-4 shrink-0" />
                      {link.value ?? link.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-black text-brand-text">تیم</h3>
              <ul className="mt-4 space-y-1">
                {teamLinks.map((member) => (
                  <li key={member.href}>
                    <a
                      href={member.href}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="inline-block py-1.5 text-sm text-muted transition-colors hover:text-on-surface"
                    >
                      {member.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </div>

      <div
        data-surface="dark"
        className="border-t-4 border-brand bg-surface text-on-surface"
      >
        <Container className="flex flex-col items-center justify-between gap-2 py-5 text-xs sm:flex-row">
          <p className="text-muted">
            © {year} {siteConfig.name}. تمام حقوق محفوظ است.
          </p>
          <p className="text-muted">ساخته‌شده با Next.js و علاقه در ایران</p>
        </Container>
      </div>
    </footer>
  );
}
