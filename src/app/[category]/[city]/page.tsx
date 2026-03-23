import { notFound } from "next/navigation";
import { getCityFromSlug } from "@/lib/seo-utils";
import { getCategoryFromSlug, getAllCategories } from "@/lib/categories";
import { generateCityCategoryMetadata } from "@/lib/seo-utils";
import { getCityIntro } from "@/lib/text-utils";
import { CityHero } from "@/components/features/CityHero";
import { ViteUnDevisWidget } from "@/components/affiliation/ViteUnDevisWidget";
import { SchemaOrg } from "@/components/seo/SchemaOrg";
import { DepartmentBreadcrumb } from "@/components/psea/DepartmentBreadcrumb";
import { NearbyCitiesModule } from "@/components/psea/NearbyCitiesModule";
import { Metadata } from "next";
import { LocalAidsModule } from "@/components/psea/LocalAidsModule";
import { StepsModule } from "@/components/psea/StepsModule";
import { GuidesWidget } from "@/components/seo/GuidesWidget";
import { slugifyRegion } from "@/lib/cities";
import Link from 'next/link';
import { MobileStickyCta } from "@/components/ui/MobileStickyCta";
import { Wrench, MapPin, Globe, FileText, Euro, ExternalLink } from 'lucide-react';

// Next.js 15 params
type Props = {
    params: Promise<{ category: string, city: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { category: categorySlug, city: citySlug } = await params;
    const city = getCityFromSlug(citySlug);
    const category = getCategoryFromSlug(categorySlug);
    if (!city || !category) {
        return {};
    }
    return generateCityCategoryMetadata(city, category);
}

export default async function CityCategoryPage({ params }: Props) {
    const { category: categorySlug, city: citySlug } = await params;
    const city = getCityFromSlug(citySlug);
    const category = getCategoryFromSlug(categorySlug);

    if (!city || !category) {
        notFound();
        return null;
    }

    const introText = getCityIntro(city);

    return (
        <div className="min-h-screen bg-white pb-20 md:pb-0">
            <SchemaOrg city={city} category={category} />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "FAQPage",
                        "mainEntity": [
                            {
                                "@type": "Question",
                                "name": `Quel est le prix moyen pour ${category.name.toLowerCase()} à ${city.name} ?`,
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": `Le prix dépend de la configuration de votre projet. À ${city.name}, les tarifs varient selon les artisans. Comparez jusqu'à 3 devis gratuits.`
                                }
                            },
                            {
                                "@type": "Question",
                                "name": `Existe-t-il des aides à ${city.name} (${city.department_code}) ?`,
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": `Oui, selon votre projet de ${category.name.toLowerCase()}, vous pouvez prétendre à MaPrimeRénov', la Prime CEE ou à des aides locales du département ${city.department_name}.`
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "Combien de temps pour l'intervention ?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Les délais d'intervention varient selon la disponibilité des artisans qualifiés dans le secteur de " + city.name + " (" + city.zip + ")."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": `Où trouver un professionnel pour ${category.name.toLowerCase()} à ${city.name} ?`,
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": `En passant par notre comparateur, vous êtes mis en relation avec des professionnels locaux qui garantissent une intervention de qualité dans le ${city.department_code}.`
                                }
                            }
                        ]
                    })
                }}
            />

            <div className="bg-slate-50 pt-4 pb-0">
                <div className="container mx-auto px-4 max-w-4xl">
                    <DepartmentBreadcrumb city={city} category={category} />
                </div>
            </div>

            <CityHero city={city} category={category} />

            <div className="container mx-auto px-4 py-12 max-w-4xl">
                {/* Intro Section */}
                <section className="mb-16">
                    <h2 className="text-3xl font-bold text-slate-900 mb-6">
                        Projet de {category.name.toLowerCase()} à {city.name}
                    </h2>
                    <div className="prose prose-lg text-slate-600">
                        <p>
                            Vivre à <strong>{city.name}</strong> ({city.zip}) offre une qualité de vie appréciable. {introText}
                            Réaliser votre projet de <strong>{category.name.toLowerCase()}</strong> vous permet d'améliorer votre habitat et votre confort au quotidien.
                        </p>
                        <p className="mt-4">
                            Dans le département ({city.department_name}), de nombreux artisans spécialisés proposent des solutions
                            adaptées à vos besoins. Obtenez rapidement plusieurs devis pour comparer les prix.
                        </p>
                    </div>
                </section>

                <StepsModule city={city} category={category} />

                {/* Quote Widget Section */}
                <section className="mb-16" id="devis">
                    <div className="bg-slate-50 p-6 md:p-8 rounded-2xl border border-slate-100">
                        <div className="max-w-2xl mx-auto text-center mb-8">
                            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
                                Comparez les tarifs à {city.name}
                            </h2>
                            <p className="text-slate-600 font-medium">
                                Obtenez jusqu'à 3 devis gratuits d'artisans intervenant à {city.name} ({city.zip}).
                                <br />
                                <span className="text-sm text-slate-500 font-normal">Réponse sous 48h • Sans engagement</span>
                            </p>
                        </div>

                        <ViteUnDevisWidget category={category} />
                    </div>
                </section>

                <LocalAidsModule city={city} category={category} />

                <GuidesWidget />

                {/* FAQ Section */}
                <section className="mb-16 mt-16">
                    <h2 className="text-3xl font-bold text-slate-900 mb-8">Questions fréquentes à {city.name}</h2>
                    <div className="space-y-6">
                        <div className="bg-white border border-slate-100 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                            <h3 className="text-xl font-semibold text-slate-800 mb-2">Quel est le prix pour {category.name.toLowerCase()} à {city.name} ?</h3>
                            <p className="text-slate-600">
                                Le prix dépend de la complexité de votre projet. À {city.name}, les tarifs de {category.name.toLowerCase()} varient selon les artisans et les matériaux limitant ou étendant le budget. Nous vous conseillons de comparer jusqu'à 3 devis.
                            </p>
                        </div>

                        <div className="bg-white border border-slate-100 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                            <h3 className="text-xl font-semibold text-slate-800 mb-2">Existe-t-il des aides à {city.name} ({city.department_code}) ?</h3>
                            <p className="text-slate-600">
                                Oui, certaines installations permettent de prétendre à des aides de l'État (MaPrimeRénov', CEE) ou des allocations du département {city.department_name} (via {city.department_info?.aide_locale || 'les aides locales'}) selon vos revenus et le type de travaux.
                            </p>
                        </div>
                    </div>
                </section>
            </div>

            {/* ===== Section : Voir aussi (Cross-links) ===== */}
            <section className="bg-white border-t border-slate-100 py-12">
                <div className="container mx-auto px-4 max-w-4xl">
                    <h2 className="text-xl font-bold text-slate-900 mb-6">Voir aussi</h2>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Catégorie parent */}
                        <div>
                            <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-4">Ce service</h3>
                            <ul className="space-y-2">
                                <li>
                                    <Link href={`/${category.slug}`} className="text-blue-600 hover:text-blue-800 hover:underline font-medium flex items-center gap-2">
                                        <Wrench className="h-4 w-4 text-slate-400" />
                                        {category.name} en France
                                    </Link>
                                </li>
                                <li>
                                    <Link href={`/regions/${slugifyRegion(city.region)}`} className="text-blue-600 hover:text-blue-800 hover:underline font-medium flex items-center gap-2">
                                        <Globe className="h-4 w-4 text-slate-400" />
                                        Artisans en {city.region}
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        {/* Autres services dans cette ville */}
                        <div>
                            <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-4">Autres services à {city.name}</h3>
                            <ul className="space-y-2">
                                {getAllCategories()
                                    .filter(c => c.slug !== category.slug)
                                    .slice(0, 5)
                                    .map(c => (
                                        <li key={c.slug}>
                                            <Link href={`/${c.slug}/${city.slug}`} className="text-blue-600 hover:text-blue-800 hover:underline font-medium flex items-center gap-2">
                                                <MapPin className="h-4 w-4 text-slate-400" />
                                                {c.name} à {city.name}
                                            </Link>
                                        </li>
                                    ))}
                            </ul>
                        </div>

                        {/* Outils */}
                        <div>
                            <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-4">Outils pratiques</h3>
                            <ul className="space-y-2">
                                <li><Link href="/simulateur-prix" className="text-blue-600 hover:text-blue-800 hover:underline font-medium flex items-center gap-2"><Euro className="h-4 w-4 text-slate-400" /> Simulateur de prix</Link></li>
                                <li><Link href="/calculateur-aides" className="text-blue-600 hover:text-blue-800 hover:underline font-medium flex items-center gap-2"><ExternalLink className="h-4 w-4 text-slate-400" /> Calculateur d'aides</Link></li>
                                <li><Link href="/guides" className="text-blue-600 hover:text-blue-800 hover:underline font-medium flex items-center gap-2"><FileText className="h-4 w-4 text-slate-400" /> Guides travaux</Link></li>
                                <li><Link href="/services" className="text-blue-600 hover:text-blue-800 hover:underline font-medium flex items-center gap-2"><Wrench className="h-4 w-4 text-slate-400" /> Tous les services</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <NearbyCitiesModule city={city} category={category} />
            
            <MobileStickyCta href="#devis" text="Comparer les artisans" />
        </div>
    );
}
