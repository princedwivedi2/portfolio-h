import { Metadata } from 'next';

// Import base URL from main metadata
import { metadata as baseMetadata } from '../metadata';

export const metadata: Metadata = {
  title: 'Work & Projects | Swati Singh - HR Manager',
  description: 'Explore HR initiatives and projects led by Swati Singh including summer training programs, student placement drives, and tech company collaborations.',
  // Ensure metadata base is inherited from the parent
  metadataBase: baseMetadata.metadataBase,
};
