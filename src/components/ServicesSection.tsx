import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Laptop, Smartphone, ShoppingCart, Rocket, LineChart, Palette } from "lucide-react";

const services = [
  {
    icon: <Laptop className="h-8 w-8 text-primary" />,
    title: "Website Development",
    description: "Crafting responsive, high-performance websites tailored to your brand and business goals.",
  },
  {
    icon: <Smartphone className="h-8 w-8 text-primary" />,
    title: "Mobile App Development",
    description: "Building intuitive and engaging mobile applications for iOS and Android platforms.",
  },
  {
    icon: <ShoppingCart className="h-8 w-8 text-primary" />,
    title: "E-commerce Solutions",
    description: "Developing robust e-commerce platforms that drive sales and enhance customer experience.",
  },
  {
    icon: <Rocket className="h-8 w-8 text-primary" />,
    title: "MVP Prototyping",
    description: "Rapidly developing Minimum Viable Products to test ideas and gather user feedback.",
  },
  {
    icon: <LineChart className="h-8 w-8 text-primary" />,
    title: "SEO & Marketing",
    description: "Optimizing your online presence and creating effective marketing strategies to boost visibility.",
  },
  {
    icon: <Palette className="h-8 w-8 text-primary" />,
    title: "UI/UX Design",
    description: "Designing user-centric interfaces that are both aesthetically pleasing and highly functional.",
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="py-16 md:py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
            Services Built for <span className="text-primary">Growth</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            We offer a comprehensive suite of services to bring your digital vision to life.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Card key={service.title} className="shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-xl">
              <CardHeader className="flex flex-row items-center gap-4 pb-2">
                <div className="p-3 bg-primary/10 rounded-md">
                 {service.icon}
                </div>
                <CardTitle className="font-headline text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
