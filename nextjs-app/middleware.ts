import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const blogOnlyMode = process.env.NEXT_PUBLIC_BLOG_ONLY_MODE === 'true';

  // If blog-only mode is not enabled, allow all requests
  if (!blogOnlyMode) {
    return NextResponse.next();
  }

  const { pathname } = request.nextUrl;

  // Allow blog routes (listing and individual posts)
  if (pathname.startsWith('/blog')) {
    return NextResponse.next();
  }

  // Allow Next.js internal routes, API routes, and static files
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.includes('.') // static files have extensions
  ) {
    return NextResponse.next();
  }

  // Redirect all other routes to /blog
  const url = request.nextUrl.clone();
  url.pathname = '/blog';
  return NextResponse.redirect(url);
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!_next/static|_next/image|favicon.ico).*)',
  ],
};
