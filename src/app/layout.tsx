import type { Metadata } from 'next';
import './globals.css';
import { ThemeProvider } from '@/components/ThemeProvider';
import { Toaster } from '@/components/ui/toaster';
import { cn } from '@/lib/utils';
import CursorSparkle from '@/components/CursorSparkle';
import RainBackground from '@/components/RainBackground';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.sprogtechxperts.com'), // ✅ Add this line

  title: 'SprogTechXperts - Empowering Tomorrow’s Brands, Today',
  description:
    'Intelligent, high-performance digital products. From sleek web platforms to enterprise-grade software and AI-driven systems.',
  keywords: [
    'SprogTechXperts',
    'Web Development',
    'AI Solutions',
    'Digital Products',
    'Software Development',
  ],
  icons: {
    icon: '/assets/SprogTechXperts-logo.png', // ✅ Your logo as favicon
  },
  openGraph: {
    title: 'SprogTechXperts',
    description: 'Empowering Tomorrow’s Brands with next-gen digital products.',
    url: 'https://www.sprogtechxperts.com',
    siteName: 'SPROGTechXperts',
    images: [
      {
        url: '/assets/SprogTechXperts-logo.png', // ✅ Relative path okay now with metadataBase
        width: 600,
        height: 600,
        alt: 'SPROGTechXperts Logo',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SprogTechXperts',
    description: 'Next-gen digital platforms & enterprise-grade software.',
    images: ['/assets/SprogTechXperts-logo.png'],
    creator: '@sprogtechxperts',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Favicon fallback */}
        <link rel="icon" type="image/png" href="/assets/SprogTechXperts-logo.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=PT+Sans:wght@400;700&display=swap" rel="stylesheet" />
      </head>
      <body className={cn("min-h-screen bg-background font-body antialiased")}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <CursorSparkle/>
          <RainBackground/>
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
