'use client';

import { motion } from 'framer-motion';
import { FiDownload, FiSettings, FiInfo, FiDollarSign, FiArrowLeft, FiZap } from 'react-icons/fi';
import { GiCrystalGrowth } from 'react-icons/gi';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import RelatedMods from '@/components/RelatedMods';

export default function InfiniteEnergyCrystalsMod() {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col">
      <Header />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-gray-800/70 backdrop-blur-sm rounded-lg p-8 border border-purple-500/30 mb-8"
        >
          <div className="mb-4">
            <Link href="/#download" className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors">
              <FiArrowLeft className="mr-2" />
              Back to all mods
            </Link>
          </div>
          
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-6">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-2 flex items-center">
                <FiZap className="mr-3 text-purple-500" /> 
                InfiniteEnergyCrystals
              </h1>
              <p className="text-gray-400 mb-2">Version 1.0.1</p>
              <p className="text-sm text-gray-500">Last updated: March 25, 2023</p>
            </div>
          </div>
          
          <div className="bg-gray-900/50 p-6 rounded-lg mb-8 border border-purple-500/20">
            <p className="text-xl text-gray-300 mb-6">
              Enhance your REPO experience with our premium REPO MODS collection. These REPO MODS add exciting new features and customization options to improve your REPO gameplay. All REPO MODS are fully compatible with the latest version of REPO and receive regular updates. Before using mods, you need to install <a href="https://thunderstore.io/c/repo/p/BepInEx/BepInExPack/" className="text-purple-400 hover:underline" target="_blank" rel="noopener noreferrer">BepInExPack</a> and <a href="https://www.overwolf.com/app/thunderstore-thunderstore_mod_manager" className="text-purple-400 hover:underline" target="_blank" rel="noopener noreferrer">Thunderstore Mod Manager</a>. For detailed installation instructions, please check our <Link href="/How-to-Install-REPO-Mods" className="text-purple-400 hover:underline">installation guide</Link>.
            </p>
          </div>
          
          <div className="prose prose-invert max-w-none">
            <p className="text-xl text-gray-300 mb-6">
              InfiniteEnergyCrystals is a quality-of-life mod that eliminates the need to purchase energy crystals, saving you in-game currency while preserving the core gameplay experience. Never again will you need to spend your hard-earned cash on energy crystals!
            </p>

            <h2 className="text-2xl font-bold text-purple-400 mb-4 mt-8 flex items-center">
              <FiInfo className="mr-2" /> About This Mod
            </h2>
            <div className="bg-gray-800/50 rounded-lg p-6 mb-6 border border-purple-500/20">
              <p className="text-gray-300">
                No more cash wasted on energy crystals! This mod removes the requirement to purchase energy crystals for powering your equipment and devices. It works flawlessly with both existing and new save files, allowing you to enjoy the game without worrying about crystal economy.
              </p>
              <p className="text-gray-300 mt-4">
                The mod preserves the core gameplay mechanics while removing what many players consider an unnecessary grind, letting you focus on exploration and the actual challenges of the game.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-purple-400 mb-4 mt-8 flex items-center">
              <FiDollarSign className="mr-2" /> Key Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gray-800/50 rounded-lg p-6 border border-purple-500/20">
                <h3 className="text-xl font-semibold text-purple-300 mb-3 flex items-center">
                  <GiCrystalGrowth className="mr-2" /> Unlimited Energy
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-2 mt-1">•</span>
                    <span>No energy crystal purchase required</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-2 mt-1">•</span>
                    <span>All devices function as if fully powered</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-2 mt-1">•</span>
                    <span>Works with all game mechanics that require crystals</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-gray-800/50 rounded-lg p-6 border border-purple-500/20">
                <h3 className="text-xl font-semibold text-purple-300 mb-3 flex items-center">
                  <FiSettings className="mr-2" /> Technical Features
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-2 mt-1">•</span>
                    <span>Works on current and new saves</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-2 mt-1">•</span>
                    <span>Compatible with other mods</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-2 mt-1">•</span>
                    <span>No configuration needed</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-2 mt-1">•</span>
                    <span>Minimal performance impact</span>
                  </li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-purple-400 mb-4 mt-8">How It Works</h2>
            <div className="bg-gray-800/50 rounded-lg p-6 mb-8 border border-purple-500/20">
              <p className="text-gray-300">
                The mod works by intercepting the game's energy crystal consumption functions and altering them to always return a positive result, effectively making the game believe you always have sufficient energy crystals without actually modifying your inventory or game progression.
              </p>
              <p className="text-gray-300 mt-4">
                This approach ensures maximum compatibility with other mods and prevents potential issues with save files or game updates.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-purple-400 mb-4 mt-8">Compatibility</h2>
            <div className="bg-gray-800/50 rounded-lg p-6 mb-8 border border-purple-500/20">
              <p className="text-gray-300 mb-4">
                InfiniteEnergyCrystals is compatible with:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-purple-400 mr-2 mt-1">•</span>
                  <span>All official game versions (including latest updates)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-400 mr-2 mt-1">•</span>
                  <span>R.E.P.O. Roles</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-400 mr-2 mt-1">•</span>
                  <span>R.E.P.O. MorePlayers</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-400 mr-2 mt-1">•</span>
                  <span>R.E.P.O. MoreStamina</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-400 mr-2 mt-1">•</span>
                  <span>Most other gameplay mods</span>
                </li>
              </ul>
              <p className="text-gray-300 mt-4">
                <strong>Note:</strong> While this mod is compatible with most other mods, those that specifically alter energy crystal mechanics might conflict. In case of conflicts, load InfiniteEnergyCrystals after other mods in your mod manager.
              </p>
            </div>

            <div className="mt-8 p-4 bg-purple-900/30 border border-purple-500/40 rounded-lg">
              <h3 className="text-lg font-semibold mb-2">Installation Instructions</h3>
              <p className="text-sm mb-3">
                1. Install <a href="https://thunderstore.io/c/repo/p/BepInEx/BepInExPack/" className="text-purple-400 hover:underline" target="_blank" rel="noopener noreferrer">BepInExPack</a> if you haven't already.
              </p>
              <p className="text-sm mb-3">
                2. Extract the contents of the downloaded zip file to your game's BepInEx/plugins folder.
              </p>
              <p className="text-sm">
                3. Start the game and enjoy your infinite energy crystals!
              </p>
            </div>
            
            <div className="mt-12 flex justify-center">
              <Link 
                href="/downloads/repomod-InfiniteEnergyCrystals-1.0.1.zip" 
                className="inline-flex items-center px-8 py-4 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors text-lg"
                download
              >
                <FiDownload className="mr-2" />
                Download InfiniteEnergyCrystals v1.0.1
              </Link>
            </div>
            
            <RelatedMods currentModId="infiniteEnergyCrystals" themeColor="purple" />
          </div>
        </motion.div>
      </main>
      
      <Footer />
    </div>
  );
} 