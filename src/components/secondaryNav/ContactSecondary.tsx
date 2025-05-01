import { navbarStyling } from "@/config/stylingConfig";
import { Button } from "../ui/button";
import Link from "next/link";

export default function ContactSecondary({
  navbarVisible,
}: {
  navbarVisible: boolean;
}) {
  return (
    <div
      className={`fixed ${
        navbarStyling.secondaryPosition
      } left-0 w-full px-[var(--padding-x-sm)] md:px-[var(--padding-x-md)] lg:px-[var(--padding-x-lg)] ${
        navbarStyling.secondaryHeight
      } flex justify-between items-center bg-[var(--black-accent)]/80 backdrop-blur-sm z-[1999] transition-transform duration-400 ${
        navbarVisible ? "translate-y-0" : "-translate-y-12 md:-translate-y-18"
      } `}
    >
      <p className="text-[var(--white)] text-lg md:text-2xl font-medium">
        Let's connect
      </p>
      <Link href={"https://linkedin.com/in/jason-jonathan-47006a25b"}>
        <Button
          variant={"outline"}
          className="bg-transparent text-[var(--white)]"
        >
          LinkedIn Link
        </Button>
      </Link>
    </div>
  );
}
