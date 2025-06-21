import { Metadata } from 'next';

// Import base URL from main metadata
import { metadata as baseMetadata } from '../metadata';

export const metadata: Metadata = {
  title: 'Skills | Swati Singh - HR Manager',
  description: 'Explore Swati Singh\'s HR-related skills including recruitment, training coordination, student placement, and internship management.',
  // Ensure metadata base is inherited from the parent
  metadataBase: baseMetadata.metadataBase,
};
