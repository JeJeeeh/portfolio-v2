"use client";

import { WorkData } from "@/data/work";
import Link from "next/link";
import { Button } from "../ui/button";
import DownIcon from "../icons/testimonials/DownIcon";
import { useState } from "react";
import CardContentSlide from "../framer/CardContentSlide";
import { motion } from "framer-motion";

interface Props {
  data: WorkData;
}

export default function ResumeWorkCard({ data }: Props) {
  const [opened, setOpened] = useState(false);

  const toggleOpen = () => {
    setOpened(!opened);
  };

  return (
    <div className="bg-[var(--white-accent)] rounded-md p-6 flex flex-col items-start space-y-2">
      <Link href={data.company.url}>
        <h4 className="text-3xl font-semibold transition-colors duration-200 hover:text-[var(--gray-accent)]">
          {data.company.name}
        </h4>
      </Link>

      <div>
        <p>{data.position}</p>
        <p className="text-[var(--gray-accent)]">
          {data.year.start === data.year.end
            ? `${data.year.start}`
            : `${data.year.start} - ${data.year.end}`}
        </p>
      </div>
      {data.content && (
        <CardContentSlide opened={opened}>
          <div className="my-2 text-[var(--gray-accent)]">
            <p dangerouslySetInnerHTML={{ __html: data.content }} />
          </div>
        </CardContentSlide>
      )}
      {data.content && (
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
          <span className="ml-2">{opened ? "See less" : "See more"}</span>
        </Button>
      )}
    </div>
  );
}
