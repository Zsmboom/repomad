import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'FunnyItems Mod for R.E.P.O - Humorous Valuables Collection | REPOMOD',
  description: 'Enhance your REPO gameplay with FunnyItems mod. Adds numerous fun and funny new valuables to find, collect, and sell during your missions.',
  keywords: 'FunnyItems, REPO mod, valuables, funny items, collectibles, loot, R.E.P.O. mod',
  alternates: {
    canonical: 'https://repomod.com/repomod-FunnyItems',
  },
  openGraph: {
    title: 'FunnyItems - Fun Valuables Collection for REPO',
    description: 'Discover and collect weird, funny items in R.E.P.O. with the FunnyItems mod. Adds numerous humorous valuables to find and sell during your expeditions.',
    url: 'https://repomod.com/repomod-FunnyItems',
    siteName: 'REPOMOD',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FunnyItems Mod for R.E.P.O',
    description: 'Add humor to your R.E.P.O. expeditions with FunnyItems mod - a collection of weird and wonderful valuables to discover and sell. Download now!',
    creator: '@semirork',
  },
};

export default function FunnyItemsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 