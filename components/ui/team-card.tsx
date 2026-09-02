import { MapPin } from "lucide-react";

import { Card } from "@/components/ui/card";
import { Icon } from "@/components/ui/icon";
import { TechBadge } from "@/components/ui/tech-badge";
import { TeamAvatar } from "@/components/ui/team-avatar";
import { toTelHref } from "@/lib/utils";
import type { IconName, TeamMember } from "@/types";

type TeamCardProps = {
  member: TeamMember;
  tone?: "brand" | "ink";
};

type MemberChannel = {
  icon: IconName;
  href: string;
  label: string;
  external?: boolean;
};

/** فقط راه‌های ارتباطی‌ای که برای این عضو ثبت شده‌اند رندر می‌شوند. */
function memberChannels(member: TeamMember): MemberChannel[] {
  const { github, telegram, portfolio, phone, email } = member.links;

  return [
    github && {
      icon: "github" as const,
      href: github,
      label: `گیت‌هاب ${member.name}`,
      external: true,
    },
    telegram && {
      icon: "telegram" as const,
      href: telegram,
      label: `تلگرام ${member.name}`,
      external: true,
    },
    portfolio && {
      icon: "globe" as const,
      href: portfolio,
      label: `وب‌سایت شخصی ${member.name}`,
      external: true,
    },
    phone && {
      icon: "phone" as const,
      href: `tel:${toTelHref(phone)}`,
      label: `تماس با ${member.name} — ${phone}`,
    },
    {
      icon: "mail" as const,
      href: `mailto:${email}`,
      label: `ایمیل ${member.name}`,
    },
  ].filter(Boolean) as MemberChannel[];
}

export function TeamCard({ member, tone = "brand" }: TeamCardProps) {
  const channels = memberChannels(member);

  return (
    <Card
      padding="sm"
      interactive
      className="grid gap-6 sm:grid-cols-[minmax(0,14rem)_1fr]"
    >
      <TeamAvatar
        src={member.image}
        name={member.name}
        tone={tone}
        sizes="(min-width: 640px) 14rem, 100vw"
      />

      <div className="flex flex-col gap-4 px-1 pb-1 sm:py-2 sm:pe-2">
        <div>
          <h3 className="text-display-sm">{member.name}</h3>
          <p className="mt-1 text-sm text-brand-text" dir="ltr">
            {member.role}
          </p>
        </div>

        <p className="inline-flex items-center gap-1.5 text-xs text-muted">
          <MapPin aria-hidden className="size-3.5" />
          {member.location}
        </p>

        <p className="text-sm text-muted">{member.bio}</p>

        <ul className="flex flex-wrap gap-2">
          {member.skills.map((skill) => (
            <li key={skill}>
              <TechBadge name={skill} size="sm" variant="outline" />
            </li>
          ))}
        </ul>

        <ul className="mt-auto flex flex-wrap items-center gap-2 border-t border-line pt-4">
          {channels.map((channel) => (
            <li key={channel.href}>
              <a
                href={channel.href}
                aria-label={channel.label}
                title={channel.label}
                {...(channel.external
                  ? { target: "_blank", rel: "noreferrer noopener" }
                  : {})}
                className="grid size-10 place-items-center rounded-full border border-line transition-colors hover:border-brand hover:bg-brand"
              >
                <Icon name={channel.icon} className="size-4" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </Card>
  );
}
