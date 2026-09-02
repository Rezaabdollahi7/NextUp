import { Globe, MapPin } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Icon } from "@/components/ui/icon";
import { TeamAvatar } from "@/components/ui/team-avatar";
import type { TeamMember } from "@/types";

type TeamCardProps = {
  member: TeamMember;
  tone?: "brand" | "ink";
};

export function TeamCard({ member, tone = "brand" }: TeamCardProps) {
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
          <p className="mt-1 text-sm text-brand" dir="ltr">
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
              <Badge size="sm" variant="outline">
                {skill}
              </Badge>
            </li>
          ))}
        </ul>

        <div className="mt-auto flex items-center gap-2 border-t border-line pt-4">
          {member.links.github ? (
            <a
              href={member.links.github}
              target="_blank"
              rel="noreferrer noopener"
              aria-label={`گیت‌هاب ${member.name}`}
              className="grid size-10 place-items-center rounded-full border border-line transition-colors hover:border-brand hover:bg-brand"
            >
              <Icon name="github" className="size-4" />
            </a>
          ) : null}

          {member.links.portfolio ? (
            <a
              href={member.links.portfolio}
              target="_blank"
              rel="noreferrer noopener"
              aria-label={`وب‌سایت شخصی ${member.name}`}
              className="grid size-10 place-items-center rounded-full border border-line transition-colors hover:border-brand hover:bg-brand"
            >
              <Globe aria-hidden className="size-4" />
            </a>
          ) : null}

          <a
            href={`mailto:${member.links.email}`}
            aria-label={`ایمیل ${member.name}`}
            className="grid size-10 place-items-center rounded-full border border-line transition-colors hover:border-brand hover:bg-brand"
          >
            <Icon name="mail" className="size-4" />
          </a>
        </div>
      </div>
    </Card>
  );
}
