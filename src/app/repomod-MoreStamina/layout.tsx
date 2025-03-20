import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'MoreStamina Mod for R.E.P.O - Increase Player Stamina and Endurance | REPOMOD',
  description: 'Enhance your REPO gameplay with the MoreStamina mod. Increases player stamina, faster regeneration, and improves endurance for longer runs. Compatible with all other REPO mods.',
  keywords: 'MoreStamina, REPO mod, stamina increase, endurance mod, faster stamina regeneration, REPO game modification, RepoMod, player endurance, REPO game',
  alternates: {
    canonical: 'https://repomod.com/repomod-MoreStamina',
  },
  openGraph: {
    title: 'MoreStamina Mod - Increase Player Stamina and Endurance in REPO',
    description: 'Boost your character\'s stamina and endurance with the MoreStamina mod. Run longer, recover faster, and explore more in REPO. Download now!',
    url: 'https://repomod.com/repomod-MoreStamina',
    siteName: 'REPOMOD',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MoreStamina Mod for R.E.P.O',
    description: 'Boost your character\'s stamina and endurance. Run longer, recover faster in REPO. Download now!',
    creator: '@semirork',
  },
};

export default function MoreStaminaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 