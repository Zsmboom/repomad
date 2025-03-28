'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { FiDownload, FiCalendar } from 'react-icons/fi';
import { FaRunning } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Link from 'next/link';
import RelatedMods from '@/components/RelatedMods';

export default function MoreStaminaPage() {
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
              <Link href="/repo-mods-Download" className="inline-flex items-center text-green-400 hover:underline mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Back to all mods
              </Link>
              
              <h1 className="text-4xl md:text-5xl font-bold mb-3 flex items-center">
                <FaRunning className="mr-4 text-green-400" /> 
                R.E.P.O. MoreStamina
                <span className="ml-3 text-sm bg-green-500 px-2 py-1 rounded-full">v1.0.1</span>
              </h1>
              
              <div className="flex items-center mb-6 text-gray-400">
                <FiCalendar className="mr-2" />
                <span>Last updated: 3 weeks ago</span>
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
              className="bg-green-800/30 backdrop-blur-sm rounded-lg p-8 mb-10 border border-green-500/30"
            >
              <div className="flex flex-col items-start gap-6">
                <div className="flex-1 w-full">
                  <h2 className="text-3xl font-semibold mb-6">
                    Enhanced Endurance System
                  </h2>
                  
                  <p className="text-gray-200 mb-6 text-lg">
                    This mod makes stamina usage more realistic. With MoreStamina, you'll experience a more immersive and challenging gameplay as stamina management becomes a critical aspect of your survival strategy.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                    <div className="bg-gray-900/50 p-6 rounded-md border border-green-500/20">
                      <h3 className="text-2xl font-medium mb-4 text-green-300">Key Features</h3>
                      <ul className="space-y-3">
                        <li className="flex items-start">
                          <span className="text-green-400 mr-2 text-xl">•</span>
                          <span>Realistic stamina depletion when running and carrying items</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-400 mr-2 text-xl">•</span>
                          <span>Weight-based stamina drain for carried objects</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-400 mr-2 text-xl">•</span>
                          <span>Dynamic stamina recovery based on character condition</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-400 mr-2 text-xl">•</span>
                          <span>Extended sprinting capabilities with proper management</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-400 mr-2 text-xl">•</span>
                          <span>Improved stamina recovery mechanics</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div className="bg-gray-900/50 p-6 rounded-md border border-green-500/20">
                      <h3 className="text-2xl font-medium mb-4 text-green-300">Benefits</h3>
                      <ul className="space-y-3">
                        <li className="flex items-start">
                          <span className="text-green-400 mr-2 text-xl">•</span>
                          <span>More strategic gameplay requiring stamina management</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-400 mr-2 text-xl">•</span>
                          <span>Enhanced immersion with realistic physical exertion</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-400 mr-2 text-xl">•</span>
                          <span>Balanced gameplay that rewards careful planning</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-400 mr-2 text-xl">•</span>
                          <span>More challenging survival experience</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-400 mr-2 text-xl">•</span>
                          <span>Compatible with all other REPO mods</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="bg-gray-900/50 p-6 rounded-md border border-green-500/20 mb-8">
                    <h3 className="text-2xl font-medium mb-4 text-green-300">Game Mechanics</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="text-xl font-semibold mb-3 text-green-200">Stamina Consumption</h4>
                        <p className="text-gray-300 mb-4">
                          Stamina is now consumed based on multiple factors:
                        </p>
                        <ul className="space-y-2 text-gray-300">
                          <li className="flex items-start">
                            <span className="text-green-400 mr-2">•</span>
                            <span>Running speed affects consumption rate</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-green-400 mr-2">•</span>
                            <span>Weight of carried items increases drain</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-green-400 mr-2">•</span>
                            <span>Terrain difficulty impacts stamina usage</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-green-400 mr-2">•</span>
                            <span>Character actions like jumping cost more stamina</span>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-xl font-semibold mb-3 text-green-200">Stamina Recovery</h4>
                        <p className="text-gray-300 mb-4">
                          Recovery has been completely reworked:
                        </p>
                        <ul className="space-y-2 text-gray-300">
                          <li className="flex items-start">
                            <span className="text-green-400 mr-2">•</span>
                            <span>Standing still provides faster recovery</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-green-400 mr-2">•</span>
                            <span>Walking allows slow stamina regeneration</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-green-400 mr-2">•</span>
                            <span>Health status affects recovery rate</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-green-400 mr-2">•</span>
                            <span>Consumable items can boost stamina recovery</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gray-900/50 p-6 rounded-md border border-green-500/20 mb-8">
                    <h3 className="text-2xl font-medium mb-4 text-green-300">Compatibility</h3>
                    <p className="text-gray-200 mb-4">
                      R.E.P.O. MoreStamina is fully compatible with the latest version of R.E.P.O. and works seamlessly with other mods like REPORoles and MorePlayers.
                    </p>
                    <div className="bg-green-900/30 p-4 rounded-md border border-green-500/20">
                      <h4 className="text-lg font-medium mb-2 text-green-300">Important Notes:</h4>
                      <ul className="space-y-2 text-gray-300">
                        <li className="flex items-start">
                          <span className="text-green-400 mr-2">•</span>
                          <span>When used with REPORoles, the Athletic role's stamina bonuses stack with this mod</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-400 mr-2">•</span>
                          <span>Performance impact is minimal, even on lower-end systems</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-400 mr-2">•</span>
                          <span>Requires BepInExPack to be installed first</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  
                  <a 
                    href="/downloads/repomod-MoreStamina-1.0.1.zip" 
                    className="inline-flex items-center px-8 py-4 bg-green-600 text-white text-lg rounded-md hover:bg-green-700 transition-colors"
                  >
                    <FiDownload className="mr-2" />
                    Download MoreStamina v1.0.1
                  </a>
                  
                  <div className="mt-16">
                    <RelatedMods currentModId="moreStamina" themeColor="green" />
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