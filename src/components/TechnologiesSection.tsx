
"use client";

import * as React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Figma, Gem, Cloud, Container, ShipWheel, Database as DatabaseIcon, Smartphone, Brain, Server, Palette, Settings } from "lucide-react"; // Using Palette for UI/UX, Settings for DevOps as placeholders
import { cn } from "@/lib/utils";

// Existing SVGs (React, Next.js, Node.js, Angular) with updated colors
const reactLogo = (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-11.5 -10.23174 23 20.46348" fill="currentColor" className="h-16 w-16 text-sky-500 transition-transform duration-300 group-hover:scale-110">
    <title>React Logo</title>
    <circle cx="0" cy="0" r="2.05" fill="currentColor"></circle>
    <g stroke="currentColor" strokeWidth="1" fill="none">
      <ellipse rx="11" ry="4.2"></ellipse>
      <ellipse rx="11" ry="4.2" transform="rotate(60)"></ellipse>
      <ellipse rx="11" ry="4.2" transform="rotate(120)"></ellipse>
    </g>
  </svg>
);

const nextjsLogo = (
  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 128 128" className="h-16 w-16 text-neutral-900 dark:text-neutral-100 transition-transform duration-300 group-hover:scale-110">
    <title>Next.js Logo</title>
    <path d="M64 0C28.7 0 0 28.7 0 64s28.7 64 64 64 64-28.7 64-64S99.3 0 64 0zm0 119.5C33.2 119.5 8.5 94.8 8.5 64S33.2 8.5 64 8.5s55.5 24.7 55.5 55.5S94.8 119.5 64 119.5z"/>
    <path d="M90.3 41h13.2L69.7 90.3h-13L90.3 41zm-40.7 0h29.5v8.3H49.6v32.7H41V41z"/>
  </svg>
);

const nodejsLogo = (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="currentColor" className="h-16 w-16 text-green-500 transition-transform duration-300 group-hover:scale-110">
    <title>Node.js Logo</title>
    <path d="M224.2,104.27,141.61,30.79a20,20,0,0,0-27.22,0L31.8,104.27a19.9,19.9,0,0,0-9.74,22.69l28.18,98.62a19.88,19.88,0,0,0,18.69,14.42H187.07a19.88,19.88,0,0,0,18.69-14.42l28.18-98.62A19.9,19.9,0,0,0,224.2,104.27ZM191.8,221.85a4,4,0,0,1-3.73,2.9H67.93a4,4,0,0,1-3.73-2.9L36.27,127.73a3.94,3.94,0,0,1,1.94-4.52L120.8,50.29a4,4,0,0,1,14.4,0l82.59,72.92a3.94,3.94,0,0,1,1.94,4.52Z"/>
    <path d="M132.26,118.48a12,12,0,0,0-16.72-1.7L82.4,138.63a12,12,0,1,0,13.43,20.14L114,146.1v24.7a12,12,0,0,0,24,0v-44A12,12,0,0,0,132.26,118.48Z"/>
  </svg>
);

const angularLogo = (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-16 w-16 text-red-600 transition-transform duration-300 group-hover:scale-110">
    <title>Angular Logo</title>
    <path d="M12 2L1 8l2.38 11.13L12 22l8.62-2.87L23 8zm0 2.31L19.59 8H4.41zM12 12.92L17.62 8h-3.07L12 10.34zm-2.45-4.92h4.9L12 5.27zm2.45 7.87L8.38 8h3.07L14.45 12zm0-3.46L15.55 8H8.45z"/>
  </svg>
);

const vueLogo = (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 221.7" fill="currentColor" className="h-16 w-16 text-green-400 transition-transform duration-300 group-hover:scale-110">
    <title>Vue.js Logo</title>
    <path d="M204.8,0L128,133.1L51.2,0H0l128,221.7L256,0H204.8z"/>
    <path d="M204.8,0L128,133.1L51.2,0H82l46,79.7L174,0H204.8z"/>
  </svg>
);

const pythonLogo = (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-16 w-16 text-blue-500 transition-transform duration-300 group-hover:scale-110">
    <title>Python Logo</title>
    <path d="M16.22,10.33c.04-.17.06-.33.06-.51,0-2.05-1.66-3.71-3.71-3.71H10.5V4.26H8.36V9.8H6.22v2.14h2.14v2.92c0,2.05,1.66,3.71,3.71,3.71h2.05c2.05,0,3.71-1.66,3.71-3.71,0-.17-.02-.34-.06-.5ZM12.57,16.42H10.5c-.81,0-1.47-.66-1.47-1.47V10.33h3.54c.81,0,1.47.66,1.47,1.47v3.15c0,.81-.66,1.47-1.47,1.47Zm5.65-3.17c0,2.05-1.66,3.71-3.71,3.71h-1.4V14.9h1.4c.81,0,1.47-.66,1.47-1.47s-.66-1.47-1.47-1.47H10.5V9.8h2.07c2.05,0,3.71,1.66,3.71,3.71,0,.17-.02.34-.06.5.04.17.06.33.06.5Z"/>
  </svg>
);

