import { getTopCities } from '@/lib/seo-utils';
import { getAllCategories } from '@/lib/categories';

export const revalidate = false; // Fully static — invalidated only on redeploy

const CITIES_PER_CHUNK = 250;

export async function GET() {
    const baseUrl = 'https://www.comparateur-devis.fr';
    
    // Seules les top 200 villes dans le sitemap
    const topCities = getTopCities(200);
    const categories = getAllCategories();
    const totalCityPages = topCities.length * categories.length;
    const numChunks = Math.ceil(totalCityPages / CITIES_PER_CHUNK);

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
            'Cache-Control': 'public, s-maxage=86400, stale-while-revalidate=604800',
        },
    });
}
