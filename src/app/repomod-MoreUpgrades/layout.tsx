import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'MoreUpgrades Mod for R.E.P.O - Extended Upgrade System | REPOMOD',
  description: 'Enhance your REPO gameplay with MoreUpgrades mod. Adds new upgrades, enhancements, and progression options for equipment and player abilities. Extends your gameplay with new advancement paths.',
  keywords: 'MoreUpgrades, REPO mod, equipment upgrades, player progression, ability enhancements',
  alternates: {
    canonical: 'https://repomod.com/repomod-MoreUpgrades',
  },
  openGraph: {
    title: 'MoreUpgrades Mod - Extended Upgrade System for REPO',
    description: 'More progression options with MoreUpgrades. New equipment enhancements, ability upgrades, and advancement paths for deeper, more customizable gameplay.',
    url: 'https://repomod.com/repomod-MoreUpgrades',
    siteName: 'REPOMOD',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MoreUpgrades Mod for R.E.P.O',
    description: 'New equipment upgrades, ability enhancements, and progression options for REPO. Download now!',
    creator: '@semirork',
  },
};

export default function MoreUpgradesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 