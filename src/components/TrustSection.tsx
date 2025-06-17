import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CircleDollarSign, Award, Users } from "lucide-react";

const trustFactors = [
  {
    icon: <CircleDollarSign className="h-10 w-10 text-primary" />,
    title: "Transparent Pricing",
    description: "No hidden fees, no surprises. We believe in clear and upfront pricing for all our services, ensuring you know exactly what you're paying for.",
  },
  {
    icon: <Award className="h-10 w-10 text-primary" />,
    title: "Quality First Delivery",
    description: "Our commitment to excellence means we deliver high-quality, rigorously tested solutions that meet the highest industry standards.",
  },
  {
    icon: <Users className="h-10 w-10 text-primary" />,
    title: "Strong Tech Partnerships",
    description: "We collaborate with leading technology providers to bring you the best tools and integrations, ensuring your project is built for success.",
  },
];

export function TrustSection() {
  return (
    <section id="trust" className="py-16 md:py-24 lg:py-32 bg-secondary/50 dark:bg-secondary/20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
            Why Clients <span className="text-primary">Trust Us</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            We build lasting relationships based on trust, transparency, and a shared vision for success.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {trustFactors.map((factor) => (
            <Card key={factor.title} className="flex flex-col items-center text-center shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-xl">
              <CardHeader className="items-center">
                <div className="p-4 bg-primary/10 rounded-full mb-4">
                  {factor.icon}
                </div>
                <CardTitle className="font-headline text-2xl">{factor.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{factor.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
