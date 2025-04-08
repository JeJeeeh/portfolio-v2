"use client";

import { forwardRef, useImperativeHandle, useRef } from "react";

interface Props {
  children: React.ReactNode;
}

const HomeHeader = forwardRef<HTMLDivElement, Props>(({ children }, ref) => {
  const headerRef = useRef<HTMLDivElement>(null);

  useImperativeHandle(ref, () => headerRef.current as HTMLDivElement);

  return (
    <div ref={headerRef} className="text-3xl font-semibold">
      {children}
    </div>
  );
});

HomeHeader.displayName = "HomeHeader";
export default HomeHeader;
