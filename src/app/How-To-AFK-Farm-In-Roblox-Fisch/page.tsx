import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'How To AFK Farm In Roblox Fisch | Complete Guide',
  description: 'Learn how to use Fisch Macro for AFK farming in Roblox. Step-by-step guide with tips and tricks for optimal results.',
  openGraph: {
    title: 'How To AFK Farm In Roblox Fisch | Complete Guide',
    description: 'Learn how to use Fisch Macro for AFK farming in Roblox. Step-by-step guide with tips and tricks for optimal results.',
    url: 'https://fischmacroo.com/How-To-AFK-Farm-In-Roblox-Fisch',
    siteName: 'Fisch Macro',
    images: [
      {
        url: 'https://fischmacroo.com/images/og/guide-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Fisch Macro Guide',
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
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-12 max-w-4xl">
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-8">
            How To AFK Farm In Roblox Fisch - Complete Guide
          </h1>
          
          <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 mb-8">
            <div className="prose dark:prose-invert max-w-none">
              <p className="text-lg mb-6">
                If you're looking to maximize your rewards and progress in Roblox Fisch without having to actively play, 
                then AFK farming might be the perfect solution. This guide will walk you through setting up an AutoHotkey 
                AFK macro script to automate your farming and ensure you can leave it running overnight without interruptions.
              </p>
              
              <h2 className="text-2xl font-bold mt-8 mb-4">How To AFK Farm In Roblox Fisch (V12 UPDATED)</h2>
              
              <h3 className="text-xl font-semibold mt-6 mb-3">Step 1: Download AutoHotkey (Deprecated Version)</h3>
              <p>
                The first thing you need to do is download AutoHotkey. However, make sure you download the deprecated version, 
                as this is the version that supports the macros used in this guide. You can find the download link on my website, 
                which is linked in the video description.
              </p>
              <ul className="list-disc pl-6 my-4">
                <li>Visit the official AutoHotkey's website: <a href="https://www.autohotkey.com/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">https://www.autohotkey.com/</a></li>
                <li>Locate and download the deprecated version (v1.1) of AutoHotkey.</li>
              </ul>
              <p className="italic text-sm bg-yellow-50 dark:bg-yellow-900 p-3 rounded">
                Tip: The newer versions of AutoHotkey might not work with the provided macro script, so ensure you have the correct version.
              </p>
              
              <div className="my-6 flex justify-center">
                <Image 
                  src="/images/autohotkey.jpg" 
                  alt="AutoHotkey Installation" 
                  width={600} 
                  height={400} 
                  className="rounded-lg shadow-md"
                />
              </div>
              
              <h3 className="text-xl font-semibold mt-6 mb-3">Step 2: Download the Macro Script</h3>
              <p>
                After you've installed AutoHotkey, you'll need the V11 macro here or V12 or other macro right here <a href="https://fischmacroo.com/#download" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Fischmacroo</a>. This is the macro script that will automate your farming in Fisch.
              </p>
              <div className="bg-red-50 dark:bg-red-900 p-4 rounded-md my-4">
                <p className="font-bold">IMPORTANT:</p>
                <p>
                  V12/V13 (IRUS) has many detections on Virustotal. Be careful when downloading .EXE files. 
                  I'm not responsible for any damage caused. If your browser flags the V11 macro however, 
                  it's likely a false positive due to the script's automation. Allow it through, or temporarily 
                  disable your antivirus software.
                </p>
              </div>
              <ul className="list-disc pl-6 my-4">
                <li>Click on the highlighted link to download the script.</li>
                <li>The file will be saved to your downloads folder.</li>
              </ul>
              <p className="text-sm">Original creator: AsphaltCake</p>
              
              <div className="my-6 flex justify-center">
                <Image 
                  src="/images/fischmacro-shot.jpg" 
                  alt="Fisch Macro Screenshot" 
                  width={600} 
                  height={400} 
                  className="rounded-lg shadow-md"
                />
              </div>
              
              <h3 className="text-xl font-semibold mt-6 mb-3">Step 3: Install and Run AutoHotkey</h3>
              <p>
                Now that you have the macro script downloaded, you'll need to set up AutoHotkey correctly.
              </p>
              <ul className="list-disc pl-6 my-4">
                <li>Install AutoHotkey: Follow the on-screen instructions to install the program.</li>
                <li>Run as Administrator: Right-click on the AutoHotkey icon and select "Run as administrator". This is crucial to avoid any permission issues when the macro is running.</li>
              </ul>
              <p className="italic text-sm bg-blue-50 dark:bg-blue-900 p-3 rounded">
                Pro Tip: Running AutoHotkey as an administrator ensures that the script has full access to your system's inputs, reducing the chances of errors or bugs.
              </p>
              
              <h3 className="text-xl font-semibold mt-6 mb-3">Step 4: Execute the Macro Script</h3>
              <p>
                With AutoHotkey running, you can now execute the downloaded macro script.
              </p>
              <ul className="list-disc pl-6 my-4">
                <li>Go to your Downloads folder.</li>
                <li>Double-click the macro script file to run it.</li>
                <li>The script is now ready to automate your actions in Fisch!</li>
              </ul>
              
              <h3 className="text-xl font-semibold mt-6 mb-3">Step 5: Join Fisch on Roblox</h3>
              <p>
                Launch Roblox and join the game Fisch. Once you're in the game:
              </p>
              <ul className="list-disc pl-6 my-4">
                <li>Make sure UI navigation toggle is enabled in the Roblox settings.</li>
                <li>If the navigation key doesn't work as expected, you may need to change the key binding in the Roblox settings. More details and fixes for this issue are available on my website.</li>
              </ul>
              <p className="italic text-sm bg-green-50 dark:bg-green-900 p-3 rounded">
                Helpful Hint: If you experience any issues with the UI navigation, try toggling it off and on again. This can often resolve minor glitches.
              </p>
              
              <div className="my-6 flex justify-center">
                <Image 
                  src="/images/fisch-shot.jpg" 
                  alt="Fisch Game Screenshot" 
                  width={600} 
                  height={400} 
                  className="rounded-lg shadow-md"
                />
              </div>
              
              <h3 className="text-xl font-semibold mt-6 mb-3">Step 6: Start the Macro</h3>
              <p>
                Once you're in the game and have set up the UI, you can now start the macro:
              </p>
              <ul className="list-disc pl-6 my-4">
                <li>Enable the Hide UI button at the top right. It should be the camera icon.</li>
                <li>Press P to start the macro script.</li>
                <li>Press M to stop the macro if needed.</li>
                <li>If the macro isn't responding or glitches out, press O to reload it.</li>
              </ul>
              <p className="bg-red-50 dark:bg-red-900 p-3 rounded">
                Warning: Avoid fullscreen mode while using the macro, as it can interfere with the script's accuracy.
              </p>
              
              <h2 className="text-2xl font-bold mt-8 mb-4">Tips for Successful AFK Farming</h2>
              <ul className="list-disc pl-6 my-4">
                <li><strong>Optimize Your Character Appearance:</strong> It's recommended to wear a darker outfit. Bright colors or detailed costumes can confuse the macro, leading to potential errors.</li>
                <li><strong>Camera Position:</strong> Adjust your camera angle to provide a clear view of your character. A third-person perspective usually works best.</li>
                <li><strong>Edit Macro Values:</strong> Feel free to customize the macro settings to suit your needs, such as changing the speed or toggling keys.</li>
              </ul>
              
              <h2 className="text-2xl font-bold mt-8 mb-4">Additional Recommendations</h2>
              <ul className="list-disc pl-6 my-4">
                <li><strong>Disable Notifications:</strong> Turn off notifications from apps like Discord to avoid interruptions while AFK farming.</li>
                <li><strong>Set Display Scale to 100%:</strong> Ensuring your display scale is set to 100% prevents misalignment issues with the macro script.</li>
                <li><strong>Taskbar Visibility:</strong> Keep your taskbar visible; hiding it may cause the macro to misinterpret screen elements.</li>
                <li><strong>Overnight Farming Tip:</strong> If you plan to leave the macro running overnight, disable any unnecessary programs using Task Manager. This will reduce the risk of your system slowing down or disconnecting.</li>
              </ul>
              
              <h2 className="text-2xl font-bold mt-8 mb-4">FAQ: Common Issues and Solutions</h2>
              
              <div className="space-y-6 mt-4">
                <div>
                  <h3 className="text-lg font-semibold">1. What if the macro doesn't shake?</h3>
                  <p>
                    If the macro isn't shaking as expected, you can fix this by editing the script:
                  </p>
                  <ul className="list-disc pl-6 my-2">
                    <li>Right-click the macro file in File Explorer and select "Open with Notepad".</li>
                    <li>Scroll down until you find Shake mode: "Click".</li>
                    <li>Change it to Shake mode: "Navigation".</li>
                    <li>Save the file and restart the macro.</li>
                  </ul>
                  <p className="italic text-sm">
                    Reminder: Make sure to turn on the UI navigation toggle in Roblox settings after making this change.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold">2. Why am I being kicked for AFKing?</h3>
                  <p>
                    This usually happens because the server has been up for a long time and reaches its reset threshold. 
                    Unfortunately, there's nothing you can do about this other than joining a new server.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold">3. The navigation toggle didn't work. What should I do?</h3>
                  <p>
                    Edit the macro settings and change the key binding to # or whatever is specified in your Roblox settings. 
                    Make sure you've enabled UI navigation toggle in the game settings.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold">4. The macro script gets confused. How do I fix this?</h3>
                  <p>
                    Try wearing a darker outfit and avoid using detailed or bright costumes. 
                    This helps the macro differentiate your character more easily.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold">5. Can I use fullscreen mode while AFK farming?</h3>
                  <p>
                    No, do not use fullscreen mode. The macro relies on specific screen positions, 
                    and fullscreen can alter these, leading to errors.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold">6. Why is my macro disconnecting frequently?</h3>
                  <p>
                    Make sure your PC doesn't go into sleep mode and disable any power-saving settings. 
                    Additionally, turn off any unnecessary programs or notifications that might interrupt the macro.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold">7. How can I customize the macro settings?</h3>
                  <p>
                    You can edit the values within the macro script to adjust the speed, toggle keys, or other preferences. 
                    Right-click the AHK file, open with Notepad, and you can change settings. Be careful with what you change 
                    and only change the settings if you know what you're doing!
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold">8. Should I close any programs before starting the macro?</h3>
                  <p>
                    Yes, it's a good idea to close any unnecessary programs, especially those that send notifications 
                    (e.g., Discord, email clients), as these can interfere with the macro.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold">9. What display settings should I use?</h3>
                  <p>
                    Set your display scale to 100% and make sure your taskbar isn't set to auto-hide. 
                    This prevents alignment issues that can affect the macro's performance.
                  </p>
                </div>
              </div>
              
              <div className="mt-8 text-center">
                <p className="mb-4">With these steps, you should be all set for a successful AFK farming session in Roblox Fisch.</p>
                <Link 
                  href="/#download" 
                  className="btn btn-primary inline-block"
                >
                  Download Fisch Macro Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
} 