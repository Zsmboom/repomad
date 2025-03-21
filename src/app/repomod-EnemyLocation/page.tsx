'use client';

import { motion } from 'framer-motion';
import { FiDownload, FiTarget, FiSettings, FiMap, FiInfo, FiArrowLeft } from 'react-icons/fi';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import RelatedMods from '@/components/RelatedMods';

export default function EnemyLocationMod() {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col">
      <Header />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-gray-800/70 backdrop-blur-sm rounded-lg p-8 border border-red-500/30 mb-8"
        >
          <div className="mb-4">
            <Link href="/#download" className="inline-flex items-center text-red-400 hover:text-red-300 transition-colors">
              <FiArrowLeft className="mr-2" />
              Back to all mods
            </Link>
          </div>
          
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-6">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-2 flex items-center">
                <FiTarget className="mr-3 text-red-500" /> 
                Enemy Location
              </h1>
              <p className="text-gray-400 mb-2">Version 1.0.3</p>
              <p className="text-sm text-gray-500">Last updated: March 18, 2023</p>
            </div>
          </div>
          
          <div className="bg-gray-900/50 p-6 rounded-lg mb-8 border border-red-500/20">
            <p className="text-xl text-gray-300 mb-6">
              Enhance your REPO experience with our premium REPO MODS collection. These REPO MODS add exciting new features and customization options to improve your REPO gameplay. All REPO MODS are fully compatible with the latest version of REPO and receive regular updates. Before using mods, you need to install <a href="https://thunderstore.io/c/repo/p/BepInEx/BepInExPack/" className="text-red-400 hover:underline" target="_blank" rel="noopener noreferrer">BepInExPack</a> and <a href="https://www.overwolf.com/app/thunderstore-thunderstore_mod_manager" className="text-red-400 hover:underline" target="_blank" rel="noopener noreferrer">Thunderstore Mod Manager</a>. For detailed installation instructions, please check our <Link href="/How-to-Install-REPO-Mods" className="text-red-400 hover:underline">installation guide</Link>.
            </p>
          </div>
          
          <div className="prose prose-invert max-w-none">
            <p className="text-xl text-gray-300 mb-6">
              Enemy Location is an advanced tactical mod that enhances your situational awareness by providing real-time information about enemy positions. This mod gives you a significant tactical advantage when navigating dangerous areas, especially in later stages of the game.
            </p>

            <h2 className="text-2xl font-bold text-red-400 mb-4 mt-8 flex items-center">
              <FiMap className="mr-2" /> Key Features
            </h2>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start">
                <span className="text-red-500 mr-2 mt-1">•</span>
                <span><strong className="text-red-400">Real-time enemy tracking:</strong> See the approximate positions of enemies within a configurable range.</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2 mt-1">•</span>
                <span><strong className="text-red-400">Visual indicators:</strong> Intuitive UI displays that show enemy proximity with directional indicators.</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2 mt-1">•</span>
                <span><strong className="text-red-400">Range customization:</strong> Configure the tracking range to suit your playstyle.</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2 mt-1">•</span>
                <span><strong className="text-red-400">Multiplayer compatible:</strong> Works perfectly in multiplayer sessions without causing desync.</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2 mt-1">•</span>
                <span><strong className="text-red-400">UI customization:</strong> Adjust the appearance and position of tracking indicators.</span>
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-red-400 mb-4 mt-8 flex items-center">
              <FiInfo className="mr-2" /> Update History
            </h2>
            <div className="bg-gray-700/50 rounded-lg p-4 mb-6">
              <h3 className="text-lg font-semibold text-red-300 mb-2">v1.0.3 (Latest)</h3>
              <ul className="space-y-2 pl-4">
                <li className="text-sm text-gray-300">• Fixed a critical bug where enemies would sometimes not appear on radar when at the edge of the detection range</li>
                <li className="text-sm text-gray-300">• Optimized performance to reduce FPS impact</li>
                <li className="text-sm text-gray-300">• Added configuration option to adjust UI transparency</li>
              </ul>
            </div>
            <div className="bg-gray-700/50 rounded-lg p-4 mb-6">
              <h3 className="text-lg font-semibold text-red-300 mb-2">v1.0.2</h3>
              <ul className="space-y-2 pl-4">
                <li className="text-sm text-gray-300">• Added support for the new enemy types introduced in the latest game update</li>
                <li className="text-sm text-gray-300">• Improved the accuracy of distance indicators</li>
                <li className="text-sm text-gray-300">• Fixed compatibility issues with other UI mods</li>
              </ul>
            </div>
            <div className="bg-gray-700/50 rounded-lg p-4 mb-6">
              <h3 className="text-lg font-semibold text-red-300 mb-2">v1.0.1</h3>
              <ul className="space-y-2 pl-4">
                <li className="text-sm text-gray-300">• Added color-coding for different enemy types</li>
                <li className="text-sm text-gray-300">• Fixed issues with radar not updating in real-time</li>
                <li className="text-sm text-gray-300">• Added compatibility with widescreen displays</li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold text-red-400 mb-4 mt-8 flex items-center">
              <FiSettings className="mr-2" /> Configuration
            </h2>
            <p className="mb-4">
              Enemy Location offers several configuration options that can be adjusted in the <code className="bg-gray-700 px-2 py-1 rounded text-red-300">config.json</code> file:
            </p>
            <div className="bg-gray-700/50 rounded-lg p-4 mb-6 overflow-x-auto">
              <pre className="text-sm">
{`{
  "radarEnabled": true,         // Enable or disable the radar
  "detectionRange": 100,        // Range in meters (50-200)
  "uiScale": 1.0,               // Size of the radar UI (0.5-2.0)
  "uiOpacity": 0.8,             // Transparency of the UI (0.1-1.0)
  "uiPosition": "top-right",    // Position on screen (top-left, top-right, bottom-left, bottom-right)
  "showDistance": true,         // Show distance to enemies
  "showDirection": true,        // Show directional indicators
  "colorByType": true           // Use different colors for enemy types
}`}
              </pre>
            </div>

            <h2 className="text-2xl font-bold text-red-400 mb-4 mt-8">Compatibility</h2>
            <p className="mb-4">
              Enemy Location is compatible with all major mods including:
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-start">
                <span className="text-red-500 mr-2 mt-1">•</span>
                <span>R.E.P.O. Roles</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2 mt-1">•</span>
                <span>R.E.P.O. MorePlayers</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2 mt-1">•</span>
                <span>R.E.P.O. MoreStamina</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2 mt-1">•</span>
                <span>ShrinkerCart</span>
              </li>
            </ul>

            <div className="mt-8 p-4 bg-red-900/30 border border-red-500/40 rounded-lg">
              <h3 className="text-lg font-semibold mb-2">Installation Instructions</h3>
              <p className="text-sm mb-3">
                1. Install <a href="https://thunderstore.io/c/repo/p/BepInEx/BepInExPack/" className="text-red-400 hover:underline" target="_blank" rel="noopener noreferrer">BepInExPack</a> if you haven't already.
              </p>
              <p className="text-sm mb-3">
                2. Extract the contents of the downloaded zip file to your game's BepInEx/plugins folder.
              </p>
              <p className="text-sm">
                3. Start the game and configure the mod settings in the config file located in BepInEx/config/EnemyLocation.cfg.
              </p>
            </div>
            
            <div className="mt-12 flex justify-center">
              <Link 
                href="/downloads/repo-Enemy_Location-1.0.3.zip" 
                className="inline-flex items-center px-8 py-4 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors text-lg"
                download
              >
                <FiDownload className="mr-2" />
                Download Enemy Location v1.0.3
              </Link>
            </div>
            
            <RelatedMods currentModId="enemyLocation" themeColor="red" />
          </div>
        </motion.div>
      </main>
      
      <Footer />
    </div>
  );
} 