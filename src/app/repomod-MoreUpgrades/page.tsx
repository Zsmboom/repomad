'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { FiDownload, FiCalendar } from 'react-icons/fi';
import { FiPackage } from 'react-icons/fi';
import { motion } from 'framer-motion';
import Link from 'next/link';
import RelatedMods from '@/components/RelatedMods';

export default function MoreUpgradesPage() {
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
                <FiPackage className="mr-4 text-amber-400" /> 
                R.E.P.O. MoreUpgrades
                <span className="ml-3 text-sm bg-amber-700 px-2 py-1 rounded-full">v1.4.2</span>
              </h1>
              
              <div className="flex items-center mb-6 text-gray-400">
                <FiCalendar className="mr-2" />
                <span>Last updated: 8 hours ago</span>
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
                    Expand Your Upgrade Options in R.E.P.O.
                  </h2>
                  
                  <p className="text-gray-200 mb-6 text-lg">
                    MoreUpgrades adds a variety of new upgrade items to the game, enhancing your gameplay experience with additional abilities and improvements. From stamina enhancements to enemy tracking, these upgrades provide strategic advantages for your team.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                    <div>
                      <h3 className="text-2xl font-medium mb-4 text-amber-300">New Upgrade Items:</h3>
                      <ul className="space-y-4">
                        <li className="bg-gray-900/50 p-4 rounded-md border border-amber-500/20">
                          <h4 className="text-xl font-semibold text-amber-400 mb-2">Sprint Usage</h4>
                          <p>Reduces stamina consumption when sprinting. Can be upgraded multiple times for greater effect.</p>
                        </li>
                        <li className="bg-gray-900/50 p-4 rounded-md border border-amber-500/20">
                          <h4 className="text-xl font-semibold text-amber-400 mb-2">Valuable Count</h4>
                          <p>Displays the number of valuables under the mission text. Can be upgraded only once.</p>
                        </li>
                        <li className="bg-gray-900/50 p-4 rounded-md border border-amber-500/20">
                          <h4 className="text-xl font-semibold text-amber-400 mb-2">Map Enemy Tracker</h4>
                          <p>Tracks enemies in the map radar. Can be upgraded only once.</p>
                        </li>
                        <li className="bg-gray-900/50 p-4 rounded-md border border-amber-500/20">
                          <h4 className="text-xl font-semibold text-amber-400 mb-2">Map Player Tracker</h4>
                          <p>Tracks players in the map radar. Can be upgraded only once.</p>
                        </li>
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="text-2xl font-medium mb-4 text-amber-300">Upgrade Benefits:</h3>
                      <ul className="space-y-4">
                        <li className="bg-gray-900/50 p-4 rounded-md border border-amber-500/20">
                          <h4 className="text-xl font-semibold text-amber-400 mb-2">Enhanced Mobility</h4>
                          <p>Sprint longer with reduced stamina consumption, allowing for faster exploration and escapes.</p>
                        </li>
                        <li className="bg-gray-900/50 p-4 rounded-md border border-amber-500/20">
                          <h4 className="text-xl font-semibold text-amber-400 mb-2">Better Awareness</h4>
                          <p>Track enemies and teammates on your map for improved coordination and situational awareness.</p>
                        </li>
                        <li className="bg-gray-900/50 p-4 rounded-md border border-amber-500/20">
                          <h4 className="text-xl font-semibold text-amber-400 mb-2">Mission Efficiency</h4>
                          <p>Keep track of collected valuables to ensure you're meeting mission objectives before extraction.</p>
                        </li>
                        <li className="bg-gray-900/50 p-4 rounded-md border border-amber-500/20">
                          <h4 className="text-xl font-semibold text-amber-400 mb-2">Strategic Advantage</h4>
                          <p>Combine different upgrades for a tactical edge in challenging missions.</p>
                        </li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="bg-gray-900/50 p-6 rounded-md border border-amber-500/20 mb-8">
                    <h3 className="text-2xl font-medium mb-4 text-amber-300">How It Works:</h3>
                    <p className="text-gray-200 mb-4">
                      The MoreUpgrades mod adds new purchasable upgrade items to the shop. These items provide various benefits:
                    </p>
                    <ul className="list-disc pl-5 space-y-2 text-gray-200">
                      <li><span className="font-semibold text-amber-400">Sprint Usage:</span> Each level reduces the stamina consumption during sprinting, allowing you to sprint longer.</li>
                      <li><span className="font-semibold text-amber-400">Valuable Count:</span> Shows a counter of collected valuables under the mission objective, helping you track your progress.</li>
                      <li><span className="font-semibold text-amber-400">Map Enemy Tracker:</span> Allows you to see enemy positions on your map radar, making it easier to avoid or engage them strategically.</li>
                      <li><span className="font-semibold text-amber-400">Map Player Tracker:</span> Displays the positions of all team members on your map radar, improving team coordination.</li>
                    </ul>
                    <p className="text-gray-200 mt-4">
                      These upgrades appear in the shop as purchasable items and can be brought on missions to enhance your capabilities.
                    </p>
                  </div>
                  
                  <div className="bg-gray-900/50 p-6 rounded-md border border-amber-500/20 mb-8">
                    <h3 className="text-2xl font-medium mb-4 text-amber-300">Configuration Options:</h3>
                    <p className="text-gray-200 mb-4">
                      Each upgrade item can be configured extensively in the mod's configuration file:
                    </p>
                    <ul className="list-disc pl-5 space-y-2 text-gray-200">
                      <li><span className="font-semibold text-amber-400">Enabled:</span> Whether the upgrade item can be spawned in the shop.</li>
                      <li><span className="font-semibold text-amber-400">Max Amount:</span> The maximum number of times the upgrade item can appear in the truck.</li>
                      <li><span className="font-semibold text-amber-400">Max Amount In Shop:</span> The maximum number of times the upgrade item can appear in the shop.</li>
                      <li><span className="font-semibold text-amber-400">Minimum Price:</span> The minimum cost to purchase the upgrade item.</li>
                      <li><span className="font-semibold text-amber-400">Maximum Price:</span> The maximum cost to purchase the upgrade item.</li>
                      <li><span className="font-semibold text-amber-400">Price Increase Scaling:</span> The scale of the price increase based on the total number of upgrade items purchased.</li>
                      <li><span className="font-semibold text-amber-400">Max Purchase Amount:</span> The maximum number of times the upgrade item can be purchased before it is no longer available in the shop.</li>
                      <li><span className="font-semibold text-amber-400">Allow Team Upgrades:</span> Whether the upgrade item applies to the entire team instead of just one player.</li>
                      <li><span className="font-semibold text-amber-400">Starting Amount:</span> The number of times the upgrade item is applied at the start of the game.</li>
                      <li><span className="font-semibold text-amber-400">Display Name:</span> The display name of the upgrade item.</li>
                    </ul>
                    <p className="text-gray-200 mt-4">
                      <span className="font-semibold text-amber-400">Note:</span> Some upgrade items have additional configuration options. Check the config file after updates, as values may change between versions.
                    </p>
                  </div>
                  
                  <div className="bg-gray-900/50 p-6 rounded-md border border-amber-500/20 mb-8">
                    <h3 className="text-2xl font-medium mb-4 text-amber-300">Installation:</h3>
                    <ol className="list-decimal pl-5 space-y-2 text-gray-200">
                      <li>First, ensure you have <a href="https://thunderstore.io/c/repo/p/BepInEx/BepInExPack/" className="text-amber-400 hover:underline" target="_blank" rel="noopener noreferrer">BepInExPack</a> installed.</li>
                      <li>Download the MoreUpgrades mod from the link below.</li>
                      <li>Extract the downloaded zip file to your REPO game directory, or use a mod manager like <a href="https://www.overwolf.com/app/thunderstore-thunderstore_mod_manager" className="text-amber-400 hover:underline" target="_blank" rel="noopener noreferrer">Thunderstore Mod Manager</a>.</li>
                      <li>Launch the game and enjoy the new upgrade options in the shop!</li>
                    </ol>
                  </div>
                  
                  <div className="bg-gray-900/50 p-6 rounded-md border border-amber-500/20 mb-8">
                    <h3 className="text-2xl font-medium mb-4 text-amber-300">Compatibility:</h3>
                    <p className="text-gray-200 mb-4">
                      MoreUpgrades is designed to work well with other mods. It has been tested with:
                    </p>
                    <ul className="list-disc pl-5 space-y-2 text-gray-200">
                      <li><Link href="/repomod-MoreShopItems" className="text-amber-400 hover:underline">MoreShopItems</Link> - For increased availability of upgrades in the shop</li>
                      <li><Link href="/repomod-MoreStamina" className="text-amber-400 hover:underline">MoreStamina</Link> - Compatible with the Sprint Usage upgrade</li>
                      <li>Most other gameplay enhancement mods</li>
                    </ul>
                    <p className="text-gray-200 mt-4">
                      If you encounter any compatibility issues with other mods, please report them to the mod author.
                    </p>
                  </div>
                  
                  <div className="bg-gray-900/50 p-6 rounded-md border border-amber-500/20 mb-8">
                    <h3 className="text-2xl font-medium mb-4 text-amber-300">Tips for Using Upgrades:</h3>
                    <ul className="list-disc pl-5 space-y-2 text-gray-200">
                      <li>Sprint Usage is most effective when stacked multiple times, allowing for extended exploration.</li>
                      <li>The Map Enemy Tracker is particularly useful on maps with numerous or dangerous enemies.</li>
                      <li>Valuable Count helps ensure you meet your quota before extraction, especially on high-value missions.</li>
                      <li>Map Player Tracker is invaluable for team coordination, especially in larger maps.</li>
                      <li>Consider distributing different upgrades among team members for maximum efficiency.</li>
                    </ul>
                  </div>
                  
                  <a 
                    href="/downloads/repomod-MoreUpgrades-1.4.2.zip" 
                    className="inline-flex items-center px-8 py-4 bg-amber-700 text-white text-lg rounded-md hover:bg-amber-600 transition-colors"
                  >
                    <FiDownload className="mr-2" />
                    Download MoreUpgrades v1.4.2
                  </a>
                  
                  <div className="mt-16">
                    <RelatedMods currentModId="moreUpgrades" themeColor="amber" />
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