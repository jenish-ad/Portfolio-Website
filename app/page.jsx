"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProjectsPage from "@/components/ProjectsPage";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <ProjectsPage />
      {/* <Hero/> */}
    </>
  );
}