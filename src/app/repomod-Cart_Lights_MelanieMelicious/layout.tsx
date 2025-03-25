import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cart Lights MelanieMelicious Mod for R.E.P.O - Enhanced Cart Visibility | REPOMOD',
  description: 'Improve your REPO gameplay with Cart Lights MelanieMelicious mod. Adds functional front lights to medium and pocket carts for better visibility during missions.',
  keywords: 'Cart Lights, REPO mod, cart visibility, MelanieMelicious, quality of life, R.E.P.O. mod',
  alternates: {
    canonical: 'https://repomod.com/repomod-Cart_Lights_MelanieMelicious',
  },
  openGraph: {
    title: 'Cart Lights MelanieMelicious - Enhanced Cart Visibility for REPO',
    description: 'Never navigate in the dark again! Cart Lights MelanieMelicious adds front lights to your carts for improved visibility and safer expeditions.',
    url: 'https://repomod.com/repomod-Cart_Lights_MelanieMelicious',
    siteName: 'REPOMOD',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cart Lights MelanieMelicious Mod for R.E.P.O',
    description: 'Enhance your cart visibility with front lights on medium and pocket carts. A simple quality-of-life mod for better gameplay!',
    creator: '@semirork',
  },
};

export default function CartLightsMelanieMeliciousLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 