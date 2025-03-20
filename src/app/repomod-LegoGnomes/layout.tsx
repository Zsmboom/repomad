import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'LegoGnomes Mod for R.E.P.O - Replace Gnome Death Sounds with Lego Breaking Sound | REPOMOD',
  description: 'LegoGnomes mod replaces gnome death sounds with the iconic Lego brick breaking sound effect, perfectly matching their death animation. Compatible with all other REPO mods. Download now!',
  keywords: 'LegoGnomes, REPO mod, REPO audio mod, gnome sound effect, lego brick sound, death animation, sound replacement, REPO game modification, RepoMod, REPO game',
  alternates: {
    canonical: 'https://repomod.com/repomod-LegoGnomes',
  },
  openGraph: {
    title: 'LegoGnomes Mod - Replace Gnome Death Sounds with Lego Breaking Sound',
    description: 'LegoGnomes mod replaces gnome death sounds with the iconic Lego brick breaking sound effect, perfectly matching their death animation. Download the mod now!',
    url: 'https://repomod.com/repomod-LegoGnomes',
    siteName: 'REPOMOD',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'LegoGnomes Mod for R.E.P.O',
    description: 'Replace gnome death sounds with the iconic Lego brick breaking sound effect. Download now!',
    creator: '@semirork',
  },
};

export default function LegoGnomesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 