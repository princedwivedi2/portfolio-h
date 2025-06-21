import { Metadata } from 'next';

// Import base URL from main metadata
import { metadata as baseMetadata } from './metadata';

export const metadata: Metadata = {
  title: 'Page Not Found',
  description: 'The page you were looking for could not be found.',
  // Ensure metadata base is inherited from the parent
  metadataBase: baseMetadata.metadataBase,
};
