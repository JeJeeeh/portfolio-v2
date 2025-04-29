"use client";

import Footer from "@/components/layout/Footer";
import dynamic from "next/dynamic";
import Navbar from "./Navbar";

interface Props {
  children: React.ReactNode;
}

const ScrollSmootherWrapper = dynamic(
  () => import("@/components/gsap/ScrollSmootherWrapper"),
  { ssr: false }
);
const PageTransition = dynamic(
  () => import("@/components/framer/PageTransition"),
  { ssr: false }
);

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
