export const revalidate = false; // Fully static — invalidated only on redeploy
import { notFound } from "next/navigation";
import { getCategoryFromSlug, getAllCategories } from "@/lib/categories";
import { getAllDepartments, DepartmentInfo, getRegions, slugifyRegion } from '@/lib/cities';
import { getCategoryContent } from '@/lib/category-content';
import Link from 'next/link';
import { MobileStickyCta } from "@/components/ui/MobileStickyCta";
import { Metadata } from 'next';
import { Map as MapIcon, ChevronRight, Clock, ShieldCheck, Star, Siren, Euro, FileText, Search, ArrowRight, HelpCircle, CheckCircle, Lightbulb, MapPin, Wrench, ExternalLink, Briefcase, ThumbsUp, CheckSquare, Award } from 'lucide-react';

const TOP_CITIES = [
    { name: "Paris", slug: "paris-1er-arrondissement-75001" },
    { name: "Lyon", slug: "lyon-1er-arrondissement-69001" },
    { name: "Marseille", slug: "marseille-1er-arrondissement-13001" },
    { name: "Toulouse", slug: "toulouse-31000" },
    { name: "Bordeaux", slug: "bordeaux-33000" },
    { name: "Nantes", slug: "nantes-44000" },
    { name: "Lille", slug: "lille-59000" },
    { name: "Strasbourg", slug: "strasbourg-67000" },
    { name: "Rennes", slug: "rennes-35000" },
    { name: "Montpellier", slug: "montpellier-34000" },
    { name: "Nice", slug: "nice-06000" },
    { name: "Grenoble", slug: "grenoble-38000" },
];

