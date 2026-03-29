import { City } from "@/types";
import citiesData from "@/lib/db/cities.json";
import departmentsData from "@/lib/db/departments-infos.json";

const cities = citiesData as City[];

// ── Optimisation : Index Map O(1) au lieu de .find() O(n) sur 35K items ──
const citiesSlugMap = new Map<string, City>();
cities.forEach(c => citiesSlugMap.set(c.slug, c));

const departmentsCodeMap = new Map<string, typeof departmentsData[0]>();
departmentsData.forEach(d => departmentsCodeMap.set(d.code, d));

export function getCityFromSlug(slug: string): City | undefined {
    const city = citiesSlugMap.get(slug);
    if (!city) return undefined;

    const deptInfo = departmentsCodeMap.get(city.department_code);
    return {
        ...city,
        department_info: deptInfo
    };
}

export function getAllCitySlugs(): string[] {
    return cities.map(c => c.slug);
}

export function getAllCities(): City[] {
    return cities;
}

// ── Top cities for static generation (sorted by population) ──
let _topCities: City[] | null = null;
export function getTopCities(limit: number = 200): City[] {
    if (!_topCities) {
        _topCities = [...cities]
            .sort((a, b) => (b.population || 0) - (a.population || 0))
            .slice(0, limit);
    }
    return _topCities.slice(0, limit);
}

import { Category } from "@/lib/categories";
import { getCategoryContent } from "@/lib/category-content";
import { getUniquePageContent } from "@/lib/city-category-content";

export function generateCityCategoryMetadata(city: City, category: Category) {
    const content = getCategoryContent(category.slug, category.name);
    const uniqueContent = getUniquePageContent(city, category, content);

    return {
        title: uniqueContent.metaTitle,
        description: uniqueContent.metaDescription,
        alternates: {
            canonical: `https://www.comparateur-devis.fr/${category.slug}/${city.slug}`,
        },
    };
}

export function getAllDepartmentCodes(): string[] {
    return departmentsData.map(d => d.code);
}

export function getCitiesByDepartment(departmentCode: string): City[] {
    return cities.filter(c => c.department_code === departmentCode);
}
