const path = require('path');

// 要监控的模组配置
const MOD_CONFIGS = [
  {
    name: 'TeamHeals',
    url: 'https://thunderstore.io/c/repo/p/EvilCheetah/TeamHeals/',
    pageFile: path.join(__dirname, '../src/app/repomod-TeamHeals/page.tsx'),
  },
  {
    name: 'MoreStamina',
    url: 'https://thunderstore.io/c/repo/p/BobisMods/MoreStamina/',
    pageFile: path.join(__dirname, '../src/app/repomod-MoreStamina/page.tsx'),
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
  },
  {
    name: 'EvenMoreHats',
    url: 'https://thunderstore.io/c/repo/p/fedorabunnies/EvenMoreHats/',
    pageFile: path.join(__dirname, '../src/app/repomod-EvenMoreHats/page.tsx'),
  },
  {
    name: 'FunnyItems',
    url: 'https://thunderstore.io/c/repo/p/Ako/FunnyItems/',
    pageFile: path.join(__dirname, '../src/app/repomod-FunnyItems/page.tsx'),
  },
  {
    name: 'Mimic',
    url: 'https://thunderstore.io/c/repo/p/eth9n/Mimic/',
    pageFile: path.join(__dirname, '../src/app/repomod-Mimic/page.tsx'),
  },
  {
    name: 'Cart_Lights_MelanieMelicious',
    url: 'https://thunderstore.io/c/repo/p/MelanieMelicious/Cart_Lights_MelanieMelicious/',
    pageFile: path.join(__dirname, '../src/app/repomod-Cart_Lights_MelanieMelicious/page.tsx'),
  },
  {
    name: 'XUnity_AutoTranslator',
    url: 'https://thunderstore.io/c/repo/p/Hayrizan/XUnity_AutoTranslator/',
    pageFile: path.join(__dirname, '../src/app/repomod-XUnity_AutoTranslator/page.tsx'),
  },
  {
    name: 'CustomColors',
    url: 'https://thunderstore.io/c/repo/p/x753_REPO/CustomColors/',
    pageFile: path.join(__dirname, '../src/app/repomod-CustomColors/page.tsx'),
  },
  {
    name: 'Lethal_Plushies',
    url: 'https://thunderstore.io/c/repo/p/Spoopylocal/Lethal_Plushies/',
    pageFile: path.join(__dirname, '../src/app/repomod-Lethal_Plushies/page.tsx'),
  },
  {
    name: 'FovUpdate',
    url: 'https://thunderstore.io/c/repo/p/darmuh/FovUpdate/',
    pageFile: path.join(__dirname, '../src/app/repomod-FovUpdate/page.tsx'),
  },
  {
    name: 'FreecamSpectate',
    url: 'https://thunderstore.io/c/repo/p/nickklmao/FreecamSpectate/',
    pageFile: path.join(__dirname, '../src/app/repomod-FreecamSpectate/page.tsx'),
  },
  {
    name: 'DeadTTS',
    url: 'https://thunderstore.io/c/repo/p/TTSPlugin/DeadTTS/',
    pageFile: path.join(__dirname, '../src/app/repomod-DeadTTS/page.tsx'),
  },
  {
    name: 'BetterTruckHeals',
    url: 'https://thunderstore.io/c/repo/p/Lazarus/BetterTruckHeals/',
    pageFile: path.join(__dirname, '../src/app/repomod-BetterTruckHeals/page.tsx'),
  },
  {
    name: 'XH_DamageShow_EnemyHealthBar',
    url: 'https://thunderstore.io/c/repo/p/XiaohaiMod/XH_DamageShow_EnemyHealthBar/',
    pageFile: path.join(__dirname, '../src/app/repomod-XH_DamageShow_EnemyHealthBar/page.tsx'),
  },
  {
    name: 'TheFinalsValuables',
    url: 'https://thunderstore.io/c/repo/p/huxsTF/TheFinalsValuables/',
    pageFile: path.join(__dirname, '../src/app/repomod-TheFinalsValuables/page.tsx'),
  },
  {
    name: 'BerserkerEnemies',
    url: 'https://thunderstore.io/c/repo/p/CygnusX/BerserkerEnemies/',
    pageFile: path.join(__dirname, '../src/app/repomod-BerserkerEnemies/page.tsx'),
  },
  {
    name: 'TestMod',
    url: 'https://thunderstore.io/c/repo/p/test/TestMod/',
    pageFile: 'src/app/repomod-TestMod/page.tsx'
  }
];

module.exports = MOD_CONFIGS; 