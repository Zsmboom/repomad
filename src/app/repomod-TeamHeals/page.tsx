'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { FiDownload, FiCalendar } from 'react-icons/fi';
import { FaMedkit } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Link from 'next/link';
import RelatedMods from '@/components/RelatedMods';

export default function TeamHealsPage() {
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
                <FaMedkit className="mr-4 text-amber-400" /> 
                TeamHeals
                <span className="ml-3 text-sm bg-amber-700 px-2 py-1 rounded-full">v1.0.1</span>
              </h1>
              
              <div className="flex items-center mb-6 text-gray-400">
                <FiCalendar className="mr-2" />
                <span>Last updated: April 22, 2023</span>
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
                    Health Packs Now Work for the Whole Team!
                  </h2>
                  
                  <p className="text-gray-200 mb-6 text-lg">
                    TeamHeals revolutionizes the healing system in R.E.P.O. by making Health Packs benefit all team members simultaneously. No more wasting valuable health packs on individual players - now a single health pack can help the entire team recover and continue the mission.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                    <div>
                      <h3 className="text-2xl font-medium mb-4 text-amber-300">Key Features:</h3>
                      <ul className="space-y-4">
                        <li className="bg-gray-900/50 p-4 rounded-md border border-amber-500/20">
                          <h4 className="text-xl font-semibold text-amber-400 mb-2">Team-Wide Healing</h4>
                          <p>When any player uses a Health Pack, all team members receive healing benefits.</p>
                        </li>
                        <li className="bg-gray-900/50 p-4 rounded-md border border-amber-500/20">
                          <h4 className="text-xl font-semibold text-amber-400 mb-2">Configurable Healing Multiplier</h4>
                          <p>Customize the healing amount with the HealAmountMultiplier configuration option.</p>
                        </li>
                        <li className="bg-gray-900/50 p-4 rounded-md border border-amber-500/20">
                          <h4 className="text-xl font-semibold text-amber-400 mb-2">Simple Installation</h4>
                          <p>Easy to install with no complex setup required - just install and enjoy.</p>
                        </li>
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="text-2xl font-medium mb-4 text-amber-300">Gameplay Benefits:</h3>
                      <ul className="space-y-4">
                        <li className="bg-gray-900/50 p-4 rounded-md border border-amber-500/20">
                          <h4 className="text-xl font-semibold text-amber-400 mb-2">Resource Efficiency</h4>
                          <p>Save valuable credits by making each Health Pack purchase more effective.</p>
                        </li>
                        <li className="bg-gray-900/50 p-4 rounded-md border border-amber-500/20">
                          <h4 className="text-xl font-semibold text-amber-400 mb-2">Enhanced Team Survival</h4>
                          <p>Keep your entire team healthy with fewer health resources, improving mission success rates.</p>
                        </li>
                        <li className="bg-gray-900/50 p-4 rounded-md border border-amber-500/20">
                          <h4 className="text-xl font-semibold text-amber-400 mb-2">Emergency Recovery</h4>
                          <p>Quickly recover the whole team in emergency situations with a single Health Pack.</p>
                        </li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="bg-gray-900/50 p-6 rounded-md border border-amber-500/20 mb-8">
                    <h3 className="text-2xl font-medium mb-4 text-amber-300">How It Works:</h3>
                    <p className="text-gray-200 mb-4">
                      The TeamHeals mod functions by intercepting the healing process in the game:
                    </p>
                    <ul className="list-disc pl-5 space-y-2 text-gray-200">
                      <li>When any player uses a Health Pack, the mod detects this healing event</li>
                      <li>The healing effect is then applied to all team members simultaneously</li>
                      <li>Each player receives the same amount of healing as the original user would have</li>
                      <li>This process happens automatically without requiring any additional player input</li>
                    </ul>
                    <p className="text-gray-200 mt-4">
                      The mod provides a seamless team healing experience while maintaining game balance, as Health Packs still need to be purchased with the same amount of credits.
                    </p>
                  </div>
                  
                  <div className="bg-gray-900/50 p-6 rounded-md border border-amber-500/20 mb-8">
                    <h3 className="text-2xl font-medium mb-4 text-amber-300">Configuration Options:</h3>
                    <p className="text-gray-200 mb-4">
                      TeamHeals includes a configuration option to customize the healing amount:
                    </p>
                    <div className="bg-gray-800/70 p-4 rounded-md border border-amber-500/30">
                      <h4 className="text-xl font-semibold text-amber-400 mb-2">HealAmountMultiplier</h4>
                      <p className="text-gray-200 mb-2">
                        This setting allows you to adjust the healing amount provided to team members. The default value is 1.0 (100% of normal healing).
                      </p>
                      <ul className="list-disc pl-5 space-y-1 text-gray-300">
                        <li>Values less than 1.0 will reduce the healing amount (e.g., 0.5 = 50% healing)</li>
                        <li>Values greater than 1.0 will increase the healing amount (e.g., 1.5 = 150% healing)</li>
                      </ul>
                    </div>
                    <div className="mt-4 bg-amber-800/30 p-4 rounded-md border border-amber-500/30">
                      <p className="text-amber-300 font-medium">Important Note:</p>
                      <p className="text-gray-200">
                        Ensure that all players in your game have the same HealAmountMultiplier value set in their configuration. Currently, the mod cannot override client values from the server.
                      </p>
                    </div>
                  </div>
                  
                  <div className="bg-gray-900/50 p-6 rounded-md border border-amber-500/20 mb-8">
                    <h3 className="text-2xl font-medium mb-4 text-amber-300">Installation:</h3>
                    <ol className="list-decimal pl-5 space-y-2 text-gray-200">
                      <li>First, ensure you have <a href="https://thunderstore.io/c/repo/p/BepInEx/BepInExPack/" className="text-amber-400 hover:underline" target="_blank" rel="noopener noreferrer">BepInExPack</a> installed.</li>
                      <li>Download the TeamHeals mod from the link below.</li>
                      <li>Extract the downloaded zip file to your REPO game directory, or use a mod manager like <a href="https://www.overwolf.com/app/thunderstore-thunderstore_mod_manager" className="text-amber-400 hover:underline" target="_blank" rel="noopener noreferrer">Thunderstore Mod Manager</a>.</li>
                      <li>Launch the game once to generate the configuration file.</li>
                      <li>If desired, adjust the HealAmountMultiplier in the configuration file (BepInEx/config/TeamHeals.cfg).</li>
                      <li>Restart the game and enjoy team-wide healing benefits!</li>
                    </ol>
                  </div>
                  
                  <div className="bg-gray-900/50 p-6 rounded-md border border-amber-500/20 mb-8">
                    <h3 className="text-2xl font-medium mb-4 text-amber-300">Compatibility:</h3>
                    <p className="text-gray-200 mb-4">
                      TeamHeals is designed to work well with other mods. It has been tested with:
                    </p>
                    <ul className="list-disc pl-5 space-y-2 text-gray-200">
                      <li><Link href="/repomod-TeamUpgrades" className="text-amber-400 hover:underline">TeamUpgrades</Link> - Perfect companion mod for a complete team-oriented gameplay experience</li>
                      <li><Link href="/repomod-MoreReviveHP" className="text-amber-400 hover:underline">MoreReviveHP</Link> - Works well together for enhanced team recovery options</li>
                      <li><Link href="/repomod-MoreShopItems" className="text-amber-400 hover:underline">MoreShopItems</Link> - Compatible with increased Health Pack availability</li>
                      <li>Most other gameplay enhancement mods</li>
                    </ul>
                    <p className="text-gray-200 mt-4">
                      For the best experience, it's recommended that all players in the game have TeamHeals installed with matching configuration settings.
                    </p>
                  </div>
                  
                  <div className="bg-gray-900/50 p-6 rounded-md border border-amber-500/20 mb-8">
                    <h3 className="text-2xl font-medium mb-4 text-amber-300">Team Healing Strategies:</h3>
                    <p className="text-gray-200 mb-4">
                      With TeamHeals installed, you can adopt new healing strategies:
                    </p>
                    <ul className="list-disc pl-5 space-y-2 text-gray-200">
                      <li>Designate a team "medic" who carries and uses Health Packs for everyone</li>
                      <li>Save Health Packs for critical moments when multiple team members need healing</li>
                      <li>Coordinate Health Pack purchases to avoid redundancy</li>
                      <li>Position team members close together before using Health Packs for efficiency</li>
                      <li>Use Health Packs proactively before difficult encounters to ensure maximum team health</li>
                    </ul>
                  </div>
                  
                  <a 
                    href="/downloads/repomod-TeamHeals-1.0.1.zip" 
                    className="inline-flex items-center px-8 py-4 bg-amber-700 text-white text-lg rounded-md hover:bg-amber-600 transition-colors"
                  >
                    <FiDownload className="mr-2" />
                    Download TeamHeals v1.0.1
                  </a>
                  
                  <div className="mt-16">
                    <RelatedMods currentModId="teamHeals" themeColor="amber" />
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