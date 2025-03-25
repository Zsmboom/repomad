'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { FiDownload, FiCalendar } from 'react-icons/fi';
import { VscLibrary } from 'react-icons/vsc';
import { motion } from 'framer-motion';
import Link from 'next/link';
import RelatedMods from '@/components/RelatedMods';

export default function REPOLibPage() {
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
                <VscLibrary className="mr-4 text-amber-400" /> 
                REPOLib
                <span className="ml-3 text-sm bg-amber-700 px-2 py-1 rounded-full">v1.5.0</span>
              </h1>
              
              <div className="flex items-center mb-6 text-gray-400">
                <FiCalendar className="mr-2" />
                <span>Last updated: 7 hours ago</span>
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
                    Developer Library for R.E.P.O.
                  </h2>
                  
                  <p className="text-gray-200 mb-6 text-lg">
                    REPOLib is an essential library for developers creating content for R.E.P.O. It provides comprehensive tools and APIs for registering custom network prefabs, valuables, items, enemies, and chat commands, making mod development significantly easier.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                    <div>
                      <h3 className="text-2xl font-medium mb-4 text-amber-300">Key Features:</h3>
                      <ul className="space-y-4">
                        <li className="bg-gray-900/50 p-4 rounded-md border border-amber-500/20">
                          <h4 className="text-xl font-semibold text-amber-400 mb-2">Network Prefab Registration</h4>
                          <p>Register custom prefabs to be networked across all players in multiplayer sessions.</p>
                        </li>
                        <li className="bg-gray-900/50 p-4 rounded-md border border-amber-500/20">
                          <h4 className="text-xl font-semibold text-amber-400 mb-2">Content Registration</h4>
                          <p>Easily register valuables, items, enemies, and other game content that works seamlessly in-game.</p>
                        </li>
                        <li className="bg-gray-900/50 p-4 rounded-md border border-amber-500/20">
                          <h4 className="text-xl font-semibold text-amber-400 mb-2">Chat Commands</h4>
                          <p>Create and register custom chat commands for enhanced gameplay functionality.</p>
                        </li>
                        <li className="bg-gray-900/50 p-4 rounded-md border border-amber-500/20">
                          <h4 className="text-xl font-semibold text-amber-400 mb-2">Audio Mixer Fixes</h4>
                          <p>Automatically fixes audio mixer groups for registered content.</p>
                        </li>
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="text-2xl font-medium mb-4 text-amber-300">Advanced Features:</h3>
                      <ul className="space-y-4">
                        <li className="bg-gray-900/50 p-4 rounded-md border border-amber-500/20">
                          <h4 className="text-xl font-semibold text-amber-400 mb-2">REPOLib-SDK</h4>
                          <p>Register features without code using the included SDK for non-programmers.</p>
                        </li>
                        <li className="bg-gray-900/50 p-4 rounded-md border border-amber-500/20">
                          <h4 className="text-xl font-semibold text-amber-400 mb-2">Developer Mode</h4>
                          <p>Built-in developer mode with powerful commands for testing: Spawn Valuable, Spawn Item, etc.</p>
                        </li>
                        <li className="bg-gray-900/50 p-4 rounded-md border border-amber-500/20">
                          <h4 className="text-xl font-semibold text-amber-400 mb-2">Networked Events</h4>
                          <p>Create networked events that sync across all clients in multiplayer games.</p>
                        </li>
                        <li className="bg-gray-900/50 p-4 rounded-md border border-amber-500/20">
                          <h4 className="text-xl font-semibold text-amber-400 mb-2">Extended Logging</h4>
                          <p>Optional detailed logging for debugging mods and tracking content registration.</p>
                        </li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="bg-gray-900/50 p-6 rounded-md border border-amber-500/20 mb-8">
                    <h3 className="text-2xl font-medium mb-4 text-amber-300">Important Notes:</h3>
                    <ul className="list-disc pl-5 space-y-2 text-gray-200">
                      <li>Registering features (Valuables, Items, Enemies, etc.) automatically registers their prefabs as network prefabs.</li>
                      <li>Registering features automatically fixes their prefabs' audio mixer groups.</li>
                      <li>You should only register network prefabs and features from your plugin's awake function.</li>
                      <li>Enable extended logging in the config settings for more detailed information about feature registration and networking.</li>
                    </ul>
                  </div>
                  
                  <div className="bg-gray-900/50 p-6 rounded-md border border-amber-500/20 mb-8">
                    <h3 className="text-2xl font-medium mb-4 text-amber-300">Chat Commands:</h3>
                    <p className="text-gray-200 mb-4">
                      <span className="font-semibold text-amber-400">Note:</span> Chat commands currently only work in multiplayer since you need access to the in-game chat to use commands. You must enable DeveloperMode in the config settings to use developer mode commands.
                    </p>
                    <p className="text-gray-200 mb-4">Built-in chat commands:</p>
                    <ul className="space-y-4">
                      <li className="bg-gray-900/50 p-4 rounded-md border border-amber-500/20">
                        <h4 className="text-xl font-semibold text-amber-400 mb-2">1. Spawn Valuable</h4>
                        <p>Usage: <code className="bg-gray-700 px-2 py-1 rounded">/spawnvaluable &lt;name&gt;</code></p>
                        <p>This command will spawn a valuable in front of you. Replace &lt;name&gt; with the name of the valuable prefab. Names are not case-sensitive.</p>
                        <p>Example: <code className="bg-gray-700 px-2 py-1 rounded">/spawnvaluable diamond</code></p>
                        <p>Aliases: <code className="bg-gray-700 px-2 py-1 rounded">/spawnval</code>, <code className="bg-gray-700 px-2 py-1 rounded">/sv</code></p>
                        <p>Note: Requires developer mode and is host-only.</p>
                      </li>
                      <li className="bg-gray-900/50 p-4 rounded-md border border-amber-500/20">
                        <h4 className="text-xl font-semibold text-amber-400 mb-2">2. Spawn Item</h4>
                        <p>Usage: <code className="bg-gray-700 px-2 py-1 rounded">/spawnitem &lt;name&gt;</code></p>
                        <p>This command will spawn an item in front of you. Replace &lt;name&gt; with the name of the item or item prefab. Names are not case-sensitive.</p>
                        <p>Example: <code className="bg-gray-700 px-2 py-1 rounded">/spawnitem gun</code></p>
                        <p>Alias: <code className="bg-gray-700 px-2 py-1 rounded">/si</code></p>
                        <p>Note: Requires developer mode and is host-only.</p>
                      </li>
                    </ul>
                    <p className="text-gray-200 mt-4">
                      Commands can be enabled/disabled in the config settings. If you are a mod developer and want to add your own custom chat commands to your mod, check the Usage {'>'} Chat commands section in the documentation.
                    </p>
                  </div>
                  
                  <div className="bg-gray-900/50 p-6 rounded-md border border-amber-500/20 mb-8">
                    <h3 className="text-2xl font-medium mb-4 text-amber-300">Required By:</h3>
                    <p className="text-gray-200 mb-4">
                      Several mods depend on REPOLib, including:
                    </p>
                    <ul className="list-disc pl-5 space-y-2 text-gray-200">
                      <li><Link href="/repomod-ExtractionPointConfirmButton" className="text-amber-400 hover:underline">ExtractionPointConfirmButton</Link> - Adds a confirmation dialog to extraction points</li>
                      <li>Various other content mods that add items, valuables, and enemies to the game</li>
                    </ul>
                  </div>
                  
                  <div className="bg-gray-900/50 p-6 rounded-md border border-amber-500/20 mb-8">
                    <h3 className="text-2xl font-medium mb-4 text-amber-300">For Developers:</h3>
                    <p className="text-gray-200 mb-4">
                      If you're developing mods for R.E.P.O., REPOLib provides essential functionality to simplify the process. The API is designed to be intuitive and easy to use, with comprehensive documentation included in the download.
                    </p>
                    <p className="text-gray-200 mb-4">
                      For non-programmers, the REPOLib-SDK allows content creation without writing code. This makes it accessible for all types of creators to add new content to the game.
                    </p>
                  </div>
                  
                  <a 
                    href="/downloads/repomod-REPOLib-1.5.0.zip" 
                    className="inline-flex items-center px-8 py-4 bg-amber-700 text-white text-lg rounded-md hover:bg-amber-600 transition-colors"
                  >
                    <FiDownload className="mr-2" />
                    Download REPOLib v1.5.0
                  </a>
                  
                  <div className="mt-16">
                    <RelatedMods currentModId="repoLib" themeColor="amber" />
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