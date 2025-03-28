'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { FiDownload, FiCalendar, FiPackage } from 'react-icons/fi';
import { motion } from 'framer-motion';
import Link from 'next/link';
import RelatedMods from '@/components/RelatedMods';

export default function LethalCompanyValuablesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main>
        <section className="section bg-gray-800 text-white py-16">
          <div className="container mx-auto px-4">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-8"
            >
              <Link href="/repo-mods-Download" className="inline-flex items-center text-amber-400 hover:underline mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Back to All Mods
              </Link>
              
              <h1 className="text-4xl md:text-5xl font-bold mb-3 flex items-center">
                <FiPackage className="mr-4 text-amber-400" /> 
                LethalCompanyValuables
                <span className="ml-3 text-sm bg-amber-700 px-2 py-1 rounded-full">v1.1.1</span>
              </h1>
              
              <div className="flex items-center mb-6 text-gray-400">
                <FiCalendar className="mr-2" />
                <span>Last Updated: April 30, 2023</span>
              </div>
              
              <div className="bg-gray-900/50 p-6 rounded-lg mb-8 border border-amber-500/20">
                <p className="text-xl text-gray-300 mb-6">
                  Enhance your REPO experience with our premium REPO MODS collection. These REPO MODS add exciting new features and customization options to improve your REPO gameplay. All REPO MODS are fully compatible with the latest version of REPO and receive regular updates. Before using mods, you need to install <a href="https://thunderstore.io/c/repo/p/BepInEx/BepInExPack/" className="text-amber-400 hover:underline" target="_blank" rel="noopener noreferrer">BepInExPack</a> and <a href="https://www.overwolf.com/app/thunderstore-thunderstore_mod_manager" className="text-amber-400 hover:underline" target="_blank" rel="noopener noreferrer">Thunderstore Mod Manager</a>. For detailed installation instructions, please check our <Link href="/How-to-Install-REPO-Mods" className="text-amber-400 hover:underline">installation guide</Link>.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-amber-900/40 backdrop-blur-sm rounded-lg p-8 mb-10 border border-amber-700/50"
            >
              <div className="flex flex-col items-start gap-6">
                <div className="flex-1 w-full">
                  <h2 className="text-3xl font-semibold mb-6">
                    Add 30 Scrap Items from Lethal Company as Valuables in R.E.P.O.
                  </h2>
                  
                  <p className="text-gray-200 mb-6 text-lg">
                    LethalCompanyValuables is a mod that brings iconic scrap items from Lethal Company into the world of R.E.P.O. This mod adds 30 items from Lethal Company as collectible valuables, allowing you to experience the fun of finding and collecting these items in R.E.P.O.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                    <div>
                      <h3 className="text-2xl font-medium mb-4 text-amber-300">Key Features:</h3>
                      <ul className="space-y-4">
                        <li className="bg-gray-900/50 p-4 rounded-md border border-amber-500/20">
                          <h4 className="text-xl font-semibold text-amber-400 mb-2">30 Valuables from Lethal Company</h4>
                          <p>Includes iconic items like Gold Bars, Red Soda, Rubber Ducky and more from Lethal Company.</p>
                        </li>
                        <li className="bg-gray-900/50 p-4 rounded-md border border-amber-500/20">
                          <h4 className="text-xl font-semibold text-amber-400 mb-2">Beautiful Item Models</h4>
                          <p>Each valuable has a carefully crafted 3D model consistent with the original items in Lethal Company.</p>
                        </li>
                        <li className="bg-gray-900/50 p-4 rounded-md border border-amber-500/20">
                          <h4 className="text-xl font-semibold text-amber-400 mb-2">Seamless Integration</h4>
                          <p>All items integrate seamlessly into the game's valuable system with appropriate value and rarity.</p>
                        </li>
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="text-2xl font-medium mb-4 text-amber-300">Gameplay Enhancement:</h3>
                      <ul className="space-y-4">
                        <li className="bg-gray-900/50 p-4 rounded-md border border-amber-500/20">
                          <h4 className="text-xl font-semibold text-amber-400 mb-2">Increased Game Variety</h4>
                          <p>The introduction of more valuable types greatly enhances the collection and exploration aspects of the game.</p>
                        </li>
                        <li className="bg-gray-900/50 p-4 rounded-md border border-amber-500/20">
                          <h4 className="text-xl font-semibold text-amber-400 mb-2">Cross-Game Experience</h4>
                          <p>Combines elements from two popular games to provide a unique experience for fans of both Lethal Company and R.E.P.O.</p>
                        </li>
                        <li className="bg-gray-900/50 p-4 rounded-md border border-amber-500/20">
                          <h4 className="text-xl font-semibold text-amber-400 mb-2">Collection Value</h4>
                          <p>Try to collect all 30 valuables to add a collection and achievement aspect to your gameplay.</p>
                        </li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="bg-gray-900/50 p-6 rounded-md border border-amber-500/20 mb-8">
                    <h3 className="text-2xl font-medium mb-4 text-amber-300">Included Valuables:</h3>
                    <p className="text-gray-200 mb-4">
                      The LethalCompanyValuables mod adds the following 30 items from Lethal Company:
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                      <div className="bg-gray-800/50 p-3 rounded-md border border-amber-500/30">
                        <p className="text-amber-400">Airhorn</p>
                      </div>
                      <div className="bg-gray-800/50 p-3 rounded-md border border-amber-500/30">
                        <p className="text-amber-400">Apparatus</p>
                      </div>
                      <div className="bg-gray-800/50 p-3 rounded-md border border-amber-500/30">
                        <p className="text-amber-400">Big Bolt</p>
                      </div>
                      <div className="bg-gray-800/50 p-3 rounded-md border border-amber-500/30">
                        <p className="text-amber-400">Bottles</p>
                      </div>
                      <div className="bg-gray-800/50 p-3 rounded-md border border-amber-500/30">
                        <p className="text-amber-400">Brass Bell</p>
                      </div>
                      <div className="bg-gray-800/50 p-3 rounded-md border border-amber-500/30">
                        <p className="text-amber-400">Cash Register</p>
                      </div>
                      <div className="bg-gray-800/50 p-3 rounded-md border border-amber-500/30">
                        <p className="text-amber-400">Chemical Jug</p>
                      </div>
                      <div className="bg-gray-800/50 p-3 rounded-md border border-amber-500/30">
                        <p className="text-amber-400">Clown Horn</p>
                      </div>
                      <div className="bg-gray-800/50 p-3 rounded-md border border-amber-500/30">
                        <p className="text-amber-400">Fancy Lamp</p>
                      </div>
                      <div className="bg-gray-800/50 p-3 rounded-md border border-amber-500/30">
                        <p className="text-amber-400">Flask</p>
                      </div>
                      <div className="bg-gray-800/50 p-3 rounded-md border border-amber-500/30">
                        <p className="text-amber-400">Gift Box</p>
                      </div>
                      <div className="bg-gray-800/50 p-3 rounded-md border border-amber-500/30">
                        <p className="text-amber-400">Gold Bar</p>
                      </div>
                      <div className="bg-gray-800/50 p-3 rounded-md border border-amber-500/30">
                        <p className="text-amber-400">Golden Cup</p>
                      </div>
                      <div className="bg-gray-800/50 p-3 rounded-md border border-amber-500/30">
                        <p className="text-amber-400">Hair Brush</p>
                      </div>
                      <div className="bg-gray-800/50 p-3 rounded-md border border-amber-500/30">
                        <p className="text-amber-400">Hairdryer</p>
                      </div>
                      <div className="bg-gray-800/50 p-3 rounded-md border border-amber-500/30">
                        <p className="text-amber-400">Jar Of Pickles</p>
                      </div>
                      <div className="bg-gray-800/50 p-3 rounded-md border border-amber-500/30">
                        <p className="text-amber-400">Large Axle</p>
                      </div>
                      <div className="bg-gray-800/50 p-3 rounded-md border border-amber-500/30">
                        <p className="text-amber-400">Painting</p>
                      </div>
                      <div className="bg-gray-800/50 p-3 rounded-md border border-amber-500/30">
                        <p className="text-amber-400">Magnifying Glass</p>
                      </div>
                      <div className="bg-gray-800/50 p-3 rounded-md border border-amber-500/30">
                        <p className="text-amber-400">Metal Sheet</p>
                      </div>
                      <div className="bg-gray-800/50 p-3 rounded-md border border-amber-500/30">
                        <p className="text-amber-400">Old Phone</p>
                      </div>
                      <div className="bg-gray-800/50 p-3 rounded-md border border-amber-500/30">
                        <p className="text-amber-400">Perfume Bottle</p>
                      </div>
                      <div className="bg-gray-800/50 p-3 rounded-md border border-amber-500/30">
                        <p className="text-amber-400">Plastic Fish</p>
                      </div>
                      <div className="bg-gray-800/50 p-3 rounded-md border border-amber-500/30">
                        <p className="text-amber-400">Red Soda</p>
                      </div>
                      <div className="bg-gray-800/50 p-3 rounded-md border border-amber-500/30">
                        <p className="text-amber-400">Rubber Ducky</p>
                      </div>
                      <div className="bg-gray-800/50 p-3 rounded-md border border-amber-500/30">
                        <p className="text-amber-400">Tea Kettle</p>
                      </div>
                      <div className="bg-gray-800/50 p-3 rounded-md border border-amber-500/30">
                        <p className="text-amber-400">Teeth</p>
                      </div>
                      <div className="bg-gray-800/50 p-3 rounded-md border border-amber-500/30">
                        <p className="text-amber-400">Toy Cube</p>
                      </div>
                      <div className="bg-gray-800/50 p-3 rounded-md border border-amber-500/30">
                        <p className="text-amber-400">Toy Robot</p>
                      </div>
                      <div className="bg-gray-800/50 p-3 rounded-md border border-amber-500/30">
                        <p className="text-amber-400">V-Type Engine</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gray-900/50 p-6 rounded-md border border-amber-500/20 mb-8">
                    <h3 className="text-2xl font-medium mb-4 text-amber-300">Installation Guide:</h3>
                    <ol className="list-decimal pl-5 space-y-2 text-gray-200">
                      <li>First, make sure you have installed <a href="https://thunderstore.io/c/repo/p/BepInEx/BepInExPack/" className="text-amber-400 hover:underline" target="_blank" rel="noopener noreferrer">BepInExPack</a>.</li>
                      <li>Install the <Link href="/repomod-REPOLib" className="text-amber-400 hover:underline">REPOLib</Link> mod, which is a required dependency for LethalCompanyValuables.</li>
                      <li>Download the LethalCompanyValuables mod from below.</li>
                      <li>Extract the downloaded zip file to your REPO game directory, or use a mod manager like <a href="https://www.overwolf.com/app/thunderstore-thunderstore_mod_manager" className="text-amber-400 hover:underline" target="_blank" rel="noopener noreferrer">Thunderstore Mod Manager</a>.</li>
                      <li>Launch the game and start collecting Lethal Company valuables!</li>
                    </ol>
                  </div>
                  
                  <div className="bg-gray-900/50 p-6 rounded-md border border-amber-500/20 mb-8">
                    <h3 className="text-2xl font-medium mb-4 text-amber-300">Compatibility:</h3>
                    <p className="text-gray-200 mb-4">
                      The LethalCompanyValuables mod is designed to be compatible with other mods. It has been tested with the following mods:
                    </p>
                    <ul className="list-disc pl-5 space-y-2 text-gray-200">
                      <li><Link href="/repomod-REPOLib" className="text-amber-400 hover:underline">REPOLib</Link> - Required dependency</li>
                      <li><Link href="/repomod-MoreShopItems" className="text-amber-400 hover:underline">MoreShopItems</Link> - Fully compatible, increases the chance of finding these valuables in the shop</li>
                      <li><Link href="/repomod-MoreUpgrades" className="text-amber-400 hover:underline">MoreUpgrades</Link> - Compatible with the Valuable Counter upgrade to track found Lethal Company items</li>
                      <li>Most other game enhancement mods</li>
                    </ul>
                    <p className="text-gray-200 mt-4 text-amber-500">
                      <strong>Note:</strong> While LethalCompanyValuables is compatible with most mods, there may be compatibility issues with mods that deeply modify the valuable system. If you encounter any issues, please report them to us.
                    </p>
                  </div>
                  
                  <div className="bg-gray-900/50 p-6 rounded-md border border-amber-500/20 mb-8">
                    <h3 className="text-2xl font-medium mb-4 text-amber-300">Player Tips:</h3>
                    <p className="text-gray-200 mb-4">
                      Here are some useful tips when using the LethalCompanyValuables mod:
                    </p>
                    <ul className="list-disc pl-5 space-y-2 text-gray-200">
                      <li>Lethal Company items spawn randomly just like standard R.E.P.O. valuables</li>
                      <li>Some items (like Gold Bars) are worth more, while others (like Toy Cubes) are worth less</li>
                      <li>Try to create a challenge to see how many different Lethal Company items you can collect in one game</li>
                      <li>These items can be sold through the standard selling mechanisms just like other R.E.P.O. valuables</li>
                      <li>Combine this mod with TeamUpgrades and TeamHeals for a more collaborative gaming experience</li>
                    </ul>
                  </div>
                  
                  <a 
                    href="/downloads/repomod-LethalCompanyValuables-1.1.1.zip" 
                    className="inline-flex items-center px-8 py-4 bg-amber-700 text-white text-lg rounded-md hover:bg-amber-600 transition-colors"
                  >
                    <FiDownload className="mr-2" />
                    Download LethalCompanyValuables v1.1.1
                  </a>
                  
                  <div className="mt-16">
                    <RelatedMods currentModId="lethalCompanyValuables" themeColor="amber" />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
} 