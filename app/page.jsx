import Navbar from "@/components/Navbar";
import Home from "@/components/Home";
import Experience from "@/components/Experience";
import ProjectsPage from "@/components/ProjectsPage";
import Contact from "@/components/Contact";
import { site } from "@/lib/site";

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  url: site.url,
  email: `mailto:${site.email}`,
  jobTitle: "Full-Stack Developer",
  description: site.bio,
  address: { "@type": "PostalAddress", addressCountry: "NP" },
  knowsAbout: [
    "Full-stack web development",
    "React",
    "Next.js",
    "Django",
    "Python",
    "Machine learning",
    "Data systems",
  ],
  sameAs: site.socials.map((social) => social.url),
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <Navbar />
      <Home />
      <Experience />
      <ProjectsPage />
      <Contact />
    </>
  );
}