type Props = {
    params: Promise<{ category: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { category: categorySlug } = await params;
    const category = getCategoryFromSlug(categorySlug);
    
    if (!category) return {};
    
    const content = getCategoryContent(category.slug, category.name);

    return {
        title: `${category.name} : comparez les professionnels 2026 | Comparateur Devis`,
        description: content.description 
            ? content.description.substring(0, 155) + "..."
            : `Trouvez un artisan certifié pour votre projet de ${category.name.toLowerCase()}. Tarifs ${content.priceRange} ${content.priceUnit}. Devis gratuit, artisans vérifiés SIREN.`,
        alternates: {
            canonical: `https://www.comparateur-devis.fr/${category.slug}`,
        },
    };
}

export async function generateStaticParams() {
    const categories = getAllCategories();
    return categories.map((c) => ({
        category: c.slug,
    }));
}

export default async function CategoryAnnuairePage({ params }: Props) {
    const { category: categorySlug } = await params;
    const category = getCategoryFromSlug(categorySlug);

    if (!category) notFound();

    const content = getCategoryContent(category.slug, category.name);
    const departments = getAllDepartments();
    const regions = getRegions();
    const allCategories = getAllCategories();

    // Group departments by Region
    const regionsMap = new Map<string, DepartmentInfo[]>();
    departments.forEach(dept => {
        const current = regionsMap.get(dept.region) || [];
        current.push(dept);
        regionsMap.set(dept.region, current);
    });
    const sortedRegions = Array.from(regionsMap.keys()).sort();

    // Related categories
    const relatedCategories = content.relatedSlugs
        .map(slug => allCategories.find(c => c.slug === slug))
        .filter(Boolean) as typeof allCategories;

    // Other popular services for "Voir aussi"
    const otherServices = allCategories
        .filter(c => c.slug !== category.slug && !content.relatedSlugs.includes(c.slug))
        .slice(0, 8);

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
        <div className="min-h-screen bg-white pb-20 md:pb-0">
            {/* FAQ Schema.org */}
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

            {/* Premium Dark Hero Section harmonized with Home */}
            <section className="relative bg-slate-950 pt-16 pb-20 lg:pt-24 lg:pb-24 overflow-hidden border-b border-slate-800">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full overflow-hidden pointer-events-none">
                    <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[70%] bg-orange-600/10 blur-[120px] rounded-full mix-blend-screen"></div>
                    <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[60%] bg-blue-600/10 blur-[120px] rounded-full mix-blend-screen"></div>
                </div>
                
                <div className="container mx-auto px-4 max-w-6xl relative z-10">
                    <div className="mb-8">
                        <div className="flex items-center gap-2 text-sm text-slate-400">
                            <Link href="/services" className="hover:text-white transition-colors">Services</Link>
                            <ChevronRight className="h-3 w-3" />
                            <span className="text-white">{category.name}</span>
                        </div>
                    </div>
                    
                    <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-white mb-6 tracking-tight leading-tight">
                        {category.name} : <br className="hidden md:block"/><span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-300">comparez les professionnels</span>
                    </h1>
                    
                    {content.description ? (
                        <p className="text-lg text-slate-300 max-w-3xl mb-6 leading-relaxed">{content.description}</p>
                    ) : (
                        <p className="text-lg text-slate-300 max-w-3xl mb-6">{category.name} professionnel : devis gratuit, artisans qualifiés.</p>
                    )}
                    
                    <div className="flex items-center gap-2 text-sm text-[#b0a89d] mb-12">
                        <Clock className="h-4 w-4" />
                        <span>Données artisans mises à jour en mars 2026</span>
                    </div>

                    {/* Stats Grid — specific to category */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10 border-b border-[#4d4840] pb-10">
                        <div>
                            <div className="text-3xl md:text-4xl font-extrabold text-[#e45b3c] mb-1">{content.priceRange}</div>
                            <div className="text-sm text-[#b0a89d]">{content.priceUnit}</div>
                        </div>
                        <div>
                            <div className="text-3xl md:text-4xl font-extrabold text-[#e45b3c] mb-1">35 000+</div>
                            <div className="text-sm text-[#b0a89d]">villes couvertes</div>
                        </div>
                        <div>
                            <div className="text-3xl md:text-4xl font-extrabold text-[#e45b3c] mb-1">100%</div>
                            <div className="text-sm text-[#b0a89d]">données SIREN</div>
                        </div>
                        <div>
                            <div className="text-3xl md:text-4xl font-extrabold text-[#e45b3c] mb-1">101</div>
                            <div className="text-sm text-[#b0a89d]">départements</div>
                        </div>
                    </div>

                    {/* Badges */}
                    <div className="flex flex-wrap gap-3 mb-12">
                        <div className="flex items-center gap-2 bg-[#36322d] border border-[#4d4840] px-4 py-2 rounded-full text-sm font-medium text-white">
                            <ShieldCheck className="h-4 w-4 text-emerald-500" /> Artisans vérifiés
                        </div>
                        <div className="flex items-center gap-2 bg-[#36322d] border border-[#4d4840] px-4 py-2 rounded-full text-sm font-medium text-white">
                            <Star className="h-4 w-4 text-yellow-500" /> Qualité contrôlée
                        </div>
                        <div className="flex items-center gap-2 bg-[#36322d] border border-[#4d4840] px-4 py-2 rounded-full text-sm font-medium text-white">
                            <Siren className="h-4 w-4 text-red-500" /> Urgence possible
                        </div>
                    </div>

                    <Link href={`/devis?category=${category.slug}`} className="inline-flex items-center justify-center gap-2 bg-orange-600 hover:bg-orange-500 text-white font-bold text-lg px-10 h-16 rounded-full shadow-[0_0_40px_-10px_rgba(234,88,12,0.5)] transition-all transform hover:scale-105">
                        Comparer les artisans près de chez moi
                        <ArrowRight className="h-5 w-5" />
                    </Link>
                </div>
            </section>

            {/* Sub-Navigation Bar */}
            <div className="bg-white border-b border-slate-200">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="flex items-center gap-2 py-4 overflow-x-auto no-scrollbar">
                        <span className="text-xs font-bold text-slate-400 uppercase tracking-wider mr-4 whitespace-nowrap">
                            {category.name} — Voir aussi
                        </span>
                        <div className="flex gap-2">
                            <Link href="/simulateur-prix" className="flex items-center gap-2 border border-slate-200 hover:border-slate-300 bg-white px-4 py-2 rounded-lg text-sm font-medium text-slate-700 transition-colors whitespace-nowrap">
                                <Euro className="h-4 w-4 text-slate-400" /> Tarifs
                            </Link>
                            <Link href="/guides" className="flex items-center gap-2 border border-slate-200 hover:border-slate-300 bg-white px-4 py-2 rounded-lg text-sm font-medium text-slate-700 transition-colors whitespace-nowrap">
                                <Star className="h-4 w-4 text-slate-400" /> Avis
                            </Link>
                            <div className="flex items-center gap-2 border border-orange-200 bg-orange-50 text-orange-700 px-4 py-2 rounded-lg text-sm font-bold whitespace-nowrap">
                                <Search className="h-4 w-4" /> Artisans
                            </div>
                            <Link href="/devis" className="flex items-center gap-2 border border-slate-200 hover:border-slate-300 bg-white px-4 py-2 rounded-lg text-sm font-medium text-slate-700 transition-colors whitespace-nowrap">
                                <Siren className="h-4 w-4 text-red-500" /> Urgence
                            </Link>
                            <Link href="/devis" className="flex items-center gap-2 border border-slate-200 hover:border-slate-300 bg-white px-4 py-2 rounded-lg text-sm font-medium text-slate-700 transition-colors whitespace-nowrap">
                                <FileText className="h-4 w-4 text-slate-400" /> Devis
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 max-w-6xl">

                {/* ===== Section 1 : Tarifs ===== */}
                <section className="py-12 border-b border-slate-100">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="bg-orange-50 p-3 rounded-xl">
                            <Euro className="h-6 w-6 text-orange-600" />
                        </div>
                        <h2 className="text-2xl font-bold text-slate-900">Combien coûte un {category.name.toLowerCase()} ?</h2>
                    </div>
                    <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
                        <div className="flex items-baseline gap-3 mb-4">
                            <span className="text-4xl font-extrabold text-orange-600">{content.priceRange}</span>
                            <span className="text-lg font-medium text-slate-500">{content.priceUnit}</span>
                        </div>
                        <p className="text-slate-600 leading-relaxed">
                            Tarif moyen constaté en France métropolitaine pour des prestations de {category.name.toLowerCase()}.
                            Les prix varient selon la région, la complexité des travaux et le professionnel.
                            Comparez plusieurs devis pour obtenir le meilleur rapport qualité-prix.
                        </p>
                    </div>
                </section>

                {/* ===== NOUVELLE SECTION : Domaines d'intervention ===== */}
                {content.services && content.services.length > 0 && (
                    <section className="py-12 border-b border-slate-100">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="bg-blue-50 p-3 rounded-xl">
                                <Briefcase className="h-6 w-6 text-blue-600" />
                            </div>
                            <h2 className="text-2xl font-bold text-slate-900">Vos travaux de {category.name.toLowerCase()} : domaines d'intervention</h2>
                        </div>
                        <div className="grid sm:grid-cols-2 gap-4">
                            {content.services.map((service, i) => (
                                <div key={i} className="bg-white rounded-xl p-5 border border-slate-100 shadow-sm hover:border-blue-200 transition-colors">
                                    <h3 className="font-bold text-slate-800 mb-2 truncate">{service.title}</h3>
                                    <p className="text-slate-600 leading-relaxed text-sm">{service.desc}</p>
                                </div>
                            ))}
                        </div>
                    </section>
                )}

                {/* ===== NOUVELLE SECTION : Pourquoi faire appel à un pro / Garantie ===== */}
                {content.whyHirePro && (
                    <section className="py-12 border-b border-slate-100 bg-slate-50 -mx-4 px-4 sm:mx-0 sm:px-0 sm:bg-transparent">
                        <div className="sm:bg-slate-50 sm:p-8 sm:rounded-2xl sm:border sm:border-slate-100">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="bg-orange-50 p-3 rounded-xl">
                                    <ThumbsUp className="h-6 w-6 text-orange-600" />
                                </div>
                                <h2 className="text-2xl font-bold text-slate-900">{content.whyHirePro.title}</h2>
                            </div>
                            <div className="space-y-4">
                                {content.whyHirePro.points.map((point, i) => (
                                    <div key={i} className="flex gap-4">
                                        <div className="shrink-0 mt-1">
                                            <CheckSquare className="h-5 w-5 text-emerald-500" />
                                        </div>
                                        <p className="text-slate-700 leading-relaxed">{point}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                )}

                {/* ===== NOUVELLE SECTION : Certifications ===== */}
                {content.certifications && content.certifications.length > 0 && (
                    <section className="py-12 border-b border-slate-100">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="bg-amber-50 p-3 rounded-xl">
                                <Award className="h-6 w-6 text-amber-600" />
                            </div>
                            <h2 className="text-2xl font-bold text-slate-900">Quelles certifications exiger pour vos travaux de {category.name.toLowerCase()} ?</h2>
                        </div>
                        <div className="flex flex-wrap gap-3">
                            {content.certifications.map((cert, i) => (
                                <div key={i} className="flex items-center gap-2 bg-white border border-slate-200 px-4 py-2 rounded-full text-sm font-medium text-slate-700 shadow-sm">
                                    <ShieldCheck className="h-4 w-4 text-emerald-500" />
                                    {cert}
                                </div>
                            ))}
                        </div>
                    </section>
                )}

                {/* ===== Section 2 : Conseils ===== */}
                {content.tips.length > 0 && (
                    <section className="py-12 border-b border-slate-100">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="bg-blue-50 p-3 rounded-xl">
                                <Lightbulb className="h-6 w-6 text-blue-600" />
                            </div>
                            <h2 className="text-2xl font-bold text-slate-900">Conseils pour choisir votre {category.name.toLowerCase()}</h2>
                        </div>
                        <div className="grid md:grid-cols-2 gap-4">
                            {content.tips.map((tip, i) => (
                                <div key={i} className="bg-white rounded-xl p-5 border border-slate-100 shadow-sm flex gap-4">
                                    <div className="shrink-0 mt-1">
                                        <CheckCircle className="h-5 w-5 text-emerald-500" />
                                    </div>
                                    <p className="text-slate-700 leading-relaxed text-sm">{tip}</p>
                                </div>
                            ))}
                        </div>
                    </section>
                )}

                {/* ===== Section 3 : Par ville ===== */}
                <section className="py-12 border-b border-slate-100">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="bg-emerald-50 p-3 rounded-xl">
                            <MapPin className="h-6 w-6 text-emerald-600" />
                        </div>
                        <h2 className="text-2xl font-bold text-slate-900">Trouver un {category.name.toLowerCase()} par ville</h2>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
                        {TOP_CITIES.map(city => (
                            <Link 
                                key={city.slug} 
                                href={`/${category.slug}/${city.slug}`}
                                className="group flex items-center gap-2 p-3 rounded-xl border border-slate-100 hover:border-emerald-200 hover:bg-emerald-50/50 transition-all"
                            >
                                <MapPin className="h-4 w-4 text-slate-400 group-hover:text-emerald-600 shrink-0" />
                                <span className="font-medium text-slate-700 group-hover:text-emerald-700 text-sm truncate">{category.name} à {city.name}</span>
                            </Link>
                        ))}
                    </div>
                </section>

                {/* ===== Section 4 : Par région ===== */}
                <section className="py-12 border-b border-slate-100">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="bg-indigo-50 p-3 rounded-xl">
                            <MapIcon className="h-6 w-6 text-indigo-600" />
                        </div>
                        <h2 className="text-2xl font-bold text-slate-900">{category.name} par région</h2>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
                        {regions.map(region => (
                            <Link 
                                key={region} 
                                href={`/regions/${slugifyRegion(region)}`}
                                className="group flex items-center gap-2 p-3 rounded-xl border border-slate-100 hover:border-indigo-200 hover:bg-indigo-50/50 transition-all"
                            >
                                <MapIcon className="h-4 w-4 text-slate-400 group-hover:text-indigo-600 shrink-0" />
                                <span className="font-medium text-slate-700 group-hover:text-indigo-700 text-sm truncate">{category.name} en {region}</span>
                            </Link>
                        ))}
                    </div>
                </section>

                {/* ===== Section 5 : FAQ ===== */}
                {content.faq.length > 0 && (
                    <section className="py-12 border-b border-slate-100">
                        <div className="flex items-center gap-3 mb-8">
                            <div className="bg-purple-50 p-3 rounded-xl">
                                <HelpCircle className="h-6 w-6 text-purple-600" />
                            </div>
                            <h2 className="text-2xl font-bold text-slate-900">Questions fréquentes — {category.name}</h2>
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

                {/* ===== Section 6 : Voir aussi (Cross-links massifs) ===== */}
                <section className="py-12 border-b border-slate-100">
                    <h2 className="text-xl font-bold text-slate-900 mb-8">Voir aussi</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Services connexes */}
                        {relatedCategories.length > 0 && (
                            <div>
                                <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-4">Services connexes</h3>
                                <ul className="space-y-2">
                                    {relatedCategories.map(c => (
                                        <li key={c.slug}>
                                            <Link href={`/${c.slug}`} className="text-blue-600 hover:text-blue-800 hover:underline font-medium flex items-center gap-2">
                                                <Wrench className="h-4 w-4 text-slate-400" />
                                                {c.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        {/* Outils pratiques */}
                        <div>
                            <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-4">Outils pratiques</h3>
                            <ul className="space-y-2">
                                <li><Link href="/simulateur-prix" className="text-blue-600 hover:text-blue-800 hover:underline font-medium flex items-center gap-2"><Euro className="h-4 w-4 text-slate-400" /> Simulateur de prix</Link></li>
                                <li><Link href="/calculateur-aides" className="text-blue-600 hover:text-blue-800 hover:underline font-medium flex items-center gap-2"><ExternalLink className="h-4 w-4 text-slate-400" /> Calculateur d'aides</Link></li>
                                <li><Link href="/guides" className="text-blue-600 hover:text-blue-800 hover:underline font-medium flex items-center gap-2"><FileText className="h-4 w-4 text-slate-400" /> Guides travaux</Link></li>
                            </ul>
                        </div>

                        {/* Villes populaires */}
                        <div>
                            <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-4">Villes populaires</h3>
                            <ul className="space-y-2">
                                {TOP_CITIES.slice(0, 7).map(city => (
                                    <li key={city.slug}>
                                        <Link href={`/${category.slug}/${city.slug}`} className="text-blue-600 hover:text-blue-800 hover:underline font-medium flex items-center gap-2">
                                            <MapPin className="h-4 w-4 text-slate-400" />
                                            {category.name} à {city.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Autres services */}
                    <div className="mt-8 pt-8 border-t border-slate-100">
                        <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-4">Autres services artisans</h3>
                        <div className="flex flex-wrap gap-3">
                            {otherServices.map(c => (
                                <Link key={c.slug} href={`/${c.slug}`} className="text-sm text-slate-600 hover:text-orange-600 border border-slate-200 hover:border-orange-200 px-4 py-2 rounded-full transition-colors">
                                    {c.name}
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>
            </div>

            {/* Regions Grid (existing — now after "Voir aussi") */}
            <section className="py-16 bg-slate-50">
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto">
                        <h2 className="text-2xl font-bold text-slate-900 mb-8">{category.name} par département</h2>
                        <div className="grid gap-12">
                            {sortedRegions.map(region => (
                                <div key={region} className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
                                    <div className="bg-orange-50 px-6 py-4 border-b border-orange-100 flex items-center gap-2">
                                        <MapIcon className="h-5 w-5 text-orange-600" />
                                        <h3 className="text-xl font-bold text-slate-800">{region}</h3>
                                    </div>
                                    <div className="p-6">
                                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                            {regionsMap.get(region)?.map(dept => {
                                                const slug = `${dept.name.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '')}-${dept.code}`;
                                                return (
                                                    <Link
                                                        key={dept.code}
                                                        href={`/${category.slug}/annuaire/${slug}`}
                                                        className="group flex items-center justify-between p-3 rounded-lg hover:bg-slate-50 border border-transparent hover:border-slate-200 transition-all"
                                                    >
                                                        <div className="flex items-center gap-3">
                                                            <span className="bg-slate-100 text-slate-600 font-mono text-sm font-bold bg-opacity-70 px-2 py-1 rounded">
                                                                {dept.code}
                                                            </span>
                                                            <span className="text-slate-700 font-medium group-hover:text-orange-700">
                                                                {dept.name}
                                                            </span>
                                                        </div>
                                                        <ChevronRight className="h-4 w-4 text-slate-300 group-hover:text-orange-400" />
                                                    </Link>
                                                );
                                            })}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
            
            <MobileStickyCta href={`/devis?category=${category.slug}`} text="Comparer les artisans" />
        </div>
    );
}
