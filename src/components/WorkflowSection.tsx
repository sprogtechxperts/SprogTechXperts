import { Card, CardContent } from "@/components/ui/card";
import { PhoneCall, Search, DraftingCompass, Code, ClipboardCheck, Rocket, ChevronRight } from "lucide-react";

const workflowSteps = [
  {
    icon: <PhoneCall className="h-8 w-8 text-primary" />,
    title: "Kickoff Call",
    description: "Understanding your vision, goals, and requirements.",
  },
  {
    icon: <Search className="h-8 w-8 text-primary" />,
    title: "Research & Planning",
    description: "In-depth analysis and strategic planning for your project.",
  },
  {
    icon: <DraftingCompass className="h-8 w-8 text-primary" />,
    title: "Wireframes & Design",
    description: "Creating intuitive user interfaces and engaging designs.",
  },
  {
    icon: <Code className="h-8 w-8 text-primary" />,
    title: "Development",
    description: "Building your solution with clean, efficient code.",
  },
  {
    icon: <ClipboardCheck className="h-8 w-8 text-primary" />,
    title: "Testing & QA",
    description: "Rigorous testing to ensure quality and performance.",
  },
  {
    icon: <Rocket className="h-8 w-8 text-primary" />,
    title: "Launch & Support",
    description: "Deploying your project and providing ongoing support.",
  },
];

export function WorkflowSection() {
  return (
    <section id="workflow" className="py-16 md:py-24 lg:py-32 bg-secondary/50 dark:bg-secondary/20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
            From Idea to Impact – Our Project <span className="text-primary">Workflow</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Our streamlined process ensures efficient development and successful project delivery.
          </p>
        </div>
        <div className="relative">
          {/* Desktop view: Horizontal with Chevrons */}
          <div className="hidden md:flex flex-col items-center md:flex-row md:justify-between md:space-x-4 lg:space-x-8">
            {workflowSteps.map((step, index) => (
              <React.Fragment key={step.title}>
                <div className="flex-1 min-w-0 group">
                  <Card className="text-center p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-xl h-full flex flex-col justify-start">
                    <div className="mb-4 inline-flex items-center justify-center p-3 bg-primary/10 rounded-full">
                      {step.icon}
                    </div>
                    <h3 className="font-headline text-xl font-semibold mb-2">{step.title}</h3>
                    <p className="text-sm text-muted-foreground">{step.description}</p>
                  </Card>
                </div>
                {index < workflowSteps.length - 1 && (
                  <ChevronRight className="h-12 w-12 text-primary/50 shrink-0" />
                )}
              </React.Fragment>
            ))}
          </div>
          {/* Mobile view: Vertical list */}
          <div className="md:hidden space-y-8">
            {workflowSteps.map((step) => (
               <Card key={step.title} className="text-center p-6 shadow-lg rounded-xl">
                <div className="mb-4 inline-flex items-center justify-center p-3 bg-primary/10 rounded-full">
                  {step.icon}
                </div>
                <h3 className="font-headline text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// Need React for Fragment
import React from 'react';
