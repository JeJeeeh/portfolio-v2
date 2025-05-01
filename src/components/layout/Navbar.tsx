"use client";

import NavLink from "@/components/navbar/NavLink";
import ContactSecondary from "@/components/secondaryNav/ContactSecondary";
import ResumeSecondary from "@/components/secondaryNav/ResumeSecondary";
import { navbarStyling } from "@/config/stylingConfig";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import HamburgerIcon from "../icons/navbar/HamburgerIcon";
import MobileNav from "./MobileNav";
import Link from "next/link";

export default function Navbar() {
  const pathname = usePathname();

  const [visible, setVisible] = useState<boolean>(true);
  const [lastScrollY, setLastScrollY] = useState<number>(0);
  const [hamburgerVisible, setHamburgerVisible] = useState<boolean>(false);

  const toggleHamburger = () => {
    setHamburgerVisible(!hamburgerVisible);
  };

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

  useEffect(() => {
    if (hamburgerVisible) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [hamburgerVisible]);

  return (
    <>
      <nav
        className={`flex justify-between items-center px-[var(--padding-x-sm)] md:px-[var(--padding-x-md)] lg:px-[var(--padding-x-lg)] ${
          navbarStyling.navbarHeight
        } fixed top-0 left-0 w-full transition-transform duration-400 bg-black/80 backdrop-blur-sm z-2000 ${
          visible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <Link href={"/"}>
          <div className="text-2xl md:text-5xl font-bold text-[var(--white)]">
            JJE
          </div>
        </Link>
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
        <div className="inline-block md:hidden">
          <HamburgerIcon
            isOpen={hamburgerVisible}
            toggleOpen={toggleHamburger}
          />
        </div>
      </nav>
      {(pathname === "/contact" || pathname === "/contact/") && (
        <ContactSecondary navbarVisible={visible} />
      )}
      {(pathname === "/resume" || pathname === "/resume/") && (
        <ResumeSecondary navbarVisible={visible} />
      )}
      <MobileNav hamburgerVisible={hamburgerVisible} pathname={pathname} />
    </>
  );
}
