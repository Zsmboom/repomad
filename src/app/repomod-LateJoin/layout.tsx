import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'LateJoin Mod for R.E.P.O - Join Ongoing Missions | REPOMOD',
  description: 'Enhance your REPO multiplayer experience with LateJoin mod. Allows players to join ongoing missions in progress without waiting for a new game. Perfect for drop-in multiplayer sessions.',
  keywords: 'LateJoin, REPO mod, join in progress, drop-in multiplayer, ongoing missions',
  alternates: {
    canonical: 'https://repomod.com/repomod-LateJoin',
  },
  openGraph: {
    title: 'LateJoin Mod - Join Ongoing Missions in REPO',
    description: 'Never wait for a new game with LateJoin. Connect to ongoing missions in progress and join friends immediately without waiting for a new round to start.',
    url: 'https://repomod.com/repomod-LateJoin',
    siteName: 'REPOMOD',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'LateJoin Mod for R.E.P.O',
    description: 'Join ongoing missions in progress without waiting for a new game to start. Download now!',
    creator: '@semirork',
  },
};

export default function LateJoinLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 