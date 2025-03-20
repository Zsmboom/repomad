'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center md:text-left"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              REPOMOD<span className="text-blue-600 dark:text-blue-400">[NEW]</span> - The most complete R.E.P.O mods
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-lg mx-auto md:mx-0">
              The premier collection of REPO MODS for the popular online co-op horror game. Our REPO MODS enhance your gameplay with expanded multiplayer options, allowing up to 6 players to enjoy improved physics-based interactions. REPO MODS are designed to transform your REPO experience with carefully crafted enhancements that respect the original game's vision.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Link href="/#download" className="btn btn-primary text-center" aria-label="Download REPO MODS">
                Get REPO MODS
              </Link>
              <Link href="/How-to-Install-REPO-Mods" className="btn bg-gray-200 text-gray-800 hover:bg-gray-300 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600 text-center" aria-label="Learn about REPO MODS installation">
                REPO MODS Guide
              </Link>
            </div>
          </motion.div>

          {/* Image/Animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative h-64 md:h-auto"
          >
            <div className="relative w-full h-full min-h-[300px] rounded-lg overflow-hidden">
              <Image 
                src="/images/screenshots/REPO-Game-Screenshot.jpg" 
                alt="REPO MODS Screenshot" 
                fill
                className="object-cover"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 