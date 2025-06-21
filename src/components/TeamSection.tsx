"use client";

import { useEffect, useRef, MouseEvent } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

type TeamMember = {
  name: string;
  role: string;
  image: string;
  bio: string;
  linkedin: string;
  github?: string;
};

const teamMembers: TeamMember[] = [
  {
    name: "Sandhya Shinde",
    role: "Founder & Lead Software Developer",
    image: "/assets/sandhya_Shinde.jpg",
    bio: "A tech visionary who crafts scalable systems with an eye for clean code and thoughtful design, guiding the team toward innovation with strategic insight and passion.",
    linkedin: "https://www.linkedin.com/in/sandhya-shinde-03b710267/",
  },
  {
    name: "Omkar Gaikwad",
    role: "Software Developer & UI/UX Designer",
    image: "https://ghushineindia.com/home/wp-content/uploads/2024/12/dummy-profile.png",
    bio: "Brings precision to both logic and layout, seamlessly weaving robust APIs with engaging, user-centric designs that elevate digital experiences.",
    linkedin: "#",
    github: "#",
  },
  {
    name: "Vishwas Landge",
    role: "Software Developer",
    image: "https://ghushineindia.com/home/wp-content/uploads/2024/12/dummy-profile.png",
    bio: "Specializes in building secure, resilient backend foundations that scale effortlessly, while continuously streamlining processes and modernizing legacy challenges.",
    linkedin: "#",
    github: "#",
  },
  {
    name: "Aves Solanki",
    role: "Software Developer",
    image: "https://ghushineindia.com/home/wp-content/uploads/2024/12/dummy-profile.png",
    bio: "A versatile problem solver with a keen focus on backend architecture, delivering efficient, elegant solutions while adapting fluidly across development layers.",
    linkedin: "#",
    github: "#",
  },
  {
    name: "Rushikesh Unge",
    role: "Software Developer",
    image: "/assets/rushi_unge.jpg",
    bio: "Bridges creative ideas with technical execution, excelling in backend development while maintaining a versatile grasp on the wider software landscape.",
    linkedin: "https://www.linkedin.com/in/rushi-unge",
    github: "https://github.com/Rushi-Unge",
  },
  {
    name: "Suraj Shinde",
    role: "Software Developer",
    image: "/assets/suraj_shinde.jpg",
    bio: "Focuses on delivering polished frontend experiences backed by a deep understanding of scalable architectures and the intricacies behind the scenes.",
    linkedin: "https://www.linkedin.com/in/surajshinde87",
    github: "https://github.com/surajshinde87",
  },
  {
    name: "Mansi Unge",
    role: "Software Developer & UI/UX Designer",
    image: "/assets/mansi.png",
    bio: "Transforms abstract concepts into intuitive interfaces, with a strong foundation in front-end craftsmanship complemented by a broad understanding of the development ecosystem.",
    linkedin: "https://www.linkedin.com/in/mansi-unge-8825ba312",
    github: "https://github.com/Mansi-unge",
  },
];

function calcTilt(x: number, y: number, rect: DOMRect) {
  const xMid = rect.left + rect.width / 2;
  const yMid = rect.top + rect.height / 2;
  const dx = (x - xMid) / 15;
  const dy = (y - yMid) / 15;

  const clamp = (value: number, min: number, max: number) =>
    Math.max(min, Math.min(max, value));

  return {
    rotateX: clamp(dy, -8, 8),
    rotateY: clamp(-dx, -8, 8),
  };
}

