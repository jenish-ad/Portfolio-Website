import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
// import About from "@/components/About";
import ProjectsPage from "@/components/ProjectsPage";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Navbar />

      <section id="home">
        <Hero />
      </section>

      {/* <section id="about" className="scroll-mt-24">
        <About />
      </section> */}
        <ProjectsPage />
        <Contact />
    </>
  );
}