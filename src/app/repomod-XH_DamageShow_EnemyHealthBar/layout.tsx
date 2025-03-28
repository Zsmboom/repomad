import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'XH DamageShow EnemyHealthBar Mod for R.E.P.O - Combat UI | REPOMOD',
  description: 'Enhance your REPO gameplay with XH DamageShow EnemyHealthBar mod. Displays enemy health bars and damage numbers for better combat awareness and feedback.',
  keywords: 'XH DamageShow EnemyHealthBar, REPO mod, damage numbers, enemy health bar, R.E.P.O. mod, combat UI',
  alternates: {
    canonical: 'https://repomod.com/repomod-XH_DamageShow_EnemyHealthBar',
  },
  openGraph: {
    title: 'XH DamageShow EnemyHealthBar Mod for R.E.P.O - Combat UI',
    description: 'Visualize enemy health and damage numbers for improved combat feedback.',
    url: 'https://repomod.com/repomod-XH_DamageShow_EnemyHealthBar',
    siteName: 'REPOMOD',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'XH DamageShow EnemyHealthBar Mod for R.E.P.O - Combat UI',
    description: 'Visualize enemy health and damage numbers for improved combat feedback.',
    creator: '@repomodcom',
  },
};

export default function XHDamageShowEnemyHealthBarLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 