import { Hero } from "@/components/sections/home/Hero";
import { Introduction } from "@/components/sections/home/Introduction";
import { SelectedProjects } from "@/components/sections/home/SelectedProjects";
import { ServicesSection } from "@/components/sections/home/ServicesSection";
import { WhyNextUp } from "@/components/sections/home/WhyNextUp";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Introduction />
      <ServicesSection />
      <SelectedProjects />
      <WhyNextUp />
    </>
  );
}
