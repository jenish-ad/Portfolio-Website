import Navbar from "@/components/Navbar";
import Home from "@/components/Home";
import ProjectsPage from "@/components/ProjectsPage";
import Contact from "@/components/Contact";

export default function Page() {
  return (
    <>
      <Navbar />
      <Home />
      <ProjectsPage />
      <Contact />
    </>
  );
}