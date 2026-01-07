import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { ClerkProvider } from "@clerk/nextjs";

export const metadata = {
  title: "Nabil-Blog - Next.js 15",
  description: "A modern blog built with Next.js 15",
  keywords: ["Next.js", "SEO", "React", "Blog"],
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>
          <Navbar />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  );
}
