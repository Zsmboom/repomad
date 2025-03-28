'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { FiDownload, FiCalendar, FiGlobe } from 'react-icons/fi';
import { IoLanguage } from 'react-icons/io5';
import { motion } from 'framer-motion';
import Link from 'next/link';
import RelatedMods from '@/components/RelatedMods';

export default function XUnityAutoTranslatorPage() {
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
                <IoLanguage className="mr-4 text-purple-400" /> 
                XUnity AutoTranslator
                <span className="ml-3 text-sm bg-purple-700 px-2 py-1 rounded-full">v5.4.4</span>
              </h1>
              
              <div className="flex items-center mb-6 text-gray-400">
                <FiCalendar className="mr-2" />
                <span>Last updated: 3 weeks ago</span>
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
                    Advanced Translation System for Unity Games
                  </h2>
                  
                  <p className="text-gray-200 mb-6 text-lg">
                    XUnity AutoTranslator is a powerful translation plugin designed for Unity-based games including R.E.P.O. It provides advanced automatic translation capabilities as well as tools for manual translation, allowing players to enjoy the game in their preferred language.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                    <div>
                      <h3 className="text-2xl font-medium mb-4 text-purple-300">Key Features:</h3>
                      <ul className="space-y-4">
                        <li className="bg-gray-900/50 p-4 rounded-md border border-purple-500/20">
                          <h4 className="text-xl font-semibold text-purple-400 mb-2">Automatic Translation</h4>
                          <p>Translates in-game text on-the-fly to your preferred language using various translation services.</p>
                        </li>
                        <li className="bg-gray-900/50 p-4 rounded-md border border-purple-500/20">
                          <h4 className="text-xl font-semibold text-purple-400 mb-2">Manual Translation Support</h4>
                          <p>Provides tools for creating and managing custom translations for more accurate localization.</p>
                        </li>
                        <li className="bg-gray-900/50 p-4 rounded-md border border-purple-500/20">
                          <h4 className="text-xl font-semibold text-purple-400 mb-2">Compatibility</h4>
                          <p>Works with numerous DLLs and other mods, specifically designed to support RTLC Russian Translation.</p>
                        </li>
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="text-2xl font-medium mb-4 text-purple-300">Benefits:</h3>
                      <ul className="space-y-4">
                        <li className="bg-gray-900/50 p-4 rounded-md border border-purple-500/20">
                          <h4 className="text-xl font-semibold text-purple-400 mb-2">Language Accessibility</h4>
                          <p>Makes R.E.P.O. accessible to players who prefer or need content in languages other than English.</p>
                        </li>
                        <li className="bg-gray-900/50 p-4 rounded-md border border-purple-500/20">
                          <h4 className="text-xl font-semibold text-purple-400 mb-2">Better Understanding</h4>
                          <p>Ensures players fully comprehend game mechanics, story elements, and instructions in their native language.</p>
                        </li>
                        <li className="bg-gray-900/50 p-4 rounded-md border border-purple-500/20">
                          <h4 className="text-xl font-semibold text-purple-400 mb-2">Dependency Solution</h4>
                          <p>Addresses "Package rejected - Invalid submission" errors for mods requiring translation functionality.</p>
                        </li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="bg-gray-900/50 p-6 rounded-md border border-purple-500/20 mb-8">
                    <h3 className="text-2xl font-medium mb-4 text-purple-300">About XUnity AutoTranslator:</h3>
                    <p className="text-gray-200 mb-4">
                      XUnity AutoTranslator is an advanced translation plugin originally designed for Unity-based games. This version has been specifically adapted to work with R.E.P.O. and addresses compatibility issues with numerous DLLs that use it during loading.
                    </p>
                    <p className="text-gray-200 mb-4">
                      The plugin aims to solve the "Package rejected - Invalid submission" errors that many localization mods encounter. It was primarily developed to support the RTLC Russian Translation initiative but can be used for any language translation needs.
                    </p>
                    <div className="bg-purple-800/30 p-4 rounded-md border border-purple-500/30 mt-6">
                      <h4 className="text-xl font-semibold text-purple-300 mb-2">Important Note:</h4>
                      <p className="text-gray-200">
                        If you're experiencing errors when updating localization, you can use this mod as a dependency and remove XUnity from your archive directly. This helps resolve conflicts and ensures proper functionality of translation features.
                      </p>
                    </div>
                  </div>
                  
                  <div className="bg-gray-900/50 p-6 rounded-md border border-purple-500/20 mb-8">
                    <h3 className="text-2xl font-medium mb-4 text-purple-300">How It Works:</h3>
                    <p className="text-gray-200 mb-4">
                      XUnity AutoTranslator operates by intercepting text rendering in the game and applying translations:
                    </p>
                    <ol className="list-decimal pl-5 space-y-2 text-gray-200">
                      <li>The plugin captures text before it's displayed on the screen</li>
                      <li>It checks for existing translations in custom translation files</li>
                      <li>If no manual translation exists, it can optionally use online translation services</li>
                      <li>The translated text is then rendered instead of the original</li>
                      <li>Translations can be cached for improved performance in future sessions</li>
                    </ol>
                    <p className="text-gray-200 mt-4">
                      The system can be configured to use different translation services, styling options, and behavior patterns through its configuration file.
                    </p>
                  </div>
                  
                  <div className="bg-gray-900/50 p-6 rounded-md border border-purple-500/20 mb-8">
                    <h3 className="text-2xl font-medium mb-4 text-purple-300">Installation:</h3>
                    <ol className="list-decimal pl-5 space-y-2 text-gray-200">
                      <li>First, ensure you have <a href="https://thunderstore.io/c/repo/p/BepInEx/BepInExPack/" className="text-purple-400 hover:underline" target="_blank" rel="noopener noreferrer">BepInExPack</a> installed.</li>
                      <li>Download the XUnity AutoTranslator mod from the link below.</li>
                      <li>Extract the downloaded zip file to your REPO game directory, or use a mod manager like <a href="https://www.overwolf.com/app/thunderstore-thunderstore_mod_manager" className="text-purple-400 hover:underline" target="_blank" rel="noopener noreferrer">Thunderstore Mod Manager</a>.</li>
                      <li>Launch the game and adjust the translation settings in the configuration file if needed.</li>
                      <li>For manual translations, you can create custom translation files according to the documentation.</li>
                    </ol>
                    <div className="mt-4 bg-purple-800/30 p-4 rounded-md border border-purple-500/30">
                      <h4 className="text-xl font-semibold text-purple-300 mb-2">For Mod Developers:</h4>
                      <p className="text-gray-200">
                        If you're developing localization mods, you can include XUnity AutoTranslator as a dependency in your mod instead of packaging the XUnity DLLs directly. This helps avoid the "Package rejected - Invalid submission" error.
                      </p>
                    </div>
                  </div>
                  
                  <div className="bg-gray-900/50 p-6 rounded-md border border-purple-500/20 mb-8">
                    <h3 className="text-2xl font-medium mb-4 text-purple-300">Configuration Options:</h3>
                    <p className="text-gray-200 mb-4">
                      XUnity AutoTranslator provides numerous configuration options to customize its behavior:
                    </p>
                    <ul className="list-disc pl-5 space-y-2 text-gray-200">
                      <li><span className="font-semibold text-purple-300">Translation Service:</span> Select which online translation service to use (if any)</li>
                      <li><span className="font-semibold text-purple-300">Source Language:</span> Specify the original language of the game text</li>
                      <li><span className="font-semibold text-purple-300">Target Language:</span> Choose which language to translate into</li>
                      <li><span className="font-semibold text-purple-300">Translation Styling:</span> Customize font, size, color, and other visual aspects of translated text</li>
                      <li><span className="font-semibold text-purple-300">Translation Files:</span> Configure paths and priorities for custom translation files</li>
                      <li><span className="font-semibold text-purple-300">Performance Settings:</span> Adjust caching behavior and translation timing</li>
                    </ul>
                    <p className="text-gray-200 mt-4">
                      Detailed configuration instructions are included in the documentation files that come with the mod.
                    </p>
                  </div>
                  
                  <div className="bg-gray-900/50 p-6 rounded-md border border-purple-500/20 mb-8">
                    <h3 className="text-2xl font-medium mb-4 text-purple-300">Compatibility:</h3>
                    <p className="text-gray-200 mb-4">
                      XUnity AutoTranslator is designed to be compatible with most other REPO mods. In fact, it serves as a compatibility solution for many localization mods. It works well with:
                    </p>
                    <ul className="list-disc pl-5 space-y-2 text-gray-200">
                      <li>All gameplay mods that don't directly modify text rendering</li>
                      <li>Most UI and visual enhancement mods</li>
                      <li>Official and community-made language packs</li>
                      <li>Other BepInEx plugins</li>
                    </ul>
                    <p className="text-gray-200 mt-4">
                      If you encounter any compatibility issues, try adjusting the loading order of your mods or check the configuration options for potential solutions.
                    </p>
                  </div>
                  
                  <a 
                    href="/downloads/repomod-XUnity_AutoTranslator-5.4.4.zip" 
                    className="inline-flex items-center px-8 py-4 bg-purple-700 text-white text-lg rounded-md hover:bg-purple-600 transition-colors"
                  >
                    <FiDownload className="mr-2" />
                    Download XUnity AutoTranslator v5.4.4
                  </a>
                  
                  <div className="mt-16">
                    <RelatedMods currentModId="xunityAutoTranslator" themeColor="purple" />
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