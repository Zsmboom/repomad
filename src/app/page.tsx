import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import WhatIs from '@/components/WhatIs';
import HowTo from '@/components/HowTo';
import Why from '@/components/Why';
import FAQ from '@/components/FAQ';
import Download from '@/components/Download';
import Footer from '@/components/Footer';
import OtherVersions from '@/components/OtherVersions';
import ShareSection from '@/components/ShareSection';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main>
        <Hero />
        <Features />
        <WhatIs />
        <HowTo />
        <Why />
        <Download />
        <OtherVersions />
        <ShareSection />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}
