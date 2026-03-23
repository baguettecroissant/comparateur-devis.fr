/**
 * Données régionales enrichies pour le PSEO.
 * Contenu unique par région : climat, géographie, FAQ locale.
 */

export interface RegionContent {
    climate: string;
    geography: string;
    description: string;
    topServices: string[];
    faq: { question: string; answer: string }[];
}

const REGION_CONTENT_MAP: Record<string, RegionContent> = {
    "Île-de-France": {
        climate: "Climat océanique dégradé",
        geography: "Plaines et vallées",
        description: "Première région économique de France, l'Île-de-France concentre 12 millions d'habitants et un parc immobilier dense. Les problématiques de rénovation énergétique y sont majeures, avec un habitat ancien majoritaire (immeubles haussmanniens, pavillons d'après-guerre). La demande en artisans qualifiés y est la plus forte du pays.",
        topServices: ["Plomberie", "Électricité", "Peinture", "Serrurerie", "Climatisation"],
        faq: [
            {
                question: "Quels artisans sont les plus demandés en Île-de-France ?",
                answer: "Plombiers, électriciens et serruriers dominent les urgences. Pour les projets planifiés, la peinture, la menuiserie et l'isolation sont les plus sollicités. La rénovation énergétique (PAC, isolation) est en forte croissance depuis 2023."
            },
            {
                question: "Les tarifs artisans sont-ils plus élevés en Île-de-France ?",
                answer: "Oui, les tarifs sont en moyenne 20 à 30 % supérieurs au reste de la France. Un plombier facture 60-100 €/h en IDF contre 45-75 €/h en province. Cette différence reflète le coût de la vie et la forte demande."
            },
            {
                question: "Quelles certifications privilégier en Île-de-France ?",
                answer: "RGE (indispensable pour les aides), Qualibat, QualiPAC pour les pompes à chaleur. En zone ABF (Architectes des Bâtiments de France), assurez-vous que l'artisan connaît les contraintes patrimoniales."
            },
            {
                question: "Quelle est la meilleure saison pour rénover en Île-de-France ?",
                answer: "Les travaux extérieurs (façade, toiture) sont optimaux d'avril à octobre. Les travaux intérieurs peuvent être réalisés toute l'année. Planifiez 2-3 mois à l'avance car les carnets de commande sont souvent pleins."
            }
        ]
    },
    "Auvergne-Rhône-Alpes": {
        climate: "Climat continental et montagnard",
        geography: "Montagnes, vallées et plateaux",
        description: "Deuxième région de France par la population, l'Auvergne-Rhône-Alpes présente une grande diversité de paysages et de climats. Du bassin lyonnais aux stations alpines, les besoins en artisanat varient considérablement : isolation renforcée en altitude, chauffage performant en montagne, rénovation énergétique dans les villes.",
        topServices: ["Isolation", "Pompe à chaleur", "Couverture", "Chauffage", "Menuiserie"],
        faq: [
            {
                question: "L'isolation est-elle plus importante en Auvergne-Rhône-Alpes ?",
                answer: "Oui, le climat continental et montagnard rend l'isolation encore plus critique. En altitude (>800 m), une isolation R≥8 en toiture est recommandée contre R≥7 en plaine. Les économies de chauffage peuvent atteindre 40-50 % après isolation complète."
            },
            {
                question: "Une pompe à chaleur fonctionne-t-elle en montagne ?",
                answer: "Les PAC air/eau récentes fonctionnent jusqu'à -25 °C mais leur rendement diminue sous -10 °C. Au-dessus de 1 000 m d'altitude, une PAC géothermique ou un système hybride (PAC + chaudière bois) est plus adapté."
            },
            {
                question: "Quelles aides spécifiques en Auvergne-Rhône-Alpes ?",
                answer: "En plus des aides nationales (MaPrimeRénov', CEE), la région AuRA propose des éco-chèques logement (jusqu'à 1 500 €) et certaines métropoles (Lyon, Grenoble) ont des aides complémentaires pour la rénovation énergétique."
            }
        ]
    },
    "Provence-Alpes-Côte d'Azur": {
        climate: "Climat méditerranéen",
        geography: "Littoral, collines et massifs",
        description: "La région PACA bénéficie d'un ensoleillement exceptionnel (2 800 h/an) qui en fait un territoire privilégié pour le solaire. Le mistral et les épisodes méditerranéens intenses imposent des contraintes spécifiques en couverture et étanchéité. La climatisation y est quasi indispensable en été.",
        topServices: ["Climatisation", "Panneau solaire", "Piscine", "Couverture", "Terrasse"],
        faq: [
            {
                question: "La climatisation est-elle indispensable en PACA ?",
                answer: "Avec des températures dépassant régulièrement 35 °C en été, la climatisation est devenue quasi standard. Un système réversible (PAC air/air) assure le chauffage en hiver pour 1 500-5 000 € posé."
            },
            {
                question: "Le solaire est-il rentable en PACA ?",
                answer: "Avec 2 800 h d'ensoleillement/an, c'est la région la plus favorable. Une installation de 3 kWc (8-10 panneaux) produit 4 000-4 500 kWh/an et se rentabilise en 6-8 ans. Les aides représentent 2 000-4 000 € du coût."
            },
            {
                question: "Quelles contraintes pour les toitures en PACA ?",
                answer: "Le mistral (jusqu'à 150 km/h) impose un arrimage renforcé des tuiles. Les épisodes cévenols nécessitent une évacuation des eaux pluviales surdimensionnée. Les toitures en tuile canal sont traditionnelles mais la tuile romane résiste mieux au vent."
            }
        ]
    },
    "Nouvelle-Aquitaine": {
        climate: "Climat océanique à semi-océanique",
        geography: "Plaines, forêts et littoral atlantique",
        description: "Plus grande région de France par la superficie, la Nouvelle-Aquitaine associe le littoral atlantique, les vignobles bordelais et les campagnes du Limousin. Le patrimoine bâti y est varié : pierres de taille en Charente, colombages en Dordogne, maisons landaises en bois.",
        topServices: ["Couverture", "Maçonnerie", "Isolation", "Menuiserie", "Piscine"],
        faq: [
            {
                question: "Quelles sont les spécificités du bâti en Nouvelle-Aquitaine ?",
                answer: "La pierre calcaire domine en Charente et Dordogne, le colombage en Périgord, les maisons à ossature bois dans les Landes. Chaque matériau nécessite un savoir-faire artisanal spécifique, notamment pour le ravalement et la rénovation."
            },
            {
                question: "Le climat atlantique impacte-t-il les travaux ?",
                answer: "L'humidité océanique favorise les problèmes de moisissures et de remontées capillaires. Un traitement hydrofuge des façades (15-30 €/m²) et une VMC performante sont recommandés. Les travaux extérieurs sont à éviter entre novembre et février."
            }
        ]
    },
    "Occitanie": {
        climate: "Climat méditerranéen à océanique",
        geography: "Pyrénées, plaines et littoral méditerranéen",
        description: "L'Occitanie combine le dynamisme de Toulouse et Montpellier avec les paysages pyrénéens et méditerranéens. La forte croissance démographique génère une demande soutenue en construction neuve et en rénovation. Les températures estivales élevées rendent la climatisation de plus en plus nécessaire.",
        topServices: ["Climatisation", "Isolation", "Pompe à chaleur", "Piscine", "Couverture"],
        faq: [
            {
                question: "Quels artisans contacter pour le climat occitan ?",
                answer: "En plaine et sur le littoral, la climatisation et l'isolation sont prioritaires. En montagne (Pyrénées), le chauffage et l'isolation renforcée dominent. Les couvreurs expérimentés en tuile canal sont très recherchés dans toute la région."
            },
            {
                question: "Les panneaux solaires sont-ils rentables en Occitanie ?",
                answer: "Avec 2 400-2 700 h d'ensoleillement/an selon les départements, l'Occitanie est très favorable au solaire. Rentabilité en 7-9 ans. La région propose des aides complémentaires via l'éco-chèque régional."
            }
        ]
    },
    "Hauts-de-France": {
        climate: "Climat océanique à influences continentales",
        geography: "Plaines et collines",
        description: "Les Hauts-de-France se caractérisent par un parc immobilier ancien, souvent énergivore. La région est en première ligne de la rénovation énergétique avec de nombreuses passoires thermiques à traiter. Le climat humide impose des solutions d'isolation et de ventilation adaptées.",
        topServices: ["Isolation", "Chauffage", "Couverture", "Plomberie", "Ravalement"],
        faq: [
            {
                question: "L'isolation est-elle prioritaire dans les Hauts-de-France ?",
                answer: "Absolument. Avec un hiver long (octobre-avril) et des températures moyennes basses, l'isolation est l'investissement le plus rentable. Les logements anciens (briques du Nord) ont des déperditions de 30-40 % par les murs non isolés."
            },
            {
                question: "Quelles aides spécifiques dans les Hauts-de-France ?",
                answer: "La région propose le dispositif « Réno'Hauts-de-France » avec des primes complémentaires pour la rénovation globale. Les propriétaires occupants modestes peuvent cumuler ces aides avec MaPrimeRénov' pour couvrir jusqu'à 75 % du coût des travaux."
            }
        ]
    },
    "Grand Est": {
        climate: "Climat semi-continental",
        geography: "Plaines, plateaux et massif vosgien",
        description: "Le Grand Est connaît des hivers rigoureux qui rendent le chauffage et l'isolation particulièrement critiques. La tradition artisanale y est forte, notamment dans le travail du bois (Vosges) et la pierre (Lorraine). La rénovation des maisons à colombages alsaciennes nécessite un savoir-faire spécifique.",
        topServices: ["Chauffage", "Isolation", "Menuiserie", "Pompe à chaleur", "Charpente"],
        faq: [
            {
                question: "Quel chauffage choisir dans le Grand Est ?",
                answer: "Le climat semi-continental impose un chauffage performant. La PAC air/eau avec appoint fonctionne bien jusqu'à -15 °C. Le poêle à granulés (3 000-6 000 € posé) est une solution complémentaire économique très populaire en Alsace et Lorraine."
            },
            {
                question: "Comment rénover une maison à colombages ?",
                answer: "La rénovation d'un colombage nécessite un artisan spécialisé. Le torchis traditionnel est remplacé par un isolant naturel (chanvre, lin). Budget : 80-150 €/m² pour la réfection d'un pan de mur. En zone ABF, les contraintes esthétiques imposent des matériaux traditionnels."
            }
        ]
    },
    "Bretagne": {
        climate: "Climat océanique",
        geography: "Péninsule, littoral et bocage",
        description: "La Bretagne bénéficie d'un climat doux mais très humide. L'exposition aux vents marins et à l'air salin impose des contraintes spécifiques pour les matériaux de construction, particulièrement en zone littorale. Le granit breton est le matériau traditionnel, mais les constructions récentes utilisent aussi le bois et le parpaing.",
        topServices: ["Couverture", "Ravalement", "Isolation", "Menuiserie", "Plomberie"],
        faq: [
            {
                question: "L'humidité bretonne nécessite-t-elle des précautions particulières ?",
                answer: "Oui. L'hygrométrie élevée (80-90 %) favorise les moisissures et remontées capillaires. Une VMC double flux performante est indispensable. Le traitement hydrofuge des façades et l'étanchéité des toitures sont des priorités en Bretagne."
            },
            {
                question: "Quelles spécificités pour les toitures en Bretagne ?",
                answer: "L'ardoise naturelle domine le paysage breton. Une toiture ardoise de qualité dure 75-100 ans mais coûte 80-120 €/m² posée. Le vent marin (embruns salés) accélère la corrosion des fixations : utilisez de l'inox ou du cuivre."
            }
        ]
    },
    "Normandie": {
        climate: "Climat océanique",
        geography: "Bocage, campagne et littoral",
        description: "La Normandie possède un patrimoine architectural riche : maisons à colombages, manoirs, longères. Le climat humide et les sols argileux imposent des précautions spécifiques en fondations et étanchéité. La rénovation du patrimoine ancien est un enjeu majeur dans la région.",
        topServices: ["Couverture", "Charpente", "Maçonnerie", "Isolation", "Ravalement"],
        faq: [
            {
                question: "Comment rénover une longère normande ?",
                answer: "La longère traditionnelle nécessite un maçon spécialisé en pierre calcaire et silex. L'isolation par l'intérieur est privilégiée pour préserver le cachet extérieur. Budget moyen : 1 500-2 500 €/m² pour une rénovation complète."
            },
            {
                question: "Quelles précautions sur les sols argileux en Normandie ?",
                answer: "Les sols argileux gonflent et se rétractent selon l'humidité, provoquant des fissures. Avant toute construction, une étude de sol (G2 AVP, 2 000-4 000 €) est obligatoire. Les fondations doivent atteindre 80-120 cm de profondeur minimum."
            }
        ]
    },
    "Pays de la Loire": {
        climate: "Climat océanique tempéré",
        geography: "Vallées, bocage et littoral atlantique",
        description: "Les Pays de la Loire combinent un arrière-pays bocager et un littoral attractif. La croissance démographique (Nantes, Angers) stimule la construction neuve tandis que le patrimoine ancien (tuffeau en Loire, ardoise en Maine) nécessite une expertise artisanale spécifique.",
        topServices: ["Maçonnerie", "Couverture", "Menuiserie", "Isolation", "Terrasse"],
        faq: [
            {
                question: "Quelles spécificités du bâti ligérien ?",
                answer: "Le tuffeau (pierre calcaire blanche) est le matériau noble du Val de Loire. Sa restauration nécessite un tailleur de pierre qualifié (80-200 €/m²). L'ardoise angevine couvre les toitures : 75-100 ans de durée de vie pour une ardoise de qualité."
            }
        ]
    },
};

