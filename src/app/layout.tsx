import type { Metadata } from "next";
import { poppins, sonnyGothic } from "@/lib/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Radical Football",
  description: "The ultimate football experience",
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
        {children}
      </body>
    </html>
  );
}
