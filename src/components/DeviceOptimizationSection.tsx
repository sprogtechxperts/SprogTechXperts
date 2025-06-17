import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Smartphone, Apple, Globe } from "lucide-react"; // Assuming Apple icon is available or use a generic one

const devices = [
  {
    icon: <Smartphone className="h-10 w-10 text-primary" />,
    platform: "Android",
    stats: [
      { label: "Speed", value: 99 },
      { label: "Compatibility", value: 95 },
    ],
  },
  {
    icon: <Apple className="h-10 w-10 text-primary" />, // Placeholder for Apple icon
    platform: "Apple",
    stats: [
      { label: "Speed", value: 98 },
      { label: "Compatibility", value: 97 },
    ],
  },
  {
    icon: <Globe className="h-10 w-10 text-primary" />,
    platform: "Web",
    stats: [
      { label: "Speed", value: 97 },
      { label: "Compatibility", value: 99 },
    ],
  },
];

export function DeviceOptimizationSection() {
  return (
    <section id="optimization" className="py-16 md:py-24 lg:py-32 bg-secondary/50 dark:bg-secondary/20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
            Optimized for <span className="text-primary">Every Device</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            We ensure your applications perform flawlessly across all platforms, delivering a consistent and exceptional user experience.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {devices.map((device) => (
            <Card key={device.platform} className="shadow-lg rounded-xl">
              <CardHeader className="items-center text-center">
                 <div className="p-4 bg-primary/10 rounded-full mb-4 inline-block">
                  {device.icon}
                </div>
                <CardTitle className="font-headline text-2xl">{device.platform}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {device.stats.map((stat) => (
                  <div key={stat.label}>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium text-foreground">{stat.label}</span>
                      <span className="text-sm font-medium text-primary">{stat.value}%</span>
                    </div>
                    <Progress value={stat.value} aria-label={`${device.platform} ${stat.label} ${stat.value}%`} className="h-3"/>
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
