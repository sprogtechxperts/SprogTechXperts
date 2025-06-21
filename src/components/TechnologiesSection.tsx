"use client";

import * as React from "react";
import { useEffect, useRef } from "react";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import techIcons from "@/lib/techIcons";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

const technologyCategories = [
  {
    name: "FRONTEND",
    value: "frontend",
    technologies: [
      { name: "React", key: "react" },
      { name: "Next.js", key: "nextjs" },
      { name: "Angular", key: "angular" },
      { name: "Vue.js", key: "vuejs" },
    ],
  },
  {
    name: "BACKEND",
    value: "backend",
    technologies: [
      { name: "Node.js", key: "nodejs" },
      { name: "Python", key: "python" },
      { name: "Java", key: "java" },
      { name: "PHP", key: "php" },
    ],
  },
  {
    name: "UI/UX",
    value: "ui-ux",
    technologies: [
      { name: "Figma", key: "figma" },
      { name: "Adobe", key: "adobe" },
      { name: "Canva", key: "canva" },
    ],
  },
  {
    name: "DATABASE",
    value: "database",
    technologies: [
      { name: "PostgreSQL", key: "postgresql" },
      { name: "MongoDB", key: "mongodb" },
      { name: "MySQL", key: "mysql" },
      { name: "Firebase", key: "firebase" },
    ],
  },
  {
    name: "DEPLOYMENT & CLOUD",
    value: "devops",
    technologies: [
      { name: "AWS", key: "aws" },
      { name: "Docker", key: "docker" },
      { name: "Vercel", key: "vercel" },
      { name: "Netlify", key: "netlify" },
    ],
  },
];

export function TechnologiesSection() {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const tabRef = useRef(null);
  const iconRefs = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        headingRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 80%",
          },
        }
      );

      gsap.fromTo(
        tabRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          delay: 0.2,
          scrollTrigger: {
            trigger: tabRef.current,
            start: "top 85%",
          },
        }
      );

      gsap.fromTo(
        iconRefs.current,
        { opacity: 0, scale: 0.8 },
        {
          opacity: 1,
          scale: 1,
          stagger: 0.08,
          duration: 0.5,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <motion.section
      id="technologies"
      ref={sectionRef}
      className="relative isolate py-8 md:py-16 lg:py-16 bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
      viewport={{ once: true }}
    >
      {/* Glowing Lights */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div className="absolute left-1/3 top-1/4 w-80 h-80 bg-indigo-500 opacity-20 blur-3xl rounded-full" />
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-teal-400 opacity-10 blur-2xl rounded-full" />
      </div>

      <div className="container mx-auto px-4 md:px-6 text-center">
        <motion.div ref={headingRef} className="mb-12 md:mb-16">
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold font-headline text-foreground"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            What Powers Our Projects
          </motion.h2>
          <motion.p
            className="mt-4 text-lg max-w-2xl mx-auto text-muted-foreground"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.1 }}
          >
            Smart tools. Strong results. We craft with a stack trusted by top
            startups and enterprises alike.
          </motion.p>
        </motion.div>

        <Tabs defaultValue="frontend" className="w-full" ref={tabRef}>
          <motion.div
            className="w-full overflow-x-auto scrollbar-hide mb-10 flex justify-center"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <TabsList className="flex gap-2 px-3 py-6 md:py-7 bg-muted rounded-full max-w-full sm:max-w-fit mx-auto">
              {technologyCategories.map((category) => (
                <TabsTrigger
                  key={category.value}
                  value={category.value}
                  className={cn(
                    "px-2 py-2 md:px-3 md:py-2 rounded-full text-xs sm:text-sm font-medium transition-colors whitespace-nowrap",
                    "text-muted-foreground hover:text-primary",
                    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
                    "data-[state=active]:bg-purple-600 data-[state=active]:text-white dark:data-[state=active]:bg-purple-500"
                  )}
                >
                  {category.name}
                </TabsTrigger>
              ))}
            </TabsList>
          </motion.div>

          {technologyCategories.map((category, catIndex) => (
            <TabsContent key={category.value} value={category.value}>
              <motion.div
                className="mt-8 flex flex-wrap justify-center items-start gap-8 md:gap-12 lg:gap-16"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ staggerChildren: 0.1 }}
              >
                {category.technologies.map((tech, techIndex) => (
                  <motion.div
                    key={tech.name}
                    className="group flex flex-col items-center w-20 sm:w-24 md:w-28 transition-transform duration-300 hover:scale-105"
                    ref={(el) => {
                      if (el) iconRefs.current[catIndex * 10 + techIndex] = el;
                    }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, ease: "backOut" }}
                  >
                    <div className="relative w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20">
                      <Image
                        src={techIcons[tech.key]}
                        alt={tech.name}
                        fill
                        className="object-contain"
                      />
                    </div>
                    <p className="mt-3 text-xs sm:text-sm font-medium text-muted-foreground text-center">
                      {tech.name}
                    </p>
                  </motion.div>
                ))}
              </motion.div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </motion.section>
  );
}
