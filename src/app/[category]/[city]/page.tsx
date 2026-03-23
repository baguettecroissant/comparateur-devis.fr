export const dynamic = 'force-dynamic';
import { notFound } from "next/navigation";
import { getCityFromSlug, generateCityCategoryMetadata } from "@/lib/seo-utils";
import { getCategoryFromSlug, getAllCategories } from "@/lib/categories";
import { getCategoryContent } from "@/lib/category-content";
import { getUniquePageContent } from "@/lib/city-category-content";
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
import { Wrench, MapPin, Globe, FileText, Euro, ExternalLink, CheckCircle2, ShieldCheck, Lightbulb, AlertCircle } from 'lucide-react';

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

    const content = getCategoryContent(category.slug, category.name);
    const uniqueContent = getUniquePageContent(city, category, content);

    // Schema.org enrichi
    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": uniqueContent.faq.map((f) => ({
            "@type": "Question",
            "name": f.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": f.answer
            }
        }))
    };

    const serviceSchema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": `${category.name} à ${city.name}`,
        "description": uniqueContent.metaDescription,
        "provider": {
            "@type": "Organization",
            "name": "Comparateur-devis.fr"
        },
        "areaServed": {
            "@type": "City",
            "name": city.name,
            "postalCode": city.zip
        },
        "offers": {
            "@type": "Offer",
            "priceSpecification": {
                "@type": "PriceSpecification",
                "price": content.priceRange.split('–')[0],
                "priceCurrency": "EUR"
            }
        }
    };

    return (
        <div className="min-h-screen bg-white pb-20 md:pb-0">
            <SchemaOrg city={city} category={category} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />

            <div className="bg-slate-50 pt-4 pb-0">
                <div className="container mx-auto px-4 max-w-4xl">
                    <DepartmentBreadcrumb city={city} category={category} />
                </div>
            </div>

            <CityHero city={city} category={category} />

            <div className="container mx-auto px-4 py-12 max-w-4xl space-y-16">
                
                {/* 3. Intro contextuelle */}
                <section>
                    <h2 className="text-3xl font-bold text-slate-900 mb-6">
                        {uniqueContent.introTitle}
                    </h2>
                    <div className="prose prose-lg text-slate-600 max-w-none">
                        <p className="lead">{uniqueContent.introText}</p>
                        <p className="mt-4">{uniqueContent.localContextText}</p>
                        <p className="mt-4">{content.description}</p>
                    </div>
                </section>

                {/* 4. Tarifs locaux */}
                <section className="bg-blue-50/50 p-6 md:p-8 rounded-2xl border border-blue-100">
                    <div className="flex flex-col md:flex-row gap-8 items-center">
                        <div className="flex-1">
                            <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                                <Euro className="h-6 w-6 text-blue-600" />
                                Tarifs {category.name.toLowerCase()} à {city.name}
                            </h2>
                            <p className="text-slate-600 mb-4">
                                Le budget moyen observé pour ce type d'intervention varie selon la nature des travaux et les matériaux choisis.
                            </p>
                            <div className="text-3xl font-bold text-blue-700">
                                {content.priceRange} <span className="text-xl font-medium text-slate-500">{content.priceUnit}</span>
                            </div>
                        </div>
                        <div className="md:w-1/3 bg-white p-4 rounded-xl shadow-sm border border-slate-100">
                            <div className="text-sm text-slate-500 mb-2">Estimation basée sur</div>
                            <div className="font-semibold text-slate-800">{city.name} ({city.department_code})</div>
                        </div>
                    </div>
                </section>

                {/* 5. Services proposés */}
                <section>
                    <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                        <Wrench className="h-8 w-8 text-blue-600" />
                        Services proposés
                    </h2>
                    <p className="text-lg text-slate-600 mb-8">{uniqueContent.servicesIntro}</p>
                    <div className="grid md:grid-cols-2 gap-6">
                        {content.services.map((service, index) => (
                            <div key={index} className="bg-white border text-center md:text-left border-slate-200 p-6 rounded-xl shadow-sm hover:shadow-md transition-all">
                                <h3 className="text-xl font-bold text-slate-800 mb-3">{service.title}</h3>
                                <p className="text-slate-600">{service.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* 6. Steps */}
                <StepsModule city={city} category={category} />

                {/* 7 & 8. Pourquoi faire appel à un pro & Certifications */}
                <section className="grid md:grid-cols-2 gap-8">
                    <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                        <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                            <ShieldCheck className="h-6 w-6 text-emerald-600" />
                            {content.whyHirePro.title}
                        </h2>
                        <p className="text-slate-600 mb-6">{uniqueContent.whyProIntro}</p>
                        <ul className="space-y-4">
                            {content.whyHirePro.points.map((point, index) => (
                                <li key={index} className="flex gap-3 text-slate-700">
                                    <CheckCircle2 className="h-6 w-6 text-emerald-500 shrink-0" />
                                    <span>{point}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                        <h2 className="text-2xl font-bold text-slate-900 mb-6">Certifications à exiger</h2>
                        <div className="space-y-4">
                            {content.certifications.map((cert, index) => (
                                <div key={index} className="bg-white p-4 rounded-lg shadow-sm border border-slate-200 flex items-center gap-3 font-medium text-slate-800">
                                    <span className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center shrink-0 text-sm">{index + 1}</span>
                                    {cert}
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 9. Widget devis */}
                <section id="devis">
                    <div className="bg-gradient-to-br from-slate-900 to-slate-800 p-6 md:p-10 rounded-3xl text-white shadow-xl">
                        <div className="max-w-3xl mx-auto text-center mb-8">
                            <h2 className="text-2xl md:text-4xl font-bold mb-4">
                                Trouvez le meilleur artisan à {city.name}
                            </h2>
                            <p className="text-slate-300 text-lg">
                                Comparez jusqu'à 3 devis gratuits d'artisans certifiés et disponibles dans le département {city.department_name}.
                            </p>
                        </div>
                        <div className="bg-white p-4 rounded-2xl shadow-lg text-slate-900">
                            <ViteUnDevisWidget category={category} />
                        </div>
                    </div>
                </section>

                {/* 10. Aides financières */}
                <div>
                    <h2 className="text-2xl font-bold text-slate-900 mb-4">{uniqueContent.aidsIntro}</h2>
                    <LocalAidsModule city={city} category={category} />
                </div>

                {/* 11. Conseils d'expert */}
                <section>
                    <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                        <Lightbulb className="h-8 w-8 text-amber-500" />
                        Conseils d'expert
                    </h2>
                    <div className="grid md:grid-cols-2 gap-4">
                        {uniqueContent.tipsContextualized.map((tip, index) => (
                            <div key={index} className="bg-amber-50/50 p-5 rounded-xl border border-amber-100 flex gap-4">
                                <AlertCircle className="h-6 w-6 text-amber-500 shrink-0 mt-0.5" />
                                <p className="text-slate-700">{tip}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* 12. FAQ enrichie */}
                <section>
                    <h2 className="text-3xl font-bold text-slate-900 mb-8">Questions fréquentes</h2>
                    <div className="space-y-6">
                        {uniqueContent.faq.map((item, index) => (
                            <div key={index} className="bg-white border border-slate-100 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                                <h3 className="text-xl font-semibold text-slate-800 mb-2">{item.question}</h3>
                                <p className="text-slate-600">{item.answer}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* 15. Guides widget */}
                <div className="pt-8">
                    <GuidesWidget />
                </div>
            </div>

            {/* 13. Maillage interne renforcé */}
            <section className="bg-slate-50 border-t border-slate-200 py-16">
                <div className="container mx-auto px-4 max-w-4xl">
                    <h2 className="text-2xl font-bold text-slate-900 mb-8">Poursuivez votre visite</h2>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
                        {/* Services connexes */}
                        {content.relatedSlugs.length > 0 && (
                            <div>
                                <h3 className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-4 border-b border-slate-200 pb-2">Services liés</h3>
                                <ul className="space-y-3">
                                    {content.relatedSlugs.map((slug) => {
                                        const relCat = getCategoryFromSlug(slug);
                                        return relCat ? (
                                            <li key={slug}>
                                                <Link href={`/${slug}/${city.slug}`} className="text-blue-600 hover:text-blue-800 hover:underline font-medium flex items-center gap-2">
                                                    <Wrench className="h-4 w-4 text-blue-400" />
                                                    {relCat.name} à {city.name}
                                                </Link>
                                            </li>
                                        ) : null;
                                    })}
                                </ul>
                            </div>
                        )}

                        {/* Page parent et département */}
                        <div>
                            <h3 className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-4 border-b border-slate-200 pb-2">Dans le département</h3>
                            <ul className="space-y-3">
                                <li>
                                    <Link href={`/${category.slug}`} className="text-blue-600 hover:text-blue-800 hover:underline font-medium flex items-center gap-2">
                                        <Globe className="h-4 w-4 text-blue-400" />
                                        {category.name} en France
                                    </Link>
                                </li>
                                <li>
                                    <Link href={`/regions/${slugifyRegion(city.region)}`} className="text-blue-600 hover:text-blue-800 hover:underline font-medium flex items-center gap-2">
                                        <MapPin className="h-4 w-4 text-blue-400" />
                                        Artisans en {city.region}
                                    </Link>
                                </li>
                                <li>
                                    <Link href={`/services`} className="text-blue-600 hover:text-blue-800 hover:underline font-medium flex items-center gap-2">
                                        <FileText className="h-4 w-4 text-blue-400" />
                                        Tous les services
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        {/* Autres services dans cette ville */}
                        <div>
                            <h3 className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-4 border-b border-slate-200 pb-2">Autres demandes à {city.name}</h3>
                            <ul className="space-y-3">
                                {getAllCategories()
                                    .filter((c) => c.slug !== category.slug && !content.relatedSlugs.includes(c.slug))
                                    .slice(0, 5)
                                    .map((c) => (
                                        <li key={c.slug}>
                                            <Link href={`/${c.slug}/${city.slug}`} className="text-blue-600 hover:text-blue-800 hover:underline font-medium flex items-center gap-2">
                                                <ExternalLink className="h-4 w-4 text-blue-400" />
                                                {c.name} à {city.name}
                                            </Link>
                                        </li>
                                    ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* 14. Villes proches */}
            <NearbyCitiesModule city={city} category={category} />
            
            <MobileStickyCta href="#devis" text="Comparer les artisans" />
        </div>
    );
}
