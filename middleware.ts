import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { FEATURES } from '@/lib/features'

export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname === '/' && FEATURES.WAITLIST_ENABLED) {
    return NextResponse.redirect(new URL('/waitlist', request.url))
  }
}

export const config = {
  matcher: '/',
}
