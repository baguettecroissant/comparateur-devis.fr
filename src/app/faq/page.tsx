import Link from "next/link";
import { Metadata } from "next";
import { HelpCircle, Search, ArrowRight, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";

export const metadata: Metadata = {
    title: "FAQ Monte-Escalier : Questions Fréquentes et Réponses 2026",
    description: "Toutes les réponses à vos questions sur les monte-escaliers : prix, aides, installation, entretien, marques. FAQ complète par catégorie.",
    openGraph: {
        title: "FAQ Monte-Escalier : Questions Fréquentes",
        description: "Prix, aides, installation, entretien : toutes vos questions sur les monte-escaliers.",
    },
};

interface FAQItem {
    question: string;
    answer: string;
    links?: { text: string; href: string }[];
}

interface FAQCategory {
    title: string;
    icon: string;
    items: FAQItem[];
}

const faqCategories: FAQCategory[] = [
    {
        title: "Prix & Budget",
        icon: "💰",
        items: [
            {
                question: "Quel est le prix d'un monte-escalier ?",
                answer: "Le prix varie selon le type d'escalier : comptez entre 2 500€ et 5 000€ pour un escalier droit, et entre 8 000€ et 15 000€ pour un escalier tournant. Ces prix incluent généralement la fourniture et la pose.",
                links: [
                    { text: "Simuler mon prix", href: "/simulateur-prix" },
                    { text: "Guide prix 2026", href: "/guides/prix-monte-escalier-2026" },
                ],
            },
            {
                question: "Le monte-escalier est-il remboursé par la Sécurité sociale ?",
                answer: "Non, le monte-escalier n'est pas pris en charge par la Sécurité sociale. En revanche, plusieurs aides existent : MaPrimeAdapt' (jusqu'à 70%), crédit d'impôt (25%), aides locales. Certaines mutuelles proposent aussi des forfaits bien-être.",
                links: [
                    { text: "Calculer mes aides", href: "/calculateur-aides" },
                    { text: "Guide remboursements", href: "/guides/remboursement-monte-escalier-securite-sociale" },
                ],
            },
            {
                question: "Quelles sont les aides disponibles en 2026 ?",
                answer: "Les principales aides sont : MaPrimeAdapt' (50% à 70% selon revenus), le crédit d'impôt (25% plafonné), la TVA réduite à 5,5%, les aides des caisses de retraite (CARSAT, MSA) et parfois les aides départementales.",
                links: [{ text: "Calculer mes aides", href: "/calculateur-aides" }],
            },
            {
                question: "Peut-on payer un monte-escalier en plusieurs fois ?",
                answer: "Oui, la plupart des installateurs proposent des facilités de paiement : paiement en 3 ou 4 fois sans frais, ou crédit affecté sur 12 à 60 mois. Certains acceptent aussi le chèque énergie.",
            },
            {
                question: "Combien coûte l'entretien d'un monte-escalier ?",
                answer: "Un contrat d'entretien annuel coûte entre 100€ et 400€ selon la formule. Il inclut une visite de maintenance préventive et parfois les dépannages. Sans contrat, une intervention ponctuelle coûte 100€ à 200€.",
                links: [{ text: "Guide entretien", href: "/guides/entretien-monte-escalier" }],
            },
        ],
    },
    {
        title: "Installation",
        icon: "🔧",
        items: [
            {
                question: "Combien de temps dure l'installation ?",
                answer: "L'installation d'un monte-escalier droit prend généralement une demi-journée (3-4 heures). Pour un escalier tournant, comptez une journée complète. Aucuns travaux lourds ne sont nécessaires.",
            },
            {
                question: "Faut-il faire des travaux dans la maison ?",
                answer: "Non, l'installation d'un monte-escalier ne nécessite aucuns travaux. Le rail se fixe sur les marches (pas sur le mur). Seule une prise électrique standard à proximité est requise.",
            },
            {
                question: "Quelle largeur d'escalier faut-il au minimum ?",
                answer: "Un escalier de 65 cm de large minimum est généralement suffisant. Les modèles compacts (comme le HomeGlide de Thyssenkrupp avec son rail de 93mm) permettent de préserver une largeur de passage confortable.",
            },
            {
                question: "Peut-on installer un monte-escalier dans un escalier en colimaçon ?",
                answer: "Oui, c'est techniquement possible mais complexe et coûteux. Un rail sur-mesure sera fabriqué selon la forme exacte de votre escalier. Comptez 12 000€ à 18 000€ pour ce type de configuration.",
            },
            {
                question: "Le monte-escalier gêne-t-il les autres utilisateurs de l'escalier ?",
                answer: "Non, le siège et le repose-pieds se replient contre le mur quand ils ne sont pas utilisés. Le rail occupe environ 15 à 20 cm de large. L'escalier reste utilisable normalement par tous.",
            },
        ],
    },
    {
        title: "Fonctionnement & Sécurité",
        icon: "🔒",
        items: [
            {
                question: "Comment fonctionne un monte-escalier ?",
                answer: "L'utilisateur s'assoit sur le siège, attache la ceinture de sécurité, puis actionne la commande. Le siège se déplace le long du rail grâce à un moteur électrique alimenté par batteries rechargeables.",
            },
            {
                question: "Que se passe-t-il en cas de coupure de courant ?",
                answer: "Le monte-escalier fonctionne sur batteries rechargeables. En cas de coupure de courant, il dispose d'une autonomie de plusieurs trajets (généralement 10 à 20 aller-retours).",
            },
            {
                question: "Le monte-escalier est-il sûr pour une personne âgée ?",
                answer: "Oui, les monte-escaliers sont équipés de multiples sécurités : ceinture de sécurité, détecteurs d'obstacles, freinage automatique, siège pivotant pour monter/descendre en sécurité.",
            },
            {
                question: "Quel poids maximum un monte-escalier peut-il supporter ?",
                answer: "La plupart des modèles supportent jusqu'à 120 kg. Des modèles renforcés existent pour des capacités de 150 kg à 200 kg (sur commande spéciale).",
            },
            {
                question: "Quelle est la vitesse d'un monte-escalier ?",
                answer: "La vitesse est d'environ 0,10 à 0,15 mètre par seconde, soit un trajet d'une vingtaine de secondes pour un étage standard. Cette vitesse lente garantit confort et sécurité.",
            },
        ],
    },
    {
        title: "Marques & Modèles",
        icon: "🏷️",
        items: [
            {
                question: "Quelle est la meilleure marque de monte-escalier ?",
                answer: "Stannah, Thyssenkrupp et Handicare sont les 3 leaders. Stannah excelle en SAV, Thyssenkrupp en innovation technique, Handicare en rapport qualité/prix. Le meilleur choix dépend de vos priorités.",
                links: [
                    { text: "Comparatif marques", href: "/guides/comparatif-marques-monte-escalier" },
                    { text: "Voir toutes les marques", href: "/marques" },
                ],
            },
            {
                question: "Peut-on acheter un monte-escalier d'occasion ?",
                answer: "Oui, mais avec précaution. Un monte-escalier d'occasion coûte 30-50% moins cher mais attention : les tournants sont sur-mesure (peu de chances de compatibilité), et vérifiez l'âge et l'état des batteries.",
                links: [{ text: "Guide occasion", href: "/guides/monte-escalier-occasion" }],
            },
            {
                question: "Peut-on louer un monte-escalier ?",
                answer: "Oui, la location existe à partir de 80€/mois pour un escalier droit. C'est intéressant pour un besoin temporaire (moins de 2 ans). Au-delà, l'achat est plus avantageux.",
                links: [{ text: "Guide location", href: "/guides/location-monte-escalier" }],
            },
            {
                question: "Stannah est-il le meilleur rapport qualité-prix ?",
                answer: "Stannah est le plus fiable mais aussi le plus cher. Pour le meilleur rapport qualité-prix, Handicare est souvent recommandé. Thyssenkrupp offre un bon compromis technologie/prix.",
                links: [{ text: "Page Stannah", href: "/marques/stannah" }],
            },
        ],
    },
    {
        title: "Après l'achat",
        icon: "📋",
        items: [
            {
                question: "Quelle est la durée de vie d'un monte-escalier ?",
                answer: "Un monte-escalier de qualité dure 15 à 20 ans avec un entretien régulier. Les batteries doivent être remplacées tous les 3 à 5 ans (200€ à 500€).",
                links: [{ text: "Guide entretien", href: "/guides/entretien-monte-escalier" }],
            },
            {
                question: "Que faire si mon monte-escalier tombe en panne ?",
                answer: "Contactez immédiatement le SAV de votre installateur. Avec un contrat d'entretien, l'intervention est généralement incluse. Sans contrat, comptez 100€ à 200€ pour un dépannage.",
            },
            {
                question: "Peut-on déménager un monte-escalier ?",
                answer: "Oui pour un modèle droit si le nouvel escalier a la même configuration. Pour un tournant (rail sur-mesure), c'est rarement possible. Un déménagement coûte 500€ à 1 500€.",
            },
            {
                question: "Peut-on revendre un monte-escalier ?",
                answer: "Oui, un monte-escalier droit peut se revendre sur les sites de petites annonces (500€ à 2 000€ selon l'état). Les modèles tournants sont difficiles à revendre car sur-mesure.",
            },
        ],
    },
];

// Flatten all FAQs for Schema
const allFaqs = faqCategories.flatMap((cat) => cat.items);

export default function FAQPage() {
    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": allFaqs.map((item) => ({
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
                    <Breadcrumbs items={[{ label: "FAQ" }]} />
                    <div className="max-w-3xl mx-auto text-center mt-6">
                        <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-500/20 rounded-full mb-6">
                            <HelpCircle className="h-8 w-8 text-orange-400" />
                        </div>
                        <h1 className="text-3xl md:text-5xl font-bold mb-4">
                            Questions Fréquentes
                        </h1>
                        <p className="text-xl text-slate-300">
                            Toutes les réponses à vos questions sur les monte-escaliers
                        </p>
                    </div>
                </div>
            </section>

            {/* Quick Nav */}
            <section className="py-8 bg-white border-b border-slate-200 sticky top-16 z-40">
                <div className="container mx-auto px-4">
                    <div className="flex flex-wrap justify-center gap-2">
                        {faqCategories.map((cat) => (
                            <a
                                key={cat.title}
                                href={`#${cat.title.toLowerCase().replace(/ & /g, "-").replace(/ /g, "-")}`}
                                className="flex items-center gap-2 px-4 py-2 bg-slate-100 hover:bg-orange-100 rounded-full text-sm font-medium text-slate-700 hover:text-orange-700 transition-colors"
                            >
                                <span>{cat.icon}</span>
                                {cat.title}
                            </a>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ Categories */}
            <section className="py-12">
                <div className="container mx-auto px-4 max-w-4xl">
                    {faqCategories.map((category) => (
                        <div
                            key={category.title}
                            id={category.title.toLowerCase().replace(/ & /g, "-").replace(/ /g, "-")}
                            className="mb-12 scroll-mt-32"
                        >
                            <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                                <span className="text-3xl">{category.icon}</span>
                                {category.title}
                            </h2>
                            <div className="space-y-4">
                                {category.items.map((item, index) => (
                                    <details
                                        key={index}
                                        className="group bg-white border border-slate-200 rounded-xl overflow-hidden hover:shadow-md transition-shadow"
                                    >
                                        <summary className="flex items-center justify-between p-5 cursor-pointer list-none">
                                            <h3 className="font-medium text-slate-900 pr-4">{item.question}</h3>
                                            <ChevronDown className="h-5 w-5 text-slate-400 group-open:rotate-180 transition-transform shrink-0" />
                                        </summary>
                                        <div className="px-5 pb-5 pt-0">
                                            <p className="text-slate-600 mb-3">{item.answer}</p>
                                            {item.links && (
                                                <div className="flex flex-wrap gap-2 pt-2">
                                                    {item.links.map((link, i) => (
                                                        <Link
                                                            key={i}
                                                            href={link.href}
                                                            className="inline-flex items-center gap-1 text-sm text-orange-600 hover:text-orange-700 font-medium"
                                                        >
                                                            {link.text}
                                                            <ArrowRight className="h-3 w-3" />
                                                        </Link>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    </details>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 bg-gradient-to-br from-orange-500 to-amber-500 text-white">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold mb-4">Vous n'avez pas trouvé votre réponse ?</h2>
                    <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                        Demandez un devis gratuit et un conseiller répondra à toutes vos questions.
                    </p>
                    <Link href="/devis">
                        <Button size="lg" className="bg-white text-orange-600 hover:bg-slate-100 text-lg px-10 h-14 rounded-full shadow-lg">
                            Parler à un conseiller
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </Button>
                    </Link>
                </div>
            </section>

            {/* Related */}
            <section className="py-12 bg-white border-t border-slate-200">
                <div className="container mx-auto px-4 max-w-4xl">
                    <h2 className="text-xl font-bold text-slate-900 mb-6 text-center">Nos outils gratuits</h2>
                    <div className="grid sm:grid-cols-3 gap-4">
                        {[
                            { href: "/simulateur-prix", title: "Simulateur de Prix", icon: "💰" },
                            { href: "/calculateur-aides", title: "Calculateur d'Aides", icon: "🧮" },
                            { href: "/outils", title: "Tous les outils", icon: "🛠️" },
                        ].map((tool) => (
                            <Link
                                key={tool.href}
                                href={tool.href}
                                className="flex items-center gap-3 p-4 bg-slate-50 border border-slate-200 rounded-xl hover:border-orange-500 hover:shadow-md transition-all group"
                            >
                                <span className="text-2xl">{tool.icon}</span>
                                <span className="font-medium text-slate-700 group-hover:text-orange-700">{tool.title}</span>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
