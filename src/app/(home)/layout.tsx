"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function HomeLayout({
  hero,
  overlap,
  summary,
  skills,
}: Readonly<{
  hero: React.ReactNode;
  overlap: React.ReactNode;
  summary: React.ReactNode;
  skills: React.ReactNode;
}>) {
  const bgRef = useRef(null);
  const heroRef = useRef(null);
  const overlapRef = useRef(null);

  const todoList = [
    "fix summary content",
    "add animation in overlap header",
    "add hero background",
  ];

  useEffect(() => {
    // Development notes
    console.log(todoList);

    if (!bgRef.current || !overlapRef.current) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: bgRef.current, // The same trigger for both animations
        start: "top top",
        end: "bottom top",
        pinSpacing: false,
        scrub: true,
      },
    });

    // Animate the overlapping element
    tl.to(overlapRef.current, {
      y: "-50%",
      ease: "none",
    });

    // Animate the background
    tl.to(bgRef.current, { scaleY: 1.2, ease: "none" }, "<");

    // Animate the hero
    tl.to(heroRef.current, { opacity: 0, ease: "power2.out" }, "<");
  }, []);

  return (
    <div className="relative min-h-[100vh] bg-[var(--black)]">
      {/* Parallax Background */}
      <div
        ref={bgRef}
        className="absolute top-0 left-0 w-full h-[88vh] bg-cover bg-center bg-[var(--black)]"
      ></div>

      {/* Foreground Content */}
      <div
        ref={heroRef}
        className="relative flex items-center justify-center h-[88vh]"
      >
        {hero}
      </div>

      {/* Overlapping Section */}
      <div
        ref={overlapRef}
        className="z-50 mb-[-50vh] flex flex-col min-h-[12vh] w-full"
      >
        {overlap}
        {summary}
        {skills}
      </div>
    </div>
  );
}
