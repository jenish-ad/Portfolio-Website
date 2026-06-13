import "./globals.css";

export const metadata = {
  title: "JENISH",
  description:
    "The professional portfolio of Jenish Adhikari, showcasing selected projects, skills, and experience.",
  openGraph: {
    title: "JENISH",
    description:
      "Explore the selected projects, skills, and experience of Jenish Adhikari.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "JENISH",
    description:
      "Explore the selected projects, skills, and experience of Jenish Adhikari.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <main className="min-h-screen bg-black bg-[radial-gradient(circle_at_75%_45%,rgba(255,77,0,0.22),transparent_35%)]">
          {children}
        </main>
      </body>
    </html>
  );
}
