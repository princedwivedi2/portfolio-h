import type { Metadata, Viewport } from 'next';

// Define a base URL for metadata
const baseUrl = process.env.NODE_ENV === 'production' 
  ? 'https://swati-portfolio.com' 
  : 'http://localhost:3000';

// Viewport export for theme color and other viewport settings
export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0a0a0a' }
  ],
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'Swati Singh - HR Manager',
    template: '%s | Swati Singh - HR Professional'
  },
  description: 'Personal portfolio of Swati Singh, a dedicated HR Manager specializing in talent acquisition, training coordination, and student placement.',
  keywords: ['HR Professional', 'HR Manager', 'Talent Acquisition', 'Training Coordination', 'Student Placement', 'Recruitment', 'Training & Development'],
  authors: [{ name: 'Swati Singh' }],
  creator: 'Swati Singh',  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'Swati Singh - HR Professional Portfolio',
    title: 'Swati Singh - HR Manager',
    description: 'Personal portfolio of Swati Singh, a dedicated HR Manager specializing in talent acquisition, training coordination, and student placement.',
    images: [
      {
        url: '/images/profile-og.svg',
        width: 1200,
        height: 630,
        alt: 'Swati Singh - HR Professional'
      }
    ]
  },  twitter: {
    card: 'summary_large_image',
    title: 'Swati Singh - HR Manager',
    description: 'Personal portfolio of Swati Singh, a dedicated HR Manager specializing in talent acquisition, training coordination, and student placement.',
    images: ['/images/profile-og.svg'],
    creator: '@swatisingh' // Update with actual Twitter handle when available
  },verification: {
    // Uncomment and add real verification token when available
    // google: 'your-google-verification-code',
    other: {
      // 'google-site-verification': ['your-actual-verification-token'] 
    }
  },
  robots: {
    index: true,
    follow: true
  }
};
