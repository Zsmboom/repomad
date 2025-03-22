#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// 配置
const MOD_UPDATER_PATH = path.join(__dirname, 'mod_updater.js');
const CONFIG_PATH = path.join(__dirname, '../config.json');

// 要添加的模组列表
const MODS_TO_ADD = [
  {
    name: 'REPORoles',
    url: 'https://thunderstore.io/c/repo/p/BobisMods/REPORoles/',
    folderName: 'repomod-REPORoles'
  },
  {
    name: 'MorePlayers',
    url: 'https://thunderstore.io/c/repo/p/zelofi/MorePlayers/',
    folderName: 'repomod-MorePlayers'
  },
  {
    name: 'ShrinkerCart',
    url: 'https://thunderstore.io/c/repo/p/Oksamies/ShrinkerCart/',
    folderName: 'repomod-ShrinkerCart'
  },
  {
    name: 'Enemy_Location',
    url: 'https://thunderstore.io/c/repo/p/WZK/Enemy_Location/',
    folderName: 'repomod-EnemyLocation'
  },
  {
    name: 'LegoGnomes',
    url: 'https://thunderstore.io/c/repo/p/ColtG5/LegoGnomes/',
    folderName: 'repomod-LegoGnomes'
  },
  {
    name: 'EvenMoreHead',
    url: 'https://thunderstore.io/c/repo/p/DEMMERS/EvenMoreHead/',
    folderName: 'repomod-EvenMoreHead'
  },
  {
    name: 'ImprovedStamina',
    url: 'https://thunderstore.io/c/repo/p/Flopper/ImprovedStamina/',
    folderName: 'repomod-ImprovedStamina'
  },
  {
    name: 'InfiniteStamina',
    url: 'https://thunderstore.io/c/repo/p/GalaCorp/InfiniteStamina/',
    folderName: 'repomod-InfiniteStamina'
  },
  {
    name: 'BensCosmetics',
    url: 'https://thunderstore.io/c/repo/p/Bengimi/BensCosmetics/',
    folderName: 'repomod-BensCosmetics'
  },
  {
    name: 'REPOLib',
    url: 'https://thunderstore.io/c/repo/p/Zehs/REPOLib/',
    folderName: 'repomod-REPOLib'
  },
  {
    name: 'MoreHead',
    url: 'https://thunderstore.io/c/repo/p/YMC_MHZ/MoreHead/',
    folderName: 'repomod-MoreHead'
  },
  {
    name: 'MoreReviveHP',
    url: 'https://thunderstore.io/c/repo/p/Tidaleus/MoreReviveHP/',
    folderName: 'repomod-MoreReviveHP'
  },
  {
    name: 'MoreHeadPlus',
    url: 'https://thunderstore.io/c/repo/p/RESET/MoreHeadPlus/',
    folderName: 'repomod-MoreHeadPlus'
  },
  {
    name: 'LateJoin',
    url: 'https://thunderstore.io/c/repo/p/Rebateman/LateJoin/',
    folderName: 'repomod-LateJoin'
  },
  {
    name: 'MoreShopItems',
    url: 'https://thunderstore.io/c/repo/p/GalaxyMods/MoreShopItems/',
    folderName: 'repomod-MoreShopItems'
  },
  {
    name: 'TeamUpgrades',
    url: 'https://thunderstore.io/c/repo/p/EvilCheetah/TeamUpgrades/',
    folderName: 'repomod-TeamUpgrades'
  },
  // 添加缺少的5个模组
  {
    name: 'MenuLib',
    url: 'https://thunderstore.io/c/repo/p/nickklmao/MenuLib/',
    folderName: 'repomod-MenuLib'
  },
  {
    name: 'MoreUpgrades',
    url: 'https://thunderstore.io/c/repo/p/BULLETBOT/MoreUpgrades/',
    folderName: 'repomod-MoreUpgrades'
  },
  {
    name: 'ExtractionPointConfirmButton',
    url: 'https://thunderstore.io/c/repo/p/Zehs/ExtractionPointConfirmButton/',
    folderName: 'repomod-ExtractionPointConfirmButton'
  },
  {
    name: 'LethalCompanyValuables',
    url: 'https://thunderstore.io/c/repo/p/Zehs/LethalCompanyValuables/',
    folderName: 'repomod-LethalCompanyValuables'
  },
  {
    name: 'InfiniteEnergyCrystals',
    url: 'https://thunderstore.io/c/repo/p/Lazarus/InfiniteEnergyCrystals/',
    folderName: 'repomod-InfiniteEnergyCrystals'
  }
];

// 读取mod_updater.js文件
let updaterContent = fs.readFileSync(MOD_UPDATER_PATH, 'utf8');

// 找到MOD_CONFIGS数组
const configMatch = updaterContent.match(/const MOD_CONFIGS = \[\s*([\s\S]*?)\s*\/\/ 可以添加更多模组/);
if (!configMatch) {
  console.error('错误: 无法在mod_updater.js中找到MOD_CONFIGS数组');
  process.exit(1);
}

// 读取config.json
let config = {};
try {
  const configContent = fs.readFileSync(CONFIG_PATH, 'utf8');
  config = JSON.parse(configContent);
} catch (error) {
  console.log(`警告: 无法读取config.json，将创建新文件`);
  config = {
    last_checked: '',
    mods: {}
  };
}

// 确保mods对象存在
if (!config.mods) {
  config.mods = {};
}

// 添加的模组计数器
let addedCount = 0;
let skippedCount = 0;

// 检查每个模组
for (const mod of MODS_TO_ADD) {
  // 检查是否已存在于updater中
  if (updaterContent.includes(`name: '${mod.name}'`)) {
    console.log(`跳过: 模组 ${mod.name} 已存在于mod_updater.js中`);
    skippedCount++;
    continue;
  }

  // 创建新的配置项
  const newConfig = `  {
    name: '${mod.name}',
    url: '${mod.url}',
    pageFile: path.join(__dirname, '../src/app/${mod.folderName}/page.tsx'),
  },
  `;

  // 添加到数组中
  updaterContent = updaterContent.replace(
    /const MOD_CONFIGS = \[\s*([\s\S]*?)\s*\/\/ 可以添加更多模组/,
    `const MOD_CONFIGS = [\n${configMatch[1]}${newConfig}  // 可以添加更多模组`
  );

  // 添加到config.json
  if (!config.mods[mod.name]) {
    config.mods[mod.name] = {
      version: '',
      lastUpdated: '',
      lastChecked: ''
    };
  }

  console.log(`已添加: ${mod.name}`);
  addedCount++;
}

// 保存mod_updater.js
if (addedCount > 0) {
  fs.writeFileSync(MOD_UPDATER_PATH, updaterContent, 'utf8');
  console.log(`已将${addedCount}个模组添加到mod_updater.js`);

  // 保存config.json
  fs.writeFileSync(CONFIG_PATH, JSON.stringify(config, null, 2), 'utf8');
  console.log(`已更新config.json配置文件`);
} else {
  console.log('没有新的模组需要添加');
}

console.log(`总结: 添加了${addedCount}个模组, 跳过了${skippedCount}个已存在的模组`);
console.log(`\n现在可以运行以下命令来检查所有模组的更新:`);
console.log(`node scripts/mod_updater.js`); 