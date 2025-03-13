import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://fischmacroo.com'),
  title: "Fisch Macro[Latest], including V13, V12, Xan V3",
  description: "Fisch Macro is an automation tool designed specifically for the Fisch game on the Roblox platform, helping players improve game efficiency and experience.",
  keywords: "Fisch, Fisch Macro, Roblox, macro, automation, game tool, fishing, resource collection",
  authors: [{ name: "Fisch Macro Team" }],
  creator: "Fisch Macro Team",
  publisher: "Fisch Macro",
  icons: {
    icon: '/favicon.svg',
  },
  openGraph: {
    title: "Fisch Macro[Latest], including V13, V12, Xan V3",
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
    title: "Fisch Macro[Latest], including V13, V12, Xan V3",
    description: "Enhance your Roblox Fisch gaming experience with automated operations, easy resource collection, and improved efficiency.",
    creator: "@fischmacroo",
    images: ['/images/og-image.svg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
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
        {/* 结构化数据 - 产品统计信息 */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `
              {
                "@context": "https://schema.org",
                "@type": "SoftwareApplication",
                "name": "Fisch Macro",
                "applicationCategory": "GameApplication",
                "operatingSystem": "Windows",
                "offers": {
                  "@type": "Offer",
                  "price": "0",
                  "priceCurrency": "USD"
                },
                "aggregateRating": {
                  "@type": "AggregateRating",
                  "ratingValue": "4.8",
                  "ratingCount": "10000",
                  "bestRating": "5",
                  "worstRating": "1"
                },
                "description": "Fisch Macro is an automation tool designed specifically for the Fisch game on the Roblox platform, helping players improve game efficiency and experience.",
                "applicationSubCategory": "Automation Tool",
                "availableOnDevice": "PC",
                "featureList": [
                  "200% Efficiency Boost",
                  "24/7 Availability",
                  "Automated Operations",
                  "Resource Collection"
                ],
                "screenshot": "https://fischmacroo.com/images/og-image.svg",
                "softwareVersion": "V13",
                "author": {
                  "@type": "Organization",
                  "name": "Fisch Macro Team"
                }
              }
            `,
          }}
        />
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
