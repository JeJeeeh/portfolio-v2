import GithubIcon from "@/components/icons/footer/GithubIcon";
import LinkedinIcon from "@/components/icons/footer/LinkedinIcon";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="z-1000 flex items-center mt-auto py-3 px-[var(--padding-x-sm)] md:px-[var(--padding-x-md)] lg:px-[var(--padding-x-lg)] bg-[var(--black-accent)] text-[var(--white)]">
      <div className="text-xs md:text-base grow">
        &copy; {new Date().getFullYear()} Jason Jonathan Effendi
      </div>
      <div className="flex shrink-0 w-auto min-w-fit space-x-2 md:space-x-4 h-[18px] lg:h-[24px]">
        <Link href={"https://github.com/JeJeeeh"}>
          <GithubIcon />
        </Link>
        <Link href={"https://linkedin.com/in/jason-jonathan-47006a25b"}>
          <LinkedinIcon />
        </Link>
      </div>
    </footer>
  );
}
