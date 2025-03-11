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
              Fisch <span className="text-blue-600 dark:text-blue-400">Macro</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-lg mx-auto md:mx-0">
              Enhance your Roblox Fisch gaming experience with automated operations, easy resource collection, and improved efficiency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Link href="/#download" className="btn btn-primary text-center" aria-label="Download Fisch Macro">
                Download Now
              </Link>
              <Link href="/#how-to" className="btn bg-gray-200 text-gray-800 hover:bg-gray-300 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600 text-center" aria-label="Learn how to use Fisch Macro">
                Learn More
              </Link>
              <a 
                href="https://www.roblox.com/games/16732694052/Fisch-2X-XP" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn bg-blue-500 text-white hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700 text-center"
                aria-label="Play Fisch on Roblox"
              >
                Play Fisch
              </a>
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
                src="/images/hero/fisch-hero.jpg" 
                alt="Fisch Game Screenshot" 
                fill
                className="object-cover"
                priority
              />
            </div>
          </motion.div>
        </div>

        {/* Stats or Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
        >
          <div>
            <p className="text-3xl font-bold text-blue-600 dark:text-blue-400">10,000+</p>
            <p className="text-gray-600 dark:text-gray-300">Users</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-blue-600 dark:text-blue-400">4.8/5</p>
            <p className="text-gray-600 dark:text-gray-300">User Rating</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-blue-600 dark:text-blue-400">200%</p>
            <p className="text-gray-600 dark:text-gray-300">Efficiency Boost</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-blue-600 dark:text-blue-400">24/7</p>
            <p className="text-gray-600 dark:text-gray-300">Support</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 