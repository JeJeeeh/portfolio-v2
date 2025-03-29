"use client";

import { CertificationData } from "@/data/certification";
import Link from "next/link";
import { useState } from "react";
import CardContentSlide from "../framer/CardContentSlide";
import { Button } from "../ui/button";
import { motion } from "framer-motion";
import DownIcon from "../icons/testimonials/DownIcon";

interface Props {
  data: CertificationData;
}

export default function ResumeCertificationCard({ data }: Props) {
  const [opened, setOpened] = useState(false);

  const toggleOpen = () => {
    setOpened(!opened);
  };

  return (
    <div className="bg-[var(--white-accent)] rounded-md p-6 flex flex-col items-start space-y-2">
      <p className="text-3xl font-semibold">{data.name}</p>
      <div>
        <p>{data.title}</p>
        <p className="text-[var(--gray-accent)]">{data.year}</p>
      </div>
      <CardContentSlide opened={opened}>
        <div className="my-2 text-[var(--gray-accent)]">
          {data.description}
          <Link href={data.link}>
            <span className="text-black hover:text-[var(--gray-accent)] duration-200 transition-colors">{`[Link]`}</span>
          </Link>
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
        <span className="ml-2">{opened ? "See less" : "See more"}</span>
      </Button>
    </div>
  );
}
