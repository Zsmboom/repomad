import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mimic Mod for R.E.P.O - Enemy Voice Mimicking System | REPOMOD',
  description: 'Enhance your REPO horror experience with Mimic mod. Inspired by Lethal Company\'s Skinwalkers, enemies can now record and play back player voice chat for a more immersive and frightening gameplay.',
  keywords: 'Mimic, REPO mod, voice mimicking, skinwalker, horror, enemy AI, R.E.P.O. mod',
  alternates: {
    canonical: 'https://repomod.com/repomod-Mimic',
  },
  openGraph: {
    title: 'Mimic - Enemy Voice Mimicking System for REPO',
    description: 'Experience true horror with Mimic for R.E.P.O. Enemies can now record and play back player voices, creating an unsettling and immersive atmosphere during your missions.',
    url: 'https://repomod.com/repomod-Mimic',
    siteName: 'REPOMOD',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mimic Mod for R.E.P.O',
    description: 'Add a new layer of fear to your expeditions with Mimic - enemies that can record and mimic player voices. Download now for a more intense horror experience!',
    creator: '@semirork',
  },
};

export default function MimicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 