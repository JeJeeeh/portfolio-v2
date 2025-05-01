"use client";

import { itemsSlideIn, slideIn } from "@/config/gsapConfig";
import { getDefaultPageStyle } from "@/config/stylingConfig";
import { educationData, EducationData } from "@/data/education";
import { languageData, LanguageData } from "@/data/language";
import { useGsapScrollTrigger } from "@/hooks/useGsapScrollTrigger";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";

interface EducationCardProps {
  data: EducationData;
}

const EducationCard = ({ data }: EducationCardProps) => {
  return (
    <div className="bg-[var(--white-accent)] rounded-md p-3 md:p-6 flex flex-col items-start space-y-1 md:space-y-2">
      <p className="text-xl md:text-3xl font-semibold">{data.schoolName}</p>
      <div className="text-xs md:text-base">
        <p>{data.major}</p>
        <p className="text-[var(--gray-accent)]">{`${data.year.start} - ${data.year.end}`}</p>
      </div>
    </div>
  );
};

interface LanguageCardProps {
  data: LanguageData[];
}

const LanguageCard = ({ data }: LanguageCardProps) => {
  return (
    <div className="bg-[var(--white-accent)] rounded-md p-3 md:p-6 flex flex-col items-start space-y-1 md:space-y-2">
      <p className="text-xl md:text-3xl font-semibold">Language</p>
      <div className="text-xs md:text-base">
        {data.map((language, index) => (
          <p key={index}>{`${language.language}: ${language.proficiency}`}</p>
        ))}
      </div>
    </div>
  );
};

export default function ResumeEducationSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);

  useGsapScrollTrigger(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        },
      });

      tl.from(titleRef.current, slideIn);

      ScrollTrigger.batch(".resume-educationcard", {
        onEnter: (batch) => {
          gsap.from(batch, itemsSlideIn);
        },
        once: true,
      });
    },
    [],
    containerRef
  );

  return (
    <div
      ref={containerRef}
      className={`flex flex-col ${getDefaultPageStyle()} `}
    >
      <h2 ref={titleRef} className="text-3xl md:text-5xl font-semibold">
        Education and language
      </h2>
      <div className="grid grid-cols-1 gap-2 md:gap-4 w-full">
        {educationData.map((education, index) => (
          <div key={index} className="resume-educationcard">
            <EducationCard data={education} />
          </div>
        ))}
        <div className="resume-educationcard">
          <LanguageCard data={languageData} />
        </div>
      </div>
    </div>
  );
}
