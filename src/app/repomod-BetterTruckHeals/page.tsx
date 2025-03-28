'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { FaDownload, FaHeartbeat, FaWrench, FaTruck, FaServer } from 'react-icons/fa';
import { IoMdSettings } from 'react-icons/io';
import { GiHealing, GiHealthPotion } from 'react-icons/gi';
import { motion } from 'framer-motion';
import Link from 'next/link';
import RelatedMods from '@/components/RelatedMods';

export default function BetterTruckHealsPage() {
  return (
    <>
      <Header />
      <main className="bg-gray-900 text-white min-h-screen">
        {/* Back button and title */}
        <div className="container mx-auto px-4 py-8">
          <Link 
            href="/repo-mods-Download" 
            className="text-gray-400 hover:text-green-400 transition mb-4 flex items-center gap-2"
          >
            ← Back to all mods
          </Link>
          
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-green-400 mb-2">Better Truck Heals</h1>
            <p className="text-gray-400">Version 1.2.0 · Last updated: 1 week ago</p>
          </div>

          {/* Mod description */}
          <div className="mb-12 max-w-3xl">
            <p className="text-lg mb-4">
              Better Truck Heals is a quality of life mod that enhances the healing system in R.E.P.O. by increasing the default truck heal amount from 25 to 50 health points. The mod is fully configurable through REPOConfig, allowing you to adjust the healing values to your preference.
            </p>
          </div>

          {/* Key features */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-green-400">Key Features</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <motion.div 
                className="bg-gray-800 p-6 rounded-lg"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
              >
                <GiHealing className="text-green-400 text-3xl mb-4" />
                <h3 className="text-xl font-bold mb-2">Enhanced Healing</h3>
                <p>Doubles the default healing amount in the truck from 25 to 50 health points, greatly improving survivability.</p>
              </motion.div>
              
              <motion.div 
                className="bg-gray-800 p-6 rounded-lg"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
              >
                <IoMdSettings className="text-green-400 text-3xl mb-4" />
                <h3 className="text-xl font-bold mb-2">Fully Configurable</h3>
                <p>Adjust healing values through REPOConfig to find the perfect balance for your gameplay style.</p>
              </motion.div>

              <motion.div 
                className="bg-gray-800 p-6 rounded-lg"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
              >
                <FaServer className="text-green-400 text-3xl mb-4" />
                <h3 className="text-xl font-bold mb-2">Server-Side Integration</h3>
                <p>When installed on the server, all players benefit from the enhanced healing regardless of whether they have the mod.</p>
              </motion.div>

              <motion.div 
                className="bg-gray-800 p-6 rounded-lg"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
              >
                <FaTruck className="text-green-400 text-3xl mb-4" />
                <h3 className="text-xl font-bold mb-2">Truck Optimization</h3>
                <p>Makes returning to the truck a more viable strategy during difficult missions by providing substantial healing.</p>
              </motion.div>
            </div>
          </div>

          {/* Overview and installation */}
          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <div>
              <h2 className="text-2xl font-bold mb-4 text-green-400">Mod Overview</h2>
              <p className="mb-4">
                Better Truck Heals addresses one of the most common pain points in R.E.P.O. gameplay: the limited healing provided by the truck. The default value of 25 health points is often insufficient, especially during challenging missions with aggressive enemies.
              </p>
              <p className="mb-4">
                This mod increases the healing amount to 50 health points, making the truck a more reliable recovery option without making the game too easy. The configurable nature of the mod allows you to fine-tune the healing amount based on your team's skill level and preferences.
              </p>
              <p>
                Perfect for both casual players who want a more forgiving experience and hardcore players who want to customize every aspect of their game, Better Truck Heals enhances the gameplay without fundamentally changing the core mechanics.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 text-green-400">Installation Guide</h2>
              <ol className="list-decimal pl-5 space-y-2">
                <li>Ensure you have the BepInEx framework installed.</li>
                <li>Download the Better Truck Heals mod file.</li>
                <li>Extract the contents of the zip file to your game's BepInEx/plugins folder.</li>
                <li>For configuration, install REPOConfig if you haven't already.</li>
                <li>Launch the game, and the mod will load automatically with default settings.</li>
                <li>Use REPOConfig to adjust the healing amount to your preference.</li>
              </ol>
              <div className="mt-6">
                <h3 className="font-bold mb-2 text-green-300">Compatibility Notes</h3>
                <p>This mod is compatible with most other R.E.P.O. mods, including TeamHeals for a comprehensive healing system. It works best when installed on both client and server.</p>
              </div>
            </div>
          </div>

          {/* Why you need this mod */}
          <div className="mb-12 bg-gray-800 p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-4 text-green-400">Why You Need This Mod</h2>
            <div className="space-y-4">
              <p>
                In the standard R.E.P.O. gameplay, the truck healing of only 25 health points often leaves players vulnerable, especially after intense encounters. This limited healing can lead to frustrating gameplay experiences where returning to the truck doesn't provide enough recovery to continue the mission effectively.
              </p>
              <p>
                Better Truck Heals solves this problem by doubling the healing amount, striking a perfect balance between challenge and fairness. The enhanced healing makes the truck a meaningful recovery point without removing the game's inherent challenge.
              </p>
              <p>
                With the configurable options, you can tailor the experience to your exact preferences. Whether you want slightly more healing or a substantial boost, Better Truck Heals gives you the tools to customize your gameplay experience.
              </p>
            </div>
          </div>

          {/* Download button */}
          <div className="mb-16 text-center">
            <a 
              href="/downloads/repomod-BetterTruckHeals-1.2.0.zip" 
              className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white py-4 px-8 rounded-lg font-bold text-xl transition transform hover:scale-105 shadow-lg"
            >
              <FaDownload />
              Download Better Truck Heals Mod
            </a>
          </div>

          {/* Related mods */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-green-400">Related Mods</h2>
            <RelatedMods currentModId="betterTruckHeals" themeColor="green" />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
} 