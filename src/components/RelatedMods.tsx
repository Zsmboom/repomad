import Link from 'next/link';
import { FiPackage } from 'react-icons/fi';

interface Mod {
  id: string;
  name: string;
  description: string;
  path: string;
}

const mods: Mod[] = [
  {
    id: 'menuLib',
    name: 'MenuLib',
    description: 'A library for creating UI, released early to properly update REPOConfig.',
    path: '/repomod-MenuLib'
  },
  {
    id: 'moreHeadPlus',
    name: 'MoreHeadPlus',
    description: 'Adds several new models to the MoreHead mod, requires MoreHead to function.',
    path: '/repomod-MoreHeadPlus'
  },
  {
    id: 'repoLib',
    name: 'REPOLib',
    description: 'Library for adding content to R.E.P.O. with features for registering items, enemies, and more.',
    path: '/repomod-REPOLib'
  },
  {
    id: 'extractionPointConfirmButton',
    name: 'ExtractionPointConfirmButton',
    description: 'Adds a confirm button to extraction points, requires REPOLib.',
    path: '/repomod-ExtractionPointConfirmButton'
  },
  {
    id: 'moreReviveHP',
    name: 'MoreReviveHP',
    description: 'Increases the health of players upon revival with configurable settings.',
    path: '/repomod-MoreReviveHP'
  },
  {
    id: 'lateJoin',
    name: 'LateJoin',
    description: 'Allows players to join after the lobby has started, during the truck intermission.',
    path: '/repomod-LateJoin'
  },
  {
    id: 'moreShopItems',
    name: 'MoreShopItems',
    description: 'Additional shopping shelves with increased shop loot, requires REPOLib.',
    path: '/repomod-MoreShopItems'
  },
  {
    id: 'moreUpgrades',
    name: 'MoreUpgrades',
    description: 'Adds more upgrade items to the game, including Sprint Usage, Valuable Count, and more.',
    path: '/repomod-MoreUpgrades'
  },
  {
    id: 'teamUpgrades',
    name: 'TeamUpgrades',
    description: 'All upgrades now work for the whole team!',
    path: '/repomod-TeamUpgrades'
  },
  {
    id: 'teamHeals',
    name: 'TeamHeals',
    description: 'Health Packs now work for the whole team!',
    path: '/repomod-TeamHeals'
  },
  {
    id: 'lethalCompanyValuables',
    name: 'LethalCompanyValuables',
    description: 'Adds 30 scrap items from Lethal Company as valuables, requires REPOLib.',
    path: '/repomod-LethalCompanyValuables'
  },
  {
    id: 'legoGnomes',
    name: 'LegoGnomes',
    description: 'Replaces gnome death sounds with Lego brick breaking sound effect.',
    path: '/repomod-LegoGnomes'
  },
  {
    id: 'repoRoles',
    name: 'R.E.P.O. Roles',
    description: 'Adds new character classes with unique abilities and specializations.',
    path: '/repomod-REPORoles'
  },
  {
    id: 'morePlayers',
    name: 'MorePlayers',
    description: 'Increases player limit up to 6 players with balanced gameplay adjustments.',
    path: '/repomod-MorePlayers'
  },
  {
    id: 'moreStamina',
    name: 'MoreStamina',
    description: 'Increases player stamina and enhances endurance for longer runs.',
    path: '/repomod-MoreStamina'
  },
  {
    id: 'improvedStamina',
    name: 'Improved Stamina',
    description: 'Dynamic stamina regeneration system with scaling regen rates and configurable settings.',
    path: '/repomod-ImprovedStamina'
  },
  {
    id: 'shrinkerCart',
    name: 'ShrinkerCart',
    description: 'Reduces the size of the cart for easier navigation through narrow spaces.',
    path: '/repomod-ShrinkerCart'
  },
  {
    id: 'enemyLocation',
    name: 'EnemyLocation', 
    description: 'Tracks monster positions and displays them on your map in real-time.',
    path: '/repomod-EnemyLocation'
  },
  {
    id: 'evenMoreHead',
    name: 'EvenMoreHead',
    description: 'Adds extensive head customization options with 70+ cosmetic items.',
    path: '/repomod-EvenMoreHead'
  },
  {
    id: 'infiniteEnergyCrystals',
    name: 'InfiniteEnergyCrystals',
    description: 'Provides unlimited energy crystals for powering devices and equipment.',
    path: '/repomod-InfiniteEnergyCrystals'
  },
  {
    id: 'evenMoreHats',
    name: 'EvenMoreHats',
    description: 'Fun cosmetic pack with 25+ hats including Bunny Ears, Cowboy hats, and more.',
    path: '/repomod-EvenMoreHats'
  },
  {
    id: 'funnyItems',
    name: 'FunnyItems',
    description: 'A valuable mod that adds many fun and weird items to collect and sell.',
    path: '/repomod-FunnyItems'
  },
  {
    id: 'mimic',
    name: 'Mimic',
    description: 'Adds Skinwalker-inspired features where enemies can mimic player voices.',
    path: '/repomod-Mimic'
  },
  {
    id: 'cartLightsMelanieMelicious',
    name: 'Cart Lights MelanieMelicious',
    description: 'Simple utility mod that adds lights to medium and pocket carts.',
    path: '/repomod-Cart_Lights_MelanieMelicious'
  },
  {
    id: 'xunityAutoTranslator',
    name: 'XUnity AutoTranslator',
    description: 'Powerful translation tool that works with Unity games for localization support.',
    path: '/repomod-XUnity_AutoTranslator'
  },
  {
    id: 'customColors',
    name: 'Custom Colors',
    description: 'RGB color slider mod that allows precise color customization for your character.',
    path: '/repomod-CustomColors'
  },
  {
    id: 'lethalPlushies',
    name: 'Lethal Plushies',
    description: 'Collectible plushies of Lethal Company enemies like Hoarding Bug, Ghost Girl, and more.',
    path: '/repomod-Lethal_Plushies'
  },
  {
    id: 'fovUpdate',
    name: 'FOV Update',
    description: 'Simple but powerful field of view adjustment tool with ultrawide screen support.',
    path: '/repomod-FovUpdate'
  },
  {
    id: 'freecamSpectate',
    name: 'Freecam Spectate',
    description: 'Allows you to freely fly around while spectating dead teammates.',
    path: '/repomod-FreecamSpectate'
  },
  {
    id: 'deadTTS',
    name: 'Dead TTS',
    description: 'Enables text-to-speech communication from dead players with directional audio.',
    path: '/repomod-DeadTTS'
  },
  {
    id: 'betterTruckHeals',
    name: 'Better Truck Heals',
    description: 'Configurable heal amount that increases truck healing from 25 to 50 health points.',
    path: '/repomod-BetterTruckHeals'
  },
  {
    id: 'xhDamageShowEnemyHealthBar',
    name: 'XH DamageShow EnemyHealthBar',
    description: 'Shows enemy health bars and damage numbers for improved combat feedback.',
    path: '/repomod-XH_DamageShow_EnemyHealthBar'
  },
  {
    id: 'theFinalsValuables',
    name: 'THE FINALS Valuables',
    description: 'Adds collectible valuables from the hit game THE FINALS for players to find and sell.',
    path: '/repomod-TheFinalsValuables'
  },
  {
    id: 'berserkerEnemies',
    name: 'Berserker Enemies',
    description: 'Enemies enter rage mode when damaged, increasing their speed and attack damage.',
    path: '/repomod-BerserkerEnemies'
  }
];

