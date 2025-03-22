'use client';

import { motion } from 'framer-motion';
import { FiDownload, FiAlertCircle, FiShield, FiInfo, FiMinimize2, FiTarget, FiMusic, FiDollarSign, FiShoppingCart, FiPackage } from 'react-icons/fi';
import { FaWindows, FaApple, FaSteam, FaDiscord, FaGithub, FaUserAlt, FaUsers, FaRunning, FaHeartbeat, FaUserPlus, FaMedkit } from 'react-icons/fa';
import Link from 'next/link';
import { GiPartyHat } from 'react-icons/gi';
import { GiClothes } from 'react-icons/gi';
import { GiHumanTarget } from 'react-icons/gi';
import { RiCodeSSlashLine } from 'react-icons/ri';
import { GiRobotGolem } from 'react-icons/gi';
import { VscLibrary, VscChecklist } from 'react-icons/vsc';
import { useState, ReactNode, useEffect } from 'react';

// 默认模组信息，只包含静态部分
const modDefaults = [
  {
    name: 'TeamUpgrades',
    description: 'Makes all upgrades work for the entire team, enhancing team cooperation',
    detailUrl: '/repomod-TeamUpgrades',
    isNew: true
  },
  {
    name: 'TeamHeals',
    description: 'Health Packs now work for the whole team, greatly improving team survival',
    detailUrl: '/repomod-TeamHeals',
    isNew: true
  },
  {
    name: 'LethalCompanyValuables',
    description: 'Adds 30 scrap items from Lethal Company as valuables in R.E.P.O.',
    detailUrl: '/repomod-LethalCompanyValuables',
    isNew: true
  },
  {
    name: 'MoreUpgrades',
    description: 'Adds more upgrade items to the game like Sprint Usage and Enemy Trackers',
    detailUrl: '/repomod-MoreUpgrades',
    isNew: true
  },
  {
    name: 'MoreShopItems',
    description: 'Additional shopping shelves with increased shop loot and item variety',
    detailUrl: '/repomod-MoreShopItems',
    isNew: true
  },
  {
    name: 'LateJoin',
    description: 'Join in-progress missions without waiting for friends to return to the ship',
    detailUrl: '/repomod-LateJoin',
    isNew: true
  },
  {
    name: 'MoreReviveHP',
    description: 'Increases health given when reviving teammates with configurable values',
    detailUrl: '/repomod-MoreReviveHP',
    isNew: true
  },
  {
    name: 'REPOLib',
    description: 'Essential library for adding content to R.E.P.O. with extensive developer tools',
    detailUrl: '/repomod-REPOLib',
    isNew: true
  },
  {
    name: 'ExtractionPointConfirmButton',
    description: 'Adds a confirm button to extraction points to prevent accidental exits',
    detailUrl: '/repomod-ExtractionPointConfirmButton',
    isNew: true
  },
  {
    name: 'MoreHeadPlus',
    description: 'Expansion pack for MoreHead with additional model selections',
    detailUrl: '/repomod-MoreHeadPlus',
    isNew: true
  },
  {
    name: 'MenuLib',
    description: 'A library for creating UI - essential for many REPO mods',
    detailUrl: '/repomod-MenuLib',
    isNew: true
  },
  {
    name: 'MoreHead',
    description: 'A simple decoration mod providing custom head models and unitypackage for players',
    detailUrl: '/repomod-MoreHead',
    isNew: true
  },
  {
    name: 'BensCosmetics',
    description: '150+ models made into cosmetics with a variety of customization options',
    detailUrl: '/repomod-BensCosmetics',
    isNew: true
  },
  {
    name: 'R.E.P.O. Roles',
    description: 'An exciting mod which adds player roles with unique abilities to the game',
    detailUrl: '/repomod-REPORoles',
    isNew: true,
    nameOverride: 'REPORoles' // 用于匹配config.json中的键名
  },
  {
    name: 'R.E.P.O. MorePlayers',
    description: 'A mod that allows you to customize the maximum player count in your games',
    detailUrl: '/repomod-MorePlayers',
    isNew: true,
    nameOverride: 'MorePlayers' // 用于匹配config.json中的键名
  },
  {
    name: 'ShrinkerCart',
    description: 'Bigger the item better the shrink!',
    detailUrl: '/repomod-ShrinkerCart',
    isNew: true
  },
  {
    name: 'R.E.P.O. MoreStamina',
    description: 'Enhanced endurance system with realistic stamina mechanics',
    detailUrl: '/repomod-MoreStamina',
    isNew: true,
    nameOverride: 'MoreStamina' // 用于匹配config.json中的键名
  },
  {
    name: 'Enemy Location',
    description: 'Advanced tactical mod that helps track enemy movements',
    detailUrl: '/repomod-EnemyLocation',
    isNew: true,
    nameOverride: 'Enemy_Location' // 用于匹配config.json中的键名
  },
  {
    name: 'LegoGnomes',
    description: 'Changes the gnome\'s death sound to the lego brick breaking sound effect',
    detailUrl: '/repomod-LegoGnomes',
    isNew: true
  },
  {
    name: 'EvenMoreHead',
    description: 'Adds several new models to the MoreHead mod with a wide variety of cosmetic options',
    detailUrl: '/repomod-EvenMoreHead',
    isNew: true
  },
  {
    name: 'InfiniteEnergyCrystals',
    description: 'No more cash wasted on energy crystals!',
    detailUrl: '/repomod-InfiniteEnergyCrystals',
    isNew: true
  }
];

interface ModCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  detailUrl: string;
  delay?: number;
  version?: string;
  date?: string;
}

