import Link from "next/link";
import { Metadata } from "next";
import { BookOpen, ArrowRight, Search, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";

export const metadata: Metadata = {
    title: "Encyclopédie & Glossaire des Travaux 2026 | Comparateur Devis",
    description: "Le dictionnaire complet de la rénovation et de l'habitat : décryptage des termes techniques, normes, aides financières et matériaux pour vos travaux.",
    openGraph: {
        title: "Encyclopédie des Travaux : Glossaire Technique",
        description: "Définitions claires des mots techniques du bâtiment et des aides de l'État : RGE, ITE, COP, PAC, MaPrimeRénov', etc.",
    },
};

interface GlossaryTerm {
    term: string;
    definition: string;
    relatedLinks?: { text: string; href: string }[];
}

interface GlossaryCategory {
    title: string;
    icon: string;
    colorClass: string;
    items: GlossaryTerm[];
}

const encyclopediaCategories: GlossaryCategory[] = [
    {
        title: "Aides & Légal",
        icon: "🏛️",
        colorClass: "from-blue-500 to-indigo-600",
        items: [
            {
                term: "ANAH (Agence Nationale de l'Habitat)",
                definition: "Établissement public accordant des aides financières (comme MaPrimeRénov' ou MaPrimeAdapt') aux propriétaires pour la rénovation de leurs logements, ciblant en priorité l'amélioration énergétique et l'adaptation au vieillissement.",
                relatedLinks: [{ text: "Calculer mes aides", href: "/calculateur-aides" }]
            },
            {
                term: "CEE (Certificats d'Économies d'Énergie)",
                definition: "Dispositif mis en place par l'État obligeant les fournisseurs d'énergie (EDF, Total, etc.) à financer des travaux d'économies d'énergie chez les particuliers sous forme de 'primes Coup de pouce' ou en s'associant à MaPrimeRénov'.",
            },
            {
                term: "Constat de fin de travaux",
                definition: "Document signé conjointement par l'artisan et le client signifiant la fin du chantier et l'acceptation sans réserve des travaux. Il déclenche le paiement du solde et marque le point de départ de la garantie décennale.",
            },
            {
                term: "Garantie Décennale",
                definition: "Assurance obligatoire pour tout artisan du bâtiment. Elle couvre pendant 10 ans après la réception des travaux tous les dommages qui compromettent la solidité de l'ouvrage (ex: effondrement) ou le rendent impropre à sa destination (ex: grave fuite d'eau encastrée).",
            },
            {
                term: "MaPrimeAdapt'",
                definition: "Aide unique de l'État lancée en 2024 pour financer les travaux d'adaptation du logement liés à la perte d'autonomie (jusqu'à 70% pour rénover une salle de bain ou installer un monte-escalier).",
                relatedLinks: [{ text: "Calculer mon éligibilité", href: "/calculateur-aides" }]
            },
            {
                term: "MaPrimeRénov'",
                definition: "Principale aide de l'État pour la rénovation énergétique. Versée par l'ANAH, elle est conditionnée aux revenus du ménage et oblige l'intervention d'entreprises labellisées RGE. Elle se divise en 'Parcours par gestes' (ex: changement simple de chaudière) ou 'Parcours accompagné' (rénovation d'ampleur globale).",
            },
            {
                term: "Mon Accompagnateur Rénov' (MAR)",
                definition: "Tiers de confiance agréé par l'État, obligatoire pour percevoir l'aide MaPrimeRénov' dès lors que le montant des travaux de rénovation d'ampleur dépasse un certain seuil. Il effectue l'audit énergétique et monte le dossier de subvention avec le particulier.",
            },
            {
                term: "RGE (Reconnu Garant de l'Environnement)",
                definition: "Label attribué aux professionnels du bâtiment qualifiés pour réaliser des travaux de rénovation énergétique. Faire appel à une entreprise RGE est une condition obligatoire ('éco-conditionnalité') pour obtenir les aides de l'État.",
            },
            {
                term: "TVA à taux réduit (5,5% et 10%)",
                definition: "Avantage fiscal appliqué directement sur la facture de l'artisan. La TVA à 5,5% s'applique aux travaux de rénovation énergétique (PAC, Isolation). La TVA à 10% s'applique aux autres travaux d'amélioration, d'aménagement ou d'entretien (dans un logement achevé depuis plus de 2 ans).",
            }
        ]
    },
    {
        title: "Chauffage & Climatisation",
        icon: "🔥",
        colorClass: "from-red-500 to-orange-500",
        items: [
            {
                term: "Biomasse",
                definition: "Ensemble des matières organiques d'origine végétale (bois, granulés, pellets) utilisées comme combustible. Les chaudières ou poêles biomasse offrent un excellent rendement et sont éligibles aux plus hautes aides de l'État compte tenu de leur bilan carbone neutre.",
            },
            {
                term: "Chauffe-eau Thermodynamique (CET)",
                definition: "Ballon d'eau chaude intégrant une petite pompe à chaleur. Il récupère les calories de l'air ambiant ou extérieur pour chauffer l'eau sanitaire, divisant ainsi la facture de production d'eau chaude par 3 par rapport à un cumulus électrique classique.",
            },
            {
                term: "COP (Coefficient de Performance)",
                definition: "Indicateur de la performance énergétique d'une pompe à chaleur. Un COP de 4 signifie que l'appareil restitue 4 kWh de chaleur pour 1 kWh d'électricité consommé sur le réseau.",
            },
            {
                term: "Fluide frigorigène",
                definition: "Gaz liquide circulant dans le circuit fermé d'une pompe à chaleur ou d'une climatisation. Il possède la propriété unique de s'évaporer à basse température pour absorber les calories, puis de se condenser pour restituer la chaleur.",
            },
            {
                term: "Inverter (Technologie)",
                definition: "Système électronique qui régule en continu la vitesse du compresseur d'une pompe à chaleur ou climatisation selon les besoins, évitant ainsi les redémarrages brusques. Cela prolonge la durée de vie de l'appareil et réduit la consommation électrique d'environ 30%.",
            },
            {
                term: "PAC Air/Air (Climatisation réversible)",
                definition: "Pompe à chaleur aérothermique qui puise les calories dans l'air extérieur pour les souffler sous forme d'air chaud à l'intérieur l'hiver. L'été, le cycle s'inverse pour rafraîchir le logement.",
            },
            {
                term: "PAC Air/Eau",
                definition: "Pompe à chaleur aérothermique qui puise les calories dans l'air extérieur pour chauffer de l'eau. Cette eau chaude est ensuite injectée dans le réseau de chauffage central du domicile (radiateurs à eau, plancher chauffant).",
                relatedLinks: [{ text: "Guide PAC Air-Eau", href: "/guides/pompe-a-chaleur-prix-aides-installation" }]
            },
            {
                term: "Plancher chauffant basse température",
                definition: "Réseau de tubes intégrés dans la dalle du sol, dans lesquels circule une eau chauffée entre 25°C et 35°C. Il offre le meilleur confort thermique (chaleur douce réparatie) et s'associe idéalement avec une PAC Air/Eau pour un rendement (COP) optimal.",
            }
        ]
    },
    {
        title: "Isolation Thermique & Phonique",
        icon: "🌡️",
        colorClass: "from-amber-400 to-yellow-600",
        items: [
            {
                term: "Déphasage thermique",
                definition: "Capacité d'un isolant à ralentir le transfert de chaleur de l'extérieur vers l'intérieur. Un temps de déphasage élevé (ex: 12 heures pour la fibre de bois contre 4 heures pour la laine de verre) offre un excellent 'confort d'été' empêchant la maison de surchauffer pendant les jours de canicule.",
            },
            {
                term: "ITE (Isolation Thermique par l'Extérieur)",
                definition: "Technique de rénovation consistant à poser l'isolant et le revêtement de finition (enduit ou bardage) par-dessus la façade extérieure de la maison. C'est la méthode la plus efficace car elle supprime 100% des ponts thermiques, sans réduire la surface habitable.",
                relatedLinks: [{ text: "Guide complet ITE", href: "/guides/isolation-thermique-exterieur-ite" }]
            },
            {
                term: "ITI (Isolation Thermique par l'Intérieur)",
                definition: "Méthode traditionnelle française consistant à plaquer l'isolant (comme le duo Placoplatre + Laine de verre) sur les murs intérieurs du logement. Économique, mais elle réduit la surface loi Carrez de vos pièces.",
            },
            {
                term: "Ouate de cellulose",
                definition: "Matériau isolant biosourcé, fabriqué à partir de papier journal recyclé broyé et traité avec des sels de bore (ignifuge). Souvent insufflée dans les combles perdus, elle excelle tant en hiver qu'en confort d'été (fort déphasage).",
            },
            {
                term: "Pont thermique",
                definition: "Zone de l'enveloppe du bâtiment (généralement aux jonctions entre murs, planchers et balcons) où la barrière isolante est interrompue. La chaleur de la maison s'y échappe massivement en hiver. L'ITE est la meilleure solution pour régler les ponts thermiques.",
            },
            {
                term: "Résistance thermique (R)",
                definition: "Indicateur primordial de performance d'un isolant. Plus l'indice R est élevé, plus le matériau isole. Pour bénéficier de MaPrimeRénov' pour les murs façades, un coefficient 'R ≥ 3,7 m².K/W' est imposé par les normes.",
            },
            {
                term: "Sarking",
                definition: "Procédé d'isolation de la toiture par l'extérieur. L'isolant est posé directement sur les chevrons (la charpente), sous la couverture (les tuiles). Très onéreux mais préserve totalement les charpentes apparentes à l'intérieur et l'espace des combles aménagés.",
            }
        ]
    },
    {
        title: "Menuiserie & Fenêtres",
        icon: "🪟",
        colorClass: "from-sky-400 to-cyan-600",
        items: [
            {
                term: "Argon (Gaz)",
                definition: "Gaz inerte et invisible emprisonné entre les deux couches de verre d'un double-vitrage moderne. Plus isolant et lourd que l'air, il fige les échanges thermiques pour considérablement améliorer la capacité isolante de la fenêtre.",
            },
            {
                term: "Coefficient Uw",
                definition: "Indice mesurant l'isolation thermique globale d'une menuiserie ('w' pour window : vitrage + cadre). Plus le Uw est bas, meilleure est l'isolation. Un bon double vitrage PVC atteint un Uw autour de 1,2 W/(m².K).",
            },
            {
                term: "Dormant",
                definition: "C'est l'encadrement 'fixe' de la menuiserie ou de la porte, scellé dans le mur de la maison. Les ouvrant (les battants de la fenêtre) viennent s'y rabattre.",
            },
            {
                term: "Ouvrant",
                definition: "Partie mobile de la fenêtre ou de la porte (les vantaux) que l'on manipule. À l'inverse du dormant qui reste fixe dans le mur de la bâtisse.",
            },
            {
                term: "Pont thermique à Rupture (Rupture de pont thermique)",
                definition: "Système isolant obligatoire dans les menuiseries modernes en aluminium. L'aluminium étant très conducteur de chaud et de froid, un profilé en polyamide (plastique isolant) est inséré au cœur du dormant et de l'ouvrant pour bloquer les températures extérieures.",
                relatedLinks: [{ text: "Bien choisir sa menuiserie", href: "/guides/menuiserie-pvc-aluminium-bois" }]
            },
            {
                term: "Vitrage SP10 (Anti-effraction)",
                definition: "Double vitrage dont le verre extérieur est ultra-sécurisé par empilement de couches de verre et de films plastiques impossibles à briser facilement (retardateur d'effraction certifié très dissuasif face aux coups de masse).",
            }
        ]
    },
    {
        title: "Salle de Bain & Plomberie",
        icon: "🚿",
        colorClass: "from-teal-400 to-emerald-600",
        items: [
            {
                term: "Douche à l'italienne",
                definition: "Douche de plain-pied dont le sol, maçonné et étanche, s'intègre parfaitement dans la continuité du sol de la salle de bain (souvent via un siphon de sol ou une caniveau invisible). Implique d'encastrer l'évacuation profondément dans la dalle de béton.",
            },
            {
                term: "Multicouche (Tube)",
                definition: "Tuyau révolutionnaire composé d'une couche d'aluminium prise en sandwich entre deux couches de PER (Polyéthylène Réticulé). Il allie la souplesse du PER et la rigidité/longévité du cuivre. Incontournable en rénovation d'eau chaude/froide moderne.",
            },
            {
                term: "PMR (Personne à Mobilité Réduite)",
                definition: "Vocabulaire d'urbanisme. Une salle de bain PMR désigne une pièce restructurée respectant des cotes et gabarits très stricts pour permettre à un fauteuil roulant d'y manœuvrer (porte de 90cm, douche de plain-pied extra large, etc.).",
            },
            {
                term: "Receveur extra-plat",
                definition: "Alternative ultra-populaire à la douche à l'italienne : c'est un bac à douche préfabriqué d'à peine 3 ou 4 centimètres d'épaisseur (souvent en résine de synthèse anti-dérapante). Posé ou faiblement encastré, il offre le confort du plain-pied en évitant le cauchemar des fuites de maçonnerie.",
                relatedLinks: [{ text: "Guide budget SDB", href: "/guides/budget-refaire-salle-de-bain-2026" }]
            },
            {
                term: "SPEC (Système de Protection à l'Eau sous Carrelage)",
                definition: "Obligation normative (DTU). Couche d'étanchéité liquide applicable au rouleau sur les murs et angles intérieurs de la douche AVANT de poser la faïence ou le carrelage. Prévient les désastres liés aux infiltrations d'eau.",
            }
        ]
    },
    {
        title: "Électricité & Rénovation",
        icon: "⚡",
        colorClass: "from-purple-500 to-pink-600",
        items: [
            {
                term: "CONSUEL",
                definition: "Comité National pour la Sécurité des Usagers de l'Électricité. Sigle et nom de l'attestation visée par l'État obligatoire après toute rénovation lourde ou création de tableau électrique. Sans l'attestation CONSUEL, ENEDIS refuse d'ouvrir la ligne d'alimentation générale.",
            },
            {
                term: "DTI (Dispositif de Terminaison Intérieur)",
                definition: "Boîtier de test repère situé dans chaque tableau de communication moderne (coffret VDI). Il marque la frontière stricte entre le réseau public de l'opérateur de télécom et le réseau privatif de la maison.",
            },
            {
                term: "Interrupteur Différentiel 30mA",
                definition: "Chef d'orchestre de la sécurité humaine de la maison ! Placé en tête de ligne sur le tableau électrique, il détecte la moindre fuite de courant (≥30 milliampères) qui s'échapperait du circuit vers un appareil ou vers vous, et coupe immédiatement le jus (pour éviter l'électrocution).",
            },
            {
                term: "Maître d'Œuvre (MOE)",
                definition: "Professionnel, bureau d'études ou architecte missionné pour concevoir le projet, puis coordonner le planning et diriger les travaux des nombreux artisans. Il veille au respect du cahier des charges et valide la réception finale moyennant des honoraires (souvent un pourcentage du chantier).",
            },
            {
                term: "Norme NF C 15-100",
                definition: "La 'bible' des électriciens. C'est la norme française réglementant depuis des décennies la totalité des règles de sécurité obligatoires des installations électriques dans les constructions basses tension (volumes des salles de bains, nombre socles de prises obligatoires, etc.).",
                relatedLinks: [{ text: "Normes et Prix électriques", href: "/guides/renovation-electrique-normes-prix" }]
            },
            {
                term: "Prises GTL (Gaine Technique Logement)",
                definition: "Emplacement obligatoire dans chaque nouvelle construction, accueillant l'ensemble des équipements de contrôle électrique de l'appartement (tableau de répartition complet + coffret de communication box internet) pour centraliser sécurité et domotique.",
            }
        ]
    }
];

// Enrich with proper sorting inside categories
const encyclopediaStructured = encyclopediaCategories.map(category => ({
    ...category,
    items: [...category.items].sort((a, b) => a.term.localeCompare(b.term, "fr"))
}));

export default function GlossairePage() {
    return (
        <div className="min-h-screen bg-slate-50">
            {/* Hero */}
            <section className="bg-slate-950 text-white py-16 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/20 rounded-full blur-[100px] -mr-32 -mt-32 pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-80 h-80 bg-orange-600/10 rounded-full blur-[80px] -ml-20 -mb-20 pointer-events-none" />
                
                <div className="container mx-auto px-4 relative z-10">
                    <Breadcrumbs items={[{ label: "Encyclopédie Technique" }]} />
                    <div className="max-w-4xl mx-auto text-center mt-8">
                        <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 border border-white/20 backdrop-blur-sm rounded-full mb-6">
                            <BookOpen className="h-8 w-8 text-blue-400" />
                        </div>
                        <h1 className="text-3xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-300">
                            Encyclopédie de la Rénovation
                        </h1>
                        <p className="text-xl text-slate-400">
                            Aides financières de l'État, décryptage technique, composantes du bâti... Le lexique expert et définitif pour les particuliers.
                        </p>
                    </div>
                </div>
            </section>

            {/* Quick Category Nav */}
            <section className="py-6 bg-white border-b border-slate-200 shadow-sm">
                <div className="container mx-auto px-4">
                    <div className="flex flex-wrap justify-center gap-2">
                        {encyclopediaStructured.map((cat) => (
                            <a
                                key={cat.title}
                                href={`#${cat.title.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/ & /g, "-").replace(/ /g, "-")}`}
                                className="flex items-center gap-2 px-4 py-2 bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-lg text-sm font-semibold text-slate-700 transition-all shadow-sm"
                            >
                                <span className="text-lg">{cat.icon}</span>
                                <span className="hidden sm:inline">{cat.title}</span>
                            </a>
                        ))}
                    </div>
                </div>
            </section>

            {/* Terms Categories List */}
            <section className="py-16">
                <div className="container mx-auto px-4 max-w-4xl">
                    {encyclopediaStructured.map((category) => (
                        <div 
                            key={category.title} 
                            id={category.title.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/ & /g, "-").replace(/ /g, "-")} 
                            className="mb-16 scroll-mt-40"
                        >
                            <div className="flex items-center gap-4 mb-8">
                                <span className={`w-14 h-14 flex items-center justify-center bg-gradient-to-br ${category.colorClass} shadow-lg text-white rounded-2xl text-2xl font-bold`}>
                                    {category.icon}
                                </span>
                                <h2 className="text-3xl font-bold text-slate-900">{category.title}</h2>
                            </div>

                            <div className="grid gap-4">
                                {category.items.map((item) => (
                                    <div
                                        key={item.term}
                                        className="bg-white border border-slate-200 rounded-xl p-6 hover:shadow-lg transition-all hover:border-slate-300 group"
                                    >
                                        <div className="flex items-start gap-4">
                                            <div className="hidden sm:flex mt-1 w-8 h-8 rounded-full bg-slate-50 border border-slate-200 items-center justify-center text-slate-400 group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors shrink-0">
                                                <ChevronRight className="w-4 h-4" />
                                            </div>
                                            <div className="flex-1">
                                                <h3 className="font-bold text-xl text-slate-900 mb-3">{item.term}</h3>
                                                <p className="text-slate-600 leading-relaxed text-[16px] mb-4">{item.definition}</p>
                                                {item.relatedLinks && (
                                                    <div className="flex flex-wrap gap-3 pt-2">
                                                        {item.relatedLinks.map((link, i) => (
                                                            <Link
                                                                key={i}
                                                                href={link.href}
                                                                className="inline-flex items-center gap-1.5 text-sm bg-blue-50 hover:bg-blue-100 border border-blue-200 text-blue-700 py-1.5 px-3 rounded-lg font-semibold transition-all"
                                                            >
                                                                <BookOpen className="h-3.5 w-3.5" />
                                                                {link.text}
                                                            </Link>
                                                        ))}
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 bg-slate-950 relative overflow-hidden text-white">
                <div className="absolute top-0 -left-64 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] pointer-events-none" />
                <div className="container mx-auto px-4 text-center relative z-10">
                    <h2 className="text-3xl font-bold mb-4">Besoin de passer à l'action ?</h2>
                    <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
                        Le lexique technique n'a plus aucun secret pour vous. Obtenez sereinement un chiffrage de nos artisans RGE locaux.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/devis">
                            <Button size="lg" className="bg-orange-600 text-white hover:bg-orange-500 text-lg px-8 h-14 rounded-full shadow-[0_0_30px_rgba(234,88,12,0.3)] transition-all">
                                Demander des devis
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </Button>
                        </Link>
                        <Link href="/outils">
                            <Button size="lg" variant="outline" className="border-white text-white bg-transparent hover:bg-white/10 text-lg px-8 h-14 rounded-full">
                                Accéder aux Simulateurs
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Related */}
            <section className="py-12 bg-white border-t border-slate-200">
                <div className="container mx-auto px-4 max-w-4xl">
                    <h2 className="text-xl font-bold text-slate-900 mb-6 text-center">Ressources indispensables</h2>
                    <div className="grid sm:grid-cols-3 gap-4">
                        {[
                            { href: "/faq", title: "FAQ de la Rénovation", desc: "Questions et tarifs fréquents" },
                            { href: "/guides", title: "Guides Techniques", desc: "Articles RGE détaillés" },
                            { href: "/simulateur-prix", title: "Estimations Budgets", desc: "Coûts locaux moyens au m²" },
                        ].map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className="flex flex-col items-center justify-center p-6 bg-slate-50 border border-slate-200 rounded-xl hover:border-blue-500 hover:shadow-md transition-all text-center group"
                            >
                                <span className="font-bold text-lg text-slate-900 group-hover:text-blue-600 mb-1">{item.title}</span>
                                <span className="text-sm text-slate-500">{item.desc}</span>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
