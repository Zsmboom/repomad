'use client';

import { motion } from 'framer-motion';
import { FiDownload, FiAlertCircle, FiShield, FiInfo } from 'react-icons/fi';
import { FaWindows, FaApple, FaSteam, FaDiscord, FaGithub, FaUserAlt, FaUsers, FaRunning } from 'react-icons/fa';
import Link from 'next/link';

const modVersions = [
  {
    name: 'R.E.P.O. Roles',
    description: 'An exciting mod which adds player roles with unique abilities to the game',
    version: 'v1.3.3',
    date: 'March 20, 2023',
    downloadUrl: '/downloads/REPORoles-1.3.3.zip',
    features: [
      'Random role assignment each game', 
      'The Runner - Increased speed', 
      'The Tank - Double HP, slower movement', 
      'The Gambler - Random buffs/debuffs', 
      'The Strongman - Enhanced strength', 
      'The Ranged Looter - Increased range',
      'The Athletic - More stamina and jump height',
      'The Mage - Powerful spell abilities'
    ],
    isNew: true
  },
  {
    name: 'R.E.P.O. MorePlayers',
    description: 'A mod that allows you to customize the maximum player count in your games',
    version: 'v1.0.4',
    date: 'March 18, 2023',
    downloadUrl: '/downloads/repo-MorePlayers-1.0.4.zip',
    features: [
      'Increase or decrease max player capacity', 
      'Simple configuration via config file', 
      'Works with the latest game version',
      'Compatible with other mods',
      'Easy installation process'
    ],
    isNew: true
  }
];

