'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ThemeToggle } from '@/components/ThemeToggle';

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-screen-2xl items-center justify-between px-4 sm:px-6">
        <Link href="/" className="flex items-center space-x-2" aria-label="SPROGTechXperts Home">
          <div className="relative w-10 h-10">
            <Image
              src="/assets/SprogTechXperts-logo.png" // ✅ Use leading slash
              alt="SPROGTechXperts Logo"
              fill
              className="object-contain"
              sizes="(max-width: 768px) 32px, (max-width: 1024px) 40px, 48px"
              priority
            />
          </div>
          <span className="font-headline text-lg sm:text-xl font-semibold text-foreground whitespace-nowrap">
            SprogTechXperts
          </span>
        </Link>
        <div className="flex items-center space-x-4 sm:space-x-6">
          <nav className="hidden md:flex items-center space-x-4 lg:space-x-6 text-sm font-medium">
            <Link href="#hero" className="text-foreground hover:text-primary transition-colors">
              Home
            </Link>
            <Link href="#about" className="text-foreground hover:text-primary transition-colors">
              About Us
            </Link>
            <Link href="#services" className="text-foreground hover:text-primary transition-colors">
              Services
            </Link>
            <Link href="#contact" className="text-foreground hover:text-primary transition-colors">
              Contact Us
            </Link>
          </nav>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
