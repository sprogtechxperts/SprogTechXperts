
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Target, Users, Code2, Handshake } from "lucide-react"; // Updated icons

const trustFactors = [
  {
    icon: <Target className="h-8 w-8 text-orange-500 dark:text-orange-400" />,
    title: "Real Experience, Startup Mindset",
    description: "We bring years of hands-on software experience with the flexibility and hustle of a startup. Fast, focused, and future-ready.",
  },
  {
    icon: <Users className="h-8 w-8 text-orange-500 dark:text-orange-400" />,
    title: "User-Centric, Scalable Solutions",
    description: "We focus on core functionality and market validation first — then iterate based on user feedback to ensure your product evolves with your audience.",
  },
  {
    icon: <Code2 className="h-8 w-8 text-orange-500 dark:text-orange-400" />,
    title: "Modern Tech, Clean Delivery",
    description: "We build using cutting-edge tools like Next.js, Tailwind CSS, Shadcn UI, and PostgreSQL, with strong documentation, clean code, and clear communication at every step.",
  },
  {
    icon: <Handshake className="h-8 w-8 text-orange-500 dark:text-orange-400" />,
    title: "Built on Trust & Transparency",
    description: "We treat your project like our own. No fluff, no guesswork — just clear progress, honest timelines, and results you can count on.",
  },
];

export function TrustSection() {
  return (
    <section id="trust" className="py-16 md:py-24 lg:py-32 bg-secondary/50 dark:bg-secondary/20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-10 md:mb-12">
          <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
            WHY CLIENT <span className="text-primary">TRUST US</span>
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto mt-3 mb-4"></div>
          {/* Removed the general paragraph from here as it's not in the image for this section */}
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-2"> 
          {/* Changed to sm:grid-cols-2 lg:grid-cols-2 for 2x2 layout on larger screens */}
          {trustFactors.map((factor) => (
            <Card key={factor.title} className="shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-xl">
              <CardHeader className="flex flex-row items-start space-x-4 p-6">
                <div className="p-3 bg-orange-100 dark:bg-orange-500/20 rounded-lg mt-1 shrink-0">
                  {factor.icon}
                </div>
                <div>
                  <CardTitle className="font-headline text-xl leading-tight">{factor.title}</CardTitle>
                   <p className="text-muted-foreground text-sm mt-2">{factor.description}</p>
                </div>
              </CardHeader>
              {/* CardContent is not strictly needed if description is in CardHeader's div */}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
