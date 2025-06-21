import { Metadata } from 'next';

// Import base URL from main metadata
import { metadata as baseMetadata } from '../metadata';

export const metadata: Metadata = {
  title: 'About | Swati Singh - HR Manager',
  description: 'Learn about Swati Singh\'s experience as an HR Manager specializing in recruitment, training coordination, and student placement.',
  // Ensure metadata base is inherited from the parent
  metadataBase: baseMetadata.metadataBase,
};
