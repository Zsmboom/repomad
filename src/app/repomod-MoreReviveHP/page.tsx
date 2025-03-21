'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { FiDownload, FiCalendar } from 'react-icons/fi';
import { FaHeartbeat } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Link from 'next/link';
import RelatedMods from '@/components/RelatedMods';

export default function MoreReviveHPPage() {
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
                <FaHeartbeat className="mr-4 text-amber-400" /> 
                R.E.P.O. MoreReviveHP
                <span className="ml-3 text-sm bg-amber-700 px-2 py-1 rounded-full">v1.0.1</span>
              </h1>
              
              <div className="flex items-center mb-6 text-gray-400">
                <FiCalendar className="mr-2" />
                <span>Last updated: April 8, 2023</span>
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
                    Enhanced Revival Health System for R.E.P.O.
                  </h2>
                  
                  <p className="text-gray-200 mb-6 text-lg">
                    MoreReviveHP is a mod that increases the health of players upon revival in the game. This mod allows you to configure the amount of extra health added when a player is revived, giving you a better chance to recover and continue the mission without immediately being downed again.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                    <div>
                      <h3 className="text-2xl font-medium mb-4 text-amber-300">Key Features:</h3>
                      <ul className="space-y-4">
                        <li className="bg-gray-900/50 p-4 rounded-md border border-amber-500/20">
                          <h4 className="text-xl font-semibold text-amber-400 mb-2">Increased Revival Health</h4>
                          <p>When revived, players receive more health than the default amount (configurable).</p>
                        </li>
                        <li className="bg-gray-900/50 p-4 rounded-md border border-amber-500/20">
                          <h4 className="text-xl font-semibold text-amber-400 mb-2">Simple Configuration</h4>
                          <p>Easy to configure extra health value through the configuration file.</p>
                        </li>
                        <li className="bg-gray-900/50 p-4 rounded-md border border-amber-500/20">
                          <h4 className="text-xl font-semibold text-amber-400 mb-2">BepInEx Integration</h4>
                          <p>Seamlessly integrates with BepInEx for easy installation and management.</p>
                        </li>
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="text-2xl font-medium mb-4 text-amber-300">Benefits:</h3>
                      <ul className="space-y-4">
                        <li className="bg-gray-900/50 p-4 rounded-md border border-amber-500/20">
                          <h4 className="text-xl font-semibold text-amber-400 mb-2">Better Team Recovery</h4>
                          <p>Gives players an actual chance to recover after being downed in difficult situations.</p>
                        </li>
                        <li className="bg-gray-900/50 p-4 rounded-md border border-amber-500/20">
                          <h4 className="text-xl font-semibold text-amber-400 mb-2">Less Frustration</h4>
                          <p>Reduces the frustration of being downed immediately after revival due to low health.</p>
                        </li>
                        <li className="bg-gray-900/50 p-4 rounded-md border border-amber-500/20">
                          <h4 className="text-xl font-semibold text-amber-400 mb-2">Customizable Difficulty</h4>
                          <p>Adjust the revive health values to create your preferred level of challenge.</p>
                        </li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="bg-gray-900/50 p-6 rounded-md border border-amber-500/20 mb-8">
                    <h3 className="text-2xl font-medium mb-4 text-amber-300">How It Works:</h3>
                    <p className="text-gray-200 mb-4">
                      MoreReviveHP modifies the game's revival system to provide players with more health when they're revived. The vanilla game gives players a very small amount of health upon revival, which often leads to them being downed again immediately. This mod fixes that issue by giving players a configurable amount of extra health added to the base health.
                    </p>
                    <p className="text-gray-200 mt-4">
                      The mod automatically increases the health of players upon revival based on the configured extra health amount, giving you a better fighting chance to recover.
                    </p>
                  </div>
                  
                  <div className="bg-gray-900/50 p-6 rounded-md border border-amber-500/20 mb-8">
                    <h3 className="text-2xl font-medium mb-4 text-amber-300">Configuration Options:</h3>
                    <p className="text-gray-200 mb-4">
                      After the first run, a configuration file will be generated at BepInEx/config/Tidaleus.MoreReviveHP.cfg. You can edit this file to change the mod settings:
                    </p>
                    <ul className="list-disc pl-5 space-y-2 text-gray-200">
                      <li><span className="font-semibold text-amber-400">ExtraHealth</span> - Extra health to add to the 1 you spawn with. Values should be between 1 and 99. Default is 19.</li>
                    </ul>
                    <p className="text-gray-200 mt-4">
                      With the default setting of 19 extra health, players will respawn with a total of 20 health (1 base + 19 extra).
                    </p>
                  </div>
                  
                  <div className="bg-gray-900/50 p-6 rounded-md border border-amber-500/20 mb-8">
                    <h3 className="text-2xl font-medium mb-4 text-amber-300">Installation:</h3>
                    <ol className="list-decimal pl-5 space-y-2 text-gray-200">
                      <li>Download and install <a href="https://thunderstore.io/c/repo/p/BepInEx/BepInExPack/" className="text-amber-400 hover:underline" target="_blank" rel="noopener noreferrer">BepInExPack</a>.</li>
                      <li>Download the MoreReviveHP mod from the link below.</li>
                      <li>Extract the downloaded zip file to your REPO game directory, or use a mod manager like <a href="https://www.overwolf.com/app/thunderstore-thunderstore_mod_manager" className="text-amber-400 hover:underline" target="_blank" rel="noopener noreferrer">Thunderstore Mod Manager</a>.</li>
                      <li>Make sure the MoreReviveHP.dll file is placed in the BepInEx/plugins directory.</li>
                      <li>Launch the game and enjoy improved revival health!</li>
                    </ol>
                  </div>
                  
                  <div className="bg-gray-900/50 p-6 rounded-md border border-amber-500/20 mb-8">
                    <h3 className="text-2xl font-medium mb-4 text-amber-300">Compatibility:</h3>
                    <p className="text-gray-200 mb-4">
                      MoreReviveHP is compatible with all versions of REPO and works with most other mods. It specifically works well with:
                    </p>
                    <ul className="list-disc pl-5 space-y-2 text-gray-200">
                      <li>Any mod that affects general player mechanics</li>
                      <li>Team-based mods like <Link href="/repomod-REPORoles" className="text-amber-400 hover:underline">R.E.P.O. Roles</Link></li>
                      <li><Link href="/repomod-LateJoin" className="text-amber-400 hover:underline">LateJoin</Link> for improved multiplayer experience</li>
                    </ul>
                    <p className="text-gray-200 mt-4">
                      If you encounter any compatibility issues with other mods, please report them to the mod author.
                    </p>
                  </div>
                  
                  <a 
                    href="/downloads/repomod-MoreReviveHP-1.0.1.zip" 
                    className="inline-flex items-center px-8 py-4 bg-amber-700 text-white text-lg rounded-md hover:bg-amber-600 transition-colors"
                  >
                    <FiDownload className="mr-2" />
                    Download MoreReviveHP v1.0.1
                  </a>
                  
                  <div className="mt-16">
                    <RelatedMods currentModId="moreReviveHP" themeColor="amber" />
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