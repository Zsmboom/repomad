import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Better Truck Heals Mod for R.E.P.O - Enhanced Healing | REPOMOD',
  description: 'Enhance your REPO gameplay with Better Truck Heals mod. Configurable healing system that increases truck heal amount from 25 to 50 health points.',
  keywords: 'Better Truck Heals, REPO mod, healing system, REPOConfig, R.E.P.O. mod, truck healing',
  alternates: {
    canonical: 'https://repomod.com/repomod-BetterTruckHeals',
  },
  openGraph: {
    title: 'Better Truck Heals Mod for R.E.P.O - Enhanced Healing',
    description: 'Improve your survival chances with configurable healing amounts in the truck.',
    url: 'https://repomod.com/repomod-BetterTruckHeals',
    siteName: 'REPOMOD',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Better Truck Heals Mod for R.E.P.O - Enhanced Healing',
    description: 'Improve your survival chances with configurable healing amounts in the truck.',
    creator: '@repomodcom',
  },
};

export default function BetterTruckHealsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 