import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Improved Stamina Mod for R.E.P.O - Enhanced Endurance | REPOMOD',
  description: 'Enhance your REPO gameplay with Improved Stamina mod. Features dynamic stamina regeneration with scaling rates and fully configurable settings.',
  keywords: 'Improved Stamina, REPO mod, stamina regeneration, dynamic regen, R.E.P.O. mod, endurance system',
  alternates: {
    canonical: 'https://repomod.com/repomod-ImprovedStamina',
  },
  openGraph: {
    title: 'Improved Stamina Mod for R.E.P.O - Enhanced Endurance',
    description: 'Experience better stamina management with dynamic regeneration rates.',
    url: 'https://repomod.com/repomod-ImprovedStamina',
    siteName: 'REPOMOD',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Improved Stamina Mod for R.E.P.O - Enhanced Endurance',
    description: 'Experience better stamina management with dynamic regeneration rates.',
    creator: '@repomodcom',
  },
};

export default function ImprovedStaminaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 