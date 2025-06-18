import Link from 'next/link';
import { MountainIcon, Mail, Phone, Instagram, Linkedin, Twitter, MessageSquare, Send } from 'lucide-react'; // Using MountainIcon as a placeholder logo
import Image from 'next/image';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const companyLinks = [
    { href: '#about', text: 'About-us' },
    { href: '#services', text: 'Our Services' },
    { href: '#workflow', text: 'Project Workflow' },
    { href: '#contact', text: 'Contact-us' },
  ];

  const quickLinks = [
    { href: '#contact', text: 'Get a Free Quote' }, // Assuming contact form can be used for quote
    { href: '#contact', text: 'Start Your Project' }, // Assuming contact form starts a project
  ];

  const socialLinks = [
    { href: '#', icon: <Instagram className="h-5 w-5" />, label: 'Instagram' },
    { href: '#', icon: <Linkedin className="h-5 w-5" />, label: 'LinkedIn' },
    { href: '#', icon: <Twitter className="h-5 w-5" />, label: 'Twitter/X' },
    { href: '#', icon: <MessageSquare className="h-5 w-5" />, label: 'WhatsApp' }, // Using MessageSquare for WhatsApp
    { href: '#', icon: <Send className="h-5 w-5" />, label: 'Telegram' }, // Using Send for Telegram
  ];

  return (
    <footer className="border-t bg-card text-card-foreground py-12 md:py-16 lg:py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Column 1: Logo & Description */}
          <div className="md:col-span-2 lg:col-span-1">
           <Link href="/" className="flex items-center space-x-2 mb-4" aria-label="SPROGTechXperts Home">
  <Image
    src="/assets/SprogTechXperts-logo.png"
    alt="SPROGTechXperts Logo"
    width={40}
    height={40}
    className="object-contain"
    priority
  />
  <span className="font-headline text-xl font-bold text-foreground">SprogTechXperts</span>
</Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              SprogTechXperts is your agile tech partner, not just another freelancing agency. We specialize in crafting high-performance websites, scalable platforms, and intelligent digital solutions. From MVPs to full-scale products, we help businesses launch smarter and grow faster.
            </p>
          </div>

          {/* Column 2: Company Links */}
          <div>
            <h3 className="font-headline text-lg font-semibold mb-4 text-foreground">COMPANY</h3>
            <ul className="space-y-2">
              {companyLinks.map((link) => (
                <li key={link.text}>
                  <Link href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Quick Links */}
          <div>
            <h3 className="font-headline text-lg font-semibold mb-4 text-foreground">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.text}>
                  <Link href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Us & Follow Us */}
          <div>
            <div className="mb-6">
              <h3 className="font-headline text-lg font-semibold mb-4 text-foreground">Contact Us</h3>
              <div className="flex items-center space-x-2 mb-2">
                <Mail className="h-4 w-4 text-muted-foreground" />
                <a href="mailto:sprogtechxperts@gmail.com" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  sprogtechxperts@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-muted-foreground" />
                <a href="tel:+917841034250" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  +91 78410 34250
                </a>
              </div>
            </div>
            <div>
              <h3 className="font-headline text-lg font-semibold mb-4 text-foreground">Follow Us</h3>
              <div className="flex space-x-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="p-2 bg-muted hover:bg-primary/20 text-muted-foreground hover:text-primary rounded-md transition-colors"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border/50 text-center">
          <p className="text-sm text-muted-foreground">
            © {currentYear} SPROGTechXperts. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
