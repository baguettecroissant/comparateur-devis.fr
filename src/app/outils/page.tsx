import Link from "next/link";
import { Calculator, Euro, Clock, ArrowRight, CheckCircle, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Outils Gratuits Monte-Escalier | Simulateurs et Calculateurs",
    description: "Outils gratuits pour votre projet monte-escalier : simulateur de prix, calculateur d'aides MaPrimeAdapt', estimation délais. 100% gratuit, sans engagement.",
    openGraph: {
        title: "Outils Gratuits Monte-Escalier | Simulateurs et Calculateurs",
        description: "Simulateur de prix, calculateur d'aides, estimation délais. Outils 100% gratuits pour préparer votre projet.",
    },
};

const tools = [
    {
        slug: "simulateur-prix",
        title: "Simulateur de Prix",
        description: "Estimez le coût de votre monte-escalier en 30 secondes. Escalier droit, tournant ou extérieur.",
        icon: Euro,
        color: "orange",
        features: ["Prix pose comprise", "3 types d'escaliers", "Options détaillées"],
        cta: "Estimer mon prix",
    },
    {
        slug: "calculateur-aides",
        title: "Calculateur d'Aides",
        description: "Simulez vos aides financières : MaPrimeAdapt' (jusqu'à 70%), crédit d'impôt, TVA réduite.",
        icon: Calculator,
        color: "green",
        features: ["MaPrimeAdapt' 2026", "Crédit d'impôt 25%", "Reste à charge"],
        cta: "Calculer mes aides",
    },
    {
        slug: "simulation-delais",
        title: "Estimation des Délais",
        description: "Découvrez combien de temps prend un projet monte-escalier, de la demande de devis à l'installation.",
        icon: Clock,
        color: "blue",
        features: ["Timeline détaillée", "Étapes clés", "Conseils planning"],
        cta: "Voir les délais",
    },
];

const colorClasses = {
    orange: {
        bg: "bg-orange-50",
        border: "border-orange-200",
        iconBg: "bg-orange-100",
        iconColor: "text-orange-600",
        button: "bg-orange-600 hover:bg-orange-700",
        badge: "bg-orange-100 text-orange-700",
    },
    green: {
        bg: "bg-green-50",
        border: "border-green-200",
        iconBg: "bg-green-100",
        iconColor: "text-green-600",
        button: "bg-green-600 hover:bg-green-700",
        badge: "bg-green-100 text-green-700",
    },
    blue: {
        bg: "bg-blue-50",
        border: "border-blue-200",
        iconBg: "bg-blue-100",
        iconColor: "text-blue-600",
        button: "bg-blue-600 hover:bg-blue-700",
        badge: "bg-blue-100 text-blue-700",
    },
};

