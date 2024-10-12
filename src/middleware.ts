import { Key } from './redux/types/user.types';
import { NextResponse, NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  let isLoggedIn = false;

  const cookieUser = request.cookies.get(Key.BUDDY_USER);

  // List of authentication pages
  const authPages = [
    '/auth/login', 
    '/auth/signup',
    '/auth/signup/with-email',
  ];

  // Check if the user exists
  if (cookieUser) {
    isLoggedIn = true;
  }

  // Redirect unauthorized users trying to access protected pages
  if (request.nextUrl.pathname.startsWith('/dashboard') && !isLoggedIn) {
    return NextResponse.redirect(new URL(`/auth/login?redirect=${request.nextUrl.pathname}`, request.url));
  }

  // Redirect logged-in users trying to access authentication pages
  if (authPages.includes(request.nextUrl.pathname) && isLoggedIn) {
    return NextResponse.redirect(new URL('/dashboard/my-portfolio', request.url));
  }

  // Allow the request to proceed to the next middleware
  return NextResponse.next();
}