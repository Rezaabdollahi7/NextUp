import { Reveal } from "@/components/animations/Reveal";
import { Card } from "@/components/ui/card";
import { Icon } from "@/components/ui/icon";
import { Sparkle } from "@/components/ui/sparkle";
import { contactLinks } from "@/data/navigation";

/** راه‌های تماس مستقیم — کنار فرم درخواست پروژه نمایش داده می‌شود. */
export function ContactChannels() {
  return (
    <Reveal delay={0.1} className="flex flex-col gap-4">
      <Card padding="lg" variant="invert">
        <div className="flex items-center gap-2">
          <Sparkle className="size-4" />
          <h2 className="font-display text-lg">تماس مستقیم</h2>
        </div>

        <p className="mt-3 text-sm text-muted">
          اگر ترجیح می‌دهید فرم پر نکنید، از هر کدام از این راه‌ها که راحت‌تر هستید پیام
          بدهید.
        </p>

        <ul className="mt-6 flex flex-col gap-3">
          {contactLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                {...(link.external
                  ? { target: "_blank", rel: "noreferrer noopener" }
                  : {})}
                className="group/channel flex items-center gap-3 rounded-2xl border border-line p-3 transition-colors hover:border-brand"
              >
                <span className="grid size-10 shrink-0 place-items-center rounded-full bg-brand text-ink">
                  <Icon name={link.icon} className="size-4" />
                </span>

                <span className="min-w-0">
                  <span className="block text-xs text-muted">{link.title}</span>
                  <span className="block truncate text-sm" dir="ltr">
                    {link.value ?? link.title}
                  </span>
                </span>
              </a>
            </li>
          ))}
        </ul>
      </Card>

      <Card padding="lg" variant="brand">
        <h2 className="font-display text-lg">قبل از تماس، این را بدانید</h2>
        <ul className="mt-4 flex flex-col gap-2 text-sm text-ink/75">
          <li>— پروژه‌ها را از مرحله‌ی ایده تا انتشار انجام می‌دهیم.</li>
          <li>— مستقیماً با همان کسی حرف می‌زنید که محصول را می‌سازد.</li>
          <li>— اگر پروژه با ما جور نبود، صادقانه می‌گوییم.</li>
        </ul>
      </Card>
    </Reveal>
  );
}
