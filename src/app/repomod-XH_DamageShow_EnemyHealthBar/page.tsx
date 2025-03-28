'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { FaDownload, FaSkull, FaChartBar, FaExclamationCircle, FaCrosshairs } from 'react-icons/fa';
import { GiHealthNormal, GiBloodySword } from 'react-icons/gi';
import { motion } from 'framer-motion';
import Link from 'next/link';
import RelatedMods from '@/components/RelatedMods';

export default function XHDamageShowEnemyHealthBarPage() {
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
            <h1 className="text-4xl font-bold text-red-400 mb-2">XH DamageShow EnemyHealthBar</h1>
            <p className="text-gray-400">Version 1.0.1 · Last updated: 2 weeks ago</p>
          </div>

          {/* Mod description */}
          <div className="mb-12 max-w-3xl">
            <p className="text-lg mb-4">
              XH DamageShow EnemyHealthBar enhances your combat experience in R.E.P.O. by displaying enemy health bars and damage numbers in real-time. This mod provides crucial visual feedback during combat, helping you track your damage output and make tactical decisions based on enemy health status.
            </p>
          </div>

          {/* Key features */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-red-400">Key Features</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <motion.div 
                className="bg-gray-800 p-6 rounded-lg"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
              >
                <GiHealthNormal className="text-red-400 text-3xl mb-4" />
                <h3 className="text-xl font-bold mb-2">Enemy Health Bars</h3>
                <p>Displays clear health bars above enemies, allowing you to instantly see their remaining health during combat.</p>
              </motion.div>
              
              <motion.div 
                className="bg-gray-800 p-6 rounded-lg"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
              >
                <GiBloodySword className="text-red-400 text-3xl mb-4" />
                <h3 className="text-xl font-bold mb-2">Damage Numbers</h3>
                <p>Shows numerical damage values whenever you hit an enemy, giving you precise feedback on your weapon effectiveness.</p>
              </motion.div>

              <motion.div 
                className="bg-gray-800 p-6 rounded-lg"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
              >
                <FaCrosshairs className="text-red-400 text-3xl mb-4" />
                <h3 className="text-xl font-bold mb-2">Target Prioritization</h3>
                <p>Easily identify which enemies are closest to death, allowing for more efficient team coordination during combat.</p>
              </motion.div>

              <motion.div 
                className="bg-gray-800 p-6 rounded-lg"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
              >
                <FaExclamationCircle className="text-red-400 text-3xl mb-4" />
                <h3 className="text-xl font-bold mb-2">Critical Hit Indicators</h3>
                <p>Visually distinguishes critical hits from regular damage, helping you understand your critical hit performance.</p>
              </motion.div>
            </div>
          </div>

          {/* Overview and installation */}
          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <div>
              <h2 className="text-2xl font-bold mb-4 text-red-400">Mod Overview</h2>
              <p className="mb-4">
                XH DamageShow EnemyHealthBar addresses a significant gameplay gap in R.E.P.O. by providing visual feedback for combat encounters. In the base game, it can be difficult to gauge how much damage you're dealing or how close an enemy is to defeat.
              </p>
              <p className="mb-4">
                This mod implements a clean and intuitive UI that displays health bars above enemies and shows damage numbers that pop up when hits are registered. These visual elements are designed to be informative without being distracting, enhancing the combat experience while maintaining immersion.
              </p>
              <p>
                The mod is particularly valuable for team coordination, as all players can instantly see which enemies are weakened and prioritize targets accordingly. This leads to more efficient combat and improved teamwork during challenging encounters.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 text-red-400">Installation Guide</h2>
              <ol className="list-decimal pl-5 space-y-2">
                <li>Ensure you have the BepInEx framework installed.</li>
                <li>Download the XH DamageShow EnemyHealthBar mod file.</li>
                <li>Extract the contents of the zip file to your game's BepInEx/plugins folder.</li>
                <li>Launch the game, and the mod will load automatically.</li>
                <li>You should immediately see health bars above enemies and damage numbers during combat.</li>
              </ol>
              <div className="mt-6">
                <h3 className="font-bold mb-2 text-red-300">Compatibility Notes</h3>
                <p>This mod is compatible with most other R.E.P.O. mods and should work with any weapon or enemy type, including those added by other mods. It has been designed to have minimal performance impact, even in high-action scenarios.</p>
              </div>
            </div>
          </div>

          {/* Why you need this mod */}
          <div className="mb-12 bg-gray-800 p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-4 text-red-400">Why You Need This Mod</h2>
            <div className="space-y-4">
              <p>
                In standard R.E.P.O. gameplay, there's no clear way to tell how effective your attacks are or how much health enemies have remaining. This lack of information can lead to inefficient combat, wasted ammunition, and unnecessary risks.
              </p>
              <p>
                XH DamageShow EnemyHealthBar transforms the combat experience by providing vital information in real-time. Whether you're trying to determine which weapon is most effective against a particular enemy or coordinating with teammates to focus fire, this mod gives you the information you need to make tactical decisions.
              </p>
              <p>
                For players who enjoy optimizing their combat performance or those who simply want a more satisfying feedback loop when fighting enemies, this mod is an essential enhancement to the base game experience.
              </p>
            </div>
          </div>

          {/* Download button */}
          <div className="mb-16 text-center">
            <a 
              href="/downloads/repomod-XH_DamageShow_EnemyHealthBar-1.0.1.zip" 
              className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white py-4 px-8 rounded-lg font-bold text-xl transition transform hover:scale-105 shadow-lg"
            >
              <FaDownload />
              Download XH DamageShow EnemyHealthBar Mod
            </a>
          </div>

          {/* Related mods */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-red-400">Related Mods</h2>
            <RelatedMods currentModId="xhDamageShowEnemyHealthBar" themeColor="red" />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
} 