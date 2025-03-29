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
      className={`fixed top-18 left-0 w-full px-20 h-22 flex justify-between items-center bg-[var(--white-accent)]/80 backdrop-blur-sm z-[1999] transition-transform duration-400 ${
        navbarVisible ? "translate-y-0" : "-translate-y-18"
      } `}
    >
      <p className="text-[var(--black)] text-2xl font-medium">Resume</p>
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
