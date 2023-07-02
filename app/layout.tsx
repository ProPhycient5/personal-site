"use client";

import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import { ThemeProvider } from "next-themes";
import Footer from "@/components/Footer.jsx";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
 
      <body className="dark:bg-stone-900 font-serif">
        <ThemeProvider enableSystem={true} attribute="class">
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}

//Need to install various npm packages, not shown in video
//need to include @useClient
//please shoot the video by increasing the font-size, it' hard to follow your tuitorial.
//please explain little about the used npm packages like next-theme
//video quality is not good.
//u missed to tell about dark mode of tailwind.
