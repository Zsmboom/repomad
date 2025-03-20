import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import fs from 'fs';
import path from 'path';

// 尝试读取图标版本号
let iconVersion = '';
try {
  const versionFile = path.join(process.cwd(), 'public', 'favicon-version.json');
  if (fs.existsSync(versionFile)) {
    const versionData = JSON.parse(fs.readFileSync(versionFile, 'utf8'));
    iconVersion = `-v${versionData.version}`;
  }
} catch (error) {
  console.error('Error reading favicon version:', error);
}

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://repomod.com'),
  title: "REPOMOD[NEW]-The most complete R.E.P.O mods",
  description: "REPOMOD is the ultimate modification for REPO, enhancing the gameplay with improved physics, better co-op features, and performance optimizations for up to 6 players.",
  keywords: "REPOMOD, REPO mod, REPO game, game modification, cooperative horror, physics-based, repomod.com",
  authors: [{ name: "REPOMOD Team" }],
  creator: "REPOMOD Team",
  publisher: "REPOMOD Team",
  icons: {
    icon: [
      { url: '/images/favicon.png', type: 'image/png' },
      { url: '/images/favicon.png', type: 'image/png' },
      { url: '/images/favicon.png', type: 'image/png' },
      { url: '/images/favicon.png', type: 'image/png' },
      { url: '/images/favicon.png', type: 'image/png' },
      { url: '/images/favicon.png', type: 'image/png' },
      { url: '/images/favicon.png', type: 'image/png' },
      { url: '/images/favicon.png', type: 'image/png' }
    ],
    apple: '/images/favicon.png',
  },
  openGraph: {
    title: "REPOMOD[NEW]-The most complete R.E.P.O mods",
    description: "The ultimate modification for REPO, enhancing the co-op horror experience with improved physics, better features, and performance optimizations.",
    url: "https://repomod.com",
    siteName: "REPOMOD",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: '/images/screenshots/REPO-Game-Screenshot.jpg',
        width: 1200,
        height: 630,
        alt: 'REPOMOD - Enhance Your REPO Experience',
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "REPOMOD - Enhance Your REPO Experience",
    description: "The ultimate modification for REPO, enhancing the co-op horror experience with improved physics, better features, and performance optimizations.",
    creator: "@semirork",
    images: ['/images/screenshots/REPO-Game-Screenshot.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
  },
  alternates: {
    canonical: 'https://repomod.com',
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
        {/* Google tag (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-DX9T2CB3DD"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-DX9T2CB3DD');
            `,
          }}
        />
        
        {/* 防止浏览器缓存图标 */}
        <meta httpEquiv="Cache-Control" content="no-cache, no-store, must-revalidate" />
        <meta httpEquiv="Pragma" content="no-cache" />
        <meta httpEquiv="Expires" content="0" />
        
        {/* favicon基本设置 */}
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="icon" href="/images/favicon.png" type="image/png" />
        <link rel="alternate icon" href="/images/favicon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/images/favicon.png" />
        
        {/* 添加多尺寸图标引用 */}
        <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon.png" />
        <link rel="icon" type="image/png" sizes="48x48" href="/images/favicon.png" />
        <link rel="icon" type="image/png" sizes="64x64" href="/images/favicon.png" />
        <link rel="icon" type="image/png" sizes="128x128" href="/images/favicon.png" />
        <link rel="icon" type="image/png" sizes="256x256" href="/images/favicon.png" />
        
        {/* 结构化数据 - 产品统计信息 */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `
              {
                "@context": "https://schema.org",
                "@type": "VideoGame",
                "name": "REPO",
                "applicationCategory": "Game",
                "operatingSystem": "Windows",
                "offers": {
                  "@type": "Offer",
                  "price": "19.99",
                  "priceCurrency": "USD",
                  "url": "https://store.steampowered.com/app/3241660/REPO/"
                },
                "aggregateRating": {
                  "@type": "AggregateRating",
                  "ratingValue": "4.8",
                  "ratingCount": "2500",
                  "bestRating": "5",
                  "worstRating": "1"
                },
                "description": "REPO is a cooperative horror game developed by semiwork, a Swedish independent studio. It supports up to 6 players working together online to navigate dangerous environments and collect valuable items.",
                "genre": ["Horror", "Cooperative", "Action"],
                "gamePlatform": ["PC"],
                "applicationSubCategory": "Horror Game",
                "availableOnDevice": "PC",
                "screenshot": "https://repomod.com/images/screenshots/REPO-Game-Screenshot.jpg",
                "image": "https://repomod.com/images/screenshots/REPO-Game-Screenshot.jpg",
                "logo": "https://repomod.com/images/logo/repomod-logo.jpg",
                "softwareVersion": "Early Access",
                "sameAs": "https://store.steampowered.com/app/3241660/REPO/",
                "author": {
                  "@type": "Organization",
                  "name": "semiwork"
                }
              }
            `,
          }}
        />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
