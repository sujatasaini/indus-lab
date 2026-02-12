import type { Metadata } from 'next';
import './globals.css';
import { SiteLayout } from '@/components/site-layout';

export const metadata: Metadata = {
  title: 'Indus Script Exhibition',
  description: 'Virtual showcase, ticket booking, and sponsorship for the Indus Script Exhibition.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <SiteLayout>{children}</SiteLayout>
      </body>
    </html>
  );
}
