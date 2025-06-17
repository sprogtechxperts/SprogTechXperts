
"use client";

import React from 'react';
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { 
  Search, 
  LayoutGrid, // For Planning/Strategy as per image style
  DraftingCompass, 
  Code2, 
  ClipboardCheck, 
  CloudUpload, 
  Wrench,
  ArrowRight,
  MoveRight // Lucide icon for arrow
} from "lucide-react";
import { cn } from '@/lib/utils';

const workflowStepsData = [
  {
    id: 1,
    title: "Discovery and Requirement Gathering",
    icon: Search,
    nodeColor: "sky",
    labelBg: "bg-sky-100 dark:bg-sky-900",
    labelText: "text-sky-700 dark:text-sky-300",
    iconColor: "text-sky-600 dark:text-sky-400",
    badgeColor: "bg-sky-500",
  },
  {
    id: 2,
    title: "Planning and Strategy",
    icon: LayoutGrid,
    nodeColor: "green",
    labelBg: "bg-green-100 dark:bg-green-900",
    labelText: "text-green-700 dark:text-green-300",
    iconColor: "text-green-600 dark:text-green-400",
    badgeColor: "bg-green-500",
  },
  {
    id: 3,
    title: "Design Phase",
    icon: DraftingCompass,
    nodeColor: "purple",
    labelBg: "bg-purple-100 dark:bg-purple-900",
    labelText: "text-purple-700 dark:text-purple-300",
    iconColor: "text-purple-600 dark:text-purple-400",
    badgeColor: "bg-purple-500",
  },
  {
    id: 4,
    title: "Development",
    icon: Code2,
    nodeColor: "amber",
    labelBg: "bg-amber-100 dark:bg-amber-900",
    labelText: "text-amber-700 dark:text-amber-300",
    iconColor: "text-amber-600 dark:text-amber-400",
    badgeColor: "bg-amber-500",
  },
  {
    id: 5,
    title: "Testing and Quality Assurance",
    icon: ClipboardCheck,
    nodeColor: "rose",
    labelBg: "bg-rose-100 dark:bg-rose-900",
    labelText: "text-rose-700 dark:text-rose-300",
    iconColor: "text-rose-600 dark:text-rose-400",
    badgeColor: "bg-rose-500",
  },
  {
    id: 6,
    title: "Deployment",
    icon: CloudUpload,
    nodeColor: "violet",
    labelBg: "bg-violet-100 dark:bg-violet-900",
    labelText: "text-violet-700 dark:text-violet-300",
    iconColor: "text-violet-600 dark:text-violet-400",
    badgeColor: "bg-violet-500",
  },
  {
    id: 7,
    title: "Post-Launch Support",
    icon: Wrench,
    nodeColor: "pink",
    labelBg: "bg-pink-100 dark:bg-pink-900",
    labelText: "text-pink-700 dark:text-pink-300",
    iconColor: "text-pink-600 dark:text-pink-400",
    badgeColor: "bg-pink-500",
  },
];

const StepNode: React.FC<{ step: typeof workflowStepsData[0] }> = ({ step }) => {
  const IconComponent = step.icon;
  return (
    <div className={cn("relative rounded-full w-24 h-24 md:w-28 md:h-28 flex items-center justify-center shadow-md", `bg-${step.nodeColor}-100 dark:bg-${step.nodeColor}-800/50`)}>
      <IconComponent className={cn("h-10 w-10 md:h-12 md:w-12", step.iconColor)} />
      <div className={cn("absolute -top-2 -right-2 w-7 h-7 md:w-8 md:h-8 rounded-full flex items-center justify-center text-white text-sm font-bold", step.badgeColor)}>
        {step.id}
      </div>
    </div>
  );
};

const StepLabel: React.FC<{ step: typeof workflowStepsData[0] }> = ({ step }) => {
  return (
    <div className={cn("px-3 py-2 rounded-lg text-center shadow", step.labelBg)}>
      <p className={cn("text-xs md:text-sm font-medium", step.labelText)}>{step.title}</p>
    </div>
  );
};

