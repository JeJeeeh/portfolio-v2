import { motion } from "framer-motion";

interface Props {
  opened: boolean;
  children: React.ReactNode;
}

export default function CardContentSlide({ opened, children }: Props) {
  return (
    <motion.div
      initial={{ height: 0, opacity: 0 }}
      animate={{ height: opened ? "auto" : 0, opacity: opened ? 1 : 0 }}
      exit={{ height: 0, opacity: 0 }}
      className="overflow-hidden"
    >
      {children}
    </motion.div>
  );
}
