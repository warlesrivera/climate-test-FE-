import { NextFetchEvent, NextRequest, NextResponse } from 'next/server';


export async function middleware(req: NextRequest, ev: NextFetchEvent) {
    let cookie = req.cookies.get('nextjs')?.value
    console.log(cookie)
    return NextResponse.redirect(new URL('/about-2', req.url))

}

export const config = {
    matcher: ['/history/:path*','/map/:path*'],
  }