import Link from "next/link";
import { Metadata } from "next";
import { HelpCircle, ArrowRight, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";

export const metadata: Metadata = {
    title: "FAQ Travaux & Rénovation : Questions Fréquentes 2026 | Comparateur Devis",
    description: "Toutes les réponses à vos questions sur vos travaux de rénovation, chauffage, isolation, salle de bain, et sur le fonctionnement de notre comparateur de devis.",
    openGraph: {
        title: "FAQ Travaux & Rénovation : Questions Fréquentes",
        description: "Devis, aides de l'État, choix de l'artisan, chauffage, isolation : on répond à toutes vos questions.",
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
        title: "Le Comparateur",
        icon: "💡",
        items: [
            {
                question: "Le service de comparaison de devis est-il vraiment gratuit ?",
                answer: "Oui, notre service est 100% gratuit et sans aucun engagement pour les particuliers. Nous sommes rémunérés de manière transparente par nos artisans partenaires lorsqu'ils décident d'étudier et de répondre à votre demande.",
            },
            {
                question: "Comment sont sélectionnés les artisans partenaires ?",
                answer: "Tous nos professionnels sont rigoureusement vérifiés avant de rejoindre notre réseau. Nous contrôlons systématiquement leur numéro de SIRET, leurs assurances responsabilité civile (notamment la Garantie Décennale) ainsi que leurs certifications (comme le label RGE indispensable pour la rénovation énergétique).",
            },
            {
                question: "Dans combien de temps vais-je recevoir mes devis ?",
                answer: "En règle générale, vous êtes recontacté par nos artisans locaux sous 24 à 48 heures ouvrées après la validation de votre demande en ligne. Ils conviendront avec vous d'une visite technique sur place pour un chiffrage précis.",
            },
            {
                question: "Suis-je obligé de signer avec l'un de vos artisans ?",
                answer: "Absolument pas. Vous recevez jusqu'à 3 devis pour comparer, et vous restez totalement libre d'accepter l'une des offres ou de les refuser toutes.",
            },
        ],
    },
    {
        title: "Chauffage & Climatisation",
        icon: "🔥",
        items: [
            {
                question: "Quelles sont les aides pour l'installation d'une pompe à chaleur en 2026 ?",
                answer: "L'installation d'une PAC (Air-Eau ou Géothermie) ouvre droit au dispositif MaPrimeRénov' (qui peut atteindre plusieurs milliers d'euros), à la prime CEE (Coup de pouce) calculée par les fournisseurs d'énergie, ainsi qu'à la TVA réduite à 5,5%. Attention : l'artisan choisi DOIT être labellisé RGE QualiPAC.",
                links: [
                    { text: "Guide PAC & Aides", href: "/guides/pompe-a-chaleur-prix-aides-installation" }
                ]
            },
            {
                question: "Ma maison est-elle compatible avec une chaudière à granulés ?",
                answer: "Oui, si vous disposez d'un circuit de chauffage central préexistant (radiateurs à eau ou plancher chauffant) et d'un espace au sec suffisamment grand pour installer le silo à granulés. C'est un système de biomasse très soutenu par les aides de l'État.",
            },
            {
                question: "Faut-il entretenir sa climatisation réversible (PAC Air-Air) ?",
                answer: "Oui, le nettoyage des filtres doit être fait régulièrement par vous-même. Mais légalement, l'entretien du circuit frigorifique par un frigoriste certifié est obligatoire tous les deux ans pour s'assurer qu'il n'y a aucune fuite toxique.",
            },
        ]
    },
    {
        title: "Isolation Thermique",
        icon: "🌡️",
        items: [
            {
                question: "Quelle différence entre l'isolation par l'intérieur (ITI) et par l'extérieur (ITE) ?",
                answer: "L'ITI (Isolation par l'Intérieur) est globalement moins chère mais réduit inévitablement votre surface habitable et laisse parfois subsister des ponts thermiques. L'ITE est plus onéreuse (car elle nécessite d'installer un échafaudage puis un ravalement de façade), mais elle enveloppe la maison tel un manteau, stoppant tous les ponts thermiques, sans impacter votre espace au sol intérieur.",
                links: [
                    { text: "Guide Isolation ITE", href: "/guides/isolation-thermique-exterieur-ite" }
                ]
            },
            {
                question: "Quel est le meilleur isolant pour des combles perdus ?",
                answer: "La technique du soufflage en utilisant de la laine de verre ou de roche reste le rapport qualité-prix numéro 1 en France. Pour des projets plus écologiques avec un meilleur confort estival (pour éviter les coups de chaud l'été), la ouate de cellulose projetée ou la fibre de bois sont d'excellentes alternatives très performantes.",
            },
        ]
    },
    {
        title: "Menuiserie & Fenêtres",
        icon: "🪟",
        items: [
            {
                question: "Pour remplacer mes fenêtres : PVC, Aluminium ou Bois ?",
                answer: "Le PVC est invaincu sur le rapport isolation thermique/prix. L'aluminium, haut de gamme et résistant, est privilégié pour moderniser et équiper de grandes baies vitrées coulissantes. Le bois apporte du style et de superbes performances, mais réclame des lasures d'entretien régulières.",
                links: [
                    { text: "Comparatif des 3 matériaux", href: "/guides/menuiserie-pvc-aluminium-bois" }
                ]
            },
            {
                question: "Le double vitrage donne-t-il droit à des subventions ?",
                answer: "Oui, mais sous des conditions précises. Principalement lorsque vous remplacez de très vieilles fenêtres en survitrage fragile ou 'simple vitrage' directement par des menuiseries double ou triple vitrage très isolantes. C'est éligible au parcours par gestes de MaPrimeRénov'.",
            },
        ]
    },
    {
        title: "Salle de Bain & Plomberie",
        icon: "🚿",
        items: [
            {
                question: "Quel budget prévoir pour refaire sa salle de bain à neuf ?",
                answer: "Le tarif englobant dépose de l'ancien, reprise plomberie, électricité aux normes pièce humide (volumes respectés), étanchéité de la douche italienne, carrelage fourni et posé, coûte en moyenne nationale entre 800€ et 1 500€ du m². On estime le projet complet souvent entre 5 000€ et 10 000€.",
                links: [
                    { text: "Guide détaillé des budgets SDB", href: "/guides/budget-refaire-salle-de-bain-2026" }
                ]
            },
            {
                question: "Existe-t-il des subventions pour transformer sa salle de bain (séniors) ?",
                answer: "Oui absolue. L'aide d'État 'MaPrimeAdapt' peut aujourd'hui prendre en charge de 50% à 70% de la facture HT des travaux engagés pour les personnes en perte d'autonomie ou handicapées (pose de receveur extra-plat PMR, siège rabattable, barres de préhension ergonomiques).",
            },
        ]
    },
    {
        title: "Rénovation Générale & Électricité",
        icon: "⚡",
        items: [
            {
                question: "Qu'est-ce qu'une vraie mise aux normes électriques (NF C 15-100) ?",
                answer: "Le label sécuritaire et normatif NF C 15-100 encadre toutes les installations et rénovations en France : il oblige absolument l'artisan à poser un tableau à disjoncteurs modernes incluant des 'différentiels 30mA' de têtes, d'emmener un câble de masse à la terre sur chaque prise du foyer et de créer des lignes spécialisées en cuisine et de calibrer parfaitement la section de fil utilisé selon la puissance de raccord.",
                links: [
                    { text: "Prix rénovation électrique totale", href: "/guides/renovation-electrique-normes-prix" }
                ]
            },
            {
                question: "Doit-on quitter son domicile pendant une rénovation globale ?",
                answer: "Tout dépend de la nature profonde du chantier. L'installation d'une cloison sèche (placoplatre) ou le changement de fenêtres vous autorise à rester. Mais lors d'une 'Rénovation de la moelle' globale (Destruction des sols, changement complet de l'assainissement ou des tuiles d'une toiture à découvert et électricité apparente) il est largement déconseillé d'habiter dans la maison pendant ces grosses manœuvres des artisans pour des raisons de confort (coupures d'eau/courant intempestives, fortes poussières et bruit infernal à midi).",
                links: [
                    { text: "Guide : Bien choisir son artisan", href: "/guides/comment-choisir-artisan-renovation-globale" }
                ]
            },
        ]
    }
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
            <section className="bg-slate-950 text-white py-16 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-orange-600/20 rounded-full blur-[100px] -mr-32 -mt-32 pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-600/10 rounded-full blur-[80px] -ml-20 -mb-20 pointer-events-none" />
                
                <div className="container mx-auto px-4 relative z-10">
                    <Breadcrumbs items={[{ label: "FAQ" }]} />
                    <div className="max-w-3xl mx-auto text-center mt-8">
                        <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 border border-white/20 backdrop-blur-sm rounded-full mb-6">
                            <HelpCircle className="h-8 w-8 text-orange-400" />
                        </div>
                        <h1 className="text-3xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-300">
                            Questions Fréquentes
                        </h1>
                        <p className="text-xl text-slate-400">
                            Devis, artisans, chauffage, isolation... Trouvez rapidement les réponses à vos interrogations.
                        </p>
                    </div>
                </div>
            </section>

            {/* Quick Nav */}
            <section className="py-8 bg-white border-b border-slate-200 sticky top-16 z-40 shadow-sm">
                <div className="container mx-auto px-4">
                    <div className="flex flex-wrap justify-center gap-2">
                        {faqCategories.map((cat) => (
                            <a
                                key={cat.title}
                                href={`#${cat.title.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/ & /g, "-").replace(/ /g, "-")}`}
                                className="flex items-center gap-2 px-4 py-2 bg-slate-100 hover:bg-orange-100 border border-slate-200 hover:border-orange-300 rounded-full text-sm font-medium text-slate-700 hover:text-orange-700 transition-all shadow-sm"
                            >
                                <span>{cat.icon}</span>
                                {cat.title}
                            </a>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ Categories */}
            <section className="py-16">
                <div className="container mx-auto px-4 max-w-4xl">
                    {faqCategories.map((category) => (
                        <div
                            key={category.title}
                            id={category.title.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/ & /g, "-").replace(/ /g, "-")}
                            className="mb-14 scroll-mt-36"
                        >
                            <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                                <span className="text-3xl bg-slate-100 p-2 rounded-lg border border-slate-200 shadow-sm">{category.icon}</span>
                                {category.title}
                            </h2>
                            <div className="space-y-4">
                                {category.items.map((item, index) => (
                                    <details
                                        key={index}
                                        className="group bg-white border border-slate-200 rounded-xl overflow-hidden hover:border-slate-300 hover:shadow-md transition-all"
                                    >
                                        <summary className="flex items-center justify-between p-6 cursor-pointer list-none bg-slate-50/50 group-hover:bg-slate-50">
                                            <h3 className="font-semibold text-slate-900 pr-5 text-lg leading-snug">{item.question}</h3>
                                            <div className="bg-white p-1 rounded-full border border-slate-200 shadow-sm group-hover:border-slate-300">
                                                <ChevronDown className="h-5 w-5 text-slate-500 group-open:rotate-180 transition-transform shrink-0" />
                                            </div>
                                        </summary>
                                        <div className="px-6 pb-6 pt-2 bg-white border-t border-slate-100">
                                            <p className="text-slate-600 leading-relaxed text-[16px] mb-4">{item.answer}</p>
                                            {item.links && (
                                                <div className="flex flex-wrap gap-3 pt-2">
                                                    {item.links.map((link, i) => (
                                                        <Link
                                                            key={i}
                                                            href={link.href}
                                                            className="inline-flex items-center gap-1 text-sm bg-orange-50 hover:bg-orange-100 border border-orange-200 text-orange-700 py-1.5 px-3 rounded-md font-medium transition-colors"
                                                        >
                                                            {link.text}
                                                            <ArrowRight className="h-3.5 w-3.5" />
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
            <section className="py-20 bg-slate-950 relative overflow-hidden text-white">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-600/20 rounded-full blur-[120px] pointer-events-none" />
                <div className="container mx-auto px-4 text-center relative z-10">
                    <h2 className="text-3xl font-bold mb-4">Vous n'avez pas trouvé votre réponse ?</h2>
                    <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
                        Demandez vos devis gratuitement et un artisan expérimenté répondra à vos spécificités de chantier.
                    </p>
                    <Link href="/devis">
                        <Button size="lg" className="bg-orange-600 text-white hover:bg-orange-500 text-lg px-10 h-14 rounded-full shadow-[0_0_30px_rgba(234,88,12,0.3)] transition-all">
                            Démarrer mon projet
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </Button>
                    </Link>
                </div>
            </section>

            {/* Related Tools */}
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
