import type { Metadata } from "next";
import { poppins, sonnyGothic } from "@/lib/fonts";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "Radical Football - Empowering Young Players Through Football",
  description: "A community-driven football education movement focused on building meaningful relationships, education, and joy through the beautiful game.",
  keywords: "football, youth development, coaching, community, education, Romania, Oradea",
  authors: [{ name: "Radical Football" }],
  openGraph: {
    title: "Radical Football",
    description: "Empowering Young Players Through Football",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${sonnyGothic.variable} antialiased`}
      >
        <Navigation />
        <main className="pt-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
