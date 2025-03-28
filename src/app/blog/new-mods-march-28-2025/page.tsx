import { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Latest R.E.P.O. Mods Update - March 28, 2025 | REPOMod',
  description: 'Check out the latest additions to R.E.P.O. including cosmetics, gameplay enhancements, and quality-of-life improvements that will enhance your gaming experience.',
  keywords: ['REPO mods', 'new mods', 'game mods', 'REPO updates', 'March 2025', 'BerserkerEnemies', 'TheFinalsValuables', 'ImprovedStamina'],
};

export default function NewModsMarch28BlogPost() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <article className="container mx-auto px-4 py-8 max-w-4xl">
          <header className="mb-8">
            <h1 className="text-4xl font-bold mb-4">Latest R.E.P.O. Mods Update - March 28, 2025</h1>
            <p className="text-gray-600">Published on March 28, 2025</p>
          </header>

          <div className="prose prose-lg max-w-none">
            <p>
              We're thrilled to announce our latest batch of mods for R.E.P.O.! This update brings a variety of exciting 
              additions including gameplay enhancements, cosmetics, and quality-of-life improvements. Let's dive into 
              what's new:
            </p>

            <h2>Gameplay Enhancements</h2>
            
            <h3>1. BerserkerEnemies v1.0.1</h3>
            <p>
              Take your survival challenge to the next level with the BerserkerEnemies mod! Starting from a configurable level, 
              enemies can enter a berserker mode where they become completely unkillable - they take no damage, cannot be stunned, 
              and cannot be picked up. These berserkers are visually distinct with glowing effects and red smoke, making them 
              easy to identify and avoid. If by some miracle a berserker is defeated, they'll drop especially valuable loot!
              <Link href="/repomod-BerserkerEnemies" className="text-blue-600 hover:text-blue-800 ml-2">Learn more →</Link>
            </p>

            <h3>2. ImprovedStamina v1.2.0</h3>
            <p>
              Enhance your movement mechanics with the ImprovedStamina mod! Instead of the default recharge behavior, 
              this mod introduces a dynamic stamina regeneration system with configurable parameters. After stopping 
              sprinting, stamina begins to regenerate after a short delay, gradually increasing in speed for a more 
              natural and responsive stamina recovery experience. Fully configurable to match your preferred gameplay style.
              <Link href="/repomod-ImprovedStamina" className="text-blue-600 hover:text-blue-800 ml-2">Learn more →</Link>
            </p>

            <h3>3. BetterTruckHeals v1.2.0</h3>
            <p>
              Take control of your healing capabilities with BetterTruckHeals! This mod increases the default heal amount 
              from 25 to 50, giving you a better chance of survival. Fully configurable with REPOConfig, so you can adjust 
              the heal amount to suit your preferred difficulty level.
              <Link href="/repomod-BetterTruckHeals" className="text-blue-600 hover:text-blue-800 ml-2">Learn more →</Link>
            </p>

            <h3>4. XH DamageShow EnemyHealthBar v1.0.1</h3>
            <p>
              Get crucial combat information with this mod that displays enemy health bars and damage numbers. Know exactly 
              how much damage you're dealing and how close enemies are to defeat, making combat more strategic and satisfying.
              <Link href="/repomod-XH_DamageShow_EnemyHealthBar" className="text-blue-600 hover:text-blue-800 ml-2">Learn more →</Link>
            </p>

            <h2>New Cosmetics</h2>

            <h3>1. PopochisCosmetics v1.0.0</h3>
            <p>
              Expand your character customization options with PopochisCosmetics! This mod adds several new cosmetics to the 
              MoreHead mod, including Pink Pig and Green Pig head models. Show off your unique style as you explore!
              <Link href="/repomod-PopochisCosmetics" className="text-blue-600 hover:text-blue-800 ml-2">Learn more →</Link>
            </p>

            <h3>2. BubblesVanity v1.0.0</h3>
            <p>
              Add some fun to your appearance with BubblesVanity! This collection includes various low-poly hats such as 
              Antenna, Straw Hat, Trafalgar Law Hat, as well as SSB-Wii Luigi and Mario Hats. More hats coming in future updates!
              <Link href="/repomod-BubblesVanity" className="text-blue-600 hover:text-blue-800 ml-2">Learn more →</Link>
            </p>

            <h3>3. SmoothCosmetics v1.0.0</h3>
            <p>
              More cosmetic options are available with SmoothCosmetics, designed to work seamlessly with the MoreHead mod. 
              Express yourself with these additional customization options!
              <Link href="/repomod-SmoothCosmetics" className="text-blue-600 hover:text-blue-800 ml-2">Learn more →</Link>
            </p>

            <h2>Atmosphere Enhancements</h2>

            <h3>1. SilentHillSounds v1.0.3</h3>
            <p>
              Change the atmosphere of your game with this mod that replaces blackout sounds with various eerie Silent Hill 
              sounds, creating a more tense and horror-filled experience.
              <Link href="/repomod-SilentHillSounds" className="text-blue-600 hover:text-blue-800 ml-2">Learn more →</Link>
            </p>

            <h3>2. SilentHillMainMenu v1.0.3</h3>
            <p>
              Complete the Silent Hill experience with this mod that replaces the main menu music with "Not Tomorrow" from 
              Silent Hill, setting the mood before you even start playing.
              <Link href="/repomod-SilentHillMainMenu" className="text-blue-600 hover:text-blue-800 ml-2">Learn more →</Link>
            </p>

            <h2>New Valuables</h2>

            <h3>1. TheFinalsValuables v1.0.0</h3>
            <p>
              Add collectible items from the hit game THE FINALS to your R.E.P.O. experience! Find and collect these unique 
              valuables as you explore.
              <Link href="/repomod-TheFinalsValuables" className="text-blue-600 hover:text-blue-800 ml-2">Learn more →</Link>
            </p>

            <h3>2. SossicValuables v1.3.0</h3>
            <p>
              Expand your collection possibilities with SossicValuables, adding new valuable items to discover during your expeditions.
              <Link href="/repomod-SossicValuables" className="text-blue-600 hover:text-blue-800 ml-2">Learn more →</Link>
            </p>

            <h2>Quality of Life</h2>

            <h3>1. VanillaUpgrades v1.0.3</h3>
            <p>
              Take greater control of the base game's upgrade items with VanillaUpgrades! This mod adds extended configuration 
              options similar to those in MoreUpgrades, allowing you to adjust enabled status, shop appearance frequency, pricing, 
              team sharing capabilities, and more for the original game upgrades.
              <Link href="/repomod-VanillaUpgrades" className="text-blue-600 hover:text-blue-800 ml-2">Learn more →</Link>
            </p>

            <h2>Conclusion</h2>
            <p>
              These new mods significantly enhance the R.E.P.O. experience, offering more gameplay challenges, customization options, 
              atmospheric changes, and quality-of-life improvements. Whether you're looking to make the game more challenging, 
              personalize your character's appearance, or collect new valuables, this update has something for everyone.
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