import { notFound } from "next/navigation";
import Link from "next/link";
import { Metadata } from "next";
import { Star, CheckCircle, XCircle, Shield, ArrowRight, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { BRANDS, getBrandBySlug, getAllBrandSlugs } from "@/data/brands";

interface PageProps {
    params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
    return getAllBrandSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug } = await params;
    const brand = getBrandBySlug(slug);

    if (!brand) {
        return { title: "Marque non trouvée" };
    }

    return {
        title: brand.seoTitle,
        description: brand.seoDescription,
        alternates: {
            canonical: `https://www.cout-monte-escalier.fr/marques/${slug}`,
        },
        openGraph: {
            title: brand.seoTitle,
            description: brand.seoDescription,
        },
    };
}

function StarRating({ rating, label }: { rating: number; label: string }) {
    return (
        <div className="flex items-center gap-2">
            <span className="text-sm text-slate-600 w-20">{label}</span>
            <div className="flex gap-0.5">
                {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                        key={star}
                        className={`h-4 w-4 ${star <= rating ? "fill-amber-400 text-amber-400" : "fill-slate-200 text-slate-200"}`}
                    />
                ))}
            </div>
        </div>
    );
}

export default async function BrandPage({ params }: PageProps) {
    const { slug } = await params;
    const brand = getBrandBySlug(slug);

    if (!brand) {
        notFound();
    }

    const otherBrands = BRANDS.filter((b) => b.slug !== slug);

    // FAQPage Schema
    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": brand.faq.map((item) => ({
            "@type": "Question",
            "name": item.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": item.answer,
            },
        })),
    };

    return (
        <div className="min-h-screen bg-slate-50">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />

            {/* Hero */}
            <section className="bg-slate-900 text-white py-12">
                <div className="container mx-auto px-4">
                    <Breadcrumbs
                        items={[
                            { label: "Marques", href: "/marques" },
                            { label: brand.name },
                        ]}
                    />
                    <div className="mt-6 max-w-4xl">
                        <div className="flex items-center gap-4 mb-4">
                            <span className="text-4xl">{brand.countryFlag}</span>
                            <div>
                                <h1 className="text-3xl md:text-5xl font-bold">{brand.name}</h1>
                                <p className="text-slate-400">Fondée en {brand.founded} • {brand.country}</p>
                            </div>
                        </div>
                        <p className="text-xl text-orange-300 font-medium mb-6">{brand.tagline}</p>

                        {/* Ratings */}
                        <div className="flex flex-wrap gap-6 bg-white/10 rounded-xl p-4">
                            <StarRating rating={brand.qualityRating} label="Qualité" />
                            <StarRating rating={brand.savRating} label="SAV" />
                            <StarRating rating={brand.priceRating} label="Prix" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Description + Prices */}
            <section className="py-12">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-3 gap-8">
                        {/* Main Content */}
                        <div className="lg:col-span-2">
                            <div className="bg-white rounded-2xl shadow-md p-6 md:p-8 mb-8">
                                <h2 className="text-2xl font-bold text-slate-900 mb-4">À propos de {brand.name}</h2>
                                <div className="prose prose-slate max-w-none">
                                    {brand.description.split("\n\n").map((paragraph, i) => (
                                        <p key={i}>{paragraph}</p>
                                    ))}
                                </div>
                            </div>

                            {/* Models */}
                            <div className="bg-white rounded-2xl shadow-md p-6 md:p-8 mb-8">
                                <h2 className="text-2xl font-bold text-slate-900 mb-6">Modèles & Prix {brand.name}</h2>
                                <div className="space-y-4">
                                    {brand.models.map((model) => (
                                        <div
                                            key={model.name}
                                            className="border border-slate-200 rounded-xl p-4 hover:border-orange-300 transition-colors"
                                        >
                                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                                                <h3 className="font-bold text-slate-900">{model.name}</h3>
                                                <div className="flex items-center gap-2">
                                                    <span className="text-xs bg-slate-100 text-slate-600 px-2 py-1 rounded-full capitalize">
                                                        {model.type === "droit" ? "Escalier droit" : model.type === "tournant" ? "Escalier tournant" : "Extérieur"}
                                                    </span>
                                                    <span className="font-bold text-orange-600">{model.priceRange}</span>
                                                </div>
                                            </div>
                                            <div className="flex flex-wrap gap-2">
                                                {model.features.map((feature, i) => (
                                                    <span key={i} className="text-xs bg-orange-50 text-orange-700 px-2 py-1 rounded-full">
                                                        {feature}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Pros & Cons */}
                            <div className="grid sm:grid-cols-2 gap-6 mb-8">
                                <div className="bg-green-50 border border-green-200 rounded-2xl p-6">
                                    <h3 className="font-bold text-green-800 mb-4 flex items-center gap-2">
                                        <CheckCircle className="h-5 w-5" />
                                        Points forts
                                    </h3>
                                    <ul className="space-y-2">
                                        {brand.pros.map((pro, i) => (
                                            <li key={i} className="flex items-start gap-2 text-sm text-green-800">
                                                <CheckCircle className="h-4 w-4 shrink-0 mt-0.5" />
                                                {pro}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="bg-red-50 border border-red-200 rounded-2xl p-6">
                                    <h3 className="font-bold text-red-800 mb-4 flex items-center gap-2">
                                        <XCircle className="h-5 w-5" />
                                        Points faibles
                                    </h3>
                                    <ul className="space-y-2">
                                        {brand.cons.map((con, i) => (
                                            <li key={i} className="flex items-start gap-2 text-sm text-red-800">
                                                <XCircle className="h-4 w-4 shrink-0 mt-0.5" />
                                                {con}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            {/* FAQ */}
                            <div className="bg-white rounded-2xl shadow-md p-6 md:p-8">
                                <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                                    <HelpCircle className="h-6 w-6 text-orange-500" />
                                    Questions fréquentes sur {brand.name}
                                </h2>
                                <div className="space-y-4">
                                    {brand.faq.map((item, i) => (
                                        <div key={i} className="border-b border-slate-100 pb-4 last:border-0">
                                            <h3 className="font-bold text-slate-900 mb-2">{item.question}</h3>
                                            <p className="text-slate-600">{item.answer}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Sidebar */}
                        <div className="lg:col-span-1">
                            {/* Price Summary */}
                            <div className="bg-white rounded-2xl shadow-md p-6 mb-6 sticky top-24">
                                <h3 className="font-bold text-slate-900 mb-4">Prix {brand.name} 2026</h3>
                                <div className="space-y-3 mb-6">
                                    <div className="flex justify-between items-center p-3 bg-slate-50 rounded-lg">
                                        <span className="text-slate-600">Escalier droit</span>
                                        <span className="font-bold text-slate-900">{brand.priceRange.droit}</span>
                                    </div>
                                    <div className="flex justify-between items-center p-3 bg-slate-50 rounded-lg">
                                        <span className="text-slate-600">Escalier tournant</span>
                                        <span className="font-bold text-slate-900">{brand.priceRange.tournant}</span>
                                    </div>
                                </div>

                                <div className="flex items-center gap-2 text-sm text-slate-500 mb-6">
                                    <Shield className="h-4 w-4" />
                                    Garantie : {brand.warranty}
                                </div>

                                <Link href="/devis">
                                    <Button className="w-full bg-orange-600 hover:bg-orange-700 text-white h-12 rounded-xl">
                                        Demander un devis {brand.name}
                                        <ArrowRight className="ml-2 h-4 w-4" />
                                    </Button>
                                </Link>

                                <Link href="/calculateur-aides" className="block mt-3">
                                    <Button variant="outline" className="w-full h-10 rounded-xl">
                                        Calculer mes aides
                                    </Button>
                                </Link>
                            </div>

                            {/* Other Brands */}
                            <div className="bg-slate-100 rounded-2xl p-6">
                                <h3 className="font-bold text-slate-900 mb-4">Comparer avec</h3>
                                <div className="space-y-2">
                                    {otherBrands.map((other) => (
                                        <Link
                                            key={other.slug}
                                            href={`/marques/${other.slug}`}
                                            className="flex items-center gap-3 p-3 bg-white rounded-lg hover:shadow-md transition-shadow"
                                        >
                                            <span className="text-2xl">{other.countryFlag}</span>
                                            <div>
                                                <div className="font-medium text-slate-900">{other.name}</div>
                                                <div className="text-xs text-slate-500">{other.priceRange.droit}</div>
                                            </div>
                                        </Link>
                                    ))}
                                </div>

                                <Link
                                    href="/guides/comparatif-marques-monte-escalier"
                                    className="block mt-4 text-center text-sm text-orange-600 hover:underline"
                                >
                                    Voir le comparatif complet →
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Related Links */}
            <section className="py-12 bg-white border-t border-slate-200">
                <div className="container mx-auto px-4 max-w-4xl">
                    <h2 className="text-xl font-bold text-slate-900 mb-6">Guides complémentaires</h2>
                    <div className="grid sm:grid-cols-2 gap-4">
                        {[
                            { slug: "prix-monte-escalier-2026", title: "Prix Monte-Escalier 2026" },
                            { slug: "devis-monte-escalier-pieges", title: "7 Pièges à Éviter sur un Devis" },
                            { slug: "monte-escalier-occasion", title: "Monte-Escalier d'Occasion" },
                            { slug: "entretien-monte-escalier", title: "Entretien et Maintenance" },
                        ].map((guide) => (
                            <Link
                                key={guide.slug}
                                href={`/guides/${guide.slug}`}
                                className="flex items-center gap-3 p-4 bg-slate-50 border border-slate-200 rounded-xl hover:border-orange-500 hover:shadow-md transition-all group"
                            >
                                <div className="bg-orange-100 p-2 rounded-lg group-hover:bg-orange-200 transition-colors">
                                    <ArrowRight className="h-4 w-4 text-orange-600" />
                                </div>
                                <span className="font-medium text-slate-700 group-hover:text-orange-700">{guide.title}</span>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
