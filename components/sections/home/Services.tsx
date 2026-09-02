"use client";

import { Reveal } from "@/components/animations/Reveal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { services } from "@/data/services";

/**
 * فهرست خدمات به شکل آکاردئون — آیتم باز کارت تیره می‌شود، دقیقاً مثل قالب.
 * اولین خدمت به‌صورت پیش‌فرض باز است تا بخش خالی به نظر نرسد.
 */
export function ServicesAccordion() {
  return (
    <Accordion
      type="single"
      collapsible
      defaultValue={services[0].id}
      className="flex flex-col gap-3"
      asChild
    >
      <Reveal stagger>
        {services.map((service) => (
          <AccordionItem key={service.id} value={service.id}>
            <AccordionTrigger>
              <h3 className="text-display-sm">{service.title}</h3>
            </AccordionTrigger>

            <AccordionContent>
              <div className="grid gap-5 lg:grid-cols-[1.4fr_1fr] lg:items-start lg:gap-10">
                <p className="max-w-2xl text-sm text-muted">{service.description}</p>

                <ul className="flex flex-wrap gap-2">
                  {service.highlights.map((highlight) => (
                    <li key={highlight}>
                      <Badge size="sm" variant="outline">
                        {highlight}
                      </Badge>
                    </li>
                  ))}
                </ul>
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Reveal>
    </Accordion>
  );
}
