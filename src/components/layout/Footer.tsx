import GithubIcon from "@/components/icons/footer/GithubIcon";
import LinkedinIcon from "@/components/icons/footer/LinkedinIcon";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="z-1000 flex justify-between items-center mt-auto py-3 px-[var(--padding-x-sm)] lg:px-[var(--padding-x-lg)] bg-[var(--black-accent)] text-[var(--white)]">
      <div className="text-xs md:text-base">
        &copy; {new Date().getFullYear()} Jason Jonathan Effendi
      </div>
      <div className="flex space-x-4 h-[18px] lg:h-[14px]">
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
