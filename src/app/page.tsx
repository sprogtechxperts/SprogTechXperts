import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { TrustSection } from "@/components/TrustSection";
import { ServicesSection } from "@/components/ServicesSection";
import { DeviceOptimizationSection } from "@/components/DeviceOptimizationSection";
import { TechnologiesSection } from "@/components/TechnologiesSection";
import { WorkflowSection } from "@/components/WorkflowSection";
import { ContactFormSection } from "@/components/ContactFormSection";
import { Footer } from "@/components/Footer";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <AboutSection />
        <TrustSection />
        <ServicesSection />
        <DeviceOptimizationSection />
        <TechnologiesSection />
        <WorkflowSection />
        <ContactFormSection />
      </main>
      <Footer />
    </div>
  );
}
