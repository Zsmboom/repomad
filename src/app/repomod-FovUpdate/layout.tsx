import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'FOV Update Mod for R.E.P.O - Custom Field of View Settings | REPOMOD',
  description: 'Enhance your REPO gameplay with FOV Update mod. Customize field of view settings with precise control, UltraWide monitor support, and convenient chat commands.',
  keywords: 'FOV Update, field of view, REPO mod, ultrawide support, aspect ratio fix, game resolution, R.E.P.O. mod',
  alternates: {
    canonical: 'https://repomod.com/repomod-FovUpdate',
  },
  openGraph: {
    title: 'FOV Update - Field of View Customization Mod for REPO',
    description: 'Adjust your FOV settings in REPO with precision. Support for ultrawide monitors, upscaling/downscaling, and in-game chat commands.',
    url: 'https://repomod.com/repomod-FovUpdate',
    siteName: 'REPOMOD',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FOV Update Mod for R.E.P.O',
    description: 'Client-side mod for adjusting field of view with precise control. Works with ultrawide monitors!',
    creator: '@semirork',
  },
};

export default function FovUpdateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 