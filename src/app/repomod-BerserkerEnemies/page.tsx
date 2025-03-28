'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { FaDownload, FaRunning, FaBolt, FaSkull, FaExclamationTriangle, FaFire } from 'react-icons/fa';
import { GiMuscleUp, GiBattleGear, GiHealthNormal, GiAngryEyes } from 'react-icons/gi';
import { motion } from 'framer-motion';
import Link from 'next/link';
import RelatedMods from '@/components/RelatedMods';

export default function BerserkerEnemiesPage() {
  return (
    <>
      <Header />
      <main className="bg-gray-900 text-white min-h-screen">
        {/* Back button and title */}
        <div className="container mx-auto px-4 py-8">
          <Link 
            href="/repo-mods-Download" 
            className="text-gray-400 hover:text-red-400 transition mb-4 flex items-center gap-2"
          >
            ← Back to all mods
          </Link>
          
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-red-500 mb-2">Berserker Enemies</h1>
            <p className="text-gray-400">Version 1.0.1 · Last updated: 2 weeks ago</p>
          </div>

          {/* Mod description */}
          <div className="mb-12 max-w-3xl">
            <p className="text-lg mb-4">
              Berserker Enemies transforms the combat experience in R.E.P.O. by introducing dynamic enemy behavior. When enemies take damage, they enter a rage state, increasing their speed and attack damage while showing visual indicators of their fury. This mod adds a new layer of challenge and strategy to combat encounters.
            </p>
          </div>

          {/* Key features */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-red-500">Key Features</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <motion.div 
                className="bg-gray-800 p-6 rounded-lg"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
              >
                <GiAngryEyes className="text-red-500 text-3xl mb-4" />
                <h3 className="text-xl font-bold mb-2">Rage Mechanics</h3>
                <p>Enemies become enraged when taking damage, gaining increased speed and attack power the lower their health gets.</p>
              </motion.div>
              
              <motion.div 
                className="bg-gray-800 p-6 rounded-lg"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
              >
                <GiHealthNormal className="text-red-500 text-3xl mb-4" />
                <h3 className="text-xl font-bold mb-2">Visual Health Indicators</h3>
                <p>Dynamic health bars show enemy rage levels with color shifts from green to intense red as they become more enraged.</p>
              </motion.div>

              <motion.div 
                className="bg-gray-800 p-6 rounded-lg"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
              >
                <FaRunning className="text-red-500 text-3xl mb-4" />
                <h3 className="text-xl font-bold mb-2">Aggression Scaling</h3>
                <p>Enemy aggression scales with difficulty level and current health, creating more intense encounters in higher difficulties.</p>
              </motion.div>

              <motion.div 
                className="bg-gray-800 p-6 rounded-lg"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
              >
                <GiBattleGear className="text-red-500 text-3xl mb-4" />
                <h3 className="text-xl font-bold mb-2">Customizable Settings</h3>
                <p>Configure rage thresholds, speed and damage multipliers, and visual effects through a simple configuration file.</p>
              </motion.div>
            </div>
          </div>

          {/* Overview and installation */}
          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <div>
              <h2 className="text-2xl font-bold mb-4 text-red-500">Mod Overview</h2>
              <p className="mb-4">
                Berserker Enemies fundamentally changes how combat encounters play out in R.E.P.O. by adding a dynamic enemy response system. Rather than enemies maintaining consistent behavior throughout a fight, they adapt and become more aggressive as they take damage.
              </p>
              <p className="mb-4">
                When an enemy's health drops below certain thresholds, they enter progressive rage states. These states are visually indicated by changes in the enemy's appearance and health bar color, allowing players to gauge the threat level at a glance.
              </p>
              <p>
                The mod balances difficulty by scaling the rage effects proportionally to the base difficulty level, ensuring that the challenge remains appropriate regardless of your chosen difficulty setting. This creates a more engaging and strategic combat experience that rewards careful planning and precise execution.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 text-red-500">Installation Guide</h2>
              <ol className="list-decimal pl-5 space-y-2">
                <li>Ensure you have the BepInEx framework installed.</li>
                <li>Download the Berserker Enemies mod file.</li>
                <li>Extract the contents of the zip file to your game's BepInEx/plugins folder.</li>
                <li>For compatibility with health display mods, ensure you have the latest version.</li>
                <li>Start the game and prepare for more challenging enemy encounters!</li>
              </ol>
              <div className="mt-6">
                <h3 className="font-bold mb-2 text-red-400">Compatibility Notes</h3>
                <p>This mod is compatible with most other R.E.P.O. mods, but may have interaction effects with other mods that alter enemy behavior or health displays. Works particularly well with XH_DamageShow_EnemyHealthBar for enhanced visual feedback.</p>
              </div>
            </div>
          </div>

          {/* Rage Effects */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-red-500">Rage Effects</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gray-800 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-2 text-red-400">Low Rage (75% Health)</h3>
                <p className="mb-2">Enemies move 10% faster and deal 15% more damage, with slight visual effects.</p>
                <p className="text-sm text-gray-400">Health Bar: Yellow</p>
              </div>
              
              <div className="bg-gray-800 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-2 text-red-400">Medium Rage (50% Health)</h3>
                <p className="mb-2">Enemies move 25% faster and deal 30% more damage, with noticeable visual effects.</p>
                <p className="text-sm text-gray-400">Health Bar: Orange</p>
              </div>
              
              <div className="bg-gray-800 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-2 text-red-400">High Rage (25% Health)</h3>
                <p className="mb-2">Enemies move 40% faster and deal 50% more damage, with intense visual effects.</p>
                <p className="text-sm text-gray-400">Health Bar: Bright Red</p>
              </div>
            </div>
          </div>

          {/* Why you need this mod */}
          <div className="mb-12 bg-gray-800 p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-4 text-red-500">Why You Need This Mod</h2>
            <div className="space-y-4">
              <p>
                In standard R.E.P.O. gameplay, enemies maintain consistent behavior regardless of their health state. This predictability can make combat encounters feel repetitive and less challenging over time.
              </p>
              <p>
                Berserker Enemies addresses this by introducing a dynamic response system that makes every combat encounter unique and unpredictable. Enemies that are close to defeat become the most dangerous, creating tense moments and forcing players to adapt their strategies on the fly.
              </p>
              <p>
                This mod is perfect for players looking for a more challenging and engaging combat experience that rewards skill and adaptability. The visual indicators also add a layer of immersion, making the game world feel more responsive and alive.
              </p>
            </div>
          </div>

          {/* Download button */}
          <div className="mb-16 text-center">
            <a 
              href="/downloads/repomod-BerserkerEnemies-1.0.1.zip" 
              className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white py-4 px-8 rounded-lg font-bold text-xl transition transform hover:scale-105 shadow-lg"
            >
              <FaDownload />
              Download Berserker Enemies Mod
            </a>
          </div>

          {/* Related mods */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-red-500">Related Mods</h2>
            <RelatedMods currentModId="berserkerEnemies" themeColor="red" />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
} 