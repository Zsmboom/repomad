import { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'New R.E.P.O. Mods Added in March 2025 | REPOMod',
  description: 'Discover 11 exciting new mods added to R.E.P.O. in March 2025, including gameplay enhancements, cosmetics, and quality-of-life improvements.',
  keywords: ['REPO mods', 'new mods', 'game mods', 'REPO updates', 'March 2025'],
};

export default function NewModsBlogPost() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <article className="container mx-auto px-4 py-8 max-w-4xl">
          <header className="mb-8">
            <h1 className="text-4xl font-bold mb-4">New R.E.P.O. Mods Added in March 2025</h1>
            <p className="text-gray-600">Published on January 25, 2025</p>
          </header>

          <div className="prose prose-lg max-w-none">
            <p>
              We're excited to announce the addition of 11 new mods to R.E.P.O. in March 2025! 
              These mods bring exciting new features, enhance gameplay mechanics, and improve the overall gaming experience. 
              Let's take a closer look at what's new:
            </p>

            <h2>1. REPOLib v1.5.0</h2>
            <p>
              A foundational library for adding content to R.E.P.O., providing essential tools and frameworks for mod development.
              <Link href="/repomod-REPOLib" className="text-blue-600 hover:text-blue-800 ml-2">Learn more →</Link>
            </p>

            <h2>2. BensCosmetics v1.4.1</h2>
            <p>
              Adds over 150 new models and cosmetics to enhance character customization options.
              <Link href="/repomod-BensCosmetics" className="text-blue-600 hover:text-blue-800 ml-2">Learn more →</Link>
            </p>

            <h2>3. MoreHead v1.2.8 & MoreHeadPlus v0.3.0</h2>
            <p>
              Expands head customization options with new models and features.
              <Link href="/repomod-MoreHead" className="text-blue-600 hover:text-blue-800 ml-2">Learn more →</Link>
            </p>

            <h2>4. MoreShopItems v1.2.6</h2>
            <p>
              Enhances the shopping experience with additional items and customization options.
              <Link href="/repomod-MoreShopItems" className="text-blue-600 hover:text-blue-800 ml-2">Learn more →</Link>
            </p>

            <h2>5. MenuLib v2.1.1</h2>
            <p>
              A powerful library for creating UI elements and enhancing menu functionality.
              <Link href="/repomod-MenuLib" className="text-blue-600 hover:text-blue-800 ml-2">Learn more →</Link>
            </p>

            <h2>6. MoreUpgrades v1.3.8</h2>
            <p>
              Introduces new upgrade items and enhances the upgrade system.
              <Link href="/repomod-MoreUpgrades" className="text-blue-600 hover:text-blue-800 ml-2">Learn more →</Link>
            </p>

            <h2>7. ExtractionPointConfirmButton</h2>
            <p>
              Adds a confirmation button to extraction points for better user experience.
              <Link href="/repomod-ExtractionPointConfirmButton" className="text-blue-600 hover:text-blue-800 ml-2">Learn more →</Link>
            </p>

            <h2>8. MoreReviveHP v1.0.1</h2>
            <p>
              Increases the amount of health given when reviving teammates.
              <Link href="/repomod-MoreReviveHP" className="text-blue-600 hover:text-blue-800 ml-2">Learn more →</Link>
            </p>

            <h2>9. LateJoin v0.1.2</h2>
            <p>
              Allows late players to join during intermissions for better team coordination.
              <Link href="/repomod-LateJoin" className="text-blue-600 hover:text-blue-800 ml-2">Learn more →</Link>
            </p>

            <h2>10. TeamUpgrades v1.1.4</h2>
            <p>
              Shares upgrades across the team for better cooperative gameplay.
              <Link href="/repomod-TeamUpgrades" className="text-blue-600 hover:text-blue-800 ml-2">Learn more →</Link>
            </p>

            <h2>11. TeamHeals v1.0.1</h2>
            <p>
              Makes health packs work for the entire team, improving team support mechanics.
              <Link href="/repomod-TeamHeals" className="text-blue-600 hover:text-blue-800 ml-2">Learn more →</Link>
            </p>

            <h2>Conclusion</h2>
            <p>
              These new mods significantly enhance the R.E.P.O. experience, offering more customization options, 
              improved gameplay mechanics, and better team coordination features. Whether you're looking to enhance 
              your character's appearance, improve team gameplay, or add new features to your game, these mods have 
              something for everyone.
            </p>
            <p>
              Be sure to check out each mod's individual page for detailed installation instructions and configuration options. 
              Happy modding!
            </p>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
} 