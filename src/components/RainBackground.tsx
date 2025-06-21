'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const NUM_DROPS = 120;

export default function RainBackground() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;

    if (!container) return;

    const drops: HTMLDivElement[] = [];

    for (let i = 0; i < NUM_DROPS; i++) {
      const drop = document.createElement('div');
      drop.className = 'raindrop';
      drop.style.left = `${Math.random() * 100}%`;
      drop.style.animationDelay = `${Math.random() * 5}s`;
      drop.style.opacity = `${Math.random() * 0.3 + 0.2}`;
      container.appendChild(drop);
      drops.push(drop);
    }

    drops.forEach((drop) => {
      gsap.fromTo(
        drop,
        { y: '-20vh' },
        {
          y: '120vh',
          duration: Math.random() * 1 + 1.5,
          repeat: -1,
          ease: 'none',
          delay: Math.random() * 3,
        }
      );
    });

    return () => {
      drops.forEach((drop) => drop.remove());
    };
  }, []);

  return <div ref={containerRef} className="rain-container" />;
}
