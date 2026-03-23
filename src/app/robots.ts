import { MetadataRoute } from 'next';
import { getAllCitySlugs } from '@/lib/seo-utils';

const BASE_URL = 'https://www.comparateur-devis.fr';
const ITEMS_PER_SITEMAP = 5000;

export default function robots(): MetadataRoute.Robots {
    const citySlugs = getAllCitySlugs();
    const count = Math.ceil(citySlugs.length / ITEMS_PER_SITEMAP);

    // Generate all sitemap URLs
    // Now sitemap.xml handles the index, so we just return the index URL
    const sitemaps = [`${BASE_URL}/sitemap.xml`];

    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: '/private/',
        },
        sitemap: sitemaps,
    };
}
