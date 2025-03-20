import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'MorePlayers Mod for R.E.P.O - Play with Up to 6 Players | REPOMOD',
  description: 'Enhance your REPO experience with the MorePlayers mod. Increases player limit up to 6 players with balanced gameplay adjustments. Compatible with all other REPO mods.',
  keywords: 'MorePlayers, REPO mod, REPO player limit, 6 player REPO, multiplayer mod, co-op horror game, REPO game modification, RepoMod, increased players, REPO game',
  alternates: {
    canonical: 'https://repomod.com/repomod-MorePlayers',
  },
  openGraph: {
    title: 'MorePlayers Mod - Play REPO with Up to 6 Players',
    description: 'Increase your REPO player limit up to 6 players with the MorePlayers mod. Includes balanced gameplay adjustments for larger teams. Download now!',
    url: 'https://repomod.com/repomod-MorePlayers',
    siteName: 'REPOMOD',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MorePlayers Mod for R.E.P.O',
    description: 'Play REPO with up to 6 players with balanced gameplay adjustments. Download now!',
    creator: '@semirork',
  },
};

export default function MorePlayersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 