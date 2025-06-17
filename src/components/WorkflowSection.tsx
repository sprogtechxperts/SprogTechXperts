
"use client";

import React from 'react';
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { 
  Search, 
  LayoutGrid, 
  DraftingCompass, 
  Code2, 
  ClipboardCheck, 
  CloudUpload, 
  Wrench,
  MoveRight 
} from "lucide-react";
import { cn } from '@/lib/utils';

const workflowStepsData = [
  {
    id: 1,
    title: "Discovery and Requirement Gathering",
    icon: Search,
    nodeColor: "sky",
    labelBg: "bg-sky-100 dark:bg-sky-900/70",
    labelText: "text-sky-700 dark:text-sky-300",
    iconColor: "text-sky-600 dark:text-sky-400",
    badgeColor: "bg-sky-500 dark:bg-sky-600",
  },
  {
    id: 2,
    title: "Planning and Strategy",
    icon: LayoutGrid,
    nodeColor: "green",
    labelBg: "bg-green-100 dark:bg-green-900/70",
    labelText: "text-green-700 dark:text-green-300",
    iconColor: "text-green-600 dark:text-green-400",
    badgeColor: "bg-green-500 dark:bg-green-600",
  },
  {
    id: 3,
    title: "Design Phase",
    icon: DraftingCompass,
    nodeColor: "purple",
    labelBg: "bg-purple-100 dark:bg-purple-900/70",
    labelText: "text-purple-700 dark:text-purple-300",
    iconColor: "text-purple-600 dark:text-purple-400",
    badgeColor: "bg-purple-500 dark:bg-purple-600",
  },
  {
    id: 4,
    title: "Development",
    icon: Code2,
    nodeColor: "amber",
    labelBg: "bg-amber-100 dark:bg-amber-900/70",
    labelText: "text-amber-700 dark:text-amber-300",
    iconColor: "text-amber-600 dark:text-amber-400",
    badgeColor: "bg-amber-500 dark:bg-amber-600",
  },
  {
    id: 5,
    title: "Testing and Quality Assurance",
    icon: ClipboardCheck,
    nodeColor: "rose",
    labelBg: "bg-rose-100 dark:bg-rose-900/70",
    labelText: "text-rose-700 dark:text-rose-300",
    iconColor: "text-rose-600 dark:text-rose-400",
    badgeColor: "bg-rose-500 dark:bg-rose-600",
  },
  {
    id: 6,
    title: "Deployment",
    icon: CloudUpload,
    nodeColor: "violet",
    labelBg: "bg-violet-100 dark:bg-violet-900/70",
    labelText: "text-violet-700 dark:text-violet-300",
    iconColor: "text-violet-600 dark:text-violet-400",
    badgeColor: "bg-violet-500 dark:bg-violet-600",
  },
  {
    id: 7,
    title: "Post-Launch Support",
    icon: Wrench,
    nodeColor: "pink",
    labelBg: "bg-pink-100 dark:bg-pink-900/70",
    labelText: "text-pink-700 dark:text-pink-300",
    iconColor: "text-pink-600 dark:text-pink-400",
    badgeColor: "bg-pink-500 dark:bg-pink-600",
  },
];

const StepNode: React.FC<{ step: typeof workflowStepsData[0] }> = ({ step }) => {
  const IconComponent = step.icon;
  return (
    <div className={cn(
      "relative rounded-full w-24 h-24 md:w-28 md:h-28 flex items-center justify-center shadow-md border-2", 
      `bg-${step.nodeColor}-50 dark:bg-${step.nodeColor}-800/30 border-${step.nodeColor}-300 dark:border-${step.nodeColor}-700`
    )}>
      <IconComponent className={cn("h-10 w-10 md:h-12 md:w-12", step.iconColor)} />
      <div className={cn("absolute -top-2 -right-2 w-7 h-7 md:w-8 md:h-8 rounded-full flex items-center justify-center text-white text-sm font-bold border-2 border-white dark:border-slate-800", step.badgeColor)}>
        {step.id}
      </div>
    </div>
  );
};

const StepLabel: React.FC<{ step: typeof workflowStepsData[0] }> = ({ step }) => {
  return (
    <div className={cn("px-3 py-2 rounded-lg text-center shadow w-full", step.labelBg)}>
      <p className={cn("text-xs md:text-sm font-medium", step.labelText)}>{step.title}</p>
    </div>
  );
};

const StepContainer: React.FC<{ step: typeof workflowStepsData[0], className?: string }> = ({ step, className }) => {
  return (
    <div className={cn("flex flex-col items-center text-center w-[150px] sm:w-[160px] md:w-[180px] space-y-3", className)}>
      <StepNode step={step} />
      <StepLabel step={step} />
    </div>
  );
};

