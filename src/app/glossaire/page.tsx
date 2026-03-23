import Link from "next/link";
import { Metadata } from "next";
import { BookOpen, ArrowRight, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";

export const metadata: Metadata = {
    title: "Glossaire Monte-Escalier : Définitions et Termes Techniques",
    description: "Comprendre le vocabulaire du monte-escalier : rail, siège pivotant, MaPrimeAdapt', batteries... Définitions claires et accessibles.",
    openGraph: {
        title: "Glossaire Monte-Escalier : Termes Techniques",
        description: "Définitions claires du vocabulaire monte-escalier : rail, batteries, aides, installation.",
    },
};

interface GlossaryTerm {
    term: string;
    definition: string;
    relatedLinks?: { text: string; href: string }[];
}

const glossaryTerms: GlossaryTerm[] = [
    {
        term: "ANAH",
        definition: "Agence Nationale de l'Habitat. Organisme public qui gère MaPrimeAdapt' et finance les travaux d'adaptation des logements pour les personnes âgées ou handicapées.",
        relatedLinks: [{ text: "Calculer mes aides", href: "/calculateur-aides" }],
    },
    {
        term: "Batteries",
        definition: "Les monte-escaliers fonctionnent sur batteries rechargeables (généralement 2 x 12V). Elles permettent de continuer à utiliser l'appareil même en cas de coupure de courant. Durée de vie : 3 à 5 ans. Coût de remplacement : 200€ à 500€.",
        relatedLinks: [{ text: "Guide entretien", href: "/guides/entretien-monte-escalier" }],
    },
    {
        term: "Capteur d'obstacles",
        definition: "Dispositif de sécurité intégré au monte-escalier qui détecte automatiquement tout obstacle sur le trajet (objet, personne, animal) et stoppe immédiatement le siège pour éviter les accidents.",
    },
    {
        term: "Crédit d'impôt",
        definition: "Avantage fiscal de 25% du coût des équipements pour l'adaptation du logement au handicap ou à la perte d'autonomie. Plafond : 5 000€ pour une personne seule, 10 000€ pour un couple.",
        relatedLinks: [{ text: "Calculer mes aides", href: "/calculateur-aides" }],
    },
    {
        term: "Escalier droit",
        definition: "Escalier sans virage ni palier intermédiaire. Configuration la plus simple et la moins coûteuse pour l'installation d'un monte-escalier (2 500€ à 5 000€).",
        relatedLinks: [{ text: "Simuler le prix", href: "/simulateur-prix" }],
    },
    {
        term: "Escalier tournant",
        definition: "Escalier comportant un ou plusieurs virages, quarts de tour ou demi-tour. Nécessite un rail sur-mesure, donc plus coûteux (8 000€ à 15 000€).",
        relatedLinks: [{ text: "Simuler le prix", href: "/simulateur-prix" }],
    },
    {
        term: "Fin de course",
        definition: "Capteur situé en haut et en bas du rail qui détecte l'arrivée du siège et commande son arrêt automatique en douceur.",
    },
    {
        term: "Garantie",
        definition: "Couverture constructeur contre les défauts de fabrication. Standard : 2 ans. Peut être étendue à 3-5 ans selon les marques et les contrats d'entretien.",
        relatedLinks: [{ text: "Comparer les marques", href: "/marques" }],
    },
    {
        term: "Handicare",
        definition: "Fabricant néerlandais de monte-escaliers depuis 1886. Réputé pour son excellent rapport qualité/prix et sa gamme Freecurve compatible fauteuil roulant.",
        relatedLinks: [{ text: "Fiche Handicare", href: "/marques/handicare" }],
    },
    {
        term: "HomeGlide",
        definition: "Nom commercial du monte-escalier droit de Thyssenkrupp. Caractérisé par le rail le plus fin du marché (93mm), idéal pour les escaliers étroits.",
        relatedLinks: [{ text: "Fiche Thyssenkrupp", href: "/marques/thyssenkrupp" }],
    },
    {
        term: "MaPrimeAdapt'",
        definition: "Aide financière de l'ANAH pour adapter son logement au vieillissement ou au handicap. Peut couvrir 50% à 70% du coût selon les revenus. Plafond : 22 000€ de travaux.",
        relatedLinks: [
            { text: "Calculer mon éligibilité", href: "/calculateur-aides" },
            { text: "Guide complet", href: "/guides/remboursement-monte-escalier-securite-sociale" },
        ],
    },
    {
        term: "Monte-escalier",
        definition: "Équipement de mobilité composé d'un siège motorisé circulant sur un rail fixé le long d'un escalier. Permet aux personnes à mobilité réduite de monter et descendre en toute sécurité.",
    },
    {
        term: "Monte-escalier extérieur",
        definition: "Version spécialement conçue pour résister aux intempéries (pluie, UV, gel). Équipé d'une housse de protection et de composants anticorrosion. Prix : 5 000€ à 12 000€.",
        relatedLinks: [{ text: "Guide extérieur", href: "/guides/monte-escalier-exterieur" }],
    },
    {
        term: "Plateforme élévatrice",
        definition: "Appareil de mobilité différent du monte-escalier : c'est un élévateur vertical (comme un mini-ascenseur) compatible avec les fauteuils roulants. Prix : 8 000€ à 25 000€.",
        relatedLinks: [{ text: "Comparatif", href: "/guides/monte-escalier-vs-plateforme-elevatrice" }],
    },
    {
        term: "Pose (ou installation)",
        definition: "Mise en place du monte-escalier par un technicien qualifié. Durée : 3-4 heures pour un escalier droit, 1 journée pour un tournant. Généralement incluse dans le prix total.",
    },
    {
        term: "Rail (ou glissière)",
        definition: "Élément métallique fixé sur les marches de l'escalier le long duquel se déplace le siège. Le rail droit est standard, le rail tournant est fabriqué sur-mesure selon la configuration exacte de l'escalier.",
    },
    {
        term: "Reconditionné",
        definition: "Monte-escalier d'occasion révisé et remis en état par un professionnel. Permet une économie de 30 à 50% mais uniquement viable pour les modèles droits.",
        relatedLinks: [{ text: "Guide occasion", href: "/guides/monte-escalier-occasion" }],
    },
    {
        term: "Repose-pieds",
        definition: "Plateforme où l'utilisateur pose ses pieds pendant le trajet. Se replie automatiquement ou manuellement pour libérer le passage quand le siège n'est pas utilisé.",
    },
    {
        term: "SAV (Service Après-Vente)",
        definition: "Service d'assistance et de dépannage proposé par l'installateur ou le fabricant. Temps d'intervention variable selon les marques : 24h à 72h. Stannah a le réseau le plus dense en France.",
        relatedLinks: [{ text: "Comparer les SAV", href: "/marques" }],
    },
    {
        term: "Siège pivotant",
        definition: "Fonction permettant de tourner le siège à 90° en haut de l'escalier pour que l'utilisateur puisse se lever face au palier en toute sécurité, sans risquer de basculer.",
    },
    {
        term: "Stannah",
        definition: "Fabricant britannique de monte-escaliers depuis 1867. Leader mondial avec plus de 750 000 installations. Réputé pour la qualité et le SAV mais prix parmi les plus élevés.",
        relatedLinks: [{ text: "Fiche Stannah", href: "/marques/stannah" }],
    },
    {
        term: "Sur-mesure",
        definition: "Se dit d'un rail tournant fabriqué spécifiquement selon les dimensions et angles exacts de votre escalier. Nécessite une prise de mesures précise (scanner 3D chez certaines marques).",
    },
    {
        term: "Télécommande",
        definition: "Boîtier sans fil permettant d'appeler le siège à distance (en haut ou en bas de l'escalier). Généralement fourni par paire avec le monte-escalier.",
    },
    {
        term: "Thyssenkrupp",
        definition: "Groupe industriel allemand proposant des monte-escaliers via sa division Home Solutions. Connu pour son innovation technique (rail HomeGlide ultra-fin de 93mm).",
        relatedLinks: [{ text: "Fiche Thyssenkrupp", href: "/marques/thyssenkrupp" }],
    },
    {
        term: "TVA réduite",
        definition: "Les monte-escaliers bénéficient d'une TVA à 5,5% (au lieu de 20%) pour les logements de plus de 2 ans. Cette réduction s'applique automatiquement sur le devis de l'installateur.",
        relatedLinks: [{ text: "Calculer mes économies", href: "/calculateur-aides" }],
    },
];

// Sort alphabetically
const sortedTerms = [...glossaryTerms].sort((a, b) => a.term.localeCompare(b.term, "fr"));

// Group by first letter
const groupedTerms = sortedTerms.reduce((acc, term) => {
    const letter = term.term[0].toUpperCase();
    if (!acc[letter]) acc[letter] = [];
    acc[letter].push(term);
    return acc;
}, {} as Record<string, GlossaryTerm[]>);

const letters = Object.keys(groupedTerms).sort();

export default function GlossairePage() {
    return (
        <div className="min-h-screen bg-slate-50">
            {/* Hero */}
            <section className="bg-slate-900 text-white py-12">
                <div className="container mx-auto px-4">
                    <Breadcrumbs items={[{ label: "Glossaire" }]} />
                    <div className="max-w-3xl mx-auto text-center mt-6">
                        <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-500/20 rounded-full mb-6">
                            <BookOpen className="h-8 w-8 text-orange-400" />
                        </div>
                        <h1 className="text-3xl md:text-5xl font-bold mb-4">
                            Glossaire Technique
                        </h1>
                        <p className="text-xl text-slate-300">
                            {glossaryTerms.length} définitions pour tout comprendre sur les monte-escaliers
                        </p>
                    </div>
                </div>
            </section>

            {/* Alphabet Nav */}
            <section className="py-4 bg-white border-b border-slate-200 sticky top-16 z-40">
                <div className="container mx-auto px-4">
                    <div className="flex flex-wrap justify-center gap-1">
                        {letters.map((letter) => (
                            <a
                                key={letter}
                                href={`#lettre-${letter}`}
                                className="w-8 h-8 flex items-center justify-center bg-slate-100 hover:bg-orange-500 hover:text-white rounded font-bold text-sm text-slate-700 transition-colors"
                            >
                                {letter}
                            </a>
                        ))}
                    </div>
                </div>
            </section>

            {/* Terms */}
            <section className="py-12">
                <div className="container mx-auto px-4 max-w-4xl">
                    {letters.map((letter) => (
                        <div key={letter} id={`lettre-${letter}`} className="mb-12 scroll-mt-32">
                            <div className="flex items-center gap-4 mb-6">
                                <span className="w-12 h-12 flex items-center justify-center bg-orange-500 text-white rounded-xl text-2xl font-bold">
                                    {letter}
                                </span>
                                <div className="h-px flex-1 bg-slate-200" />
                            </div>

                            <div className="space-y-4">
                                {groupedTerms[letter].map((item) => (
                                    <div
                                        key={item.term}
                                        className="bg-white border border-slate-200 rounded-xl p-5 hover:shadow-md transition-shadow"
                                    >
                                        <h3 className="font-bold text-lg text-slate-900 mb-2">{item.term}</h3>
                                        <p className="text-slate-600 mb-3">{item.definition}</p>
                                        {item.relatedLinks && (
                                            <div className="flex flex-wrap gap-2">
                                                {item.relatedLinks.map((link, i) => (
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
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 bg-gradient-to-br from-slate-800 to-slate-900 text-white">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold mb-4">Prêt à passer à l'action ?</h2>
                    <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
                        Maintenant que vous maîtrisez le vocabulaire, obtenez des devis personnalisés.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/devis">
                            <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white text-lg px-8 h-14 rounded-full shadow-lg">
                                Demander des devis
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </Button>
                        </Link>
                        <Link href="/outils">
                            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 text-lg px-8 h-14 rounded-full">
                                Utiliser nos outils gratuits
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Related */}
            <section className="py-12 bg-white border-t border-slate-200">
                <div className="container mx-auto px-4 max-w-4xl">
                    <h2 className="text-xl font-bold text-slate-900 mb-6 text-center">Ressources complémentaires</h2>
                    <div className="grid sm:grid-cols-3 gap-4">
                        {[
                            { href: "/faq", title: "FAQ Complète", desc: "Questions fréquentes" },
                            { href: "/guides", title: "Guides Expert", desc: "Articles détaillés" },
                            { href: "/marques", title: "Marques", desc: "Stannah, Thyssenkrupp..." },
                        ].map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className="flex flex-col p-4 bg-slate-50 border border-slate-200 rounded-xl hover:border-orange-500 hover:shadow-md transition-all text-center"
                            >
                                <span className="font-bold text-slate-900">{item.title}</span>
                                <span className="text-sm text-slate-500">{item.desc}</span>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
