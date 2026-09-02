export type TechGroup = {
  id: string;
  title: string;
  items: string[];
};

/** تکنولوژی‌هایی که در ساخت محصولات استفاده می‌کنیم — بند ۱۹ سند پروژه. */
export const techStack: TechGroup[] = [
  {
    id: "frontend",
    title: "Frontend",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "shadcn/ui", "Zustand"],
  },
  {
    id: "backend",
    title: "Backend",
    items: ["Node.js", "Express", "NestJS", "Prisma", "PostgreSQL"],
  },
  {
    id: "infrastructure",
    title: "Infrastructure",
    items: ["Docker", "Vercel", "Git"],
  },
  {
    id: "quality",
    title: "Quality & Security",
    items: ["Zod", "JWT", "RBAC", "Jest"],
  },
  {
    id: "realtime",
    title: "Real-Time",
    items: ["Socket.IO"],
  },
];
