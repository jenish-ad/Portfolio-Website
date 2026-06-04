import "./globals.css";
import Navbar from "@/components/Navbar.jsx"

export const metadata = {
  title: "Jenish",
  description: "Personal portfolio website",
};

export default function RootLayout({ children}) {
  return (
    <html>
      <body>
        {children}
      </body>
    </html>
  );
}