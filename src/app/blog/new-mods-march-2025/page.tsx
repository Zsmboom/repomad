import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'New R.E.P.O. Mods Added in March 2025 | REPOMod',
  description: 'Discover 11 exciting new mods added to R.E.P.O. in March 2025, including gameplay enhancements, cosmetics, and quality-of-life improvements.',
};

export default function NewModsMarch2025Page() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-amber-400 mb-6">New R.E.P.O. Mods Added in March 2025</h1>
      
      <div className="text-gray-300 mb-8">
        <p className="mb-4">March 2025 brings an exciting collection of new mods to R.E.P.O., enhancing your gameplay experience with new features, cosmetics, and quality-of-life improvements. Let's explore the latest additions:</p>
      </div>

      <div className="space-y-8">
        {/* REPOLib */}
        <div className="bg-gray-800/50 p-6 rounded-lg border border-amber-500/20">
          <h2 className="text-2xl font-semibold text-amber-400 mb-3">REPOLib v1.5.0</h2>
          <p className="text-gray-300 mb-4">Essential library for adding content to R.E.P.O. with extensive developer tools. This foundational mod enables other mods to integrate seamlessly with the game.</p>
          <Link href="/repomod-REPOLib" className="text-amber-400 hover:text-amber-300">Learn more →</Link>
        </div>

        {/* BensCosmetics */}
        <div className="bg-gray-800/50 p-6 rounded-lg border border-amber-500/20">
          <h2 className="text-2xl font-semibold text-amber-400 mb-3">BensCosmetics v1.4.1</h2>
          <p className="text-gray-300 mb-4">Expands your customization options with 150+ new models and cosmetics. Create unique characters with a wide variety of customization options.</p>
          <Link href="/repomod-BensCosmetics" className="text-amber-400 hover:text-amber-300">Learn more →</Link>
        </div>

        {/* MoreHead and MoreHeadPlus */}
        <div className="bg-gray-800/50 p-6 rounded-lg border border-amber-500/20">
          <h2 className="text-2xl font-semibold text-amber-400 mb-3">MoreHead v1.2.8 & MoreHeadPlus v0.3.0</h2>
          <p className="text-gray-300 mb-4">A dynamic duo of mods that significantly expand your head customization options. MoreHead provides the base functionality, while MoreHeadPlus adds additional model selections.</p>
          <div className="space-x-4">
            <Link href="/repomod-MoreHead" className="text-amber-400 hover:text-amber-300">MoreHead →</Link>
            <Link href="/repomod-MoreHeadPlus" className="text-amber-400 hover:text-amber-300">MoreHeadPlus →</Link>
          </div>
        </div>

        {/* MoreShopItems */}
        <div className="bg-gray-800/50 p-6 rounded-lg border border-amber-500/20">
          <h2 className="text-2xl font-semibold text-amber-400 mb-3">MoreShopItems v1.2.6</h2>
          <p className="text-gray-300 mb-4">Enhances your shopping experience with additional shelves and increased shop loot. Requires REPOLib for full functionality.</p>
          <Link href="/repomod-MoreShopItems" className="text-amber-400 hover:text-amber-300">Learn more →</Link>
        </div>

        {/* MenuLib */}
        <div className="bg-gray-800/50 p-6 rounded-lg border border-amber-500/20">
          <h2 className="text-2xl font-semibold text-amber-400 mb-3">MenuLib v2.1.1</h2>
          <p className="text-gray-300 mb-4">A powerful library for creating UI elements, essential for many REPO mods. This update brings improved compatibility and new features.</p>
          <Link href="/repomod-MenuLib" className="text-amber-400 hover:text-amber-300">Learn more →</Link>
        </div>

        {/* MoreUpgrades */}
        <div className="bg-gray-800/50 p-6 rounded-lg border border-amber-500/20">
          <h2 className="text-2xl font-semibold text-amber-400 mb-3">MoreUpgrades v1.3.8</h2>
          <p className="text-gray-300 mb-4">Introduces new upgrade items to the game, including Sprint Usage, Valuable Count, and more. Each upgrade can be extensively configured.</p>
          <Link href="/repomod-MoreUpgrades" className="text-amber-400 hover:text-amber-300">Learn more →</Link>
        </div>

        {/* ExtractionPointConfirmButton */}
        <div className="bg-gray-800/50 p-6 rounded-lg border border-amber-500/20">
          <h2 className="text-2xl font-semibold text-amber-400 mb-3">ExtractionPointConfirmButton</h2>
          <p className="text-gray-300 mb-4">Adds a confirmation button to extraction points to prevent accidental exits. A simple but effective quality-of-life improvement.</p>
          <Link href="/repomod-ExtractionPointConfirmButton" className="text-amber-400 hover:text-amber-300">Learn more →</Link>
        </div>

        {/* MoreReviveHP */}
        <div className="bg-gray-800/50 p-6 rounded-lg border border-amber-500/20">
          <h2 className="text-2xl font-semibold text-amber-400 mb-3">MoreReviveHP v1.0.1</h2>
          <p className="text-gray-300 mb-4">Increases the health given when reviving teammates with configurable values. Makes team play more rewarding.</p>
          <Link href="/repomod-MoreReviveHP" className="text-amber-400 hover:text-amber-300">Learn more →</Link>
        </div>

        {/* LateJoin */}
        <div className="bg-gray-800/50 p-6 rounded-lg border border-amber-500/20">
          <h2 className="text-2xl font-semibold text-amber-400 mb-3">LateJoin v0.1.2</h2>
          <p className="text-gray-300 mb-4">Allows players to join after the lobby has started, during the truck intermission. Perfect for friends who arrive late to the session.</p>
          <Link href="/repomod-LateJoin" className="text-amber-400 hover:text-amber-300">Learn more →</Link>
        </div>

        {/* TeamUpgrades */}
        <div className="bg-gray-800/50 p-6 rounded-lg border border-amber-500/20">
          <h2 className="text-2xl font-semibold text-amber-400 mb-3">TeamUpgrades v1.1.4</h2>
          <p className="text-gray-300 mb-4">Makes all upgrades work for the whole team! Enhances cooperative gameplay by sharing upgrade benefits across all players.</p>
          <Link href="/repomod-TeamUpgrades" className="text-amber-400 hover:text-amber-300">Learn more →</Link>
        </div>

        {/* TeamHeals */}
        <div className="bg-gray-800/50 p-6 rounded-lg border border-amber-500/20">
          <h2 className="text-2xl font-semibold text-amber-400 mb-3">TeamHeals v1.0.1</h2>
          <p className="text-gray-300 mb-4">Health Packs now work for the whole team! Includes configurable healing amounts to balance the gameplay experience.</p>
          <Link href="/repomod-TeamHeals" className="text-amber-400 hover:text-amber-300">Learn more →</Link>
        </div>
      </div>

      <div className="mt-12 text-gray-300">
        <p className="mb-4">These new mods significantly enhance the R.E.P.O. experience with improved customization options, quality-of-life features, and enhanced cooperative gameplay mechanics. Whether you're looking to customize your character, improve team coordination, or add new gameplay elements, there's something for everyone in this update.</p>
        <p>Remember to check each mod's individual page for detailed installation instructions and configuration options. Happy modding!</p>
      </div>
    </div>
  );
} 