import GithubIcon from "@/components/icons/GithubIcon";
import LinkedinIcon from "@/components/icons/LinkedinIcon";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="z-1000 flex justify-between mt-auto py-3 px-20 bg-[var(--black-accent)] text-[var(--white)]">
      <div>&copy; {new Date().getFullYear()} Jason Jonathan Effendi</div>
      <div className="flex space-x-4">
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