const javaLogo = (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-16 w-16 text-orange-600 transition-transform duration-300 group-hover:scale-110">
    <title>Java Logo</title>
    <path d="M18.5,3H6c-1.1,0-2,.9-2,2v10c0,1.1.9,2,2,2h5.5c.83,0,1.5-.67,1.5-1.5V15h2v.5c0,.83.67,1.5,1.5,1.5H20c1.1,0,2-.9,2-2V7l-3.5-4ZM9,15.5c0,.28-.22,.5-.5,.5s-.5-.22-.5-.5V10h1v5.5Zm3.5,0c0,.28-.22,.5-.5,.5H10V10h2.5c.28,0,.5.22,.5.5v5Zm3.5,0c0,.28-.22,.5-.5,.5s-.5-.22-.5-.5V10h1v5.5Zm2.5-3.5H17V8h1v4Z M14,19.5c0,.28.22,.5.5,.5s.5-.22,.5-.5v-2H14v2Z"/>
  </svg>
);

const adobeXDLogo = (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-16 w-16 text-fuchsia-500 transition-transform duration-300 group-hover:scale-110">
    <title>Adobe XD Logo</title>
    <path d="M14.4,3H9.6C9.27,3,9,3.27,9,3.6v0.8C9,4.73,9.27,5,9.6,5h4.8c0.33,0,0.6-0.27,0.6-0.6V3.6C15,3.27,14.73,3,14.4,3z M20.4,3H16.8c-0.33,0-0.6,0.27-0.6,0.6v16.8c0,0.33,0.27,0.6,0.6,0.6h3.6c0.33,0,0.6-0.27,0.6-0.6V3.6C21,3.27,20.73,3,20.4,3z M7.2,3H3.6C3.27,3,3,3.27,3,3.6v16.8C3,20.73,3.27,21,3.6,21h3.6c0.33,0,0.6-0.27,0.6-0.6V3.6C7.8,3.27,7.53,3,7.2,3z M12.9,8.55L10.95,12l1.95,3.45h-1.63L9.9,12.98V15H8.1V9h1.8v2.03L11.28,9h1.62v-.45h-1.62L12.9,8.55z"/>
  </svg>
);

const postgreSQLlogo = (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-16 w-16 text-sky-700 transition-transform duration-300 group-hover:scale-110">
    <title>PostgreSQL Logo</title>
    <path d="M12,2C6.48,2,2,6.48,2,12s4.48,10,10,10s10-4.48,10-10S17.52,2,12,2z M12,20c-4.41,0-8-3.59-8-8s3.59-8,8-8s8,3.59,8,8S16.41,20,12,20z M12.5,11.5h-1V10h1c0.55,0,1-0.45,1-1s-0.45-1-1-1h-3v1.5h1V10H9v4h1.5v-1.5h1V14H12v1.5c0,0.83,0.67,1.5,1.5,1.5H15v-1.5h-1.5C12.95,14.5,12.5,14.05,12.5,13.5v-2z M7.5,12c0-0.83,0.67-1.5,1.5-1.5S10.5,11.17,10.5,12S9.83,13.5,9,13.5S7.5,12.83,7.5,12z M15,12c0-0.83,0.67-1.5,1.5-1.5s1.5,0.67,1.5,1.5s-0.67,1.5-1.5,1.5S15,12.83,15,12z"/>
  </svg>
);

const mongoDBLogo = (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-16 w-16 text-green-600 transition-transform duration-300 group-hover:scale-110">
    <title>MongoDB Logo</title>
    <path d="M16.02,10.65C14.9,9.07,13.93,7.62,12.01,7.62c-1.21,0-2.17,0.75-2.17,1.93c0,0.88,0.6,1.43,1.52,2.03c1.42,0.92,2.27,1.55,2.27,2.68c0,1.11-0.81,2.16-2.39,2.16c-1.99,0-2.93-1.24-3.22-2.11l-1.83,0.77c0.58,2.02,2.39,3.66,5.07,3.66c2.66,0,4.54-1.68,4.54-4.09c0-1.77-1.13-2.83-2.93-3.93c-1.01-0.62-1.42-1.02-1.42-1.56c0-0.59,0.45-1.01,1.14-1.01c0.99,0,1.71,0.77,2.05,1.28L16.02,10.65z M11.99,2C6.47,2,2,6.48,2,12s4.47,10,9.99,10C17.52,22,22,17.52,22,12S17.52,2,11.99,2z M12,20c-4.42,0-8-3.58-8-8s3.58-8,8-8s8,3.58,8,8S16.42,20,12,20z"/>
  </svg>
);


