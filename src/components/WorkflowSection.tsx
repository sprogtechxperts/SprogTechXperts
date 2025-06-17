
'use client'

import React from 'react'; // Added import
import {
  Search,
  LayoutGrid,
  DraftingCompass,
  Code2,
  ClipboardCheck,
  CloudUpload,
  Wrench,
  ArrowRight,
  ArrowDown,
} from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import type { ReactNode } from 'react'; // Changed from `type React` to `type { ReactNode }`

interface StepProps {
  icon: ReactNode
  number: number
  title: string
  bgColor: string
  textColor: string
  badgeColor: string
  badgeTextColor: string
  isMobile?: boolean
}

const StepNode: React.FC<Pick<StepProps, 'icon' | 'number' | 'bgColor' | 'textColor' | 'badgeColor' | 'badgeTextColor'>> = ({
  icon,
  number,
  bgColor,
  textColor,
  badgeColor,
  badgeTextColor,
}) => (
  <div className={cn("relative rounded-full w-16 h-16 md:w-20 md:h-20 flex items-center justify-center shadow-lg", bgColor, textColor)}>
    {icon}
    <span
      className={cn(
        "absolute -top-2 -right-2 w-6 h-6 md:w-7 md:h-7 rounded-full flex items-center justify-center text-xs md:text-sm font-bold border-2 border-white dark:border-slate-800",
        badgeColor,
        badgeTextColor
      )}
    >
      {number}
    </span>
  </div>
)

const StepLabel: React.FC<Pick<StepProps, 'title' | 'bgColor' | 'textColor'>> = ({ title, bgColor, textColor }) => (
  <div className={cn("mt-3 md:mt-0 md:ml-4 p-3 rounded-lg shadow-md w-full md:w-40 min-h-[4.5rem] flex items-center justify-center text-center", bgColor, textColor)}>
    <p className="text-xs font-semibold">{title}</p>
  </div>
)

const StepContainer: React.FC<StepProps & { children?: ReactNode }> = ({
  icon,
  number,
  title,
  bgColor,
  textColor,
  badgeColor,
  badgeTextColor,
  isMobile = false,
  children,
}) => {
  if (isMobile) {
    return (
      <div className={cn("flex items-center w-full p-4 rounded-lg shadow-lg mb-4", bgColor)}>
        <div className={cn("p-3 rounded-full mr-4", badgeColor, badgeTextColor)}>
          {React.cloneElement(icon as React.ReactElement, { className: cn("w-6 h-6", textColor)})}
        </div>
        <div>
          <h4 className={cn("font-bold text-sm", textColor)}>{`${number}. ${title}`}</h4>
        </div>
      </div>
    )
  }

  return (
    <div className="flex flex-col items-center text-center md:flex-row md:items-start md:text-left md:max-w-xs lg:max-w-sm">
      <StepNode icon={icon} number={number} bgColor={bgColor} textColor={textColor} badgeColor={badgeColor} badgeTextColor={badgeTextColor} />
      <StepLabel title={title} bgColor={bgColor} textColor={textColor} />
      {children}
    </div>
  )
}

const HorizontalArrow: React.FC<{ className?: string; reverse?: boolean }> = ({ className, reverse = false }) => (
  <div className={cn("flex-grow flex items-center justify-center mx-1 my-4 md:my-0 md:mx-2", className)}> {/* Adjusted margin for mobile stacking */}
    <ArrowRight className={cn("w-6 h-6 md:w-8 md:h-8 text-gray-400 dark:text-gray-500", reverse && "transform rotate-180")} />
  </div>
)

const VerticalArrow: React.FC<{ className?: string }> = ({ className }) => (
  <div className={cn("flex items-center justify-center my-2 md:my-4", className)}>
    <ArrowDown className="w-6 h-6 md:w-8 md:h-8 text-gray-400 dark:text-gray-500" />
  </div>
)


const workflowSteps = [
  {
    icon: <Search className="w-8 h-8 md:w-10 md:h-10" />,
    title: 'Discovery & Requirement Gathering',
    bgColor: 'bg-sky-100 dark:bg-sky-700/50',
    textColor: 'text-sky-700 dark:text-sky-200',
    badgeColor: 'bg-sky-500',
    badgeTextColor: 'text-white',
  },
  {
    icon: <LayoutGrid className="w-8 h-8 md:w-10 md:h-10" />,
    title: 'Planning & Strategy',
    bgColor: 'bg-indigo-100 dark:bg-indigo-700/50',
    textColor: 'text-indigo-700 dark:text-indigo-200',
    badgeColor: 'bg-indigo-500',
    badgeTextColor: 'text-white',
  },
  {
    icon: <DraftingCompass className="w-8 h-8 md:w-10 md:h-10" />,
    title: 'Design Phase (UI/UX)',
    bgColor: 'bg-emerald-100 dark:bg-emerald-700/50',
    textColor: 'text-emerald-700 dark:text-emerald-200',
    badgeColor: 'bg-emerald-500',
    badgeTextColor: 'text-white',
  },
  {
    icon: <Code2 className="w-8 h-8 md:w-10 md:h-10" />,
    title: 'Development',
    bgColor: 'bg-amber-100 dark:bg-amber-700/50',
    textColor: 'text-amber-700 dark:text-amber-200',
    badgeColor: 'bg-amber-500',
    badgeTextColor: 'text-white',
  },
  {
    icon: <ClipboardCheck className="w-8 h-8 md:w-10 md:h-10" />,
    title: 'Testing & QA',
    bgColor: 'bg-rose-100 dark:bg-rose-700/50',
    textColor: 'text-rose-700 dark:text-rose-200',
    badgeColor: 'bg-rose-500',
    badgeTextColor: 'text-white',
  },
  {
    icon: <CloudUpload className="w-8 h-8 md:w-10 md:h-10" />,
    title: 'Deployment',
    bgColor: 'bg-fuchsia-100 dark:bg-fuchsia-700/50',
    textColor: 'text-fuchsia-700 dark:text-fuchsia-200',
    badgeColor: 'bg-fuchsia-500',
    badgeTextColor: 'text-white',
  },
  {
    icon: <Wrench className="w-8 h-8 md:w-10 md:h-10" />,
    title: 'Post-Launch Support',
    bgColor: 'bg-slate-200 dark:bg-slate-700',
    textColor: 'text-slate-700 dark:text-slate-200',
    badgeColor: 'bg-slate-500',
    badgeTextColor: 'text-white',
  },
]

