import type { NavItem, TeamMember } from "@/types";

export const team: TeamMember[] = [
  {
    id: "reza-abdollahi",
    name: "رضا عبدالهی",
    role: "Software Engineer · Full-Stack",
    location: "تهران",
    bio: "مهندس نرم‌افزار با ۳ سال تجربه در توسعه محصولات وب مدرن و SaaS. تجربه ساخت و توسعه محصولات از مرحله ایده تا محیط Production را دارد.",
    focus: [
      "React",
      "TypeScript",
      "Node.js",
      "Backend Architecture",
      "SaaS Architecture",
      "Multi-Tenant Systems",
    ],
    skills: ["React", "TypeScript", "Node.js", "Prisma", "PostgreSQL", "Docker"],
    links: {
      github: "https://github.com/Rezaabdollahi7",
      portfolio: "https://srezadev.ir",
      telegram: "https://t.me/rezaabdollahi7",
      phone: "0921 981 1980",
      email: "srezaabdollahi7@gmail.com",
    },
  },
  {
    id: "mahdi-bagheri",
    name: "مهدی باقری",
    role: "Frontend Developer · Next.js / React",
    location: "اصفهان",
    bio: "توسعه‌دهنده Frontend با تمرکز بر ساخت رابط‌های کاربری مدرن، سریع و حرفه‌ای. تجربه در تبدیل ایده‌های پیچیده محصولات به تجربه‌های کاربری ساده و حرفه‌ای.",
    focus: ["Next.js", "React", "TypeScript", "Design Systems", "Modern UI Development"],
    skills: ["Next.js", "React", "TypeScript", "Tailwind CSS", "shadcn/ui", "NestJS"],
    links: {
      portfolio: "https://mahdibagheridev.ir",
      telegram: "https://t.me/MB_7_13",
      phone: "0936 853 5209",
      email: "mahdibagherichanel@gmail.com",
    },
  },
];

/** لینک پورتفولیوی اعضا — در فوتر نمایش داده می‌شود. */
export const teamLinks: NavItem[] = team
  .filter((member) => Boolean(member.links.portfolio))
  .map((member) => ({
    title: member.name,
    href: member.links.portfolio as string,
    external: true,
  }));
