'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { FiDownload, FiCalendar, FiMinimize2 } from 'react-icons/fi';
import { motion } from 'framer-motion';
import Link from 'next/link';
import RelatedMods from '@/components/RelatedMods';

export default function ShrinkerCartPage() {
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
              <Link href="/repo-mods-Download" className="inline-flex items-center text-purple-400 hover:underline mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Back to all mods
              </Link>
              
              <h1 className="text-4xl md:text-5xl font-bold mb-3 flex items-center">
                <FiMinimize2 className="mr-4 text-purple-400" /> 
                ShrinkerCart
                <span className="ml-3 text-sm bg-purple-500 px-2 py-1 rounded-full">v0.1.0</span>
              </h1>
              
              <div className="flex items-center mb-6 text-gray-400">
                <FiCalendar className="mr-2" />
                <span>Last updated: 2 weeks ago</span>
              </div>
              
              <div className="bg-gray-900/50 p-6 rounded-lg mb-8 border border-purple-500/20">
                <p className="text-xl text-gray-300 mb-6">
                  Enhance your REPO experience with our premium REPO MODS collection. These REPO MODS add exciting new features and customization options to improve your REPO gameplay. All REPO MODS are fully compatible with the latest version of REPO and receive regular updates. Before using mods, you need to install <a href="https://thunderstore.io/c/repo/p/BepInEx/BepInExPack/" className="text-purple-400 hover:underline" target="_blank" rel="noopener noreferrer">BepInExPack</a> and <a href="https://www.overwolf.com/app/thunderstore-thunderstore_mod_manager" className="text-purple-400 hover:underline" target="_blank" rel="noopener noreferrer">Thunderstore Mod Manager</a>. For detailed installation instructions, please check our <Link href="/How-to-Install-REPO-Mods" className="text-purple-400 hover:underline">installation guide</Link>.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-purple-800/30 backdrop-blur-sm rounded-lg p-8 mb-10 border border-purple-500/30"
            >
              <div className="flex flex-col items-start gap-6">
                <div className="flex-1 w-full">
                  <h2 className="text-3xl font-semibold mb-6">
                    Size Manipulation Technology
                  </h2>
                  
                  <p className="text-gray-200 mb-6 text-lg">
                    Bigger the item better the shrink! ShrinkerCart is a revolutionary mod that allows players to shrink large items, making them easier to carry and transport, and then restore them to their original size when needed.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                    <div className="bg-gray-900/50 p-6 rounded-md border border-purple-500/20">
                      <h3 className="text-2xl font-medium mb-4 text-purple-300">Key Features</h3>
                      <ul className="space-y-3">
                        <li className="flex items-start">
                          <span className="text-purple-400 mr-2 text-xl">•</span>
                          <span>Transform large objects into miniature versions</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-purple-400 mr-2 text-xl">•</span>
                          <span>Easier transport of valuable but bulky items</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-purple-400 mr-2 text-xl">•</span>
                          <span>Restore items to normal size at extraction</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-purple-400 mr-2 text-xl">•</span>
                          <span>Special device for size manipulation</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-purple-400 mr-2 text-xl">•</span>
                          <span>Adjustable shrink levels for different items</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div className="bg-gray-900/50 p-6 rounded-md border border-purple-500/20">
                      <h3 className="text-2xl font-medium mb-4 text-purple-300">Benefits</h3>
                      <ul className="space-y-3">
                        <li className="flex items-start">
                          <span className="text-purple-400 mr-2 text-xl">•</span>
                          <span>Carry more valuable items per run</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-purple-400 mr-2 text-xl">•</span>
                          <span>Strategic inventory management</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-purple-400 mr-2 text-xl">•</span>
                          <span>Works with all standard in-game items</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-purple-400 mr-2 text-xl">•</span>
                          <span>Increased profit margin on expeditions</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-purple-400 mr-2 text-xl">•</span>
                          <span>More efficient team coordination</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="bg-gray-900/50 p-6 rounded-md border border-purple-500/20 mb-8">
                    <h3 className="text-2xl font-medium mb-4 text-purple-300">How It Works</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="text-xl font-semibold mb-3 text-purple-200">The Shrinking Process</h4>
                        <p className="text-gray-300 mb-4">
                          Using the ShrinkerCart device is simple:
                        </p>
                        <ol className="space-y-2 text-gray-300 list-decimal list-inside">
                          <li className="pl-2">
                            <span>Place item in the ShrinkerCart device</span>
                          </li>
                          <li className="pl-2">
                            <span>Select desired shrink level (25%, 50%, or 75%)</span>
                          </li>
                          <li className="pl-2">
                            <span>Activate the device using the control panel</span>
                          </li>
                          <li className="pl-2">
                            <span>Wait for the shrinking process to complete</span>
                          </li>
                          <li className="pl-2">
                            <span>Collect your miniaturized item</span>
                          </li>
                        </ol>
                      </div>
                      <div>
                        <h4 className="text-xl font-semibold mb-3 text-purple-200">The Restoration Process</h4>
                        <p className="text-gray-300 mb-4">
                          Returning items to normal size:
                        </p>
                        <ol className="space-y-2 text-gray-300 list-decimal list-inside">
                          <li className="pl-2">
                            <span>Place miniaturized item in the ShrinkerCart device</span>
                          </li>
                          <li className="pl-2">
                            <span>Select "Restore" mode from the control panel</span>
                          </li>
                          <li className="pl-2">
                            <span>Ensure sufficient space is available for the restored item</span>
                          </li>
                          <li className="pl-2">
                            <span>Activate the restoration process</span>
                          </li>
                          <li className="pl-2">
                            <span>Collect your fully restored item</span>
                          </li>
                        </ol>
                      </div>
                    </div>
                    <div className="mt-6 bg-purple-900/30 p-4 rounded-md border border-purple-500/20">
                      <h4 className="text-lg font-medium mb-2 text-purple-300">Important:</h4>
                      <p className="text-gray-300">
                        The energy cost of the shrinking process is directly proportional to the size and mass of the object. Larger items require more energy and time to shrink, but the inventory space saved makes it worth the investment.
                      </p>
                    </div>
                  </div>
                  
                  <div className="bg-gray-900/50 p-6 rounded-md border border-purple-500/20 mb-8">
                    <h3 className="text-2xl font-medium mb-4 text-purple-300">Compatibility</h3>
                    <p className="text-gray-200 mb-4">
                      ShrinkerCart is fully compatible with the latest version of R.E.P.O. and works seamlessly with other mods like REPORoles, MorePlayers, and MoreStamina.
                    </p>
                    <div className="bg-purple-900/30 p-4 rounded-md border border-purple-500/20">
                      <h4 className="text-lg font-medium mb-2 text-purple-300">Limitations:</h4>
                      <ul className="space-y-2 text-gray-300">
                        <li className="flex items-start">
                          <span className="text-purple-400 mr-2">•</span>
                          <span>Cannot shrink living creatures or character models</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-purple-400 mr-2">•</span>
                          <span>Some special items may not maintain full functionality when shrunk</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-purple-400 mr-2">•</span>
                          <span>Maximum 10 items can be shrunk simultaneously</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-purple-400 mr-2">•</span>
                          <span>Requires BepInExPack to be installed first</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  
                  <a 
                    href="/downloads/repomod-ShrinkerCart-0.1.0.zip" 
                    className="inline-flex items-center px-8 py-4 bg-purple-600 text-white text-lg rounded-md hover:bg-purple-700 transition-colors"
                  >
                    <FiDownload className="mr-2" />
                    Download ShrinkerCart v0.1.0
                  </a>
                  
                  <div className="mt-16">
                    <RelatedMods currentModId="shrinkerCart" themeColor="purple" />
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