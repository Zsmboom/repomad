const path = require('path');

// 要监控的模组配置
const MOD_CONFIGS = [
  {
    name: 'TeamHeals',
    url: 'https://thunderstore.io/c/repo/p/EvilCheetah/TeamHeals/',
    pageFile: path.join(__dirname, '../src/app/repomod-TeamHeals/page.tsx'),
  },
  {
    name: 'REPORoles',
    url: 'https://thunderstore.io/c/repo/p/BobisMods/REPORoles/',
    pageFile: path.join(__dirname, '../src/app/repomod-REPORoles/page.tsx'),
  },
  {
    name: 'MorePlayers',
    url: 'https://thunderstore.io/c/repo/p/zelofi/MorePlayers/',
    pageFile: path.join(__dirname, '../src/app/repomod-MorePlayers/page.tsx'),
  },
  {
    name: 'ShrinkerCart',
    url: 'https://thunderstore.io/c/repo/p/Oksamies/ShrinkerCart/',
    pageFile: path.join(__dirname, '../src/app/repomod-ShrinkerCart/page.tsx'),
  },
  {
    name: 'Enemy_Location',
    url: 'https://thunderstore.io/c/repo/p/WZK/Enemy_Location/',
    pageFile: path.join(__dirname, '../src/app/repomod-EnemyLocation/page.tsx'),
  },
  {
    name: 'LegoGnomes',
    url: 'https://thunderstore.io/c/repo/p/ColtG5/LegoGnomes/',
    pageFile: path.join(__dirname, '../src/app/repomod-LegoGnomes/page.tsx'),
  },
  {
    name: 'EvenMoreHead',
    url: 'https://thunderstore.io/c/repo/p/DEMMERS/EvenMoreHead/',
    pageFile: path.join(__dirname, '../src/app/repomod-EvenMoreHead/page.tsx'),
  },
  {
    name: 'ImprovedStamina',
    url: 'https://thunderstore.io/c/repo/p/Flopper/ImprovedStamina/',
    pageFile: path.join(__dirname, '../src/app/repomod-ImprovedStamina/page.tsx'),
  },
  {
    name: 'InfiniteStamina',
    url: 'https://thunderstore.io/c/repo/p/GalaCorp/InfiniteStamina/',
    pageFile: path.join(__dirname, '../src/app/repomod-InfiniteStamina/page.tsx'),
  },
  {
    name: 'BensCosmetics',
    url: 'https://thunderstore.io/c/repo/p/Bengimi/BensCosmetics/',
    pageFile: path.join(__dirname, '../src/app/repomod-BensCosmetics/page.tsx'),
  },
  {
    name: 'REPOLib',
    url: 'https://thunderstore.io/c/repo/p/Zehs/REPOLib/',
    pageFile: path.join(__dirname, '../src/app/repomod-REPOLib/page.tsx'),
  },
  {
    name: 'MoreHead',
    url: 'https://thunderstore.io/c/repo/p/YMC_MHZ/MoreHead/',
    pageFile: path.join(__dirname, '../src/app/repomod-MoreHead/page.tsx'),
  },
  {
    name: 'MoreReviveHP',
    url: 'https://thunderstore.io/c/repo/p/Tidaleus/MoreReviveHP/',
    pageFile: path.join(__dirname, '../src/app/repomod-MoreReviveHP/page.tsx'),
  },
  {
    name: 'MoreHeadPlus',
    url: 'https://thunderstore.io/c/repo/p/RESET/MoreHeadPlus/',
    pageFile: path.join(__dirname, '../src/app/repomod-MoreHeadPlus/page.tsx'),
  },
  {
    name: 'LateJoin',
    url: 'https://thunderstore.io/c/repo/p/Rebateman/LateJoin/',
    pageFile: path.join(__dirname, '../src/app/repomod-LateJoin/page.tsx'),
  },
  {
    name: 'MoreShopItems',
    url: 'https://thunderstore.io/c/repo/p/GalaxyMods/MoreShopItems/',
    pageFile: path.join(__dirname, '../src/app/repomod-MoreShopItems/page.tsx'),
  },
  {
    name: 'TeamUpgrades',
    url: 'https://thunderstore.io/c/repo/p/EvilCheetah/TeamUpgrades/',
    pageFile: path.join(__dirname, '../src/app/repomod-TeamUpgrades/page.tsx'),
  },
  {
    name: 'MenuLib',
    url: 'https://thunderstore.io/c/repo/p/nickklmao/MenuLib/',
    pageFile: path.join(__dirname, '../src/app/repomod-MenuLib/page.tsx'),
  },
  {
    name: 'MoreUpgrades',
    url: 'https://thunderstore.io/c/repo/p/BULLETBOT/MoreUpgrades/',
    pageFile: path.join(__dirname, '../src/app/repomod-MoreUpgrades/page.tsx'),
  },
  {
    name: 'ExtractionPointConfirmButton',
    url: 'https://thunderstore.io/c/repo/p/Zehs/ExtractionPointConfirmButton/',
    pageFile: path.join(__dirname, '../src/app/repomod-ExtractionPointConfirmButton/page.tsx'),
  },
  {
    name: 'LethalCompanyValuables',
    url: 'https://thunderstore.io/c/repo/p/Zehs/LethalCompanyValuables/',
    pageFile: path.join(__dirname, '../src/app/repomod-LethalCompanyValuables/page.tsx'),
  },
  {
    name: 'InfiniteEnergyCrystals',
    url: 'https://thunderstore.io/c/repo/p/Lazarus/InfiniteEnergyCrystals/',
    pageFile: path.join(__dirname, '../src/app/repomod-InfiniteEnergyCrystals/page.tsx'),
  }
];

module.exports = MOD_CONFIGS; 