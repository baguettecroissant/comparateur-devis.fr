export const revalidate = false; // Fully static — no ISR re-writes, invalidated only on redeploy
import { notFound } from "next/navigation";
import { getCategoryFromSlug, getAllCategories } from "@/lib/categories";
import { getAllDepartments, getCitiesByDepartment, getDepartmentByCode, getDepartmentsByRegion } from "@/lib/cities";
import Link from "next/link";
import { Metadata } from "next";
import { DepartmentCities } from "@/components/psea/DepartmentCities";
import { Map } from "lucide-react";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import departmentsData from '@/lib/db/departments-infos.json';

// Pré-générer toutes les pages catégorie×département au build (155 × 96 = 14 880 pages)
export async function generateStaticParams() {
    const categories = getAllCategories();
    return categories.flatMap(cat =>
        departmentsData.map(dept => ({
            category: cat.slug,
            slug: `${dept.name.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9]/g, '-')}-${dept.code}`,
        }))
    );
}

type Props = {
    params: Promise<{ category: string, slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { category: categorySlug, slug: deptSlug } = await params;
    const parts = deptSlug.split('-');
    const code = parts[parts.length - 1]; // Last part is code
    const dept = getDepartmentByCode(code);
    const category = getCategoryFromSlug(categorySlug);

    if (!dept || !category) return {};

    return {
        title: `Devis ${category.name} en ${dept.name} (${dept.code}) - Comparez les prix`,
        description: `Trouvez un installateur certifié pour votre ${category.name.toLowerCase()} dans le ${dept.name} (${dept.code}). Devis comparatifs gratuits et aides locales.`,
        alternates: {
            canonical: `https://www.comparateur-devis.fr/${category.slug}/annuaire/${deptSlug}`,
        },
    };
}

export default async function CategoryDepartmentPage({ params }: Props) {
    const { category: categorySlug, slug: deptSlug } = await params;
    const parts = deptSlug.split('-');
    const code = parts[parts.length - 1];

    const dept = getDepartmentByCode(code);
    const category = getCategoryFromSlug(categorySlug);

    if (!dept || !category) {
        notFound();
        return null;
    }

    // Fetch ALL cities for SEO
    const cities = getCitiesByDepartment(code);
    cities.sort((a, b) => a.name.localeCompare(b.name));

    // Fetch neighbor departments
    const neighborDepts = getDepartmentsByRegion(dept.region).filter(d => d.code !== dept.code);

    return (
        <div className="min-h-screen bg-white">
            {/* Hero Dept */}
            <section className="bg-slate-900 text-white relative pb-32 pt-12">
                <div className="container mx-auto px-4 relative z-10">
                    <div className="text-slate-400">
                        <Breadcrumbs
                            items={[
                                { label: "Catégories", href: "/" },
                                { label: category.name, href: `/${category.slug}` },
                                { label: `${dept.name} (${dept.code})` },
                            ]}
                        />
                    </div>

                    <div className="text-center mt-4">
                        <div className="inline-block bg-white/10 text-orange-300 px-3 py-1 rounded-full text-sm font-medium mb-6 border border-white/10">
                            Département {dept.code}
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">
                            Artisans pour <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-400">{category.name}</span> en {dept.name}
                        </h1>
                        <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                            Trouvez un artisan certifié dans votre ville.
                            Profitez des aides locales ({dept.aide_locale}) pour financer votre projet.
                        </p>
                    </div>
                    {/* Background Pattern */}
                    <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10 pointer-events-none"></div>
                </div>
            </section>

            {/* Interactive Cities Section */}
            <section className="pb-20 bg-slate-50 min-h-[500px]">
                <div className="container mx-auto px-4">
                    <DepartmentCities
                        departmentName={dept.name}
                        departmentCode={dept.code}
                        cities={cities}
                        category={category}
                    />

                    {/* Neighbor Departments Section */}
                    {neighborDepts.length > 0 && (
                        <div className="mt-16 pt-16 border-t border-slate-200">
                            <h2 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-2">
                                <Map className="h-6 w-6 text-orange-500" />
                                Autres départements en {dept.region} pour {category.name.toLowerCase()}
                            </h2>
                            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                                {neighborDepts.map((d) => (
                                    <Link
                                        key={d.code}
                                        href={`/${category.slug}/annuaire/${d.name.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '')}-${d.code}`}
                                        className="flex items-center justify-between p-4 bg-white border border-slate-200 rounded-xl hover:border-orange-500 hover:shadow-md transition-all group"
                                    >
                                        <span className="font-medium text-slate-700 group-hover:text-orange-700">{d.name}</span>
                                        <span className="text-sm text-slate-400 bg-slate-50 px-2 py-1 rounded group-hover:bg-orange-50 group-hover:text-orange-600">{d.code}</span>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
}
