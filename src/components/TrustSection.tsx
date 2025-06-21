"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Card,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Target, Users, Code2, Handshake } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const trustFactors = [
  {
    icon: <Target className="h-8 w-8 text-indigo-500 dark:text-indigo-400" />,
    title: "Real Experience, Startup Mindset",
    description:
      "We bring years of hands-on software experience with the flexibility and hustle of a startup. Fast, focused, and future-ready.",
  },
  {
    icon: <Users className="h-8 w-8 text-indigo-500 dark:text-indigo-400" />,
    title: "User-Centric, Scalable Solutions",
    description:
      "We focus on core functionality and market validation first — then iterate based on user feedback to ensure your product evolves with your audience.",
  },
  {
    icon: <Code2 className="h-8 w-8 text-indigo-500 dark:text-indigo-400" />,
    title: "Modern Tech, Clean Delivery",
    description:
      "We build using cutting-edge tools like Next.js, Tailwind CSS, Shadcn UI, and PostgreSQL, with strong documentation, clean code, and clear communication at every step.",
  },
  {
    icon: <Handshake className="h-8 w-8 text-indigo-500 dark:text-indigo-400" />,
    title: "Built on Trust & Transparency",
    description:
      "We treat your project like our own. No fluff, no guesswork — just clear progress, honest timelines, and results you can count on.",
  },
];

export function TrustSection() {
  const sectionRef = useRef(null);
  const cardRefs = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      cardRefs.current.forEach((card, index) => {
        gsap.fromTo(
          card,
          {
            x: index % 2 === 0 ? -100 : 100,
            opacity: 0,
          },
          {
            x: 0,
            opacity: 1,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              toggleActions: "play reverse play reverse",
              once: false,
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="trust"
      ref={sectionRef}
      className="relative isolate py-10 md:py-12 bg-gradient-to-br from-[#eef2ff] via-[#e0f2fe] to-[#f5faff] dark:from-[#0a0f2b] dark:via-[#0c1a3c] dark:to-[#0b162e] transition-colors duration-500"
    >
      {/* Glowing background elements similar to About and Hero */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-indigo-500 opacity-20 blur-3xl rounded-full -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-500 opacity-10 blur-2xl rounded-full translate-x-1/3 translate-y-1/3" />
      </div>

      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="font-headline text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white">
            WHY CLIENT{" "}
            <span className="text-indigo-500 dark:text-indigo-400">
              TRUST US
            </span>
          </h2>
          <div className="w-24 h-1 bg-indigo-500 dark:bg-indigo-400 mx-auto mt-4 mb-6 rounded" />
        </div>

        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-2">
          {trustFactors.map((factor, index) => (
            <div
              key={factor.title}
              ref={(el) => {
                if (el) cardRefs.current[index] = el;
              }}
            >
              <Card className="shadow-xl hover:shadow-indigo-400/40 transition-shadow duration-300 rounded-xl border border-indigo-200 dark:border-indigo-700 bg-white dark:bg-zinc-900">
                <CardHeader className="flex flex-row items-start space-x-4 p-6">
                  <div className="p-3 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg mt-1 shrink-0">
                    {factor.icon}
                  </div>
                  <div>
                    <CardTitle className="font-headline text-xl leading-tight text-gray-900 dark:text-gray-100">
                      {factor.title}
                    </CardTitle>
                    <p className="text-gray-700 dark:text-gray-300 text-sm mt-2">
                      {factor.description}
                    </p>
                  </div>
                </CardHeader>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
