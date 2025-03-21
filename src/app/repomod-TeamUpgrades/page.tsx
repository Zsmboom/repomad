'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { FiDownload, FiCalendar } from 'react-icons/fi';
import { FaUsers } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Link from 'next/link';
import RelatedMods from '@/components/RelatedMods';

export default function TeamUpgradesPage() {
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
                <FaUsers className="mr-4 text-amber-400" /> 
                TeamUpgrades
                <span className="ml-3 text-sm bg-amber-700 px-2 py-1 rounded-full">v1.1.4</span>
              </h1>
              
              <div className="flex items-center mb-6 text-gray-400">
                <FiCalendar className="mr-2" />
                <span>Last updated: April 25, 2023</span>
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
                    Share the Power! All Upgrades Now Benefit Your Entire Team
                  </h2>
                  
                  <p className="text-gray-200 mb-6 text-lg">
                    TeamUpgrades is a revolutionary mod that transforms the way upgrades work in R.E.P.O. With this mod installed, every upgrade purchased by any team member will benefit the entire team, promoting cooperation and enhancing team strategy.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                    <div>
                      <h3 className="text-2xl font-medium mb-4 text-amber-300">Key Features:</h3>
                      <ul className="space-y-4">
                        <li className="bg-gray-900/50 p-4 rounded-md border border-amber-500/20">
                          <h4 className="text-xl font-semibold text-amber-400 mb-2">Shared Upgrades</h4>
                          <p>All upgrades purchased by any team member now benefit the entire team automatically.</p>
                        </li>
                        <li className="bg-gray-900/50 p-4 rounded-md border border-amber-500/20">
                          <h4 className="text-xl font-semibold text-amber-400 mb-2">Universal Compatibility</h4>
                          <p>Works with all standard upgrades and is compatible with most mod-added upgrades like MoreUpgrades.</p>
                        </li>
                        <li className="bg-gray-900/50 p-4 rounded-md border border-amber-500/20">
                          <h4 className="text-xl font-semibold text-amber-400 mb-2">Simple Implementation</h4>
                          <p>No complex configuration needed - install and enjoy the benefits immediately.</p>
                        </li>
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="text-2xl font-medium mb-4 text-amber-300">Team Benefits:</h3>
                      <ul className="space-y-4">
                        <li className="bg-gray-900/50 p-4 rounded-md border border-amber-500/20">
                          <h4 className="text-xl font-semibold text-amber-400 mb-2">Enhanced Cooperation</h4>
                          <p>Promotes team-based purchasing strategies and resource sharing.</p>
                        </li>
                        <li className="bg-gray-900/50 p-4 rounded-md border border-amber-500/20">
                          <h4 className="text-xl font-semibold text-amber-400 mb-2">Economic Efficiency</h4>
                          <p>Spend credits more efficiently by avoiding duplicate upgrade purchases.</p>
                        </li>
                        <li className="bg-gray-900/50 p-4 rounded-md border border-amber-500/20">
                          <h4 className="text-xl font-semibold text-amber-400 mb-2">Strategic Diversity</h4>
                          <p>Team members can focus on buying different upgrades that benefit everyone.</p>
                        </li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="bg-gray-900/50 p-6 rounded-md border border-amber-500/20 mb-8">
                    <h3 className="text-2xl font-medium mb-4 text-amber-300">How It Works:</h3>
                    <p className="text-gray-200 mb-4">
                      TeamUpgrades works by modifying the game's upgrade system at a fundamental level:
                    </p>
                    <ul className="list-disc pl-5 space-y-2 text-gray-200">
                      <li>When any player purchases an upgrade, the mod intercepts the purchase event</li>
                      <li>The upgrade benefits are then automatically applied to all team members</li>
                      <li>This happens seamlessly in the background without requiring any additional player actions</li>
                      <li>Visual indicators still appear only on the player who purchased the upgrade</li>
                    </ul>
                    <p className="text-gray-200 mt-4">
                      The mod maintains game balance by keeping the original price structure, so upgrades still require the same investment, but the benefits are shared collectively.
                    </p>
                  </div>
                  
                  <div className="bg-gray-900/50 p-6 rounded-md border border-amber-500/20 mb-8">
                    <h3 className="text-2xl font-medium mb-4 text-amber-300">Upgrade Strategy Tips:</h3>
                    <p className="text-gray-200 mb-4">
                      With TeamUpgrades installed, you can adopt new team strategies:
                    </p>
                    <ul className="list-disc pl-5 space-y-2 text-gray-200">
                      <li>Coordinate with teammates to purchase different types of upgrades</li>
                      <li>Pool resources to buy higher-tier upgrades earlier in the game</li>
                      <li>Have specialized team roles where certain players focus on specific upgrade types</li>
                      <li>Save team credits by avoiding duplicate purchases of the same upgrade</li>
                    </ul>
                    <p className="text-gray-200 mt-4">
                      This creates a more strategic shopping phase and encourages communication among team members about upgrade priorities.
                    </p>
                  </div>
                  
                  <div className="bg-gray-900/50 p-6 rounded-md border border-amber-500/20 mb-8">
                    <h3 className="text-2xl font-medium mb-4 text-amber-300">Installation:</h3>
                    <ol className="list-decimal pl-5 space-y-2 text-gray-200">
                      <li>First, ensure you have <a href="https://thunderstore.io/c/repo/p/BepInEx/BepInExPack/" className="text-amber-400 hover:underline" target="_blank" rel="noopener noreferrer">BepInExPack</a> installed.</li>
                      <li>Download the TeamUpgrades mod from the link below.</li>
                      <li>Extract the downloaded zip file to your REPO game directory, or use a mod manager like <a href="https://www.overwolf.com/app/thunderstore-thunderstore_mod_manager" className="text-amber-400 hover:underline" target="_blank" rel="noopener noreferrer">Thunderstore Mod Manager</a>.</li>
                      <li>Launch the game and enjoy team-wide upgrade benefits!</li>
                    </ol>
                    <div className="mt-4 bg-gray-800/50 p-4 rounded-md border border-amber-500/30">
                      <p className="text-amber-300 font-medium">Note:</p>
                      <p className="text-gray-200">For the best experience, all players in the game should have TeamUpgrades installed. While the mod will still work if only the host has it installed, having it on all clients ensures the most consistent experience.</p>
                    </div>
                  </div>
                  
                  <div className="bg-gray-900/50 p-6 rounded-md border border-amber-500/20 mb-8">
                    <h3 className="text-2xl font-medium mb-4 text-amber-300">Compatibility:</h3>
                    <p className="text-gray-200 mb-4">
                      TeamUpgrades is designed to work well with other mods. It has been tested with:
                    </p>
                    <ul className="list-disc pl-5 space-y-2 text-gray-200">
                      <li><Link href="/repomod-MoreUpgrades" className="text-amber-400 hover:underline">MoreUpgrades</Link> - Fully compatible, making all additional upgrade types team-wide</li>
                      <li><Link href="/repomod-TeamHeals" className="text-amber-400 hover:underline">TeamHeals</Link> - Perfect companion mod for a complete team-oriented gameplay experience</li>
                      <li><Link href="/repomod-MoreShopItems" className="text-amber-400 hover:underline">MoreShopItems</Link> - Works well with increased upgrade availability</li>
                      <li>Most other gameplay enhancement mods</li>
                    </ul>
                    <p className="text-gray-200 mt-4 text-amber-500">
                      <strong>Note:</strong> While TeamUpgrades is compatible with most mods, there might be occasional compatibility issues with mods that deeply modify the upgrade system. If you encounter any issues, please report them.
                    </p>
                  </div>
                  
                  <a 
                    href="/downloads/repomod-TeamUpgrades-1.1.4.zip" 
                    className="inline-flex items-center px-8 py-4 bg-amber-700 text-white text-lg rounded-md hover:bg-amber-600 transition-colors"
                  >
                    <FiDownload className="mr-2" />
                    Download TeamUpgrades v1.1.4
                  </a>
                  
                  <div className="mt-16">
                    <RelatedMods currentModId="teamUpgrades" themeColor="amber" />
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