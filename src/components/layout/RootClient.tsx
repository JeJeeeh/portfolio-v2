"use client";

import Footer from "@/components/layout/Footer";
import dynamic from "next/dynamic";
import Navbar from "./Navbar";
import ScrollSmootherWrapper from "../gsap/ScrollSmootherWrapper";
import PageTransition from "../framer/PageTransition";

interface Props {
  children: React.ReactNode;
}

export default function RootClient({ children }: Props) {
  return (
    <>
      <Navbar />
      <ScrollSmootherWrapper>
        <PageTransition>{children}</PageTransition>
        <Footer />
      </ScrollSmootherWrapper>
    </>
  );
}
