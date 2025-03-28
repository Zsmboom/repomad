'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { FiDownload, FiCalendar, FiMic, FiVolume2 } from 'react-icons/fi';
import { GiSpeaker } from 'react-icons/gi';
import { motion } from 'framer-motion';
import Link from 'next/link';
import RelatedMods from '@/components/RelatedMods';

export default function MimicPage() {
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
                <GiSpeaker className="mr-4 text-blue-400" /> 
                Mimic
                <span className="ml-3 text-sm bg-amber-700 px-2 py-1 rounded-full">v1.1.1</span>
              </h1>
              
              <div className="flex items-center mb-6 text-gray-400">
                <FiCalendar className="mr-2" />
                <span>Last updated: 3 hours ago</span>
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
                    Intensify Your Horror Experience with Voice-Mimicking Enemies!
                  </h2>
                  
                  <p className="text-gray-200 mb-6 text-lg">
                    Mimic is a Skinwalker-inspired mod for R.E.P.O that adds a terrifying new dimension to the game. This mod allows creatures to record your voice and your teammates' voices, then play them back during gameplay, creating an unsettling atmosphere and genuinely frightening moments during your expeditions.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                    <div>
                      <h3 className="text-2xl font-medium mb-4 text-blue-300">Core Features:</h3>
                      <ul className="space-y-4">
                        <li className="bg-gray-900/50 p-4 rounded-md border border-blue-500/20">
                          <h4 className="text-xl font-semibold text-blue-400 mb-2">Voice Recording System</h4>
                          <p>Records player voices at random intervals, creating a pool of voice clips that enemies can use.</p>
                        </li>
                        <li className="bg-gray-900/50 p-4 rounded-md border border-blue-500/20">
                          <h4 className="text-xl font-semibold text-blue-400 mb-2">Enemy Voice Mimicry</h4>
                          <p>Enemies will randomly play back recorded voice clips, creating confusion and fear during missions.</p>
                        </li>
                        <li className="bg-gray-900/50 p-4 rounded-md border border-blue-500/20">
                          <h4 className="text-xl font-semibold text-blue-400 mb-2">Configurable Settings</h4>
                          <p>Adjust recording intervals, playback frequency, and other settings to customize your experience.</p>
                        </li>
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="text-2xl font-medium mb-4 text-blue-300">Gameplay Impact:</h3>
                      <ul className="space-y-4">
                        <li className="bg-gray-900/50 p-4 rounded-md border border-blue-500/20">
                          <h4 className="text-xl font-semibold text-blue-400 mb-2">Heightened Fear Factor</h4>
                          <p>Hearing your own voice or your friends' voices coming from enemies creates a genuinely unsettling atmosphere.</p>
                        </li>
                        <li className="bg-gray-900/50 p-4 rounded-md border border-blue-500/20">
                          <h4 className="text-xl font-semibold text-blue-400 mb-2">Strategic Communication</h4>
                          <p>Forces players to be more strategic about when and what they say during missions to avoid creating usable voice clips.</p>
                        </li>
                        <li className="bg-gray-900/50 p-4 rounded-md border border-blue-500/20">
                          <h4 className="text-xl font-semibold text-blue-400 mb-2">Immersive Horror</h4>
                          <p>Adds a new layer of psychological horror to the game, making each encounter more intense and memorable.</p>
                        </li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="bg-gray-900/50 p-6 rounded-md border border-blue-500/20 mb-8">
                    <h3 className="text-2xl font-medium mb-4 text-blue-300">How It Works:</h3>
                    <p className="text-gray-200 mb-4">
                      Mimic creates an immersive and frightening experience through its unique voice recording and playback system:
                    </p>
                    <ol className="list-decimal pl-5 space-y-2 text-gray-200">
                      <li>The mod periodically records player voices in short clips (30-120 seconds by default).</li>
                      <li>These recordings are saved into a pool of available audio clips.</li>
                      <li>Creatures on the current level will randomly select clips from this pool to play back.</li>
                      <li>The audio playback creates the impression that enemies are mimicking player communication.</li>
                      <li>Basic speech detection ensures only meaningful voice clips are recorded.</li>
                    </ol>
                    <p className="text-gray-200 mt-4">
                      This system creates genuinely unsettling moments when players hear their own voices or their teammates' voices coming from creatures in the darkness, adding a psychological horror element to the game.
                    </p>
                  </div>
                  
                  <div className="bg-gray-900/50 p-6 rounded-md border border-blue-500/20 mb-8">
                    <h3 className="text-2xl font-medium mb-4 text-blue-300">Recent Improvements:</h3>
                    <p className="text-gray-200 mb-4">
                      The Mimic mod has seen significant improvements in its latest versions:
                    </p>
                    <ul className="list-disc pl-5 space-y-2 text-gray-200">
                      <li><span className="font-semibold text-blue-300">Version 1.1.0:</span> Complete overhaul of recording and playing clips, removal of third-party dependencies, and numerous bug fixes.</li>
                      <li><span className="font-semibold text-blue-300">Version 1.0.5:</span> Performance improvements and bug fixes for more stable operation.</li>
                      <li><span className="font-semibold text-blue-300">Version 1.0.3:</span> Added basic speech detection and configuration options.</li>
                      <li><span className="font-semibold text-blue-300">Version 1.0.1-1.0.2:</span> Fixed bugs and reduced lag when sending audio to clients.</li>
                    </ul>
                    <p className="text-gray-200 mt-4">
                      Each update has focused on improving performance and stability while maintaining the core horror experience that makes Mimic unique.
                    </p>
                  </div>
                  
                  <div className="bg-gray-900/50 p-6 rounded-md border border-blue-500/20 mb-8">
                    <h3 className="text-2xl font-medium mb-4 text-blue-300">Installation:</h3>
                    <ol className="list-decimal pl-5 space-y-2 text-gray-200">
                      <li>First, ensure you have <a href="https://thunderstore.io/c/repo/p/BepInEx/BepInExPack/" className="text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">BepInExPack</a> installed.</li>
                      <li>Download the Mimic mod from the link below.</li>
                      <li>Extract the downloaded zip file to your REPO game directory, or use a mod manager like <a href="https://www.overwolf.com/app/thunderstore-thunderstore_mod_manager" className="text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">Thunderstore Mod Manager</a>.</li>
                      <li>Launch the game and enjoy the enhanced horror experience!</li>
                    </ol>
                    <div className="mt-4 bg-blue-800/30 p-4 rounded-md border border-blue-500/30">
                      <h4 className="text-xl font-semibold text-blue-300 mb-2">Configuration Tips:</h4>
                      <p className="text-gray-200">
                        After installing, you can adjust the mod's settings through the configuration file. Be cautious when changing settings drastically, as it might affect performance or stability. The default settings are recommended for the best experience.
                      </p>
                    </div>
                  </div>
                  
                  <div className="bg-gray-900/50 p-6 rounded-md border border-blue-500/20 mb-8">
                    <h3 className="text-2xl font-medium mb-4 text-blue-300">Compatibility:</h3>
                    <p className="text-gray-200 mb-4">
                      Mimic works with most other REPO mods and does not conflict with the core gameplay mechanics. It's particularly compatible with:
                    </p>
                    <ul className="list-disc pl-5 space-y-2 text-gray-200">
                      <li>Combat and enemy enhancement mods</li>
                      <li>Visual and audio enhancement mods</li>
                      <li>Map and mission mods</li>
                    </ul>
                    <p className="text-gray-200 mt-4">
                      For the best experience, ensure all players in your session have Mimic installed to maintain consistency in how the feature works across the team.
                    </p>
                  </div>
                  
                  <div className="bg-gray-900/50 p-6 rounded-md border border-blue-500/20 mb-8">
                    <h3 className="text-2xl font-medium mb-4 text-blue-300">Planned Future Features:</h3>
                    <p className="text-gray-200 mb-4">
                      The developer has announced plans for future enhancements to the Mimic mod:
                    </p>
                    <ul className="list-disc pl-5 space-y-2 text-gray-200">
                      <li>Improved audio caching in memory (no more writing files)</li>
                      <li>Further optimizations for better performance</li>
                      <li>Enhanced audio processing to improve speech recognition</li>
                      <li>More customization options for fine-tuning the experience</li>
                    </ul>
                  </div>
                  
                  <a 
                    href="/downloads/repomod-Mimic-1.1.1.zip" 
                    className="inline-flex items-center px-8 py-4 bg-blue-700 text-white text-lg rounded-md hover:bg-blue-600 transition-colors"
                  >
                    <FiDownload className="mr-2" />
                    Download Mimic v1.1.1
                  </a>
                  
                  <div className="mt-16">
                    <RelatedMods currentModId="mimic" themeColor="blue" />
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