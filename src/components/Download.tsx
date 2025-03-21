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
import { useState, ReactNode } from 'react';

const modVersions = [
  {
    name: 'TeamUpgrades',
    description: 'Makes all upgrades work for the entire team, enhancing team cooperation',
    version: 'v1.1.4',
    date: 'April 25, 2023',
    detailUrl: '/repomod-TeamUpgrades',
    downloadUrl: '/downloads/repomod-TeamUpgrades-1.1.4.zip',
    isNew: true
  },
  {
    name: 'TeamHeals',
    description: 'Health Packs now work for the whole team, greatly improving team survival',
    version: 'v1.0.1',
    date: 'April 22, 2023',
    detailUrl: '/repomod-TeamHeals',
    downloadUrl: '/downloads/repomod-TeamHeals-1.0.1.zip',
    isNew: true
  },
  {
    name: 'LethalCompanyValuables',
    description: 'Adds 30 scrap items from Lethal Company as valuables in R.E.P.O.',
    version: 'v1.1.1',
    date: 'April 30, 2023',
    detailUrl: '/repomod-LethalCompanyValuables',
    downloadUrl: '/downloads/repomod-LethalCompanyValuables-1.1.1.zip',
    isNew: true
  },
  {
    name: 'MoreUpgrades',
    description: 'Adds more upgrade items to the game like Sprint Usage and Enemy Trackers',
    version: 'v1.2.7',
    date: 'April 15, 2023',
    detailUrl: '/repomod-MoreUpgrades',
    downloadUrl: '/downloads/repomod-MoreUpgrades-1.2.7.zip',
    isNew: true
  },
  {
    name: 'MoreShopItems',
    description: 'Additional shopping shelves with increased shop loot and item variety',
    version: 'v1.2.5',
    date: 'April 12, 2023',
    detailUrl: '/repomod-MoreShopItems',
    downloadUrl: '/downloads/repomod-MoreShopItems-1.2.5.zip',
    isNew: true
  },
  {
    name: 'LateJoin',
    description: 'Join in-progress missions without waiting for friends to return to the ship',
    version: 'v0.1.2',
    date: 'April 10, 2023',
    detailUrl: '/repomod-LateJoin',
    downloadUrl: '/downloads/repomod-LateJoin-0.1.2.zip',
    isNew: true
  },
  {
    name: 'MoreReviveHP',
    description: 'Increases health given when reviving teammates with configurable values',
    version: 'v1.0.1',
    date: 'April 8, 2023',
    detailUrl: '/repomod-MoreReviveHP',
    downloadUrl: '/downloads/repomod-MoreReviveHP-1.0.1.zip',
    isNew: true
  },
  {
    name: 'REPOLib',
    description: 'Essential library for adding content to R.E.P.O. with extensive developer tools',
    version: 'v1.4.2',
    date: 'March 26, 2023',
    detailUrl: '/repomod-REPOLib',
    downloadUrl: '/downloads/repomod-REPOLib-1.4.2.zip',
    isNew: true
  },
  {
    name: 'ExtractionPointConfirmButton',
    description: 'Adds a confirm button to extraction points to prevent accidental exits',
    version: 'v1.0.1',
    date: 'March 25, 2023',
    detailUrl: '/repomod-ExtractionPointConfirmButton',
    downloadUrl: '/downloads/repomod-ExtractionPointConfirmButton-1.0.1.zip',
    isNew: true
  },
  {
    name: 'MoreHeadPlus',
    description: 'Expansion pack for MoreHead with additional model selections',
    version: 'v0.2.0',
    date: 'March 24, 2023',
    detailUrl: '/repomod-MoreHeadPlus',
    downloadUrl: '/downloads/repomod-MoreHeadPlus-0.2.0.zip',
    isNew: true
  },
  {
    name: 'MenuLib',
    description: 'A library for creating UI - essential for many REPO mods',
    version: 'v1.0.5',
    date: 'March 23, 2023',
    detailUrl: '/repomod-MenuLib',
    downloadUrl: '/downloads/repomod-MenuLib-1.0.5.zip',
    isNew: true
  },
  {
    name: 'MoreHead',
    description: 'A simple decoration mod providing custom head models and unitypackage for players',
    version: 'v1.2.5',
    date: 'March 22, 2023',
    detailUrl: '/repomod-MoreHead',
    downloadUrl: '/downloads/repo-MoreHead-1.2.5.zip',
    isNew: true
  },
  {
    name: 'BensCosmetics',
    description: '150+ models made into cosmetics with a variety of customization options',
    version: 'v1.3.2',
    date: 'March 21, 2023',
    detailUrl: '/repomod-BensCosmetics',
    downloadUrl: '/downloads/repo-BensCosmetics-1.3.2.zip',
    isNew: true
  },
  {
    name: 'R.E.P.O. Roles',
    description: 'An exciting mod which adds player roles with unique abilities to the game',
    version: 'v1.3.3',
    date: 'March 20, 2023',
    detailUrl: '/repomod-REPORoles',
    downloadUrl: '/downloads/REPORoles-1.3.3.zip',
    isNew: true
  },
  {
    name: 'R.E.P.O. MorePlayers',
    description: 'A mod that allows you to customize the maximum player count in your games',
    version: 'v1.0.4',
    date: 'March 18, 2023',
    detailUrl: '/repomod-MorePlayers',
    downloadUrl: '/downloads/repo-MorePlayers-1.0.4.zip',
    isNew: true
  },
  {
    name: 'ShrinkerCart',
    description: 'Bigger the item better the shrink!',
    version: 'v0.1.0',
    date: 'March 21, 2023',
    detailUrl: '/repomod-ShrinkerCart',
    downloadUrl: '/downloads/repo-ShrinkerCart-0.1.0.zip',
    isNew: true
  },
  {
    name: 'R.E.P.O. MoreStamina',
    description: 'Enhanced endurance system with realistic stamina mechanics',
    version: 'v1.0.1',
    date: 'March 18, 2023',
    detailUrl: '/repomod-MoreStamina',
    downloadUrl: '/downloads/repo-MoreStamina-1.0.1.zip',
    isNew: true
  },
  {
    name: 'Enemy Location',
    description: 'Advanced tactical mod that helps track enemy movements',
    version: 'v1.0.3',
    date: 'March 18, 2023',
    detailUrl: '/repomod-EnemyLocation',
    downloadUrl: '/downloads/repo-Enemy_Location-1.0.3.zip',
    isNew: true
  },
  {
    name: 'LegoGnomes',
    description: 'Changes the gnome\'s death sound to the lego brick breaking sound effect',
    version: 'v1.0.2',
    date: 'March 18, 2023',
    detailUrl: '/repomod-LegoGnomes',
    downloadUrl: '/downloads/repo-LegoGnomes-1.0.2.zip',
    isNew: true
  },
  {
    name: 'EvenMoreHead',
    description: 'Adds several new models to the MoreHead mod with a wide variety of cosmetic options',
    version: 'v0.1.6',
    date: 'March 22, 2023',
    detailUrl: '/repomod-EvenMoreHead',
    downloadUrl: '/downloads/repo-EvenMoreHead-0.1.6.zip',
    isNew: true
  },
  {
    name: 'InfiniteEnergyCrystals',
    description: 'No more cash wasted on energy crystals!',
    version: 'v1.0.1',
    date: 'March 25, 2023',
    detailUrl: '/repomod-InfiniteEnergyCrystals',
    downloadUrl: '/downloads/repo-InfiniteEnergyCrystals-1.0.1.zip',
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
}

function ModCard({ title, description, icon, detailUrl, delay = 0.15, version }: ModCardProps) {
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
          <div className="flex items-center gap-2">
            {version && (
              <span className="text-sm bg-blue-700 px-2 py-1 rounded-full flex-shrink-0">{version}</span>
            )}
            <span className="text-sm bg-amber-700 px-2 py-1 rounded-full flex-shrink-0 ml-2">NEW</span>
          </div>
        </div>
        <p className="text-gray-200 mb-4">
          {description}
        </p>
      </div>
      <div className="mt-auto">
        <Link 
          href={detailUrl} 
          className="inline-flex w-full justify-center items-center px-4 py-2 bg-amber-700 text-white rounded-md hover:bg-amber-600 transition-colors"
        >
          <FiInfo className="mr-2" />
          View Details
        </Link>
      </div>
    </motion.div>
  );
}

