'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { FiDownload, FiCalendar, FiSliders } from 'react-icons/fi';
import { FaPalette, FaSync } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Link from 'next/link';
import RelatedMods from '@/components/RelatedMods';

export default function CustomColorsPage() {
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
              <Link href="/repo-mods-Download" className="inline-flex items-center text-blue-400 hover:underline mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Back to all mods
              </Link>
              
              <h1 className="text-4xl md:text-5xl font-bold mb-3 flex items-center">
                <FaPalette className="mr-4 text-blue-400" /> 
                Custom Colors
                <span className="ml-3 text-sm bg-blue-700 px-2 py-1 rounded-full">v1.1.0</span>
              </h1>
              
              <div className="flex items-center mb-6 text-gray-400">
                <FiCalendar className="mr-2" />
                <span>Last updated: 2 weeks ago</span>
              </div>
              
              <div className="bg-gray-900/50 p-6 rounded-lg mb-8 border border-blue-500/20">
                <p className="text-xl text-gray-300 mb-6">
                  Enhance your REPO experience with our premium REPO MODS collection. These REPO MODS add exciting new features and customization options to improve your REPO gameplay. All REPO MODS are fully compatible with the latest version of REPO and receive regular updates. Before using mods, you need to install <a href="https://thunderstore.io/c/repo/p/BepInEx/BepInExPack/" className="text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">BepInExPack</a> and <a href="https://www.overwolf.com/app/thunderstore-thunderstore_mod_manager" className="text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">Thunderstore Mod Manager</a>. For detailed installation instructions, please check our <Link href="/How-to-Install-REPO-Mods" className="text-blue-400 hover:underline">installation guide</Link>.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-blue-900/40 backdrop-blur-sm rounded-lg p-8 mb-10 border border-blue-700/50"
            >
              <div className="flex flex-col items-start gap-6">
                <div className="flex-1 w-full">
                  <h2 className="text-3xl font-semibold mb-6">
                    Advanced Color Customization System
                  </h2>
                  
                  <p className="text-gray-200 mb-6 text-lg">
                    Custom Colors is a sleek, lightweight mod that enhances your character customization experience in R.E.P.O. by adding RGB color sliders to the Select Color page, allowing for precise and unlimited color options beyond the default palette.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                    <div>
                      <h3 className="text-2xl font-medium mb-4 text-blue-300">Key Features:</h3>
                      <ul className="space-y-4">
                        <li className="bg-gray-900/50 p-4 rounded-md border border-blue-500/20">
                          <h4 className="text-xl font-semibold text-blue-400 mb-2">RGB Color Sliders</h4>
                          <p>Precise control over red, green, and blue color values for unlimited customization options.</p>
                        </li>
                        <li className="bg-gray-900/50 p-4 rounded-md border border-blue-500/20">
                          <h4 className="text-xl font-semibold text-blue-400 mb-2">Multiplayer Compatibility</h4>
                          <p>Custom colors sync to other players who also have the CustomColors mod installed.</p>
                        </li>
                        <li className="bg-gray-900/50 p-4 rounded-md border border-blue-500/20">
                          <h4 className="text-xl font-semibold text-blue-400 mb-2">Vanilla Compatibility</h4>
                          <p>Players without the mod will see your last selected vanilla color, ensuring seamless gameplay.</p>
                        </li>
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="text-2xl font-medium mb-4 text-blue-300">Benefits:</h3>
                      <ul className="space-y-4">
                        <li className="bg-gray-900/50 p-4 rounded-md border border-blue-500/20">
                          <h4 className="text-xl font-semibold text-blue-400 mb-2">Enhanced Personalization</h4>
                          <p>Create unique identities with your favorite colors or match your team with coordinated color schemes.</p>
                        </li>
                        <li className="bg-gray-900/50 p-4 rounded-md border border-blue-500/20">
                          <h4 className="text-xl font-semibold text-blue-400 mb-2">Team Coordination</h4>
                          <p>Easily create matching team colors with exact RGB values for better visual identification.</p>
                        </li>
                        <li className="bg-gray-900/50 p-4 rounded-md border border-blue-500/20">
                          <h4 className="text-xl font-semibold text-blue-400 mb-2">Non-Intrusive Design</h4>
                          <p>The RGB sliders integrate seamlessly with the existing color selection interface.</p>
                        </li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="bg-gray-900/50 p-6 rounded-md border border-blue-500/20 mb-8">
                    <h3 className="text-2xl font-medium mb-4 text-blue-300">About Custom Colors:</h3>
                    <p className="text-gray-200 mb-4">
                      Custom Colors is a quality-of-life enhancement for R.E.P.O. that builds upon the game's existing character customization system. Created by x753_REPO, this mod seamlessly integrates RGB color sliders into the Select Color page, giving players unprecedented control over their character's appearance.
                    </p>
                    <p className="text-gray-200 mb-4">
                      The mod was designed with both individual players and teams in mind, allowing for more personalized gameplay while maintaining compatibility with vanilla players. It's a perfect example of how small, thoughtful modifications can significantly enhance the gaming experience.
                    </p>
                    <div className="bg-blue-800/30 p-4 rounded-md border border-blue-500/30 mt-6">
                      <h4 className="text-xl font-semibold text-blue-300 mb-2">How It Works:</h4>
                      <p className="text-gray-200">
                        The mod adds RGB sliders to the color selection menu, allowing you to fine-tune each color channel. Your custom colors are saved and will persist between game sessions. When playing with others who have the mod, they'll see your custom colors exactly as you designed them. Players without the mod will see your last selected vanilla color from the default palette.
                      </p>
                    </div>
                  </div>
                  
                  <div className="bg-gray-900/50 p-6 rounded-md border border-blue-500/20 mb-8">
                    <h3 className="text-2xl font-medium mb-4 text-blue-300">Installation:</h3>
                    <ol className="list-decimal pl-5 space-y-2 text-gray-200">
                      <li>First, ensure you have <a href="https://thunderstore.io/c/repo/p/BepInEx/BepInExPack/" className="text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">BepInExPack</a> installed.</li>
                      <li>Download the Custom Colors mod from the link below.</li>
                      <li>Extract the downloaded zip file to your REPO game directory, or use a mod manager like <a href="https://www.overwolf.com/app/thunderstore-thunderstore_mod_manager" className="text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">Thunderstore Mod Manager</a>.</li>
                      <li>Launch the game and navigate to the character customization screen to access the new RGB sliders.</li>
                    </ol>
                    <div className="mt-4 bg-blue-800/30 p-4 rounded-md border border-blue-500/30">
                      <h4 className="text-xl font-semibold text-blue-300 mb-2">Compatibility Note:</h4>
                      <p className="text-gray-200">
                        Custom Colors is designed to work seamlessly with other mods and does not modify core gameplay mechanics. It's compatible with virtually all other R.E.P.O. mods including cosmetic mods, gameplay enhancements, and UI modifications.
                      </p>
                    </div>
                  </div>
                  
                  <div className="bg-gray-900/50 p-6 rounded-md border border-blue-500/20 mb-8">
                    <h3 className="text-2xl font-medium mb-4 text-blue-300">Using Custom Colors:</h3>
                    <ol className="list-decimal pl-5 space-y-2 text-gray-200">
                      <li>Start or join a game of R.E.P.O.</li>
                      <li>Navigate to the character customization screen where you would normally select your color.</li>
                      <li>You'll now see three sliders labeled R, G, and B for the red, green, and blue color channels.</li>
                      <li>Adjust each slider to create your desired custom color.</li>
                      <li>The color preview will update in real-time as you adjust the sliders.</li>
                      <li>Your selected color will be applied to your character immediately and saved for future sessions.</li>
                    </ol>
                    <p className="text-gray-200 mt-4">
                      If you want to share exact colors with friends, you can note the RGB values and have them set the same values on their sliders for perfect color matching.
                    </p>
                  </div>
                  
                  <div className="bg-gray-900/50 p-6 rounded-md border border-blue-500/20 mb-8">
                    <h3 className="text-2xl font-medium mb-4 text-blue-300">Multiplayer Functionality:</h3>
                    <p className="text-gray-200 mb-4">
                      Custom Colors is designed with multiplayer in mind and includes the following synchronization features:
                    </p>
                    <ul className="list-disc pl-5 space-y-2 text-gray-200">
                      <li><span className="font-semibold text-blue-300">Player Synchronization:</span> Your custom colors will be visible to all players who also have the CustomColors mod installed.</li>
                      <li><span className="font-semibold text-blue-300">Vanilla Fallback:</span> Players without the mod will see your last selected vanilla color, ensuring everyone has a consistent visual experience.</li>
                      <li><span className="font-semibold text-blue-300">Host Independence:</span> This mod works regardless of whether you're the host or a client in multiplayer games.</li>
                      <li><span className="font-semibold text-blue-300">Low Network Impact:</span> The color synchronization uses minimal network resources and won't affect game performance.</li>
                    </ul>
                    <div className="bg-blue-800/30 p-4 rounded-md border border-blue-500/30 mt-6">
                      <h4 className="text-xl font-semibold text-blue-300 mb-2">Team Color Coordination:</h4>
                      <p className="text-gray-200">
                        For teams wanting to use matching colors, simply have all team members set the same RGB values. This creates a cohesive team appearance and can help with quick visual identification during hectic gameplay situations.
                      </p>
                    </div>
                  </div>
                  
                  <a 
                    href="/downloads/repomod-CustomColors-1.1.0.zip" 
                    className="inline-flex items-center px-8 py-4 bg-blue-700 text-white text-lg rounded-md hover:bg-blue-600 transition-colors"
                  >
                    <FiDownload className="mr-2" />
                    Download Custom Colors v1.1.0
                  </a>
                  
                  <div className="mt-16">
                    <RelatedMods currentModId="customColors" themeColor="blue" />
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