/**
 * Retourne le contenu enrichi pour une région, avec fallback.
 */
export function getRegionContent(regionName: string): RegionContent {
    if (REGION_CONTENT_MAP[regionName]) {
        return REGION_CONTENT_MAP[regionName];
    }
    
    return {
        climate: "Climat tempéré",
        geography: "Territoire varié",
        description: `La région ${regionName} dispose d'un réseau d'artisans qualifiés couvrant l'ensemble des corps de métier du bâtiment. Des plombiers aux couvreurs en passant par les électriciens et les peintres, trouvez le professionnel adapté à votre projet.`,
        topServices: ["Plomberie", "Électricité", "Peinture", "Maçonnerie", "Isolation"],
        faq: [
            {
                question: `Quels artisans sont les plus demandés en ${regionName} ?`,
                answer: `En ${regionName}, les plombiers, électriciens et peintres sont les artisans les plus sollicités. Pour la rénovation énergétique, les installateurs de pompes à chaleur et les spécialistes de l'isolation sont de plus en plus demandés.`
            },
            {
                question: `Comment trouver un artisan fiable en ${regionName} ?`,
                answer: "Vérifiez le numéro SIRET de l'artisan, ses assurances (décennale et RC Pro) et ses certifications (RGE, Qualibat). Comparez au minimum 3 devis avant de vous engager."
            }
        ]
    };
}
