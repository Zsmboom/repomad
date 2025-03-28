'use client';

import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  FaUsers, FaRunning, FaHeartbeat, FaUserPlus
} from 'react-icons/fa';
import {
  FiPackage, FiTarget, FiDollarSign
} from 'react-icons/fi';
import {
  GiClothes, GiPartyHat, GiHumanTarget, GiRobotGolem
} from 'react-icons/gi';
import { VscLibrary } from 'react-icons/vsc';
import { RiCodeSSlashLine } from 'react-icons/ri';
import { ModCard } from './ModCard';

interface ModListProps {
  mods: any[];
  isLoading: boolean;
}

// 根据模组名称选择合适的图标
const getModIcon = (modName: string): ReactNode => {
  if (modName.includes('Team')) {
    return <FaUsers className="text-2xl text-amber-500 mr-2" />;
  } else if (modName.includes('Head')) {
    return <GiClothes className="text-2xl text-amber-500 mr-2" />;
  } else if (modName.includes('Stamina')) {
    return <FaRunning className="text-2xl text-amber-500 mr-2" />;
  } else if (modName.includes('Health') || modName.includes('Heal') || modName.includes('Revive')) {
    return <FaHeartbeat className="text-2xl text-amber-500 mr-2" />;
  } else if (modName.includes('Players')) {
    return <FaUserPlus className="text-2xl text-amber-500 mr-2" />;
  } else if (modName.includes('Lib')) {
    return <VscLibrary className="text-2xl text-amber-500 mr-2" />;
  } else if (modName.includes('Role')) {
    return <GiHumanTarget className="text-2xl text-amber-500 mr-2" />;
  } else if (modName.includes('Lego')) {
    return <GiPartyHat className="text-2xl text-amber-500 mr-2" />;
  } else if (modName.includes('Extract')) {
    return <FiTarget className="text-2xl text-amber-500 mr-2" />;
  } else if (modName.includes('Enemy')) {
    return <GiRobotGolem className="text-2xl text-amber-500 mr-2" />;
  } else if (modName.includes('Menu')) {
    return <RiCodeSSlashLine className="text-2xl text-amber-500 mr-2" />;
  } else if (modName.includes('Shop') || modName.includes('Valuable')) {
    return <FiDollarSign className="text-2xl text-amber-500 mr-2" />;
  } else {
    return <FiPackage className="text-2xl text-amber-500 mr-2" />;
  }
};

export function ModList({ mods, isLoading }: ModListProps) {
  if (isLoading) {
    return (
      <div className="text-center py-12">
        <p>Loading mods information...</p>
      </div>
    );
  }

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mods.map((mod, index) => (
          <ModCard
            key={index}
            title={mod.name}
            description={mod.description}
            icon={getModIcon(mod.name)}
            detailUrl={mod.detailUrl}
            delay={0.1 + index * 0.05}
            version={mod.version}
            date={mod.date}
          />
        ))}
      </div>
      
      <motion.div 
        className="flex justify-center mt-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <Link 
          href="/repo-mods-Download" 
          className="px-8 py-4 bg-amber-600 hover:bg-amber-500 text-white text-lg font-semibold rounded-lg transition-all shadow-lg hover:shadow-xl flex items-center group"
        >
          <span className="mr-2">View All Mods</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 group-hover:translate-x-1 transition-transform" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </Link>
      </motion.div>
    </>
  );
} 