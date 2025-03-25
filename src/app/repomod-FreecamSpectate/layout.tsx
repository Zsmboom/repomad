import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Freecam Spectate Mod for R.E.P.O - Fly While Spectating | REPOMOD',
  description: 'Enhance your REPO gameplay with Freecam Spectate mod. Fly freely around the map while spectating teammates, customizable keybinds, and enhanced viewing experience.',
  keywords: 'Freecam Spectate, REPO mod, spectator mode, flying camera, spectating, R.E.P.O. mod',
  alternates: {
    canonical: 'https://repomod.com/repomod-FreecamSpectate',
  },
  openGraph: {
    title: 'Freecam Spectate - Flying Camera Mod for REPO',
    description: 'Stop being bored while spectating! Fly freely around the map to watch the action from any angle with Freecam Spectate mod for REPO.',
    url: 'https://repomod.com/repomod-FreecamSpectate',
    siteName: 'REPOMOD',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Freecam Spectate Mod for R.E.P.O',
    description: 'Adds free-flying camera controls while spectating for a better viewing experience in REPO.',
    creator: '@semirork',
  },
};

export default function FreecamSpectateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 