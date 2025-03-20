import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'EnemyLocation Mod for R.E.P.O - Track Monsters on Your Map | REPOMOD',
  description: 'Enhance your REPO gameplay with the EnemyLocation mod. Adds enemy tracking to your map, allowing you to see monster positions and movement in real-time. Compatible with all other REPO mods.',
  keywords: 'EnemyLocation, REPO mod, enemy tracker, monster tracking, map enhancement, enemy position, REPO game modification, RepoMod, gameplay improvement, REPO game',
  alternates: {
    canonical: 'https://repomod.com/repomod-EnemyLocation',
  },
  openGraph: {
    title: 'EnemyLocation Mod - Track Monsters on Your Map in REPO',
    description: 'Stay one step ahead with the EnemyLocation mod. Track enemy positions and movements on your map in real-time for better survival strategies. Download now!',
    url: 'https://repomod.com/repomod-EnemyLocation',
    siteName: 'REPOMOD',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'EnemyLocation Mod for R.E.P.O',
    description: 'Track monster positions and movements on your map in real-time for better survival. Download now!',
    creator: '@semirork',
  },
};

export default function EnemyLocationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 