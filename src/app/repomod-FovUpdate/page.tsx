'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { FiDownload, FiCalendar, FiMaximize, FiMonitor, FiCommand, FiSettings } from 'react-icons/fi';
import { FaExpandArrowsAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Link from 'next/link';
import RelatedMods from '@/components/RelatedMods';

export default function FovUpdatePage() {
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
                <FaExpandArrowsAlt className="mr-4 text-orange-400" /> 
                FOV Update
                <span className="ml-3 text-sm bg-orange-700 px-2 py-1 rounded-full">v0.2.7</span>
              </h1>
              
              <div className="flex items-center mb-6 text-gray-400">
                <FiCalendar className="mr-2" />
                <span>Last updated: 5 days ago</span>
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
                    Field of View Customization System
                  </h2>
                  
                  <p className="text-gray-200 mb-6 text-lg">
                    FOV Update is a simple yet powerful mod that allows you to adjust your field of view settings in R.E.P.O. to your preferred values. It also provides support for ultrawide monitors and resolution scaling, enhancing your visual gameplay experience.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                    <div>
                      <h3 className="text-2xl font-medium mb-4 text-orange-300">Key Features:</h3>
                      <ul className="space-y-4">
                        <li className="bg-gray-900/50 p-4 rounded-md border border-orange-500/20">
                          <h4 className="text-xl font-semibold text-orange-400 mb-2">Customizable FOV</h4>
                          <p>Set both your base-game field of view and your "crouched" / "tumble" field of view via the config.</p>
                        </li>
                        <li className="bg-gray-900/50 p-4 rounded-md border border-orange-500/20">
                          <h4 className="text-xl font-semibold text-orange-400 mb-2">UltraWide Support</h4>
                          <p>Aspect ratio fix for those with ultrawide or ultralong monitors, ensuring proper image display.</p>
                        </li>
                        <li className="bg-gray-900/50 p-4 rounded-md border border-orange-500/20">
                          <h4 className="text-xl font-semibold text-orange-400 mb-2">In-Game Commands</h4>
                          <p>Convenient chat commands to adjust FOV settings while playing without exiting the game.</p>
                        </li>
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="text-2xl font-medium mb-4 text-orange-300">Benefits:</h3>
                      <ul className="space-y-4">
                        <li className="bg-gray-900/50 p-4 rounded-md border border-orange-500/20">
                          <h4 className="text-xl font-semibold text-orange-400 mb-2">Enhanced Visibility</h4>
                          <p>Wider field of view allows you to see more of your surroundings, improving situational awareness.</p>
                        </li>
                        <li className="bg-gray-900/50 p-4 rounded-md border border-orange-500/20">
                          <h4 className="text-xl font-semibold text-orange-400 mb-2">Motion Sickness Reduction</h4>
                          <p>Adjusting FOV can help reduce motion sickness that some players experience with default settings.</p>
                        </li>
                        <li className="bg-gray-900/50 p-4 rounded-md border border-orange-500/20">
                          <h4 className="text-xl font-semibold text-orange-400 mb-2">Resolution Control</h4>
                          <p>Upscale or downscale your game with the Resolution Multiplier config for performance optimization.</p>
                        </li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="bg-gray-900/50 p-6 rounded-md border border-orange-500/20 mb-8">
                    <h3 className="text-2xl font-medium mb-4 text-orange-300">About FOV Update:</h3>
                    <p className="text-gray-200 mb-4">
                      FOV Update is a client-side mod developed by darmuh that enhances your visual experience in R.E.P.O. by giving you control over the game's field of view settings. This mod is particularly useful for players who find the default FOV too narrow or those with ultrawide monitors who experience stretching issues.
                    </p>
                    <p className="text-gray-200 mb-4">
                      The mod has evolved from its initial release to include more features with each update, now offering not just FOV adjustment but also support for different screen types and resolution control, making it a comprehensive visual enhancement tool.
                    </p>
                    <div className="bg-orange-800/30 p-4 rounded-md border border-orange-500/30 mt-6">
                      <h4 className="text-xl font-semibold text-orange-300 mb-2">Client-Side Only:</h4>
                      <p className="text-gray-200">
                        FOV Update is a client-sided mod, meaning only the person who wants to adjust their FOV needs to install it. It doesn't affect other players in multiplayer sessions, allowing for a personalized experience without requiring everyone to have the mod.
                      </p>
                    </div>
                  </div>
                  
                  <div className="bg-gray-900/50 p-6 rounded-md border border-orange-500/20 mb-8">
                    <h3 className="text-2xl font-medium mb-4 text-orange-300">Installation:</h3>
                    <ol className="list-decimal pl-5 space-y-2 text-gray-200">
                      <li>First, ensure you have <a href="https://thunderstore.io/c/repo/p/BepInEx/BepInExPack/" className="text-orange-400 hover:underline" target="_blank" rel="noopener noreferrer">BepInExPack</a> installed.</li>
                      <li>Download the FOV Update mod from the link below.</li>
                      <li>Extract the downloaded zip file to your REPO game directory, or use a mod manager like <a href="https://www.overwolf.com/app/thunderstore-thunderstore_mod_manager" className="text-orange-400 hover:underline" target="_blank" rel="noopener noreferrer">Thunderstore Mod Manager</a>.</li>
                      <li>Launch the game to generate the configuration file, which you can then customize to your preferences.</li>
                    </ol>
                    <div className="mt-4 bg-orange-800/30 p-4 rounded-md border border-orange-500/30">
                      <h4 className="text-xl font-semibold text-orange-300 mb-2">Compatibility Note:</h4>
                      <p className="text-gray-200">
                        FOV Update has been tested in multiplayer environments and should be compatible with most other mods. If you encounter any issues, please report them to the mod developer through the GitHub repository.
                      </p>
                    </div>
                  </div>
                  
                  <div className="bg-gray-900/50 p-6 rounded-md border border-orange-500/20 mb-8">
                    <h3 className="text-2xl font-medium mb-4 text-orange-300">Using FOV Update:</h3>
                    <p className="text-gray-200 mb-4">
                      After installing the mod, you can adjust your field of view settings through the configuration file or using in-game chat commands:
                    </p>
                    <ul className="space-y-4 text-gray-200">
                      <li className="bg-gray-900/70 p-4 rounded-md border border-orange-500/30">
                        <code className="block font-mono text-orange-300 mb-2">\fov &lt;number&gt;</code>
                        <p>Set your base field of view to any number. This affects your normal view when standing or moving.</p>
                      </li>
                      <li className="bg-gray-900/70 p-4 rounded-md border border-orange-500/30">
                        <code className="block font-mono text-orange-300 mb-2">\cfov &lt;number&gt;</code>
                        <p>Set your crouch field of view to any number. This affects your view when crouched or in tumble animation.</p>
                      </li>
                      <li className="bg-gray-900/70 p-4 rounded-md border border-orange-500/30">
                        <code className="block font-mono text-orange-300 mb-2">\sfov &lt;number&gt;</code>
                        <p>Set your sprint field of view modifier. This adjusts the FOV change when sprinting for a dynamic effect.</p>
                      </li>
                    </ul>
                    <p className="text-gray-200 mt-4">
                      Note that when using these commands, everyone in the lobby will see your chat message, but only your view will be affected.
                    </p>
                  </div>
                  
                  <div className="bg-gray-900/50 p-6 rounded-md border border-orange-500/20 mb-8">
                    <h3 className="text-2xl font-medium mb-4 text-orange-300">Configuration Options:</h3>
                    <p className="text-gray-200 mb-4">
                      FOV Update provides several configuration options that can be adjusted in the generated config file:
                    </p>
                    <ul className="list-disc pl-5 space-y-2 text-gray-200">
                      <li><span className="font-semibold text-orange-300">Base FOV:</span> Set your default field of view while standing and moving.</li>
                      <li><span className="font-semibold text-orange-300">Crouch FOV:</span> Set your field of view while crouched or in tumble animation.</li>
                      <li><span className="font-semibold text-orange-300">Sprint FOV Modifier:</span> Adjust how much FOV changes when sprinting.</li>
                      <li><span className="font-semibold text-orange-300">Aspect Ratio Fix:</span> Enable this for ultrawide or ultralong monitors to fix stretching issues.</li>
                      <li><span className="font-semibold text-orange-300">Resolution Multiplier:</span> Scale your game resolution up or down for performance or visual quality.</li>
                    </ul>
                    <div className="bg-orange-800/30 p-4 rounded-md border border-orange-500/30 mt-6">
                      <h4 className="text-xl font-semibold text-orange-300 mb-2">REPOConfig Support:</h4>
                      <p className="text-gray-200">
                        As of version 0.2.3, FOV Update supports config change events, allowing for integration with mods like REPOConfig for easier in-game adjustments without using chat commands.
                      </p>
                    </div>
                  </div>
                  
                  <div className="bg-gray-900/50 p-6 rounded-md border border-orange-500/20 mb-8">
                    <h3 className="text-2xl font-medium mb-4 text-orange-300">Version History:</h3>
                    <ul className="space-y-2 text-gray-200">
                      <li><span className="font-semibold text-orange-300">0.2.7:</span> Current version with all features described above.</li>
                      <li><span className="font-semibold text-orange-300">0.2.5:</span> Added resolution scaling with the Resolution Multiplier config item.</li>
                      <li><span className="font-semibold text-orange-300">0.2.4:</span> Improved camera aspect ratio correction for ultrawide monitors.</li>
                      <li><span className="font-semibold text-orange-300">0.2.3:</span> Added config change event support for integration with other mods.</li>
                      <li><span className="font-semibold text-orange-300">0.2.2:</span> Introduced AspectRatioFix for ultrawide and ultralong monitors.</li>
                    </ul>
                    <p className="text-gray-200 mt-4">
                      The developer regularly updates this mod, so check the mod's Thunderstore page for the latest changes and improvements.
                    </p>
                  </div>
                  
                  <a 
                    href="/downloads/repomod-FovUpdate-0.2.7.zip" 
                    className="inline-flex items-center px-8 py-4 bg-orange-700 text-white text-lg rounded-md hover:bg-orange-600 transition-colors"
                  >
                    <FiDownload className="mr-2" />
                    Download FOV Update v0.2.7
                  </a>
                  
                  <div className="mt-16">
                    <RelatedMods currentModId="fovUpdate" themeColor="orange" />
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