import { DatabaseZap as FirebaseIcon } from "lucide-react";


const technologyCategories = [
  {
    name: "FRONTEND",
    value: "frontend",
    technologies: [
      { name: "React", logo: reactLogo, dataAiHint: "React framework" },
      { name: "Next.js", logo: nextjsLogo, dataAiHint: "Nextjs framework" },
      { name: "Angular", logo: angularLogo, dataAiHint: "Angular framework" },
      { name: "Vue.js", logo: vueLogo, dataAiHint: "Vuejs framework" },
    ],
  },
  {
    name: "BACKEND",
    value: "backend",
    technologies: [
      { name: "Node.js", logo: nodejsLogo, dataAiHint: "Nodejs javascript" },
      { name: "Python", logo: pythonLogo, dataAiHint: "Python language" },
      { name: "Java", logo: javaLogo, dataAiHint: "Java language" },
      { name: "PHP", logo: <Server className="h-16 w-16 text-indigo-500 transition-transform duration-300 group-hover:scale-110" />, dataAiHint: "PHP language" },
    ],
  },
  {
    name: "UI/UX",
    value: "ui-ux",
    technologies: [
      { name: "Figma", logo: <Figma className="h-16 w-16 text-pink-500 transition-transform duration-300 group-hover:scale-110" />, dataAiHint: "Figma design" },
      { name: "Adobe XD", logo: adobeXDLogo, dataAiHint: "AdobeXD design" },
      { name: "Sketch", logo: <Gem className="h-16 w-16 text-yellow-500 transition-transform duration-300 group-hover:scale-110" />, dataAiHint: "Sketch design" },
      { name: "Illustrator", logo: <Palette className="h-16 w-16 text-orange-400 transition-transform duration-300 group-hover:scale-110" />, dataAiHint: "Illustrator design" },
    ],
  },
  {
    name: "DATABASE",
    value: "database",
    technologies: [
      { name: "PostgreSQL", logo: postgreSQLlogo, dataAiHint: "PostgreSQL database" },
      { name: "MongoDB", logo: mongoDBLogo, dataAiHint: "MongoDB database" },
      { name: "MySQL", logo: <DatabaseIcon className="h-16 w-16 text-blue-700 transition-transform duration-300 group-hover:scale-110" />, dataAiHint: "MySQL database" },
      { name: "Firebase", logo: <FirebaseIcon className="h-16 w-16 text-yellow-500 transition-transform duration-300 group-hover:scale-110" />, dataAiHint: "Firebase platform" },
    ],
  },
  {
    name: "DEVOPS & DEPLOYMENT",
    value: "devops",
    technologies: [
      { name: "Docker", logo: <Container className="h-16 w-16 text-sky-500 transition-transform duration-300 group-hover:scale-110" />, dataAiHint: "Docker container" },
      { name: "Kubernetes", logo: <ShipWheel className="h-16 w-16 text-indigo-600 transition-transform duration-300 group-hover:scale-110" />, dataAiHint: "Kubernetes orchestration" },
      { name: "AWS", logo: <Cloud className="h-16 w-16 text-orange-500 transition-transform duration-300 group-hover:scale-110" />, dataAiHint: "AWS cloud" },
      { name: "Google Cloud", logo: <Cloud className="h-16 w-16 text-blue-400 transition-transform duration-300 group-hover:scale-110" />, dataAiHint: "GoogleCloud platform" },
    ],
  },
];

export function TechnologiesSection() {
  return (
    <section id="technologies" className="py-16 md:py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
            What Powers Our Projects
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            Smart tools. Strong results. We craft with a stack trusted by top startups and enterprises alike.
          </p>
        </div>

        <Tabs defaultValue="frontend" className="w-full">
          <div className="flex justify-center mb-10 md:mb-12">
            <TabsList className="bg-muted p-1 rounded-full inline-flex items-center space-x-1">
              {technologyCategories.map((category) => (
                <TabsTrigger
                  key={category.value}
                  value={category.value}
                  className={cn(
                    "px-3 py-1.5 md:px-4 md:py-2 rounded-full text-xs sm:text-sm font-medium transition-colors",
                    "text-muted-foreground",
                    "hover:text-primary",
                    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
                    "data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-md"
                  )}
                >
                  {category.name}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {technologyCategories.map((category) => (
            <TabsContent key={category.value} value={category.value}>
              <div className="mt-8 flex flex-wrap justify-center items-start gap-8 md:gap-12 lg:gap-16">
                {category.technologies.map((tech) => (
                  <div key={tech.name} className="group flex flex-col items-center w-24 md:w-28" data-ai-hint={tech.dataAiHint}>
                    {tech.logo}
                    <p className="mt-3 text-xs sm:text-sm font-medium text-muted-foreground text-center">{tech.name}</p>
                  </div>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}
