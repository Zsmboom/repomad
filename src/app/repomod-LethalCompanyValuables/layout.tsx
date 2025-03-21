import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'LethalCompanyValuables Mod for R.E.P.O - Enhanced Loot System | REPOMOD',
  description: 'Enhance your REPO gameplay with LethalCompanyValuables mod. Adds new valuable items and rare collectibles inspired by Lethal Company, increasing loot variety and mission rewards.',
  keywords: 'LethalCompanyValuables, REPO mod, valuable items, collectibles, loot variety',
  alternates: {
    canonical: 'https://repomod.com/repomod-LethalCompanyValuables',
  },
  openGraph: {
    title: 'LethalCompanyValuables Mod - Enhanced Loot System for REPO',
    description: 'Discover more treasures with LethalCompanyValuables. Adds new valuable items and collectibles inspired by Lethal Company, making scavenging more exciting and rewarding.',
    url: 'https://repomod.com/repomod-LethalCompanyValuables',
    siteName: 'REPOMOD',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'LethalCompanyValuables Mod for R.E.P.O',
    description: 'New valuable items and rare collectibles inspired by Lethal Company. Download now!',
    creator: '@semirork',
  },
};

export default function LethalCompanyValuablesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 