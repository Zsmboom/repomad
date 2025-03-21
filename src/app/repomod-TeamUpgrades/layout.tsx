import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'TeamUpgrades Mod for R.E.P.O - Shared Team Progression | REPOMOD',
  description: 'Enhance your REPO multiplayer experience with TeamUpgrades mod. Implements shared upgrades and progression systems for the entire team, improving cooperation and team strategy.',
  keywords: 'TeamUpgrades, REPO mod, shared upgrades, team progression, cooperative play',
  alternates: {
    canonical: 'https://repomod.com/repomod-TeamUpgrades',
  },
  openGraph: {
    title: 'TeamUpgrades Mod - Shared Team Progression for REPO',
    description: 'Progress together with TeamUpgrades. Implements shared upgrade systems and team-wide advancement features for more strategic and cooperative multiplayer gameplay.',
    url: 'https://repomod.com/repomod-TeamUpgrades',
    siteName: 'REPOMOD',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TeamUpgrades Mod for R.E.P.O',
    description: 'Shared upgrade systems and team-wide progression for cooperative REPO gameplay. Download now!',
    creator: '@semirork',
  },
};

export default function TeamUpgradesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 