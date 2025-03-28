import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'THE FINALS Valuables Mod for R.E.P.O - Collectible Items | REPOMOD',
  description: 'Enhance your REPO gameplay with THE FINALS Valuables mod. Adds collectible items from the hit game THE FINALS as valuable items to discover and sell.',
  keywords: 'THE FINALS Valuables, REPO mod, collectibles, THE FINALS, R.E.P.O. mod, valuable items',
  alternates: {
    canonical: 'https://repomod.com/repomod-TheFinalsValuables',
  },
  openGraph: {
    title: 'THE FINALS Valuables Mod for R.E.P.O - Collectible Items',
    description: 'Discover and sell valuable items from THE FINALS game in your REPO adventures.',
    url: 'https://repomod.com/repomod-TheFinalsValuables',
    siteName: 'REPOMOD',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'THE FINALS Valuables Mod for R.E.P.O - Collectible Items',
    description: 'Discover and sell valuable items from THE FINALS game in your REPO adventures.',
    creator: '@repomodcom',
  },
};

export default function TheFinalsValuablesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 