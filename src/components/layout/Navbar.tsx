"use client";

import NavLink from "@/components/navbar/NavLink";
import ContactSecondary from "@/components/secondaryNav/ContactSecondary";
import ResumeSecondary from "@/components/secondaryNav/ResumeSecondary";
import { navbarStyling } from "@/config/stylingConfig";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Navbar() {
  const pathname = usePathname();

  const [visible, setVisible] = useState<boolean>(true);
  const [lastScrollY, setLastScrollY] = useState<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Hide navbar when scrolling down, show it when scrolling up
      setVisible(currentScrollY < lastScrollY);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <>
      <nav
        className={`flex justify-between items-center px-[var(--padding-x-sm)] md:px-[var(--padding-x-md)] lg:px-[var(--padding-x-lg)] ${
          navbarStyling.navbarHeight
        } fixed top-0 left-0 w-full transition-transform duration-400 bg-black/80 backdrop-blur-sm z-2000 ${
          visible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="text-2xl md:text-5xl font-bold text-[var(--white)]">
          JJE
        </div>
        <div className="flex space-x-12 hidden md:inline-block">
          <NavLink href="/" pathname={pathname}>
            Home
          </NavLink>
          <NavLink href="/resume" pathname={pathname}>
            Resume
          </NavLink>
          <NavLink href="/projects" pathname={pathname}>
            Projects
          </NavLink>
          <NavLink href="/contact" pathname={pathname}>
            Contact
          </NavLink>
        </div>
      </nav>
      {pathname === "/contact" && <ContactSecondary navbarVisible={visible} />}
      {pathname === "/resume" && <ResumeSecondary navbarVisible={visible} />}
    </>
  );
}
