import Link from 'next/link';
import { ThemeToggle } from '@/components/ThemeToggle';
import { MountainIcon } from 'lucide-react'; // Using MountainIcon as a placeholder logo

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-screen-2xl items-center justify-between">
        <Link href="/" className="flex items-center space-x-2" aria-label="SPROGTechXperts Home">
          <MountainIcon className="h-6 w-6 text-primary" />
          <span className="font-headline text-xl font-semibold text-foreground">SPROGTechXperts</span>
        </Link>
        <div className="flex items-center space-x-6">
          <nav className="hidden md:flex items-center space-x-4 lg:space-x-6 text-sm font-medium">
            <Link href="#hero" className="text-foreground hover:text-primary transition-colors">
              Home
            </Link>
            <Link href="#about" className="text-foreground hover:text-primary transition-colors">
              About-us
            </Link>
            <Link href="#services" className="text-foreground hover:text-primary transition-colors">
              Services
            </Link>
            <Link href="#contact" className="text-foreground hover:text-primary transition-colors">
              Contact-us
            </Link>
          </nav>
          <ThemeToggle />
          {/* Mobile menu trigger can be added here */}
        </div>
      </div>
    </header>
  );
}
