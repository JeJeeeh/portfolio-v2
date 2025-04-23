interface Styling {
  padding: string;
  spaceY: string;
}

interface NavbarStyling {
  navbarHeight: string;
  secondaryHeight: string;
  secondaryPosition: string;
  totalHeight: string;
}

export const smallStyling: Styling = {
  padding: "px-[var(--padding-x-sm)] py-[var(--padding-y-sm)]",
  spaceY: "space-y-[var(--space-y-sm)]",
};

export const mediumStyling: Styling = {
  padding: "md:px-[var(--padding-x-md)] md:py-[var(--padding-y-md)]",
  spaceY: "md:space-y-[var(--space-y-md)]",
};

export const largeStyling: Styling = {
  padding: "lg:px-[var(--padding-x-lg)] lg:py-[var(--padding-y-lg)]",
  spaceY: "lg:space-y-[var(--space-y-lg)]",
};

export const navbarStyling: NavbarStyling = {
  navbarHeight: "h-12 md:h-18",
  secondaryHeight: "h-16 md:h-22",
  secondaryPosition: "top-12 md:top-18",
  totalHeight: "h-28 md:h-40",
};

export const getDefaultPageStyle = (): string => {
  return `${smallStyling.padding} ${smallStyling.spaceY} ${mediumStyling.padding} ${mediumStyling.spaceY} ${largeStyling.padding} ${largeStyling.spaceY}`;
};
