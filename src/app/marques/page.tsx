import Link from "next/link";
import { Metadata } from "next";
import { ArrowRight, Star, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { BRANDS } from "@/data/brands";

export const metadata: Metadata = {
    title: "Comparatif des Grandes Marques de l'Habitat et de la Rénovation",
    description: "Comparez les meilleures marques pour vos travaux : Atlantic, Velux, Somfy. Prix standards, avis clients, garanties et points forts. Guide complet 2026.",
    openGraph: {
        title: "Grandes Marques Rénovation & Habitat : Comparatif 2026",
        description: "Découvrez les meilleures marques pour vos travaux de rénovation : pompes à chaleur, fenêtres, domotique. Prix, qualité, SAV.",
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
                            Comparatif des <span className="text-orange-400">Grandes Marques</span> de l'Habitat
                        </h1>
                        <p className="text-xl text-slate-300">
                            Atlantic, Velux, Somfy : découvrez les forces, faiblesses et le positionnement tarifaire des leaders de la rénovation pour faire le bon choix.
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
                                            <span className="text-slate-600">Matériel exclusif</span>
                                            <span className="font-bold text-slate-900">{brand.priceRange.fourniture}</span>
                                        </div>
                                        <div className="flex justify-between text-sm">
                                            <span className="text-slate-600">Main d'œuvre moyenne</span>
                                            <span className="font-bold text-slate-900">{brand.priceRange.pose}</span>
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
                                    <th className="border border-slate-200 p-4 text-left">Fourniture moyenne</th>
                                    <th className="border border-slate-200 p-4 text-left">Pose estimée</th>
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
                                        <td className="border border-slate-200 p-4">{brand.priceRange.fourniture}</td>
                                        <td className="border border-slate-200 p-4">{brand.priceRange.pose}</td>
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
                    <h2 className="text-3xl font-bold mb-4">Besoin d'un devis pour votre projet ?</h2>
                    <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                        Recevez les propositions chiffrées de nos artisans partenaires spécialisés pour comparer les tarifs de la marque de votre choix.
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
                    <h2>Comment choisir la vitrine parfaite pour ses travaux ?</h2>
                    <p>
                        Avant d'arrêter son choix sur un équipement spécifique (climatiseur, fenêtre de toit, motorisation), plusieurs critères sont décisifs :
                    </p>
                    <ul>
                        <li><strong>La pérennité du réseau SAV</strong> : assurez-vous de trouver facilement un installateur en cas de panne</li>
                        <li><strong>Compatibilité et écosystème</strong> : votre choix s'intègre-t-il bien dans votre environnement domotique actuel ?</li>
                        <li><strong>L'éligibilité aux aides</strong> : beaucoup de grandes marques proposent du matériel éligible à <Link href="/calculateur-aides" className="text-orange-600">MaPrimeRénov'</Link> s'il est posé par un artisan qualifié</li>
                    </ul>
                    <p>
                        Prêt à évaluer financièrement votre projet ? N'hésitez pas à lancer plusieurs demandes pour <Link href="/devis" className="text-orange-600">comparer les prix finaux (fourniture et pose)</Link>.
                    </p>
                </div>
            </section>
        </div>
    );
}
