import { City } from "@/types";
// We need to import the JSON. Typed imports for JSON require config usually, or just use require/import.
import citiesData from "@/lib/db/cities.json";
import departmentsData from "@/lib/db/departments-infos.json";

const cities = citiesData as City[];

export function getCityFromSlug(slug: string): City | undefined {
    const city = cities.find(c => c.slug === slug);
    if (!city) return undefined;

    const deptInfo = departmentsData.find(d => d.code === city.department_code);
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
