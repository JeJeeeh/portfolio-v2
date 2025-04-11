"use client";

import { itemsSlideIn, slideIn } from "@/config/gsapConfig";
import { getDefaultPageStyle } from "@/config/stylingConfig";
import { useGsapScrollTrigger } from "@/hooks/useGsapScrollTrigger";
import gsap from "gsap";
import { useRef } from "react";

export default function ResumeBackgroundSection() {
  const backgroundData = [
    {
      title: "Experience",
      body: `With 2 years of experience in full-stack development, I have worked
            with various companies, contributing to projects that enhanced user
            experiences, optimized performance, and improved system efficiency.
            My experience spans front-end and back-end development, working with
            modern frameworks, databases, and cloud technologies. Collaborating
            with teams, I have helped build scalable applications and
            maintainable codebases while continuously learning and adapting to
            new challenges.`,
    },
    {
      title: "Passion",
      body: `My passion is turning ideas into impactful digital experiences. I
            love building intuitive UIs, optimizing performance, and solving
            real-world problems. My goal is to help bring creative ideas to life
            while continuously learning and growing in the ever-evolving tech
            landscape.`,
    },
  ];

  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const tagRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useGsapScrollTrigger(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        },
      });

      tl.from(titleRef.current, slideIn);

      tl.from(tagRef.current, slideIn, "-=0.4");

      tl.from(cardsRef.current, itemsSlideIn, "-=0.4");
    },
    [],
    containerRef
  );

  return (
    <div
      ref={containerRef}
      className={`flex flex-col text-[var(--black)] ${getDefaultPageStyle()} `}
    >
      <div className="flex flex-col items-center space-y-4 items-center">
        <h2 ref={titleRef} className="text-5xl font-semibold">
          Background
        </h2>
        <p ref={tagRef} className="text-center text-[var(--gray-accent)] px-12">
          I was born and raised in Surabaya, Indonesia. I earned my bachelor
          title from my dual degree program from Indonesia and The Netherlands,
          where it shaped my global perspective in software development.
          Throughout my career, I’ve had opportunity to work in companies in
          both countries, collaborating with diverse teams and gaining valuable
          insights. I’m always eager to expand my knowledge and refine my
          skills. As a person, I am flexible, adaptable, and calm to challenges
          and I believe in a collaborative and growth-oriented approach,
          fostering teamwork and continuous learning.
        </p>
      </div>
      <div className="grid grid-cols-2 gap-8">
        {backgroundData.map((bg, index) => (
          <div
            ref={(el) => {
              if (el) cardsRef.current[index] = el;
            }}
            key={index}
            className="flex flex-col space-y-4"
          >
            <h3 className="text-4xl font-semibold">{bg.title}</h3>
            <p className="text-[var(--gray-accent)]">{bg.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
