import './globals.css';
import type { Metadata } from 'next';
import { metadata as sharedMetadata } from './metadata';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import MainLayout from '@/components/layout/MainLayout';
import ThemeProvider from '@/components/layout/ThemeProvider';
import { Analytics } from "@vercel/analytics/next"

// Use the shared metadata and override specific fields
export const metadata: Metadata = {
  ...sharedMetadata,
  // Add any layout-specific metadata here if needed
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-sans bg-white text-gray-900" suppressHydrationWarning>
        <ThemeProvider>
          <Header />
          <main className="min-h-screen">
            <MainLayout>
              
              {children}
            </MainLayout>
          </main>
          <Footer />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
