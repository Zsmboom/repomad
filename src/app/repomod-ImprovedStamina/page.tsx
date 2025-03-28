'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { FaDownload, FaRunning, FaClock, FaSlidersH, FaCog } from 'react-icons/fa';
import { RiTimerFlashLine, RiSpeedUpLine } from 'react-icons/ri';
import { motion } from 'framer-motion';
import Link from 'next/link';
import RelatedMods from '@/components/RelatedMods';

export default function ImprovedStaminaPage() {
  return (
    <>
      <Header />
      <main className="bg-gray-900 text-white min-h-screen">
        {/* Back button and title */}
        <div className="container mx-auto px-4 py-8">
          <Link 
            href="/repo-mods-Download" 
            className="text-gray-400 hover:text-blue-400 transition mb-4 flex items-center gap-2"
          >
            ← Back to all mods
          </Link>
          
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-blue-400 mb-2">Improved Stamina</h1>
            <p className="text-gray-400">Version 1.2.0 · Last updated: 2 weeks ago</p>
          </div>

          {/* Mod description */}
          <div className="mb-12 max-w-3xl">
            <p className="text-lg mb-4">
              Improved Stamina enhances the stamina regeneration system in R.E.P.O. by introducing a dynamic regeneration mechanic. Instead of the default recharge behavior, this mod provides gradual stamina recovery that scales over time, creating a more natural and responsive stamina system.
            </p>
          </div>

          {/* Key features */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-blue-400">Key Features</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <motion.div 
                className="bg-gray-800 p-6 rounded-lg"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
              >
                <RiTimerFlashLine className="text-blue-400 text-3xl mb-4" />
                <h3 className="text-xl font-bold mb-2">Dynamic Stamina Recovery</h3>
                <p>Gradual stamina regeneration that starts after a short delay when you stop sprinting, providing a more natural recovery experience.</p>
              </motion.div>
              
              <motion.div 
                className="bg-gray-800 p-6 rounded-lg"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
              >
                <RiSpeedUpLine className="text-blue-400 text-3xl mb-4" />
                <h3 className="text-xl font-bold mb-2">Scaling Regeneration Rate</h3>
                <p>Over time, stamina regeneration increases up to the maximum rate, allowing for more efficient recovery after longer rest periods.</p>
              </motion.div>

              <motion.div 
                className="bg-gray-800 p-6 rounded-lg"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
              >
                <FaSlidersH className="text-blue-400 text-3xl mb-4" />
                <h3 className="text-xl font-bold mb-2">Fully Configurable</h3>
                <p>Adjust all aspects of the stamina system through the config file, including max regen rate, ramp-up time, and delay before regeneration.</p>
              </motion.div>

              <motion.div 
                className="bg-gray-800 p-6 rounded-lg"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
              >
                <FaRunning className="text-blue-400 text-3xl mb-4" />
                <h3 className="text-xl font-bold mb-2">Sprint Drain Control</h3>
                <p>Customize the sprint stamina drain multiplier to balance the game according to your preference.</p>
              </motion.div>
            </div>
          </div>

          {/* Overview and installation */}
          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <div>
              <h2 className="text-2xl font-bold mb-4 text-blue-400">Mod Overview</h2>
              <p className="mb-4">
                Improved Stamina addresses one of the common gameplay frustrations in R.E.P.O.: the default stamina regeneration system. In the base game, stamina recovery feels abrupt and doesn't scale naturally with rest time.
              </p>
              <p className="mb-4">
                This mod implements a more realistic and satisfying stamina system. After stopping sprinting, there's a short configurable delay (default 0.5 seconds) before stamina begins to regenerate. Then, over a defined period (default 3 seconds), the regeneration rate gradually increases to the maximum value.
              </p>
              <p>
                The result is a more natural and responsive stamina system that rewards strategic movement and proper stamina management. Players can fine-tune all aspects of the system through the configuration file to match their preferred gameplay style.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 text-blue-400">Installation Guide</h2>
              <ol className="list-decimal pl-5 space-y-2">
                <li>Ensure you have the BepInEx framework installed.</li>
                <li>Download the Improved Stamina mod file.</li>
                <li>Extract the contents of the zip file to your game's BepInEx/plugins folder.</li>
                <li>Launch the game once to generate the configuration file.</li>
                <li>To customize settings, locate and edit BepInEx/config/ImprovedStamina.cfg.</li>
                <li>Restart the game to apply any configuration changes.</li>
              </ol>
              <div className="mt-6">
                <h3 className="font-bold mb-2 text-blue-300">Configuration Options</h3>
                <ul className="list-disc pl-5 space-y-1 text-sm">
                  <li><span className="font-semibold">MaxRegenRate</span>: The maximum stamina regeneration multiplier (Default: 8.0)</li>
                  <li><span className="font-semibold">RegenRampUpTime</span>: Time in seconds for regeneration to reach max speed (Default: 3.0)</li>
                  <li><span className="font-semibold">DelayBeforeRegen</span>: Seconds after stopping sprint before regen starts (Default: 0.5)</li>
                  <li><span className="font-semibold">SprintDrainMultiplier</span>: Multiplier for stamina drain when sprinting (Default: 1.0)</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Why you need this mod */}
          <div className="mb-12 bg-gray-800 p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-4 text-blue-400">Why You Need This Mod</h2>
            <div className="space-y-4">
              <p>
                In standard R.E.P.O. gameplay, the stamina system can feel restrictive and unnatural. The abrupt regeneration doesn't reward players for strategic pauses or proper stamina management, leading to a more frustrating experience during intense missions.
              </p>
              <p>
                Improved Stamina creates a more responsive and realistic stamina system that enhances the game's immersion. By introducing gradual scaling recovery, it rewards players who intelligently manage their stamina resources during critical moments.
              </p>
              <p>
                With full configuration options, you can fine-tune the system to match your exact preferences. Whether you want a more forgiving experience with faster regeneration or a more challenging setup with limited stamina recovery, this mod gives you the tools to create your ideal stamina system.
              </p>
            </div>
          </div>

          {/* Download button */}
          <div className="mb-16 text-center">
            <a 
              href="/downloads/repomod-ImprovedStamina-1.2.0.zip" 
              className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white py-4 px-8 rounded-lg font-bold text-xl transition transform hover:scale-105 shadow-lg"
            >
              <FaDownload />
              Download Improved Stamina Mod
            </a>
          </div>

          {/* Related mods */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-blue-400">Related Mods</h2>
            <RelatedMods currentModId="improvedStamina" themeColor="blue" />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
} 