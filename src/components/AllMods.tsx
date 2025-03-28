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
  },
  {
    name: 'EvenMoreHats',
    description: 'Fun cosmetics with multiple hats including Bunny Ears, Beanie, Cowboy hat and more',
    detailUrl: '/repomod-EvenMoreHats',
    isNew: true
  },
  {
    name: 'FunnyItems',
    description: 'Adds many fun and funny new valuables to play around with and sell in R.E.P.O.',
    detailUrl: '/repomod-FunnyItems',
    isNew: true
  },
  {
    name: 'Mimic',
    description: 'Creatures can mimic player voices, recording and playing back voice chat clips',
    detailUrl: '/repomod-Mimic',
    isNew: true
  },
  {
    name: 'Cart Lights MelanieMelicious',
    description: 'Adds lights to the front of medium and pocket carts for better visibility',
    detailUrl: '/repomod-Cart_Lights_MelanieMelicious',
    isNew: true,
    nameOverride: 'Cart_Lights_MelanieMelicious' // 用于匹配config.json中的键名
  },
  {
    name: 'XUnity AutoTranslator',
    description: 'Advanced translator plugin that can automatically translate Unity-based games',
    detailUrl: '/repomod-XUnity_AutoTranslator',
    isNew: true,
    nameOverride: 'XUnity_AutoTranslator' // 用于匹配config.json中的键名
  },
  {
    name: 'Custom Colors',
    description: 'Adds RGB color sliders to the Select Color page for precise character customization',
    detailUrl: '/repomod-CustomColors',
    isNew: true,
    nameOverride: 'CustomColors' // 用于匹配config.json中的键名
  },
  {
    name: 'Lethal Plushies',
    description: 'Adds adorable plushies of Lethal Company enemies to collect and display',
    detailUrl: '/repomod-Lethal_Plushies',
    isNew: true,
    nameOverride: 'Lethal_Plushies' // 用于匹配config.json中的键名
  },
  {
    name: 'FOV Update',
    description: 'Customize your field of view settings with precise control and ultrawide monitor support',
    detailUrl: '/repomod-FovUpdate',
    isNew: true,
    nameOverride: 'FovUpdate' // 用于匹配config.json中的键名
  },
  {
    name: 'Freecam Spectate',
    description: 'Adds a spectator camera mode that allows free movement when dead',
    detailUrl: '/repomod-FreecamSpectate',
    isNew: true,
    nameOverride: 'FreecamSpectate' // 用于匹配config.json中的键名
  },
  {
    name: 'Dead TTS',
    description: 'Automatically converts dead player chat messages to speech using text-to-speech',
    detailUrl: '/repomod-DeadTTS',
    isNew: true,
    nameOverride: 'DeadTTS' // 用于匹配config.json中的键名
  },
  {
    name: 'Better Truck Heals',
    description: 'Truck Heal Station automatically heals players within range',
    detailUrl: '/repomod-BetterTruckHeals',
    isNew: true,
    nameOverride: 'BetterTruckHeals' // 用于匹配config.json中的键名
  },
  {
    name: 'XH_DamageShow_EnemyHealthBar',
    description: 'Displays damage numbers and enemy health bars for better combat feedback',
    detailUrl: '/repomod-XH_DamageShow_EnemyHealthBar',
    isNew: true,
    nameOverride: 'XH_DamageShow_EnemyHealthBar' // 用于匹配config.json中的键名
  },
  {
    name: 'Improved Stamina',
    description: 'Enhanced stamina system with configurable regeneration and usage rates',
    detailUrl: '/repomod-ImprovedStamina',
    isNew: true,
    nameOverride: 'ImprovedStamina' // 用于匹配config.json中的键名
  },
  {
    name: 'The Finals Valuables',
    description: 'Adds valuable items from The Finals game as collectibles in R.E.P.O.',
    detailUrl: '/repomod-TheFinalsValuables',
    isNew: true,
    nameOverride: 'TheFinalsValuables' // 用于匹配config.json中的键名
  },
  {
    name: 'Berserker Enemies',
    description: 'Makes enemies more aggressive and challenging with enhanced AI behavior',
    detailUrl: '/repomod-BerserkerEnemies',
    isNew: true,
    nameOverride: 'BerserkerEnemies' // 用于匹配config.json中的键名
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
  return (
    <motion.div
      className="relative bg-gray-800 rounded-lg overflow-hidden shadow-lg border border-gray-700 hover:border-amber-600 transition-all duration-300"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
    >
      <Link href={detailUrl}>
        <div className="p-6">
          <div className="flex items-center mb-3">
            {icon}
            <h3 className="text-xl font-semibold text-white">{title}</h3>
          </div>
          <p className="text-gray-300 mb-4">{description}</p>
          
          <div className="flex justify-between items-center text-sm">
            {version && (
              <span className="text-amber-400">{version}</span>
            )}
            {date && (
              <span className="text-gray-400">Updated: {date}</span>
            )}
          </div>
        </div>
        
        <div className="bg-gradient-to-r from-amber-800 to-orange-700 text-white py-2 px-6 flex justify-between items-center">
          <span className="font-medium">View Details</span>
          <FiDownload />
        </div>
      </Link>
    </motion.div>
  );
}

