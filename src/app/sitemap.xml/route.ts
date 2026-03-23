import { getAllCities } from '@/lib/seo-utils';

export const dynamic = 'force-dynamic';
const CITIES_PER_CHUNK = 250;

export async function GET() {
    const baseUrl = 'https://www.comparateur-devis.fr';
    const citiesTotal = getAllCities().length;
    const numChunks = Math.ceil(citiesTotal / CITIES_PER_CHUNK);

    const sitemaps = [
        `${baseUrl}/sitemap/main.xml`
    ];
    for (let i = 0; i < numChunks; i++) {
        sitemaps.push(`${baseUrl}/sitemap/cities-${i}.xml`);
    }

    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${sitemaps.map(url => `
    <sitemap>
        <loc>${url}</loc>
    </sitemap>`).join('')}
</sitemapindex>`;

    return new Response(xml, {
        headers: {
            'Content-Type': 'application/xml',
        },
    });
}
