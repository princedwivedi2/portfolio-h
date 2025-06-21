import { Metadata } from 'next';

// Import base URL from main metadata
import { metadata as baseMetadata } from '../metadata';

export const metadata: Metadata = {
  title: 'Testimonials | Swati Singh - HR Manager',
  description: 'Read what colleagues, students, and partner companies have to say about working with Swati Singh as an HR Manager.',
  // Ensure metadata base is inherited from the parent
  metadataBase: baseMetadata.metadataBase,
};
