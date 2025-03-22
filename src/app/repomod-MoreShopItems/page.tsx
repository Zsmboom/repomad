'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { FiDownload, FiCalendar } from 'react-icons/fi';
import { FiShoppingCart } from 'react-icons/fi';
import { motion } from 'framer-motion';
import Link from 'next/link';
import RelatedMods from '@/components/RelatedMods';

export default function MoreShopItemsPage() {
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
              <Link href="/#download" className="inline-flex items-center text-amber-400 hover:underline mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Back to all mods
              </Link>
              
              <h1 className="text-4xl md:text-5xl font-bold mb-3 flex items-center">
                <FiShoppingCart className="mr-4 text-amber-400" /> 
                R.E.P.O. MoreShopItems
                <span className="ml-3 text-sm bg-amber-700 px-2 py-1 rounded-full">v1.2.6</span>
              </h1>
              
              <div className="flex items-center mb-6 text-gray-400">
                <FiCalendar className="mr-2" />
                <span>Last updated: 10 hours ago</span>
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
                    Enhance Your Shopping Experience in R.E.P.O.
                  </h2>
                  
                  <p className="text-gray-200 mb-6 text-lg">
                    MoreShopItems is a mod that adds additional shopping shelves with increased shop loot. This mod enhances your shopping experience by providing more items to choose from, making your preparation for missions more comprehensive and enjoyable.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                    <div>
                      <h3 className="text-2xl font-medium mb-4 text-amber-300">Key Features:</h3>
                      <ul className="space-y-4">
                        <li className="bg-gray-900/50 p-4 rounded-md border border-amber-500/20">
                          <h4 className="text-xl font-semibold text-amber-400 mb-2">Increased Item Spawn Rate</h4>
                          <p>More items will spawn in the shop, giving you a wider selection to choose from.</p>
                        </li>
                        <li className="bg-gray-900/50 p-4 rounded-md border border-amber-500/20">
                          <h4 className="text-xl font-semibold text-amber-400 mb-2">Additional Shelving</h4>
                          <p>The mod adds more shelves to the shop, allowing for more of each item type.</p>
                        </li>
                        <li className="bg-gray-900/50 p-4 rounded-md border border-amber-500/20">
                          <h4 className="text-xl font-semibold text-amber-400 mb-2">REPOLib Integration</h4>
                          <p>Seamlessly integrates with REPOLib for enhanced compatibility and functionality.</p>
                        </li>
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="text-2xl font-medium mb-4 text-amber-300">Benefits:</h3>
                      <ul className="space-y-4">
                        <li className="bg-gray-900/50 p-4 rounded-md border border-amber-500/20">
                          <h4 className="text-xl font-semibold text-amber-400 mb-2">Better Mission Preparation</h4>
                          <p>More items means better equipped teams for tackling challenging missions.</p>
                        </li>
                        <li className="bg-gray-900/50 p-4 rounded-md border border-amber-500/20">
                          <h4 className="text-xl font-semibold text-amber-400 mb-2">Balanced Gameplay</h4>
                          <p>While providing more options, the mod maintains game balance with appropriate pricing.</p>
                        </li>
                        <li className="bg-gray-900/50 p-4 rounded-md border border-amber-500/20">
                          <h4 className="text-xl font-semibold text-amber-400 mb-2">Enhanced Variety</h4>
                          <p>Experience greater variety in available items during your shopping phase.</p>
                        </li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="bg-gray-900/50 p-6 rounded-md border border-amber-500/20 mb-8">
                    <h3 className="text-2xl font-medium mb-4 text-amber-300">How It Works:</h3>
                    <p className="text-gray-200 mb-4">
                      MoreShopItems increases the overall quantity and variety of items available in the shop by:
                    </p>
                    <ul className="list-disc pl-5 space-y-2 text-gray-200">
                      <li>Adding more shelving units to the shop environment</li>
                      <li>Increasing the spawn rate of items on existing shelves</li>
                      <li>Ensuring a greater variety of items spawn during each shop visit</li>
                    </ul>
                    <p className="text-gray-200 mt-4">
                      The mod is designed to enhance your shopping experience without breaking game balance, allowing for more strategic team loadout planning.
                    </p>
                  </div>
                  
                  <div className="bg-gray-900/50 p-6 rounded-md border border-amber-500/20 mb-8">
                    <h3 className="text-2xl font-medium mb-4 text-amber-300">Configuration Options:</h3>
                    <p className="text-gray-200 mb-4">
                      The mod includes configuration options to customize the shopping experience:
                    </p>
                    <ul className="list-disc pl-5 space-y-2 text-gray-200">
                      <li><span className="font-semibold text-amber-400">Max Amount In Shop</span> - The maximum number of times an item can appear in the shop.</li>
                      <li><span className="font-semibold text-amber-400">Max Purchase Override</span> - Toggle to enable/disable the maximum purchase limit (default: true).</li>
                    </ul>
                    <p className="text-gray-200 mt-4 text-amber-500">
                      <strong>Important:</strong> The "Max Amount In Shop" value should only be changed if you are playing with "Max Purchase Override" toggled off (set to false).
                    </p>
                    <p className="text-gray-200 mt-4">
                      Note that this mod does not increase the spawning of carts and pocket carts, only items.
                    </p>
                  </div>
                  
                  <div className="bg-gray-900/50 p-6 rounded-md border border-amber-500/20 mb-8">
                    <h3 className="text-2xl font-medium mb-4 text-amber-300">Known Issues:</h3>
                    <p className="text-gray-200 mb-4">
                      There are some potential issues with the truck's storage capacity:
                    </p>
                    <ul className="list-disc pl-5 space-y-2 text-gray-200">
                      <li>The truck has limited storage slots: 16 upgrades spots, 16 small item spots, 8 large high item spots, 4 large plus item spots, 12 medium item spots, 12 health pack spots, and 4 large item spots.</li>
                      <li>There may be a loss of extra items due to storage limitations, but the truck will spawn the "rest" after loading into the next level.</li>
                    </ul>
                    <p className="text-gray-200 mt-4">
                      The developer is planning to increase the storage capacity in the truck in future updates.
                    </p>
                  </div>
                  
                  <div className="bg-gray-900/50 p-6 rounded-md border border-amber-500/20 mb-8">
                    <h3 className="text-2xl font-medium mb-4 text-amber-300">Installation:</h3>
                    <ol className="list-decimal pl-5 space-y-2 text-gray-200">
                      <li>First, ensure you have <a href="https://thunderstore.io/c/repo/p/BepInEx/BepInExPack/" className="text-amber-400 hover:underline" target="_blank" rel="noopener noreferrer">BepInExPack</a> installed.</li>
                      <li>Install <Link href="/repomod-REPOLib" className="text-amber-400 hover:underline">REPOLib</Link> as it's required for this mod to function.</li>
                      <li>Download the MoreShopItems mod from the link below.</li>
                      <li>Extract the downloaded zip file to your REPO game directory, or use a mod manager like <a href="https://www.overwolf.com/app/thunderstore-thunderstore_mod_manager" className="text-amber-400 hover:underline" target="_blank" rel="noopener noreferrer">Thunderstore Mod Manager</a>.</li>
                      <li>Launch the game and enjoy an enhanced shopping experience!</li>
                    </ol>
                  </div>
                  
                  <div className="bg-gray-900/50 p-6 rounded-md border border-amber-500/20 mb-8">
                    <h3 className="text-2xl font-medium mb-4 text-amber-300">Compatibility:</h3>
                    <p className="text-gray-200 mb-4">
                      MoreShopItems is designed to work well with other mods. It has been tested with:
                    </p>
                    <ul className="list-disc pl-5 space-y-2 text-gray-200">
                      <li><Link href="/repomod-MoreUpgrades" className="text-amber-400 hover:underline">MoreUpgrades</Link> - Works perfectly with the additional upgrade items</li>
                      <li><Link href="/repomod-REPOLib" className="text-amber-400 hover:underline">REPOLib</Link> - Required dependency</li>
                      <li>Most other gameplay enhancement mods</li>
                    </ul>
                    <p className="text-gray-200 mt-4">
                      If you encounter any compatibility issues with other mods, please report them to the mod author.
                    </p>
                  </div>
                  
                  <div className="bg-gray-900/50 p-6 rounded-md border border-amber-500/20 mb-8">
                    <h3 className="text-2xl font-medium mb-4 text-amber-300">Bug Reports:</h3>
                    <p className="text-gray-200 mb-4">
                      If you encounter any bugs or issues with the mod, please report them at:
                    </p>
                    <p className="text-gray-200">
                      <a href="https://github.com/InfusedGalaxy/MoreShopItems/issues" className="text-amber-400 hover:underline" target="_blank" rel="noopener noreferrer">
                        https://github.com/InfusedGalaxy/MoreShopItems/issues
                      </a>
                    </p>
                  </div>
                  
                  <a 
                    href="/downloads/repomod-MoreShopItems-1.2.6.zip" 
                    className="inline-flex items-center px-8 py-4 bg-amber-700 text-white text-lg rounded-md hover:bg-amber-600 transition-colors"
                  >
                    <FiDownload className="mr-2" />
                    Download MoreShopItems v1.2.6
                  </a>
                  
                  <div className="mt-16">
                    <RelatedMods currentModId="moreShopItems" themeColor="amber" />
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