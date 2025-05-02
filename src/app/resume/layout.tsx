"use client";

import { motion, AnimatePresence } from "framer-motion";

export default function ResumeLayout({
  header,
  techstack,
  work,
  background,
  certifications,
  education,
  children,
}: Readonly<{
  header: React.ReactNode;
  techstack: React.ReactNode;
  work: React.ReactNode;
  background: React.ReactNode;
  certifications: React.ReactNode;
  education: React.ReactNode;
  children: React.ReactNode;
}>) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        <div className="w-full text-[var(--black)]">
          {/* navbar placeholder */}
          <div className="w-full h-38" />
          {header}
          {techstack}
          {work}
          {background}
          {certifications}
          {education}
          {children}
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
