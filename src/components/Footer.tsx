"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef } from "react";
import {
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";
import { Mail, Phone } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function Footer() {
  const currentYear = new Date().getFullYear();
  const footerRef = useRef(null);
  const columnRefs = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      columnRefs.current.forEach((col, index) => {
        gsap.fromTo(
          col,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            delay: index * 0.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: col,
              start: "top 90%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });
    }, footerRef);
    return () => ctx.revert();
  }, []);

  return (
    <footer
      ref={footerRef}
      className="relative z-10 border-t bg-gradient-to-br from-slate-100 via-slate-50 to-slate-200 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 text-card-foreground py-10 sm:py-12 lg:py-8 overflow-hidden"
    >
      {/* Background glows */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-primary opacity-10 blur-3xl rounded-full -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-500 opacity-10 blur-2xl rounded-full translate-x-1/3 translate-y-1/3" />
      </div>

      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 sm:gap-8 text-left mx-10">
          {/* Column 1: Logo + Description */}
          <div
            ref={(el) => {
              if (el) columnRefs.current[0] = el;
            }}
            className="space-y-4 lg:col-span-1 "
          >
            <Link
              href="/"
              className="flex justify-center sm:justify-start items-center space-x-2"
            >
              <Image
                src="/assets/SprogTechXperts-logo.png"
                alt="SprogTechXperts Logo"
                width={60}
                height={60}
                className="object-contain drop-shadow-md"
              />
              <span className="font-headline text-2xl md:text-4xl font-bold text-primary">
                SprogTechXperts
              </span>
            </Link>
            <p className="text-md text-muted-foreground leading-relaxed">
              SprogTechXperts is your agile tech partner, not just another
              freelancing agency. We specialize in crafting high-performance
              websites, scalable platforms, and intelligent digital solutions.
              From MVPs to full-scale products, we help businesses launch
              smarter and grow faster.
            </p>
          </div>

          {/* Columns 2–4 grouped in one */}
          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8 lg:ms-10">
            {/* Column 2: Company Links */}
            <div
              ref={(el) => {
                if (el) columnRefs.current[0] = el;
              }}
            >
              <h3 className="font-headline text-lg font-semibold mb-4 text-foreground">
                COMPANY
              </h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link
                    href="#about"
                    className="hover:text-primary transition-colors"
                  >
                    About-us
                  </Link>
                </li>
                <li>
                  <Link
                    href="#services"
                    className="hover:text-primary transition-colors"
                  >
                    Our Services
                  </Link>
                </li>
                <li>
                  <Link
                    href="#workflow"
                    className="hover:text-primary transition-colors"
                  >
                    Project Workflow
                  </Link>
                </li>
                <li>
                  <Link
                    href="#contact"
                    className="hover:text-primary transition-colors"
                  >
                    Contact-us
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 3: Quick Links */}
            <div
              ref={(el) => {
                if (el) columnRefs.current[0] = el;
              }}
            >
              <h3 className="font-headline text-lg font-semibold mb-4 text-foreground">
                Quick Links
              </h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link
                    href="#quote"
                    className="hover:text-primary transition-colors"
                  >
                    Get a Free Quote
                  </Link>
                </li>
                <li>
                  <Link
                    href="#start"
                    className="hover:text-primary transition-colors"
                  >
                    Start Your Project
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 4: Contact & Social */}
            <div
              ref={(el) => {
                if (el) columnRefs.current[0] = el;
              }}
            >
              <h3 className="font-headline text-lg font-semibold mb-4 text-foreground">
                Contact Us
              </h3>
              <div className="space-y-2 text-sm text-muted-foreground mb-4">
    <div className="flex items-start gap-2">
      <Mail className="h-4 w-4" />
      <span>sprogtechxperts@gmail.com</span>
    </div>
    <div className="flex items-start gap-2">
      <Phone className="h-4 w-4" />
      <span>+91 78410 34250</span>
    </div>
  </div>
              <h3 className="font-headline text-sm font-semibold mb-4 text-foreground">
                Follow Us
              </h3>

              <div className="flex items-start gap-3 flex-wrap">
                <a
                  href="https://www.instagram.com/sprog_techxperts/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-muted rounded-md hover:bg-primary/20 transition hover:scale-110 text-muted-foreground hover:text-primary"
                >
                  <FaInstagram className="h-5 w-5" />
                </a>
                <a
                  href="https://www.linkedin.com/company/sprogtechxperts/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-muted rounded-md hover:bg-primary/20 transition hover:scale-110 text-muted-foreground hover:text-primary"
                >
                  <FaLinkedinIn className="h-5 w-5" />
                </a>
                <a
                  href="https://x.com/SprogTechxperts"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-muted rounded-md hover:bg-primary/20 transition hover:scale-110 text-muted-foreground hover:text-primary"
                >
                  <FaTwitter className="h-5 w-5" />
                </a>
                <a
                  href="https://wa.me/917841034250"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-muted rounded-md hover:bg-primary/20 transition hover:scale-110 text-muted-foreground hover:text-primary"
                >
                  <FaWhatsapp className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-10 pt-6 border-t border-border text-center">
          <p className="text-xs text-muted-foreground">
            © {currentYear} SprogTechXperts. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
