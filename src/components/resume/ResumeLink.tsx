"use client";

import Link from "next/link";
import { Button } from "../ui/button";
import { useRef } from "react";
import { useGsapScrollTrigger } from "@/hooks/useGsapScrollTrigger";
import gsap from "gsap";

export default function ResumeLink() {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useGsapScrollTrigger(
    () => {
      gsap.from(contentRef.current, {
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        },
      });
    },
    [],
    containerRef
  );

  return (
    <div
      ref={containerRef}
      className="flex flex-col space-y-[var(--content-space-y)] bg-[var(--black)] text-[var(--white)] px-[var(--content-px)] py-[var(--content-py)]"
    >
      <div
        ref={contentRef}
        className="flex flex-col space-y-4 items-center rounded-xl py-[var(--content-py)] bg-[var(--black-accent)]"
      >
        <p className="text-5xl font-semibold">Resume</p>
        <p className="text-[var(--gray)]">Read more about my experience</p>
        <Link href={"/resume"}>
          <Button variant={"outline"} className="bg-transparent">
            See Resume
          </Button>
        </Link>
      </div>
    </div>
  );
}
