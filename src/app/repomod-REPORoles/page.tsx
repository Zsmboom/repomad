'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { FiDownload, FiCalendar } from 'react-icons/fi';
import { FaUserAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Link from 'next/link';
import RelatedMods from '@/components/RelatedMods';

export default function REPORolesPage() {
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
              <Link href="/#download" className="inline-flex items-center text-blue-400 hover:underline mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Back to all mods
              </Link>
              
              <h1 className="text-4xl md:text-5xl font-bold mb-3 flex items-center">
                <FaUserAlt className="mr-4 text-blue-400" /> 
                R.E.P.O. Roles
                <span className="ml-3 text-sm bg-blue-500 px-2 py-1 rounded-full">v1.3.3</span>
              </h1>
              
              <div className="flex items-center mb-6 text-gray-400">
                <FiCalendar className="mr-2" />
                <span>Last updated: a day ago</span>
              </div>
              
              <div className="bg-gray-900/50 p-6 rounded-lg mb-8 border border-blue-500/20">
                <p className="text-xl text-gray-300 mb-6">
                  Enhance your REPO experience with our premium REPO MODS collection. These REPO MODS add exciting new features and customization options to improve your REPO gameplay. All REPO MODS are fully compatible with the latest version of REPO and receive regular updates. Before using mods, you need to install <a href="https://thunderstore.io/c/repo/p/BepInEx/BepInExPack/" className="text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">BepInExPack</a> and <a href="https://www.overwolf.com/app/thunderstore-thunderstore_mod_manager" className="text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">Thunderstore Mod Manager</a>. For detailed installation instructions, please check our <Link href="/How-to-Install-REPO-Mods" className="text-blue-400 hover:underline">installation guide</Link>.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-blue-800/30 backdrop-blur-sm rounded-lg p-8 mb-10 border border-blue-500/30"
            >
              <div className="flex flex-col items-start gap-6">
                <div className="flex-1 w-full">
                  <h2 className="text-3xl font-semibold mb-6">
                    Unique Character Abilities
                  </h2>
                  
                  <p className="text-gray-200 mb-6 text-lg">
                    R.E.P.O. Roles is an exciting mod which adds player roles. When starting a game one of the roles will be randomly assigned to the player.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                    <div>
                      <h3 className="text-2xl font-medium mb-4 text-blue-300">Available roles:</h3>
                      <ul className="space-y-4">
                        <li className="bg-gray-900/50 p-4 rounded-md border border-blue-500/20">
                          <h4 className="text-xl font-semibold text-blue-400 mb-2">The Runner</h4>
                          <p>Runs faster than everyone else! Perfect for quick loot runs or escaping danger.</p>
                        </li>
                        <li className="bg-gray-900/50 p-4 rounded-md border border-blue-500/20">
                          <h4 className="text-xl font-semibold text-blue-400 mb-2">The Tank</h4>
                          <p>Has double HP but moves slower. Ideal for defensive positions and tanking damage.</p>
                        </li>
                        <li className="bg-gray-900/50 p-4 rounded-md border border-blue-500/20">
                          <h4 className="text-xl font-semibold text-blue-400 mb-2">The Gambler</h4>
                          <p>Gains a random buff and debuff every game. A high-risk, high-reward role!</p>
                        </li>
                        <li className="bg-gray-900/50 p-4 rounded-md border border-blue-500/20">
                          <h4 className="text-xl font-semibold text-blue-400 mb-2">The Strongman</h4>
                          <p>Is a lot stronger than normal. Perfect for carrying heavy objects with ease.</p>
                        </li>
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="text-2xl font-medium mb-4 text-blue-300">Advanced roles:</h3>
                      <ul className="space-y-4">
                        <li className="bg-gray-900/50 p-4 rounded-md border border-blue-500/20">
                          <h4 className="text-xl font-semibold text-blue-400 mb-2">The Ranged Looter</h4>
                          <p>Has a lot more range and is a bit stronger. Great for grabbing items from a distance.</p>
                        </li>
                        <li className="bg-gray-900/50 p-4 rounded-md border border-blue-500/20">
                          <h4 className="text-xl font-semibold text-blue-400 mb-2">The Athletic</h4>
                          <p>Has more stamina and strength and can jump higher. A well-balanced role for versatile play.</p>
                        </li>
                        <li className="bg-gray-900/50 p-4 rounded-md border border-blue-500/20">
                          <h4 className="text-xl font-semibold text-blue-400 mb-2">The Mage</h4>
                          <p>Uses spells to become incredibly powerful. Master the arcane arts to dominate!</p>
                        </li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="bg-gray-900/50 p-6 rounded-md border border-blue-500/20 mb-8">
                    <h3 className="text-2xl font-medium mb-4 text-blue-300">How to use:</h3>
                    <p className="text-gray-200 mb-4">
                      When starting a game one of these roles will be assigned to the player. The role information can be toggled by pressing the "R" key by default. All keybinds used in this mod can be changed in the config file.
                    </p>
                    <p className="text-gray-200">
                      More roles will be added in future versions! Stay tuned for updates.
                    </p>
                  </div>
                  
                  <div className="bg-gray-900/50 p-6 rounded-md border border-blue-500/20 mb-8">
                    <h3 className="text-2xl font-medium mb-4 text-blue-300">Compatibility:</h3>
                    <p className="text-gray-200 mb-4">
                      R.E.P.O. Roles is fully compatible with the latest version of R.E.P.O. and works seamlessly with other mods like MorePlayers and MoreStamina.
                    </p>
                    <p className="text-gray-200">
                      Requires BepInExPack to be installed first.
                    </p>
                  </div>
                  
                  <a 
                    href="/downloads/REPORoles-1.3.3.zip" 
                    className="inline-flex items-center px-8 py-4 bg-blue-600 text-white text-lg rounded-md hover:bg-blue-700 transition-colors"
                  >
                    <FiDownload className="mr-2" />
                    Download R.E.P.O. Roles v1.3.3
                  </a>
                  
                  <div className="mt-16">
                    <RelatedMods currentModId="repoRoles" themeColor="blue" />
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