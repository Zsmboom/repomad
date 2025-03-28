import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us | REPOMOD - Comprehensive Mods for REPO Game',
  description: 'Get in touch with the REPOMOD team for support, feedback, or inquiries about our mods and tools for REPO game.',
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 