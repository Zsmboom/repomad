import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'MoreHead Mod for R.E.P.O - Character Head Customization | REPOMOD',
  description: 'Enhance your REPO gameplay with the MoreHead mod. Adds character head customization options with various cosmetics, hats, and facial features. Compatible with all other REPO mods.',
  keywords: 'MoreHead, REPO mod, head customization, cosmetic mod, custom hats',
  alternates: {
    canonical: 'https://repomod.com/repomod-MoreHead',
  },
  openGraph: {
    title: 'MoreHead Mod - Character Head Customization in REPO',
    description: 'Express yourself with the MoreHead mod. Various options for customizing your character\'s head appearance with cosmetics, hats, and more. Download now!',
    url: 'https://repomod.com/repomod-MoreHead',
    siteName: 'REPOMOD',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MoreHead Mod for R.E.P.O',
    description: 'Customize your character\'s head appearance with cosmetics, hats, and more. Download now!',
    creator: '@semirork',
  },
};

export default function MoreHeadLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 