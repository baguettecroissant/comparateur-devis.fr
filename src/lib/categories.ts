import categoriesData from '@/data/categories.json';

export interface Category {
    id: number;
    name: string;
    slug: string;
}

const categories = categoriesData as Category[];

export function getCategoryFromSlug(slug: string): Category | undefined {
    return categories.find(c => c.slug === slug);
}

export function getAllCategories(): Category[] {
    return categories;
}
