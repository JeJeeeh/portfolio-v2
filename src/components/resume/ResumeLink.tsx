"use client";

import Link from "next/link";
import { Button } from "../ui/button";
import { useRef } from "react";
import { useGsapScrollTrigger } from "@/hooks/useGsapScrollTrigger";
import gsap from "gsap";
import { slideIn } from "@/config/gsapConfig";
import { getDefaultPageStyle } from "@/config/stylingConfig";

export default function ResumeLink() {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useGsapScrollTrigger(
    () => {
      gsap.from(contentRef.current, {
        ...slideIn,
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
      className={`flex flex-col bg-[var(--black)] text-[var(--white)] ${getDefaultPageStyle()} `}
    >
      <div
        ref={contentRef}
        className="flex flex-col space-y-2 lg:space-y-4 items-center rounded-xl py-[var(--padding-y-sm)] md:py-[var(--padding-y-md)] lg:py-[var(--padding-y-lg)] bg-[var(--black-accent)]"
      >
        <p className="text-xl lg:text-5xl font-semibold">Resume</p>
        <p className="text-xs md:text-base text-[var(--gray)]">
          Read more about my experience
        </p>
        <Link href={"/resume"}>
          <Button variant={"outline"} className="bg-transparent">
            See Resume
          </Button>
        </Link>
      </div>
    </div>
  );
}
