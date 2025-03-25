'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { FaDownload, FaGithub, FaVolumeUp, FaComment, FaUserFriends, FaHeadset } from 'react-icons/fa';
import { IoMdSettings } from 'react-icons/io';
import { motion } from 'framer-motion';
import Link from 'next/link';
import RelatedMods from '@/components/RelatedMods';

export default function DeadTTSPage() {
  return (
    <>
      <Header />
      <main className="bg-gray-900 text-white min-h-screen">
        {/* Back button and title */}
        <div className="container mx-auto px-4 py-8">
          <Link 
            href="/#mods" 
            className="text-gray-400 hover:text-purple-400 transition mb-4 flex items-center gap-2"
          >
            ← Back to all mods
          </Link>
          
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-purple-400 mb-2">Dead TTS</h1>
            <p className="text-gray-400">Version 1.2.1 · Last updated: 2 weeks ago</p>
          </div>

          {/* Mod description */}
          <div className="mb-12 max-w-3xl">
            <p className="text-lg mb-4">
              Dead TTS is an innovative mod that allows deceased players to communicate with surviving teammates through text-to-speech (TTS) with directional audio and visual cues. This enhances team cooperation and gameplay experience, allowing interaction even after death.
            </p>
          </div>

          {/* Key features */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-purple-400">Key Features</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <motion.div 
                className="bg-gray-800 p-6 rounded-lg"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
              >
                <FaVolumeUp className="text-purple-400 text-3xl mb-4" />
                <h3 className="text-xl font-bold mb-2">Directional Audio</h3>
                <p>Messages from dead players are transmitted through directional audio, helping surviving players identify the source of information.</p>
              </motion.div>
              
              <motion.div 
                className="bg-gray-800 p-6 rounded-lg"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
              >
                <FaComment className="text-purple-400 text-3xl mb-4" />
                <h3 className="text-xl font-bold mb-2">Visual Indicators</h3>
                <p>Complementing the audio, visual indicators show which player is speaking, enhancing immersion.</p>
              </motion.div>

              <motion.div 
                className="bg-gray-800 p-6 rounded-lg"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
              >
                <FaUserFriends className="text-purple-400 text-3xl mb-4" />
                <h3 className="text-xl font-bold mb-2">Enhanced Teamwork</h3>
                <p>Even after death, players can continue to participate in the game, providing valuable information to the team.</p>
              </motion.div>

              <motion.div 
                className="bg-gray-800 p-6 rounded-lg"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
              >
                <IoMdSettings className="text-purple-400 text-3xl mb-4" />
                <h3 className="text-xl font-bold mb-2">Customizable Settings</h3>
                <p>Adjust TTS volume, voice type, and other parameters to suit personal preferences.</p>
              </motion.div>
            </div>
          </div>

          {/* Overview and installation */}
          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <div>
              <h2 className="text-2xl font-bold mb-4 text-purple-400">Mod Overview</h2>
              <p className="mb-4">
                The Dead TTS mod completely transforms the multiplayer experience in R.E.P.O. by giving deceased players new communication abilities. When a player dies, they can use text input which the system automatically converts to speech and transmits to surviving teammates.
              </p>
              <p className="mb-4">
                This feature is invaluable for providing critical information about dangers, enemy positions, or hidden resources, enhancing teamwork and reducing the boredom after death.
              </p>
              <p>
                The mod also includes various voice options and volume controls, allowing players to adjust settings according to their preferences.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 text-purple-400">Installation Guide</h2>
              <ol className="list-decimal pl-5 space-y-2">
                <li>Ensure you have the BepInEx framework installed.</li>
                <li>Download the Dead TTS mod file.</li>
                <li>Extract the contents of the zip file to your game's BepInEx/plugins folder.</li>
                <li>Launch the game, and the mod will load automatically.</li>
                <li>Use the default key T to open chat, type your message, and the text will automatically be converted to speech.</li>
              </ol>
              <div className="mt-6">
                <h3 className="font-bold mb-2 text-purple-300">Compatibility Notes</h3>
                <p>This mod is compatible with most other R.E.P.O. mods, including observation mods like Freecam Spectate, providing a comprehensive post-death experience.</p>
              </div>
            </div>
          </div>

          {/* Why you need this mod */}
          <div className="mb-12 bg-gray-800 p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-4 text-purple-400">Why You Need This Mod</h2>
            <div className="space-y-4">
              <p>
                In standard R.E.P.O. gameplay, once a player dies, they lose the ability to communicate with teammates and can only passively observe. This not only reduces game engagement but also wastes valuable intelligence that dead players could provide.
              </p>
              <p>
                The Dead TTS mod solves this problem by creating a more collaborative and immersive environment where all players can continue to participate in missions, regardless of whether they're alive or dead. This design makes teamwork a truly continuous element of the gaming experience.
              </p>
              <p>
                For players who enjoy cooperative, strategic gameplay, Dead TTS is an essential enhancement.
              </p>
            </div>
          </div>

          {/* Download button */}
          <div className="mb-16 text-center">
            <Link 
              href="/#download" 
              className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white py-4 px-8 rounded-lg font-bold text-xl transition transform hover:scale-105 shadow-lg"
            >
              <FaDownload />
              Download Dead TTS Mod
            </Link>
          </div>

          {/* Related mods */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-purple-400">Related Mods</h2>
            <RelatedMods currentModId="deadTTS" themeColor="purple" />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
} 