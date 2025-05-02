"use client";

import Footer from "@/components/layout/Footer";
import Navbar from "./Navbar";
import ScrollSmootherWrapper from "../gsap/ScrollSmootherWrapper";

interface Props {
  children: React.ReactNode;
}

export default function RootClient({ children }: Props) {
  return (
    <>
      <Navbar />
      <ScrollSmootherWrapper>
        {children}
        <Footer />
      </ScrollSmootherWrapper>
    </>
  );
}
