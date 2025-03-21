import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'MenuLib Mod for R.E.P.O - Enhanced Menu Library | REPOMOD',
  description: 'Enhance your REPO modding experience with MenuLib. A comprehensive library for creating custom in-game menus and user interfaces. Essential for mod developers and advanced REPO customization.',
  keywords: 'MenuLib, REPO mod, menu library, UI framework, modding tools',
  alternates: {
    canonical: 'https://repomod.com/repomod-MenuLib',
  },
  openGraph: {
    title: 'MenuLib Mod - Enhanced Menu Library for REPO Modding',
    description: 'Power up your mods with MenuLib. Essential library for creating custom in-game menus, interfaces, and advanced UI elements for REPO mods. Download now!',
    url: 'https://repomod.com/repomod-MenuLib',
    siteName: 'REPOMOD',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MenuLib Mod for R.E.P.O',
    description: 'Essential library for creating custom in-game menus and UI elements for REPO mods. Download now!',
    creator: '@semirork',
  },
};

export default function MenuLibLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 