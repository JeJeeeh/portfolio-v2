"use client";

import { navbarStyling } from "@/config/stylingConfig";
import ContactDetailSection from "./DetailSection/page";
import ContactForm from "./FormSection/page";
import ContactResumeSection from "./ResumeSection/page";
import { motion, AnimatePresence } from "framer-motion";

export default function ContactPage() {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        <div className="bg-[var(--black)] w-full text-[var(--white)]">
          {/* navbar placholder */}
          <div className={`w-full ${navbarStyling.totalHeight}`} />
          <ContactForm />
          <ContactDetailSection />
          <ContactResumeSection />
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
