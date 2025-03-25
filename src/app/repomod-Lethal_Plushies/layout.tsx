import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Lethal Plushies Mod for R.E.P.O - Collectible Enemy Plushies | REPOMOD',
  description: 'Enhance your REPO experience with Lethal Plushies mod. Collect adorable plushie versions of Lethal Company enemies like Hoarding Bug, Ghost Girl, and Baboon Hawk.',
  keywords: 'Lethal Plushies, REPO mod, Lethal Company, plushie collection, Hoarding Bug, Ghost Girl, Baboon Hawk, R.E.P.O. mod',
  alternates: {
    canonical: 'https://repomod.com/repomod-Lethal_Plushies',
  },
  openGraph: {
    title: 'Lethal Plushies - Collectible Enemy Plushies for REPO',
    description: 'Add cute plushie versions of Lethal Company enemies to your REPO game with the Lethal Plushies mod.',
    url: 'https://repomod.com/repomod-Lethal_Plushies',
    siteName: 'REPOMOD',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lethal Plushies Mod for R.E.P.O',
    description: 'Collectible plushies of Lethal Company enemies for REPO with more being added regularly!',
    creator: '@semirork',
  },
};

export default function LethalPlushiesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 