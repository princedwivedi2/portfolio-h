// Since Next.js 13.4+ we can't import metadata from the app directory, so we need to create a separate file for not-found pages
import { Metadata } from 'next';
import { metadata as baseMetadata } from './metadata';

export const metadata: Metadata = {
  title: 'Page Not Found',
  description: 'The page you were looking for could not be found.',
  metadataBase: baseMetadata.metadataBase,
};
