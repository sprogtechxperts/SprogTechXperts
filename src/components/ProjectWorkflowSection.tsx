"use client";

import { motion } from "framer-motion";
import {
  FaSearch,
  FaClipboardList,
  FaPencilRuler,
  FaCode,
  FaCheckCircle,
  FaCloudUploadAlt,
  FaTools,
} from "react-icons/fa";

const steps = [
  {
    id: 1,
    title: "Discovery and Requirement Gathering",
    description: "Understanding goals, users, and project vision.",
    icon: FaSearch,
  },
  {
    id: 2,
    title: "Planning and Strategy",
    description: "Defining roadmap, milestones, and tech stack.",
    icon: FaClipboardList,
  },
  {
    id: 3,
    title: "Design Phase",
    description: "Crafting wireframes and UI/UX prototypes.",
    icon: FaPencilRuler,
  },
  {
    id: 4,
    title: "Development",
    description: "Turning designs into working, scalable code.",
    icon: FaCode,
  },
  {
    id: 5,
    title: "Testing and QA",
    description: "Ensuring everything runs smoothly and securely.",
    icon: FaCheckCircle,
  },
  {
    id: 6,
    title: "Deployment",
    description: "Launching to production with performance checks.",
    icon: FaCloudUploadAlt,
  },
  {
    id: 7,
    title: "Post-Launch Support",
    description: "Maintenance, updates, and performance monitoring.",
    icon: FaTools,
  },
];

export function ProjectWorkflowSection() {
  const radius = 160;
  const center = 200;
  const bookingLink = 'https://calendar.app.google/QYHDiteAYB7ZLUSWA';

  return (
    <section className="bg-white dark:bg-[#0b162e] py-12 px-4 sm:px-6 lg:px-12 transition-colors duration-500">
      <div className="flex flex-col justify-center text-center items-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-2">
          From Idea to Impact — Our Project Workflow
        </h2>
        <p className="text-gray-700 dark:text-gray-300  mx-auto md:mx-0">
          A circular, visual guide to how we move from concept to completion —
          aligning purpose, people, and process at every step.
        </p>
      </div>
      <div className="max-w-7xl lg:mx-auto flex lg:pb-10 flex-col md:flex-row items-center justify-center gap-32  lg:gap-0">
        <div className="relative w-full mr-20 lg:w-1/2 h-[400px] lg:ps-6 ">
          {steps.map((step, index) => {
            const angle = (360 / steps.length) * index - 90;
            const x = center + radius * Math.cos((angle * Math.PI) / 180);
            const y = center + radius * Math.sin((angle * Math.PI) / 180);
            const Icon = step.icon;

            return (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="absolute w-36 text-center"
                style={{
                  top: y,
                  left: x,
                  transform: "translate(-50%, -50%)",
                }}
              >
                {/* Circle with icon only */}
                <div className="w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-br from-purple-600 to-indigo-600 text-white shadow-lg lg:mx-auto">
                  <Icon className="text-xl" />
                </div>

                {/* Step title and ID below the circle */}
                <p className="lg:mt-2 me-20  lg:me-0 text-xs lg:text-sm font-semibold text-gray-900 dark:text-white leading-tight">
                  {step.title}
                </p>
                <p className="text-xs me-20  lg:me-0  text-gray-500 dark:text-gray-400">
                  Step {step.id}
                </p>
              </motion.div>
            );
          })}

          {/* Center Bubble */}
          <div className="absolute top-64 left-60 lg:top-64 lg:left-72 -translate-x-1/2 -translate-y-1/2 z-10">
            <div className="bg-zinc-800 w-20 h-20 flex flex-wrap items-center justify-center text-white dark:bg-white dark:text-black rounded-full text-sm font-semibold shadow-md text-center px-2">
              Your Project
            </div>
          </div>
        </div>

        {/* RIGHT: Description and CTA */}
        <div className="flex-1 lg:w-1/2 w-full px-2 text-center flex  flex-col items-center justify-center lg:pt-32 md:text-left">
          <ul className="space-y-3 text-left text-sm text-gray-700 dark:text-gray-300 mb-8">
            {steps.map((step) => (
              <li key={step.id}>
                <strong className="text-purple-600 dark:text-purple-400">
                  Step {step.id}:
                </strong>{" "}
                <span className="font-medium">{step.title}</span> —{" "}
                {step.description}
              </li>
            ))}
          </ul>

          <div className="flex sm:flex-row w-full justify-center align-center md:justify-start">
            <button 
              onClick={() => window.open(bookingLink, '_blank')}
            className="px-6 py-3 bg-gradient-to-r w-full from-purple-600 to-indigo-600 text-white rounded-full font-semibold hover:opacity-90 transition">
              Book a Call
            </button>
       
          </div>    
        </div>
      </div>
    </section>
  );
}