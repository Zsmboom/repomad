import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Berserker Enemies Mod for R.E.P.O - Enhanced Combat Challenge | REPOMOD',
  description: 'Enhance your REPO gameplay with the Berserker Enemies mod. Enemies enter rage mode when damaged, increasing combat difficulty and excitement.',
  keywords: 'Berserker Enemies, REPO mod, combat enhancement, enemy AI, R.E.P.O. mod, difficulty mod',
  alternates: {
    canonical: 'https://repomod.com/repomod-BerserkerEnemies',
  },
  openGraph: {
    title: 'Berserker Enemies Mod for R.E.P.O - Enhanced Combat Challenge',
    description: 'Experience a new level of combat challenge with enemies that rage when damaged.',
    url: 'https://repomod.com/repomod-BerserkerEnemies',
    siteName: 'REPOMOD',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Berserker Enemies Mod for R.E.P.O - Enhanced Combat Challenge',
    description: 'Experience a new level of combat challenge with enemies that rage when damaged.',
    creator: '@repomodcom',
  },
};

export default function BerserkerEnemiesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 