export function TeamSection() {
  const sectionRef = useRef(null);
  const cardRefs = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from("#team-title", {
        opacity: 0,
        y: -30,
        duration: 1.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: "#team-title",
          start: "top 85%",
        },
      });

      ScrollTrigger.batch(cardRefs.current, {
        interval: 0.15,
        start: "top 85%",
        onEnter: (batch) => {
          gsap.fromTo(
            batch,
            { opacity: 0, y: 20 },
            {
              opacity: 1,
              y: 0,
              duration: 0.8,
              stagger: 0.15,
              ease: "power2.out",
            }
          );
        },
        onLeaveBack: (batch) => {
          gsap.to(batch, {
            opacity: 0,
            y: 20,
            duration: 0.5,
            stagger: 0.1,
            ease: "power2.inOut",
          });
        },
        once: false,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="team"
      className="relative pb-28 pt-10 bg-gradient-to-br from-slate-100 via-slate-50 to-slate-200 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 overflow-hidden transition-colors duration-700"
    >
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-primary opacity-20 blur-3xl rounded-full -translate-x-1/2 -translate-y-1/2 animate-float-blur" />
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-500 opacity-10 blur-2xl rounded-full translate-x-1/3 translate-y-1/3 animate-float-blur" />
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/effects/code-lines.svg')] opacity-[0.05] dark:opacity-[0.06] bg-cover mix-blend-soft-light" />
      </div>

      <div className="container mx-auto px-4 max-w-7xl">
        <div id="team-title" className="text-center mb-6 max-w-3xl mx-auto">
          <h2 className="text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white">
            The{" "}
            <span className="text-indigo-500 dark:text-indigo-400">Minds</span>{" "}
            Behind the Code
          </h2>
          <p className="mt-6 text-gray-700 dark:text-gray-300 max-w-2xl mx-auto text-lg leading-relaxed font-medium">
            Not just devs — creators of systems, artists of logic, and
            architects of user joy.
          </p>
        </div>

        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
          {teamMembers.map((member, i) => {
            const isFounder = member.name === "Sandhya Shinde";

            const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
              const rect = e.currentTarget.getBoundingClientRect();
              const { rotateX, rotateY } = calcTilt(e.clientX, e.clientY, rect);
              e.currentTarget.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.03)`;
            };

            const handleMouseLeave = (e: MouseEvent<HTMLDivElement>) => {
              e.currentTarget.style.transform =
                "perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)";
            };

            const commonProps = {
              ref: (el: HTMLDivElement | null) => {
                if (el) cardRefs.current[i] = el;
              },
              onMouseMove: (e: MouseEvent<HTMLDivElement>) => {
                const rect = e.currentTarget.getBoundingClientRect();
                const { rotateX, rotateY } = calcTilt(
                  e.clientX,
                  e.clientY,
                  rect
                );
                e.currentTarget.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.015)`;
              },
              onMouseLeave: (e: MouseEvent<HTMLDivElement>) => {
                e.currentTarget.style.transform =
                  "perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)";
              },

              className:
                "group bg-white dark:bg-zinc-900 border border-indigo-100 dark:border-indigo-800/40 backdrop-blur-md rounded-3xl shadow-md hover:shadow-indigo-300/40 dark:hover:shadow-indigo-700/50 transition-transform duration-300 hover:ring-2 hover:ring-purple-400/40 dark:hover:ring-purple-500/30",
            };

            if (isFounder) {
              return (
              <motion.div
  key={member.name}
  {...commonProps}
  className={`col-span-full p-6 md:flex md:items-start gap-6 ${commonProps.className}`}
>
  <div className="relative w-40 h-40 flex-shrink-0 mx-auto md:mx-0 rounded-full overflow-hidden">
    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-400 via-sky-400 to-purple-400 opacity-50 blur-xl animate-pulse-slow group-hover:opacity-80 transition-opacity duration-500" />
    <Image
      src={member.image}
      alt={member.name}
      fill
      className="relative z-10 object-cover rounded-full border-4 border-white dark:border-zinc-900 shadow-lg"
      priority
    />
  </div>

  <div className="mt-6 md:mt-0 text-center md:text-left">
    <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
      {member.name}
    </h3>
    <p className="text-indigo-500 dark:text-indigo-400 font-semibold text-base mb-3">
      {member.role}
    </p>
    <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed font-medium">
      {member.bio}
    </p>
    <div className="mt-4 flex justify-center md:justify-start gap-6 text-indigo-600 dark:text-indigo-400 text-2xl">
      <a
        href={member.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${member.name} LinkedIn profile`}
        className="hover:text-purple-500 dark:hover:text-purple-300 transition-transform duration-300 transform hover:scale-110"
      >
        <FaLinkedin />
      </a>
    </div>
  </div>
</motion.div>

              );
            }

            return (
              <motion.div key={member.name} {...commonProps}>
                <div className="p-6 text-center">
                  <div className="relative w-28 h-28 mx-auto mb-6">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-400 via-sky-400 to-purple-400 opacity-50 blur-xl group-hover:opacity-80 animate-pulse-slow transition-opacity duration-500" />
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={122}
                      height={122}
                      className="relative z-10 rounded-full border-4 border-white dark:border-zinc-900 shadow-lg"
                      priority
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {member.name}
                  </h3>
                  <p className="text-indigo-500 dark:text-indigo-400 font-semibold text-sm mb-3">
                    {member.role}
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed font-medium px-4">
                    {member.bio}
                  </p>
                  <div className="mt-5 flex justify-center gap-6 text-indigo-600 dark:text-indigo-400 text-2xl">
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${member.name} LinkedIn profile`}
                      className="hover:text-purple-500 dark:hover:text-purple-300 transition-transform duration-300 transform hover:scale-110"
                    >
                      <FaLinkedin />
                    </a>
                    {member.github && (
                      <a
                        href={member.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${member.name} GitHub profile`}
                        className="hover:text-purple-500 dark:hover:text-purple-300 transition-transform duration-300 transform hover:scale-110"
                      >
                        <FaGithub />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
