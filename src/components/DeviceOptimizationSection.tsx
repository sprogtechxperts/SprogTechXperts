"use client";

import { Smartphone } from "lucide-react";
import Image from "next/image";
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef, useState, useCallback } from "react";

function easeOutQuad(t: number) {
  return t * (2 - t);
}

function AnimatedCounter({ target }: { target: number }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let frameId: number;
    let startTime: number | null = null;
    const duration = 1800;

    function step(timestamp: number) {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easedProgress = easeOutQuad(progress);
      setCount(Math.floor(easedProgress * target));
      if (progress < 1) {
        frameId = requestAnimationFrame(step);
      }
    }

    frameId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frameId);
  }, [target]);

  return <span>{count}</span>;
}

const stats = [
  {
    label: "Mobile Compatibility",
    value: 99,
    colorFrom: "#6366f1",
    colorTo: "#8b5cf6",
  },
  {
    label: "Load Time (s)",
    value: 3,
    colorFrom: "#0ea5e9",
    colorTo: "#0284c7",
  },
];

export function DeviceOptimizationSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-100px" });
  const controls = useAnimation();
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0 });

  useEffect(() => {
    if (isInView) {
      controls.start({
        opacity: 1,
        x: 0,
        transition: { duration: 1.2, ease: "easeOut" },
      });
    } else {
      controls.start({
        opacity: 0,
        x: -60,
        transition: { duration: 1, ease: "easeIn" },
      });
    }
  }, [isInView, controls]);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setTilt({
      rotateX: (-y / (rect.height / 2)) * 10,
      rotateY: (x / (rect.width / 2)) * 10,
    });
  }, []);

  const handleMouseLeave = useCallback(() => {
    setTilt({ rotateX: 0, rotateY: 0 });
  }, []);

  const circleRadius = 45;
  const circumference = 2 * Math.PI * circleRadius;

  return (
    <section
      ref={ref}
      id="optimization"
      className="relative overflow-hidden bg-gradient-to-br from-[#eef2ff] via-[#e0f2fe] to-[#f5faff] dark:from-[#0b162e] dark:via-[#0c1a3c] dark:to-[#0a0f2b] py-12 px-8 sm:px-16 lg:px-28 transition-colors duration-500"
    >
      <motion.div
        className="pointer-events-none absolute -top-48 left-1/2 -translate-x-1/2 w-[130vw] h-[130vw] max-w-[1000px] rounded-full bg-gradient-to-tr from-indigo-400 via-purple-500 to-indigo-400 opacity-20 blur-3xl dark:opacity-10"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 120, ease: "linear" }}
      />
      <motion.div
        className="pointer-events-none absolute bottom-0 right-0 w-[28rem] h-[28rem] bg-gradient-to-tr from-purple-600 via-indigo-700 to-purple-900 rounded-3xl opacity-30 blur-xl dark:opacity-20 -translate-x-16 translate-y-16"
        animate={{ rotate: -360 }}
        transition={{ repeat: Infinity, duration: 140, ease: "linear" }}
      />

      <div className="relative max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={controls}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: { duration: 1, ease: "easeOut" },
          }}
          viewport={{ once: true }}
          className="md:col-span-7 relative bg-white dark:bg-[#121829] rounded-3xl pt-8 pr-14 pl-14 pb-28 md:pb-20 md:pt-10 shadow-2xl border border-indigo-300/30 dark:border-purple-700/40"
          style={{ clipPath: "polygon(0 0, 100% 0, 100% 85%, 0% 100%)" }}
        >
          <div className="absolute top-8 left-8 w-44 h-44 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-700 opacity-30 blur-3xl -z-10" />
          <div className="absolute bottom-14 right-14 w-28 h-28 rounded-lg bg-indigo-500 opacity-20 blur-xl -z-10" />

          <span className="inline-flex items-center gap-3 text-indigo-600 dark:text-indigo-300 bg-indigo-100 dark:bg-indigo-900 px-5 py-3 rounded-full text-base font-semibold shadow-md mb-8">
            <Smartphone className="w-6 h-6" />
            Mobile-First Approach
          </span>

          <h2 className="text-5xl font-extrabold text-indigo-900 dark:text-indigo-200 mb-8 leading-tight tracking-tight">
            Optimized for Every Device
          </h2>

          <p className="text-indigo-700 dark:text-indigo-300 text-xl leading-relaxed max-w-xl mb-10">
            With mobile traffic accounting for over 60% of web usage, we ensure your website delivers exceptional performance across all devices. Our responsive designs adapt seamlessly from desktop to tablet to smartphone.
          </p>

          <div className="flex flex-col sm:flex-row gap-12 max-w-md">
            {stats.map(({ label, value, colorFrom, colorTo }, i) => {
              const progress = i === 0 ? value / 100 : 1 - value / 10;
              const dashOffset = circumference * (1 - progress);

              return (
                <div key={label} className="flex items-center gap-8 select-none">
                  <svg className="w-24 h-24" viewBox="0 0 100 100" fill="none">
                    <defs>
                      <linearGradient id={`grad-${i}`} x1="0" y1="0" x2="1" y2="1">
                        <stop offset="0%" stopColor={colorFrom} />
                        <stop offset="100%" stopColor={colorTo} />
                      </linearGradient>
                    </defs>
                    <circle cx="50" cy="50" r={circleRadius} stroke="#e5e7eb" strokeWidth="10" />
                    <motion.circle
                      cx="50"
                      cy="50"
                      r={circleRadius}
                      stroke={`url(#grad-${i})`}
                      strokeWidth="10"
                      strokeLinecap="round"
                      strokeDasharray={circumference}
                      strokeDashoffset={circumference}
                      initial={{ strokeDashoffset: circumference }}
                      animate={{ strokeDashoffset: dashOffset }}
                      transition={{ duration: 1.8, ease: "easeOut" }}
                    />
                  </svg>
                  <div>
                    <p
                      className="text-5xl font-extrabold bg-gradient-to-r text-transparent bg-clip-text"
                      style={{ backgroundImage: `linear-gradient(to right, ${colorFrom}, ${colorTo})` }}
                    >
                      <AnimatedCounter target={value} />
                      {i === 1 ? "s" : "%"}
                    </p>
                    <p className="text-indigo-700 dark:text-indigo-400 font-semibold tracking-wide text-lg mt-1">
                      {label}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>

        <motion.div
          className="md:col-span-5 flex justify-center relative rounded-3xl shadow-2xl p-6 bg-gradient-to-br from-indigo-600 to-purple-700 cursor-pointer"
          style={{ perspective: 900 }}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          animate={{ opacity: isInView ? 1 : 0 }}
          transition={{ duration: 1.2, ease: isInView ? "easeOut" : "easeIn" }}
        >
          <motion.div
            className="relative rounded-2xl overflow-hidden bg-white dark:bg-[#0b162e] shadow-lg w-[340px] h-[260px]"
            style={{
              rotateX: tilt.rotateX,
              rotateY: tilt.rotateY,
              transformStyle: "preserve-3d",
              transition: "transform 0.15s ease-out",
            }}
            animate={{ rotateX: tilt.rotateX, rotateY: tilt.rotateY }}
            transition={{ type: "spring", stiffness: 100, damping: 12 }}
          >
            <Image
              src="/assets/responsive.webp"
              alt="Illustration of responsive devices"
              fill
              className="object-contain"
              priority
              sizes="(max-width: 768px) 90vw, 340px"
              draggable={false}
              loading="eager"
            />
          </motion.div>
          <div className="pointer-events-none absolute inset-0 rounded-3xl ring-2 ring-indigo-500/60 dark:ring-purple-400/80 blur-md animate-pulse" />
        </motion.div>
      </div>
    </section>
  );
}
