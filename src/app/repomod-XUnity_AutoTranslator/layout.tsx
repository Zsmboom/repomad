import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'XUnity AutoTranslator Mod for R.E.P.O - Game Translation Tool | REPOMOD',
  description: 'Enhance your REPO gameplay with XUnity AutoTranslator mod. Powerful translation plugin for Unity-based games with automatic and manual translation options.',
  keywords: 'XUnity AutoTranslator, REPO mod, game translation, localization, Unity, R.E.P.O. mod',
  alternates: {
    canonical: 'https://repomod.com/repomod-XUnity_AutoTranslator',
  },
  openGraph: {
    title: 'XUnity AutoTranslator - Game Translation Tool for REPO',
    description: 'Play REPO in your preferred language with XUnity AutoTranslator. Supports automatic translation of in-game text and provides tools for manual translation.',
    url: 'https://repomod.com/repomod-XUnity_AutoTranslator',
    siteName: 'REPOMOD',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'XUnity AutoTranslator Mod for R.E.P.O',
    description: 'Advanced translation tool for R.E.P.O. and other Unity games. Automatically translates in-game text with multiple configuration options.',
    creator: '@semirork',
  },
};

export default function XUnityAutoTranslatorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 