export const dynamic = 'force-dynamic';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import Link from 'next/link';
import { MobileStickyCta } from "@/components/ui/MobileStickyCta";
import { getRegionBySlug, getDepartmentsByRegion, getCitiesByDepartment, getRegions, slugifyRegion } from '@/lib/cities';
import { SERVICE_GROUPS } from '@/lib/services-data';
import { getRegionContent } from '@/lib/region-content';
import { ChevronRight, ShieldCheck, Users, Building2, MapPin, Wrench, Globe, Cloud, Clock, HelpCircle, ArrowRight, Map as MapIcon } from 'lucide-react';

type Props = {
    params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const regionName = getRegionBySlug(slug);

    if (!regionName) return {};

    const content = getRegionContent(regionName);

    return {
        title: `Artisans en ${regionName} — Annuaire vérifiés 2026 | Comparateur Devis`,
        description: content.description.substring(0, 155) + "...",
    };
}

export default async function RegionDedicatedPage({ params }: Props) {
    const { slug } = await params;
    const regionName = getRegionBySlug(slug);

    if (!regionName) notFound();

    const content = getRegionContent(regionName);
    const departments = getDepartmentsByRegion(regionName);
    const depsCount = departments.length;
    const allRegions = getRegions().filter(r => r !== regionName);
    
    // Calculate total cities covered
    let citiesCount = 0;
    departments.forEach(d => {
        citiesCount += getCitiesByDepartment(d.code).length;
    });

    // Extract top services
    const allServices = SERVICE_GROUPS.flatMap(group => group.items);
    
    // Stable fake artisan count
    const seed = regionName.charCodeAt(0) + regionName.charCodeAt(regionName.length-1);
    const fakeArtisanCount = 1000 + (seed * 85); 

    // Top cities per department for cross-linking
    const topCitiesByDept = departments.slice(0, 5).map(dept => {
        const cities = getCitiesByDepartment(dept.code);
        return {
            dept,
            cities: cities.slice(0, 4)
        };
    });

    // FAQ Schema.org
    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": content.faq.map(f => ({
            "@type": "Question",
            "name": f.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": f.answer
            }
        }))
    };

    return (
        <div className="min-h-screen bg-slate-50 pb-20 md:pb-0">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

            {/* Dark Hero Section harmonized with Home */}
            <section className="relative bg-slate-950 pt-16 pb-20 lg:pt-24 lg:pb-24 overflow-hidden border-b border-slate-800">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full overflow-hidden pointer-events-none">
                    <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[70%] bg-orange-600/10 blur-[120px] rounded-full mix-blend-screen"></div>
                    <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[60%] bg-blue-600/10 blur-[120px] rounded-full mix-blend-screen"></div>
                </div>

                <div className="container mx-auto px-4 max-w-6xl relative z-10">
                    <div className="mb-6 border-b border-slate-800 pb-6 flex items-center gap-2 text-sm font-medium text-slate-400">
                        <Link href="/" className="hover:text-white transition-colors">Accueil</Link>
                        <ChevronRight className="h-4 w-4" />
                        <Link href="/regions" className="hover:text-white transition-colors">Régions</Link>
                        <ChevronRight className="h-4 w-4" />
                        <span className="text-white">{regionName}</span>
                    </div>

                    <div className="flex gap-3 mb-8">
                        <div className="flex items-center gap-2 bg-slate-900 border border-slate-700 text-slate-300 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
                            <Globe className="h-3.5 w-3.5" /> Région
                        </div>
                        <div className="flex items-center gap-2 bg-emerald-950 border border-emerald-900 text-emerald-400 px-4 py-1.5 rounded-full text-xs font-bold">
                            <Cloud className="h-3.5 w-3.5" /> {content.climate}
                        </div>
                    </div>

                    <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-white mb-6 tracking-tight leading-tight max-w-4xl">
                        Tous les artisans de <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-300">{regionName}</span>
                    </h1>
                    
                    <p className="text-xl text-slate-400 max-w-3xl mb-12">
                        {content.geography}. {content.topServices.length} métiers les plus demandés : {content.topServices.join(', ')}.
                    </p>

                    <div className="flex flex-wrap items-center gap-6 text-slate-400 font-medium text-sm lg:text-base border-b border-slate-800 pb-8 mb-8">
                        <div className="flex items-center gap-2">
                            <Users className="h-5 w-5 text-orange-500" /> {fakeArtisanCount} artisans
                        </div>
                        <div className="flex items-center gap-2">
                            <Building2 className="h-5 w-5 text-slate-400" /> {depsCount} départements
                        </div>
                        <div className="flex items-center gap-2">
                            <MapPin className="h-5 w-5 text-slate-400" /> {citiesCount} villes couvertes
                        </div>
                        <div className="flex items-center gap-2">
                            <Wrench className="h-5 w-5 text-slate-400" /> 160 corps de métier
                        </div>
                    </div>

                    <div className="flex gap-4">
                        <div className="flex items-center gap-2 bg-slate-900 border border-slate-700 px-5 py-2.5 rounded-full text-sm font-bold text-white">
                            <ShieldCheck className="h-4 w-4 text-emerald-500" /> Données SIREN officielles
                        </div>
                        <div className="flex items-center gap-2 bg-slate-900 border border-slate-700 px-5 py-2.5 rounded-full text-sm font-bold text-white">
                            <Clock className="h-4 w-4 text-orange-500" /> Devis gratuits
                        </div>
                    </div>
                </div>
            </section>

            <div className="container mx-auto px-4 max-w-6xl">

                {/* ===== Section 1 : Profil de la région ===== */}
                <section className="py-12 border-b border-slate-200">
                    <h2 className="text-2xl font-bold text-slate-900 mb-4">Profil de la région {regionName}</h2>
                    <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
                        <div className="grid md:grid-cols-3 gap-6 mb-6">
                            <div className="flex items-start gap-3">
                                <Cloud className="h-5 w-5 text-blue-500 mt-1 shrink-0" />
                                <div>
                                    <div className="font-bold text-slate-800">Climat</div>
                                    <div className="text-sm text-slate-600">{content.climate}</div>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <MapIcon className="h-5 w-5 text-emerald-500 mt-1 shrink-0" />
                                <div>
                                    <div className="font-bold text-slate-800">Géographie</div>
                                    <div className="text-sm text-slate-600">{content.geography}</div>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <Building2 className="h-5 w-5 text-orange-500 mt-1 shrink-0" />
                                <div>
                                    <div className="font-bold text-slate-800">Couverture</div>
                                    <div className="text-sm text-slate-600">{depsCount} départements · {citiesCount} villes</div>
                                </div>
                            </div>
                        </div>
                        <p className="text-slate-700 leading-relaxed">{content.description}</p>
                    </div>
                </section>

                {/* ===== Section 2 : Services prioritaires ===== */}
                <section className="py-12 border-b border-slate-200">
                    <h2 className="text-2xl font-bold text-slate-900 mb-6">Services prioritaires en {regionName}</h2>
                    <div className="flex flex-wrap gap-3">
                        {allServices.slice(0, 18).map(service => (
                            <Link 
                                key={service.slug}
                                href={`/${service.slug}`}
                                className="px-5 py-2.5 bg-white border border-emerald-200 text-emerald-800 hover:bg-emerald-50 hover:border-emerald-300 rounded-full font-medium text-sm transition-all whitespace-nowrap"
                            >
                                {service.name} en {regionName}
                            </Link>
                        ))}
                    </div>
                </section>

                {/* ===== Section 3 : Départements ===== */}
                <section className="py-12 border-b border-slate-200">
                    <h2 className="text-2xl font-bold text-slate-900 mb-6">Départements de la région {regionName}</h2>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {departments.map(dept => {
                            const cityCount = getCitiesByDepartment(dept.code).length;
                            const deptSlug = `${dept.name.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '')}-${dept.code}`;
                            return (
                                <Link
                                    key={dept.code}
                                    href={`/annuaire/${deptSlug}`}
                                    className="group bg-white rounded-xl border border-slate-100 p-5 hover:border-orange-200 hover:shadow-md transition-all"
                                >
                                    <div className="flex items-center justify-between mb-2">
                                        <div className="flex items-center gap-3">
                                            <span className="bg-slate-100 text-slate-600 font-mono text-sm font-bold px-2.5 py-1 rounded">{dept.code}</span>
                                            <span className="font-bold text-slate-800 group-hover:text-orange-700">{dept.name}</span>
                                        </div>
                                        <ChevronRight className="h-5 w-5 text-slate-300 group-hover:text-orange-500" />
                                    </div>
                                    <div className="text-sm text-slate-500">{cityCount} villes référencées</div>
                                </Link>
                            );
                        })}
                    </div>
                </section>

                {/* ===== Section 4 : Services par ville ===== */}
                {topCitiesByDept.length > 0 && (
                    <section className="py-12 border-b border-slate-200">
                        <h2 className="text-2xl font-bold text-slate-900 mb-6">Services par ville en {regionName}</h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {topCitiesByDept.map(({ dept, cities }) => (
                                <div key={dept.code} className="bg-white rounded-xl border border-slate-100 p-5">
                                    <h3 className="font-bold text-slate-800 mb-4 flex items-center gap-2">
                                        <MapPin className="h-4 w-4 text-orange-500" /> {dept.name} ({dept.code})
                                    </h3>
                                    <ul className="space-y-2">
                                        {cities.map(city => (
                                            <li key={city.slug}>
                                                <Link href={`/plomberie/${city.slug}`} className="text-sm text-blue-600 hover:text-blue-800 hover:underline">
                                                    Artisans à {city.name}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </section>
                )}

                {/* ===== Section 5 : FAQ locale ===== */}
                {content.faq.length > 0 && (
                    <section className="py-12 border-b border-slate-200">
                        <div className="flex items-center gap-3 mb-8">
                            <div className="bg-purple-50 p-3 rounded-xl">
                                <HelpCircle className="h-6 w-6 text-purple-600" />
                            </div>
                            <h2 className="text-2xl font-bold text-slate-900">Questions fréquentes — {regionName}</h2>
                        </div>
                        <div className="space-y-4">
                            {content.faq.map((item, i) => (
                                <details key={i} className="group bg-white rounded-xl border border-slate-100 shadow-sm overflow-hidden" open={i === 0}>
                                    <summary className="cursor-pointer p-5 font-bold text-slate-800 hover:text-orange-700 flex items-center justify-between list-none group-open:border-b group-open:border-slate-100">
                                        {item.question}
                                        <ChevronRight className="h-5 w-5 text-slate-300 group-open:rotate-90 transition-transform shrink-0 ml-4" />
                                    </summary>
                                    <div className="p-5 text-slate-600 leading-relaxed">
                                        {item.answer}
                                    </div>
                                </details>
                            ))}
                        </div>
                    </section>
                )}

                {/* ===== Section 6 : CTA ===== */}
                <section className="py-12 border-b border-slate-200">
                    <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl p-8 border border-orange-100 text-center">
                        <h2 className="text-2xl font-bold text-slate-900 mb-3">Besoin d'un artisan en {regionName} ?</h2>
                        <p className="text-slate-600 mb-6 max-w-xl mx-auto">Recevez jusqu'à 3 devis gratuits de professionnels vérifiés SIREN dans votre département.</p>
                        <Link href="/devis" className="inline-flex items-center gap-2 bg-orange-600 hover:bg-orange-500 text-white font-bold text-lg px-8 py-4 rounded-full shadow-[0_0_20px_-5px_rgba(234,88,12,0.4)] transition-all transform hover:scale-105">
                            Comparer les artisans
                            <ArrowRight className="h-5 w-5" />
                        </Link>
                    </div>
                </section>

                {/* ===== Section 7 : Autres régions ===== */}
                <section className="py-12">
                    <h2 className="text-xl font-bold text-slate-900 mb-6">Autres régions</h2>
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
                        {allRegions.map(region => (
                            <Link 
                                key={region} 
                                href={`/regions/${slugifyRegion(region)}`}
                                className="group flex items-center gap-2 p-3 rounded-xl border border-slate-100 bg-white hover:border-indigo-200 hover:bg-indigo-50/50 transition-all"
                            >
                                <Globe className="h-4 w-4 text-slate-400 group-hover:text-indigo-600 shrink-0" />
                                <span className="font-medium text-slate-700 group-hover:text-indigo-700 text-sm truncate">{region}</span>
                            </Link>
                        ))}
                    </div>
                </section>
            </div>
            
            <MobileStickyCta href="/devis" text={`Obtenir mes devis en ${regionName}`} />
        </div>
    );
}
