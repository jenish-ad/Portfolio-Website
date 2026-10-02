// Shared details used by metadata, the sitemap and structured data.
export const site = {
  name: "Jenish Adhikari",
  title: "Jenish Adhikari | Full-Stack Developer",
  description:
    "I'm Jenish Adhikari, a full-stack developer and Computer Engineering student from Nepal. I build web apps, AI-powered tools and data-driven systems with React, Next.js, Django and Python.",
  // Neutral version for structured data, which search engines read as a profile record
  bio: "Full-stack developer and Computer Engineering student from Nepal, building web apps, AI-powered tools and data-driven systems with React, Next.js, Django and Python.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://jenishadhikari.com.np",
  email: "adhicary.jen@gmail.com",
  socials: [
    "https://github.com/jenish-ad",
    "https://www.linkedin.com/in/jenish-adhikari-8bab6524a",
    "https://www.instagram.com/jenisss.99",
  ],
};