export function WorkflowSection() {
  return (
    <section id="workflow" className="py-16 md:py-24 lg:py-32 bg-slate-50 dark:bg-slate-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <h3 className="font-headline text-lg text-muted-foreground sm:text-xl">
            How We Work
          </h3>
          <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl mt-1">
            From Idea to Impact — <span className="text-purple-600 dark:text-purple-400">Our Project Workflow</span>
          </h2>
        </div>

        {/* Desktop Workflow Diagram */}
        <div className="hidden md:block mb-16 --step-width:10rem; lg:--step-width:12rem;"> {/* Custom property for alignment assist */}
          {/* Row 1: Steps 1-2-3 */}
          <div className="flex flex-col md:flex-row justify-around items-center md:items-start mb-4 md:mb-0">
            <StepContainer {...workflowSteps[0]} number={1} />
            <HorizontalArrow className="hidden md:flex" />
            <VerticalArrow className="md:hidden" />
            <StepContainer {...workflowSteps[1]} number={2} />
            <HorizontalArrow className="hidden md:flex" />
            <VerticalArrow className="md:hidden" />
            <StepContainer {...workflowSteps[2]} number={3} />
          </div>

          {/* Connector from Step 3 down to Step 4 area */}
          <div className="flex justify-end">
             <div className="w-full md:w-1/3 flex justify-center md:justify-end md:pr-[calc(var(--step-width,10rem)/2_-_1rem)] lg:pr-[calc(var(--step-width,12rem)/2_-_1.25rem)]"> {/* Alignment helper */}
              <VerticalArrow />
            </div>
          </div>
          
          {/* Row 2: Steps 6-5-4 (visually as 4-5-6 with correct arrows) */}
          <div className="flex flex-col-reverse md:flex-row justify-around items-center md:items-start mb-4 md:mb-0">
            <StepContainer {...workflowSteps[5]} number={6} />
            <HorizontalArrow className="hidden md:flex" reverse={true}/>
            <VerticalArrow className="md:hidden transform rotate-180" /> {/* Pointing up for mobile flow */}
            <StepContainer {...workflowSteps[4]} number={5} />
            <HorizontalArrow className="hidden md:flex" reverse={true}/>
            <VerticalArrow className="md:hidden transform rotate-180" /> {/* Pointing up for mobile flow */}
            <StepContainer {...workflowSteps[3]} number={4} />
          </div>
          
          {/* Connector from Step 4 (visually left-most in second row on desktop) down to Step 7 area */}
           <div className="flex justify-start">
             <div className="w-full md:w-1/3 flex justify-center md:justify-start md:pl-[calc(var(--step-width,10rem)/2_-_1rem)] lg:pl-[calc(var(--step-width,12rem)/2_-_1.25rem)]"> {/* Alignment helper */}
                 <VerticalArrow />
             </div>
           </div>

          {/* Row 3: Step 7 (aligned under Step 4 on desktop) */}
          <div className="flex justify-start">
             <div className="w-full md:w-1/3 flex justify-center md:justify-start md:pl-[calc(var(--step-width,10rem)/2_-_1rem)] lg:pl-[calc(var(--step-width,12rem)/2_-_1.25rem)]"> {/* Alignment helper */}
                <StepContainer {...workflowSteps[6]} number={7} />
             </div>
          </div>
        </div>


        {/* Mobile Workflow List */}
        <div className="md:hidden space-y-6">
          {workflowSteps.map((step, index) => (
            <React.Fragment key={step.title}>
              <StepContainer
                {...step}
                number={index + 1}
                isMobile={true}
              />
              {index < workflowSteps.length - 1 && (
                 <div className="flex justify-center">
                    <VerticalArrow />
                 </div>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Call to Action Block */}
        <div className="mt-16 md:mt-24 lg:mt-32 grid md:grid-cols-5 gap-8 lg:gap-12 items-center">
          <div className="md:col-span-3 md:col-start-2 text-center bg-card p-8 md:p-12 rounded-2xl shadow-xl">
            <h3 className="font-headline text-2xl font-bold text-foreground mb-4">
              Your Journey Ends Here — and a New One Begins!
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-8 max-w-xl mx-auto">
              You’ve seen how we bring ideas to life. Now, let’s bring yours into the world — with purpose, precision, and passion. Whether you’re starting from scratch or scaling something big, we’re ready to help you make an impact.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild size="lg" className="bg-teal-500 hover:bg-teal-600 text-white shadow-lg hover:shadow-teal-500/40 transition-shadow">
                <Link href="#contact">START YOUR PROJECT</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-teal-500 text-teal-600 hover:text-teal-700 hover:bg-teal-500/10 dark:text-teal-400 dark:hover:text-teal-300 dark:border-teal-400 dark:hover:bg-teal-400/10 shadow-lg hover:shadow-teal-500/20 transition-shadow">
                <Link href="#contact">GET A FREE QUOTE</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
