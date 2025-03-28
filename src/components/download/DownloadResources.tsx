'use client';

import { motion } from 'framer-motion';
import { FiAlertCircle, FiShield, FiDownload, FiPackage, FiShoppingCart } from 'react-icons/fi';
import { FaDiscord } from 'react-icons/fa';

export function DownloadResources() {
  return (
    <div className="mb-8">
      <motion.div 
        className="p-4 rounded-lg bg-amber-900/40 flex items-center border border-amber-700/50 mb-4 backdrop-blur-sm"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex-shrink-0 bg-amber-700 p-3 rounded-full mr-4">
          <FiAlertCircle className="text-white text-xl" />
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-1">Important Note for Installation</h3>
          <p>All mods require BepInEx. Make sure to install it first before using any mods.</p>
        </div>
      </motion.div>
      
      <div className="flex flex-wrap lg:flex-nowrap gap-4">
        <motion.a 
          href="https://thunderstore.io/package/download/BepInEx/BepInExPack/5.4.2100/"
          className="flex-1 p-4 rounded-lg bg-blue-900/40 text-center hover:bg-blue-800/40 transition border border-blue-700/50 backdrop-blur-sm"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="flex justify-center mb-2">
            <FiShield className="text-5xl text-blue-400" />
          </div>
          <h3 className="text-xl font-semibold mb-2">BepInEx</h3>
          <p className="text-sm text-gray-300 mb-4">Essential mod framework for all mods</p>
          <div className="flex justify-center items-center text-blue-300 hover:text-blue-200">
            <FiDownload className="mr-2" /> Download BepInEx
          </div>
        </motion.a>
        
        <motion.a 
          href="https://www.overwolf.com/app/thunderstore-thunderstore_mod_manager"
          className="flex-1 p-4 rounded-lg bg-purple-900/40 text-center hover:bg-purple-800/40 transition border border-purple-700/50 backdrop-blur-sm"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="flex justify-center mb-2">
            <FiPackage className="text-5xl text-purple-400" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Browse All Mods</h3>
          <p className="text-sm text-gray-300 mb-4">Discover more mods on Thunderstore</p>
          <div className="flex justify-center items-center text-purple-300 hover:text-purple-200">
            <FiShoppingCart className="mr-2" /> Visit Thunderstore
          </div>
        </motion.a>
        
        <motion.a 
          href="https://discord.com/channels/1330873443515760640/1334066836051853322"
          className="flex-1 p-4 rounded-lg bg-indigo-900/40 text-center hover:bg-indigo-800/40 transition border border-indigo-700/50 backdrop-blur-sm"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="flex justify-center mb-2">
            <FaDiscord className="text-5xl text-indigo-400" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Join Discord</h3>
          <p className="text-sm text-gray-300 mb-4">Get help and connect with modders</p>
          <div className="flex justify-center items-center text-indigo-300 hover:text-indigo-200">
            <FiDownload className="mr-2" /> Join Community
          </div>
        </motion.a>
      </div>
    </div>
  );
} 