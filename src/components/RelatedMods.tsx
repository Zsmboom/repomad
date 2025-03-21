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
  }
];

interface RelatedModsProps {
  currentModId: string;
  themeColor: string;
}

export default function RelatedMods({ currentModId, themeColor }: RelatedModsProps) {
  const otherMods = mods.filter(mod => mod.id !== currentModId);
  
  // 不管传入什么颜色，都始终使用amber
  const colorClass = 'text-amber-400 border-amber-500/20 bg-amber-800/20 hover:bg-amber-800/30';
  
  return (
    <div className="mt-16">
      <h2 className="text-2xl font-bold mb-6 text-amber-400">
        Other REPO Mods You Might Like
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {otherMods.map((mod) => (
          <Link 
            key={mod.id}
            href={mod.path}
            className={`block p-4 rounded-lg border transition-colors ${colorClass}`}
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