import Link from 'next/link';
import { MountainIcon } from 'lucide-react'; // Using MountainIcon as a placeholder logo

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-card text-card-foreground">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 py-8 sm:flex-row md:px-6">
        <Link href="/" className="flex items-center space-x-2" aria-label="SmoothTechExperts Home">
          <MountainIcon className="h-6 w-6 text-primary" />
          <span className="font-headline text-lg font-semibold">SmoothTechExperts</span>
        </Link>
        <p className="text-sm text-muted-foreground">
          © {currentYear} SmoothTechExperts. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
