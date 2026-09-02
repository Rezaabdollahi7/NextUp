import { siteConfig } from "@/constants/site";
import { services } from "@/data/services";
import { team } from "@/data/team";
import { toTelHref } from "@/lib/utils";

/**
 * داده‌ی ساختاریافته‌ی سازمان.
 *
 * `ProfessionalService` زیرمجموعه‌ی `Organization` است و برای یک استودیوی
 * توسعه‌ی نرم‌افزار دقیق‌تر است؛ بنابراین یک گراف واحد کافی است.
 */
export function StructuredData() {
  const sameAs = [siteConfig.github, siteConfig.telegram].filter(Boolean);

  const data = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${siteConfig.url}/#organization`,
    name: siteConfig.name,
    alternateName: "نکست‌آپ",
    url: siteConfig.url,
    description: siteConfig.description,
    email: siteConfig.email,
    ...(siteConfig.phone ? { telephone: toTelHref(siteConfig.phone) } : {}),
    ...(sameAs.length ? { sameAs } : {}),
    inLanguage: "fa-IR",
    areaServed: { "@type": "Country", name: "Iran" },
    knowsAbout: [
      "Web Development",
      "Web Applications",
      "SaaS Development",
      "E-Commerce",
      "Full-Stack Development",
    ],
    founder: team.map((member) => ({
      "@type": "Person",
      name: member.name,
      jobTitle: member.role,
      ...(member.links.portfolio ? { url: member.links.portfolio } : {}),
    })),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "خدمات NextUp",
      itemListElement: services.map((service) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service.title,
          description: service.description,
        },
      })),
    },
  };

  return (
    <script
      type="application/ld+json"
      // محتوای این اسکریپت از داده‌های خود پروژه ساخته می‌شود، نه ورودی کاربر.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
