'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import Script from 'next/script';
import { useEffect, Suspense } from 'react';

// Google Analytics 测量ID
const GA_MEASUREMENT_ID = 'G-DX9T2CB3DD';

// 为gtag声明全局类型
declare global {
  interface Window {
    gtag: (
      command: string,
      targetId: string,
      config?: {
        page_path?: string;
        [key: string]: any;
      }
    ) => void;
    dataLayer: any[];
  }
}

export function AnalyticsScripts() {
  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}', {
            page_path: window.location.pathname,
          });
        `}
      </Script>
    </>
  );
}

// 实际追踪器组件
function AnalyticsTrackerInner() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  
  useEffect(() => {
    if (typeof window !== 'undefined' && window.gtag) {
      const url = pathname + (searchParams?.toString() ? `?${searchParams.toString()}` : '');
      
      // 当路由变化时发送页面浏览事件
      window.gtag('config', GA_MEASUREMENT_ID, {
        page_path: url,
      });
      
      console.log(`[Google Analytics] Page view tracked: ${url}`);
    }
  }, [pathname, searchParams]);
  
  return null;
}

// 带有Suspense边界的包装器
export function AnalyticsTracker() {
  return (
    <Suspense fallback={null}>
      <AnalyticsTrackerInner />
    </Suspense>
  );
}

export default function AnalyticsProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <AnalyticsScripts />
      <AnalyticsTracker />
      {children}
    </>
  );
} 