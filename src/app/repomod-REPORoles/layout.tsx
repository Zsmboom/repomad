import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'R.E.P.O. Roles Mod - Add New Character Classes and Abilities | REPOMOD',
  description: 'Enhance your REPO gameplay with the R.E.P.O. Roles mod. Adds new character classes with unique abilities, skills, and specializations. Compatible with all other REPO mods.',
  keywords: 'REPO Roles, REPO character classes, REPO gameplay mod, character abilities, class specializations, REPO game modification, RepoMod, role-based gameplay, REPO game',
  alternates: {
    canonical: 'https://repomod.com/repomod-REPORoles',
  },
  openGraph: {
    title: 'R.E.P.O. Roles Mod - Add New Character Classes and Abilities',
    description: 'Enhance your REPO gameplay with new character classes featuring unique abilities, skills, and specializations. Compatible with the latest version of REPO.',
    url: 'https://repomod.com/repomod-REPORoles',
    siteName: 'REPOMOD',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'R.E.P.O. Roles Mod - Character Classes',
    description: 'Add new character classes with unique abilities to your REPO gameplay. Download now!',
    creator: '@semirork',
  },
};

export default function REPORolesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 