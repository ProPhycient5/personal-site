"use client";

import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
// import Footer from "@/components/Footer.tsx";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
 
      <body className="bg-binary-blue text-gray-200 font-sans">
          <Navbar />
          {children}
          <Footer />
      </body>
    </html>
  );
}

