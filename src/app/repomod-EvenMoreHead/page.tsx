'use client';

import { motion } from 'framer-motion';
import { FiDownload, FiSettings, FiInfo, FiList, FiArrowLeft } from 'react-icons/fi';
import { GiPartyHat, GiAfterburn, GiGoldStack } from 'react-icons/gi';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import RelatedMods from '@/components/RelatedMods';

export default function EvenMoreHeadMod() {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col">
      <Header />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-gray-800/70 backdrop-blur-sm rounded-lg p-8 border border-green-500/30 mb-8"
        >
          <div className="mb-4">
            <Link href="/#download" className="inline-flex items-center text-amber-400 hover:underline">
              <FiArrowLeft className="mr-2" />
              Back to all mods
            </Link>
          </div>
          
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-6">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-3 flex items-center">
                <GiGoldStack className="mr-4 text-amber-400" /> 
                R.E.P.O. EvenMoreHead
                <span className="ml-3 text-sm bg-amber-700 px-2 py-1 rounded-full">v1.0.2</span>
              </h1>
              <p className="text-gray-400 mb-2">Version 0.1.6</p>
              <p className="text-sm text-gray-500">Last updated: March 22, 2023</p>
            </div>
          </div>
          
          <div className="bg-gray-900/50 p-6 rounded-lg mb-8 border border-amber-500/20">
            <p className="text-xl text-gray-300 mb-6">
              Enhance your REPO experience with our premium REPO MODS collection. These REPO MODS add exciting new features and customization options to improve your REPO gameplay. All REPO MODS are fully compatible with the latest version of REPO and receive regular updates. Before using mods, you need to install <a href="https://thunderstore.io/c/repo/p/BepInEx/BepInExPack/" className="text-amber-400 hover:underline" target="_blank" rel="noopener noreferrer">BepInExPack</a> and <a href="https://www.overwolf.com/app/thunderstore-thunderstore_mod_manager" className="text-amber-400 hover:underline" target="_blank" rel="noopener noreferrer">Thunderstore Mod Manager</a>. For detailed installation instructions, please check our <Link href="/How-to-Install-REPO-Mods" className="text-amber-400 hover:underline">installation guide</Link>.
            </p>
          </div>
          
          <div className="prose prose-invert max-w-none">
            <p className="text-xl text-gray-300 mb-6">
              EvenMoreHead adds a massive collection of new models to the popular MoreHead mod. With over 70 different cosmetic options, this expansion pack significantly enhances your character customization possibilities with a variety of fun and creative accessories.
            </p>

            <h2 className="text-2xl font-bold text-green-400 mb-4 mt-8 flex items-center">
              <FiInfo className="mr-2" /> Introduction
            </h2>
            <div className="bg-gray-800/50 rounded-lg p-6 mb-6 border border-green-500/20">
              <p className="text-gray-300">
                Adds several new models to the MoreHead mod. Did a couple things, its neat. Models may be added in batches as I enjoy game more.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-green-400 mb-4 mt-8 flex items-center">
              <FiList className="mr-2" /> Stuff Added
            </h2>
            <div className="bg-gray-800/50 rounded-lg p-6 mb-6 border border-green-500/20">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 mt-1">•</span>
                    <span>Afro</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 mt-1">•</span>
                    <span>Angel Wings</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 mt-1">•</span>
                    <span>Aviators</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 mt-1">•</span>
                    <span>Beak Top/Bottom</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 mt-1">•</span>
                    <span>Pentagram</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 mt-1">•</span>
                    <span>Blue Horns</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 mt-1">•</span>
                    <span>BluPink Bow</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 mt-1">•</span>
                    <span>Bottle Glasses</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 mt-1">•</span>
                    <span>CatEars</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 mt-1">•</span>
                    <span>CHONKERS</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 mt-1">•</span>
                    <span>ChumBucket</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 mt-1">•</span>
                    <span>Cowboy Hat</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 mt-1">•</span>
                    <span>DealWithIt</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 mt-1">•</span>
                    <span>Demon Wings</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 mt-1">•</span>
                    <span>Ears (3 colors)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 mt-1">•</span>
                    <span>Nose (3 colors)</span>
                  </li>
                </ul>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 mt-1">•</span>
                    <span>Exclamate</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 mt-1">•</span>
                    <span>Helmet</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 mt-1">•</span>
                    <span>LoveyDovey (FX)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 mt-1">•</span>
                    <span>Maxwell</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 mt-1">•</span>
                    <span>MoneyOnTheMind (FX)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 mt-1">•</span>
                    <span>Moustache</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 mt-1">•</span>
                    <span>Pigeon (Flying)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 mt-1">•</span>
                    <span>Pigeon (Hat)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 mt-1">•</span>
                    <span>Pirate Hat</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 mt-1">•</span>
                    <span>Police Hat</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 mt-1">•</span>
                    <span>Purple Bow</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 mt-1">•</span>
                    <span>Rabadon Hat</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 mt-1">•</span>
                    <span>Ranger Hat</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 mt-1">•</span>
                    <span>Red Bow</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 mt-1">•</span>
                    <span>Red Cape</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 mt-1">•</span>
                    <span>Red Party Hat</span>
                  </li>
                </ul>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 mt-1">•</span>
                    <span>Safari Hat</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 mt-1">•</span>
                    <span>Sheriff Star</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 mt-1">•</span>
                    <span>Shower Cap</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 mt-1">•</span>
                    <span>Skibidi</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 mt-1">•</span>
                    <span>Sleepy Hat</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 mt-1">•</span>
                    <span>Sombrero</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 mt-1">•</span>
                    <span>Stinky (FX)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 mt-1">•</span>
                    <span>Toilet Seat</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 mt-1">•</span>
                    <span>Top Hat</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 mt-1">•</span>
                    <span>TubeTop</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 mt-1">•</span>
                    <span>VikingHelm</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 mt-1">•</span>
                    <span>Waluigi</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 mt-1">•</span>
                    <span>WitchHat</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 mt-1">•</span>
                    <span>And many more!</span>
                  </li>
                </ul>
              </div>
              <p className="mt-6 text-green-300 italic">...and possibly more to come as the developer enjoys the game more!</p>
            </div>

            <h2 className="text-2xl font-bold text-green-400 mb-4 mt-8 flex items-center">
              <GiAfterburn className="mr-2" /> Special Effects
            </h2>
            <p className="mb-4">
              Some models include special effects (marked with FX):
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-start">
                <span className="text-green-500 mr-2 mt-1">•</span>
                <span><strong className="text-green-400">LoveyDovey:</strong> Floating hearts animation around your head</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2 mt-1">•</span>
                <span><strong className="text-green-400">MoneyOnTheMind:</strong> Dollar signs and coins floating effect</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2 mt-1">•</span>
                <span><strong className="text-green-400">Stinky:</strong> Classic stink lines and green fumes</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2 mt-1">•</span>
                <span><strong className="text-green-400">TentacleHair:</strong> Animated tentacles that move independently</span>
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-green-400 mb-4 mt-8">Compatibility</h2>
            <p className="mb-4">
              EvenMoreHead is compatible with:
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-start">
                <span className="text-green-500 mr-2 mt-1">•</span>
                <span><strong>Original MoreHead mod</strong> (required as base mod)</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2 mt-1">•</span>
                <span>R.E.P.O. Roles</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2 mt-1">•</span>
                <span>R.E.P.O. MorePlayers</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2 mt-1">•</span>
                <span>All other R.E.P.O. mods</span>
              </li>
            </ul>

            <div className="mt-8 p-4 bg-green-900/30 border border-green-500/40 rounded-lg">
              <h3 className="text-lg font-semibold mb-2">Installation Instructions</h3>
              <p className="text-sm mb-3">
                1. Install <a href="https://thunderstore.io/c/repo/p/BepInEx/BepInExPack/" className="text-green-400 hover:underline" target="_blank" rel="noopener noreferrer">BepInExPack</a> if you haven't already.
              </p>
              <p className="text-sm mb-3">
                2. Install the original MoreHead mod (required).
              </p>
              <p className="text-sm mb-3">
                3. Extract the contents of the downloaded zip file to your game's BepInEx/plugins folder.
              </p>
              <p className="text-sm">
                4. Start the game and enjoy your new cosmetic options!
              </p>
            </div>
            
            <div className="mt-12 flex justify-center">
              <Link 
                href="/downloads/repo-EvenMoreHead-1.0.2.zip" 
                className="inline-flex items-center px-8 py-4 bg-amber-600 text-white rounded-md hover:bg-amber-700 transition-colors text-lg"
                download
              >
                <FiDownload className="mr-2" />
                Download EvenMoreHead v1.0.2
              </Link>
            </div>
            
            <div className="mt-16">
              <RelatedMods currentModId="evenMoreHead" themeColor="amber" />
            </div>
          </div>
        </motion.div>
      </main>
      
      <Footer />
    </div>
  );
} 