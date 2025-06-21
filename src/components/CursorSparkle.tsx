"use client";
import { useEffect } from "react";
import gsap from "gsap";

export default function CursorSparkel() {
  useEffect(() => {
    const createBubble = (e: MouseEvent) => {
      const bubble = document.createElement("div");
      bubble.className = "cursor-bubble";
      bubble.style.left = `${e.clientX}px`;
      bubble.style.top = `${e.clientY}px`;

      // Add random color
      const colors = ["#A78BFA", "#34D399", "#F472B6", "#60A5FA", "#FBBF24"];
      bubble.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];

      document.body.appendChild(bubble);

      gsap.to(bubble, {
        scale: 2,
        opacity: 0,
        duration: 1,
        ease: "power2.out",
        onComplete: () => bubble.remove(),
      });
    };

    window.addEventListener("mousemove", createBubble);
    return () => window.removeEventListener("mousemove", createBubble);
  }, []);

  return null;
}
