import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'EvenMoreHats Mod for R.E.P.O - Fun Cosmetics Collection | REPOMOD',
  description: 'Enhance your REPO character with EvenMoreHats mod. Over 25 fun cosmetic options including Bunny Ears, Cowboy Hat, Cat Ears, and more for personalized gameplay.',
  keywords: 'EvenMoreHats, REPO mod, cosmetics, character customization, hats, bunny ears, cowboy hat',
  alternates: {
    canonical: 'https://repomod.com/repomod-EvenMoreHats',
  },
  openGraph: {
    title: 'EvenMoreHats - Fun Cosmetics Collection for REPO',
    description: 'Personalize your character with EvenMoreHats. Features over 25 different cosmetic options including Bunny Ears, Beanie, Cowboy Hats, Cat Ears, and more.',
    url: 'https://repomod.com/repomod-EvenMoreHats',
    siteName: 'REPOMOD',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'EvenMoreHats Mod for R.E.P.O',
    description: 'Fun character cosmetics with 25+ hat options for your REPO adventures. Download now!',
    creator: '@semirork',
  },
};

export default function EvenMoreHatsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 