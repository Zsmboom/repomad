import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'MoreHeadPlus Mod for R.E.P.O - Enhanced Character Customization | REPOMOD',
  description: 'Enhance your REPO gameplay with MoreHeadPlus mod. Adds more advanced character customization options beyond MoreHead with additional cosmetics and unique visual elements. Compatible with all other REPO mods.',
  keywords: 'MoreHeadPlus, REPO mod, character customization, cosmetic mod, visual enhancement',
  alternates: {
    canonical: 'https://repomod.com/repomod-MoreHeadPlus',
  },
  openGraph: {
    title: 'MoreHeadPlus Mod - Advanced Character Customization for REPO',
    description: 'Express yourself with the MoreHeadPlus mod. Advanced character customization with unique visual options and cosmetics. Download now!',
    url: 'https://repomod.com/repomod-MoreHeadPlus',
    siteName: 'REPOMOD',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MoreHeadPlus Mod for R.E.P.O',
    description: 'Advanced character customization with unique visual options and cosmetics. Download now!',
    creator: '@semirork',
  },
};

export default function MoreHeadPlusLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 