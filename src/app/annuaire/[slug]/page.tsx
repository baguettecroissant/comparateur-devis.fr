export const revalidate = false; // Fully static — invalidated only on redeploy
import { notFound } from "next/navigation";
import { getAllDepartments, getCitiesByDepartment, getDepartmentByCode, getDepartmentsByRegion } from "@/lib/cities";
import Link from "next/link";
import { Metadata } from "next";
import { CategoriesGrid } from "@/components/features/CategoriesGrid";
import { Map } from "lucide-react";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { MobileStickyCta } from "@/components/ui/MobileStickyCta";

// Slug format: "gironde-33"
type Props = {
    params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
    // To enable static generation for all departments
    const depts = getAllDepartments();
    // Simplified slug generation consistent with breadcrumb
    return depts.map(d => ({
        slug: `${d.name.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '')}-${d.code}`
    }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const parts = slug.split('-');
    const code = parts[parts.length - 1]; // Last part is code
    const dept = getDepartmentByCode(code);

    if (!dept) return {};

    return {
        title: `Travaux et Aménagements - Artisans dans le ${dept.name} (${dept.code})`,
        description: `Trouvez un artisan certifié dans le ${dept.name} (${dept.code}) pour vos travaux. Devis gratuits, rapides, et présentation des aides locales.`,
        alternates: {
            canonical: `https://www.comparateur-devis.fr/annuaire/${slug}`,
        },
    };
}

export default async function DepartmentPage({ params }: Props) {
    const { slug } = await params;
    // Extract code from end of slug "gironde-33" -> "33"
    const parts = slug.split('-');
    const code = parts[parts.length - 1];

    const dept = getDepartmentByCode(code);
    if (!dept) notFound();

    // We don't need ALL cities here anymore, because this page shows categories.
    // Alphabetical sort for consistent directory listing
    // Fetch neighbor departments
    const neighborDepts = getDepartmentsByRegion(dept.region).filter(d => d.code !== dept.code);

    return (
        <div className="min-h-screen bg-white pb-20 md:pb-0">
            {/* Hero Dept */}
            <section className="relative bg-slate-950 pt-12 pb-32 overflow-hidden border-b border-slate-800">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full overflow-hidden pointer-events-none">
                    <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[70%] bg-orange-600/10 blur-[120px] rounded-full mix-blend-screen"></div>
                    <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[60%] bg-blue-600/10 blur-[120px] rounded-full mix-blend-screen"></div>
                </div>

                <div className="container mx-auto px-4 relative z-10">
                    {/* Breadcrumbs */}
                    <div className="text-slate-400">
                        <Breadcrumbs
                            items={[
                                { label: "Annuaire", href: "/annuaire" },
                                { label: `${dept.name} (${dept.code})` },
                            ]}
                        />
                    </div>

                    <div className="text-center mt-4">
                        <div className="inline-block bg-slate-900 border border-slate-700 text-orange-400 px-3 py-1 rounded-full text-sm font-medium mb-6">
                            Département {dept.code}
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 tracking-tight leading-tight">
                            Artisans et Devis en <br className="hidden sm:block"/><span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-300">{dept.name}</span>
                        </h1>
                        <p className="text-xl text-slate-400 max-w-3xl mx-auto">
                            Trouvez un artisan certifié dans la région {dept.region} pour tous vos projets de travaux.
                            Sélectionnez une catégorie ci-dessous pour voir les professionnels de votre ville.
                        </p>
                    </div>
                </div>
            </section>

            <section className="pb-20 bg-slate-50 min-h-[500px]">
                <div className="container mx-auto px-4 -mt-16 relative z-20">
                    <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-slate-100">
                        <h2 className="text-2xl font-bold text-slate-900 mb-8 text-center">
                            Quel est votre projet ?
                        </h2>
                        <CategoriesGrid baseUrl={`/annuaire/${slug}`} />
                    </div>

                    {/* Neighbor Departments Section */}
                    {neighborDepts.length > 0 && (
                        <div className="mt-16 pt-16 border-t border-slate-200">
                            <h2 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-2">
                                <Map className="h-6 w-6 text-orange-500" />
                                Autres départements en {dept.region}
                            </h2>
                            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                                {neighborDepts.map((d) => (
                                    <Link
                                        key={d.code}
                                        href={`/annuaire/${d.name.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '')}-${d.code}`}
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
            
            <MobileStickyCta href="/devis" text={`Devis en ${dept.name}`} />
        </div>
    );
}
