import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { FiDownload, FiPackage, FiSettings, FiCheck } from 'react-icons/fi';

export const metadata: Metadata = {
  title: 'How to Install R.E.P.O Mods | Mod Installation Guide',
  description: 'Learn how to install mods for R.E.P.O using the Thunderstore Mod Manager or manual installation methods. Step-by-step guide for beginners.',
  openGraph: {
    title: 'How to Install R.E.P.O Mods | Mod Installation Guide',
    description: 'Learn how to install mods for R.E.P.O using the Thunderstore Mod Manager or manual installation methods. Step-by-step guide for beginners.',
    url: 'https://repomod.com/How-to-Install-REPO-Mods',
    siteName: 'REPO MODS',
    images: [
      {
        url: 'https://repomod.com/images/og/guide-og.jpg',
        width: 1200,
        height: 630,
        alt: 'REPO Mods Installation Guide',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export default function GuidePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 py-12 max-w-4xl">
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 text-gray-800 dark:text-white">
            How to Install R.E.P.O Mods
          </h1>
          
          <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 mb-8">
            <div className="prose dark:prose-invert max-w-none">
              <div className="mb-8 relative rounded-lg overflow-hidden h-[300px] md:h-[400px]">
                <Image 
                  src="/images/screenshots/Screenshot-Thunderstore.jpg" 
                  alt="Screenshot of the Thunderstore app" 
                  className="object-cover"
                  fill
                  priority
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white text-sm p-2">
                  Image by Destructoid
                </div>
              </div>

              <p className="text-lg mb-6">
                Now you have a list of the best R.E.P.O mods to install, but that's no good if you don't know how to install them. 
                Almost all of these mods require you to first install the BepInExPack. This is essentially the software framework 
                for enabling mods in your game. To install the BepInExPack from the Thunderstore, navigate to the 
                <a 
                  href="https://thunderstore.io/c/repo/p/BepInEx/BepInExPack/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-blue-600 dark:text-blue-400 hover:underline mx-1"
                >
                  BepInExPack page
                </a> 
                and then click 'Manual Download' or 'Install with Mod Manager' if you have the Thunderstore app installed.
              </p>

              <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg my-6 border-l-4 border-blue-500">
                <p className="text-blue-800 dark:text-blue-300">
                  It is much easier to just install the Thunderstore app as you can download all of the above mods instantly 
                  instead of manually extracting the files.
                </p>
              </div>

              <h2 className="text-2xl font-bold mt-8 mb-4 flex items-center text-gray-800 dark:text-white">
                <FiPackage className="mr-2 text-blue-600 dark:text-blue-400" />
                Using the Thunderstore Mod Manager (Recommended)
              </h2>
              
              <p className="mb-4">
                If you choose the Thunderstore route, follow these steps:
              </p>

              <ol className="list-decimal pl-6 space-y-4 my-6">
                <li className="pl-2">
                  <span className="font-medium">Install the <a 
                    href="https://www.overwolf.com/app/thunderstore-thunderstore_mod_manager" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    Thunderstore Mod Manager
                  </a> app.</span>
                </li>
                <li className="pl-2">
                  <span className="font-medium">After installation, open the app.</span>
                </li>
                <li className="pl-2">
                  <span className="font-medium">Search for R.E.P.O in the main search bar and select it.</span>
                </li>
                <li className="pl-2">
                  <span className="font-medium">Create a new profile.</span>
                </li>
                <li className="pl-2">
                  <span className="font-medium">Click on the 'Get Mods' option on the left side of the screen.</span>
                </li>
                <li className="pl-2">
                  <span className="font-medium">Type in BepInExPack and select it.</span>
                </li>
                <li className="pl-2">
                  <span className="font-medium">Select download and it will automatically be sorted into your game folder.</span>
                </li>
                <li className="pl-2">
                  <span className="font-medium">Now, use the search bar to download any additional mods you want.</span>
                </li>
                <li className="pl-2">
                  <span className="font-medium">When ready, click on the 'Modded' tab at the top of the screen, next to the play icon and 'Vanilla' option. This will launch a modded version of R.E.P.O for you to play.</span>
                </li>
              </ol>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold mb-3 flex items-center text-gray-800 dark:text-white">
                    <FiCheck className="mr-2 text-green-500" />
                    Thunderstore Benefits
                  </h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Easy one-click installation</li>
                    <li>Automatic updates for mods</li>
                    <li>Profile management for different mod configurations</li>
                    <li>No manual file handling required</li>
                    <li>Direct integration with the mod repository</li>
                  </ul>
                </div>
                <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold mb-3 flex items-center text-gray-800 dark:text-white">
                    <FiDownload className="mr-2 text-blue-500" />
                    Popular R.E.P.O Mods
                  </h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><a href="http://localhost:3000/#download" className="text-blue-600 dark:text-blue-400 hover:underline">R.E.P.O. Roles</a> - Adds unique player roles</li>
                    <li><a href="http://localhost:3000/#download" className="text-blue-600 dark:text-blue-400 hover:underline">MorePlayers</a> - Customize player count</li>
                    <li><a href="http://localhost:3000/#download" className="text-blue-600 dark:text-blue-400 hover:underline">MoreStamina</a> - Realistic stamina system</li>
                    <li><a href="http://localhost:3000/#download" className="text-blue-600 dark:text-blue-400 hover:underline">ShrinkerCart</a> - Coming soon</li>
                    <li><a href="http://localhost:3000/#download" className="text-blue-600 dark:text-blue-400 hover:underline">Enemy Location</a> - Coming soon</li>
                  </ul>
                </div>
              </div>

              <h2 className="text-2xl font-bold mt-8 mb-4 flex items-center text-gray-800 dark:text-white">
                <FiSettings className="mr-2 text-blue-600 dark:text-blue-400" />
                Manual Installation Method
              </h2>
              
              <p className="mb-4">
                If you wish to manually download the BepInExPack, follow these steps:
              </p>

              <ol className="list-decimal pl-6 space-y-4 my-6">
                <li className="pl-2">
                  <span className="font-medium">Click 'Manual Download'.</span>
                </li>
                <li className="pl-2">
                  <span className="font-medium">When completed, open the folder it is located in (usually your 'Downloads' folder).</span>
                </li>
                <li className="pl-2">
                  <span className="font-medium">Copy the contents of the folder.</span>
                </li>
                <li className="pl-2">
                  <span className="font-medium">Navigate to This PC\Windows (C:)\Program Files (x86)\Steam\steamapps\common\REPO\REPO_Data and paste the BepInEx folder.</span>
                </li>
                <li className="pl-2">
                  <span className="font-medium">Now, repeat the process for any mods you wish to download and pop them in your Plugins folder.</span>
                </li>
              </ol>

              <div className="bg-yellow-50 dark:bg-yellow-900/30 p-4 rounded-lg my-6 border-l-4 border-yellow-500">
                <p className="text-yellow-800 dark:text-yellow-300">
                  When you enter a R.E.P.O game afterward, the BepInExPack will boot up at the same time, but this can simply be minimized whilst you continue with your game.
                </p>
              </div>

              <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-800 dark:text-white">
                Troubleshooting Common Issues
              </h2>

              <div className="space-y-4 mb-6">
                <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg">
                  <h3 className="font-semibold mb-2 text-gray-800 dark:text-white">Mods not working after installation</h3>
                  <p>Ensure BepInExPack is correctly installed and check that you've placed mod files in the correct plugins folder.</p>
                </div>
                <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg">
                  <h3 className="font-semibold mb-2 text-gray-800 dark:text-white">Game crashes on startup with mods</h3>
                  <p>Some mods may conflict with each other. Try disabling mods one by one to identify the problematic one.</p>
                </div>
                <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg">
                  <h3 className="font-semibold mb-2 text-gray-800 dark:text-white">Mod version compatibility</h3>
                  <p>Make sure you're using mods compatible with your current version of R.E.P.O. Check the mod's page for version compatibility.</p>
                </div>
              </div>

              <p className="text-lg mt-8 text-gray-700 dark:text-gray-300">
                Once you've successfully installed mods, you can enjoy all the enhanced features and gameplay improvements they provide. 
                Remember to check for updates regularly to get the latest features and compatibility fixes.
              </p>
            </div>
          </div>
          
          <div className="flex justify-center gap-4 mb-8">
            <Link href="/#download" className="btn btn-primary">
              Browse Available Mods
            </Link>
            <a 
              href="https://thunderstore.io/c/repo/p/BepInEx/BepInExPack/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn bg-purple-600 hover:bg-purple-700 text-white"
            >
              Get BepInExPack
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
} 