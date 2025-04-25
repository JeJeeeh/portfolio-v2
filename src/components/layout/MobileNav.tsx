import { navbarStyling } from "@/config/stylingConfig";
import NavLink from "../navbar/NavLink";
import { Separator } from "../ui/separator";

interface Props {
  hamburgerVisible: boolean;
  pathname: string;
}

export default function MobileNav({ hamburgerVisible, pathname }: Props) {
  return (
    <div
      className={`fixed w-full inset-0 left-0 z-1999 backdrop-blur-sm ${
        navbarStyling.secondaryPosition
      } bg-black/80 transition-all duration-400 ease-in-out ${
        hamburgerVisible
          ? "h-[100vh] pointer-events-auto"
          : "h-0 pointer-events-none"
      } px-[var(--padding-x-sm)]`}
    >
      <div
        className={`flex flex-col space-y-6 text-right py-3 transition-opacity duration-400 ${
          hamburgerVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <NavLink className="text-2xl" href="/" pathname={pathname}>
          Home
        </NavLink>
        <NavLink className="text-2xl" href="/resume" pathname={pathname}>
          Resume
        </NavLink>
        <NavLink className="text-2xl" href="/projects" pathname={pathname}>
          Projects
        </NavLink>
        <NavLink className="text-2xl" href="/contact" pathname={pathname}>
          Contact
        </NavLink>
        <Separator />
      </div>
    </div>
  );
}
