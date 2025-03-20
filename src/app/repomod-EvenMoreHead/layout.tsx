import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'EvenMoreHead Mod for R.E.P.O - Enhanced Head Customization | REPOMOD',
  description: 'Enhance your REPO gameplay with the EvenMoreHead mod. Adds extensive head customization options for characters with new skins, hairstyles, and accessories. Compatible with all other REPO mods.',
  keywords: 'EvenMoreHead, REPO mod, head customization, character appearance, custom skins, hairstyles, character accessories, REPO game modification, RepoMod, visual enhancement, REPO game',
  alternates: {
    canonical: 'https://repomod.com/repomod-EvenMoreHead',
  },
  openGraph: {
    title: 'EvenMoreHead Mod - Enhanced Character Head Customization in REPO',
    description: 'Express yourself with the EvenMoreHead mod. Extensive options for customizing your character\'s head appearance with new skins, hairstyles, and accessories. Download now!',
    url: 'https://repomod.com/repomod-EvenMoreHead',
    siteName: 'REPOMOD',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'EvenMoreHead Mod for R.E.P.O',
    description: 'Customize your character\'s head appearance with new skins, hairstyles, and accessories. Download now!',
    creator: '@semirork',
  },
};

export default function EvenMoreHeadLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 