const Arrow: React.FC<{ direction?: 'right' | 'down' | 'left' | 'up', className?: string }> = ({ direction = 'right', className }) => {
  let rotationClass = '';
  if (direction === 'down') rotationClass = 'rotate-90';
  else if (direction === 'left') rotationClass = 'rotate-180';
  else if (direction === 'up') rotationClass = '-rotate-90';
  
  return <MoveRight className={cn("h-8 w-8 md:h-10 md:w-10 text-gray-400 dark:text-gray-500 shrink-0", rotationClass, className)} />;
};


export function WorkflowSection() {
  return (
    <section id="workflow" className="py-16 md:py-24 lg:py-32 bg-slate-50 dark:bg-slate-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <p className="font-headline text-lg text-muted-foreground">How We Work</p>
          <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl mt-2">
            From Idea to Impact — <span className="text-purple-600 dark:text-purple-400">Our Project Workflow</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-12 lg:gap-8 items-start">
          {/* Desktop Diagram */}
          <div className="lg:col-span-2 hidden lg:flex flex-col items-center space-y-4 xl:space-y-6">
            {/* Row 1: Steps 1, 2, 3 */}
            <div className="flex w-full items-start justify-between px-2 sm:px-4 md:px-0">
              <StepContainer step={workflowStepsData[0]} />
              <Arrow className="mt-12" />
              <StepContainer step={workflowStepsData[1]} />
              <Arrow className="mt-12" />
              <StepContainer step={workflowStepsData[2]} />
            </div>

            {/* Arrow from 3 down to 4 */}
            <div className="w-full flex justify-end">
              <div className="w-1/3 flex justify-center pr-0 md:pr-4 xl:pr-8"> {/* Aligns arrow under Step 3's area */}
                <Arrow direction="down" className="my-1 md:my-2" />
              </div>
            </div>
            
            {/* Row 2: Steps 6, 5, 4 (visual order) */}
            <div className="flex w-full items-start justify-between px-2 sm:px-4 md:px-0">
              <StepContainer step={workflowStepsData[5]} /> {/* Step 6 */}
              <Arrow direction="left" className="mt-12" />
              <StepContainer step={workflowStepsData[4]} /> {/* Step 5 */}
              <Arrow direction="left" className="mt-12" />
              <StepContainer step={workflowStepsData[3]} /> {/* Step 4 */}
            </div>

            {/* Arrow from 6 down to 7 */}
            <div className="w-full flex justify-start">
              <div className="w-1/3 flex justify-center pl-0 md:pl-4 xl:pl-8"> {/* Aligns arrow under Step 6's area */}
                <Arrow direction="down" className="my-1 md:my-2" />
              </div>
            </div>

            {/* Row 3: Step 7 (aligned under Step 6) */}
            <div className="w-full flex justify-start">
              <div className="w-1/3 flex justify-center pl-0 md:pl-4 xl:pl-8"> {/* Aligns Step 7 under Step 6's area */}
                 <StepContainer step={workflowStepsData[6]} />
              </div>
            </div>
          </div>

          {/* Mobile View - Vertical List */}
          <div className="lg:hidden space-y-8">
            {workflowStepsData.map((step) => {
              const IconComponent = step.icon;
              return (
                <div key={step.id} className={cn(
                  "p-6 shadow-lg rounded-xl flex items-start space-x-4",
                  `bg-${step.nodeColor}-50 dark:bg-${step.nodeColor}-900/40 border-l-4 border-${step.nodeColor}-500 dark:border-${step.nodeColor}-600`
                )}>
                  <div className={cn("p-3 rounded-full shrink-0 mt-1", `bg-${step.nodeColor}-100 dark:bg-${step.nodeColor}-500/20`)}>
                    <IconComponent className={cn("h-7 w-7", step.iconColor)} />
                  </div>
                  <div>
                    <h3 className="font-headline text-lg font-semibold text-foreground">{step.id}. {step.title}</h3>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Text and Buttons Block */}
          <div className="lg:col-span-1 bg-card p-6 md:p-8 rounded-2xl shadow-xl border border-border">
            <h3 className="font-headline text-2xl font-bold text-foreground mb-4">
              Your Journey Ends Here — <br className="hidden sm:inline"/>and a New One Begins!
            </h3>
            <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
              You&apos;ve seen how we bring ideas to life. Now, let&apos;s bring yours into the world — with purpose, precision, and passion. Whether you&apos;re starting from scratch or scaling something big, we&apos;re ready to help you make an impact.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                asChild 
                size="lg" 
                className="flex-1 bg-teal-500 hover:bg-teal-600 text-white shadow-md hover:shadow-lg transition-shadow dark:bg-teal-600 dark:hover:bg-teal-700"
              >
                <Link href="#contact">START YOUR PROJECT</Link>
              </Button>
              <Button 
                asChild 
                size="lg" 
                variant="outline" 
                className="flex-1 border-teal-500 text-teal-500 hover:bg-teal-500/10 hover:text-teal-600 shadow-sm hover:shadow-md transition-shadow dark:border-teal-600 dark:text-teal-400 dark:hover:bg-teal-600/20 dark:hover:text-teal-500"
              >
                <Link href="#contact">GET A FREE QUOTE</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

