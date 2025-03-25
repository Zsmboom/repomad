"use client";

import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FiUsers, FiZap, FiSettings, FiCpu, FiBox, FiCode, FiStar } from 'react-icons/fi';

// 新增mod列表数据
const newMods = [
  {
    name: "DeadTTS",
    description: "Hear TTS voice from dead players with directional audio",
    color: "bg-purple-500",
    link: "/repomod-DeadTTS"
  },
  {
    name: "FreecamSpectate",
    description: "Fly around freely while spectating your teammates",
    color: "bg-blue-500",
    link: "/repomod-FreecamSpectate"
  },
  {
    name: "Lethal Plushies",
    description: "Adds cute plushies of various Lethal Company enemies",
    color: "bg-green-500",
    link: "/repomod-Lethal_Plushies"
  },
  {
    name: "CustomColors",
    description: "Customize your character with RGB color sliders",
    color: "bg-red-500",
    link: "/repomod-CustomColors"
  },
  {
    name: "FovUpdate",
    description: "Adjust your FOV and screen settings for better visibility",
    color: "bg-amber-500",
    link: "/repomod-FovUpdate"
  },
  {
    name: "Mimic",
    description: "Enemies can mimic player voices for a scarier experience",
    color: "bg-indigo-500",
    link: "/repomod-Mimic"
  },
  {
    name: "Cart Lights",
    description: "Adds lights to the front of medium and pocket carts",
    color: "bg-yellow-500",
    link: "/repomod-Cart_Lights_MelanieMelicious"
  }
];

const features = [
  {
    icon: <FiStar className="h-8 w-8 text-amber-500" />,
    title: 'Latest REPO MODS Updates',
    description: 'Experience our newest exciting mods: DeadTTS (TTS voices from dead players), FreecamSpectate (free camera while spectating), Lethal Plushies, CustomColors (RGB color customization), FovUpdate (FOV adjustment) and Mimic (enemy voice mimicking)!'
  },
  {
    icon: <FiBox className="h-8 w-8 text-blue-500" />,
    title: 'REPO MODS Physics System',
    description: 'Experience improved object interaction with our REPO MODS refined physics system that makes handling valuable items more realistic, intuitive, and responsive in the REPO game environment.'
  },
  {
    icon: <FiUsers className="h-8 w-8 text-blue-500" />,
    title: 'REPO MODS Co-op Enhancement',
    description: 'Enjoy enhanced team coordination with REPO MODS player indicators, improved voice chat, and streamlined communication tools for up to 6 players in your REPO gaming sessions.'
  },
  {
    icon: <FiZap className="h-8 w-8 text-blue-500" />,
    title: 'REPO MODS Performance Boost',
    description: 'Benefit from significant REPO MODS performance improvements that reduce stuttering, lower loading times, and optimize resource usage for a smoother REPO gameplay experience.'
  },
  {
    icon: <FiSettings className="h-8 w-8 text-blue-500" />,
    title: 'REPO MODS Quality-of-Life Features',
    description: 'Access REPO MODS customizable controls, UI scaling options, advanced graphics settings, and numerous other improvements requested by the REPO community.'
  },
  {
    icon: <FiCpu className="h-8 w-8 text-blue-500" />,
    title: 'REPO MODS AI Enhancement',
    description: 'Face more intelligent and dynamic threats with our REPO MODS improved AI system that creates more challenging and unpredictable encounters throughout your REPO missions.'
  },
  {
    icon: <FiCode className="h-8 w-8 text-blue-500" />,
    title: 'REPO MODS Compatibility',
    description: 'Our REPO MODS are designed to work seamlessly with the base REPO game and remain compatible with future updates, ensuring you can always enjoy the latest REPO content.'
  }
];

export default function Features() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [autoScroll, setAutoScroll] = useState(true);

  // 自动滚动效果
  useEffect(() => {
    let scrollInterval: NodeJS.Timeout;
    
    if (autoScroll && scrollRef.current) {
      scrollInterval = setInterval(() => {
        if (scrollRef.current) {
          const isAtEnd = scrollRef.current.scrollLeft >= scrollRef.current.scrollWidth - scrollRef.current.clientWidth - 10;
          
          if (isAtEnd) {
            scrollRef.current.scrollLeft = 0;
          } else {
            scrollRef.current.scrollLeft += 1;
          }
        }
      }, 30);
    }
    
    return () => clearInterval(scrollInterval);
  }, [autoScroll]);

  return (
    <section id="features" className="section bg-gray-50 dark:bg-gray-800">
      <div className="container">
        {/* 新mod横向滚动展示 */}
        <div className="mb-16">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-2xl font-bold text-center mb-6 text-amber-600 dark:text-amber-400"
          >
            🔥 NEWLY ADDED MODS 🔥
          </motion.h3>
          
          <div 
            className="relative overflow-hidden mb-8 py-2"
            onMouseEnter={() => setAutoScroll(false)}
            onMouseLeave={() => setAutoScroll(true)}
          >
            <div 
              ref={scrollRef}
              className="flex gap-4 overflow-x-auto scrollbar-hide pb-4 scroll-smooth"
              style={{ scrollBehavior: 'smooth' }}
            >
              {newMods.concat(newMods).map((mod, index) => (
                <Link href={mod.link} key={index} className="flex-shrink-0 w-64 group">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.05 * (index % newMods.length) }}
                    whileHover={{ y: -5, scale: 1.03 }}
                    className="rounded-lg shadow-md overflow-hidden border border-gray-200 dark:border-gray-700 transition-all duration-300 h-full"
                  >
                    <div className={`${mod.color} h-3 group-hover:h-5 transition-all duration-300`}></div>
                    <div className="p-4 bg-white dark:bg-gray-700 group-hover:bg-gray-50 dark:group-hover:bg-gray-600 transition-all duration-300">
                      <h4 className="text-lg font-bold mb-2 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-300 transition-colors">{mod.name}</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-300">{mod.description}</p>
                      <div className="mt-3 text-xs font-medium text-blue-600 dark:text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center">
                        View details
                        <svg className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </motion.div>
                </Link>
              ))}
            </div>
            
            {/* 滚动提示 */}
            <div className="absolute inset-y-0 right-0 flex items-center bg-gradient-to-l from-gray-50 dark:from-gray-800 to-transparent w-16 pointer-events-none">
              <div className="w-full text-center text-gray-400 dark:text-gray-500">
                <span className="text-xs">scroll</span>
                <span className="block text-lg">→</span>
              </div>
            </div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center text-sm text-gray-500 dark:text-gray-400"
          >
            <p>Our newest mods are regularly updated and optimized for the best gaming experience</p>
          </motion.div>
        </div>

        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="heading"
          >
            REPO MOD FEATURE
          </motion.h2>
          
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="flex justify-center mb-4"
          >
            <div className="inline-block bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-4 py-2 rounded-full text-sm font-medium">
              New mods and updates are uploaded immediately upon release! Bookmark us for instant access to the latest content.
            </div>
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="subheading"
          >
            Our REPO MODS take the thrilling cooperative horror experience of REPO and transform it with these essential improvements that elevate your REPO gameplay to new heights.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className={`${index === 0 ? 'bg-amber-50 dark:bg-amber-900/40 ring-2 ring-amber-400 dark:ring-amber-500' : 'bg-white dark:bg-gray-700'} p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow`}
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{feature.title}</h3>
              <p className={`${index === 0 ? 'text-gray-800 dark:text-amber-100' : 'text-gray-600 dark:text-gray-300'}`}>{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 