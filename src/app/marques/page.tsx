import Link from "next/link";
import { Metadata } from "next";
import { ArrowRight, Star, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { BRANDS } from "@/data/brands";

export const metadata: Metadata = {
    title: "Marques Monte-Escalier : Comparatif Stannah, Thyssenkrupp, Handicare",
    description: "Comparez les meilleures marques de monte-escalier : Stannah, Thyssenkrupp, Handicare. Prix, qualité, SAV, garantie. Guide complet 2026.",
    openGraph: {
        title: "Marques Monte-Escalier : Comparatif 2026",
        description: "Comparez Stannah, Thyssenkrupp, Handicare : prix, qualité, SAV. Trouvez la marque idéale.",
    },
};

function StarRating({ rating }: { rating: number }) {
    return (
        <div className="flex gap-0.5">
            {[1, 2, 3, 4, 5].map((star) => (
                <Star
                    key={star}
                    className={`h-4 w-4 ${star <= rating ? "fill-amber-400 text-amber-400" : "fill-slate-200 text-slate-200"}`}
                />
            ))}
        </div>
    );
}

export default function MarquesPage() {
    return (
        <div className="min-h-screen bg-slate-50">
            {/* Hero */}
            <section className="bg-slate-900 text-white py-12">
                <div className="container mx-auto px-4">
                    <Breadcrumbs items={[{ label: "Marques" }]} />
                    <div className="max-w-3xl mt-6">
                        <h1 className="text-3xl md:text-5xl font-bold mb-4">
                            Comparatif des <span className="text-orange-400">Marques</span> de Monte-Escalier
                        </h1>
                        <p className="text-xl text-slate-300">
                            Stannah, Thyssenkrupp, Handicare : découvrez les forces et faiblesses de chaque fabricant pour faire le bon choix.
                        </p>
                    </div>
                </div>
            </section>

            {/* Brands Grid */}
            <section className="py-12">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-3 gap-8">
                        {BRANDS.map((brand) => (
                            <div
                                key={brand.slug}
                                className="bg-white rounded-2xl shadow-md border border-slate-200 overflow-hidden hover:shadow-xl transition-shadow"
                            >
                                <div className="p-6">
                                    <div className="flex items-center gap-3 mb-4">
                                        <span className="text-4xl">{brand.countryFlag}</span>
                                        <div>
                                            <h2 className="text-2xl font-bold text-slate-900">{brand.name}</h2>
                                            <p className="text-sm text-slate-500">Depuis {brand.founded}</p>
                                        </div>
                                    </div>

                                    <p className="text-orange-600 font-medium mb-4">{brand.tagline}</p>

                                    {/* Ratings */}
                                    <div className="space-y-2 mb-6">
                                        <div className="flex items-center justify-between">
                                            <span className="text-sm text-slate-600">Qualité</span>
                                            <StarRating rating={brand.qualityRating} />
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <span className="text-sm text-slate-600">SAV</span>
                                            <StarRating rating={brand.savRating} />
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <span className="text-sm text-slate-600">Prix</span>
                                            <StarRating rating={brand.priceRating} />
                                        </div>
                                    </div>

                                    {/* Price Range */}
                                    <div className="bg-slate-50 rounded-xl p-4 mb-6">
                                        <div className="flex justify-between text-sm mb-2">
                                            <span className="text-slate-600">Droit</span>
                                            <span className="font-bold text-slate-900">{brand.priceRange.droit}</span>
                                        </div>
                                        <div className="flex justify-between text-sm">
                                            <span className="text-slate-600">Tournant</span>
                                            <span className="font-bold text-slate-900">{brand.priceRange.tournant}</span>
                                        </div>
                                    </div>

                                    {/* Top Pros */}
                                    <ul className="space-y-1 mb-6">
                                        {brand.pros.slice(0, 3).map((pro, i) => (
                                            <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                                                <CheckCircle className="h-4 w-4 text-green-500 shrink-0 mt-0.5" />
                                                {pro}
                                            </li>
                                        ))}
                                    </ul>

                                    <Link href={`/marques/${brand.slug}`}>
                                        <Button className="w-full bg-slate-900 hover:bg-slate-800 text-white rounded-xl">
                                            Voir {brand.name}
                                            <ArrowRight className="ml-2 h-4 w-4" />
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Comparison Table */}
            <section className="py-12 bg-white border-t border-slate-200">
                <div className="container mx-auto px-4">
                    <h2 className="text-2xl font-bold text-slate-900 mb-8 text-center">
                        Tableau comparatif rapide
                    </h2>
                    <div className="overflow-x-auto">
                        <table className="w-full border-collapse min-w-[600px]">
                            <thead>
                                <tr className="bg-slate-100">
                                    <th className="border border-slate-200 p-4 text-left">Marque</th>
                                    <th className="border border-slate-200 p-4 text-left">Prix droit</th>
                                    <th className="border border-slate-200 p-4 text-left">Prix tournant</th>
                                    <th className="border border-slate-200 p-4 text-left">Garantie</th>
                                    <th className="border border-slate-200 p-4 text-left">Point fort</th>
                                </tr>
                            </thead>
                            <tbody>
                                {BRANDS.map((brand) => (
                                    <tr key={brand.slug} className="hover:bg-slate-50">
                                        <td className="border border-slate-200 p-4">
                                            <Link href={`/marques/${brand.slug}`} className="font-bold text-orange-600 hover:underline">
                                                {brand.countryFlag} {brand.name}
                                            </Link>
                                        </td>
                                        <td className="border border-slate-200 p-4">{brand.priceRange.droit}</td>
                                        <td className="border border-slate-200 p-4">{brand.priceRange.tournant}</td>
                                        <td className="border border-slate-200 p-4">{brand.warranty}</td>
                                        <td className="border border-slate-200 p-4 text-sm">{brand.pros[0]}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 bg-gradient-to-br from-orange-500 to-amber-500 text-white">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold mb-4">Besoin d'un devis personnalisé ?</h2>
                    <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                        Recevez des propositions des 3 marques pour comparer les prix sur votre configuration exacte.
                    </p>
                    <Link href="/devis">
                        <Button size="lg" className="bg-white text-orange-600 hover:bg-slate-100 text-lg px-10 h-14 rounded-full shadow-lg">
                            Comparer les devis gratuits
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </Button>
                    </Link>
                </div>
            </section>

            {/* SEO Content */}
            <section className="py-16 bg-slate-50 border-t border-slate-200">
                <div className="container mx-auto px-4 max-w-3xl prose prose-slate">
                    <h2>Comment choisir sa marque de monte-escalier ?</h2>
                    <p>
                        Le choix de la marque est important mais ne doit pas être le seul critère.
                        Voici les points à considérer :
                    </p>
                    <ul>
                        <li><strong>Le SAV local</strong> : un installateur réactif proche de chez vous est essentiel</li>
                        <li><strong>La configuration</strong> : certaines marques excellent sur les tournants, d'autres sur les droits</li>
                        <li><strong>Votre budget</strong> : avec les <Link href="/calculateur-aides" className="text-orange-600">aides disponibles</Link>, même les marques premium deviennent accessibles</li>
                    </ul>
                    <p>
                        Pour un comparatif détaillé, consultez notre <Link href="/guides/comparatif-marques-monte-escalier" className="text-orange-600">guide complet des marques</Link>.
                    </p>
                </div>
            </section>
        </div>
    );
}
