import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Dead TTS Mod for R.E.P.O - Text-to-Speech Communication | REPOMOD',
  description: 'Enhance your REPO gameplay with Dead TTS mod. Enables text-to-speech communication from dead players with directional audio and visual cues.',
  keywords: 'Dead TTS, REPO mod, text-to-speech, dead players communication, R.E.P.O. mod, directional audio',
  alternates: {
    canonical: 'https://repomod.com/repomod-DeadTTS',
  },
  openGraph: {
    title: 'Dead TTS Mod for R.E.P.O - Text-to-Speech Communication',
    description: 'Hear and see text-to-speech from dead players with directional audio and visual indicators.',
    url: 'https://repomod.com/repomod-DeadTTS',
    siteName: 'REPOMOD',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dead TTS Mod for R.E.P.O - Text-to-Speech Communication',
    description: 'Hear and see text-to-speech from dead players with directional audio and visual indicators.',
    creator: '@repomodcom',
  },
};

export default function DeadTTSLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 