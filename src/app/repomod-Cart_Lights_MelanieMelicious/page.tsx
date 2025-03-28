'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { FiDownload, FiCalendar, FiTruck } from 'react-icons/fi';
import { FaLightbulb } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Link from 'next/link';
import RelatedMods from '@/components/RelatedMods';

export default function CartLightsMelanieMeliciousPage() {
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
              <Link href="/repo-mods-Download" className="inline-flex items-center text-orange-400 hover:underline mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Back to all mods
              </Link>
              
              <h1 className="text-4xl md:text-5xl font-bold mb-3 flex items-center">
                <FaLightbulb className="mr-4 text-orange-400" /> 
                Cart Lights MelanieMelicious
                <span className="ml-3 text-sm bg-orange-700 px-2 py-1 rounded-full">v1.0.1</span>
              </h1>
              
              <div className="flex items-center mb-6 text-gray-400">
                <FiCalendar className="mr-2" />
                <span>Last updated: 2 weeks ago</span>
              </div>
              
              <div className="bg-gray-900/50 p-6 rounded-lg mb-8 border border-orange-500/20">
                <p className="text-xl text-gray-300 mb-6">
                  Enhance your REPO experience with our premium REPO MODS collection. These REPO MODS add exciting new features and customization options to improve your REPO gameplay. All REPO MODS are fully compatible with the latest version of REPO and receive regular updates. Before using mods, you need to install <a href="https://thunderstore.io/c/repo/p/BepInEx/BepInExPack/" className="text-orange-400 hover:underline" target="_blank" rel="noopener noreferrer">BepInExPack</a> and <a href="https://www.overwolf.com/app/thunderstore-thunderstore_mod_manager" className="text-orange-400 hover:underline" target="_blank" rel="noopener noreferrer">Thunderstore Mod Manager</a>. For detailed installation instructions, please check our <Link href="/How-to-Install-REPO-Mods" className="text-orange-400 hover:underline">installation guide</Link>.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-orange-900/40 backdrop-blur-sm rounded-lg p-8 mb-10 border border-orange-700/50"
            >
              <div className="flex flex-col items-start gap-6">
                <div className="flex-1 w-full">
                  <h2 className="text-3xl font-semibold mb-6">
                    Illuminate Your Path with Cart-Mounted Lights!
                  </h2>
                  
                  <p className="text-gray-200 mb-6 text-lg">
                    Cart Lights MelanieMelicious is a simple yet incredibly useful quality-of-life mod that adds functional front-facing lights to both medium and pocket carts in R.E.P.O. Never struggle to see where you're going in dark environments again – these cart-mounted lights provide the illumination you need for safer and more efficient expeditions.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                    <div>
                      <h3 className="text-2xl font-medium mb-4 text-orange-300">Key Features:</h3>
                      <ul className="space-y-4">
                        <li className="bg-gray-900/50 p-4 rounded-md border border-orange-500/20">
                          <h4 className="text-xl font-semibold text-orange-400 mb-2">Medium Cart Lights</h4>
                          <p>Adds bright, forward-facing lights to the front of medium-sized carts for improved visibility.</p>
                        </li>
                        <li className="bg-gray-900/50 p-4 rounded-md border border-orange-500/20">
                          <h4 className="text-xl font-semibold text-orange-400 mb-2">Pocket Cart Lights</h4>
                          <p>Equips pocket carts with the same lighting functionality, making them more useful in dark areas.</p>
                        </li>
                        <li className="bg-gray-900/50 p-4 rounded-md border border-orange-500/20">
                          <h4 className="text-xl font-semibold text-orange-400 mb-2">Simple Installation</h4>
                          <p>No complex setup required - install the mod and immediately benefit from enhanced cart lighting.</p>
                        </li>
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="text-2xl font-medium mb-4 text-orange-300">Gameplay Benefits:</h3>
                      <ul className="space-y-4">
                        <li className="bg-gray-900/50 p-4 rounded-md border border-orange-500/20">
                          <h4 className="text-xl font-semibold text-orange-400 mb-2">Enhanced Visibility</h4>
                          <p>Dramatically improves your ability to navigate dark corridors and spaces while using carts.</p>
                        </li>
                        <li className="bg-gray-900/50 p-4 rounded-md border border-orange-500/20">
                          <h4 className="text-xl font-semibold text-orange-400 mb-2">Hands-Free Lighting</h4>
                          <p>No need to juggle a flashlight while moving carts - the integrated lights keep your path lit.</p>
                        </li>
                        <li className="bg-gray-900/50 p-4 rounded-md border border-orange-500/20">
                          <h4 className="text-xl font-semibold text-orange-400 mb-2">Improved Safety</h4>
                          <p>Better visibility means fewer accidents and more awareness of potential hazards ahead.</p>
                        </li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="bg-gray-900/50 p-6 rounded-md border border-orange-500/20 mb-8">
                    <h3 className="text-2xl font-medium mb-4 text-orange-300">Mod Overview:</h3>
                    <p className="text-gray-200 mb-4">
                      Cart Lights MelanieMelicious is a straightforward but essential mod that focuses on one specific quality-of-life improvement: adding lights to your carts. The mod works seamlessly with the base game mechanics, providing automatic illumination whenever you use a medium or pocket cart.
                    </p>
                    <p className="text-gray-200 mb-4">
                      The lights are positioned to provide optimal forward visibility, helping you:
                    </p>
                    <ul className="list-disc pl-5 space-y-2 text-gray-200">
                      <li>Navigate narrow passages more safely</li>
                      <li>Spot obstacles and threats before colliding with them</li>
                      <li>Reduce dependency on handheld lighting when pushing carts</li>
                      <li>Improve overall mission efficiency in dark environments</li>
                    </ul>
                    <p className="text-gray-200 mt-4">
                      This simple modification significantly enhances the usability of carts in the game, making them more valuable tools during your expeditions.
                    </p>
                  </div>
                  
                  <div className="bg-gray-900/50 p-6 rounded-md border border-orange-500/20 mb-8">
                    <h3 className="text-2xl font-medium mb-4 text-orange-300">Installation:</h3>
                    <ol className="list-decimal pl-5 space-y-2 text-gray-200">
                      <li>First, ensure you have <a href="https://thunderstore.io/c/repo/p/BepInEx/BepInExPack/" className="text-orange-400 hover:underline" target="_blank" rel="noopener noreferrer">BepInExPack</a> installed.</li>
                      <li>Download the Cart Lights MelanieMelicious mod from the link below.</li>
                      <li>Extract the downloaded zip file to your REPO game directory, or use a mod manager like <a href="https://www.overwolf.com/app/thunderstore-thunderstore_mod_manager" className="text-orange-400 hover:underline" target="_blank" rel="noopener noreferrer">Thunderstore Mod Manager</a>.</li>
                      <li>Launch the game and you'll immediately notice the new lights on your carts!</li>
                    </ol>
                    <div className="mt-4 bg-orange-800/30 p-4 rounded-md border border-orange-500/30">
                      <h4 className="text-xl font-semibold text-orange-300 mb-2">Compatibility Note:</h4>
                      <p className="text-gray-200">
                        This mod modifies cart prefabs but does so in a way that's generally compatible with other mods. It should work alongside most other gameplay modifications without issues.
                      </p>
                    </div>
                  </div>
                  
                  <div className="bg-gray-900/50 p-6 rounded-md border border-orange-500/20 mb-8">
                    <h3 className="text-2xl font-medium mb-4 text-orange-300">Compatibility:</h3>
                    <p className="text-gray-200 mb-4">
                      Cart Lights MelanieMelicious is designed to be compatible with most other REPO mods. It works particularly well with:
                    </p>
                    <ul className="list-disc pl-5 space-y-2 text-gray-200">
                      <li><Link href="/repomod-ShrinkerCart" className="text-orange-400 hover:underline">ShrinkerCart</Link> - For a completely enhanced cart experience</li>
                      <li>Cart functionality mods (as long as they don't directly modify the same cart prefab components)</li>
                      <li>Visual enhancement mods</li>
                      <li>Gameplay modification mods</li>
                    </ul>
                    <p className="text-gray-200 mt-4">
                      The simplicity of this mod means it rarely conflicts with other modifications, making it an easy addition to any modpack.
                    </p>
                  </div>
                  
                  <div className="bg-gray-900/50 p-6 rounded-md border border-orange-500/20 mb-8">
                    <h3 className="text-2xl font-medium mb-4 text-orange-300">Why You Need This Mod:</h3>
                    <p className="text-gray-200 mb-4">
                      Cart Lights MelanieMelicious addresses a common frustration in R.E.P.O. - the difficulty of navigating with carts in dark environments. Here's why it's worth adding to your mod collection:
                    </p>
                    <ul className="list-disc pl-5 space-y-2 text-gray-200">
                      <li><span className="font-semibold text-orange-300">Minimal Overhead:</span> This lightweight mod has negligible impact on performance.</li>
                      <li><span className="font-semibold text-orange-300">Maximum Impact:</span> Despite its simplicity, it significantly improves the cart experience.</li>
                      <li><span className="font-semibold text-orange-300">Universal Benefit:</span> Every player in your team will appreciate the improved visibility.</li>
                      <li><span className="font-semibold text-orange-300">Set and Forget:</span> No configuration needed - it just works right out of the box.</li>
                    </ul>
                    <p className="text-gray-200 mt-4">
                      Sometimes the simplest mods make the biggest difference in gameplay comfort and quality of life!
                    </p>
                  </div>
                  
                  <a 
                    href="/downloads/repomod-Cart_Lights_MelanieMelicious-1.0.1.zip" 
                    className="inline-flex items-center px-8 py-4 bg-orange-700 text-white text-lg rounded-md hover:bg-orange-600 transition-colors"
                  >
                    <FiDownload className="mr-2" />
                    Download Cart Lights MelanieMelicious v1.0.1
                  </a>
                  
                  <div className="mt-16">
                    <RelatedMods currentModId="cartLightsMelanieMelicious" themeColor="orange" />
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