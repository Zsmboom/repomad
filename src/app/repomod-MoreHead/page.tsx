'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { FiDownload, FiCalendar } from 'react-icons/fi';
import { GiHumanTarget } from 'react-icons/gi';
import { motion } from 'framer-motion';
import Link from 'next/link';
import RelatedMods from '@/components/RelatedMods';

export default function MoreHeadPage() {
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
                <GiHumanTarget className="mr-4 text-amber-400" /> 
                MoreHead
                <span className="ml-3 text-sm bg-amber-700 px-2 py-1 rounded-full">v1.3.0</span>
              </h1>
              
              <div className="flex items-center mb-6 text-gray-400">
                <FiCalendar className="mr-2" />
                <span>Last updated: 4 hours ago</span>
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
                    Custom Head Models
                  </h2>
                  
                  <p className="text-gray-200 mb-6 text-lg">
                    MoreHead is a simple and fun decoration mod that provides custom head models for your character. All models were created by Yuri's cat Calypso, specifically for this mod :3 
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                    <div>
                      <h3 className="text-2xl font-medium mb-4 text-amber-300">Key Features:</h3>
                      <ul className="space-y-4">
                        <li className="bg-gray-900/50 p-4 rounded-md border border-amber-500/20">
                          <h4 className="text-xl font-semibold text-amber-400 mb-2">Custom Head Models</h4>
                          <p>A variety of unique head models to customize your character's appearance.</p>
                        </li>
                        <li className="bg-gray-900/50 p-4 rounded-md border border-amber-500/20">
                          <h4 className="text-xl font-semibold text-amber-400 mb-2">Unity Package Support</h4>
                          <p>Includes a unitypackage for players to import their own custom models.</p>
                        </li>
                        <li className="bg-gray-900/50 p-4 rounded-md border border-amber-500/20">
                          <h4 className="text-xl font-semibold text-amber-400 mb-2">Easy-to-Use Interface</h4>
                          <p>Simple in-game menu to switch between different head models on the fly.</p>
                        </li>
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="text-2xl font-medium mb-4 text-amber-300">Current Status:</h3>
                      <ul className="space-y-4">
                        <li className="bg-gray-900/50 p-4 rounded-md border border-amber-500/20">
                          <h4 className="text-xl font-semibold text-amber-400 mb-2">Early Development</h4>
                          <p>Currently, only a few decorations are available, but more updates are planned.</p>
                        </li>
                        <li className="bg-gray-900/50 p-4 rounded-md border border-amber-500/20">
                          <h4 className="text-xl font-semibold text-amber-400 mb-2">Regular Updates</h4>
                          <p>The mod is regularly updated with new head models and features.</p>
                        </li>
                        <li className="bg-gray-900/50 p-4 rounded-md border border-amber-500/20">
                          <h4 className="text-xl font-semibold text-amber-400 mb-2">Community Contributions</h4>
                          <p>Open to suggestions and contributions from the community for new head models.</p>
                        </li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="bg-gray-900/50 p-6 rounded-md border border-amber-500/20 mb-8">
                    <h3 className="text-2xl font-medium mb-4 text-amber-300">Prerequisites:</h3>
                    <p className="text-gray-200 mb-4">
                      <span className="font-semibold text-amber-400">Important:</span> The <Link href="/repomod-MenuLib" className="text-amber-400 hover:underline">nickklmao-MenuLib</Link> mod is required as a prerequisite for MoreHead to function properly. Make sure to install it before using this mod.
                    </p>
                    <p className="text-gray-200">
                      Additionally, BepInExPack is required for all mods to work with REPO.
                    </p>
                  </div>
                  
                  <div className="bg-gray-900/50 p-6 rounded-md border border-amber-500/20 mb-8">
                    <h3 className="text-2xl font-medium mb-4 text-amber-300">How to Use:</h3>
                    <ol className="list-decimal pl-5 space-y-2 text-gray-200">
                      <li>Install this mod and the required MenuLib mod.</li>
                      <li>Enter any game match.</li>
                      <li>Press ESC to open the game menu.</li>
                      <li>Find "MoreHead" in the bottom left of the menu.</li>
                      <li>Click to switch between different head components.</li>
                    </ol>
                  </div>
                  
                  <div className="bg-gray-900/50 p-6 rounded-md border border-amber-500/20 mb-8">
                    <h3 className="text-2xl font-medium mb-4 text-amber-300">Creator Credits:</h3>
                    <p className="text-gray-200 mb-4">
                      All models were created by Yuri's cat Calypso, specifically for this mod. Yes, you read that right - a cat made these models! :3
                    </p>
                  </div>
                  
                  <div className="bg-gray-900/50 p-6 rounded-md border border-amber-500/20 mb-8">
                    <h3 className="text-2xl font-medium mb-4 text-amber-300">Future Plans:</h3>
                    <p className="text-gray-200 mb-4">
                      The developer plans to add more head models and decorations in future updates. Stay tuned for new content and features!
                    </p>
                    <p className="text-gray-200 mb-4">
                      <span className="font-semibold text-amber-400">Expansion Available:</span> Looking for more head models right now? Check out our <Link href="/repomod-MoreHeadPlus" className="text-amber-400 hover:underline">MoreHeadPlus</Link> expansion that adds several new models to the base MoreHead mod!
                    </p>
                  </div>
                  
                  <a 
                    href="/downloads/repomod-MoreHead-1.3.0.zip" 
                    className="inline-flex items-center px-8 py-4 bg-amber-700 text-white text-lg rounded-md hover:bg-amber-600 transition-colors"
                  >
                    <FiDownload className="mr-2" />
                    Download MoreHead v1.3.0
                  </a>
                  
                  <div className="mt-16">
                    <RelatedMods currentModId="moreHead" themeColor="amber" />
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