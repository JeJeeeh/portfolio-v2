"use client";

import TestimonialCard from "@/components/cards/TestimonialCard";
import HomeHeader from "@/components/shared/HomeHeader";
import { testimonialData } from "@/data/testimonial";
import { useGsapScrollTrigger } from "@/hooks/useGsapScrollTrigger";
import { createRef, useMemo, useRef } from "react";
import gsap from "gsap";
import { itemsSlideIn, slideIn } from "@/config/gsapConfig";
import { getDefaultPageStyle } from "@/config/stylingConfig";

export default function TestimonialsSection() {
  const cardsRef = useMemo(
    () => testimonialData.map(() => createRef<HTMLDivElement>()),
    []
  );
  const headerRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useGsapScrollTrigger(
    () => {
      gsap.from(headerRef.current, {
        ...slideIn,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        },
      });

      gsap.from(
        cardsRef.map((ref) => ref.current),
        {
          ...itemsSlideIn,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
          },
        }
      );
    },
    [],
    containerRef
  );

  return (
    <div
      ref={containerRef}
      className={`flex flex-col bg-white text-[var(--black)] ${getDefaultPageStyle()}`}
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
