import { Metadata } from 'next';

// Import base URL from main metadata
import { metadata as baseMetadata } from '../metadata';

export const metadata: Metadata = {
  title: 'Contact | Swati Singh - HR Manager',
  description: 'Get in touch with Swati Singh for HR consultations, student placement opportunities, or professional connections.',
  // Ensure metadata base is inherited from the parent
  metadataBase: baseMetadata.metadataBase,
};
