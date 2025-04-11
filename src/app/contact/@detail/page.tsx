"use client";

import BornIcon from "@/components/icons/about/BornIcon";
import ExperienceIcon from "@/components/icons/about/ExperienceIcon";
import FromIcon from "@/components/icons/about/FromIcon";
import LanguageIcon from "@/components/icons/about/LanguageIcon";
import LocationIcon from "@/components/icons/about/LocationIcon";
import RoleIcon from "@/components/icons/about/RoleIcon";
import { itemsSlideIn } from "@/config/gsapConfig";
import { getDefaultPageStyle } from "@/config/stylingConfig";
import { useGsapScrollTrigger } from "@/hooks/useGsapScrollTrigger";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";

export default function ContactDetailSection() {
  const detailCardStyle =
    "flex flex-col space-y-2 p-6 rounded-md bg-[var(--black-accent)] text-[var(--white)] contact-detailcard";
  const detailTitleStyle = "text-2xl font-semibold";
  const detailDataStyle = "text-[var(--gray)]";

  const containerRef = useRef<HTMLDivElement>(null);

  useGsapScrollTrigger(
    () => {
      ScrollTrigger.batch(".contact-detailcard", {
        onEnter: (batch) => {
          gsap.from(batch, {
            ...itemsSlideIn,
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top 80%",
            },
          });
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
      className={`flex flex-col bg-[var(--black)] text-[var(--white)] ${getDefaultPageStyle()}`}
    >
      <div className="grid grid-cols-4 gap-4">
        <div className={`${detailCardStyle} col-span-2`}>
          <div className="flex space-x-2 items-center">
            <RoleIcon />
            <p className={detailTitleStyle}>Role</p>
          </div>
          <p className={detailDataStyle}>Full-stack development</p>
        </div>
        <div className={`${detailCardStyle}`}>
          <div className="flex space-x-2 items-center">
            <ExperienceIcon />
            <p className={detailTitleStyle}>Experience</p>
          </div>
          <p className={detailDataStyle}>2 years</p>
        </div>
        <div className={`${detailCardStyle}`}>
          <div className="flex space-x-2 items-center">
            <LocationIcon />
            <p className={detailTitleStyle}>Location</p>
          </div>
          <p className={detailDataStyle}>Eindhoven, NL</p>
        </div>
        <div className={`${detailCardStyle}`}>
          <div className="flex space-x-2 items-center">
            <FromIcon />
            <p className={detailTitleStyle}>From</p>
          </div>
          <p className={detailDataStyle}>Indonesia</p>
        </div>
        <div className={`${detailCardStyle} col-span-2`}>
          <div className="flex space-x-2 items-center">
            <LanguageIcon />
            <p className={detailTitleStyle}>Language</p>
          </div>
          <p className={detailDataStyle}>Indonesian and English</p>
        </div>
        <div className={`${detailCardStyle}`}>
          <div className="flex space-x-2 items-center">
            <BornIcon />
            <p className={detailTitleStyle}>Born</p>
          </div>
          <p className={detailDataStyle}>2002, Surabaya</p>
        </div>
      </div>
    </div>
  );
}