function ModCard({ title, description, icon, detailUrl, delay = 0.15, version, date }: ModCardProps) {
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
          V{'\u0456'}{'\u0435'}w D{'\u0435'}t{'\u0430'}{'\u0456'}ls
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

export default function Download() {
  const [modVersions, setModVersions] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchModInfo() {
      try {
        // 获取最新的配置信息
        const response = await fetch('/api/mods');
        const configData = await response.json();
        
        if (configData && configData.mods) {
          // 将配置信息与默认模组信息合并
          const updatedMods = modDefaults.map(mod => {
            const configKey = mod.nameOverride || mod.name;
            const modConfig = configData.mods[configKey];
            
            if (modConfig) {
              // 格式化日期显示
              let formattedDate = 'Unknown';
              if (modConfig.lastUpdated) {
                // 尝试将lastUpdated转换为友好格式
                try {
                  const date = new Date(modConfig.lastUpdated);
                  // 判断是否是一个有效的日期
                  if (!isNaN(date.getTime())) {
                    const now = new Date();
                    const diffDays = Math.floor((now.getTime() - date.getTime()) / (1000 * 3600 * 24));
                    
                    if (diffDays === 0) {
                      formattedDate = 'Today';
                    } else if (diffDays === 1) {
                      formattedDate = 'Yesterday';
                    } else if (diffDays < 7) {
                      formattedDate = `${diffDays} days ago`;
                    } else if (diffDays < 30) {
                      const weeks = Math.floor(diffDays / 7);
                      formattedDate = `${weeks} ${weeks === 1 ? 'week' : 'weeks'} ago`;
                    } else if (diffDays < 365) {
                      const months = Math.floor(diffDays / 30);
                      formattedDate = `${months} ${months === 1 ? 'month' : 'months'} ago`;
                    } else {
                      const years = Math.floor(diffDays / 365);
                      formattedDate = `${years} ${years === 1 ? 'year' : 'years'} ago`;
                    }
                  } else {
                    formattedDate = modConfig.lastUpdated;
                  }
                } catch (e) {
                  formattedDate = modConfig.lastUpdated;
                }
              }
              
              return {
                ...mod,
                version: modConfig.version ? `v${modConfig.version}` : undefined,
                date: formattedDate,
                downloadUrl: modConfig.fileName ? `/downloads/${modConfig.fileName}` : undefined
              };
            }
            
            return mod;
          });
          
          setModVersions(updatedMods);
        } else {
          // 如果API调用失败，使用默认信息
          setModVersions(modDefaults);
        }
      } catch (error) {
        console.error('Error fetching mod info:', error);
        // 如果发生错误，使用默认信息
        setModVersions(modDefaults);
      } finally {
        setIsLoading(false);
      }
    }
    
    fetchModInfo();
  }, []);

  return (
    <section id="download" className="section bg-gray-800 text-white">
      <div className="container">
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
              We're actively developing many more exciting mods for REPO! Stay tuned for new gameplay features, visual enhancements, quality of life improvements, and much more. Check back regularly for updates!
            </p>
          </div>
        </motion.div>
        
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
        
        <h3 className="text-2xl font-semibold mb-6 mt-12">Popular Mods</h3>
        
        {isLoading ? (
          <div className="text-center py-12">
            <p>Loading mods information...</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {modVersions.map((mod, index) => {
              let icon;
              
              // 为不同模组分配不同图标
              if (mod.name.includes('Team')) {
                icon = <FaUsers className="text-2xl text-amber-500 mr-2" />;
              } else if (mod.name.includes('Head')) {
                icon = <GiClothes className="text-2xl text-amber-500 mr-2" />;
              } else if (mod.name.includes('Stamina')) {
                icon = <FaRunning className="text-2xl text-amber-500 mr-2" />;
              } else if (mod.name.includes('Health') || mod.name.includes('Heal') || mod.name.includes('Revive')) {
                icon = <FaHeartbeat className="text-2xl text-amber-500 mr-2" />;
              } else if (mod.name.includes('Players')) {
                icon = <FaUserPlus className="text-2xl text-amber-500 mr-2" />;
              } else if (mod.name.includes('Lib')) {
                icon = <VscLibrary className="text-2xl text-amber-500 mr-2" />;
              } else if (mod.name.includes('Role')) {
                icon = <GiHumanTarget className="text-2xl text-amber-500 mr-2" />;
              } else if (mod.name.includes('Lego')) {
                icon = <GiPartyHat className="text-2xl text-amber-500 mr-2" />;
              } else if (mod.name.includes('Extract')) {
                icon = <FiTarget className="text-2xl text-amber-500 mr-2" />;
              } else if (mod.name.includes('Enemy')) {
                icon = <GiRobotGolem className="text-2xl text-amber-500 mr-2" />;
              } else if (mod.name.includes('Menu')) {
                icon = <RiCodeSSlashLine className="text-2xl text-amber-500 mr-2" />;
              } else if (mod.name.includes('Shop')) {
                icon = <FiDollarSign className="text-2xl text-amber-500 mr-2" />;
              } else if (mod.name.includes('Valuable')) {
                icon = <FiDollarSign className="text-2xl text-amber-500 mr-2" />;
              } else {
                icon = <FiPackage className="text-2xl text-amber-500 mr-2" />;
              }
  
              return (
                <ModCard
                  key={index}
                  title={mod.name}
                  description={mod.description}
                  icon={icon}
                  detailUrl={mod.detailUrl}
                  delay={0.1 + index * 0.05}
                  version={mod.version}
                  date={mod.date}
                />
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
} 