export default function Download() {
  return (
    <section id="download" className="section bg-gray-800 text-white">
      <div className="container">
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            REPO MODS Download
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl text-gray-300 mb-6 max-w-3xl mx-auto"
          >
            Enhance your REPO experience with our premium REPO MODS collection. These REPO MODS add exciting new features and customization options to improve your REPO gameplay. All REPO MODS are fully compatible with the latest version of REPO and receive regular updates. Before using mods, you need to install <a href="https://thunderstore.io/c/repo/p/BepInEx/BepInExPack/" className="text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">BepInExPack</a> and <a href="https://www.overwolf.com/app/thunderstore-thunderstore_mod_manager" className="text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">Thunderstore Mod Manager</a>. For detailed installation instructions, please check our <Link href="/How-to-Install-REPO-Mods" className="text-blue-400 hover:underline">installation guide</Link>.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="bg-amber-900/40 backdrop-blur-sm border border-amber-700/50 rounded-lg p-4 mb-8 max-w-3xl mx-auto"
          >
            <div className="flex items-start">
              <FiAlertCircle className="text-amber-400 text-xl flex-shrink-0 mt-1 mr-3" />
              <p className="text-gray-200">
                <span className="font-semibold text-amber-300">Coming Soon:</span> We're actively developing many more exciting mods for REPO! Stay tuned for new gameplay features, visual enhancements, quality of life improvements, and much more. Check back regularly for updates!
              </p>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* TeamUpgrades Card */}
          <ModCard 
            title="TeamUpgrades"
            description="Share the power! All upgrades now work for the whole team, enhancing cooperation and strategy."
            icon={<FaUsers className="mr-3 text-amber-400 flex-shrink-0" />}
            detailUrl="/repomod-TeamUpgrades"
            version={modVersions.find(mod => mod.name === 'TeamUpgrades')?.version}
          />

          {/* TeamHeals Card */}
          <ModCard 
            title="TeamHeals"
            description="Health Packs now benefit the entire team, making survival and recovery a shared experience."
            icon={<FaMedkit className="mr-3 text-amber-400 flex-shrink-0" />}
            detailUrl="/repomod-TeamHeals"
            version={modVersions.find(mod => mod.name === 'TeamHeals')?.version}
          />

          {/* LethalCompanyValuables Card */}
          <ModCard 
            title="LethalCompanyValuables"
            description="Experience Lethal Company within R.E.P.O. with 30 iconic scrap items added as valuable collectibles."
            icon={<FiPackage className="mr-3 text-amber-400 flex-shrink-0" />}
            detailUrl="/repomod-LethalCompanyValuables"
            version={modVersions.find(mod => mod.name === 'LethalCompanyValuables')?.version}
          />

          {/* MoreUpgrades Card */}
          <ModCard 
            title="MoreUpgrades"
            description="Adds more upgrade items like Sprint Usage, Valuable Counter, and Enemy Tracking to enhance gameplay."
            icon={<FiPackage className="mr-3 text-amber-400 flex-shrink-0" />}
            detailUrl="/repomod-MoreUpgrades"
            version={modVersions.find(mod => mod.name === 'MoreUpgrades')?.version}
          />

          {/* MoreShopItems Card */}
          <ModCard 
            title="MoreShopItems"
            description="Increased item spawn rate in shop with additional shelving for more of each item type."
            icon={<FiShoppingCart className="mr-3 text-amber-400 flex-shrink-0" />}
            detailUrl="/repomod-MoreShopItems"
            version={modVersions.find(mod => mod.name === 'MoreShopItems')?.version}
          />

          {/* LateJoin Card */}
          <ModCard 
            title="LateJoin"
            description="Join games in progress without waiting for your friends to return to the ship between missions."
            icon={<FaUserPlus className="mr-3 text-amber-400 flex-shrink-0" />}
            detailUrl="/repomod-LateJoin"
            version={modVersions.find(mod => mod.name === 'LateJoin')?.version}
          />

          {/* MoreReviveHP Card */}
          <ModCard 
            title="MoreReviveHP"
            description="Get more health when revived with a progressive health system that gives you a fighting chance."
            icon={<FaHeartbeat className="mr-3 text-amber-400 flex-shrink-0" />}
            detailUrl="/repomod-MoreReviveHP"
            version={modVersions.find(mod => mod.name === 'MoreReviveHP')?.version}
          />

          {/* REPOLib Card */}
          <ModCard 
            title="REPOLib"
            description="Essential developer library for adding custom content to R.E.P.O. with powerful network tools."
            icon={<VscLibrary className="mr-3 text-amber-400 flex-shrink-0" />}
            detailUrl="/repomod-REPOLib"
            version={modVersions.find(mod => mod.name === 'REPOLib')?.version}
          />

          {/* ExtractionPointConfirmButton Card */}
          <ModCard 
            title="ExtractionPointConfirmButton"
            description="Adds a confirm button to extraction points to prevent accidental exits during intense gameplay."
            icon={<VscChecklist className="mr-3 text-amber-400 flex-shrink-0" />}
            detailUrl="/repomod-ExtractionPointConfirmButton"
            version={modVersions.find(mod => mod.name === 'ExtractionPointConfirmButton')?.version}
          />

          {/* MoreHeadPlus Card */}
          <ModCard 
            title="MoreHeadPlus"
            description="Expansion pack for MoreHead that adds several new models and customization options."
            icon={<GiRobotGolem className="mr-3 text-amber-400 flex-shrink-0" />}
            detailUrl="/repomod-MoreHeadPlus"
            version={modVersions.find(mod => mod.name === 'MoreHeadPlus')?.version}
          />

          {/* MenuLib Card */}
          <ModCard 
            title="MenuLib"
            description="A library for creating UI - essential prerequisite for many REPO mods including MoreHead."
            icon={<RiCodeSSlashLine className="mr-3 text-amber-400 flex-shrink-0" />}
            detailUrl="/repomod-MenuLib"
            version={modVersions.find(mod => mod.name === 'MenuLib')?.version}
          />

          {/* MoreHead Card */}
          <ModCard 
            title="MoreHead"
            description="A simple decoration mod providing custom head models and unitypackage for players to import their own."
            icon={<GiHumanTarget className="mr-3 text-amber-400 flex-shrink-0" />}
            detailUrl="/repomod-MoreHead"
            version={modVersions.find(mod => mod.name === 'MoreHead')?.version}
          />

          {/* BensCosmetics Card */}
          <ModCard 
            title="BensCosmetics"
            description="150+ models made into cosmetics with a variety of head, chest, and other customization options."
            icon={<GiClothes className="mr-3 text-amber-400 flex-shrink-0" />}
            detailUrl="/repomod-BensCosmetics"
            version={modVersions.find(mod => mod.name === 'BensCosmetics')?.version}
          />

          {/* R.E.P.O. Roles Card */}
          <ModCard 
            title="R.E.P.O. Roles"
            description="An exciting mod which adds player roles with unique abilities to the game."
            icon={<FaUserAlt className="mr-3 text-amber-400 flex-shrink-0" />}
            detailUrl="/repomod-REPORoles"
            version={modVersions.find(mod => mod.name === 'R.E.P.O. Roles')?.version}
            delay={0.2}
          />

          {/* R.E.P.O. MorePlayers Card */}
          <ModCard 
            title="R.E.P.O. MorePlayers"
            description="A mod that allows you to customize the maximum player count in your games."
            icon={<FaUsers className="mr-3 text-amber-400 flex-shrink-0" />}
            detailUrl="/repomod-MorePlayers"
            version={modVersions.find(mod => mod.name === 'R.E.P.O. MorePlayers')?.version}
            delay={0.25}
          />

          {/* R.E.P.O. MoreStamina Card */}
          <ModCard 
            title="R.E.P.O. MoreStamina"
            description="Enhanced endurance system with realistic stamina mechanics."
            icon={<FaRunning className="mr-3 text-amber-400 flex-shrink-0" />}
            detailUrl="/repomod-MoreStamina"
            version={modVersions.find(mod => mod.name === 'R.E.P.O. MoreStamina')?.version}
            delay={0.3}
          />

          {/* ShrinkerCart Card */}
          <ModCard 
            title="ShrinkerCart"
            description="Bigger the item better the shrink! Transform large objects into miniature versions."
            icon={<FiMinimize2 className="mr-3 text-amber-400 flex-shrink-0" />}
            detailUrl="/repomod-ShrinkerCart"
            version={modVersions.find(mod => mod.name === 'ShrinkerCart')?.version}
            delay={0.35}
          />

          {/* Enemy Location Card */}
          <ModCard 
            title="Enemy Location"
            description="Advanced tactical mod that helps track enemy movements within a limited range."
            icon={<FiTarget className="mr-3 text-amber-400 flex-shrink-0" />}
            detailUrl="/repomod-EnemyLocation"
            version={modVersions.find(mod => mod.name === 'Enemy Location')?.version}
            delay={0.4}
          />

          {/* LegoGnomes Card */}
          <ModCard 
            title="LegoGnomes"
            description="Changes the gnome's death sound to the lego brick breaking sound effect, which works perfectly with their death animation!"
            icon={<FiMusic className="mr-3 text-amber-400 flex-shrink-0" />}
            detailUrl="/repomod-LegoGnomes"
            version={modVersions.find(mod => mod.name === 'LegoGnomes')?.version}
            delay={0.45}
          />
          
          {/* EvenMoreHead Card */}
          <ModCard 
            title="EvenMoreHead"
            description="Adds several new models to the MoreHead mod with a wide variety of cosmetic options."
            icon={<GiPartyHat className="mr-3 text-amber-400 flex-shrink-0" />}
            detailUrl="/repomod-EvenMoreHead"
            version={modVersions.find(mod => mod.name === 'EvenMoreHead')?.version}
            delay={0.5}
          />
          
          {/* InfiniteEnergyCrystals Card */}
          <ModCard 
            title="InfiniteEnergyCrystals"
            description="No more cash wasted on energy crystals!"
            icon={<FiDollarSign className="mr-3 text-amber-400 flex-shrink-0" />}
            detailUrl="/repomod-InfiniteEnergyCrystals"
            version={modVersions.find(mod => mod.name === 'InfiniteEnergyCrystals')?.version}
            delay={0.55}
          />
        </div>
      </div>
    </section>
  );
} 