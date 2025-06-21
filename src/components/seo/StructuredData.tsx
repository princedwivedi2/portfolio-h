'use client';

import { usePathname } from 'next/navigation';
import Script from 'next/script';

// JSON-LD structured data for SEO
export default function StructuredData() {
  const pathname = usePathname();
  
  // Get the current page name for the structured data
  const getCurrentPage = () => {
    if (pathname === '/') return 'Home';
    return pathname.split('/')[1].charAt(0).toUpperCase() + pathname.split('/')[1].slice(1);
  };
  // Define JSON-LD data for Person schema
  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Swati Singh',
    jobTitle: 'HR Manager',
    description: 'A dedicated HR professional specializing in student training coordination and placement.',
    url: 'https://swati-portfolio.com',
    sameAs: [
      'https://linkedin.com/in/swati-singh-36b2a1280'
    ],
    telephone: '+919076646400',
    email: 'rajputswatisingh78@gmail.com',
    knowsAbout: [
      'Recruitment & Interview Coordination',
      'Summer Training & Internship Management',
      'College/Institute Relations',
      'Placement Coordination',
      'HR Documentation & Compliance',
      'Student Career Development'
    ],
    worksFor: {
      '@type': 'Organization',
      name: 'Softflew Technologies'
    },
    alumniOf: [
      {
        '@type': 'CollegeOrUniversity',
        name: 'Integral University, Lucknow',
        sameAs: 'https://iul.ac.in/'
      }
    ],
    hasCredential: [
      {
        '@type': 'EducationalOccupationalCredential',
        credentialCategory: 'Internship',
        name: '6-Month PHP Internship',
        recognizedBy: {
          '@type': 'Organization',
          name: 'Training Provider'
        },
        dateCreated: '2022'
      }
    ]
  };

  // Define JSON-LD data for WebSite schema
  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Swati Singh - HR Manager Portfolio',
    url: 'https://swati-portfolio.com',
    description: 'Personal portfolio of Swati Singh, an HR Manager specializing in recruitment, student training coordination, and placement.',
    author: {
      '@type': 'Person',
      name: 'Swati Singh'
    },
    inLanguage: 'en-US',
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://swati-portfolio.com/search?q={search_term_string}',
      'query-input': 'required name=search_term_string'
    }
  };

  // Define JSON-LD data for BreadcrumbList schema
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://swati-portfolio.com'
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: getCurrentPage(),
        item: `https://swati-portfolio.com${pathname}`
      }
    ]
  };

  // Only include breadcrumb if not on homepage
  const schemas = pathname === '/' 
    ? [personSchema, websiteSchema] 
    : [personSchema, websiteSchema, breadcrumbSchema];

  return (
    <>
      {schemas.map((schema, index) => (
        <Script 
          key={index} 
          id={`structured-data-${index}`} 
          type="application/ld+json" 
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} 
        />
      ))}
    </>
  );
}
