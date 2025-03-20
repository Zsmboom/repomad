import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Disclaimer | REPO Mod - Download and Install Mods for REPO Games',
  description: 'Legal disclaimer for REPO Mod, the leading website for REPO game mods and customizations.',
};

export default function Disclaimer() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-3xl font-bold mb-4">Disclaimer</h1>
          <p className="mb-8"><Link href="/" className="text-blue-600 hover:underline">← Back to Home</Link></p>
          
          <div className="prose prose-lg max-w-none">
            <p className="mb-4">Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Website Disclaimer</h2>
            <p>
              The information provided by REPO Mod (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) on repomod.com (the &quot;Site&quot;) is for general informational purposes only. All information on the Site is provided in good faith, however we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability, or completeness of any information on the Site.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">External Links Disclaimer</h2>
            <p>
              The Site may contain (or you may be sent through the Site) links to other websites or content belonging to or originating from third parties or links to websites and features in banners or other advertising. Such external links are not investigated, monitored, or checked for accuracy, adequacy, validity, reliability, availability, or completeness by us. We do not warrant, endorse, guarantee, or assume responsibility for the accuracy or reliability of any information offered by third-party websites linked through the Site or any website or feature linked in any banner or other advertising.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Mod Content Disclaimer</h2>
            <p>
              REPO Mod is a platform that provides access to modifications (mods) created by third-party developers for various REPO games. These mods are not developed by, affiliated with, endorsed by, or connected to the original game developers unless explicitly stated. Use of any mods downloaded from our site is at your own risk and discretion.
            </p>
            <p>
              We make no guarantees regarding the performance, compatibility, or safety of any mods with any game or platform. Users should be aware that the use of mods may potentially violate the terms of service of certain games or platforms. It is the user&apos;s responsibility to ensure that their use of mods complies with all applicable terms of service, rules, and policies.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Fair Use Disclaimer</h2>
            <p>
              This Site may contain copyrighted material the use of which has not always been specifically authorized by the copyright owner. We are making such material available in our efforts to provide information and tools to enhance the gaming experience. We believe this constitutes a &quot;fair use&quot; of any such copyrighted material as provided for in section 107 of the US Copyright Law.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Errors and Omissions Disclaimer</h2>
            <p>
              The information given by the Site is for general guidance on matters of interest only. Even if the Site takes every precaution to ensure that the content is both current and accurate, errors can occur. Plus, given the changing nature of laws, rules, and regulations, there may be delays, omissions, or inaccuracies in the information contained on the Site.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Views Expressed Disclaimer</h2>
            <p>
              The Site may contain views and opinions which are those of the authors and do not necessarily reflect the official policy or position of any other author, agency, organization, employer, or company, including the Site.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">No Responsibility Disclaimer</h2>
            <p>
              In no event shall the Site be liable for any special, direct, indirect, consequential, or incidental damages or any damages whatsoever, whether in an action of contract, negligence, or other tort, arising out of or in connection with the use of the Service or the contents of the Service.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Contact Us</h2>
            <p>
              If you have any questions about this Disclaimer, please contact us at:
            </p>
            <p className="mb-4">
              Email: <a href="mailto:legal@repomod.com" className="text-blue-600 hover:underline">legal@repomod.com</a>
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
} 