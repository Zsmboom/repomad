import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'MoreReviveHP Mod for R.E.P.O - Enhanced Revival System | REPOMOD',
  description: 'Improve your REPO gameplay with MoreReviveHP mod. Revived players receive more health, making post-revival survival more viable. Reduces frustration and improves team resilience in challenging missions.',
  keywords: 'MoreReviveHP, REPO mod, revival health, player survival, team resilience',
  alternates: {
    canonical: 'https://repomod.com/repomod-MoreReviveHP',
  },
  openGraph: {
    title: 'MoreReviveHP Mod - Enhanced Revival System for REPO',
    description: 'Give players a fighting chance with MoreReviveHP. Increased health after revival makes post-revival gameplay more viable and reduces frustration during challenging missions.',
    url: 'https://repomod.com/repomod-MoreReviveHP',
    siteName: 'REPOMOD',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MoreReviveHP Mod for R.E.P.O',
    description: 'Revived players receive more health for better post-revival survival. Download now!',
    creator: '@semirork',
  },
};

export default function MoreReviveHPLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 