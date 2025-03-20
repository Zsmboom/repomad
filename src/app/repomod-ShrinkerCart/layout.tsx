import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ShrinkerCart Mod for R.E.P.O - Reduce Cart Size for Better Navigation | REPOMOD',
  description: 'Enhance your REPO gameplay with the ShrinkerCart mod. Reduces the size of the cart for easier navigation through narrow spaces and doorways. Compatible with all other REPO mods.',
  keywords: 'ShrinkerCart, REPO mod, smaller cart, cart navigation, narrow spaces, doorway navigation, REPO game modification, RepoMod, gameplay improvement, REPO game',
  alternates: {
    canonical: 'https://repomod.com/repomod-ShrinkerCart',
  },
  openGraph: {
    title: 'ShrinkerCart Mod - Reduce Cart Size for Better Navigation in REPO',
    description: 'Navigate tight spaces with ease using the ShrinkerCart mod. Reduces cart size for better maneuverability through narrow passages and doorways. Download now!',
    url: 'https://repomod.com/repomod-ShrinkerCart',
    siteName: 'REPOMOD',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ShrinkerCart Mod for R.E.P.O',
    description: 'Navigate tight spaces with ease. Reduces cart size for better maneuverability. Download now!',
    creator: '@semirork',
  },
};

export default function ShrinkerCartLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 