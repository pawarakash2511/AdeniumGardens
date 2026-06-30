import type { Metadata, Viewport } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import LenisProvider from "@/app/components/providers/LenisProvider";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  viewportFit: "cover",
};

export const metadata: Metadata = {
  title: "Adenium Gardens Private Limited — Expert Landscaping & Horticulture",
  description:
    "35+ years of expert landscaping, arboriculture, and horticulture services across Mumbai and India. Residential, commercial, and environmental projects.",
  keywords: [
    "landscaping",
    "horticulture",
    "arboriculture",
    "Mumbai",
    "vertical garden",
    "Adenium Gardens",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable}`}>
      <body>
        <LenisProvider>{children}</LenisProvider>
      </body>
    </html>
  );
}
