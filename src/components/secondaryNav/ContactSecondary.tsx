import { Button } from "../ui/button";

export default function ContactSecondary({
  navbarVisible,
}: {
  navbarVisible: boolean;
}) {
  return (
    <div
      className={`fixed top-18 left-0 w-full px-20 h-22 flex justify-between items-center bg-[var(--black-accent)]/80 backdrop-blur-sm z-[1999] transition-transform duration-400 ${
        navbarVisible ? "translate-y-0" : "-translate-y-18"
      } `}
    >
      <p className="text-[var(--white)] text-2xl font-medium">Let's connect</p>
      <Button
        variant={"outline"}
        className="bg-transparent text-[var(--white)]"
      >
        LinkedIn Link
      </Button>
    </div>
  );
}
