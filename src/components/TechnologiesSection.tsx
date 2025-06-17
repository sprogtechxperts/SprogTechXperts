const technologies = [
  {
    name: "React",
    logo: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="-11.5 -10.23174 23 20.46348" fill="currentColor" className="h-16 w-16 text-primary transition-transform duration-300 group-hover:scale-110">
        <title>React Logo</title>
        <circle cx="0" cy="0" r="2.05" fill="currentColor"></circle>
        <g stroke="currentColor" strokeWidth="1" fill="none">
          <ellipse rx="11" ry="4.2"></ellipse>
          <ellipse rx="11" ry="4.2" transform="rotate(60)"></ellipse>
          <ellipse rx="11" ry="4.2" transform="rotate(120)"></ellipse>
        </g>
      </svg>
    ),
    dataAiHint: "React framework",
  },
  {
    name: "Next.js",
    logo: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 128 128" className="h-16 w-16 text-primary transition-transform duration-300 group-hover:scale-110">
        <title>Next.js Logo</title>
        <path d="M64 0C28.7 0 0 28.7 0 64s28.7 64 64 64 64-28.7 64-64S99.3 0 64 0zm0 119.5C33.2 119.5 8.5 94.8 8.5 64S33.2 8.5 64 8.5s55.5 24.7 55.5 55.5S94.8 119.5 64 119.5z"/>
        <path d="M90.3 41h13.2L69.7 90.3h-13L90.3 41zm-40.7 0h29.5v8.3H49.6v32.7H41V41z"/>
      </svg>
    ),
    dataAiHint: "Nextjs framework",
  },
  {
    name: "Node.js",
    logo: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 256 256" fill="currentColor" className="h-16 w-16 text-primary transition-transform duration-300 group-hover:scale-110">
        <title>Node.js Logo</title>
        <path d="M224.2,104.27,141.61,30.79a20,20,0,0,0-27.22,0L31.8,104.27a19.9,19.9,0,0,0-9.74,22.69l28.18,98.62a19.88,19.88,0,0,0,18.69,14.42H187.07a19.88,19.88,0,0,0,18.69-14.42l28.18-98.62A19.9,19.9,0,0,0,224.2,104.27ZM191.8,221.85a4,4,0,0,1-3.73,2.9H67.93a4,4,0,0,1-3.73-2.9L36.27,127.73a3.94,3.94,0,0,1,1.94-4.52L120.8,50.29a4,4,0,0,1,14.4,0l82.59,72.92a3.94,3.94,0,0,1,1.94,4.52Z"/>
        <path d="M132.26,118.48a12,12,0,0,0-16.72-1.7L82.4,138.63a12,12,0,1,0,13.43,20.14L114,146.1v24.7a12,12,0,0,0,24,0v-44A12,12,0,0,0,132.26,118.48Z"/>
      </svg>
    ),
    dataAiHint: "Nodejs javascript",
  },
  {
    name: "Angular",
    logo: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="h-16 w-16 text-primary transition-transform duration-300 group-hover:scale-110">
        <title>Angular Logo</title>
        <path d="M12 2L1 8l2.38 11.13L12 22l8.62-2.87L23 8zm0 2.31L19.59 8H4.41zM12 12.92L17.62 8h-3.07L12 10.34zm-2.45-4.92h4.9L12 5.27zm2.45 7.87L8.38 8h3.07L14.45 12zm0-3.46L15.55 8H8.45z"/>
      </svg>
    ),
    dataAiHint: "Angular framework",
  },
];

export function TechnologiesSection() {
  return (
    <section id="technologies" className="py-16 md:py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
            We’ve Powered Projects <span className="text-primary">With</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Our team is proficient in a wide range of modern technologies to build robust and scalable solutions.
          </p>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 lg:gap-16">
          {technologies.map((tech) => (
            <div key={tech.name} className="group flex flex-col items-center" data-ai-hint={tech.dataAiHint}>
              {tech.logo}
              <p className="mt-2 text-sm font-medium text-muted-foreground">{tech.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
