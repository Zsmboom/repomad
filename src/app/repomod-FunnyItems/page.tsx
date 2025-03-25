'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { FiDownload, FiCalendar, FiDollarSign } from 'react-icons/fi';
import { GiJesterHat } from 'react-icons/gi';
import { motion } from 'framer-motion';
import Link from 'next/link';
import RelatedMods from '@/components/RelatedMods';

export default function FunnyItemsPage() {
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
              <Link href="/#download" className="inline-flex items-center text-green-400 hover:underline mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Back to all mods
              </Link>
              
              <h1 className="text-4xl md:text-5xl font-bold mb-3 flex items-center">
                <GiJesterHat className="mr-4 text-green-400" /> 
                FunnyItems
                <span className="ml-3 text-sm bg-green-700 px-2 py-1 rounded-full">v1.3.0</span>
              </h1>
              
              <div className="flex items-center mb-6 text-gray-400">
                <FiCalendar className="mr-2" />
                <span>Last updated: 3 days ago</span>
              </div>
              
              <div className="bg-gray-900/50 p-6 rounded-lg mb-8 border border-green-500/20">
                <p className="text-xl text-gray-300 mb-6">
                  Enhance your REPO experience with our premium REPO MODS collection. These REPO MODS add exciting new features and customization options to improve your REPO gameplay. All REPO MODS are fully compatible with the latest version of REPO and receive regular updates. Before using mods, you need to install <a href="https://thunderstore.io/c/repo/p/BepInEx/BepInExPack/" className="text-green-400 hover:underline" target="_blank" rel="noopener noreferrer">BepInExPack</a> and <a href="https://www.overwolf.com/app/thunderstore-thunderstore_mod_manager" className="text-green-400 hover:underline" target="_blank" rel="noopener noreferrer">Thunderstore Mod Manager</a>. For detailed installation instructions, please check our <Link href="/How-to-Install-REPO-Mods" className="text-green-400 hover:underline">installation guide</Link>.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-green-900/40 backdrop-blur-sm rounded-lg p-8 mb-10 border border-green-700/50"
            >
              <div className="flex flex-col items-start gap-6">
                <div className="flex-1 w-full">
                  <h2 className="text-3xl font-semibold mb-6">
                    Add Humor to Your Expeditions with Quirky Valuable Items!
                  </h2>
                  
                  <p className="text-gray-200 mb-6 text-lg">
                    FunnyItems is a valuable mod that adds numerous new, humorous collectibles to R.E.P.O. These fun and bizarre items can be found throughout your missions, providing both entertainment and profit as you sell them for credits. Discover weird treasures and add some comedy to the otherwise tense world of R.E.P.O.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                    <div>
                      <h3 className="text-2xl font-medium mb-4 text-green-300">Mod Features:</h3>
                      <ul className="space-y-4">
                        <li className="bg-gray-900/50 p-4 rounded-md border border-green-500/20">
                          <h4 className="text-xl font-semibold text-green-400 mb-2">New Valuable Collection</h4>
                          <p>Adds a wide variety of humorous and strange valuable items throughout the game world for you to find and collect.</p>
                        </li>
                        <li className="bg-gray-900/50 p-4 rounded-md border border-green-500/20">
                          <h4 className="text-xl font-semibold text-green-400 mb-2">Sellable Items</h4>
                          <p>All new items can be sold for credits, making your expeditions both entertaining and profitable.</p>
                        </li>
                        <li className="bg-gray-900/50 p-4 rounded-md border border-green-500/20">
                          <h4 className="text-xl font-semibold text-green-400 mb-2">Continuous Updates</h4>
                          <p>The mod is actively being expanded with more funny items planned for future updates.</p>
                        </li>
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="text-2xl font-medium mb-4 text-green-300">Gameplay Benefits:</h3>
                      <ul className="space-y-4">
                        <li className="bg-gray-900/50 p-4 rounded-md border border-green-500/20">
                          <h4 className="text-xl font-semibold text-green-400 mb-2">Increased Variety</h4>
                          <p>Discover more diverse valuable items during exploration, making each mission feel fresh and exciting.</p>
                        </li>
                        <li className="bg-gray-900/50 p-4 rounded-md border border-green-500/20">
                          <h4 className="text-xl font-semibold text-green-400 mb-2">Comic Relief</h4>
                          <p>Add moments of humor to intense missions with ridiculous and funny items that lighten the mood.</p>
                        </li>
                        <li className="bg-gray-900/50 p-4 rounded-md border border-green-500/20">
                          <h4 className="text-xl font-semibold text-green-400 mb-2">Collection Incentive</h4>
                          <p>Encourages thorough exploration as you search for all the unique and strange valuables added by the mod.</p>
                        </li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="bg-gray-900/50 p-6 rounded-md border border-green-500/20 mb-8">
                    <h3 className="text-2xl font-medium mb-4 text-green-300">Item Collection Showcase:</h3>
                    <p className="text-gray-200 mb-4">
                      FunnyItems adds a wide variety of strange and humorous valuables to the game. These items can be found during your expeditions and sold for credits. Here are some examples of what you might discover:
                    </p>
                    <ul className="list-disc pl-5 space-y-2 text-gray-200">
                      <li>Oversized everyday objects that defy physics</li>
                      <li>Bizarre contraptions with questionable purposes</li>
                      <li>Parody items referencing popular culture</li>
                      <li>Seemingly ordinary objects with absurd modifications</li>
                      <li>Strange artifacts with humorous descriptions</li>
                      <li>Cursed items with comedic effects</li>
                      <li>Ridiculously useless "treasures" worth surprising amounts</li>
                    </ul>
                    <p className="text-gray-200 mt-4">
                      Each item has been carefully crafted to provide both visual humor and interesting gameplay moments when discovered during your missions.
                    </p>
                  </div>
                  
                  <div className="bg-gray-900/50 p-6 rounded-md border border-green-500/20 mb-8">
                    <h3 className="text-2xl font-medium mb-4 text-green-300">Installation:</h3>
                    <ol className="list-decimal pl-5 space-y-2 text-gray-200">
                      <li>First, ensure you have <a href="https://thunderstore.io/c/repo/p/BepInEx/BepInExPack/" className="text-green-400 hover:underline" target="_blank" rel="noopener noreferrer">BepInExPack</a> installed.</li>
                      <li>Download the FunnyItems mod from the link below.</li>
                      <li>Extract the downloaded zip file to your REPO game directory, or use a mod manager like <a href="https://www.overwolf.com/app/thunderstore-thunderstore_mod_manager" className="text-green-400 hover:underline" target="_blank" rel="noopener noreferrer">Thunderstore Mod Manager</a>.</li>
                      <li>Launch the game and start discovering funny items during your missions!</li>
                    </ol>
                  </div>
                  
                  <div className="bg-gray-900/50 p-6 rounded-md border border-green-500/20 mb-8">
                    <h3 className="text-2xl font-medium mb-4 text-green-300">Compatibility:</h3>
                    <p className="text-gray-200 mb-4">
                      FunnyItems is designed to be compatible with most other mods. It works particularly well with:
                    </p>
                    <ul className="list-disc pl-5 space-y-2 text-gray-200">
                      <li><Link href="/repomod-LethalCompanyValuables" className="text-green-400 hover:underline">LethalCompanyValuables</Link> - Complements this mod with additional item variety</li>
                      <li><Link href="/repomod-REPOLib" className="text-green-400 hover:underline">REPOLib</Link> - Core library that enhances compatibility with other mods</li>
                      <li><Link href="/repomod-MoreShopItems" className="text-green-400 hover:underline">MoreShopItems</Link> - Great combo for expanded economic gameplay</li>
                      <li>Most other gameplay enhancement and item-related mods</li>
                    </ul>
                  </div>
                  
                  <div className="bg-gray-900/50 p-6 rounded-md border border-green-500/20 mb-8">
                    <h3 className="text-2xl font-medium mb-4 text-green-300">Future Plans:</h3>
                    <p className="text-gray-200 mb-4">
                      The developer has announced plans to expand FunnyItems with additional content in future updates:
                    </p>
                    <ul className="list-disc pl-5 space-y-2 text-gray-200">
                      <li>More funny and bizarre items to discover</li>
                      <li>Potential special effects for certain items</li>
                      <li>Possible themed collections of funny items</li>
                      <li>Expanded item variety and rarity levels</li>
                    </ul>
                    <p className="text-gray-200 mt-4">
                      Stay tuned for regular updates that will continue to add new content to this already entertaining mod!
                    </p>
                  </div>
                  
                  <a 
                    href="/downloads/repomod-FunnyItems-1.3.0.zip" 
                    className="inline-flex items-center px-8 py-4 bg-green-700 text-white text-lg rounded-md hover:bg-green-600 transition-colors"
                  >
                    <FiDownload className="mr-2" />
                    Download FunnyItems v1.3.0
                  </a>
                  
                  <div className="mt-16">
                    <RelatedMods currentModId="funnyItems" themeColor="green" />
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