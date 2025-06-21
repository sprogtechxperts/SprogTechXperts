"use client";

import React, { useEffect, useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Smartphone,
  ShoppingCart,
  Rocket,
  BarChartBig,
  Palette,
  Lightbulb,
  FileText,
  Users,
} from "lucide-react";
import { cn } from "@/lib/utils";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    icon: <Lightbulb className="h-8 w-8" />,
    title: "Custom Website Design",
    description:
      "Craft stunning, intuitive designs that mirror your brand's personality and drive real engagement.",
    tagline: "First impressions matter — we make yours unforgettable.",
    iconColorClass: "text-blue-500",
    bgColorClass: "bg-blue-100 dark:bg-blue-500/20",
    borderColorClass: "border-blue-500",
    taglineColorClass: "text-blue-600 dark:text-blue-400",
  },
  {
    icon: <Smartphone className="h-8 w-8" />,
    title: "Mobile App Development",
    description:
      "Expert mobile app development to scale your business with native iOS and Android applications.",
    tagline: "Native performance, cross-platform reach.",
    iconColorClass: "text-green-500",
    bgColorClass: "bg-green-100 dark:bg-green-500/20",
    borderColorClass: "border-green-500",
    taglineColorClass: "text-green-600 dark:text-green-400",
  },
  {
    icon: <Rocket className="h-8 w-8" />,
    title: "MVP (Minimum Viable Product) Development",
    description:
      "Launch faster with lean, functional MVPs designed for real-world testing and scalable growth.",
    tagline: "From concept to clickable — your product’s journey starts here.",
    iconColorClass: "text-slate-600 dark:text-slate-400",
    bgColorClass: "bg-slate-100 dark:bg-slate-700/20",
    borderColorClass: "border-slate-600 dark:border-slate-400",
    taglineColorClass: "text-slate-500 dark:text-slate-300",
  },
  {
    icon: <ShoppingCart className="h-8 w-8" />,
    title: "E-commerce Solutions",
    description:
      "We develop end-to-end e-commerce stores with seamless checkout, real-time inventory, and full CMS control.",
    tagline: "Turn clicks into customers with a sales-ready online store.",
    iconColorClass: "text-orange-500",
    bgColorClass: "bg-orange-100 dark:bg-orange-500/20",
    borderColorClass: "border-orange-500",
    taglineColorClass: "text-orange-600 dark:text-orange-400",
  },
  {
    icon: <BarChartBig className="h-8 w-8" />,
    title: "SEO & Performance Optimization",
    description:
      "Rank higher. Load faster. Perform better. Our SEO-first approach ensures your site gets seen — and stays seen.",
    tagline: "Visibility that brings in real, organic traffic.",
    iconColorClass: "text-purple-500",
    bgColorClass: "bg-purple-100 dark:bg-purple-500/20",
    borderColorClass: "border-purple-500",
    taglineColorClass: "text-purple-600 dark:text-purple-400",
  },
  {
    icon: <FileText className="h-8 w-8" />,
    title: "CMS Development",
    description:
      "Manage your content effortlessly. We build scalable, intuitive CMS platforms that put you in control.",
    tagline: "Update anything, anytime — no coding needed.",
    iconColorClass: "text-teal-500",
    bgColorClass: "bg-teal-100 dark:bg-teal-500/20",
    borderColorClass: "border-teal-500",
    taglineColorClass: "text-teal-600 dark:text-teal-400",
  },
  {
    icon: <Palette className="h-8 w-8" />,
    title: "UI/UX Designing",
    description:
      "Designs that not only look good but feel right — we craft intuitive, user-focused interfaces that drive real interaction.",
    tagline: "Design that connects users to your vision.",
    iconColorClass: "text-rose-600",
    bgColorClass: "bg-rose-100 dark:bg-rose-500/20",
    borderColorClass: "border-rose-600",
    taglineColorClass: "text-rose-700 dark:text-rose-500",
  },
  {
    icon: <Users className="h-8 w-8" />,
    title: "Social Media Marketing",
    description:
      "Grow your brand with impactful content and targeted strategies that boost engagement and drive results.",
    tagline: "Reach. Engage. Convert.",
    iconColorClass: "text-red-500",
    bgColorClass: "bg-red-100 dark:bg-red-500/20",
    borderColorClass: "border-red-500",
    taglineColorClass: "text-red-600 dark:text-red-400",
  },
];

export function ServicesSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const cardRefs = useRef<HTMLDivElement[]>([]);

 useEffect(() => {
  const cards = cardRefs.current;

  const ctx = gsap.context(() => {
    gsap.set(cards, { opacity: 0, y: 100, scale: 0.8, rotationX: 10 });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 20%",
        end: "bottom 10%",
        toggleActions: "play reverse play reverse",
      },
    });

    tl.to(cards, {
      opacity: 1,
      y: 0,
      scale: 1,
      rotationX: 0,
      duration: 1,
      ease: "back.out(1.7)",
      stagger: {
        each: 0.15,
        from: "start",
      },
    });

    ScrollTrigger.refresh();
  }, sectionRef);

  return () => ctx.revert();
}, []);


  return (
    <section
      id="services"
      ref={sectionRef}
      className="relative isolate py-10 lg:py-16 bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-slate-900 dark:via-slate-950 dark:to-slate-900 overflow-hidden transition-colors duration-500"
    >
      {/* Background glowing circles */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-blue-400 opacity-20 blur-3xl rounded-full -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-500 opacity-10 blur-2xl rounded-full translate-x-1/3 translate-y-1/3" />
      </div>

      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <p className="font-headline text-base text-muted-foreground sm:text-lg tracking-wide uppercase mb-1">
            Services Provided by SprogTechXperts
          </p>
          <h2 className="font-headline text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
            Built to <span className="text-primary dark:text-blue-400">Perform</span>
          </h2>
          <h2 className="font-headline text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-5xl mt-1">
            Designed to <span className="text-amber-500">Impress</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            From concept to launch (and beyond), we deliver strategic digital
            solutions tailored to your goals — helping brands stand out, scale
            up, and stay ahead.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {services.map((service, index) => (
            <Card
              key={service.title}
              ref={(el) => {
                if (el) cardRefs.current[index] = el;
              }}
              className={cn(
                "shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-xl overflow-hidden border-l-8 bg-card",
                service.borderColorClass
              )}
            >
              <CardHeader className="flex flex-row items-start gap-4 p-5 md:p-6">
                <div className={cn("p-3 rounded-lg mt-1 shrink-0", service.bgColorClass)}>
                  {React.cloneElement(service.icon, {
                    className: cn(service.icon.props.className, service.iconColorClass),
                  })}
                </div>
                <CardTitle className="font-headline text-lg md:text-xl leading-tight pt-1">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="px-5 md:px-6 pb-5 md:pb-6 pt-0">
                <p className="text-muted-foreground text-sm mb-3">{service.description}</p>
                <p className={cn("text-xs font-medium", service.taglineColorClass)}>
                  {service.tagline}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
