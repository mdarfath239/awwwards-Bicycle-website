import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ReactLenis } from "./utils/lenis";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Carbon X - Ultimate Performance",
  description: "Experience the next generation of carbon road machines.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased bg-[#050505] text-white`}>
        <ReactLenis root>
          {children}
        </ReactLenis>
      </body>
    </html>
  );
}
