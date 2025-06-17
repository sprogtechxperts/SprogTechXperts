import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function HeroSection() {
  return (
    <section id="hero" className="w-full py-20 md:py-32 lg:py-40 bg-sky-50 dark:bg-slate-800">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="font-headline text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
            Empowering Tomorrow’s Brands,
            <br />
            Today
          </h1>
          <div className="mt-6 space-y-6 text-lg leading-8 text-muted-foreground sm:text-xl">
            <p>
              SPROGTechXperts crafts intelligent, high-performance digital products that turn bold ideas into future-proof solutions. From sleek web platforms to enterprise-grade software and AI-driven systems — we build for impact, scale, and longevity.
            </p>
            <p>
              Driven by innovation and powered by modern technologies, we help startups and enterprises move from concept to code — faster, smarter, and with confidence.
            </p>
          </div>
          <div className="mt-10 flex items-center justify-center">
            <Button asChild size="lg" className="bg-purple-600 hover:bg-purple-700 text-primary-foreground shadow-lg hover:shadow-purple-600/50 transition-shadow">
              <Link href="#contact">
                Let’s Talk Solutions
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
