import "./globals.css";

export const metadata = {
  title: "Jenish Portfolio",
  description: "Personal portfolio website",
};

export default function RootLayout({ children}) {
  return (
    <html lang="en" className="min-h-full">
      <body className="min-h-screen flex flex-col">
        {children}
      </body>
    </html>
  );
}