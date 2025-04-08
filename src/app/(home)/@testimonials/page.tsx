"use client";

import TestimonialCard from "@/components/cards/TestimonialCard";
import HomeHeader from "@/components/shared/HomeHeader";
import { testimonialData } from "@/data/testimonial";
import { useGsapScrollTrigger } from "@/hooks/useGsapScrollTrigger";
import { createRef, useMemo, useRef } from "react";
import gsap from "gsap";

export default function TestimonialsSection() {
  const cardsRef = useMemo(
    () => testimonialData.map(() => createRef<HTMLDivElement>()),
    []
  );
  const headerRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useGsapScrollTrigger(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        },
      });

      tl.from(headerRef.current, {
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
      });

      tl.from(
        cardsRef.map((ref) => ref.current),
        {
          y: 50,
          opacity: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: "power2.out",
        },
        "-=0.4"
      );
    },
    [],
    containerRef
  );

  return (
    <div
      ref={containerRef}
      className="flex flex-col space-y-[var(--content-space-y)] bg-white text-[var(--black)] px-[var(--content-px)] py-[var(--content-py)]"
    >
      <HomeHeader ref={headerRef}>
        <p>
          <span className="text-[var(--gray-accent)]">I've worked with</span>{" "}
          amazing people,
        </p>
        <p>
          <span className="text-[var(--gray-accent)]">
            and here's what they
          </span>{" "}
          say about me
        </p>
      </HomeHeader>
      <div className="flex flex-col space-y-4">
        {testimonialData.map((testimonial, index) => (
          <TestimonialCard
            ref={cardsRef[index]}
            key={index}
            data={testimonial}
          />
        ))}
      </div>
    </div>
  );
}
