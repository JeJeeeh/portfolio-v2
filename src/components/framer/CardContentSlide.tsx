"use client";
import { motion } from "framer-motion";
import { useLayoutEffect, useRef, useState } from "react";

interface Props {
  opened: boolean;
  children: React.ReactNode;
}

export default function CardContentSlide({ opened, children }: Props) {
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState<number>(0);

  useLayoutEffect(() => {
    if (contentRef.current) {
      const rect = contentRef.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [children]);

  return (
    <motion.div
      initial={{ height: 0, opacity: 0 }}
      animate={{ height: opened ? height : 0, opacity: opened ? 1 : 0 }}
      exit={{ height: 0, opacity: 0 }}
      className="overflow-hidden"
    >
      <div ref={contentRef}>{children}</div>
    </motion.div>
  );
}
