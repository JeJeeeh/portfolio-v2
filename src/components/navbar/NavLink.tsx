import Link from "next/link";

interface Props {
  href: string;
  pathname: string;
  children: React.ReactNode;
}

export default function NavLink({ href, pathname, children }: Props) {
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`text-base font-medium ${
        isActive
          ? "text-[var(--white)]"
          : "text-[var(--gray)] transition-color duration-300 hover:text-[var(--white)]"
      }`}
    >
      {children}
    </Link>
  );
}
