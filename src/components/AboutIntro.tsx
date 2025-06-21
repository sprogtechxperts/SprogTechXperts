"use client";

import { Target, Users, Code2, Handshake } from "lucide-react";
import { motion } from "framer-motion";

const highlights = [
  {
    title: "Startup Agility",
    icon: Target,
    desc: "We move fast, iterate fast, and launch faster — with clarity and direction.",
  },
  {
    title: "Scalable Solutions",
    icon: Code2,
    desc: "From MVP to enterprise, we architect systems that grow with your business.",
  },
  {
    title: "Transparent Collaboration",
    icon: Handshake,
    desc: "We believe in honest communication, clear timelines, and shared success.",
  },
  {
    title: "User-First Design",
    icon: Users,
    desc: "We blend aesthetics with usability to create seamless user experiences.",
  },
];

export function AboutIntro() {
  return (
    <section className="relative py-12 bg-gradient-to-br from-[#eef2ff] via-[#e0f2fe] to-[#f5faff] dark:from-[#0a0f2b] dark:via-[#0c1a3c] dark:to-[#0b162e] transition-colors duration-700 overflow-hidden">
      {/* Optional Soft Glow Ball */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0.15 }}
        animate={{ scale: [1, 1.15, 1], opacity: [0.15, 0.25, 0.15] }}
        transition={{ duration: 12, repeat: Infinity }}
        className="absolute -top-10 left-1/2 -translate-x-1/2 blur-3xl dark:opacity-20 opacity-30 z-0"
      >
        <div className="h-[400px] w-[400px] rounded-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-500 via-indigo-500 to-transparent" />
      </motion.div>

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        {/* Intro */}
        <div className="text-center mb-10">
          <h2 className="text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white mb-6">
            Driven by Vision, Built with Passion
          </h2>
          <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 font-medium max-w-2xl mx-auto">
            At{" "}
            <span className="text-indigo-600 dark:text-indigo-400">
              SprogTechXperts
            </span>
            , we don't just build apps — we craft purpose-driven, scalable digital products.
            Our startup mindset fuels speed, agility, and impact across every project.
          </p>
        </div>

        {/* Highlights Grid */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map(({ title, icon: Icon, desc }) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="bg-white dark:bg-zinc-900 border border-indigo-100 dark:border-indigo-800/40 rounded-2xl p-8 shadow-lg hover:shadow-indigo-300/30 dark:hover:shadow-indigo-700/50 transition-all duration-300 text-center"
            >
              <div className="flex justify-center mb-5">
                <Icon className="h-9 w-9 text-indigo-500 dark:text-indigo-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {title}
              </h3>
              <p className="text-sm text-gray-700 dark:text-gray-300 font-medium leading-relaxed">
                {desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