interface RelatedModsProps {
  currentModId: string;
  themeColor: string;
}

export default function RelatedMods({ currentModId, themeColor }: RelatedModsProps) {
  const otherMods = mods.filter(mod => mod.id !== currentModId);
  
  const getColorClass = (color: string) => {
    switch(color) {
      case 'blue': return 'text-blue-400 border-blue-500/20 bg-blue-800/20 hover:bg-blue-800/30';
      case 'red': return 'text-red-400 border-red-500/20 bg-red-800/20 hover:bg-red-800/30';
      case 'green': return 'text-green-400 border-green-500/20 bg-green-800/20 hover:bg-green-800/30';
      case 'purple': return 'text-purple-400 border-purple-500/20 bg-purple-800/20 hover:bg-purple-800/30';
      case 'yellow': return 'text-yellow-400 border-yellow-500/20 bg-yellow-800/20 hover:bg-yellow-800/30';
      case 'indigo': return 'text-indigo-400 border-indigo-500/20 bg-indigo-800/20 hover:bg-indigo-800/30';
      default: return 'text-blue-400 border-blue-500/20 bg-blue-800/20 hover:bg-blue-800/30';
    }
  };
  
  return (
    <div className="mt-16">
      <h2 className={`text-2xl font-bold mb-6 ${themeColor === 'yellow' ? 'text-yellow-400' : 
        themeColor === 'red' ? 'text-red-400' : 
        themeColor === 'green' ? 'text-green-400' : 
        themeColor === 'purple' ? 'text-purple-400' : 
        themeColor === 'indigo' ? 'text-indigo-400' : 'text-blue-400'}`}>
        Other REPO Mods You Might Like
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {otherMods.map((mod) => (
          <Link 
            key={mod.id}
            href={mod.path}
            className={`block p-4 rounded-lg border transition-colors ${getColorClass(themeColor)}`}
          >
            <div className="flex items-start">
              <FiPackage className="mr-3 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-medium">{mod.name}</h3>
                <p className="text-sm text-gray-300 mt-1">{mod.description}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
} 