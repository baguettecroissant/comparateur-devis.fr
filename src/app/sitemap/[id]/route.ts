import { getTopCities } from '@/lib/seo-utils';
import { notFound } from 'next/navigation';
import { GUIDES } from '@/data/guides-content';
import { BRANDS } from '@/data/brands';
import departmentsData from '@/lib/db/departments-infos.json';
import { getAllCategories } from '@/lib/categories';

export const dynamic = 'force-static';
const BASE_URL = 'https://www.comparateur-devis.fr';

// ── OPTIMISATION : Seules les top 200 villes sont dans le sitemap ──
// Réduit de 5.5M URLs à ~31K URLs (réduction 99.5%)
// Les autres villes restent accessibles via ISR dynamique mais sans être crawlées
const TOP_CITIES_LIMIT = 200;
const CITIES_PER_CHUNK = 250;

export async function generateStaticParams() {
    const topCities = getTopCities(TOP_CITIES_LIMIT);
    const totalCityPages = topCities.length * getAllCategories().length;
    const numChunks = Math.ceil(totalCityPages / CITIES_PER_CHUNK);
    
    const params = [
        { id: 'main.xml' }
    ];
    for (let i = 0; i < numChunks; i++) {
        params.push({ id: `cities-${i}.xml` });
    }
    return params;
}

export async function GET(
    request: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    const { id } = await params;

    if (!id.endsWith('.xml')) {
        return notFound();
    }

    const sitemapId = id.replace('.xml', '');
    let urls: { url: string; lastModified: Date; changeFrequency: string; priority: number }[] = [];

    const siteLastUpdated = new Date('2026-03-23');

    if (sitemapId === 'main') {
        const staticPages = [
            { path: '', priority: 1, frequency: 'daily' },
            { path: '/annuaire', priority: 0.9, frequency: 'weekly' },
            { path: '/devis', priority: 0.9, frequency: 'weekly' },
            { path: '/outils', priority: 0.9, frequency: 'weekly' },
            { path: '/simulateur-prix', priority: 0.8, frequency: 'weekly' },
            { path: '/calculateur-aides', priority: 0.8, frequency: 'weekly' },
            { path: '/simulation-delais', priority: 0.8, frequency: 'weekly' },
            { path: '/marques', priority: 0.8, frequency: 'weekly' },
            { path: '/faq', priority: 0.8, frequency: 'weekly' },
            { path: '/glossaire', priority: 0.7, frequency: 'monthly' },
            { path: '/qui-sommes-nous', priority: 0.5, frequency: 'monthly' },
            { path: '/mentions-legales', priority: 0.3, frequency: 'monthly' },
            { path: '/services', priority: 0.9, frequency: 'weekly' },
            { path: '/regions', priority: 0.9, frequency: 'weekly' },
            { path: '/guides', priority: 0.9, frequency: 'weekly' },
        ];

        // Core static pages
        urls = staticPages.map(p => ({
            url: `${BASE_URL}${p.path}`,
            lastModified: siteLastUpdated,
            changeFrequency: p.frequency,
            priority: p.priority,
        }));

        // Dynamic Guides
        GUIDES.forEach(guide => {
            urls.push({
                url: `${BASE_URL}/guides/${guide.slug}`,
                lastModified: new Date(guide.date),
                changeFrequency: 'monthly',
                priority: 0.7,
            });
        });

        // Dynamic Brands
        BRANDS.forEach(brand => {
            urls.push({
                url: `${BASE_URL}/marques/${brand.slug}`,
                lastModified: siteLastUpdated,
                changeFrequency: 'monthly',
                priority: 0.7,
            });
        });

        // Department landing pages
        departmentsData.forEach(dept => {
            const slug = `${dept.name.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9]/g, '-')}-${dept.code}`;
            urls.push({
                url: `${BASE_URL}/annuaire/${slug}`,
                lastModified: siteLastUpdated,
                changeFrequency: 'monthly',
                priority: 0.8,
            });
            urls.push({
                url: `${BASE_URL}/regions/${slug}`,
                lastModified: siteLastUpdated,
                changeFrequency: 'monthly',
                priority: 0.8,
            });
        });
        
        // Category pages + Category×Department landing pages
        const categories = getAllCategories();
        categories.forEach(category => {
            urls.push({
                url: `${BASE_URL}/${category.slug}`,
                lastModified: siteLastUpdated,
                changeFrequency: 'monthly',
                priority: 0.8,
            });
            departmentsData.forEach(dept => {
                const deptSlug = `${dept.name.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9]/g, '-')}-${dept.code}`;
                urls.push({
                    url: `${BASE_URL}/${category.slug}/annuaire/${deptSlug}`,
                    lastModified: siteLastUpdated,
                    changeFrequency: 'monthly',
                    priority: 0.7,
                });
            });
        });
    } else if (sitemapId.startsWith('cities-')) {
        const chunkIndex = parseInt(sitemapId.replace('cities-', ''), 10);
        if (isNaN(chunkIndex)) return notFound();

        // Utiliser seulement les top villes
        const topCities = getTopCities(TOP_CITIES_LIMIT);
        const categories = getAllCategories();
        
        // Générer toutes les URLs city+category
        const allCityUrls: { city: typeof topCities[0], category: typeof categories[0] }[] = [];
        topCities.forEach(city => {
            categories.forEach(category => {
                allCityUrls.push({ city, category });
            });
        });

        const start = chunkIndex * CITIES_PER_CHUNK;
        const end = start + CITIES_PER_CHUNK;
        const chunk = allCityUrls.slice(start, end);

        if (chunk.length === 0) {
            return notFound();
        }

        chunk.forEach(({ city, category }) => {
            urls.push({
                url: `${BASE_URL}/${category.slug}/${city.slug}`,
                lastModified: siteLastUpdated,
                changeFrequency: 'monthly', // Changed from 'weekly' to reduce bot crawl pressure
                priority: 0.6,
            });
        });
    } else {
        return notFound();
    }

    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${urls.map((item) => `
    <url>
        <loc>${item.url}</loc>
        <lastmod>${item.lastModified.toISOString()}</lastmod>
        <changefreq>${item.changeFrequency}</changefreq>
        <priority>${item.priority}</priority>
    </url>`).join('')}
</urlset>`;

    return new Response(xml, {
        headers: {
            'Content-Type': 'application/xml',
            'Cache-Control': 'public, s-maxage=86400, stale-while-revalidate=604800',
        },
    });
}
