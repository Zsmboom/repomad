'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { FiDownload, FiCalendar } from 'react-icons/fi';
import { VscChecklist } from 'react-icons/vsc';
import { motion } from 'framer-motion';
import Link from 'next/link';
import RelatedMods from '@/components/RelatedMods';

export default function ExtractionPointConfirmButtonPage() {
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
                <VscChecklist className="mr-4 text-amber-400" /> 
                ExtractionPointConfirmButton
                <span className="ml-3 text-sm bg-amber-700 px-2 py-1 rounded-full">v1.1.0</span>
              </h1>
              
              <div className="flex items-center mb-6 text-gray-400">
                <FiCalendar className="mr-2" />
                <span>Last updated: April 5, 2023</span>
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
                    Prevent Accidental Extractions in R.E.P.O.
                  </h2>
                  
                  <p className="text-gray-200 mb-6 text-lg">
                    The ExtractionPointConfirmButton mod adds a confirmation dialog that appears when interacting with extraction points in the game. This prevents accidental extractions, giving you the chance to confirm your decision before leaving the planet.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                    <div>
                      <h3 className="text-2xl font-medium mb-4 text-amber-300">Key Features:</h3>
                      <ul className="space-y-4">
                        <li className="bg-gray-900/50 p-4 rounded-md border border-amber-500/20">
                          <h4 className="text-xl font-semibold text-amber-400 mb-2">Confirmation Dialog</h4>
                          <p>Adds a confirmation dialog when you interact with any extraction point in the game.</p>
                        </li>
                        <li className="bg-gray-900/50 p-4 rounded-md border border-amber-500/20">
                          <h4 className="text-xl font-semibold text-amber-400 mb-2">User-Friendly Interface</h4>
                          <p>The dialog is intuitive and easy to use, featuring "Confirm" and "Cancel" buttons.</p>
                        </li>
                        <li className="bg-gray-900/50 p-4 rounded-md border border-amber-500/20">
                          <h4 className="text-xl font-semibold text-amber-400 mb-2">Full Compatibility</h4>
                          <p>Works with all extraction points in the game, including those from mods.</p>
                        </li>
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="text-2xl font-medium mb-4 text-amber-300">Benefits:</h3>
                      <ul className="space-y-4">
                        <li className="bg-gray-900/50 p-4 rounded-md border border-amber-500/20">
                          <h4 className="text-xl font-semibold text-amber-400 mb-2">Prevent Mistakes</h4>
                          <p>No more accidental extractions when you're still gathering valuable loot!</p>
                        </li>
                        <li className="bg-gray-900/50 p-4 rounded-md border border-amber-500/20">
                          <h4 className="text-xl font-semibold text-amber-400 mb-2">Team Coordination</h4>
                          <p>Helps teams coordinate extraction timing in multiplayer games.</p>
                        </li>
                        <li className="bg-gray-900/50 p-4 rounded-md border border-amber-500/20">
                          <h4 className="text-xl font-semibold text-amber-400 mb-2">Configurable Options</h4>
                          <p>Customize the mod's behavior through the included configuration file.</p>
                        </li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="bg-gray-900/50 p-6 rounded-md border border-amber-500/20 mb-8">
                    <h3 className="text-2xl font-medium mb-4 text-amber-300">How It Works:</h3>
                    <ol className="list-decimal pl-5 space-y-4 text-gray-200">
                      <li className="pl-2">Approach any extraction point in the game as you normally would.</li>
                      <li className="pl-2">When you interact with the extraction point, instead of immediately extracting, a confirmation dialog will appear.</li>
                      <li className="pl-2">Choose "Confirm" to proceed with extraction or "Cancel" to stay on the planet and continue your mission.</li>
                    </ol>
                  </div>
                  
                  <div className="bg-gray-900/50 p-6 rounded-md border border-amber-500/20 mb-8">
                    <h3 className="text-2xl font-medium mb-4 text-amber-300">Configuration Options:</h3>
                    <p className="text-gray-200 mb-4">
                      The mod includes a configuration file that allows you to customize its behavior:
                    </p>
                    <ul className="list-disc pl-5 space-y-2 text-gray-200">
                      <li><span className="font-semibold text-amber-400">EnableMod</span> - Turn the mod on or off without uninstalling (default: true)</li>
                      <li><span className="font-semibold text-amber-400">DialogTitle</span> - Customize the title of the confirmation dialog</li>
                      <li><span className="font-semibold text-amber-400">DialogMessage</span> - Customize the message shown in the dialog</li>
                      <li><span className="font-semibold text-amber-400">ConfirmButtonText</span> - Change the text on the confirm button</li>
                      <li><span className="font-semibold text-amber-400">CancelButtonText</span> - Change the text on the cancel button</li>
                      <li><span className="font-semibold text-amber-400">DialogTimeout</span> - Set a timeout for the dialog in seconds (0 for no timeout)</li>
                    </ul>
                  </div>
                  
                  <div className="bg-gray-900/50 p-6 rounded-md border border-amber-500/20 mb-8">
                    <h3 className="text-2xl font-medium mb-4 text-amber-300">Installation:</h3>
                    <ol className="list-decimal pl-5 space-y-2 text-gray-200">
                      <li>Ensure you have <a href="https://thunderstore.io/c/repo/p/BepInEx/BepInExPack/" className="text-amber-400 hover:underline" target="_blank" rel="noopener noreferrer">BepInExPack</a> installed.</li>
                      <li>Download and install <Link href="/repomod-REPOLib" className="text-amber-400 hover:underline">REPOLib</Link> (required dependency).</li>
                      <li>Download the ExtractionPointConfirmButton mod from the link below.</li>
                      <li>Extract the downloaded zip file to your REPO game directory, or use a mod manager like <a href="https://www.overwolf.com/app/thunderstore-thunderstore_mod_manager" className="text-amber-400 hover:underline" target="_blank" rel="noopener noreferrer">Thunderstore Mod Manager</a>.</li>
                      <li>Launch the game and enjoy the added safety of confirmation dialogs!</li>
                    </ol>
                  </div>
                  
                  <div className="bg-gray-900/50 p-6 rounded-md border border-amber-500/20 mb-8">
                    <h3 className="text-2xl font-medium mb-4 text-amber-300">Requirements:</h3>
                    <ul className="list-disc pl-5 space-y-2 text-gray-200">
                      <li>REPO Game (latest version recommended)</li>
                      <li>BepInEx Pack</li>
                      <li><Link href="/repomod-REPOLib" className="text-amber-400 hover:underline">REPOLib</Link> v1.4.0 or later</li>
                    </ul>
                  </div>
                  
                  <div className="bg-gray-900/50 p-6 rounded-md border border-amber-500/20 mb-8">
                    <h3 className="text-2xl font-medium mb-4 text-amber-300">Compatibility:</h3>
                    <p className="text-gray-200 mb-4">
                      ExtractionPointConfirmButton is compatible with all versions of REPO and works with most other mods. It is specifically designed to be compatible with any mod that adds custom extraction points to the game.
                    </p>
                    <p className="text-gray-200">
                      If you encounter any compatibility issues with other mods, please report them to the mod author.
                    </p>
                  </div>
                  
                  <a 
                    href="/downloads/repomod-ExtractionPointConfirmButton-1.1.0.zip" 
                    className="inline-flex items-center px-8 py-4 bg-amber-700 text-white text-lg rounded-md hover:bg-amber-600 transition-colors"
                  >
                    <FiDownload className="mr-2" />
                    Download ExtractionPointConfirmButton v1.1.0
                  </a>
                  
                  <div className="mt-16">
                    <RelatedMods currentModId="extractionPointConfirmButton" themeColor="amber" />
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