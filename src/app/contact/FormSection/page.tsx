"use client";

import { itemsSlideIn, slideIn } from "@/config/gsapConfig";
import { getDefaultPageStyle } from "@/config/stylingConfig";
import { useGsapScrollTrigger } from "@/hooks/useGsapScrollTrigger";
import gsap from "gsap";
import { useRef } from "react";
import ContactForm from "./components/ContactForm";

export default function AboutFormLayout() {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);

  useGsapScrollTrigger(
    () => {
      const tl = gsap.timeline();

      tl.from(titleRef.current, slideIn);

      tl.from(formRef.current, itemsSlideIn, "-=0.4");
    },
    [],
    containerRef
  );

  return (
    <div
      ref={containerRef}
      className={`flex flex-col items-center ${getDefaultPageStyle()} `}
    >
      <h2 ref={titleRef} className="text-3xl md:text-5xl font-semibold">
        Contact me
      </h2>
      <div ref={formRef} className="w-full flex justify-center">
        <ContactForm />
      </div>
    </div>
  );
}
