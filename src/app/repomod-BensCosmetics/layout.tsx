import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'BensCosmetics Mod for R.E.P.O - Premium Visual Customization | REPOMOD',
  description: 'Enhance your REPO gameplay with BensCosmetics mod. Adds premium character cosmetic options with unique visual styles and high-quality aesthetic elements. Compatible with all other REPO mods.',
  keywords: 'BensCosmetics, REPO mod, premium cosmetics, character customization, aesthetics',
  alternates: {
    canonical: 'https://repomod.com/repomod-BensCosmetics',
  },
  openGraph: {
    title: 'BensCosmetics Mod - Premium Visual Customization for REPO',
    description: 'Express your unique style with BensCosmetics mod. Premium character customization with high-quality visual elements and aesthetic options. Download now!',
    url: 'https://repomod.com/repomod-BensCosmetics',
    siteName: 'REPOMOD',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BensCosmetics Mod for R.E.P.O',
    description: 'Premium character customization with high-quality visual elements and aesthetic options. Download now!',
    creator: '@semirork',
  },
};

export default function BensCosmeticsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 