import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();
  const { pathname } = url;
  
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