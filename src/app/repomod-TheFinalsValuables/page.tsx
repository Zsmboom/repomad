'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { FaDownload, FaTrophy, FaCoins, FaGamepad, FaBoxOpen } from 'react-icons/fa';
import { GiCrystalGrowth, GiTreasureMap, GiGoldBar } from 'react-icons/gi';
import { motion } from 'framer-motion';
import Link from 'next/link';
import RelatedMods from '@/components/RelatedMods';

export default function TheFinalsValuablesPage() {
  return (
    <>
      <Header />
      <main className="bg-gray-900 text-white min-h-screen">
        {/* Back button and title */}
        <div className="container mx-auto px-4 py-8">
          <Link 
            href="/repo-mods-Download" 
            className="text-gray-400 hover:text-orange-400 transition mb-4 flex items-center gap-2"
          >
            ← Back to all mods
          </Link>
          
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-orange-400 mb-2">THE FINALS Valuables</h1>
            <p className="text-gray-400">Version 1.0.0 · Last updated: 1 week ago</p>
          </div>

          {/* Mod description */}
          <div className="mb-12 max-w-3xl">
            <p className="text-lg mb-4">
              THE FINALS Valuables adds a collection of special items from the hit game THE FINALS to R.E.P.O. as valuable collectibles. Discover and sell these iconic items during your missions to increase your earnings and add a new layer of excitement to your treasure hunting adventures.
            </p>
          </div>

          {/* Key features */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-orange-400">Key Features</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <motion.div 
                className="bg-gray-800 p-6 rounded-lg"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
              >
                <GiGoldBar className="text-orange-400 text-3xl mb-4" />
                <h3 className="text-xl font-bold mb-2">Unique Valuables</h3>
                <p>Adds a collection of special items from THE FINALS as valuable collectibles that can be found and sold in R.E.P.O.</p>
              </motion.div>
              
              <motion.div 
                className="bg-gray-800 p-6 rounded-lg"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
              >
                <FaGamepad className="text-orange-400 text-3xl mb-4" />
                <h3 className="text-xl font-bold mb-2">Game Crossover</h3>
                <p>Experience a unique crossover between R.E.P.O. and THE FINALS with recognizable items from the popular arena shooter.</p>
              </motion.div>

              <motion.div 
                className="bg-gray-800 p-6 rounded-lg"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
              >
                <FaCoins className="text-orange-400 text-3xl mb-4" />
                <h3 className="text-xl font-bold mb-2">Increased Earnings</h3>
                <p>Discover and sell these special items to increase your earnings during missions and expeditions.</p>
              </motion.div>

              <motion.div 
                className="bg-gray-800 p-6 rounded-lg"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
              >
                <GiTreasureMap className="text-orange-400 text-3xl mb-4" />
                <h3 className="text-xl font-bold mb-2">Treasure Hunting</h3>
                <p>Experience enhanced exploration with new valuable items to discover across various locations.</p>
              </motion.div>
            </div>
          </div>

          {/* Overview and installation */}
          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <div>
              <h2 className="text-2xl font-bold mb-4 text-orange-400">Mod Overview</h2>
              <p className="mb-4">
                THE FINALS Valuables enhances the scavenging and collecting aspect of R.E.P.O. by introducing a set of unique collectible items from THE FINALS game. These items spawn throughout the game world alongside standard valuables, giving players more opportunities to find rare and valuable loot.
              </p>
              <p className="mb-4">
                Each of these special items is designed to maintain a balance between being valuable enough to be worth finding while not disrupting the game's economy. The items are carefully integrated into the existing loot tables, ensuring they appear at appropriate frequencies throughout your adventures.
              </p>
              <p>
                This mod is perfect for players who enjoy the treasure hunting aspect of R.E.P.O. and are fans of THE FINALS, adding a layer of crossover appeal and new collectibles to discover during missions.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 text-orange-400">Installation Guide</h2>
              <ol className="list-decimal pl-5 space-y-2">
                <li>Ensure you have the BepInEx framework installed.</li>
                <li>Download the THE FINALS Valuables mod file.</li>
                <li>Extract the contents of the zip file to your game's BepInEx/plugins folder.</li>
                <li>If needed, also install REPOLib which may be required for some functionality.</li>
                <li>Launch the game and begin finding the new valuable items during your missions.</li>
              </ol>
              <div className="mt-6">
                <h3 className="font-bold mb-2 text-orange-300">Compatibility Notes</h3>
                <p>This mod is compatible with most other R.E.P.O. mods and works particularly well with other valuable-adding mods like Lethal Company Valuables. It should not conflict with gameplay mechanics or other modification types.</p>
              </div>
            </div>
          </div>

          {/* Featured Valuables */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-orange-400">Featured Valuables from THE FINALS</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gray-800 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-2 text-orange-300">Gold Casino Chips</h3>
                <p className="mb-2">Luxurious gold-plated casino chips from Monaco's virtual arena.</p>
                <p className="text-sm text-gray-400">Value: High</p>
              </div>
              
              <div className="bg-gray-800 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-2 text-orange-300">Tournament Trophy</h3>
                <p className="mb-2">A championship trophy awarded to winners of THE FINALS tournament.</p>
                <p className="text-sm text-gray-400">Value: Very High</p>
              </div>
              
              <div className="bg-gray-800 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-2 text-orange-300">Virtual Credits</h3>
                <p className="mb-2">Digital currency used in THE FINALS, somehow materialized in the real world.</p>
                <p className="text-sm text-gray-400">Value: Medium</p>
              </div>
            </div>
          </div>

          {/* Why you need this mod */}
          <div className="mb-12 bg-gray-800 p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-4 text-orange-400">Why You Need This Mod</h2>
            <div className="space-y-4">
              <p>
                In standard R.E.P.O. gameplay, the variety of valuable items you can find and collect is somewhat limited. This can make the scavenging aspect of the game feel repetitive after many missions.
              </p>
              <p>
                THE FINALS Valuables addresses this by introducing an entirely new set of collectibles based on items from the popular arena shooter. This adds variety to what you can discover during missions and gives fans of both games a unique crossover experience.
              </p>
              <p>
                Whether you're a dedicated collector looking to find every valuable in the game or simply want to increase the diversity of items you can find, THE FINALS Valuables offers a fresh twist on the treasure hunting aspect of R.E.P.O.
              </p>
            </div>
          </div>

          {/* Download button */}
          <div className="mb-16 text-center">
            <a 
              href="/downloads/repomod-TheFinalsValuables-1.0.0.zip" 
              className="inline-flex items-center gap-2 bg-yellow-600 hover:bg-yellow-700 text-white py-4 px-8 rounded-lg font-bold text-xl transition transform hover:scale-105 shadow-lg"
            >
              <FaDownload />
              Download THE FINALS Valuables Mod
            </a>
          </div>

          {/* Related mods */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-orange-400">Related Mods</h2>
            <RelatedMods currentModId="theFinalsValuables" themeColor="yellow" />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
} 