export default function AllMods() {
  const [modVersions, setModVersions] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('name'); // 'name', 'date'

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
              let rawDate = null;
              if (modConfig.lastUpdated) {
                // 尝试解析相对日期字符串转换为实际日期
                formattedDate = modConfig.lastUpdated;
                const now = new Date();
                
                if (modConfig.lastUpdated.includes('hours ago') || modConfig.lastUpdated.includes('hour ago')) {
                  const hours = parseInt(modConfig.lastUpdated.match(/\d+/)?.[0] || '0');
                  if (!isNaN(hours)) {
                    rawDate = new Date(now.getTime() - hours * 60 * 60 * 1000);
                  }
                } else if (modConfig.lastUpdated.includes('days ago') || modConfig.lastUpdated.includes('day ago')) {
                  const days = parseInt(modConfig.lastUpdated.match(/\d+/)?.[0] || '0');
                  if (!isNaN(days)) {
                    rawDate = new Date(now.getTime() - days * 24 * 60 * 60 * 1000);
                  }
                } else if (modConfig.lastUpdated.includes('weeks ago') || modConfig.lastUpdated.includes('week ago')) {
                  const weeks = parseInt(modConfig.lastUpdated.match(/\d+/)?.[0] || '0');
                  if (!isNaN(weeks)) {
                    rawDate = new Date(now.getTime() - weeks * 7 * 24 * 60 * 60 * 1000);
                  }
                } else if (modConfig.lastUpdated.includes('months ago') || modConfig.lastUpdated.includes('month ago')) {
                  const months = parseInt(modConfig.lastUpdated.match(/\d+/)?.[0] || '0');
                  if (!isNaN(months)) {
                    rawDate = new Date(now.getTime() - months * 30 * 24 * 60 * 60 * 1000);
                  }
                } else if (modConfig.lastUpdated.includes('years ago') || modConfig.lastUpdated.includes('year ago')) {
                  const years = parseInt(modConfig.lastUpdated.match(/\d+/)?.[0] || '0');
                  if (!isNaN(years)) {
                    rawDate = new Date(now.getTime() - years * 365 * 24 * 60 * 60 * 1000);
                  }
                } else if (modConfig.lastUpdated === 'Today') {
                  rawDate = now;
                } else if (modConfig.lastUpdated === 'Yesterday') {
                  rawDate = new Date(now.getTime() - 24 * 60 * 60 * 1000);
                } else {
                  // 尝试将其作为标准日期格式解析
                  try {
                    const date = new Date(modConfig.lastUpdated);
                    if (!isNaN(date.getTime())) {
                      rawDate = date;
                    }
                  } catch (e) {
                    // 解析失败，rawDate保持为null
                  }
                }
              }
              
              return {
                ...mod,
                version: modConfig.version ? `v${modConfig.version}` : undefined,
                date: formattedDate,
                rawDate: rawDate,
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

  // 过滤和排序模组
  const filteredMods = modVersions.filter(mod => 
    mod.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    mod.description.toLowerCase().includes(searchTerm.toLowerCase())
  ).sort((a, b) => {
    if (sortBy === 'name') {
      return a.name.localeCompare(b.name);
    } else if (sortBy === 'date') {
      // 如果两个模组都有日期，按日期排序
      if (a.rawDate && b.rawDate) {
        return b.rawDate.getTime() - a.rawDate.getTime();
      }
      // 如果只有a有日期，a应该排在前面
      if (a.rawDate) return -1;
      // 如果只有b有日期，b应该排在前面
      if (b.rawDate) return 1;
      // 如果都没有日期，按名称排序
      return a.name.localeCompare(b.name);
    }
    return 0;
  });

  return (
    <section className="section bg-gray-800 text-white py-16">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-amber-400 mb-4">R.E.P.O. Mods Collection</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Browse our complete collection of mods designed to enhance your R.E.P.O. gaming experience.
          </p>
        </motion.div>

        <div className="mb-8 bg-gray-700/50 p-6 rounded-lg border border-gray-600">
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="flex-1">
              <label htmlFor="search" className="block text-sm font-medium text-gray-300 mb-1">Search Mods</label>
              <input
                type="text"
                id="search"
                placeholder="Search by name or description..."
                className="w-full px-4 py-2 bg-gray-800 border border-gray-600 rounded-md text-white"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="md:w-48">
              <label htmlFor="sort" className="block text-sm font-medium text-gray-300 mb-1">Sort By</label>
              <select
                id="sort"
                className="w-full px-4 py-2 bg-gray-800 border border-gray-600 rounded-md text-white"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
              >
                <option value="name">Alphabetical</option>
                <option value="date">Recently Updated</option>
              </select>
            </div>
          </div>
          
          <div className="text-gray-400 text-sm">
            <p>Find the perfect mod by searching or sorting the collection. Click on any mod for installation instructions and details.</p>
          </div>
        </div>

        {isLoading ? (
          <div className="text-center py-12">
            <p className="text-xl">Loading mods information...</p>
          </div>
        ) : (
          <>
            <div className="mb-4 flex justify-between items-center">
              <h2 className="text-2xl font-semibold text-amber-400">All Available Mods</h2>
              <p className="text-gray-400">Showing {filteredMods.length} of {modVersions.length} mods</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredMods.map((mod, index) => {
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
                    delay={0.1 + (index % 10) * 0.05} // 限制延迟效果
                    version={mod.version}
                    date={mod.date}
                  />
                );
              })}
            </div>
            
            {filteredMods.length === 0 && (
              <div className="text-center py-12 bg-gray-700/30 rounded-lg border border-gray-600">
                <FiInfo className="text-4xl text-amber-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">No Mods Found</h3>
                <p className="text-gray-400">Try adjusting your search terms to find what you're looking for.</p>
              </div>
            )}
          </>
        )}
        
        <motion.div 
          className="mt-12 p-6 bg-amber-900/40 rounded-lg border border-amber-700/50"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-xl font-semibold text-amber-400 mb-3">Need Help With Mods?</h3>
          <p className="mb-4">
            Not sure how to install mods or having trouble with a specific mod? Check out our installation guide or join our Discord community for help.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/How-to-Install-REPO-Mods" className="inline-flex items-center px-4 py-2 bg-amber-700 hover:bg-amber-600 rounded-md transition">
              <VscChecklist className="mr-2" /> Installation Guide
            </Link>
            <a 
              href="https://discord.com/channels/1330873443515760640/1334066836051853322" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 bg-indigo-700 hover:bg-indigo-600 rounded-md transition"
            >
              <FaDiscord className="mr-2" /> Join Discord
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 