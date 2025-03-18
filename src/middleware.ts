import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();
  const { pathname } = url;
  const userAgent = request.headers.get('user-agent') || '';
  
  // 检查是否为搜索引擎爬虫（包括Google Search Console）
  const isSearchEngine = /Googlebot|Google-Search-Console|bingbot|Baiduspider|YandexBot|Sogou|Slurp|DuckDuckBot|YisouSpider|Exabot|facebookexternalhit|ia_archiver/i.test(userAgent);
  
  // 检查请求的路径是否为非网页内容（下载文件、图标等）
  const isNonWebContent = /\.(zip|rar|tar|gz|pdf|doc|docx|xls|xlsx|ppt|pptx|mp3|mp4|avi|mov|wmv|flv|jpg|jpeg|png|gif|svg|ico|woff|woff2|ttf|eot|map|ahk)$/i.test(pathname);
  
  // 如果是搜索引擎且请求的是非网页内容，返回 404 或 403
  if (isSearchEngine && isNonWebContent) {
    console.log(`Blocking search engine access to: ${pathname}, User-Agent: ${userAgent}`);
    return new NextResponse(null, { status: 404 });
  }
  
  // 我们已经在 next.config.js 中处理了 www 到非 www 的重定向
  // 我们已经在 next.config.js 中处理了 HTTP 到 HTTPS 的重定向
  
  // 确保路径末尾没有斜杠（除了根路径）
  // 这个功能在 next.config.js 中不容易实现
  if (pathname !== '/' && pathname.endsWith('/')) {
    url.pathname = pathname.slice(0, -1);
    return NextResponse.redirect(url);
  }
  
  return NextResponse.next();
}

// 配置中间件应用于哪些路径
export const config = {
  matcher: [
    /*
     * 匹配所有路径，除了:
     * - API 路由
     * - 静态文件（如图片、JS、CSS等）
     * - favicon.ico
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}; 