export default function OutilsPage() {
    return (
        <div className="min-h-screen bg-slate-50">
            {/* Hero */}
            <section className="bg-slate-900 text-white py-16">
                <div className="container mx-auto px-4">
                    <Breadcrumbs items={[{ label: "Outils Gratuits" }]} />
                    <div className="max-w-3xl mx-auto text-center mt-6">
                        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500/20 to-amber-500/20 border border-orange-500/30 text-orange-300 px-4 py-1.5 rounded-full text-sm font-medium mb-6">
                            <Sparkles className="h-4 w-4" />
                            100% Gratuit • Sans Engagement
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">
                            Outils <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-400">Gratuits</span> pour votre Projet
                        </h1>
                        <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                            Simulateurs, calculateurs et estimations pour préparer votre projet monte-escalier en toute sérénité.
                        </p>
                    </div>
                </div>
            </section>

            {/* Tools Grid */}
            <section className="py-16 -mt-8">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-3 gap-8">
                        {tools.map((tool) => {
                            const colors = colorClasses[tool.color as keyof typeof colorClasses];
                            const Icon = tool.icon;

                            return (
                                <div
                                    key={tool.slug}
                                    className={`${colors.bg} ${colors.border} border-2 rounded-2xl p-6 flex flex-col hover:shadow-xl transition-shadow`}
                                >
                                    <div className={`${colors.iconBg} w-14 h-14 rounded-xl flex items-center justify-center mb-4`}>
                                        <Icon className={`h-7 w-7 ${colors.iconColor}`} />
                                    </div>
                                    <h2 className="text-xl font-bold text-slate-900 mb-2">{tool.title}</h2>
                                    <p className="text-slate-600 mb-4 flex-grow">{tool.description}</p>

                                    <ul className="space-y-2 mb-6">
                                        {tool.features.map((feature, i) => (
                                            <li key={i} className="flex items-center gap-2 text-sm text-slate-700">
                                                <CheckCircle className={`h-4 w-4 ${colors.iconColor}`} />
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>

                                    <Link href={`/${tool.slug}`}>
                                        <Button className={`w-full ${colors.button} text-white h-12 rounded-xl`}>
                                            {tool.cta}
                                            <ArrowRight className="ml-2 h-4 w-4" />
                                        </Button>
                                    </Link>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 bg-white border-t border-slate-200">
                <div className="container mx-auto px-4 max-w-3xl text-center">
                    <h2 className="text-3xl font-bold text-slate-900 mb-4">
                        Prêt à passer à l'action ?
                    </h2>
                    <p className="text-lg text-slate-600 mb-8">
                        Après avoir utilisé nos outils, obtenez des devis personnalisés d'installateurs certifiés dans votre région.
                    </p>
                    <Link href="/devis">
                        <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white text-lg px-10 h-14 rounded-full shadow-lg">
                            Demander mes devis gratuits
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </Button>
                    </Link>
                </div>
            </section>

            {/* SEO Content + Internal Links */}
            <section className="py-16 bg-slate-50 border-t border-slate-200">
                <div className="container mx-auto px-4 max-w-4xl">
                    <div className="prose prose-slate max-w-none">
                        <h2>Pourquoi utiliser nos outils gratuits ?</h2>
                        <p>
                            Préparer un projet de monte-escalier demande de <strong>comparer les prix</strong>,
                            de <strong>connaître les aides disponibles</strong> et d'<strong>anticiper les délais</strong>.
                            Nos outils vous permettent de vous informer avant de contacter des professionnels.
                        </p>

                        <h3>Le simulateur de prix : estimez votre budget</h3>
                        <p>
                            Notre <Link href="/simulateur-prix" className="text-orange-600">simulateur de prix</Link> vous
                            donne une fourchette réaliste en fonction de votre configuration (escalier droit, tournant ou extérieur)
                            et des options souhaitées. Pour aller plus loin, consultez notre
                            <Link href="/guides/prix-monte-escalier-2026" className="text-orange-600"> guide complet des prix 2026</Link>.
                        </p>

                        <h3>Le calculateur d'aides : réduisez votre reste à charge</h3>
                        <p>
                            Grâce au <Link href="/calculateur-aides" className="text-orange-600">calculateur d'aides</Link>,
                            découvrez si vous êtes éligible à <strong>MaPrimeAdapt'</strong> (jusqu'à 70% de prise en charge)
                            ou au <strong>crédit d'impôt de 25%</strong>. Notre article sur les
                            <Link href="/guides/remboursement-monte-escalier-securite-sociale" className="text-orange-600"> aides et remboursements</Link>
                            détaille toutes les options.
                        </p>

                        <h3>Besoin d'un devis précis ?</h3>
                        <p>
                            Ces outils donnent des estimations. Pour un chiffrage exact adapté à votre escalier,
                            seule une <strong>visite technique à domicile</strong> (gratuite) permet d'obtenir un devis définitif.
                            Que vous soyez en <Link href="/annuaire/paris-75" className="text-orange-600">Paris</Link>,
                            en <Link href="/annuaire/bouches-du-rhone-13" className="text-orange-600">Bouches-du-Rhône</Link> ou
                            ailleurs, nos installateurs partenaires interviennent dans toute la France.
                        </p>
                    </div>

                    {/* Related Guides */}
                    <div className="mt-12 pt-12 border-t border-slate-200">
                        <h3 className="text-xl font-bold text-slate-900 mb-6">Guides complémentaires</h3>
                        <div className="grid sm:grid-cols-2 gap-4">
                            {[
                                { slug: "prix-monte-escalier-2026", title: "Prix Monte-Escalier 2026" },
                                { slug: "devis-monte-escalier-pieges", title: "7 Pièges à Éviter sur un Devis" },
                                { slug: "comparatif-marques-monte-escalier", title: "Comparatif Stannah vs Thyssenkrupp vs Handicare" },
                                { slug: "monte-escalier-occasion", title: "Monte-Escalier d'Occasion : Bonne Idée ?" },
                            ].map((guide) => (
                                <Link
                                    key={guide.slug}
                                    href={`/guides/${guide.slug}`}
                                    className="flex items-center gap-3 p-4 bg-white border border-slate-200 rounded-xl hover:border-orange-500 hover:shadow-md transition-all group"
                                >
                                    <div className="bg-orange-100 p-2 rounded-lg group-hover:bg-orange-200 transition-colors">
                                        <ArrowRight className="h-4 w-4 text-orange-600" />
                                    </div>
                                    <span className="font-medium text-slate-700 group-hover:text-orange-700">{guide.title}</span>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
