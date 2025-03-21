import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'TeamHeals Mod for R.E.P.O - Shared Healing System | REPOMOD',
  description: 'Enhance your REPO multiplayer experience with TeamHeals mod. Implements team-wide healing mechanics, allowing for shared health resources and group recovery strategies during missions.',
  keywords: 'TeamHeals, REPO mod, shared healing, team recovery, health system',
  alternates: {
    canonical: 'https://repomod.com/repomod-TeamHeals',
  },
  openGraph: {
    title: 'TeamHeals Mod - Shared Healing System for REPO',
    description: 'Survive together with TeamHeals. Implements shared healing mechanics and team-wide recovery options for more strategic and supportive multiplayer gameplay.',
    url: 'https://repomod.com/repomod-TeamHeals',
    siteName: 'REPOMOD',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TeamHeals Mod for R.E.P.O',
    description: 'Shared healing mechanics and team-wide recovery options for cooperative REPO gameplay. Download now!',
    creator: '@semirork',
  },
};

export default function TeamHealsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 