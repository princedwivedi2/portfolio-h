import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    default: 'Swati - Human Resource Partner',
    template: '%s | Swati - HR Professional'
  },
  description: 'Personal portfolio of Swati, an experienced Human Resource Partner specialized in the IT industry.',
  keywords: ['HR Professional', 'Human Resources', 'IT Industry', 'HR Partner', 'Recruitment', 'Employee Engagement'],
  authors: [{ name: 'Swati' }],
  creator: 'Swati',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0a0a0a' }
  ],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://swati-portfolio.com',
    siteName: 'Swati - HR Professional Portfolio',
    title: 'Swati - Human Resource Partner',
    description: 'Personal portfolio of Swati, an experienced Human Resource Partner specialized in the IT industry.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Swati - HR Professional'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Swati - Human Resource Partner',
    description: 'Personal portfolio of Swati, an experienced Human Resource Partner specialized in the IT industry.',
    images: ['/og-image.jpg'],
    creator: '@swati'
  }
};
