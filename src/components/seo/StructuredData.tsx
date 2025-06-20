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
    name: 'Swati',
    jobTitle: 'Human Resource Partner',
    description: 'An experienced HR professional specializing in the IT industry.',
    url: 'https://swati-portfolio.com',
    sameAs: [
      'https://linkedin.com/in/swati',
      'https://twitter.com/swati'
    ],
    knowsAbout: [
      'Human Resources',
      'IT Recruitment',
      'Employee Engagement',
      'Performance Management',
      'HR Analytics'
    ],
    worksFor: {
      '@type': 'Organization',
      name: 'TechSolutions Inc.'
    }
  };

  // Define JSON-LD data for WebSite schema
  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Swati - HR Professional Portfolio',
    url: 'https://swati-portfolio.com',
    description: 'Personal portfolio of Swati, an experienced Human Resource Partner specialized in the IT industry.',
    author: {
      '@type': 'Person',
      name: 'Swati'
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
