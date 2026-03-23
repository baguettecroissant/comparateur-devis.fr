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
        title: "Le Comparateur & Les Devis",
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
            {
                question: "Mes données personnelles sont-elles protégées ?",
                answer: "Oui, la sécurité de vos données est notre priorité. Vos informations personnelles ne sont transmises qu'à un maximum de 3 artisans qualifiés de votre région, uniquement dans le but de répondre à votre demande de devis. Elles ne sont pas revendues à des tiers pour du démarchage publicitaire.",
            },
            {
                question: "Comment bien comparer plusieurs devis d'artisans ?",
                answer: "Pour bien comparer, vérifiez que chaque professionnel a chiffré exactement les mêmes prestations (fournitures identiques, temps de main-d'œuvre). Assurez-vous aussi que le numéro SIRET, les dates de validité du devis et l'assurance décennale figurent bien sur le document.",
            },
            {
                question: "Puis-je annuler ma demande de devis en cours ?",
                answer: "Tant que vous n'avez pas signé et renvoyé le devis d'un artisan avec la mention 'Bon pour accord', vous n'avez aucun engagement. Si l'artisan vous contacte, il suffit de lui préciser que votre projet est annulé ou reporté.",
            }
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
                question: "Quelle puissance choisir pour ma pompe à chaleur ?",
                answer: "La puissance s'évalue en kilowatts (kW) après un bilan thermique strict de votre logement. Il dépend de la surface à chauffer, de la qualité de votre isolation, de la hauteur sous plafond et de votre zone climatique. Sous-dimensionnée, elle peinera l'hiver. Sur-dimensionnée, elle s'usera prématurément.",
            },
            {
                question: "Ma maison est-elle compatible avec une chaudière à granulés ?",
                answer: "Oui, si vous disposez d'un circuit de chauffage central préexistant (radiateurs à eau ou plancher chauffant) et d'un espace au sec suffisamment grand pour installer le silo à granulés. C'est un système de biomasse très soutenu par les aides de l'État.",
            },
            {
                question: "Le plancher chauffant est-il compatible avec une pompe à chaleur ?",
                answer: "C'est même le couplage idéal ! Le plancher chauffant fonctionnant à basse température (inférieure à 35°C), il optimise drastiquement le rendement (COP) de la pompe à chaleur air-eau ou géothermique.",
            },
            {
                question: "Faut-il entretenir sa climatisation réversible (PAC Air-Air) ?",
                answer: "Oui, le nettoyage des filtres doit être fait régulièrement par vous-même. Mais légalement, l'entretien du circuit frigorifique par un frigoriste certifié (attestation de manipulation des fluides) est obligatoire tous les deux ans pour s'assurer qu'il n'y a aucune fuite toxique.",
            },
            {
                question: "Quelle est la durée de vie moyenne d'une pompe à chaleur ?",
                answer: "Avec un entretien annuel rigoureux (vérification du compresseur, gaz frigorifique), une pompe à chaleur moderne de bonne marque (Daikin, Mitsubishi, Atlantic) a une durée de vie comprise entre 15 et 20 ans.",
            }
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
            {
                question: "Faut-il isoler la toiture par l'intérieur ou par l'extérieur (Sarking) ?",
                answer: "L'isolation par l'intérieur sous rampants est idéale lors de l'aménagement des combles. L'isolation par l'extérieur (technique du Sarking) est fortement recommandée si vous devez en profiter pour refaire entièrement la couverture du toit (tuiles, ardoises), préservant ainsi le volume et les poutres apparentes à l'intérieur.",
            },
            {
                question: "L'isolation phonique (bruit) est-elle incluse dans les travaux thermiques ?",
                answer: "Oui et non. Certains isolants thermiques comme la laine de roche, la ouate de cellulose ou la fibre de bois ont d'excellentes propriétés acoustiques naturelles. Les isolants rigides comme le polyuréthane stoppent le froid mais résonnent face au bruit.",
            },
            {
                question: "Peut-on bénéficier d'aides pour l'isolation d'un sous-sol ou vide sanitaire ?",
                answer: "Oui, l'isolation des planchers bas reste éligible à la prime CEE (Certificats d'Économie d'Énergie) selon certains barèmes conditionnels. C'est l'un des gestes prioritaires pour couper court aux sensations de 'froid aux pieds' en hiver.",
            }
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
            {
                question: "Qu'est-ce que le coefficient Uw pour l'isolation des fenêtres ?",
                answer: "C'est l'indicateur universel de la performance de déperdition thermique totale d'une fenêtre (vitre + cadre). Plus le chiffre Uw est bas, plus la fenêtre est isolante. Pour percevoir des aides, les fenêtres posées doivent généralement avoir un coefficient Uw ≤ 1,3 W/m².K.",
            },
            {
                question: "Faut-il des autorisations préalables pour changer mes fenêtres ?",
                answer: "Si vous optez pour le même visuel et la même couleur, aucune autorisation de la mairie n'est requise. Si vous changez le type d'ouverture (ex: passage à des volets roulants, changement de couleur des menuiseries ou de matériau), vous devez impérativement déposer une Déclaration Préalable de Travaux (DP).",
            },
            {
                question: "C'est quoi un vitrage anti-effraction SP10 ?",
                answer: "C'est un double ou triple vitrage dont l'une des vitres est constituée d'un feuilletage épais (deux plaques de verre collées par plusieurs films adhésifs invisibles super-résistants). Il ralentit considérablement l'intrusion (plusieurs minutes de coups de marteau requis sans éclater) et met en fuite les cambrioleurs.",
            }
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
                answer: "Oui, et c'est majeur. L'aide d'État 'MaPrimeAdapt' peut aujourd'hui prendre en charge de 50% à 70% de la facture HT des travaux engagés pour les personnes en perte d'autonomie ou handicapées (pose de receveur extra-plat PMR, siège rabattable, barres de préhension ergonomiques).",
            },
            {
                question: "Combien de temps dure la rénovation complète d'une petite salle de bain ?",
                answer: "En général, si c'est géré par un artisan global ou une entreprise 'tous corps d'états', un chantier complet (démolition, réseaux, carrelage, finitions) prend entre une et deux semaines complètes, notamment à cause des temps de séchage obligatoires des chapes, des étanchéités (SPEC) et joints.",
            },
            {
                question: "Faut-il une cabine, un bac 'extra-plat' ou une 'vraie' italienne ?",
                answer: "Les receveurs extra-plats modernes (résine minérale de 3cm d'épaisseur) offrent les mêmes atouts esthétiques qu'une vraie douche italienne de plain-pied, tout en éliminant 90% des risques dramatiques de fuites encastrées dans la dalle. Ils sont idéaux pour les rénovations.",
            },
            {
                question: "Sénior : suis-je obligé d'installer une douche ?",
                answer: "Si vous souhaitez conserver les aides (MaPrimeAdapt), la baignoire avec porte ou baignoire sabot permet aux séniors de continuer à prendre des bains tout en sécurisant grandement l'enjambement et les transferts d'assise.",
            }
        ]
    },
    {
        title: "Rénovation Générale & Électricité",
        icon: "⚡",
        items: [
            {
                question: "Qu'est-ce qu'une vraie mise aux normes électriques (NF C 15-100) ?",
                answer: "Le label sécuritaire et normatif NF C 15-100 encadre toutes les installations et rénovations en France : il oblige absolument l'artisan à poser un tableau à disjoncteurs modernes incluant des 'différentiels 30mA' de protection humaine, de raccorder chaque prise de la maison à la prise de terre du jardin, et de créer des lignes spécialisées protégées pour le gros électroménager.",
                links: [
                    { text: "Prix rénovation électrique totale", href: "/guides/renovation-electrique-normes-prix" }
                ]
            },
            {
                question: "Qu'est-ce qu'une attestation Consuel et quand est-elle obligatoire ?",
                answer: "Le certificat de l'organisme rattaché CONSUEL est le visa de conformité final de l'État qui atteste que les électriciens ont respecté les normes. Il est rendu légalement obligatoire en cas de création de maison, ou de rénovation impliquant la mise hors tension intégrale d'un compteur ENEDIS pour rétablissement du courant.",
            },
            {
                question: "Faut-il passer par un architecte / maître d'œuvre pour mon chantier ?",
                answer: "Pour les rénovations ne modifiant pas les volumes et en dessous de 150m², une entreprise de contractants généraux suffit amplement. L'architecte est obligatoire dès que vous procédez à une extension modifiant la façade et dépassant 150m² de surface de plancher totale habitable.",
                links: [
                    { text: "Guide : Bien choisir son artisan", href: "/guides/comment-choisir-artisan-renovation-globale" }
                ]
            },
            {
                question: "Doit-on quitter son domicile pendant une rénovation globale ?",
                answer: "Tout dépend de l'étendue des travaux. L'aménagement de combles ou du changement de menuiseries vous autorise à rester. Mais lors d'une rénovation de fond en comble (casses des sols, révision totale de la décharge plomberie avec évacuation à ciel ouvert, bruits constants des perceuses électriques à 8h) il est vivement conseillé d'habiter ailleurs pour alléger votre moral et libérer la voie aux entreprises.",
            },
            {
                question: "Peut-on faire réaliser un audit énergétique réglementaire avant de faire des travaux ?",
                answer: "Oui, c'est même obligatoire lors de la vente d'une maison d'étiquette énergie F ou G. Pour des travaux pour soi, l'audit est la première étape du parcours accompagné MaPrimeRénov' pour obtenir le meilleur taux d'aides. Mon Accompagnateur Rénov' se chargera ensuite du planning des priorités (Isolation d'abord, Chauffage ensuite).",
            }
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
            <section className="py-8 bg-white border-b border-slate-200 shadow-sm">
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
