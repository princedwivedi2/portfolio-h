import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { metadata as baseMetadata } from './metadata';
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import StructuredData from "@/components/seo/StructuredData";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = baseMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased font-sans min-h-screen`}
      >
        <div className="flex flex-col min-h-screen">
          {/* Skip to content link for accessibility */}
          <a href="#main-content" className="skip-to-content">
            Skip to content
          </a>
          
          <Header />
          <main id="main-content" className="flex-grow" tabIndex={-1}>
            {children}
          </main>
          <Footer />
        </div>
        
        {/* Structured data for SEO */}
        <StructuredData />
      </body>
    </html>
  );
}
