"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function AboutSection() {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const subheadingRef = useRef(null);
  const lineRefs = useRef<HTMLSpanElement[]>([]);
  const imageRef = useRef(null);

  const paragraphs = [
    "At SprogTechXperts, we're not just freelancers — we're your dedicated tech partners, turning bold digital ideas into real-world solutions. With a team of passionate developers and designers, we blend startup agility with industry-grade expertise to craft products that perform, scale, and shine.",
    "From MVPs for startups to robust platforms for growing businesses — we design, build, and iterate with purpose. Every line of code and every pixel is crafted to move your vision forward.",
    "Led by Sandhya Shinde, a visionary technologist, we're driven by creativity, collaboration, and a commitment to continuous learning. Our mission is to deliver innovative, user-centric solutions that simplify complexity and spark growth.",
    "With integrity, innovation, and customer focus at our core, we build trusted partnerships through quality, care, and transparency.",
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        headingRef.current,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 85%",
            toggleActions: "play reverse play reverse",
          },
        }
      );

      gsap.fromTo(
        subheadingRef.current,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          delay: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: subheadingRef.current,
            start: "top 85%",
            toggleActions: "play reverse play reverse",
          },
        }
      );

      gsap.fromTo(
        lineRefs.current,
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.08,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
            toggleActions: "play reverse play reverse",
          },
        }
      );

      // Stronger Illustration Animation
      gsap.fromTo(
        imageRef.current,
        { scale: 0.8, rotate: -10, y: 50, opacity: 0 },
        {
          scale: 1,
          rotate: 0,
          y: 0,
          opacity: 1,
          duration: 1.4,
          ease: "power4.out",
          scrollTrigger: {
            trigger: imageRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  let lineIndex = 0;

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative isolate py-10 md:py-16 bg-gradient-to-br from-slate-100 via-slate-50 to-slate-200 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 overflow-hidden"
    >
      {/* Glows */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-primary opacity-20 blur-3xl rounded-full -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-500 opacity-10 blur-2xl rounded-full translate-x-1/3 translate-y-1/3" />
      </div>

      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 
                ref={headingRef}
              className="font-headline pb-6 text-4xl text-center w-full md:text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white">
            About{" "}
            <span className="text-indigo-500 dark:text-indigo-400">
              SprogTechXperts
            </span>
          </h2>
          <h2
            ref={subheadingRef}
            className="text-3xl sm:text-2xl md:text-3xl font-extrabold text-primary leading-snug"
          >
            Where Vision Meets Execution
          </h2>
        </div>

        {/* Content Row */}
        <div className="flex flex-col-reverse lg:flex-row items-center gap-4 max-w-7xl mx-auto">
          {/* Text */}
          <div className="flex-1 prose dark:prose-invert text-muted-foreground text-lg leading-8 font-medium space-y-4 text-justify">
            {paragraphs.map((para, pIndex) => (
              <p key={pIndex} className="space-y-2">
                {para.split(". ").map((line, lIndex) => {
                  const lineRefIndex = lineIndex++;
                  return (
                    <span
                      key={lIndex}
                      ref={(el) => {
                        if (el) lineRefs.current[lineRefIndex] = el;
                      }}
                      className="block"
                    >
                      {line.trim() + (line.endsWith(".") ? "" : ".")}
                    </span>
                  );
                })}
              </p>
            ))}
          </div>

          {/* Illustration */}
          <div className="flex-1">
            <img
              ref={imageRef}
              src="/assets/about_illustrartion.png"
              alt="About illustration"
              className="w-full max-w-md mx-auto drop-shadow-xl transition-transform duration-300 hover:scale-105"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
