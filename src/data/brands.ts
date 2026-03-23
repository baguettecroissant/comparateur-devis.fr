export interface Brand {
    slug: string;
    name: string;
    logo?: string;
    country: string;
    countryFlag: string;
    founded: string;
    headquarters: string;
    tagline: string;
    description: string;
    seoTitle: string;
    seoDescription: string;
    models: {
        name: string;
        type: "droit" | "tournant" | "exterieur";
        priceRange: string;
        features: string[];
    }[];
    pros: string[];
    cons: string[];
    warranty: string;
    priceRange: {
        droit: string;
        tournant: string;
    };
    savRating: number;
    qualityRating: number;
    priceRating: number;
    faq: { question: string; answer: string }[];
}

export const BRANDS: Brand[] = [
    {
        slug: "stannah",
        name: "Stannah",
        country: "Royaume-Uni",
        countryFlag: "🇬🇧",
        founded: "1867",
        headquarters: "Andover, Hampshire",
        tagline: "Le leader historique des monte-escaliers premium",
        description: `Stannah est le fabricant de monte-escaliers le plus reconnu au monde. Fondée en 1867, cette entreprise britannique familiale possède plus de 150 ans d'expertise dans le domaine de la mobilité. Présente dans plus de 40 pays, Stannah a installé plus de 750 000 monte-escaliers dans le monde.

En France, Stannah dispose du réseau de SAV le plus dense du marché, avec des interventions garanties sous 48h dans 95% du territoire. Cette réactivité exceptionnelle, combinée à une qualité de fabrication irréprochable (certification ISO 9001), justifie un positionnement tarifaire haut de gamme.`,
        seoTitle: "Stannah Monte-Escalier : Prix, Avis et Modèles 2026",
        seoDescription: "Tout savoir sur Stannah : prix des monte-escaliers (3 500€ à 14 000€), modèles Siena, Solus, Starla. Avis clients, garantie et SAV en France.",
        models: [
            {
                name: "Stannah Siena",
                type: "droit",
                priceRange: "3 500€ - 4 500€",
                features: ["Rail ultra-fin", "Siège pivotant", "Télécommandes sans fil", "Batterie longue durée"],
            },
            {
                name: "Stannah Solus",
                type: "tournant",
                priceRange: "9 000€ - 12 000€",
                features: ["Sur-mesure", "Rail cintré", "Design épuré", "Repliable"],
            },
            {
                name: "Stannah Starla",
                type: "tournant",
                priceRange: "10 000€ - 14 000€",
                features: ["Haut de gamme", "Finitions premium", "Siège extra-confort", "Options personnalisées"],
            },
            {
                name: "Stannah Outdoor",
                type: "exterieur",
                priceRange: "6 000€ - 10 000€",
                features: ["Résistant intempéries", "Housse protection", "Revêtement anti-UV", "Étanchéité IP65"],
            },
        ],
        pros: [
            "SAV le plus réactif du marché (48h d'intervention)",
            "Qualité de fabrication exceptionnelle",
            "Pièces détachées disponibles 20+ ans",
            "Large choix de personnalisation",
            "Notoriété et confiance",
        ],
        cons: [
            "Prix parmi les plus élevés",
            "Design parfois jugé classique",
            "Vendeurs parfois pressants",
        ],
        warranty: "2 ans (extensible à 5 ans)",
        priceRange: {
            droit: "3 500€ - 5 500€",
            tournant: "9 000€ - 14 000€",
        },
        savRating: 5,
        qualityRating: 5,
        priceRating: 2,
        faq: [
            {
                question: "Quel est le prix d'un monte-escalier Stannah ?",
                answer: "Les prix Stannah varient de 3 500€ à 5 500€ pour un escalier droit, et de 9 000€ à 14 000€ pour un escalier tournant. Ces tarifs incluent l'installation et la mise en service.",
            },
            {
                question: "Stannah propose-t-il un SAV en France ?",
                answer: "Oui, Stannah dispose du réseau SAV le plus dense en France avec plus de 100 techniciens. L'intervention est garantie sous 48h dans 95% du territoire.",
            },
            {
                question: "Quelle est la durée de garantie Stannah ?",
                answer: "La garantie standard est de 2 ans, extensible jusqu'à 5 ans moyennant un contrat d'entretien. Les pièces détachées restent disponibles pendant plus de 20 ans.",
            },
        ],
    },
    {
        slug: "thyssenkrupp",
        name: "Thyssenkrupp",
        country: "Allemagne",
        countryFlag: "🇩🇪",
        founded: "1811",
        headquarters: "Essen, Allemagne",
        tagline: "L'ingénierie allemande au service de la mobilité",
        description: `Thyssenkrupp est un géant industriel allemand avec plus de 200 ans d'histoire. Sa division Home Solutions, dédiée aux monte-escaliers, bénéficie du savoir-faire technologique du groupe, notamment dans les ascenseurs.

Le point fort de Thyssenkrupp est sa technologie HomeGlide avec un rail ultra-compact de seulement 93mm de large, le plus fin du marché. Cette innovation permet d'installer un monte-escalier même dans les escaliers les plus étroits tout en préservant une largeur de passage maximale.`,
        seoTitle: "Thyssenkrupp Monte-Escalier : Prix, Avis et HomeGlide 2026",
        seoDescription: "Monte-escalier Thyssenkrupp : technologie HomeGlide, prix (3 000€ à 13 000€), avis clients. Comparatif avec Stannah et Handicare.",
        models: [
            {
                name: "HomeGlide",
                type: "droit",
                priceRange: "3 000€ - 4 000€",
                features: ["Rail 93mm (le plus fin)", "Installation rapide", "Design moderne", "Siège compact"],
            },
            {
                name: "Flow X",
                type: "tournant",
                priceRange: "8 500€ - 12 000€",
                features: ["Rail cintré sur-mesure", "Scanner 3D", "4 coloris au choix", "Pose en 1 jour"],
            },
            {
                name: "Levant",
                type: "tournant",
                priceRange: "10 000€ - 13 000€",
                features: ["Premium", "Repose-pieds automatique", "Siège pivotant 90°", "Télécommande tactile"],
            },
        ],
        pros: [
            "Technologie HomeGlide (rail le plus fin)",
            "Design moderne et épuré",
            "Excellent rapport qualité/prix sur les tournants",
            "Groupe industriel solide",
        ],
        cons: [
            "Réseau SAV moins dense que Stannah",
            "Moins de personnalisation",
            "Marque moins connue du grand public",
        ],
        warranty: "2 ans (extensible à 5 ans)",
        priceRange: {
            droit: "3 000€ - 4 500€",
            tournant: "8 500€ - 13 000€",
        },
        savRating: 4,
        qualityRating: 5,
        priceRating: 4,
        faq: [
            {
                question: "Qu'est-ce que la technologie HomeGlide ?",
                answer: "HomeGlide est le monte-escalier droit de Thyssenkrupp avec le rail le plus fin du marché (93mm). Cette compacité permet une installation dans les escaliers étroits sans réduire la largeur de passage.",
            },
            {
                question: "Thyssenkrupp est-il moins cher que Stannah ?",
                answer: "Oui, en moyenne 10 à 15% moins cher à configuration équivalente. Les prix commencent à 3 000€ pour un escalier droit contre 3 500€ chez Stannah.",
            },
            {
                question: "Où est fabriqué un monte-escalier Thyssenkrupp ?",
                answer: "Les monte-escaliers Thyssenkrupp Home Solutions sont conçus en Allemagne. La fabrication et l'assemblage ont lieu dans les usines européennes du groupe.",
            },
        ],
    },
    {
        slug: "handicare",
        name: "Handicare",
        country: "Pays-Bas",
        countryFlag: "🇳🇱",
        founded: "1886",
        headquarters: "Eindhoven, Pays-Bas",
        tagline: "Le challenger au meilleur rapport qualité/prix",
        description: `Handicare est un groupe néerlandais spécialisé dans les solutions de mobilité depuis plus de 130 ans. Moins connu du grand public que Stannah, Handicare s'est imposé comme le challenger offrant le meilleur rapport qualité/prix du marché.

La gamme Handicare couvre tous les besoins : escaliers droits, tournants, extérieurs, et même des plateformes élévatrices pour fauteuils roulants (gamme Freecurve). Le siège pivotant ergonomique est particulièrement apprécié des utilisateurs.`,
        seoTitle: "Handicare Monte-Escalier : Prix, Avis et Modèles 2026",
        seoDescription: "Monte-escalier Handicare : le meilleur rapport qualité/prix. Prix dès 2 800€, gamme 1100, Freecurve. Avis et comparatif avec Stannah.",
        models: [
            {
                name: "Handicare 1100",
                type: "droit",
                priceRange: "2 800€ - 3 800€",
                features: ["Entrée de gamme fiable", "Installation facile", "Siège ergonomique", "Garantie 2 ans"],
            },
            {
                name: "Handicare 2000",
                type: "tournant",
                priceRange: "8 000€ - 11 000€",
                features: ["Sur-mesure", "Siège pivotant", "Plusieurs coloris", "Rail fin"],
            },
            {
                name: "Freecurve",
                type: "tournant",
                priceRange: "10 000€ - 12 000€",
                features: ["Premium", "Siège debout possible", "Plateforme fauteuil option", "Technologies avancées"],
            },
            {
                name: "Outdoor 1000",
                type: "exterieur",
                priceRange: "5 500€ - 8 000€",
                features: ["Tout temps", "Housse intégrée", "Résistance UV", "Garantie anticorrosion"],
            },
        ],
        pros: [
            "Meilleur rapport qualité/prix du marché",
            "Gamme très complète",
            "Siège pivotant très ergonomique",
            "Option plateforme fauteuil roulant",
        ],
        cons: [
            "Notoriété moindre en France",
            "SAV parfois moins réactif",
            "Délais d'installation plus longs",
        ],
        warranty: "2 ans (extensible à 3 ans)",
        priceRange: {
            droit: "2 800€ - 4 200€",
            tournant: "8 000€ - 12 000€",
        },
        savRating: 4,
        qualityRating: 4,
        priceRating: 5,
        faq: [
            {
                question: "Handicare est-il une bonne marque ?",
                answer: "Oui, Handicare est une marque reconnue en Europe avec plus de 130 ans d'expérience. Elle offre un excellent rapport qualité/prix et des équipements fiables.",
            },
            {
                question: "Quel est le monte-escalier Handicare le moins cher ?",
                answer: "Le modèle 1100 pour escalier droit est le plus accessible, à partir de 2 800€ installation comprise. C'est l'un des tarifs les plus compétitifs du marché.",
            },
            {
                question: "Handicare propose-t-il des monte-escaliers pour fauteuil roulant ?",
                answer: "Oui, la gamme Freecurve peut être équipée d'une plateforme pour transporter un fauteuil roulant léger. C'est une option peu courante chez les concurrents.",
            },
        ],
    },
];

export function getBrandBySlug(slug: string): Brand | undefined {
    return BRANDS.find((brand) => brand.slug === slug);
}

export function getAllBrandSlugs(): string[] {
    return BRANDS.map((brand) => brand.slug);
}
