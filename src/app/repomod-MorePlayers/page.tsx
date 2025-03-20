'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { FiDownload, FiCalendar } from 'react-icons/fi';
import { FaUsers } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Link from 'next/link';
import RelatedMods from '@/components/RelatedMods';

export default function MorePlayersPage() {
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
              <Link href="/#download" className="inline-flex items-center text-indigo-400 hover:underline mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Back to all mods
              </Link>
              
              <h1 className="text-4xl md:text-5xl font-bold mb-3 flex items-center">
                <FaUsers className="mr-4 text-indigo-400" /> 
                R.E.P.O. MorePlayers
                <span className="ml-3 text-sm bg-indigo-500 px-2 py-1 rounded-full">v1.0.4</span>
              </h1>
              
              <div className="flex items-center mb-6 text-gray-400">
                <FiCalendar className="mr-2" />
                <span>Last updated: March 18, 2023</span>
              </div>
              
              <div className="bg-gray-900/50 p-6 rounded-lg mb-8 border border-indigo-500/20">
                <p className="text-xl text-gray-300 mb-6">
                  Enhance your REPO experience with our premium REPO MODS collection. These REPO MODS add exciting new features and customization options to improve your REPO gameplay. All REPO MODS are fully compatible with the latest version of REPO and receive regular updates. Before using mods, you need to install <a href="https://thunderstore.io/c/repo/p/BepInEx/BepInExPack/" className="text-indigo-400 hover:underline" target="_blank" rel="noopener noreferrer">BepInExPack</a> and <a href="https://www.overwolf.com/app/thunderstore-thunderstore_mod_manager" className="text-indigo-400 hover:underline" target="_blank" rel="noopener noreferrer">Thunderstore Mod Manager</a>. For detailed installation instructions, please check our <Link href="/How-to-Install-REPO-Mods" className="text-indigo-400 hover:underline">installation guide</Link>.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-indigo-800/30 backdrop-blur-sm rounded-lg p-8 mb-10 border border-indigo-500/30"
            >
              <div className="flex flex-col items-start gap-6">
                <div className="flex-1 w-full">
                  <h2 className="text-3xl font-semibold mb-6">
                    Customize Your Group Size
                  </h2>
                  
                  <p className="text-gray-200 mb-6 text-lg">
                    Are you tired of not being able to change the max player count in R.E.P.O.? Well BOY do I have something for you! MorePlayers is a mod for R.E.P.O. that allows you to decrease or increase the max player cap.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                    <div className="bg-gray-900/50 p-6 rounded-md border border-indigo-500/20">
                      <h3 className="text-2xl font-medium mb-4 text-indigo-300">Key Features</h3>
                      <ul className="space-y-3">
                        <li className="flex items-start">
                          <span className="text-indigo-400 mr-2 text-xl">•</span>
                          <span>Increase or decrease max player capacity to any value</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-indigo-400 mr-2 text-xl">•</span>
                          <span>Simple configuration via clear config file</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-indigo-400 mr-2 text-xl">•</span>
                          <span>Works with the latest game version</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-indigo-400 mr-2 text-xl">•</span>
                          <span>Compatible with other R.E.P.O. mods</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-indigo-400 mr-2 text-xl">•</span>
                          <span>Seamless integration with the game's UI</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div className="bg-gray-900/50 p-6 rounded-md border border-indigo-500/20">
                      <h3 className="text-2xl font-medium mb-4 text-indigo-300">Benefits</h3>
                      <ul className="space-y-3">
                        <li className="flex items-start">
                          <span className="text-indigo-400 mr-2 text-xl">•</span>
                          <span>Host larger games with more friends</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-indigo-400 mr-2 text-xl">•</span>
                          <span>Customize difficulty by reducing player count</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-indigo-400 mr-2 text-xl">•</span>
                          <span>Create unique gameplay experiences</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-indigo-400 mr-2 text-xl">•</span>
                          <span>Enhance your team coordination with larger groups</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-indigo-400 mr-2 text-xl">•</span>
                          <span>Flexibility to adapt to your playing style</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="bg-gray-900/50 p-6 rounded-md border border-indigo-500/20 mb-8">
                    <h3 className="text-2xl font-medium mb-4 text-indigo-300">How to Configure</h3>
                    <p className="text-gray-200 mb-4">
                      Easy! Go to your installation folder for R.E.P.O. (Right click on R.E.P.O. on Steam → Manage → Browse local files), go to BepInEx → config → zelofi.MorePlayers.cfg, then adjust the "MaxPlayers" value!
                    </p>
                    <div className="bg-gray-950/50 p-4 rounded-md mb-4 text-gray-300 font-mono text-sm">
                      <p className="mb-2"># Configuration file for MorePlayers mod</p>
                      <p className="mb-2">[General Settings]</p>
                      <p className="text-indigo-300">MaxPlayers = 8</p>
                      <p className="mt-2 text-gray-400 text-xs"># Change this number to your desired player count</p>
                    </div>
                    <p className="text-gray-200">
                      After changing the configuration, restart your game for the changes to take effect. The new player limit will be applied to all new games you host.
                    </p>
                  </div>
                  
                  <div className="bg-gray-900/50 p-6 rounded-md border border-indigo-500/20 mb-8">
                    <h3 className="text-2xl font-medium mb-4 text-indigo-300">Compatibility</h3>
                    <p className="text-gray-200 mb-4">
                      R.E.P.O. MorePlayers is fully compatible with the latest version of R.E.P.O. and works seamlessly with other mods like REPORoles and MoreStamina.
                    </p>
                    <div className="bg-indigo-900/30 p-4 rounded-md border border-indigo-500/20">
                      <h4 className="text-lg font-medium mb-2 text-indigo-300">Important Notes:</h4>
                      <ul className="space-y-2 text-gray-300">
                        <li className="flex items-start">
                          <span className="text-indigo-400 mr-2">•</span>
                          <span>All players must have the mod installed to join games with modified player counts</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-indigo-400 mr-2">•</span>
                          <span>Setting extremely high player counts (above 16) may affect game performance</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-indigo-400 mr-2">•</span>
                          <span>Requires BepInExPack to be installed first</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  
                  <a 
                    href="/downloads/repo-MorePlayers-1.0.4.zip" 
                    className="inline-flex items-center px-8 py-4 bg-indigo-600 text-white text-lg rounded-md hover:bg-indigo-700 transition-colors"
                  >
                    <FiDownload className="mr-2" />
                    Download R.E.P.O. MorePlayers v1.0.4
                  </a>
                  
                  <div className="mt-16">
                    <RelatedMods currentModId="morePlayers" themeColor="indigo" />
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