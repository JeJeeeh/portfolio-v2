import { motion } from "framer-motion";

interface Props {
  isOpen: boolean;
  toggleOpen: () => void;
}

export default function TwoLineHamburger({ isOpen, toggleOpen }: Props) {
  return (
    <svg
      width="30"
      height="30"
      viewBox="0 0 40 40"
      onClick={toggleOpen}
      style={{ cursor: "pointer" }}
      stroke="var(--white)"
    >
      {/* Top Line */}
      <motion.line
        x1="8"
        y1="14"
        x2="32"
        y2="14"
        strokeWidth="4"
        strokeLinecap="round"
        animate={{
          y: isOpen ? 6 : 0,
          rotate: isOpen ? 45 : 0,
        }}
        style={{ transformOrigin: "center" }}
        transition={{ duration: 0.3 }}
      />

      {/* Bottom Line */}
      <motion.line
        x1="8"
        y1="26"
        x2="32"
        y2="26"
        strokeWidth="4"
        strokeLinecap="round"
        animate={{
          y: isOpen ? -6 : 0,
          rotate: isOpen ? -45 : 0,
        }}
        style={{ transformOrigin: "center" }}
        transition={{ duration: 0.3 }}
      />
    </svg>
  );
}
