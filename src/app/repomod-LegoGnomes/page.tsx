'use client';

import { motion } from 'framer-motion';
import { FiDownload, FiSettings, FiInfo, FiList, FiArrowLeft, FiMusic } from 'react-icons/fi';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import RelatedMods from '@/components/RelatedMods';
import { GiGargoyle } from 'react-icons/gi';

export default function LegoGnomesMod() {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col">
      <Header />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-gray-800/70 backdrop-blur-sm rounded-lg p-8 border border-amber-500/30 mb-8"
        >
          <div className="mb-4">
            <Link href="/#download" className="inline-flex items-center text-amber-400 hover:text-amber-300 transition-colors">
              <FiArrowLeft className="mr-2" />
              Back to all mods
            </Link>
          </div>
          
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-6">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-2 flex items-center">
                <GiGargoyle className="mr-3 text-amber-500" /> 
                LegoGnomes
              </h1>
              <p className="text-gray-400 mb-2">Version 1.0.2</p>
              <p className="text-sm text-gray-500">Last updated: March 18, 2023</p>
            </div>
          </div>
          
          <div className="bg-gray-900/50 p-6 rounded-lg mb-8 border border-amber-500/20">
            <p className="text-xl text-gray-300 mb-6">
              Enhance your REPO experience with our premium REPO MODS collection. These REPO MODS add exciting new features and customization options to improve your REPO gameplay. All REPO MODS are fully compatible with the latest version of REPO and receive regular updates. Before using mods, you need to install <a href="https://thunderstore.io/c/repo/p/BepInEx/BepInExPack/" className="text-amber-400 hover:underline" target="_blank" rel="noopener noreferrer">BepInExPack</a> and <a href="https://www.overwolf.com/app/thunderstore-thunderstore_mod_manager" className="text-amber-400 hover:underline" target="_blank" rel="noopener noreferrer">Thunderstore Mod Manager</a>. For detailed installation instructions, please check our <Link href="/How-to-Install-REPO-Mods" className="text-amber-400 hover:underline">installation guide</Link>.
            </p>
          </div>
          
          <div className="prose prose-invert max-w-none">
            <p className="text-xl text-gray-300 mb-6">
              LegoGnomes is a fun audio mod that changes the gnome's death sound to the lego brick breaking sound effect, which works really well with their death animation of splitting into many pieces!
            </p>

            <h2 className="text-2xl font-bold text-amber-400 mb-4 mt-8 flex items-center">
              <FiInfo className="mr-2" /> Features
            </h2>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start">
                <span className="text-amber-500 mr-2 mt-1">•</span>
                <span><strong className="text-amber-400">Sound replacement:</strong> Replaces gnome death sounds with the iconic Lego brick breaking sound effect</span>
              </li>
              <li className="flex items-start">
                <span className="text-amber-500 mr-2 mt-1">•</span>
                <span><strong className="text-amber-400">Perfect match:</strong> Syncs perfectly with the gnome's existing death animation where they break into pieces</span>
              </li>
              <li className="flex items-start">
                <span className="text-amber-500 mr-2 mt-1">•</span>
                <span><strong className="text-amber-400">Lightweight:</strong> Minimal performance impact</span>
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-amber-400 mb-4 mt-8">Compatibility</h2>
            <p className="mb-4">
              LegoGnomes is compatible with all other REPO mods, including:
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-start">
                <span className="text-amber-500 mr-2 mt-1">•</span>
                <span>R.E.P.O. Roles</span>
              </li>
              <li className="flex items-start">
                <span className="text-amber-500 mr-2 mt-1">•</span>
                <span>R.E.P.O. MorePlayers</span>
              </li>
              <li className="flex items-start">
                <span className="text-amber-500 mr-2 mt-1">•</span>
                <span>Enemy Location</span>
              </li>
              <li className="flex items-start">
                <span className="text-amber-500 mr-2 mt-1">•</span>
                <span>ShrinkerCart</span>
              </li>
            </ul>

            <div className="mt-8 p-4 bg-amber-900/30 border border-amber-500/40 rounded-lg">
              <h3 className="text-lg font-semibold mb-2">Installation Instructions</h3>
              <p className="text-sm mb-3">
                1. Install <a href="https://thunderstore.io/c/repo/p/BepInEx/BepInExPack/" className="text-amber-400 hover:underline" target="_blank" rel="noopener noreferrer">BepInExPack</a> if you haven't already.
              </p>
              <p className="text-sm mb-3">
                2. Extract the contents of the downloaded zip file to your game's BepInEx/plugins folder.
              </p>
              <p className="text-sm">
                3. Start the game and enjoy the satisfying Lego brick sound when defeating gnomes!
              </p>
            </div>
            
            <div className="mt-12 flex justify-center">
              <Link 
                href="/downloads/repo-LegoGnomes-1.0.2.zip" 
                className="inline-flex items-center px-8 py-4 bg-amber-600 text-white rounded-md hover:bg-amber-700 transition-colors text-lg"
                download
              >
                <FiDownload className="mr-2" />
                Download LegoGnomes v1.0.2
              </Link>
            </div>
            
            <div className="mt-16">
              <RelatedMods currentModId="legoGnomes" themeColor="amber" />
            </div>
          </div>
        </motion.div>
      </main>
      
      <Footer />
    </div>
  );
} 