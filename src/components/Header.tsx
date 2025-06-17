import Link from 'next/link';
import { ThemeToggle } from '@/components/ThemeToggle';
import { MountainIcon } from 'lucide-react'; // Using MountainIcon as a placeholder logo

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-screen-2xl items-center justify-between">
        <Link href="/" className="flex items-center space-x-2" aria-label="SmoothTechExperts Home">
          <MountainIcon className="h-6 w-6 text-primary" />
          <span className="font-headline text-xl font-semibold text-foreground">SmoothTechExperts</span>
        </Link>
        <nav className="flex items-center space-x-4">
          {/* Navigation links can be added here if needed in the future */}
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
