interface ModDefault {
  name: string;
  description: string;
  detailUrl: string;
  isNew: boolean;
  nameOverride?: string; // 用于匹配config.json中的键名
}

// 默认模组信息，只包含静态部分
export const modDefaults: ModDefault[] = [
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
    description: 'Adds flying camera controls while spectating teammates for a better viewing experience',
    detailUrl: '/repomod-FreecamSpectate',
    isNew: true,
    nameOverride: 'FreecamSpectate' // 用于匹配config.json中的键名
  },
  {
    name: 'Dead TTS',
    description: 'Hear and see text-to-speech from dead players with directional audio and visual cues',
    detailUrl: '/repomod-DeadTTS',
    isNew: true,
    nameOverride: 'DeadTTS' // 用于匹配config.json中的键名
  },
  {
    name: 'Better Truck Heals',
    description: 'Increases heal amount to 50 instead of default 25 with full REPOConfig customization',
    detailUrl: '/repomod-BetterTruckHeals',
    isNew: true,
    nameOverride: 'BetterTruckHeals' // 用于匹配config.json中的键名
  },
  {
    name: 'XH DamageShow EnemyHealthBar',
    description: 'Displays enemy health bars and damage numbers for better combat awareness',
    detailUrl: '/repomod-XH_DamageShow_EnemyHealthBar',
    isNew: true,
    nameOverride: 'XH_DamageShow_EnemyHealthBar' // 用于匹配config.json中的键名
  },
  {
    name: 'Improved Stamina',
    description: 'Enhances stamina regeneration with dynamic scaling and customizable settings',
    detailUrl: '/repomod-ImprovedStamina',
    isNew: true,
    nameOverride: 'ImprovedStamina' // 用于匹配config.json中的键名
  },
  {
    name: 'THE FINALS Valuables',
    description: 'Adds collectible valuables from the hit game THE FINALS to R.E.P.O.',
    detailUrl: '/repomod-TheFinalsValuables',
    isNew: true,
    nameOverride: 'TheFinalsValuables' // 用于匹配config.json中的键名
  },
  {
    name: 'Berserker Enemies',
    description: 'Enemies rage when injured, gaining speed and damage with dynamic health bars',
    detailUrl: '/repomod-BerserkerEnemies',
    isNew: true,
    nameOverride: 'BerserkerEnemies' // 用于匹配config.json中的键名
  }
]; 