import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ExtractionPointConfirmButton Mod for R.E.P.O - Prevent Accidental Extractions | REPOMOD',
  description: 'Enhance your REPO gameplay with ExtractionPointConfirmButton mod. Adds a confirmation dialog to extraction points, preventing accidental or premature team extractions. Improves coordination in multiplayer.',
  keywords: 'ExtractionPointConfirmButton, REPO mod, extraction confirmation, team coordination',
  alternates: {
    canonical: 'https://repomod.com/repomod-ExtractionPointConfirmButton',
  },
  openGraph: {
    title: 'ExtractionPointConfirmButton Mod - Prevent Accidental Extractions in REPO',
    description: 'Improve team coordination with ExtractionPointConfirmButton. Adds a confirmation dialog to extraction points, preventing accidental or premature extractions during missions.',
    url: 'https://repomod.com/repomod-ExtractionPointConfirmButton',
    siteName: 'REPOMOD',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ExtractionPointConfirmButton Mod for R.E.P.O',
    description: 'Prevent accidental extractions with a confirmation dialog at extraction points. Download now!',
    creator: '@semirork',
  },
};

export default function ExtractionPointConfirmButtonLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 