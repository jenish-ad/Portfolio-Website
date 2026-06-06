import "./globals.css";
import Navbar from "@/components/Navbar.jsx"

export const metadata = {
  title: "Jenish",
  description: "Personal portfolio website",
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