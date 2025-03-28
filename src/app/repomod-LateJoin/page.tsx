'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { FiDownload, FiCalendar } from 'react-icons/fi';
import { FaUserPlus } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Link from 'next/link';
import RelatedMods from '@/components/RelatedMods';

export default function LateJoinPage() {
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
              <Link href="/repo-mods-Download" className="inline-flex items-center text-amber-400 hover:underline mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Back to all mods
              </Link>
              
              <h1 className="text-4xl md:text-5xl font-bold mb-3 flex items-center">
                <FaUserPlus className="mr-4 text-amber-400" /> 
                R.E.P.O. LateJoin
                <span className="ml-3 text-sm bg-amber-700 px-2 py-1 rounded-full">v0.1.2</span>
              </h1>
              
              <div className="flex items-center mb-6 text-gray-400">
                <FiCalendar className="mr-2" />
                <span>Last updated: 2 weeks ago</span>
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
                    Join In-Progress Games in R.E.P.O.
                  </h2>
                  
                  <p className="text-gray-200 mb-6 text-lg">
                    Have you ever played R.E.P.O. only to be faced with a friend who wants to join after you've started the lobby? LateJoin solves this problem by enabling players to join ongoing games, eliminating the need to wait for friends to return to the ship.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                    <div>
                      <h3 className="text-2xl font-medium mb-4 text-amber-300">Key Features:</h3>
                      <ul className="space-y-4">
                        <li className="bg-gray-900/50 p-4 rounded-md border border-amber-500/20">
                          <h4 className="text-xl font-semibold text-amber-400 mb-2">Truck Joining</h4>
                          <p>Players can join during the intermission phase when players are in the truck (lobby after the shop).</p>
                        </li>
                        <li className="bg-gray-900/50 p-4 rounded-md border border-amber-500/20">
                          <h4 className="text-xl font-semibold text-amber-400 mb-2">Compatibility</h4>
                          <p>Works with other mods like MorePlayers and REPO ServerList out of the box.</p>
                        </li>
                        <li className="bg-gray-900/50 p-4 rounded-md border border-amber-500/20">
                          <h4 className="text-xl font-semibold text-amber-400 mb-2">No More Waiting</h4>
                          <p>The master client reopens the room after leaving the shop, allowing players to join.</p>
                        </li>
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="text-2xl font-medium mb-4 text-amber-300">Future Plans:</h3>
                      <ul className="space-y-4">
                        <li className="bg-gray-900/50 p-4 rounded-md border border-amber-500/20">
                          <h4 className="text-xl font-semibold text-amber-400 mb-2">Shop Joining</h4>
                          <p>Developers are working to allow players to join while in the shop phase.</p>
                        </li>
                        <li className="bg-gray-900/50 p-4 rounded-md border border-amber-500/20">
                          <h4 className="text-xl font-semibold text-amber-400 mb-2">Active Game Joining</h4>
                          <p>Potential feature for joining during active games as a spectator rather than a player.</p>
                        </li>
                        <li className="bg-gray-900/50 p-4 rounded-md border border-amber-500/20">
                          <h4 className="text-xl font-semibold text-amber-400 mb-2">Expanded Level Loading</h4>
                          <p>Theoretical support for loading into any level if shop joining becomes possible.</p>
                        </li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="bg-gray-900/50 p-6 rounded-md border border-amber-500/20 mb-8">
                    <h3 className="text-2xl font-medium mb-4 text-amber-300">How It Works:</h3>
                    <p className="text-gray-200 mb-4">
                      LateJoin modifies the game's session joining system to allow players to connect to games that are already in progress. The mod works by altering how the "master client" (host) manages player spawning:
                    </p>
                    <ul className="list-disc pl-5 space-y-2 text-gray-200">
                      <li>Currently, players can join during the truck phase (after the shop).</li>
                      <li>The master client reopens the room after leaving the shop, during the intermission in the truck.</li>
                      <li>The mod utilizes buffered RPCs (Remote Procedure Calls) provided by Photon PUN to change the level for late joiners.</li>
                      <li>This implementation requires significant code changes, which might affect compatibility with some other mods.</li>
                    </ul>
                    <p className="text-gray-200 mt-4">
                      Due to the way the game handles player data, this mod works best when all players have it installed, though only the host is required to have it.
                    </p>
                  </div>
                  
                  <div className="bg-gray-900/50 p-6 rounded-md border border-amber-500/20 mb-8">
                    <h3 className="text-2xl font-medium mb-4 text-amber-300">Technical Details:</h3>
                    <p className="text-gray-200 mb-4">
                      The game treats the host as the "master client" which dictates how players are spawned. LateJoin makes the following technical changes:
                    </p>
                    <ul className="list-disc pl-5 space-y-2 text-gray-200">
                      <li>Utilizes buffered RPCs from Photon PUN to manage late joining players.</li>
                      <li>Changes how the level is loaded for late joiners to maintain game state consistency.</li>
                      <li>Modifies how player data is synchronized between clients when joining at different times.</li>
                    </ul>
                    <p className="text-gray-200 mt-4 text-amber-500">
                      <strong>Warning:</strong> This mod may not be fully compatible with other mods, especially those that rely on important data handled by the client rather than the master client!
                    </p>
                  </div>
                  
                  <div className="bg-gray-900/50 p-6 rounded-md border border-amber-500/20 mb-8">
                    <h3 className="text-2xl font-medium mb-4 text-amber-300">Installation:</h3>
                    <ol className="list-decimal pl-5 space-y-2 text-gray-200">
                      <li>Ensure you have <a href="https://thunderstore.io/c/repo/p/BepInEx/BepInExPack/" className="text-amber-400 hover:underline" target="_blank" rel="noopener noreferrer">BepInExPack</a> installed.</li>
                      <li>Download the LateJoin mod from the link below.</li>
                      <li>Extract the downloaded zip file to your REPO game directory, or use a mod manager like <a href="https://www.overwolf.com/app/thunderstore-thunderstore_mod_manager" className="text-amber-400 hover:underline" target="_blank" rel="noopener noreferrer">Thunderstore Mod Manager</a>.</li>
                      <li>Launch the game and enjoy the ability to have friends join during the truck phase!</li>
                    </ol>
                    <p className="text-gray-200 mt-4">
                      <span className="font-semibold text-amber-400">Important:</span> While only the host needs to have the mod installed for basic functionality, it's recommended that all players have it installed for the best experience and compatibility.
                    </p>
                  </div>
                  
                  <div className="bg-gray-900/50 p-6 rounded-md border border-amber-500/20 mb-8">
                    <h3 className="text-2xl font-medium mb-4 text-amber-300">Compatibility:</h3>
                    <p className="text-gray-200 mb-4">
                      LateJoin is designed to work with other popular REPO mods, but there may be compatibility issues with some mods due to the nature of the changes it makes. It has been tested to work with:
                    </p>
                    <ul className="list-disc pl-5 space-y-2 text-gray-200">
                      <li><Link href="/repomod-MorePlayers" className="text-amber-400 hover:underline">R.E.P.O. MorePlayers</Link> - Compatible for larger multiplayer sessions</li>
                      <li>REPO ServerList - Works without any issues</li>
                      <li><Link href="/repomod-MoreReviveHP" className="text-amber-400 hover:underline">MoreReviveHP</Link> - For better team survivability</li>
                    </ul>
                    <p className="text-gray-200 mt-4">
                      If you encounter any compatibility issues with other mods, please report them to the mod author.
                    </p>
                  </div>
                  
                  <a 
                    href="/downloads/repomod-LateJoin-0.1.2.zip" 
                    className="inline-flex items-center px-8 py-4 bg-amber-700 text-white text-lg rounded-md hover:bg-amber-600 transition-colors"
                  >
                    <FiDownload className="mr-2" />
                    Download LateJoin v0.1.2
                  </a>
                  
                  <div className="mt-16">
                    <RelatedMods currentModId="lateJoin" themeColor="amber" />
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