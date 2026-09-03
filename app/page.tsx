import type { Metadata } from "next";

import { FinalCTA } from "@/components/sections/home/FinalCTA";
import { Hero } from "@/components/sections/home/Hero";
import { Introduction } from "@/components/sections/home/Introduction";
import { Process } from "@/components/sections/home/Process";
import { SelectedProjects } from "@/components/sections/home/SelectedProjects";
import { ServicesSection } from "@/components/sections/home/ServicesSection";
import { TechStack } from "@/components/sections/home/TechStack";
import { Team } from "@/components/sections/home/Team";
import { Testimonials } from "@/components/sections/home/Testimonials";
import { WhyNextUp } from "@/components/sections/home/WhyNextUp";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <Introduction />
      <ServicesSection />
      <SelectedProjects />
      <Testimonials />
      <WhyNextUp />
      <Process />
      <TechStack />
      <Team />
      <FinalCTA />
    </>
  );
}
