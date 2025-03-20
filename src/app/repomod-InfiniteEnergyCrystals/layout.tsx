import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'InfiniteEnergyCrystals Mod for R.E.P.O - Unlimited Energy Resources | REPOMOD',
  description: 'Enhance your REPO gameplay with the InfiniteEnergyCrystals mod. Never run out of energy with unlimited crystal resources for powering devices and equipment. Compatible with all other REPO mods.',
  keywords: 'InfiniteEnergyCrystals, REPO mod, unlimited energy, infinite resources, energy crystals, power devices, REPO game modification, RepoMod, gameplay enhancement, REPO game',
  alternates: {
    canonical: 'https://repomod.com/repomod-InfiniteEnergyCrystals',
  },
  openGraph: {
    title: 'InfiniteEnergyCrystals Mod - Unlimited Energy Resources in REPO',
    description: 'Focus on exploration with the InfiniteEnergyCrystals mod. Unlimited energy crystal resources for powering all your devices and equipment. Download now!',
    url: 'https://repomod.com/repomod-InfiniteEnergyCrystals',
    siteName: 'REPOMOD',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'InfiniteEnergyCrystals Mod for R.E.P.O',
    description: 'Never run out of energy with unlimited crystal resources for powering devices. Download now!',
    creator: '@semirork',
  },
};

export default function InfiniteEnergyCrystalsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 