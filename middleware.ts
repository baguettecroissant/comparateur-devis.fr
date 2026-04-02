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

    // For legitimate requests, pass through without modifying headers
    // Cache-Control headers are already set in next.config.ts headers()
    // Adding headers here would cause Next.js to force cache-control: private
    return NextResponse.next();
}

export const config = {
    matcher: [
        // Match all routes except static assets, _next, and API
        '/((?!_next/static|_next/image|favicon.ico|icon.png|robots.txt|sitemap).*)',
    ],
};
