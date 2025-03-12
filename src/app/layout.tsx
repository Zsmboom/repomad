import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Fisch Macro | Automation Macro Tool for Roblox Fisch Game",
  description: "Fisch Macro is an automation tool designed specifically for the Fisch game on the Roblox platform, helping players improve game efficiency and experience.",
  keywords: "Fisch, Fisch Macro, Roblox, macro, automation, game tool, fishing, resource collection",
  authors: [{ name: "Fisch Macro Team" }],
  creator: "Fisch Macro Team",
  publisher: "Fisch Macro",
  icons: {
    icon: '/favicon.svg',
  },
  openGraph: {
    title: "Fisch Macro | Automation Macro Tool for Roblox Fisch Game",
    description: "Enhance your Roblox Fisch gaming experience with automated operations, easy resource collection, and improved efficiency.",
    url: "https://fischmacroo.com",
    siteName: "Fisch Macro",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: '/images/og-image.svg',
        width: 1200,
        height: 630,
        alt: 'Fisch Macro - Automation Macro Tool for Roblox Fisch Game',
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fisch Macro | Automation Macro Tool for Roblox Fisch Game",
    description: "Enhance your Roblox Fisch gaming experience with automated operations, easy resource collection, and improved efficiency.",
    creator: "@fischmacroo",
    images: ['/images/og-image.svg'],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://fischmacroo.com',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="canonical" href="https://fischmacroo.com" />
        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-EGQD4HK34H"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-EGQD4HK34H');
            `,
          }}
        />
        {/* Google AdSense */}
        <script 
          async 
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3825534897375588"
          crossOrigin="anonymous"
        />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
