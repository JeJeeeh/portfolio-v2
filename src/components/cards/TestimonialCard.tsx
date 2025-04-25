"use client";

import { TestimonialData } from "@/data/testimonial";
import DownIcon from "../icons/testimonials/DownIcon";
import Avatar from "../shared/Avatar";
import { Button } from "../ui/button";
import Link from "next/link";
import { forwardRef, useImperativeHandle, useRef, useState } from "react";
import { motion } from "framer-motion";
import CardContentSlide from "../framer/CardContentSlide";

interface Props {
  data: TestimonialData;
}

const TestimonialCard = forwardRef<HTMLDivElement, Props>(({ data }, ref) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useImperativeHandle(ref, () => containerRef.current as HTMLDivElement);

  const [opened, setOpened] = useState(false);

  const toggleOpen = () => {
    setOpened(!opened);
  };

  return (
    <div
      ref={containerRef}
      className="bg-[var(--white-accent)] w-full rounded-md p-3 lg:p-6 flex flex-col items-start space-y-2"
    >
      <div className="flex items-center space-x-4">
        <Avatar src={data.imageUrl || ""} alt={data.alt} />
        <Link
          className="duration-200 transition-colors hover:text-[var(--gray-accent)]"
          href={data.link || ""}
        >
          <p className="text-lg lg:text-2xl font-semibold">{data.name}</p>
        </Link>
      </div>
      <p className="text-[var(--gray-accent)] text-sm lg:text-lg">
        {data.role} @{" "}
        <Link
          className="duration-200 transition-colors hover:text-[var(--black-accent)]"
          href={data.company.link}
        >
          {data.company.name}
        </Link>
      </p>
      <CardContentSlide opened={opened}>
        <div className="text-xs lg:text-base my-2 text-[var(--gray-accent)]">
          {data.body.map((content, index) => (
            <p key={index}>{content}</p>
          ))}
        </div>
      </CardContentSlide>
      <Button
        className="bg-[var(--gray)] hover:bg-[var(--gray-accent)] text-[var(--black)]"
        onClick={toggleOpen}
      >
        <motion.div
          animate={{ rotate: opened ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <DownIcon />
        </motion.div>{" "}
        <span className="text-xs lg:text-base ml-2">
          {opened ? "See less" : "See more"}
        </span>
      </Button>
    </div>
  );
});

TestimonialCard.displayName = "TestimonialCard";
export default TestimonialCard;
