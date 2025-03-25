'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { FiDownload, FiCalendar, FiPackage } from 'react-icons/fi';
import { GiGhost } from 'react-icons/gi';
import { BiSolidBug } from 'react-icons/bi';
import { FaRegLaughBeam, FaBoxOpen } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Link from 'next/link';
import RelatedMods from '@/components/RelatedMods';

export default function LethalPlushiesPage() {
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
              <Link href="/#download" className="inline-flex items-center text-green-400 hover:underline mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Back to all mods
              </Link>
              
              <h1 className="text-4xl md:text-5xl font-bold mb-3 flex items-center">
                <FaBoxOpen className="mr-4 text-green-400" /> 
                Lethal Plushies
                <span className="ml-3 text-sm bg-green-700 px-2 py-1 rounded-full">v1.0.5</span>
              </h1>
              
              <div className="flex items-center mb-6 text-gray-400">
                <FiCalendar className="mr-2" />
                <span>Last updated: 1 week ago</span>
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
              className="bg-green-900/40 backdrop-blur-sm rounded-lg p-8 mb-10 border border-green-700/50"
            >
              <div className="flex flex-col items-start gap-6">
                <div className="flex-1 w-full">
                  <h2 className="text-3xl font-semibold mb-6">
                    Collectible Lethal Company Enemy Plushies
                  </h2>
                  
                  <p className="text-gray-200 mb-6 text-lg">
                    Lethal Plushies is a fun mod that brings the terrifying enemies from Lethal Company into R.E.P.O. as adorable collectible plushies. Perfect for fans of both games who want to commemorate their favorite monsters in a much cuter form!
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                    <div>
                      <h3 className="text-2xl font-medium mb-4 text-green-300">Currently Available Plushies:</h3>
                      <ul className="space-y-4">
                        <li className="bg-gray-900/50 p-4 rounded-md border border-green-500/20 flex items-start">
                          <BiSolidBug className="text-3xl text-green-400 mr-3 mt-1 flex-shrink-0" />
                          <div>
                            <h4 className="text-xl font-semibold text-green-400 mb-2">Hoarding Bug Plushie</h4>
                            <p>A cuddly version of the item-stealing Hoarding Bug that's much less likely to take your valuables!</p>
                          </div>
                        </li>
                        <li className="bg-gray-900/50 p-4 rounded-md border border-green-500/20 flex items-start">
                          <GiGhost className="text-3xl text-green-400 mr-3 mt-1 flex-shrink-0" />
                          <div>
                            <h4 className="text-xl font-semibold text-green-400 mb-2">Ghost Girl Plushie</h4>
                            <p>The spooky Ghost Girl is now an adorable plushie that won't haunt your nightmares.</p>
                          </div>
                        </li>
                        <li className="bg-gray-900/50 p-4 rounded-md border border-green-500/20 flex items-start">
                          <FaRegLaughBeam className="text-3xl text-green-400 mr-3 mt-1 flex-shrink-0" />
                          <div>
                            <h4 className="text-xl font-semibold text-green-400 mb-2">Baboon Hawk Plushie</h4>
                            <p>A soft and huggable version of the fearsome flying predator from Lethal Company.</p>
                          </div>
                        </li>
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="text-2xl font-medium mb-4 text-green-300">Mod Features:</h3>
                      <ul className="space-y-4">
                        <li className="bg-gray-900/50 p-4 rounded-md border border-green-500/20">
                          <h4 className="text-xl font-semibold text-green-400 mb-2">High-Quality Models</h4>
                          <p>Each plushie is carefully designed to capture the essence of the original enemies while adding a cute, collectible flair.</p>
                        </li>
                        <li className="bg-gray-900/50 p-4 rounded-md border border-green-500/20">
                          <h4 className="text-xl font-semibold text-green-400 mb-2">Growing Collection</h4>
                          <p>The creator is actively working on adding more plushies in future updates, with plans for the entire Lethal Company bestiary.</p>
                        </li>
                        <li className="bg-gray-900/50 p-4 rounded-md border border-green-500/20">
                          <h4 className="text-xl font-semibold text-green-400 mb-2">Decorative Items</h4>
                          <p>Display your plushies around your base to show off your collection to other players.</p>
                        </li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="bg-gray-900/50 p-6 rounded-md border border-green-500/20 mb-8">
                    <h3 className="text-2xl font-medium mb-4 text-green-300">About Lethal Plushies:</h3>
                    <p className="text-gray-200 mb-4">
                      Lethal Plushies is a charming mod created by Spoopylocal that combines two popular games in an unexpected way. This mod takes the frightening enemies from Lethal Company and transforms them into collectible plushies that can be found throughout R.E.P.O.
                    </p>
                    <p className="text-gray-200 mb-4">
                      The mod currently features three enemies from Lethal Company: the Hoarding Bug, Ghost Girl, and Baboon Hawk. Each has been carefully recreated as a soft, huggable plushie that retains the distinctive features of the original creature while making them much more adorable.
                    </p>
                    <div className="bg-green-800/30 p-4 rounded-md border border-green-500/30 mt-6">
                      <h4 className="text-xl font-semibold text-green-300 mb-2">Ongoing Development:</h4>
                      <p className="text-gray-200">
                        The creator is actively expanding the collection and has promised "ADDING MORE!!!!!" in their mod description. Future updates are likely to include more enemies from Lethal Company's roster, giving players even more cute versions of terrifying monsters to collect.
                      </p>
                    </div>
                  </div>
                  
                  <div className="bg-gray-900/50 p-6 rounded-md border border-green-500/20 mb-8">
                    <h3 className="text-2xl font-medium mb-4 text-green-300">Installation:</h3>
                    <ol className="list-decimal pl-5 space-y-2 text-gray-200">
                      <li>First, ensure you have <a href="https://thunderstore.io/c/repo/p/BepInEx/BepInExPack/" className="text-green-400 hover:underline" target="_blank" rel="noopener noreferrer">BepInExPack</a> installed.</li>
                      <li>Download the Lethal Plushies mod from the link below.</li>
                      <li>Extract the downloaded zip file to your REPO game directory, or use a mod manager like <a href="https://www.overwolf.com/app/thunderstore-thunderstore_mod_manager" className="text-green-400 hover:underline" target="_blank" rel="noopener noreferrer">Thunderstore Mod Manager</a>.</li>
                      <li>Launch the game and explore to find and collect your new plushies!</li>
                    </ol>
                    <div className="mt-4 bg-green-800/30 p-4 rounded-md border border-green-500/30">
                      <h4 className="text-xl font-semibold text-green-300 mb-2">Compatibility Note:</h4>
                      <p className="text-gray-200">
                        Lethal Plushies is a standalone mod that adds new content without modifying existing game mechanics. It should be compatible with most other REPO mods.
                      </p>
                    </div>
                  </div>
                  
                  <div className="bg-gray-900/50 p-6 rounded-md border border-green-500/20 mb-8">
                    <h3 className="text-2xl font-medium mb-4 text-green-300">Finding and Collecting Plushies:</h3>
                    <p className="text-gray-200 mb-4">
                      The plushies are integrated into the game as collectible items that can be found during your missions. Here's what you need to know about finding and collecting them:
                    </p>
                    <ul className="list-disc pl-5 space-y-2 text-gray-200">
                      <li>Plushies can appear as loot during regular gameplay</li>
                      <li>They can be picked up and carried like other items</li>
                      <li>Display them in your base or keep them in storage</li>
                      <li>Share with friends to show off your collection</li>
                    </ul>
                    <div className="mt-6 bg-green-800/30 p-4 rounded-md border border-green-500/30">
                      <h4 className="text-xl font-semibold text-green-300 mb-2">Cross-Game Appeal:</h4>
                      <p className="text-gray-200">
                        This mod is particularly enjoyable for players who are familiar with both R.E.P.O. and Lethal Company. It creates a fun crossover between the two games, allowing fans to bring a little piece of Lethal Company into their R.E.P.O. experience.
                      </p>
                    </div>
                  </div>
                  
                  <div className="bg-gray-900/50 p-6 rounded-md border border-green-500/20 mb-8">
                    <h3 className="text-2xl font-medium mb-4 text-green-300">Future Plans:</h3>
                    <p className="text-gray-200 mb-4">
                      According to the mod description, the creator plans to add more plushies in future updates. Lethal Company features a wide variety of enemies, so there's plenty of potential for expansion. Some possible additions might include:
                    </p>
                    <ul className="list-disc pl-5 space-y-2 text-gray-200">
                      <li>Brackens</li>
                      <li>Eyeless Dogs</li>
                      <li>Forest Giants</li>
                      <li>Snare Fleas</li>
                      <li>Coil-Heads</li>
                      <li>And more!</li>
                    </ul>
                    <p className="text-gray-200 mt-4">
                      Stay tuned for updates as the collection continues to grow!
                    </p>
                  </div>
                  
                  <a 
                    href="/downloads/repomod-Lethal_Plushies-1.0.5.zip" 
                    className="inline-flex items-center px-8 py-4 bg-green-700 text-white text-lg rounded-md hover:bg-green-600 transition-colors"
                  >
                    <FiDownload className="mr-2" />
                    Download Lethal Plushies v1.0.5
                  </a>
                  
                  <div className="mt-16">
                    <RelatedMods currentModId="lethalPlushies" themeColor="green" />
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