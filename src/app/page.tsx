import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { TrustSection } from "@/components/TrustSection";
import { ServicesSection } from "@/components/ServicesSection";
import { DeviceOptimizationSection } from "@/components/DeviceOptimizationSection";
import { TechnologiesSection } from "@/components/TechnologiesSection";
import { ContactFormSection } from "@/components/ContactFormSection";
import { Footer } from "@/components/Footer";
import { TeamSection } from "@/components/TeamSection";
import { AboutIntro } from "@/components/AboutIntro";
import { ProjectWorkflowSection } from "@/components/ProjectWorkflowSection";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <AboutIntro/>
        <AboutSection />
        <TrustSection />
        <ServicesSection />
        <DeviceOptimizationSection />
        <TechnologiesSection />
        <ProjectWorkflowSection/>
        <TeamSection/>
        <ContactFormSection />
      </main>
      <Footer />
    </div>
  );
}
