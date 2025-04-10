"use client";

import HeroBackground from "@/components/hero/HeroBackground";
import Footer from "@/components/layout/Footer";
import { useGsapScrollTrigger } from "@/hooks/useGsapScrollTrigger";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function HomeLayout({
  hero,
  overlap,
  summary,
  skills,
  testimonials,
  work,
  projects,
  resume,
}: Readonly<{
  hero: React.ReactNode;
  overlap: React.ReactNode;
  summary: React.ReactNode;
  skills: React.ReactNode;
  testimonials: React.ReactNode;
  work: React.ReactNode;
  projects: React.ReactNode;
  resume: React.ReactNode;
}>) {
  const bgRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const overlapRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const todoList = [
    "add animation in overlap header",
    "fix chart tooltip",
    "fix SEO",
    "page transtiton may sometimes flicker(?)",
    "add project images and fallback",
  ];

  console.log(todoList);

  useGsapScrollTrigger(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
          pinSpacing: false,
          markers: false,
        },
      });

      // tl.to(overlapRef.current, {
      //   y: "-50%",
      //   ease: "none",
      // });

      tl.to(
        bgRef.current,
        {
          scaleY: 1.2,
          transformOrigin: "center top",
          ease: "none",
        },
        "<"
      );

      tl.to(
        heroRef.current,
        {
          opacity: 0,
          ease: "power2.out",
        },
        "<"
      );
    },
    [],
    containerRef
  );

  return (
    <div
      ref={containerRef}
      className="relative min-h-[100vh] bg-[var(--black)]"
    >
      {/* Parallax Background */}
      <div
        ref={bgRef}
        className="absolute top-0 left-0 w-full h-[88vh] bg-cover bg-center bg-[var(--black)]"
      >
        <HeroBackground />
      </div>

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
        className="absolute z-50 flex flex-col min-h-[12vh] w-full"
      >
        {overlap}
        {summary}
        {skills}
        {testimonials}
        {work}
        {projects}
        {resume}
        <Footer />
      </div>
    </div>
  );
}
