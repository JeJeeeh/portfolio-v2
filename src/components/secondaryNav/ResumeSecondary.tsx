import { navbarStyling } from "@/config/stylingConfig";
import { Button } from "../ui/button";

export default function ResumeSecondary({
  navbarVisible,
}: Readonly<{
  navbarVisible: boolean;
}>) {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/cv/CV.pdf";
    link.download = "Jason Jonathan Effendi.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div
      className={`fixed ${
        navbarStyling.secondaryPosition
      } left-0 w-full px-[var(--padding-x-sm)] md:px-[var(--padding-x-md)] lg:px-[var(--padding-x-lg)] ${
        navbarStyling.secondaryHeight
      } flex justify-between items-center bg-[var(--white-accent)]/80 backdrop-blur-sm z-[1999] transition-transform duration-400 ${
        navbarVisible ? "translate-y-0" : "-translate-y-12 md:-translate-y-18"
      } `}
    >
      <p className="text-[var(--black)] text-lg md:text-2xl font-medium">
        Resume
      </p>
      <Button
        variant={"outline"}
        className="bg-transparent text-[var(--black)] border-[var(--black)] hover:border-[var(--gray-accent)] hover:text-[var(--gray-accent)]"
        onClick={handleDownload}
      >
        Download PDF
      </Button>
    </div>
  );
}
