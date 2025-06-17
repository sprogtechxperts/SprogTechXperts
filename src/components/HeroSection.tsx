import { Button } from "@/components/ui/button";
import Link from "next/link";

export function HeroSection() {
  return (
    <section id="hero" className="w-full py-20 md:py-32 lg:py-40 bg-primary/10 dark:bg-neutral-800">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="font-headline text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
            Empowering Tomorrow’s Brands, <span className="text-primary">Today</span>
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground sm:text-xl">
            SmoothTechExperts is dedicated to transforming your innovative ideas into powerful digital solutions. We craft bespoke websites, robust mobile applications, and scalable e-commerce platforms that drive growth and deliver exceptional user experiences.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button asChild size="lg" className="shadow-lg hover:shadow-primary/50 transition-shadow">
              <Link href="#contact">Get Started</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="shadow-lg hover:shadow-md transition-shadow">
              <Link href="#services">Learn More</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
