import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AllMods from '@/components/AllMods';

export const metadata = {
  title: 'R.E.P.O. Mods - All Available Game Modifications | Download & Install',
  description: 'Browse and download all available mods for R.E.P.O. game. Find the best modifications to enhance your gameplay experience with our comprehensive mod collection.',
  alternates: {
    canonical: '/repo-mods-Download',
  },
};

export default function ModsDownloadPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main>
        <AllMods />
      </main>
      <Footer />
    </div>
  );
} 