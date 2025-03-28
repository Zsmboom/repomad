'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export function DownloadHeader() {
  return (
    <>
      <motion.h2 
        className="section-title text-center mb-6 text-4xl font-bold text-amber-400"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        REPO MODS Download
      </motion.h2>
      
      <motion.div
        className="text-center mb-10 max-w-3xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <p className="mb-4 text-lg leading-relaxed">
          Enhance your REPO experience with our premium <span className="font-semibold text-amber-400">REPO MODS</span> collection. These <span className="font-semibold text-amber-400">REPO MODS</span> add exciting new features and customization options to improve your REPO gameplay. All <span className="font-semibold text-amber-400">REPO MODS</span> are fully compatible with the latest version of REPO and receive regular updates. Before using mods, you need to install <a href="https://thunderstore.io/package/download/BepInEx/BepInExPack/5.4.2100/" className="text-blue-400 hover:text-blue-300 hover:underline" target="_blank" rel="noopener noreferrer">BepInExPack</a> and <a href="https://www.overwolf.com/app/thunderstore-thunderstore_mod_manager" className="text-blue-400 hover:text-blue-300 hover:underline" target="_blank" rel="noopener noreferrer">Thunderstore Mod Manager</a>. For detailed installation instructions, please check our <Link href="/How-to-Install-REPO-Mods" className="text-blue-400 hover:text-blue-300 hover:underline">installation guide</Link>.
        </p>
        <div className="bg-amber-900/50 border border-amber-700 p-4 rounded-lg">
          <h3 className="font-semibold mb-2 text-xl text-amber-400">Coming Soon</h3>
          <p className="text-lg">
            We check for updates daily and add at least 5 new mods twice a week! Stay tuned for new gameplay features, visual enhancements, quality of life improvements, and much more. Bookmark this site to discover the latest REPO MODS as soon as they're released!
          </p>
        </div>
      </motion.div>
    </>
  );
} 