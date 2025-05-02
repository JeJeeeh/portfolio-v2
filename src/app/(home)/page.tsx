"use client";

import HeroBackground from "@/components/hero/HeroBackground";
import Footer from "@/components/layout/Footer";
import { useGsapScrollTrigger } from "@/hooks/useGsapScrollTrigger";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import HeroSection from "./HeroSection/page";
import Overlap from "./Overlap/page";
import SummarySection from "./SummarySection/page";
import SkillSection from "./SkillsSection/page";
import TestimonialsSection from "./TestimonialsSection/page";
import WorkSection from "./WorkSection/page";
import ProjectsSection from "./ProjectsSection/page";
import ResumeSection from "./ResumeSection/page";
import { motion, AnimatePresence } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

export default function HomePage() {
  const bgRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const overlapRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const todoList = [
    "fix chart tooltip",
    "add project images and fallback",
    "fix parallax effect",
    "add logo shrink effect",
    "fix button media query (home page buttons)",
  ];

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
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
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
            <HeroSection />
          </div>

          {/* Overlapping Section */}
          <div
            ref={overlapRef}
            className="absolute z-50 flex flex-col min-h-[12vh] w-full"
          >
            <Overlap />
            <SummarySection />
            <SkillSection />
            <TestimonialsSection />
            <WorkSection />
            <ProjectsSection />
            <ResumeSection />
            <Footer />
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
