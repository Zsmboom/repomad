import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'REPOLib Mod for R.E.P.O - Core Modding Library | REPOMOD',
  description: 'Essential core library for REPO mods. REPOLib provides developers with powerful tools, APIs, and utilities to create advanced mods and enhance gameplay with custom features.',
  keywords: 'REPOLib, REPO mod, modding library, core API, developer tools',
  alternates: {
    canonical: 'https://repomod.com/repomod-REPOLib',
  },
  openGraph: {
    title: 'REPOLib - Essential Core Library for REPO Modding',
    description: 'The foundation of REPO modding. REPOLib provides a powerful framework and APIs for creating advanced mods with custom features and gameplay enhancements.',
    url: 'https://repomod.com/repomod-REPOLib',
    siteName: 'REPOMOD',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'REPOLib Mod for R.E.P.O',
    description: 'Essential core library providing APIs and tools for creating advanced REPO mods. Download now!',
    creator: '@semirork',
  },
};

export default function REPOLibLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 