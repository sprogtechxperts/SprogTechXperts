'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ThemeToggle } from '@/components/ThemeToggle';
import { Menu, X } from 'lucide-react';
import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { AnimatePresence, motion } from 'framer-motion';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '#about', label: 'About Us' },
  { href: '#services', label: 'Services' },
  { href: '#contact', label: 'Contact Us' },
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const headerRef = useRef(null);

  useLayoutEffect(() => {
    if (headerRef.current) {
      gsap.fromTo(
        headerRef.current,
        { y: -100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: 'power3.out' }
      );
    }
  }, []);

  useEffect(() => {
    if (menuRef.current) {
      gsap.set(menuRef.current, { opacity: 0, y: -10 });
    }
    if (menuOpen) {
      gsap.to(menuRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.3,
        ease: 'power2.out',
      });
    } else {
      gsap.to(menuRef.current, {
        opacity: 0,
        y: -10,
        duration: 0.2,
        ease: 'power2.in',
      });
    }
  }, [menuOpen]);

  const bookingLink = 'https://calendar.app.google/QYHDiteAYB7ZLUSWA';

  return (
    <motion.header
      ref={headerRef}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 z-50 w-full border-b bg-gradient-to-br from-slate-100 via-slate-50 to-slate-200 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 backdrop-blur-lg border-border shadow-md"
    >
      <div className="container mx-auto flex h-16 max-w-screen-2xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center" aria-label="SprogTechXperts Home">
          <div className="relative w-10 h-10">
            <Image
              src="/assets/SprogTechXperts-logo.png"
              alt="SprogTechXperts Logo"
              fill
              className="object-contain"
              sizes="(max-width: 768px) 32px, (max-width: 1024px) 40px, 48px"
              priority
            />
          </div>
          <span className="font-headline text-xl font-semibold text-gray-900 dark:text-white whitespace-nowrap">
            SprogTechXperts
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-6 text-base font-semibold">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-white transition-colors duration-200"
            >
              {label}
            </Link>
          ))}
          <button
            onClick={() => window.open(bookingLink, '_blank')}
            className="px-4 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          >
            Book a Call
          </button>
        </nav>

        <div className="flex items-center gap-4">
          <ThemeToggle />
          <button
            className="md:hidden text-gray-700 dark:text-white"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Toggle Menu"
          >
            {menuOpen ? <X size={30} /> : <Menu size={30} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            ref={menuRef}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="md:hidden flex flex-col px-6 pt-3 pb-4 space-y-3 text-base font-medium border-t border-border bg-gradient-to-br from-[#eef2ff] via-[#e0f2fe] to-[#f5faff] dark:from-[#0a0f2b] dark:via-[#0c1a3c] dark:to-[#0b162e]"
          >
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setMenuOpen(false)}
                className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-white transition-colors duration-200"
              >
                {label}
              </Link>
            ))}

            <button
              onClick={() => {
                window.open(bookingLink, '_blank');
                setMenuOpen(false);
              }}
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
            >
              Book a Call
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}