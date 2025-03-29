'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { FiDownload, FiCalendar } from 'react-icons/fi';
import { GiRobotGolem } from 'react-icons/gi';
import { motion } from 'framer-motion';
import Link from 'next/link';
import RelatedMods from '@/components/RelatedMods';

export default function MoreHeadPlusPage() {
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
                <GiRobotGolem className="mr-4 text-amber-400" /> 
                MoreHeadPlus
                <span className="ml-3 text-sm bg-amber-700 px-2 py-1 rounded-full">v0.3.8</span>
              </h1>
              
              <div className="flex items-center mb-6 text-gray-400">
                <FiCalendar className="mr-2" />
                <span>Last updated: 15 hours ago</span>
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
                    Extended Head Model Collection
                  </h2>
                  
                  <p className="text-gray-200 mb-6 text-lg">
                    MoreHeadPlus is an expansion pack for the popular MoreHead mod, adding several new models to enhance your character customization options. This addon expands your cosmetic choices with additional unique head models.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                    <div>
                      <h3 className="text-2xl font-medium mb-4 text-amber-300">Key Features:</h3>
                      <ul className="space-y-4">
                        <li className="bg-gray-900/50 p-4 rounded-md border border-amber-500/20">
                          <h4 className="text-xl font-semibold text-amber-400 mb-2">Expansion Content</h4>
                          <p>Several new model selections to expand the base MoreHead collection.</p>
                        </li>
                        <li className="bg-gray-900/50 p-4 rounded-md border border-amber-500/20">
                          <h4 className="text-xl font-semibold text-amber-400 mb-2">Seamless Integration</h4>
                          <p>Works perfectly with the core MoreHead mod through the same UI interface.</p>
                        </li>
                        <li className="bg-gray-900/50 p-4 rounded-md border border-amber-500/20">
                          <h4 className="text-xl font-semibold text-amber-400 mb-2">Modular Design</h4>
                          <p>Install alongside the base mod for additional options without replacing existing content.</p>
                        </li>
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="text-2xl font-medium mb-4 text-amber-300">Development Status:</h3>
                      <ul className="space-y-4">
                        <li className="bg-gray-900/50 p-4 rounded-md border border-amber-500/20">
                          <h4 className="text-xl font-semibold text-amber-400 mb-2">Early Access</h4>
                          <p>Currently in early development with models being released in batches.</p>
                        </li>
                        <li className="bg-gray-900/50 p-4 rounded-md border border-amber-500/20">
                          <h4 className="text-xl font-semibold text-amber-400 mb-2">Ongoing Development</h4>
                          <p>More models will be added as development continues alongside gameplay testing.</p>
                        </li>
                        <li className="bg-gray-900/50 p-4 rounded-md border border-amber-500/20">
                          <h4 className="text-xl font-semibold text-amber-400 mb-2">Community Input</h4>
                          <p>Feedback and suggestions for new models are welcomed and considered for future updates.</p>
                        </li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="bg-gray-900/50 p-6 rounded-md border border-amber-500/20 mb-8">
                    <h3 className="text-2xl font-medium mb-4 text-amber-300">Required Dependencies:</h3>
                    <p className="text-gray-200 mb-4">
                      <span className="font-semibold text-amber-400">Important:</span> This mod requires the following mods to function properly:
                    </p>
                    <ul className="list-disc pl-5 space-y-2 text-gray-200">
                      <li><Link href="/repomod-MoreHead" className="text-amber-400 hover:underline">MoreHead</Link> - The base mod that this expansion enhances</li>
                      <li><Link href="/repomod-MenuLib" className="text-amber-400 hover:underline">MenuLib</Link> - Required by MoreHead for UI functionality</li>
                      <li>BepInExPack - Required for all mods to work with REPO</li>
                    </ul>
                    <p className="text-gray-200 mt-4">
                      Make sure to install all required dependencies before installing MoreHeadPlus.
                    </p>
                  </div>
                  
                  <div className="bg-gray-900/50 p-6 rounded-md border border-amber-500/20 mb-8">
                    <h3 className="text-2xl font-medium mb-4 text-amber-300">Installation:</h3>
                    <ol className="list-decimal pl-5 space-y-2 text-gray-200">
                      <li>Install BepInExPack if you haven't already.</li>
                      <li>Install MenuLib.</li>
                      <li>Install the base MoreHead mod.</li>
                      <li>Install MoreHeadPlus.</li>
                      <li>Start the game and access the models through the same MoreHead menu.</li>
                    </ol>
                  </div>
                  
                  <div className="bg-gray-900/50 p-6 rounded-md border border-amber-500/20 mb-8">
                    <h3 className="text-2xl font-medium mb-4 text-amber-300">Future Plans:</h3>
                    <p className="text-gray-200 mb-4">
                      The developer plans to add more head models in batches as they enjoy the game more. Future updates may include themed collections and special event head models.
                    </p>
                  </div>
                  
                  <a 
                    href="/downloads/repomod-MoreHeadPlus-0.3.8.zip" 
                    className="inline-flex items-center px-8 py-4 bg-amber-700 text-white text-lg rounded-md hover:bg-amber-600 transition-colors"
                  >
                    <FiDownload className="mr-2" />
                    Download MoreHeadPlus v0.3.8
                  </a>
                  
                  <div className="mt-16">
                    <RelatedMods currentModId="moreHeadPlus" themeColor="amber" />
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