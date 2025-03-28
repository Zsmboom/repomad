'use client';

import { useState, ReactNode } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

interface ModCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  detailUrl: string;
  delay?: number;
  version?: string;
  date?: string;
}

export function ModCard({ 
  title, 
  description, 
  icon, 
  detailUrl, 
  delay = 0.15, 
  version, 
  date 
}: ModCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="bg-amber-900/40 backdrop-blur-sm rounded-lg p-6 border border-amber-700/50 flex flex-col h-full relative"
    >
      {isHovered && (
        <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white px-4 py-2 rounded shadow-lg z-10 whitespace-nowrap border border-amber-500/30">
          {title}
        </div>
      )}
      <div className="flex-1">
        <div className="flex items-center justify-between mb-4">
          <h3 
            className="text-2xl font-semibold flex items-center overflow-hidden"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {icon}
            <span className="truncate" title={title}>{title}</span>
          </h3>
          <div className="flex items-center gap-2 flex-wrap justify-end">
            {version && (
              <span className="text-sm bg-blue-700 px-2 py-1 rounded-full flex-shrink-0">{version}</span>
            )}
          </div>
        </div>
        <p className="text-gray-200 mb-4">
          {description}
        </p>
      </div>
      <div className="flex justify-between items-center">
        <Link href={detailUrl} className="bg-amber-700 hover:bg-amber-600 text-white px-3 py-1.5 rounded-md transition-colors inline-flex items-center group">
          V{'\u0456'}{'\u0435'}w D{'\u0435'}t{'\u0435'}{'\u0456'}ls
          <motion.span
            initial={{ x: 0 }}
            whileHover={{ x: 5 }}
            className="ml-2"
          >
            →
          </motion.span>
        </Link>
        {date && <span className="text-xs bg-gray-700 text-gray-300 px-2 py-1 rounded">{date}</span>}
      </div>
    </motion.div>
  );
} 