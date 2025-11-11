import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const token = request.cookies.get('auth_token')?.value;
  const { pathname } = request.nextUrl;

  // Защищенные маршруты (dashboard)
  if (pathname.startsWith('/dashboard')) {
    if (!token) {
      // Перенаправляем на страницу входа
      return NextResponse.redirect(new URL('/login', request.url));
    }
  }

  // Если пользователь авторизован и пытается зайти на login/register
  if ((pathname === '/login' || pathname === '/register') && token) {
    return NextResponse.redirect(new URL('/dashboard', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/dashboard/:path*', '/login', '/register'],
};