const Arrow: React.FC<{ direction?: 'right' | 'down' | 'left' | 'up', className?: string }> = ({ direction = 'right', className }) => {
  // Using a simple div styled as an arrow or a Lucide icon
  // For complex paths, SVGs would be needed, which is beyond simple Tailwind.
  return <MoveRight className={cn("h-6 w-6 md:h-8 md:w-8 text-gray-400 dark:text-gray-500 mx-2 md:mx-4", className,
    direction === 'down' ? 'rotate-90' : '',
    direction === 'left' ? 'rotate-180' : '',
    direction === 'up' ? '-rotate-90' : ''
  )} />;
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
          {/* Desktop Diagram - Simplified Flow */}
          <div className="lg:col-span-2 hidden lg:block">
            <div className="space-y-8">
              {/* Row 1: Steps 1 -> 2 -> 3 */}
              <div className="flex items-center justify-around">
                <div className="flex flex-col items-center text-center max-w-[180px]">
                  <StepNode step={workflowStepsData[0]} />
                  <StepLabel step={workflowStepsData[0]} />
                </div>
                <Arrow />
                <div className="flex flex-col items-center text-center max-w-[180px]">
                  <StepNode step={workflowStepsData[1]} />
                  <StepLabel step={workflowStepsData[1]} />
                </div>
                <Arrow />
                <div className="flex flex-col items-center text-center max-w-[180px]">
                  <StepNode step={workflowStepsData[2]} />
                  <StepLabel step={workflowStepsData[2]} />
                </div>
              </div>

              {/* Connector down from step 3 */}
              <div className="flex justify-end pr-[calc(33%-20px)]"> {/* Adjust pr to align under step 3 */}
                 <Arrow direction="down" className="my-4" />
              </div>
              
              {/* Row 2: Steps 6 <- 5 <- 4 (reversed order for layout) */}
              <div className="flex items-center justify-around">
                 <div className="flex flex-col items-center text-center max-w-[180px]">
                  <StepNode step={workflowStepsData[5]} /> {/* Step 6 in design */}
                  <StepLabel step={workflowStepsData[5]} />
                </div>
                <Arrow direction="left" />
                 <div className="flex flex-col items-center text-center max-w-[180px]">
                  <StepNode step={workflowStepsData[4]} />
                  <StepLabel step={workflowStepsData[4]} />
                </div>
                <Arrow direction="left"/>
                 <div className="flex flex-col items-center text-center max-w-[180px]">
                  <StepNode step={workflowStepsData[3]} />
                  <StepLabel step={workflowStepsData[3]} />
                </div>
              </div>

              {/* Connector up to step 6 from step 7 */}
               <div className="flex justify-start pl-[calc(33%-20px)]"> {/* Adjust pl to align under step 6 (visually step 7 goes to 6) */}
                 <Arrow direction="up" className="my-4" />
              </div>

              {/* Row 3: Step 7 */}
              <div className="flex items-center justify-start pl-[calc(33%-90px)]"> {/* Align step 7 under step 6 */}
                 <div className="flex flex-col items-center text-center max-w-[180px]">
                  <StepNode step={workflowStepsData[6]} />
                  <StepLabel step={workflowStepsData[6]} />
                </div>
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
                  `bg-${step.nodeColor}-50 dark:bg-${step.nodeColor}-900/30 border-l-4 border-${step.nodeColor}-500`
                )}>
                  <div className={cn("p-3 rounded-full shrink-0", `bg-${step.nodeColor}-100 dark:bg-${step.nodeColor}-500/20`)}>
                    <IconComponent className={cn("h-7 w-7", step.iconColor)} />
                  </div>
                  <div>
                    <h3 className="font-headline text-lg font-semibold text-foreground">{step.id}. {step.title}</h3>
                    {/* Description can be added here if needed for mobile */}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Text and Buttons Block */}
          <div className="lg:col-span-1 bg-card p-6 md:p-8 rounded-2xl shadow-xl">
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
                className="flex-1 bg-teal-500 hover:bg-teal-600 text-white shadow-md hover:shadow-lg transition-shadow"
              >
                <Link href="#contact">START YOUR PROJECT</Link>
              </Button>
              <Button 
                asChild 
                size="lg" 
                variant="outline" 
                className="flex-1 border-teal-500 text-teal-500 hover:bg-teal-500/10 hover:text-teal-600 shadow-sm hover:shadow-md transition-shadow"
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
