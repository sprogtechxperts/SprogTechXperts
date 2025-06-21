"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import { Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ContactFormSection() {
  const formRef = useRef(null);
  const infoRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.fromTo(
        formRef.current,
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 1.4,
          ease: "power4.out",
          scrollTrigger: {
            trigger: formRef.current,
            start: "top 85%",
          },
        }
      );

      gsap.fromTo(
        infoRef.current,
        { opacity: 0, x: 80 },
        {
          opacity: 1,
          x: 0,
          duration: 1.3,
          delay: 0.4,
          ease: "power4.out",
          scrollTrigger: {
            trigger: infoRef.current,
            start: "top 90%",
          },
        }
      );
    }, formRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="contact"
      className="relative py-16 bg-gradient-to-br from-white via-blue-50 to-sky-100 dark:from-[#050d27] dark:via-[#0c1a3c] dark:to-[#0b162e] transition-colors duration-500 overflow-hidden"
    >
       <h2 className="font-headline pb-6 text-4xl text-center w-full md:text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white">
            Contact{" "}
            <span className="text-indigo-500 dark:text-indigo-400">
              US
            </span>
          </h2>
      <motion.div
        className="absolute inset-0 z-0 bg-[url('/stars.svg')] bg-cover opacity-10 dark:opacity-20 pointer-events-none"
        animate={{ backgroundPositionY: ["0%", "100%"] }}
        transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
      />

      <motion.div
        initial={{ scale: 0.8, opacity: 0.1 }}
        animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.3, 0.2] }}
        transition={{ duration: 12, repeat: Infinity }}
        className="absolute -top-20 left-1/2 -translate-x-1/2 blur-3xl opacity-30 dark:opacity-20 z-0"
      >
        <div className="h-[600px] w-[600px] rounded-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-500 via-indigo-500 to-transparent" />
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col lg:flex-row gap-10 z-10 relative">
        {/* Contact Form on Left */}

                <motion.div
          ref={infoRef}
          className="w-full lg:w-1/2 space-y-6 flex flex-col justify-center"
        >
          <div>
            <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-2">
             Get In Touch
            </h2>
            <p className="text-5xl font-bold text-indigo-600 dark:text-purple-400">
              Let's Start Your Project
            </p>
            <h3 className="mt-6 text-2xl font-bold text-gray-900 dark:text-white">
              Your Vision, Our Commitment
            </h3>
            <p className="mt-2 text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
             We understand the trust it takes to hand over your dream project — and we don’t take it lightly. Every project we touch is built with care, communication, and cutting-edge code.
            </p>
          </div>

          {[{ icon: <Mail size={20} />, title: "EMAIL", text: "sprogtechxperts@gmail.com", delay: 0 }, { icon: <Phone size={20} />, title: "PHONE", text: "+91 78410 34250", delay: 0.3 }].map((info, i) => (
            <div className="flex items-center gap-4" key={i}>
              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ repeat: Infinity, duration: 2, delay: info.delay }}
                className="p-3 bg-gradient-to-tr from-indigo-600 to-purple-600 text-white rounded-xl shadow-lg"
              >
                {info.icon}
              </motion.div>
              <div>
                <p className="font-semibold text-gray-900 dark:text-white">{info.title}</p>
                <p className="text-sm text-gray-800 dark:text-gray-300">{info.text}</p>
              </div>
            </div>
          ))}
        </motion.div>
       

        {/* Info Section on Right */}
 <motion.div
          ref={formRef}
          className="w-full lg:w-1/2 bg-white dark:bg-zinc-900/80 p-10 rounded-3xl shadow-xl backdrop-blur-lg border border-zinc-200 dark:border-indigo-700"
        >
          <form className="space-y-6">
            <div className="flex gap-4 flex-col sm:flex-row">
              <FloatingInput label="First Name" />
              <FloatingInput label="Last Name" />
            </div>

            <FloatingInput label="Email Address" type="email" />
            <SelectInput />
            <FloatingTextarea label="Message" />

            <Button
              type="submit"
              size="lg"
              className="w-full text-lg font-semibold bg-gradient-to-r from-fuchsia-600 to-indigo-600 hover:from-fuchsia-700 hover:to-indigo-700 text-white rounded-xl py-4 shadow-xl transition-transform transform hover:scale-105"
            >
              Send Message 
            </Button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}

type FloatingInputProps = {
  label: string;
  type?: string;
};

function FloatingInput({ label, type = "text" }: FloatingInputProps) {
  return (
    <div className="relative w-full">
      <input
        type={type}
        placeholder=" "
        className="peer w-full px-4 py-3 rounded-md border border-gray-300 dark:border-zinc-600 bg-white dark:bg-zinc-800 text-sm text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-500 outline-none transition-all"
      />
      <label className="absolute left-4 top-3 text-gray-500 dark:text-gray-400 text-xs transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-sm peer-focus:top-1 peer-focus:text-xs">
        {label}
      </label>
    </div>
  );
}

function SelectInput() {
  return (
    <div className="relative w-full">
      <select
        className="peer w-full px-4 py-3 rounded-md border border-gray-300 dark:border-zinc-600 bg-white dark:bg-zinc-800 text-sm text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-500 outline-none transition-all"
        defaultValue=""
      >
        <option value="" disabled>
          Select a Service
        </option>
        <option>Web Development</option>
        <option>Mobile App</option>
        <option>UI/UX Design</option>
        <option>AI/ML Project</option>
      </select>
    </div>
  );
}

function FloatingTextarea({ label }: { label: string }) {
  return (
    <div className="relative w-full">
      <textarea
        placeholder=" "
        rows={4}
        className="peer w-full px-4 py-3 rounded-md border border-gray-300 dark:border-zinc-600 bg-white dark:bg-zinc-800 text-sm text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-500 outline-none transition-all"
      ></textarea>
      <label className="absolute left-4 top-3 text-gray-500 dark:text-gray-400 text-xs transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-focus:top-1 peer-focus:text-xs">
        {label}
      </label>
    </div>
  );
}
