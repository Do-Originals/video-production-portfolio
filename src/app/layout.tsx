import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TransitionLayout from "@/components/TransitionLayout";
import CalProvider from "@/components/CalProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://studio.dooriginals.com"),
  title: "Do Originals | Video Production Studio",
  description: "A team of video editors obsessed with storytelling. We craft high-end video content for brands, creators, and agencies.",
  openGraph: {
    title: "Do Originals | Video Production Studio",
    description: "A team of video editors obsessed with storytelling.",
    url: "https://studio.dooriginals.com",
    siteName: "Do Originals",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Do Originals | Video Production Studio",
    description: "A team of video editors obsessed with storytelling.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white">
        <CalProvider />
        <Navbar />
        <TransitionLayout>
          {children}
          <Footer />
        </TransitionLayout>
      </body>
    </html>
  );
}
