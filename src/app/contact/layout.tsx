import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us | Fisch Macro - Automation Macro Tool for Roblox Fisch Game',
  description: 'Get in touch with the Fisch Macro team for support, feedback, or inquiries about our automation tool for Roblox Fisch game.',
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 