import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'MoreShopItems Mod for R.E.P.O - Expanded Item Shop | REPOMOD',
  description: 'Enhance your REPO gameplay with MoreShopItems mod. Expands the in-game shop with new items, equipment, and tools to enhance your missions and survival capabilities.',
  keywords: 'MoreShopItems, REPO mod, expanded shop, new items, equipment variety',
  alternates: {
    canonical: 'https://repomod.com/repomod-MoreShopItems',
  },
  openGraph: {
    title: 'MoreShopItems Mod - Expanded Item Shop for REPO',
    description: 'More options for your missions with MoreShopItems. Expands the in-game shop with new equipment, tools, and items to enhance your gameplay experience.',
    url: 'https://repomod.com/repomod-MoreShopItems',
    siteName: 'REPOMOD',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MoreShopItems Mod for R.E.P.O',
    description: 'Expands the in-game shop with new equipment, tools and items for your missions. Download now!',
    creator: '@semirork',
  },
};

export default function MoreShopItemsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 