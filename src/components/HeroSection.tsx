"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

export function HeroSection() {
  const pathname = usePathname(); // ✅ Track route change
  const sectionRef = useRef(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const paragraphRefs = useRef<HTMLParagraphElement[]>([]);
  const buttonRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const words = headlineRef.current?.querySelectorAll("span.word");

      if (words) {
        gsap.fromTo(
          words,
          { y: 80, opacity: 0, rotateX: 90 },
          {
            y: 0,
            opacity: 1,
            rotateX: 0,
            duration: 1,
            stagger: 0.1,
            ease: "back.out(1.5)",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 80%",
              toggleActions: "play reverse play reverse",
            },
          }
        );
      }

      gsap.fromTo(
        paragraphRefs.current,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play reverse play reverse",
          },
        }
      );

      gsap.fromTo(
        buttonRef.current,
        { scale: 0.8, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.8,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: buttonRef.current,
            start: "top 90%",
            toggleActions: "play reverse play reverse",
          },
        }
      );

      ScrollTrigger.refresh(); // ✅ Recalculate layout triggers
    }, sectionRef);

    return () => ctx.revert(); // ✅ Cleanup on unmount
  }, [pathname]); // ✅ Rerun on route change

  const headline = "Empowering Tomorrow’s Brands, Today";

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="relative isolate w-full h-screen flex items-center justify-center overflow-hidden py-10 sm:py-2 lg:py-16 bg-gradient-to-br from-[#eef2ff] via-[#e0f2fe] to-[#f5faff] dark:from-[#0a0f2b] dark:via-[#0c1a3c] dark:to-[#0b162e] transition-colors duration-500"
    >
      {/* 🌐 Animated Glow Ball */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0.1 }}
        animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.25, 0.2] }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute -top-10 left-1/2 -translate-x-1/2 blur-3xl dark:opacity-20 opacity-30 z-0"
      >
        <div className="h-[500px] w-[500px] rounded-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-500 via-indigo-500 to-transparent" />
      </motion.div>

      {/* 🟣 Particle Grid */}
      <div className="absolute inset-0 pointer-events-none -z-10 opacity-10 dark:opacity-5">
        <div className="grid grid-cols-12 grid-rows-6 h-full">
          {[...Array(72)].map((_, i) => (
            <motion.div
              key={i}
              className="w-1 h-1 m-auto rounded-full bg-white dark:bg-purple-400"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.015, duration: 0.3 }}
            />
          ))}
        </div>
      </div>

      {/* 🧠 Hero Content */}
      <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <h1
            ref={headlineRef}
            className="font-headline text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-gray-900 dark:text-white leading-tight"
          >
            {headline.split(" ").map((word, idx) => (
              <span key={idx} className="inline-block overflow-hidden">
                <span className="inline-block word mr-2 bg-gradient-to-r from-indigo-700 to-purple-800  bg-clip-text text-transparent dark:text-transparent">
                  {word}
                </span>
              </span>
            ))}
          </h1>

          <div className="mt-6 space-y-4 text-lg leading-relaxed text-gray-700 dark:text-gray-300 sm:text-xl">
            {[  
              "SprogTechXperts crafts intelligent, high-performance digital products that turn bold ideas into future-proof solutions. From sleek web platforms to enterprise-grade software and AI-driven systems — we build for impact, scale, and longevity.",
              "Driven by innovation and powered by modern technologies, we help startups and enterprises move from concept to code — faster, smarter, and with confidence.",
            ].map((text, index) => (
              <p
                key={index}
                ref={(el) => {
                  if (el) paragraphRefs.current[index] = el;
                }}
              >
                {text}
              </p>
            ))}
          </div>

    
          {/* 🚀 CTA Button */}
          <motion.div
            className="mt-6 flex items-center justify-center"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Button
              ref={buttonRef}
              asChild
              size="lg"
              className="px-8 py-5 rounded-full text-lg font-semibold bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white shadow-xl dark:shadow-none transition-all duration-300"
            >
              <Link href="#contact" scroll={true}>
                Let’s Talk Solutions
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
