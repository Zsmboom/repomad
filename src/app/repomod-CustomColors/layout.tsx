import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Custom Colors Mod for R.E.P.O - RGB Color Customization | REPOMOD',
  description: 'Enhance your REPO gameplay with Custom Colors mod. Add RGB color sliders to the character customization screen for precise color selection and personalization.',
  keywords: 'Custom Colors, REPO mod, RGB sliders, character customization, color selector, R.E.P.O. mod',
  alternates: {
    canonical: 'https://repomod.com/repomod-CustomColors',
  },
  openGraph: {
    title: 'Custom Colors - RGB Slider Mod for REPO',
    description: 'Personalize your REPO character with Custom Colors mod. RGB sliders for precise color selection on the character customization screen.',
    url: 'https://repomod.com/repomod-CustomColors',
    siteName: 'REPOMOD',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Custom Colors Mod for R.E.P.O',
    description: 'RGB color sliders for the Select Color page. Syncs with other players using the same mod.',
    creator: '@semirork',
  },
};

export default function CustomColorsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 