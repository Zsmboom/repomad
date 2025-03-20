'use client';

import { motion } from 'framer-motion';
import { FiDownload, FiAlertCircle, FiShield, FiInfo, FiMinimize2, FiTarget, FiMusic, FiDollarSign } from 'react-icons/fi';
import { FaWindows, FaApple, FaSteam, FaDiscord, FaGithub, FaUserAlt, FaUsers, FaRunning } from 'react-icons/fa';
import Link from 'next/link';
import { GiPartyHat } from 'react-icons/gi';

const modVersions = [
  {
    name: 'R.E.P.O. Roles',
    description: 'An exciting mod which adds player roles with unique abilities to the game',
    version: 'v1.3.3',
    date: 'March 20, 2023',
    detailUrl: '/repomod-REPORoles',
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
    detailUrl: '/repomod-MorePlayers',
    downloadUrl: '/downloads/repo-MorePlayers-1.0.4.zip',
    features: [
      'Increase or decrease max player capacity', 
      'Simple configuration via config file', 
      'Works with the latest game version',
      'Compatible with other mods',
      'Easy installation process'
    ],
    isNew: true
  },
  {
    name: 'ShrinkerCart',
    description: 'Bigger the item better the shrink!',
    version: 'v0.1.0',
    date: 'March 21, 2023',
    detailUrl: '/repomod-ShrinkerCart',
    downloadUrl: '/downloads/repo-ShrinkerCart-0.1.0.zip',
    features: [
      'Transform large objects into miniature versions',
      'Easier transport of valuable but bulky items',
      'Restore items to normal size at extraction',
      'Carry more valuable items per run',
      'Strategic inventory management',
      'Works with all standard in-game items'
    ],
    isNew: true
  },
  {
    name: 'R.E.P.O. MoreStamina',
    description: 'Enhanced endurance system with realistic stamina mechanics',
    version: 'v1.0.1',
    date: 'March 18, 2023',
    detailUrl: '/repomod-MoreStamina',
    downloadUrl: '/downloads/repo-MoreStamina-1.0.1.zip',
    features: [
      'Realistic stamina depletion when running and carrying items',
      'Weight-based stamina drain for carried objects',
      'Improved stamina recovery mechanics',
      'More strategic gameplay',
      'Enhanced immersion'
    ],
    isNew: true
  },
  {
    name: 'Enemy Location',
    description: 'Advanced tactical mod that helps track enemy movements',
    version: 'v1.0.3',
    date: 'March 18, 2023',
    detailUrl: '/repomod-EnemyLocation',
    downloadUrl: '/downloads/repo-Enemy_Location-1.0.3.zip',
    features: [
      'Real-time enemy position tracking',
      'Visual indicators for enemy proximity',
      'Configurable tracking range',
      'Works seamlessly in multiplayer',
      'Customizable UI display options'
    ],
    isNew: true
  },
  {
    name: 'LegoGnomes',
    description: 'Changes the gnome\'s death sound to the lego brick breaking sound effect',
    version: 'v1.0.2',
    date: 'March 18, 2023',
    detailUrl: '/repomod-LegoGnomes',
    downloadUrl: '/downloads/repo-LegoGnomes-1.0.2.zip',
    features: [
      'Replaces gnome death sounds with Lego brick breaking sound',
      'Perfect match for their breaking animation',
      'Lightweight modification',
      'Compatible with all other mods'
    ],
    isNew: true
  },
  {
    name: 'EvenMoreHead',
    description: 'Adds several new models to the MoreHead mod with a wide variety of cosmetic options',
    version: 'v0.1.6',
    date: 'March 22, 2023',
    detailUrl: '/repomod-EvenMoreHead',
    downloadUrl: '/downloads/repo-EvenMoreHead-0.1.6.zip',
    features: [
      'Huge collection of new head cosmetics and accessories',
      'Over 70 different models including hats, glasses, effects and more',
      'Compatible with the original MoreHead mod',
      'Regularly updated with new models',
      'Fun visual customization for your character'
    ],
    isNew: true
  },
  {
    name: 'InfiniteEnergyCrystals',
    description: 'No more cash wasted on energy crystals!',
    version: 'v1.0.1',
    date: 'March 25, 2023',
    detailUrl: '/repomod-InfiniteEnergyCrystals',
    downloadUrl: '/downloads/repo-InfiniteEnergyCrystals-1.0.1.zip',
    features: [
      'No energy crystal purchase required',
      'Works on current and new saves',
      'Fully compatible with other mods',
      'Easy to install and configure',
      'No game balance issues'
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
            REPO MODS Download
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* R.E.P.O. Roles Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-blue-800/30 backdrop-blur-sm rounded-lg p-6 border border-blue-500/30 flex flex-col h-full"
          >
            <div className="flex-1">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-semibold flex items-center">
                  <FaUserAlt className="mr-3 text-blue-400" /> 
                  R.E.P.O. Roles
                </h3>
                <span className="text-sm bg-blue-500 px-2 py-1 rounded-full">NEW</span>
              </div>
              <p className="text-gray-200 mb-4">
                An exciting mod which adds player roles with unique abilities to the game.
              </p>
              <div className="mb-6">
                <h4 className="text-md font-medium mb-2 text-blue-300">Key features:</h4>
                <ul className="text-sm text-gray-300 space-y-1">
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-2">•</span>
                    <span>Random role assignment each game</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-2">•</span>
                    <span>7 unique roles with special abilities</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-2">•</span>
                    <span>Enhanced gameplay variety</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-auto">
              <Link 
                href="/repomod-REPORoles" 
                className="inline-flex w-full justify-center items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
              >
                <FiInfo className="mr-2" />
                View Details
              </Link>
            </div>
          </motion.div>

          {/* R.E.P.O. MorePlayers Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="bg-indigo-800/30 backdrop-blur-sm rounded-lg p-6 border border-indigo-500/30 flex flex-col h-full"
          >
            <div className="flex-1">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-semibold flex items-center">
                  <FaUsers className="mr-3 text-indigo-400" /> 
                  R.E.P.O. MorePlayers
                </h3>
                <span className="text-sm bg-indigo-500 px-2 py-1 rounded-full">NEW</span>
              </div>
              <p className="text-gray-200 mb-4">
                A mod that allows you to customize the maximum player count in your games.
              </p>
              <div className="mb-6">
                <h4 className="text-md font-medium mb-2 text-indigo-300">Key features:</h4>
                <ul className="text-sm text-gray-300 space-y-1">
                  <li className="flex items-start">
                    <span className="text-indigo-400 mr-2">•</span>
                    <span>Increase or decrease max player capacity</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-indigo-400 mr-2">•</span>
                    <span>Simple configuration via config file</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-indigo-400 mr-2">•</span>
                    <span>Compatible with other mods</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-auto">
              <Link 
                href="/repomod-MorePlayers" 
                className="inline-flex w-full justify-center items-center px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors"
              >
                <FiInfo className="mr-2" />
                View Details
              </Link>
            </div>
          </motion.div>

          {/* R.E.P.O. MoreStamina Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-green-800/30 backdrop-blur-sm rounded-lg p-6 border border-green-500/30 flex flex-col h-full"
          >
            <div className="flex-1">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-semibold flex items-center">
                  <FaRunning className="mr-3 text-green-400" /> 
                  R.E.P.O. MoreStamina
                </h3>
                <span className="text-sm bg-green-500 px-2 py-1 rounded-full">NEW</span>
              </div>
              <p className="text-gray-200 mb-4">
                Enhanced endurance system with realistic stamina mechanics.
              </p>
              <div className="mb-6">
                <h4 className="text-md font-medium mb-2 text-green-300">Key features:</h4>
                <ul className="text-sm text-gray-300 space-y-1">
                  <li className="flex items-start">
                    <span className="text-green-400 mr-2">•</span>
                    <span>Realistic stamina depletion system</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-400 mr-2">•</span>
                    <span>Weight-based stamina drain</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-400 mr-2">•</span>
                    <span>More strategic gameplay</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-auto">
              <Link 
                href="/repomod-MoreStamina" 
                className="inline-flex w-full justify-center items-center px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors"
              >
                <FiInfo className="mr-2" />
                View Details
              </Link>
            </div>
          </motion.div>

          {/* ShrinkerCart Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="bg-purple-800/30 backdrop-blur-sm rounded-lg p-6 border border-purple-500/30 flex flex-col h-full"
          >
            <div className="flex-1">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-semibold flex items-center">
                  <FiMinimize2 className="mr-3 text-purple-400" /> 
                  ShrinkerCart
                </h3>
                <span className="text-sm bg-purple-500 px-2 py-1 rounded-full">NEW</span>
              </div>
              <p className="text-gray-200 mb-4">
                Bigger the item better the shrink! Transform large objects into miniature versions.
              </p>
              <div className="mb-6">
                <h4 className="text-md font-medium mb-2 text-purple-300">Key features:</h4>
                <ul className="text-sm text-gray-300 space-y-1">
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-2">•</span>
                    <span>Transform large objects into miniature versions</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-2">•</span>
                    <span>Easier transport of valuable but bulky items</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-2">•</span>
                    <span>Restore items to normal size at extraction</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-auto">
              <Link 
                href="/repomod-ShrinkerCart" 
                className="inline-flex w-full justify-center items-center px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors"
              >
                <FiInfo className="mr-2" />
                View Details
              </Link>
            </div>
          </motion.div>

          {/* Enemy Location Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-red-800/30 backdrop-blur-sm rounded-lg p-6 border border-red-500/30 flex flex-col h-full"
          >
            <div className="flex-1">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-semibold flex items-center">
                  <FiTarget className="mr-3 text-red-400" /> 
                  Enemy Location
                </h3>
                <span className="text-sm bg-red-500 px-2 py-1 rounded-full">NEW</span>
              </div>
              <p className="text-gray-200 mb-4">
                Advanced tactical mod that helps track enemy movements within a limited range.
              </p>
              <div className="mb-6">
                <h4 className="text-md font-medium mb-2 text-red-300">Key features:</h4>
                <ul className="text-sm text-gray-300 space-y-1">
                  <li className="flex items-start">
                    <span className="text-red-400 mr-2">•</span>
                    <span>Real-time enemy position tracking</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-400 mr-2">•</span>
                    <span>Visual indicators for enemy proximity</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-400 mr-2">•</span>
                    <span>Works seamlessly in multiplayer</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-auto">
              <Link 
                href="/repomod-EnemyLocation" 
                className="inline-flex w-full justify-center items-center px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors"
              >
                <FiInfo className="mr-2" />
                View Details
              </Link>
            </div>
          </motion.div>

          {/* LegoGnomes Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.45 }}
            className="bg-yellow-800/30 backdrop-blur-sm rounded-lg p-6 border border-yellow-500/30 flex flex-col h-full"
          >
            <div className="flex-1">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-semibold flex items-center">
                  <FiMusic className="mr-3 text-yellow-400" /> 
                  LegoGnomes
                </h3>
                <span className="text-sm bg-yellow-500 px-2 py-1 rounded-full">NEW</span>
              </div>
              <p className="text-gray-200 mb-4">
                Changes the gnome's death sound to the lego brick breaking sound effect, which works perfectly with their death animation!
              </p>
              <div className="mb-6">
                <h4 className="text-md font-medium mb-2 text-yellow-300">Key features:</h4>
                <ul className="text-sm text-gray-300 space-y-1">
                  <li className="flex items-start">
                    <span className="text-yellow-400 mr-2">•</span>
                    <span>Satisfying lego brick sounds</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-400 mr-2">•</span>
                    <span>Perfect match for breaking animation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-400 mr-2">•</span>
                    <span>Simple but fun enhancement</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-auto">
              <Link 
                href="/repomod-LegoGnomes" 
                className="inline-flex w-full justify-center items-center px-4 py-2 bg-yellow-600 text-white rounded-md hover:bg-yellow-700 transition-colors"
              >
                <FiInfo className="mr-2" />
                View Details
              </Link>
            </div>
          </motion.div>
          
          {/* EvenMoreHead Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="bg-green-800/30 backdrop-blur-sm rounded-lg p-6 border border-green-500/30 flex flex-col h-full"
          >
            <div className="flex-1">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-semibold flex items-center">
                  <GiPartyHat className="mr-3 text-green-400" /> 
                  EvenMoreHead
                </h3>
                <span className="text-sm bg-green-500 px-2 py-1 rounded-full">NEW</span>
              </div>
              <p className="text-gray-200 mb-4">
                Adds several new models to the MoreHead mod with a wide variety of cosmetic options.
              </p>
              <div className="mb-6">
                <h4 className="text-md font-medium mb-2 text-green-300">Key features:</h4>
                <ul className="text-sm text-gray-300 space-y-1">
                  <li className="flex items-start">
                    <span className="text-green-400 mr-2">•</span>
                    <span>Over 70 different cosmetic models</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-400 mr-2">•</span>
                    <span>Special FX animations for some items</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-400 mr-2">•</span>
                    <span>Fun character customization options</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-auto">
              <Link 
                href="/repomod-EvenMoreHead" 
                className="inline-flex w-full justify-center items-center px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors"
              >
                <FiInfo className="mr-2" />
                View Details
              </Link>
            </div>
          </motion.div>
          
          {/* InfiniteEnergyCrystals Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.55 }}
            className="bg-purple-800/30 backdrop-blur-sm rounded-lg p-6 border border-purple-500/30 flex flex-col h-full"
          >
            <div className="flex-1">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-semibold flex items-center">
                  <FiDollarSign className="mr-3 text-purple-400" /> 
                  InfiniteEnergyCrystals
                </h3>
                <span className="text-sm bg-purple-500 px-2 py-1 rounded-full">NEW</span>
              </div>
              <p className="text-gray-200 mb-4">
                No more cash wasted on energy crystals!
              </p>
              <div className="mb-6">
                <h4 className="text-md font-medium mb-2 text-purple-300">Key features:</h4>
                <ul className="text-sm text-gray-300 space-y-1">
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-2">•</span>
                    <span>No energy crystal purchase required</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-2">•</span>
                    <span>Works on current and new saves</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-2">•</span>
                    <span>Fully compatible with other mods</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-auto">
              <Link 
                href="/repomod-InfiniteEnergyCrystals" 
                className="inline-flex w-full justify-center items-center px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors"
              >
                <FiInfo className="mr-2" />
                View Details
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 