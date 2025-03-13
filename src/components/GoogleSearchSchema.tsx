import React from 'react';
import Head from 'next/head';

interface GoogleSearchSchemaProps {
  title?: string;
  description?: string;
  imageUrl?: string;
  datePublished?: string;
  dateModified?: string;
  authorName?: string;
  organizationName?: string;
  organizationLogo?: string;
  rating?: number;
  ratingCount?: number;
  price?: string;
  currency?: string;
  availability?: 'InStock' | 'OutOfStock' | 'PreOrder';
  faqs?: Array<{question: string, answer: string}>;
  features?: Array<string>;
  downloadUrl?: string;
  fileSize?: string;
  operatingSystem?: string;
  applicationCategory?: string;
}

export default function GoogleSearchSchema({
  title = "Fisch Macro[Latest], including V13, V12, Xan V3",
  description = "Fisch Macro is an automation tool designed specifically for the Fisch game on the Roblox platform, helping players improve game efficiency and experience.",
  imageUrl = "https://fischmacroo.com/images/og-image.svg",
  datePublished = "2023-01-01T00:00:00Z",
  dateModified = new Date().toISOString(),
  authorName = "Fisch Macro Team",
  organizationName = "Fisch Macro",
  organizationLogo = "https://fischmacroo.com/favicon.svg",
  rating = 4.8,
  ratingCount = 10000,
  price = "0",
  currency = "USD",
  availability = "InStock",
  faqs = [
    {
      question: "Is Fisch Macro safe to use?",
      answer: "Yes, Fisch Macro is designed with safety in mind. It uses advanced simulation technology to mimic real player operations, making it safe and reliable without posing any risk to your game account."
    },
    {
      question: "How do I install Fisch Macro?",
      answer: "To install Fisch Macro, first download AutoHotkey, then download the Fisch Macro file from our website, right-click on it and select 'Open with AutoHotkey'."
    },
    {
      question: "Which operating systems does Fisch Macro support?",
      answer: "Fisch Macro currently supports Windows 10 and 11. A Mac version (codenamed 'Aurium') is coming soon."
    }
  ],
  features = [
    "Automated Fishing",
    "Scheduled Tasks",
    "Safety Features",
    "Customizable Settings",
    "Resource Optimization",
    "Regular Updates"
  ],
  downloadUrl = "https://fischmacroo.com/download",
  fileSize = "61 KB",
  operatingSystem = "Windows 10, Windows 11",
  applicationCategory = "GameApplication"
}: GoogleSearchSchemaProps) {
  
  // 软件应用结构化数据
  const softwareApplicationSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": title,
    "description": description,
    "image": imageUrl,
    "datePublished": datePublished,
    "dateModified": dateModified,
    "author": {
      "@type": "Organization",
      "name": authorName
    },
    "publisher": {
      "@type": "Organization",
      "name": organizationName,
      "logo": {
        "@type": "ImageObject",
        "url": organizationLogo
      }
    },
    "applicationCategory": applicationCategory,
    "operatingSystem": operatingSystem,
    "offers": {
      "@type": "Offer",
      "price": price,
      "priceCurrency": currency,
      "availability": `https://schema.org/${availability}`
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": rating.toString(),
      "ratingCount": ratingCount.toString(),
      "bestRating": "5",
      "worstRating": "1"
    },
    "downloadUrl": downloadUrl,
    "fileSize": fileSize,
    "softwareVersion": "V13",
    "featureList": features.join(", ")
  };

  // FAQ 结构化数据
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <Head>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(softwareApplicationSchema)
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema)
        }}
      />
    </Head>
  );
} 