import { Smartphone } from "lucide-react";
import Image from 'next/image';

export function DeviceOptimizationSection() {
  return (
    <section id="optimization" className="py-16 md:py-24 lg:py-32 bg-sky-50 dark:bg-slate-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="bg-card p-8 md:p-12 rounded-3xl shadow-xl border-l-[6px] md:border-l-8 border-primary">
          <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
            {/* Left Column: Text content */}
            <div>
              {/* Pill */}
              <div className="mb-6">
                <span className="bg-primary/10 text-primary text-xs font-semibold px-4 py-2 rounded-full inline-flex items-center">
                  <Smartphone className="w-4 h-4 mr-2" />
                  Mobile-First Approach
                </span>
              </div>

              {/* Title */}
              <h2 className="font-headline text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Optimized for Every Device
              </h2>

              {/* Description */}
              <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-8">
                With mobile traffic accounting for over 60% of web usage, we ensure
                your website delivers exceptional performance across all devices.
                Our responsive designs adapt seamlessly from desktop to tablet to
                smartphone.
              </p>

              {/* Stats */}
              <div className="flex flex-col sm:flex-row sm:items-center space-y-6 sm:space-y-0 sm:space-x-12">
                <div className="text-center sm:text-left">
                  <p className="text-4xl md:text-5xl font-bold text-green-600 dark:text-green-400">99%</p>
                  <p className="text-sm text-muted-foreground mt-1">Mobile Compatibility</p>
                </div>
                <div className="text-center sm:text-left">
                  <p className="text-4xl md:text-5xl font-bold text-orange-500 dark:text-orange-400">&lt;3s</p>
                  <p className="text-sm text-muted-foreground mt-1">Load Time</p>
                </div>
              </div>
            </div>

            {/* Right Column: Image */}
            <div className="relative flex items-center justify-center mt-8 md:mt-0">
              <Image
                src="https://placehold.co/500x350.png"
                alt="Illustration of responsive devices: laptop, tablet, and smartphone"
                width={500}
                height={350}
                className="rounded-lg object-contain w-full max-w-md h-auto"
                data-ai-hint="responsive devices illustration"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