export default function Download() {
  return (
    <section id="download" className="section bg-gray-800 text-white">
      <div className="container">
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            REPO MODS DownLaod
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl text-gray-300 mb-6 max-w-3xl mx-auto"
          >
            Enhance your REPO experience with our premium REPO MODS collection. These REPO MODS add exciting new features and customization options to improve your REPO gameplay. All REPO MODS are fully compatible with the latest version of REPO and receive regular updates. Before using mods, you need to install <a href="https://thunderstore.io/c/repo/p/BepInEx/BepInExPack/" className="text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">BepInExPack</a> and <a href="https://www.overwolf.com/app/thunderstore-thunderstore_mod_manager" className="text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">Thunderstore Mod Manager</a>. For detailed installation instructions, please check our <Link href="/How-to-Install-REPO-Mods" className="text-blue-400 hover:underline">installation guide</Link>.
          </motion.p>
        </div>

        {/* Featured Mod: R.E.P.O. Roles */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-blue-800/30 backdrop-blur-sm rounded-lg p-6 mb-10 border border-blue-500/30"
        >
          <div className="flex flex-col md:flex-row items-start gap-6">
            <div className="flex-1">
              <h3 className="text-2xl font-semibold mb-4 flex items-center">
                <FaUserAlt className="mr-3 text-blue-400" /> 
                R.E.P.O. Roles: Unique Character Abilities <span className="ml-2 text-sm bg-blue-500 px-2 py-1 rounded-full">NEW</span>
              </h3>
              <p className="text-gray-200 mb-4">
                R.E.P.O. Roles is an exciting mod which adds player roles. When starting a game one of the roles will be randomly assigned to the player.
              </p>
              <h4 className="text-xl font-medium mb-3 text-blue-300">Available roles:</h4>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-4">
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  <span><span className="font-semibold">The Runner:</span> Runs faster than everyone else!</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  <span><span className="font-semibold">The Tank:</span> Has double hp but moves slower.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  <span><span className="font-semibold">The Gambler:</span> Gains a random buff and debuff every game.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  <span><span className="font-semibold">The Strongman:</span> Is a lot stronger than normal.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  <span><span className="font-semibold">The Ranged Looter:</span> Has a lot more range and is a bit stronger.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  <span><span className="font-semibold">The Athletic:</span> Has more stamina and strength and can jump higher.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  <span><span className="font-semibold">The Mage:</span> Uses spells to become incredibly powerful.</span>
                </li>
              </ul>
              <p className="text-gray-200 mb-4">
                When starting a game one of these roles will be assigned to the player. The role information can be toggled by pressing the "R" key by default. All keybinds used in this mod can be changed in the config file.
              </p>
              <p className="text-gray-200 mb-6">
                More roles will be added in future versions!
              </p>
              <a 
                href="/downloads/REPORoles-1.3.3.zip" 
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
              >
                <FiDownload className="mr-2" />
                Download R.E.P.O. Roles v1.3.3
              </a>
            </div>
          </div>
        </motion.div>

        {/* Featured Mod: R.E.P.O. MorePlayers */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="bg-indigo-800/30 backdrop-blur-sm rounded-lg p-6 mb-10 border border-indigo-500/30"
        >
          <div className="flex flex-col md:flex-row items-start gap-6">
            <div className="flex-1">
              <h3 className="text-2xl font-semibold mb-4 flex items-center">
                <FaUsers className="mr-3 text-indigo-400" /> 
                R.E.P.O. MorePlayers: Customize Your Group Size <span className="ml-2 text-sm bg-indigo-500 px-2 py-1 rounded-full">NEW</span>
              </h3>
              <p className="text-gray-200 mb-4">
                Are you tired of not being able to change the max player count in R.E.P.O.? Well BOY do I have something for you!
              </p>
              <p className="text-gray-200 mb-4">
                MorePlayers is a mod for R.E.P.O. that allows you to decrease or increase the max player cap.
              </p>
              <h4 className="text-xl font-medium mb-3 text-indigo-300">How do you change the max players cap?</h4>
              <p className="text-gray-200 mb-4">
                Easy! Go to your installation folder for R.E.P.O. (Right click on R.E.P.O. on Steam {'->'} Manage {'->'} Browse local files), go to BepInEx {'->'} config {'->'} zelofi.MorePlayers.cfg, then adjust the "MaxPlayers" value!
              </p>
              <div className="bg-gray-900/50 p-4 rounded-md mb-6 text-gray-300 font-mono text-sm">
                <p className="mb-2"># Configuration file for MorePlayers mod</p>
                <p className="mb-2">[General Settings]</p>
                <p className="text-indigo-300">MaxPlayers = 8</p>
                <p className="mt-2 text-gray-400 text-xs"># Change this number to your desired player count</p>
              </div>
              <a 
                href="/downloads/repo-MorePlayers-1.0.4.zip" 
                className="inline-flex items-center px-6 py-3 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors"
              >
                <FiDownload className="mr-2" />
                Download R.E.P.O. MorePlayers v1.0.4
              </a>
            </div>
          </div>
        </motion.div>

        {/* Featured Mod: R.E.P.O. MoreStamina */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="bg-green-800/30 backdrop-blur-sm rounded-lg p-6 mb-10 border border-green-500/30"
        >
          <div className="flex flex-col md:flex-row items-start gap-6">
            <div className="flex-1">
              <h3 className="text-2xl font-semibold mb-4 flex items-center">
                <FaRunning className="mr-3 text-green-400" /> 
                R.E.P.O. MoreStamina: Enhanced Endurance System <span className="ml-2 text-sm bg-green-500 px-2 py-1 rounded-full">NEW</span>
              </h3>
              <p className="text-gray-200 mb-4">
                This mod makes stamina usage more realistic.
              </p>
              <p className="text-gray-200 mb-4">
                With MoreStamina, you'll experience a more immersive and challenging gameplay as stamina management becomes a critical aspect of your survival strategy.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="bg-gray-900/50 p-4 rounded-md">
                  <h4 className="text-lg font-medium mb-2 text-green-300">Key Features:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-green-400 mr-2">•</span>
                      <span>Realistic stamina depletion when running and carrying items</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-400 mr-2">•</span>
                      <span>Weight-based stamina drain for carried objects</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-400 mr-2">•</span>
                      <span>Improved stamina recovery mechanics</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-gray-900/50 p-4 rounded-md">
                  <h4 className="text-lg font-medium mb-2 text-green-300">Benefits:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-green-400 mr-2">•</span>
                      <span>More strategic gameplay</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-400 mr-2">•</span>
                      <span>Enhanced immersion</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-400 mr-2">•</span>
                      <span>Compatible with all other REPO mods</span>
                    </li>
                  </ul>
                </div>
              </div>
              <a 
                href="/downloads/repo-MoreStamina-1.0.1.zip" 
                className="inline-flex items-center px-6 py-3 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors"
              >
                <FiDownload className="mr-2" />
                Download R.E.P.O. MoreStamina v1.0.1
              </a>
            </div>
          </div>
        </motion.div>

        {/* Coming Soon Mods */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="bg-purple-800/30 backdrop-blur-sm rounded-lg p-6 mb-10 border border-purple-500/30"
        >
          <div className="flex flex-col items-start gap-6">
            <div className="flex-1 w-full">
              <h3 className="text-2xl font-semibold mb-6 flex items-center">
                <span className="relative flex h-6 w-6 mr-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-6 w-6 bg-purple-500 items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                  </span>
                </span>
                Future Releases: Upcoming REPO Mod Collection
              </h3>
              
              <p className="text-gray-200 mb-6">
                We're working hard on developing new mods to enhance your REPO experience. Here's a sneak peek at what's coming next:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="bg-gray-900/50 p-4 rounded-md border border-purple-500/30 hover:border-purple-400/50 transition-colors">
                  <h4 className="text-lg font-medium mb-2 text-purple-300">ShrinkerCart</h4>
                  <p className="text-gray-300 text-sm mb-2">
                    Transform large objects into miniature versions for easier transport, then restore them to normal size at extraction!
                  </p>
                  <div className="text-xs text-purple-400 font-medium mt-auto">Coming May 2023</div>
                </div>
                
                <div className="bg-gray-900/50 p-4 rounded-md border border-purple-500/30 hover:border-purple-400/50 transition-colors">
                  <h4 className="text-lg font-medium mb-2 text-purple-300">Enemy Location</h4>
                  <p className="text-gray-300 text-sm mb-2">
                    An advanced radar system that helps your team track enemy movements within a limited range.
                  </p>
                  <div className="text-xs text-purple-400 font-medium mt-auto">Coming May 2023</div>
                </div>
                
                <div className="bg-gray-900/50 p-4 rounded-md border border-purple-500/30 hover:border-purple-400/50 transition-colors">
                  <h4 className="text-lg font-medium mb-2 text-purple-300">ImprovedStamina</h4>
                  <p className="text-gray-300 text-sm mb-2">
                    Advanced version of MoreStamina with customizable settings and team synergy mechanics.
                  </p>
                  <div className="text-xs text-purple-400 font-medium mt-auto">Coming June 2023</div>
                </div>
                
                <div className="bg-gray-900/50 p-4 rounded-md border border-purple-500/30 hover:border-purple-400/50 transition-colors">
                  <h4 className="text-lg font-medium mb-2 text-purple-300">LegoGnomes</h4>
                  <p className="text-gray-300 text-sm mb-2">
                    Spawn helpful gnome assistants that can carry small objects for your team.
                  </p>
                  <div className="text-xs text-purple-400 font-medium mt-auto">Coming June 2023</div>
                </div>
                
                <div className="bg-gray-900/50 p-4 rounded-md border border-purple-500/30 hover:border-purple-400/50 transition-colors">
                  <h4 className="text-lg font-medium mb-2 text-purple-300">InfiniteEnergyCrystals</h4>
                  <p className="text-gray-300 text-sm mb-2">
                    Place rechargeable energy crystal stations throughout the map for emergency power boosts.
                  </p>
                  <div className="text-xs text-purple-400 font-medium mt-auto">Coming July 2023</div>
                </div>
                
                <div className="bg-gray-900/50 p-4 rounded-md border border-purple-500/30 hover:border-purple-400/50 transition-colors flex items-center justify-center">
                  <div className="text-center">
                    <h4 className="text-lg font-medium mb-2 text-purple-300">More Coming...</h4>
                    <p className="text-gray-300 text-sm">
                      Stay tuned for additional mods!
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-900/50 p-4 rounded-md border border-purple-500/20 mt-4">
                <p className="text-gray-200 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Want to suggest a mod idea or help with development? Join our Discord community to collaborate with other modders!
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 