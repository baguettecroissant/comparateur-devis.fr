import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

/**
 * Middleware de protection contre les bots SEO abusifs.
 * Bloque les crawlers connus qui génèrent des coûts Vercel inutiles
 * tout en laissant passer Googlebot, Bingbot et les vrais utilisateurs.
 */

const BLOCKED_BOTS = [
    'AhrefsBot',
    'SemrushBot',
    'DotBot',
    'MJ12bot',
    'BLEXBot',
    'DataForSeoBot',
    'PetalBot',
    'Bytespider',
    'GPTBot',
    'CCBot',
    'ClaudeBot',
    'anthropic-ai',
    'Scrapy',
    'Go-http-client',
    'python-requests',
    'curl/',
    'wget/',
    'Java/',
];

export function middleware(request: NextRequest) {
    const ua = request.headers.get('user-agent') || '';

    // Block abusive SEO bots and scrapers
    if (BLOCKED_BOTS.some(bot => ua.includes(bot))) {
        return new NextResponse('Forbidden', { 
            status: 403,
            headers: { 'X-Blocked-Reason': 'bot-protection' }
        });
    }

    // For legitimate requests, add cache headers
    const response = NextResponse.next();
    
    // Ensure CDN-level caching for pSEO pages
    const pathname = request.nextUrl.pathname;
    if (pathname.match(/^\/[^/]+\/[^/]+-\d{5}$/)) {
        // Pattern: /category/city-postal — these are the heavy pSEO pages
        response.headers.set('CDN-Cache-Control', 'public, s-maxage=604800');
    }

    return response;
}

export const config = {
    matcher: [
        // Match all routes except static assets, _next, and API
        '/((?!_next/static|_next/image|favicon.ico|icon.png|robots.txt|sitemap).*)',
    ],
};
