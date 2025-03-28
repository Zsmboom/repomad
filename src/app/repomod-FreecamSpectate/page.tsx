'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { FiDownload, FiCalendar, FiEye, FiSettings } from 'react-icons/fi';
import { FaCamera, FaKeyboard } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Link from 'next/link';
import RelatedMods from '@/components/RelatedMods';

export default function FreecamSpectatePage() {
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
                <FaCamera className="mr-4 text-purple-400" /> 
                Freecam Spectate
                <span className="ml-3 text-sm bg-amber-700 px-2 py-1 rounded-full">v1.1.0</span>
              </h1>
              
              <div className="flex items-center mb-6 text-gray-400">
                <FiCalendar className="mr-2" />
                <span>Last updated: a day ago</span>
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
              className="bg-purple-900/40 backdrop-blur-sm rounded-lg p-8 mb-10 border border-purple-700/50"
            >
              <div className="flex flex-col items-start gap-6">
                <div className="flex-1 w-full">
                  <h2 className="text-3xl font-semibold mb-6">
                    Enhanced Spectator Mode with Free Camera Controls
                  </h2>
                  
                  <p className="text-gray-200 mb-6 text-lg">
                    Freecam Spectate is a quality-of-life mod that transforms the spectating experience in R.E.P.O. by allowing you to fly freely around the map while spectating your friends. Say goodbye to the boredom of standard spectator view and enjoy complete camera freedom to follow the action from any angle.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                    <div>
                      <h3 className="text-2xl font-medium mb-4 text-purple-300">Key Features:</h3>
                      <ul className="space-y-4">
                        <li className="bg-gray-900/50 p-4 rounded-md border border-purple-500/20">
                          <h4 className="text-xl font-semibold text-purple-400 mb-2">Free Camera Movement</h4>
                          <p>Fly in any direction while spectating with full 3D camera control using WASD, Space, and Shift.</p>
                        </li>
                        <li className="bg-gray-900/50 p-4 rounded-md border border-purple-500/20">
                          <h4 className="text-xl font-semibold text-purple-400 mb-2">Customizable Keybinds</h4>
                          <p>Configure your preferred controls for navigating in spectator mode through the config file.</p>
                        </li>
                        <li className="bg-gray-900/50 p-4 rounded-md border border-purple-500/20">
                          <h4 className="text-xl font-semibold text-purple-400 mb-2">Toggle Functionality</h4>
                          <p>Easily switch between freecam mode and standard player-following camera with simple controls.</p>
                        </li>
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="text-2xl font-medium mb-4 text-purple-300">Benefits:</h3>
                      <ul className="space-y-4">
                        <li className="bg-gray-900/50 p-4 rounded-md border border-purple-500/20">
                          <h4 className="text-xl font-semibold text-purple-400 mb-2">Enhanced Entertainment</h4>
                          <p>Makes spectating engaging and interactive rather than a passive waiting experience.</p>
                        </li>
                        <li className="bg-gray-900/50 p-4 rounded-md border border-purple-500/20">
                          <h4 className="text-xl font-semibold text-purple-400 mb-2">Better Team Coordination</h4>
                          <p>Observe the entire battlefield from any angle to provide better information to teammates.</p>
                        </li>
                        <li className="bg-gray-900/50 p-4 rounded-md border border-purple-500/20">
                          <h4 className="text-xl font-semibold text-purple-400 mb-2">Learning Opportunities</h4>
                          <p>Watch how experienced players navigate challenges from multiple perspectives to improve your own gameplay.</p>
                        </li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="bg-gray-900/50 p-6 rounded-md border border-purple-500/20 mb-8">
                    <h3 className="text-2xl font-medium mb-4 text-purple-300">About Freecam Spectate:</h3>
                    <p className="text-gray-200 mb-4">
                      Freecam Spectate is a user-friendly mod created by nickklmao that addresses one of the most common frustrations in R.E.P.O. - the limited and often boring spectator experience. When you die in a mission, waiting for your teammates to finish can be tedious, but this mod transforms that downtime into an engaging experience.
                    </p>
                    <p className="text-gray-200 mb-4">
                      With Freecam Spectate, you can explore the entire map while dead, checking out areas you may not have seen before, following your teammates from unique angles, or even scouting ahead to warn them of dangers. It's a simple change that drastically improves the overall gameplay experience, especially during longer missions.
                    </p>
                    <div className="bg-purple-800/30 p-4 rounded-md border border-purple-500/30 mt-6">
                      <h4 className="text-xl font-semibold text-purple-300 mb-2">Developer's Note:</h4>
                      <p className="text-gray-200">
                        "Do you get bored spectating your friends? This mod lets you fly around while spectating!" - nickklmao, mod creator
                      </p>
                    </div>
                  </div>
                  
                  <div className="bg-gray-900/50 p-6 rounded-md border border-purple-500/20 mb-8">
                    <h3 className="text-2xl font-medium mb-4 text-purple-300">Installation:</h3>
                    <ol className="list-decimal pl-5 space-y-2 text-gray-200">
                      <li>First, ensure you have <a href="https://thunderstore.io/c/repo/p/BepInEx/BepInExPack/" className="text-purple-400 hover:underline" target="_blank" rel="noopener noreferrer">BepInExPack</a> installed.</li>
                      <li>Download the Freecam Spectate mod from the link below.</li>
                      <li>Extract the downloaded zip file to your REPO game directory, or use a mod manager like <a href="https://www.overwolf.com/app/thunderstore-thunderstore_mod_manager" className="text-purple-400 hover:underline" target="_blank" rel="noopener noreferrer">Thunderstore Mod Manager</a>.</li>
                      <li>Launch the game and die (or wait until you die naturally) to access the spectator mode.</li>
                      <li>Use the default keybinds to activate freecam and fly around, or customize your controls in the config file.</li>
                    </ol>
                    <div className="mt-4 bg-purple-800/30 p-4 rounded-md border border-purple-500/30">
                      <h4 className="text-xl font-semibold text-purple-300 mb-2">Installation Note:</h4>
                      <p className="text-gray-200">
                        This mod is client-side only, meaning you don't need the host to have it installed. It works for anyone who has the mod in their own game files.
                      </p>
                    </div>
                  </div>
                  
                  <div className="bg-gray-900/50 p-6 rounded-md border border-purple-500/20 mb-8">
                    <h3 className="text-2xl font-medium mb-4 text-purple-300">Using Freecam Spectate:</h3>
                    <p className="text-gray-200 mb-4">
                      When you're spectating (after dying), the mod becomes active. Here are the default controls:
                    </p>
                    <ul className="space-y-4 text-gray-200">
                      <li className="bg-gray-900/70 p-4 rounded-md border border-purple-500/30 flex items-start">
                        <FaKeyboard className="text-purple-400 mr-3 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="text-xl font-semibold text-purple-400 mb-2">Movement Controls</h4>
                          <p><span className="font-semibold">W, A, S, D:</span> Move the camera forward, left, backward, and right</p>
                          <p><span className="font-semibold">Space:</span> Move the camera up</p>
                          <p><span className="font-semibold">Left Shift:</span> Move the camera down</p>
                          <p><span className="font-semibold">Mouse:</span> Look around (standard camera controls)</p>
                        </div>
                      </li>
                      <li className="bg-gray-900/70 p-4 rounded-md border border-purple-500/30 flex items-start">
                        <FiEye className="text-purple-400 mr-3 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="text-xl font-semibold text-purple-400 mb-2">Toggling Controls</h4>
                          <p><span className="font-semibold">Left Click:</span> Switch to the next player (disabled in freecam mode)</p>
                          <p><span className="font-semibold">Right Click:</span> Switch to the previous player (disabled in freecam mode)</p>
                          <p><span className="font-semibold">Jump Button (typically Space):</span> Toggle freecam mode on/off</p>
                        </div>
                      </li>
                    </ul>
                    <p className="text-gray-200 mt-4">
                      Note: When freecam is enabled, this mod disables the jump button's ability to cycle to the next player. Instead, you'll need to use the designated keybinds, typically left click and right click.
                    </p>
                  </div>
                  
                  <div className="bg-gray-900/50 p-6 rounded-md border border-purple-500/20 mb-8">
                    <h3 className="text-2xl font-medium mb-4 text-purple-300">Configuration Options:</h3>
                    <p className="text-gray-200 mb-4">
                      Freecam Spectate offers customization through its configuration file. You can adjust:
                    </p>
                    <ul className="list-disc pl-5 space-y-2 text-gray-200">
                      <li><span className="font-semibold text-purple-300">Keybinds:</span> Customize all control keys to your preference.</li>
                      <li><span className="font-semibold text-purple-300">Camera Speed:</span> Adjust how quickly the camera moves in freecam mode.</li>
                      <li><span className="font-semibold text-purple-300">Sensitivity:</span> Fine-tune the camera's response to mouse movement.</li>
                    </ul>
                    <div className="bg-purple-800/30 p-4 rounded-md border border-purple-500/30 mt-6">
                      <h4 className="text-xl font-semibold text-purple-300 mb-2">Configuring Keybinds:</h4>
                      <p className="text-gray-200">
                        The configuration file is generated after your first run of the game with the mod installed. You can find it in your BepInEx/config folder. Open it with any text editor to modify the keybinds and other settings.
                      </p>
                    </div>
                  </div>
                  
                  <div className="bg-gray-900/50 p-6 rounded-md border border-purple-500/20 mb-8">
                    <h3 className="text-2xl font-medium mb-4 text-purple-300">Compatibility:</h3>
                    <p className="text-gray-200 mb-4">
                      Freecam Spectate is designed to be compatible with most other R.E.P.O. mods. Since it only affects the spectator camera functionality, it shouldn't conflict with:
                    </p>
                    <ul className="list-disc pl-5 space-y-2 text-gray-200">
                      <li>Gameplay enhancement mods</li>
                      <li>Visual mods and cosmetics</li>
                      <li>UI modifications</li>
                      <li>Content addition mods</li>
                    </ul>
                    <p className="text-gray-200 mt-4">
                      If you experience any compatibility issues with other mods, check the mod's Thunderstore page for updates or possible conflicts reported by other users.
                    </p>
                  </div>
                  
                  <a 
                    href="/downloads/repomod-FreecamSpectate-1.1.0.zip" 
                    className="inline-flex items-center px-8 py-4 bg-purple-700 text-white text-lg rounded-md hover:bg-purple-600 transition-colors"
                  >
                    <FiDownload className="mr-2" />
                    Download FreecamSpectate v1.1.0
                  </a>
                  
                  <div className="mt-16">
                    <RelatedMods currentModId="freecamSpectate" themeColor="purple" />
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