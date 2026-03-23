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
        type: string;
        priceRange: string;
        features: string[];
    }[];
    pros: string[];
    cons: string[];
    warranty: string;
    priceRange: {
        fourniture: string;
        pose: string;
    };
    savRating: number;
    qualityRating: number;
    priceRating: number;
    faq: { question: string; answer: string }[];
}

export const BRANDS: Brand[] = [
    {
        slug: "atlantic",
        name: "Atlantic",
        country: "France",
        countryFlag: "🇫🇷",
        founded: "1968",
        headquarters: "La Roche-sur-Yon, France",
        tagline: "Le confort thermique à la française",
        description: `Créée en 1968 en Vendée, Atlantic est la marque française leader dans le domaine du confort thermique (chauffage, eau chaude, climatisation, ventilation). Reconnue pour la fiabilité et la durabilité de ses produits, Atlantic conçoit la majorité de ses équipements en France dans ses 13 sites industriels.

Faire le choix d'Atlantic pour sa pompe à chaleur ou son chauffe-eau, c'est s'assurer d'une excellente disponibilité des pièces détachées, d'un SAV de proximité ultra-réactif et de produits pensés spécifiquement pour le climat et les logements français.`,
        seoTitle: "Marque Atlantic : Avis, Prix et Équipements Thermiques 2026",
        seoDescription: "Tout savoir sur les équipements Atlantic : pompes à chaleur, chauffe-eau, radiateurs. Avis clients, tarifs moyens et garanties pour votre rénovation.",
        models: [
            {
                name: "Alféa Extensa A.I.",
                type: "Pompe à chaleur",
                priceRange: "6 000€ - 9 000€",
                features: ["Air/Eau", "Connectée", "Hautes performances", "Éligible MaPrimeRénov'"],
            },
            {
                name: "Linéo Connecté",
                type: "Chauffe-eau",
                priceRange: "600€ - 900€",
                features: ["Extra-plat", "Pilotage smartphone", "Gain de place", "Mode auto apprentissage"],
            },
            {
                name: "Divali",
                type: "Radiateur",
                priceRange: "500€ - 800€",
                features: ["Chaleur douce", "Rétro-éclairage", "Détection fenêtre ouverte", "Design premium"],
            },
        ],
        pros: [
            "Fabrication française majoritaire",
            "Disponibilité des pièces de rechange sur 10 ans",
            "Écosystème de produits (Cozytouch)",
            "Vaste réseau d'installateurs partenaires (Artisans)",
            "SAV national très performant",
        ],
        cons: [
            "Certains modèles connectés complexes à configurer",
            "Prix légèrement supérieurs à l'entrée de gamme",
            "Délais en haute saison pour l'installation",
        ],
        warranty: "2 ans (cuve chauffe-eau 5 ans, compresseur PAC 5 ans)",
        priceRange: {
            fourniture: "500€ - 8 000€",
            pose: "200€ - 2 500€",
        },
        savRating: 5,
        qualityRating: 5,
        priceRating: 4,
        faq: [
            {
                question: "Les produits Atlantic sont-ils fabriqués en France ?",
                answer: "Oui, Atlantic est fier de concevoir et fabriquer la majorité de ses produits dans ses 13 usines réparties sur le territoire français, favorisant l'emploi local et réduisant l'empreinte carbone.",
            },
            {
                question: "Faut-il faire appel à un pro pour installer du matériel Atlantic ?",
                answer: "Il est fortement recommandé, voire obligatoire (pour les fluides frigorigènes des pompes à chaleur), de passer par un artisan RGE. Cela garantit le bon fonctionnement et vous ouvre le droit aux aides de l'État.",
            },
            {
                question: "Que vaut la domotique Cozytouch d'Atlantic ?",
                answer: "L'application Cozytouch permet de piloter à distance vos radiateurs, chauffe-eau et PAC. Elle est très appréciée pour suivre sa consommation en temps réel et optimiser ses factures énergétiques.",
            },
        ],
    },
    {
        slug: "somfy",
        name: "Somfy",
        country: "France",
        countryFlag: "🇫🇷",
        founded: "1969",
        headquarters: "Cluses, France",
        tagline: "Le leader mondial de la motorisation et domotique",
        description: `Somfy, née en Haute-Savoie, est devenue la référence mondiale pour la motorisation et l'automatisation des ouvertures de la maison (volets, portails, stores) ainsi que pour la sécurité (alarmes, caméras).

Choisir Somfy lors de ses travaux d'électricité ou de menuiserie garantit un écosystème ouvert, fiable et évolutif. Leurs protocoles radios (RTS et io-homecontrol) sont des standards de l'industrie, vous assurant de ne jamais être bloqué avec un équipement obsolète de sitôt.`,
        seoTitle: "Marque Somfy : Domotique, Moteurs Volets et Alarmes 2026",
        seoDescription: "Guide complet sur Somfy : motorisation de volets, box TaHoma, systèmes d'alarme. Prix, avis et installation par des artisans qualifiés.",
        models: [
            {
                name: "Moteur Oximo io",
                type: "Motorisation Volet",
                priceRange: "150€ - 250€",
                features: ["Retour d'information", "Détection d'obstacle", "Protection gel", "Silencieux"],
            },
            {
                name: "Box TaHoma switch",
                type: "Domotique",
                priceRange: "199€",
                features: ["Centralisation", "Boutons scénarios", "Compatible 300+ gammes", "Application intuitive"],
            },
            {
                name: "Home Alarm Advanced",
                type: "Sécurité",
                priceRange: "600€ - 1 200€",
                features: ["Dissuasion avant intrusion", "Secours GSM/Batterie", "IntelliTAG", "Détecteurs intelligents"],
            },
        ],
        pros: [
            "Leader mondial incontesté de la motorisation",
            "Écosystème domotique extrêmement riche (TaHoma)",
            "Protocoles radio fiables et encryptés (io-homecontrol)",
            "Garantie constructeur robuste de 5 ans sur les moteurs",
            "Compatible avec de nombreux autres assistants (Google, Alexa)",
        ],
        cons: [
            "Tarifs premium par rapport aux alternatives classiques",
            "Écosystème fermé autour de leurs propres box",
            "Installation de systèmes complexes nécessitant un Pro",
        ],
        warranty: "5 ans pour moteurs et automatismes, 2 ans pour accessoires",
        priceRange: {
            fourniture: "150€ - 1 500€",
            pose: "100€ - 500€",
        },
        savRating: 4,
        qualityRating: 5,
        priceRating: 3,
        faq: [
            {
                question: "Puis-je motoriser mes anciens volets avec Somfy ?",
                answer: "Absolument. Un menuisier ou un électricien peut intégrer un moteur tubulaire Somfy dans l'axe de votre volet roulant existant ou ajouter une motorisation à bras sur des volets battants.",
            },
            {
                question: "Est-ce difficile de configurer une box TaHoma ?",
                answer: "L'installation initiale a été grandement simplifiée avec la TaHoma switch. Cependant, pour relier toute une maison (volets, chauffage, alarme, portail), l'intervention d'un domoticien certifié est un vrai plus.",
            },
            {
                question: "Que signifie le protocole 'io-homecontrol' chez Somfy ?",
                answer: "C'est un protocole radio bidirectionnel ultra-sécurisé. Contrairement à l'ancien RTS, il offre un 'retour d'information' : vous pouvez vérifier sur votre téléphone si le volet est bien fermé réellement.",
            },
        ],
    },
    {
        slug: "velux",
        name: "Velux",
        country: "Danemark",
        countryFlag: "🇩🇰",
        founded: "1941",
        headquarters: "Hørsholm, Danemark",
        tagline: "Faites entrer la lumière naturelle",
        description: `Le terme est devenu un nom générique, mais Velux reste la marque pionnière et leader écrasante de la fenêtre de toit dans le monde. Depuis 1941, le groupe danois innove pour transformer les combles sombres en espaces de vie lumineux et sains.

Lors de travaux de couverture ou d'aménagement de combles, opter pour un Velux original garantit une longévité incroyable face aux intempéries, une isolation parfaite et un catalogue d'accessoires (stores, volets, domotique) sans équivalent.`,
        seoTitle: "Marque Velux : Fenêtres de Toit, Prix et Pose 2026",
        seoDescription: "Informations sur les fenêtres de toit Velux : modèles, tailles, conduits de lumière. Tout pour votre projet de menuiserie et charpente. Devis gratuit.",
        models: [
            {
                name: "Confort / Tout Confort",
                type: "Fenêtre de toit",
                priceRange: "400€ - 800€",
                features: ["Anti-bruit de pluie", "Nettoyage facilité", "Isolation renforcée", "Sécurité vitrage"],
            },
            {
                name: "Velux Active with Netatmo",
                type: "Aération intelligente",
                priceRange: "250€",
                features: ["Capteurs CO2", "Fermeture anti-pluie", "Régulation automatique", "Pilotage smartphone"],
            },
            {
                name: "Sun Tunnel",
                type: "Conduit de lumière",
                priceRange: "400€ - 600€",
                features: ["Puits de lumière naturel", "Pour pièces aveugles", "Design discret", "Fort rendement"],
            },
        ],
        pros: [
            "Qualité de fabrication et durabilité (20 à 30 ans)",
            "Référence mondiale absolue reconnue par tous les couvreurs",
            "Innovation constante (verres autonettoyants, anti-bruit)",
            "Des milliers d'installateurs certifiés",
            "Pièces détachées (vitrages, charnières) longtemps disponibles",
        ],
        cons: [
            "Produits originaux nettement plus chers que les copies génériques",
            "Prix des accessoires originaux (stores intérieurs) élevé",
            "La pose exige impérativement un couvreur agréé",
        ],
        warranty: "10 ans (fenêtre et raccordement), 2 ans (stores et moteurs)",
        priceRange: {
            fourniture: "300€ - 1 500€",
            pose: "350€ - 800€",
        },
        savRating: 4,
        qualityRating: 5,
        priceRating: 3,
        faq: [
            {
                question: "Dois-je demander un permis pour installer un Velux ?",
                answer: "Seule une Déclaration Préalable de travaux (DP) en mairie est requise si vous créez une nouvelle ouverture sur un toit existant, puisqu'elle modifie l'aspect extérieur du bâtiment.",
            },
            {
                question: "Combien de temps faut-il pour faire poser une fenêtre de toit ?",
                answer: "Un couvreur-menuisier expérimenté peut remplacer un Velux de même taille en moins d'une journée. S'il s'agit d'une création (percement de charpente et chevêtre), prévoyez 1 à 2 jours pleins.",
            },
            {
                question: "Un Velux laisse-t-il passer trop de chaleur en été ?",
                answer: "Les modèles récents (Tout Confort) filtrent 77% de la chaleur. De plus, il est conseillé de faire installer un store d'occultation extérieur ou un volet roulant solaire pour bloquer les UV avant qu'ils ne touchent le vitrage.",
            },
        ],
    },
    {
        slug: "legrand",
        name: "Legrand",
        country: "France",
        countryFlag: "🇫🇷",
        founded: "1865",
        headquarters: "Limoges, France",
        tagline: "Le spécialiste mondial des infrastructures électriques",
        description: `Spécialiste mondial des infrastructures électriques et numériques du bâtiment, Legrand est une entreprise française historique reconnue pour la qualité et le design de ses appareillages (prises, interrupteurs, tableaux).
        
Que vous fassiez une rénovation partielle ou totale, les produits Legrand (comme la célèbre gamme Céliane ou Dooxie) sont recommandés par l'immense majorité des électriciens professionnels pour leur sécurité, leur fiabilité et leurs fonctionnalités domotiques avancées (gamme "with Netatmo").`,
        seoTitle: "Marque Legrand : Appareillages Électriques, Tableaux et Avis 2026",
        seoDescription: "Guide sur Legrand : prises, interrupteurs Céliane, tableaux électriques et domotique. Comparez les prix et trouvez un électricien qualifié pour vos travaux.",
        models: [
            {
                name: "Gamme Céliane",
                type: "Appareillage mural",
                priceRange: "10€ - 30€ / unité",
                features: ["Design premium", "Large choix de plaques", "Matières nobles", "Silencieux"],
            },
            {
                name: "Drivia",
                type: "Tableau électrique",
                priceRange: "200€ - 600€",
                features: ["Précâblé", "Évolutif", "Conforme NF C 15-100", "Portes design"],
            },
            {
                name: "Céliane with Netatmo",
                type: "Maison connectée",
                priceRange: "80€ - 150€ / unité",
                features: ["Installation sans fil", "Pilotage voix/smartphone", "Suivi conso", "Simulateur présence"],
            },
        ],
        pros: [
            "Fiabilité électrique absolue (Normes NF)",
            "Large éventail de designs et finitions",
            "Écosystème connecté Netatmo très abouti",
            "Standard de l'industrie pour les électriciens",
            "Longévité des gammes (extensions faciles des années plus tard)",
        ],
        cons: [
            "Prix supérieurs aux marques de grande surface de bricolage",
            "Gammes connectées coûteuses à grande échelle",
        ],
        warranty: "2 ans",
        priceRange: {
            fourniture: "10€ - 800€",
            pose: "50€ - 1 500€",
        },
        savRating: 5,
        qualityRating: 5,
        priceRating: 3,
        faq: [
            {
                question: "Pourquoi les électriciens recommandent-ils Legrand ?",
                answer: "Les professionnels privilégient Legrand pour la robustesse du matériel, la facilité de câblage (connexion automatique) et le respect rigoureux des normes de sécurité françaises.",
            },
            {
                question: "Puis-je installer du Legrand Netatmo sur mon installation existante ?",
                answer: "Oui, les interrupteurs connectés 'with Netatmo' s'installent à la place de vos interrupteurs standards sans tirer de nouveaux câbles (souvent sans avoir besoin du fil de neutre).",
            },
            {
                question: "Où sont fabriqués les produits Legrand ?",
                answer: "Une grande partie des appareils haute qualité de Legrand (comme la gamme Céliane) sont toujours conçus et fabriqués en France, notamment dans le Limousin et sur d'autres sites nationaux.",
            },
        ],
    },
    {
        slug: "kinedo",
        name: "Kinedo",
        country: "France",
        countryFlag: "🇫🇷",
        founded: "1968",
        headquarters: "Chaumes-en-Retz, France",
        tagline: "Le créateur français de la douche et du bain",
        description: `Kinedo est la marque française de référence pour la création, la rénovation et l'adaptation de la salle de bain. Spécialiste de la douche, des pare-bains et de la balnéothérapie, Kinedo excelle particulièrement dans le remplacement de baignoires par des douches sécurisées (gamme Kinemagic).

L'entreprise fabrique l'ensemble de ses receveurs, cabines et parois dans ses deux usines françaises (en Loire-Atlantique et dans le Var), garantissant ainsi un niveau de finition et une empreinte carbone maîtrisée, plébiscités par les installateurs plombiers.`,
        seoTitle: "Marque Kinedo : Douches, Baignoires et Pare-bains 2026",
        seoDescription: "Avis et prix des douches, baignoires et balnéothérapie Kinedo. Découvrez la gamme Kinemagic pour remplacer votre baignoire par une douche.",
        models: [
            {
                name: "Kinemagic",
                type: "Douche de remplacement",
                priceRange: "2 500€ - 4 000€",
                features: ["Installation en 1 jour", "Sécurisée (PMR)", "Panneaux sans joint", "Sur-mesure"],
            },
            {
                name: "Kinequartz",
                type: "Paroi de douche",
                priceRange: "400€ - 900€",
                features: ["Verre anti-calcaire", "Profilés discrets", "Robuste", "Tailles variées"],
            },
            {
                name: "Kinedo Balnéo",
                type: "Baignoire massante",
                priceRange: "1 500€ - 3 500€",
                features: ["Massages eau/air", "Ergonomie", "Silence total", "Désinfection ozone"],
            },
        ],
        pros: [
            "Spécialiste du remplacement de baignoire sans gros travaux",
            "Fabrication 100% française",
            "Solutions très adaptées aux seniors et PMR (Kinemagic)",
            "Verre traité anti-calcaire d'usine",
            "Large choix de personnalisation (couleurs de receveur)",
        ],
        cons: [
            "Design fonctionnel parfois jugé un peu classique",
            "Des tarifs plus élevés que les receveurs en acrylique standards",
        ],
        warranty: "2 ans",
        priceRange: {
            fourniture: "400€ - 4 000€",
            pose: "300€ - 1 500€",
        },
        savRating: 4,
        qualityRating: 4,
        priceRating: 3,
        faq: [
            {
                question: "Combien de temps faut-il pour installer une cabine Kinemagic ?",
                answer: "L'avantage majeur de la gamme Kinemagic est qu'un plombier qualifié peut démonter votre ancienne baignoire et installer la nouvelle douche complète en 1 à 2 jours, sans reprise de carrelage.",
            },
            {
                question: "Les douches Kinedo sont-elles adaptées aux aides de l'État ?",
                answer: "Oui, de nombreux modèles extra-plats et cabines sécurisées avec siège et barres de maintien sont éligibles à « MaPrimeAdapt' » (ex-Action Logement) pour l'aménagement du logement des seniors.",
            },
            {
                question: "Pourquoi choisir un receveur en Biocryl ou Biolith de Kinedo ?",
                answer: "Ces matériaux composites exclusifs à Kinedo sont naturellement anti-dérapants (Classe PN24), très résistants aux chocs, plus légers que la céramique et chaleureux au toucher.",
            },
        ],
    },
    {
        slug: "daikin",
        name: "Daikin",
        country: "Japon",
        countryFlag: "🇯🇵",
        founded: "1924",
        headquarters: "Osaka, Japon",
        tagline: "L'expertise japonaise en climatisation et pompes à chaleur",
        description: `Daikin est le pionnier et le leader mondial absolu des systèmes de climatisation et de pompes à chaleur (PAC) fonctionnant au fluide frigorigène. Forte d'une très haute ingénierie japonaise, la marque bénéficie de décennies d'innovation, comme l'invention du système VRV (Débit de Réfrigérant Variable).

Installer une solution Daikin chez soi, c'est l'assurance d'avoir l'un puissant équipement parmi les plus silencieux, pérennes et économes en énergie du marché. La marque possède une base européenne gigantesque avec des usines en Belgique, Allemagne, et République tchèque pour répondre rapidement au marché local.`,
        seoTitle: "Marque Daikin : Pompes à Chaleur, Clims Réversibles - Prix 2026",
        seoDescription: "Examen de la marque Daikin : Pompes à Chaleur Air/Air et Air/Eau. Prix moyens, avis clients, avantages et coûts d'installation constatés en 2026.",
        models: [
            {
                name: "Altherma 3",
                type: "Pompe à chaleur Air/Eau",
                priceRange: "7 000€ - 12 000€",
                features: ["Haute température", "Ballon ECS intégré", "Connectée", "Design primé"],
            },
            {
                name: "Ururu Sarara",
                type: "Climatisation Air/Air",
                priceRange: "2 000€ - 3 500€",
                features: ["Humidification d'air", "Nettoyage auto", "Ultra-silencieux", "A+++"],
            },
            {
                name: "Perfera",
                type: "Climatisation murale",
                priceRange: "1 200€ - 2 000€",
                features: ["Détecteur de présence", "Chauffage d'appoint", "Flux d'air 3D", "Filtre purificateur"],
            },
        ],
        pros: [
            "Performances technologiques de premier plan (A+++)",
            "Niveaux sonores parmi les plus bas du marché (souvent sous 20 dB)",
            "Design des unités intérieures très soigné",
            "Pionnier sur les fluides écologiques (R-32)",
            "Garanties constructeur solides si posé par un pro certifié",
        ],
        cons: [
            "La marque la plus chère du marché grand public",
            "Entretien parfois technique nécessitant un vrai spécialiste Daikin",
            "Délais d'approvisionnement en pleine saison",
        ],
        warranty: "3 ans pièces, 5 ans compresseur",
        priceRange: {
            fourniture: "1 200€ - 12 000€",
            pose: "500€ - 2 500€",
        },
        savRating: 4,
        qualityRating: 5,
        priceRating: 2,
        faq: [
            {
                question: "Daikin est-il meilleur qu'une marque d'entrée de gamme ?",
                answer: "Incontestablement. Daikin investit massivement en R&D. Vous gagnez en confort sonore (très silencieux), en longévité de l'appareil et surtout en économie d'énergie grâce à leurs compresseurs 'Inverter' optimisés.",
            },
            {
                question: "Puis-je bénéficier de MaPrimeRénov' pour une pompe à chaleur Daikin ?",
                answer: "Oui, la grande majorité de la gamme Air/Eau (comme l'Altherma) est certifiée pour recevoir les aides à la transition écologique. Attention, les clims Air/Air sont par contre souvent exclues des aides.",
            },
            {
                question: "Faut-il souscrire à un contrat d'entretien ?",
                answer: "C'est fortement conseillé et souvent obligatoire (selon la charge de fluide frigorigène). De plus, un entretien annuel prolonge significativement la durée de vie du compresseur et préserve la garantie constructeur.",
            },
        ],
    },
    {
        slug: "tryba",
        name: "Tryba",
        country: "France",
        countryFlag: "🇫🇷",
        founded: "1980",
        headquarters: "Gundershoffen, France",
        tagline: "Fenêtres, portes et volets garantis 30 ans",
        description: `Tryba est l'un des leaders français de la menuiserie extérieure (fenêtres, portes, volets, vérandas) conçu et fabriqué majoritairement en Alsace. La marque se distingue par une approche très haut de gamme, une solidité à toute épreuve (l'armature acier systématique) et une garantie constructeur étendue jusqu'à 30 ans.
        
Faire poser du Tryba par l'un des 300 espaces conseils franchisés en France représente un investissement important à l'achat, mais qui garantit une excellente isolation thermique et phonique, ainsi qu'une tranquillité d'esprit sur plusieurs décennies.`,
        seoTitle: "Marque Tryba : Prix Fenêtres, Portes et Avis Menuiseries 2026",
        seoDescription: "Découvrez les menuiseries Tryba : fenêtres PVC, alu, bois, portes d'entrée. Avis clients, prix moyens avec pose et garantie 30 ans détaillée.",
        models: [
            {
                name: "T84 (PVC)",
                type: "Fenêtre haut de gamme",
                priceRange: "600€ - 1 200€",
                features: ["Armature acier", "Double/Triple vitrage", "Isolation phonique max", "Options design"],
            },
            {
                name: "CA80 (Alu)",
                type: "Baie vitrée",
                priceRange: "1 500€ - 3 500€",
                features: ["Profilés fins", "Grand clair de jour", "Rupture pont thermique", "Sécurité renforcée"],
            },
            {
                name: "Évolution",
                type: "Porte d'entrée",
                priceRange: "2 000€ - 4 000€",
                features: ["Serrure 5 points", "Blindage intégré", "Bi-coloration", "Sur-mesure de précision"],
            },
        ],
        pros: [
            "Garantie Tryba étendue jusqu'à 30 ans (selon modèles)",
            "Solidité : renforts en acier profilés systématiques (PVC)",
            "Fabrication française robuste et exigeante (Alsace)",
            "Réseau de poseurs officiels intégrés (pacte d'excellence)",
            "Excellentes performances acoustiques et thermiques",
        ],
        cons: [
            "Devis moyens supérieurs de 20 à 40% par rapport à du standard",
            "Politique commerciale parfois jugée agressive selon le franchisé",
            "Délais de fabrication sur-mesure assez longs",
        ],
        warranty: "Jusqu'à 30 ans sur certains modèles",
        priceRange: {
            fourniture: "500€ - 4 000€",
            pose: "200€ - 800€ / ouverture",
        },
        savRating: 4,
        qualityRating: 5,
        priceRating: 2,
        faq: [
            {
                question: "Pourquoi les fenêtres Tryba sont-elles plus chères ?",
                answer: "Tryba intègre systématiquement des armatures en acier dans ses menuiseries PVC pour éviter la déformation dans le temps. Le vitrage isolant de pointe et la finition sur-mesure justifient un positionnement premium.",
            },
            {
                question: "Les devis Tryba incluent-ils toujours la pose ?",
                answer: "Historiquement, Tryba contrôle toute la chaîne et impose que l'installation soit faite par ses propres équipes certifiées (les experts poseurs Tryba) pour pouvoir garantir le produit 30 ans.",
            },
            {
                question: "Que couvre exactement la garantie 30 ans de Tryba ?",
                answer: "Elle s'applique sur les menuiseries PVC et aluminium (profilés, soudures, étanchéité) et les vitrages. La quincaillerie et les accessoires eux, restent généralement garantis 10 ans.",
            },
        ],
    },
    {
        slug: "viessmann",
        name: "Viessmann",
        country: "Allemagne",
        countryFlag: "🇩🇪",
        founded: "1917",
        headquarters: "Allendorf, Allemagne",
        tagline: "L'excellence allemande pour le chauffage et l'énergie",
        description: `Groupe familial allemand plus que centenaire, Viessmann est la référence absolue pour les systèmes de chauffage haut de gamme, qu'il s'agisse de chaudières gaz à condensation, de pompes à chaleur ou de systèmes solaires thermiques.
        
Reconnue pour la fiabilité proverbiale de ses machines et ses rendements exceptionnels, la marque s'adresse aux particuliers qui considèrent la durabilité et l'économie d'énergie sur le long terme comme le premier critère, au-delà du coût d'installation initial.`,
        seoTitle: "Marque Viessmann : Chaudières, PAC, Avis et Tarifs 2026",
        seoDescription: "Examen des chaudières et pompes à chaleur Viessmann (Vitodens, Vitocal). Le top du chauffage allemand : prix moyens, consommation et garanties.",
        models: [
            {
                name: "Vitodens 200-W",
                type: "Chaudière gaz condensation",
                priceRange: "3 500€ - 5 500€",
                features: ["Écran tactile", "Connectivité Wi-Fi", "Très haut rendement", "Brûleur MatriX"],
            },
            {
                name: "Vitocal 250-A",
                type: "Pompe à chaleur Air/Eau",
                priceRange: "10 000€ - 16 000€",
                features: ["Rénovation spéciale (70°C)", "Ultra-silencieuse", "Fluide écologique", "Design premium"],
            },
            {
                name: "Vitosol",
                type: "Panneaux solaires thermiques",
                priceRange: "4 000€ - 7 000€",
                features: ["Eau chaude gratuite", "Arrêt ThermProtect", "Hautes performances", "Longévité"],
            },
        ],
        pros: [
            "Longévité inégalée des équipements (brûleurs, échangeurs Inox-Radial)",
            "Rendement énergétique ultime du marché",
            "Écosystème domotique abouti (ViCare, ViGuide)",
            "Esthétique moderne et lignes épurées",
            "Réseau Proactif de stations techniques agréées",
        ],
        cons: [
            "Coût d'acquisition très élevé",
            "Pièces détachées parfois coûteuses",
            "Installation complexe nécessitant un installateur Proactif",
        ],
        warranty: "2 ans standard (extensible à 10 ans sur échangeur)",
        priceRange: {
            fourniture: "3 500€ - 16 000€",
            pose: "1 000€ - 3 500€",
        },
        savRating: 5,
        qualityRating: 5,
        priceRating: 1,
        faq: [
            {
                question: "Une chaudière Viessmann dure-t-elle vraiment plus longtemps ?",
                answer: "Oui, la qualité des composants (comme l'échangeur de chaleur en acier inoxydable breveté) fait qu'une chaudière Viessmann bien entretenue dépasse allégrement les 15 voire 20 ans de service.",
            },
            {
                question: "Puis-je installer une PAC Viessmann en remplacement de ma chaudière fioul ?",
                answer: "Certains modèles (comme la Vitocal 250-A) sont conçus pour délivrer une eau à 70°C, ce qui permet de conserver vos anciens radiateurs haute température, la rendant idéale pour la rénovation.",
            },
            {
                question: "Que permet l'application ViCare app ?",
                answer: "Elle vous permet non seulement de régler à distance la température de votre maison, mais aussi d'autoriser votre chauffagiste à surveiller votre système à distance pour la maintenance prédictive.",
            },
        ],
    },
    {
        slug: "isover",
        name: "Isover (Saint-Gobain)",
        country: "France",
        countryFlag: "🇫🇷",
        founded: "1937",
        headquarters: "Courbevoie, France",
        tagline: "Le n°1 de l'isolation de haute performance",
        description: `Isover, filiale majeure du groupe français Saint-Gobain, est le nom indissociable de l'isolation phonique et thermique en France. Spécialiste historique de la laine de verre et de la laine de roche, l'entreprise innove avec des matériaux biosourcés (laine de bois, chanvre).
        
Qu'il s'agisse d'aménager des combles, de doubler des murs (système Optima) ou d'isoler une toiture, un artisan plaquiste ou charpentier vous proposera presque systématiquement du matériel Isover pour garantir la parfaite tenue énergétique de votre chantier.`,
        seoTitle: "Marque Isover : Isolants, Laine de Verre et Plaquisterie",
        seoDescription: "Examen Isover par Saint-Gobain. Laine de verre, pare-vapeur, membrane Vario. Prix, performances thermiques (RT2020) et conseils isolation.",
        models: [
            {
                name: "IBR Revêtu",
                type: "Laine de verre (Combles)",
                priceRange: "8€ - 15€ / m²",
                features: ["Fort rouleau (30+ cm)", "R très élevé", "Léger", "Prix abordable"],
            },
            {
                name: "GR 32 / Optima",
                type: "Isolation murale",
                priceRange: "12€ - 20€ / m²",
                features: ["Gain de place (lambda 32)", "Semi-rigide", "Insonorisant", "Pose clipsée"],
            },
            {
                name: "Vario Xtra",
                type: "Membrane Pare-vapeur",
                priceRange: "3€ - 5€ / m²",
                features: ["Hygro-régulant", "Étanchéité à l'air optimale", "Seah auto-agrippant", "Sain"],
            },
        ],
        pros: [
            "Le meilleur rapport performances thermiques/prix actuel",
            "Innombrables certifications ACERMI (gage pour les aides)",
            "Systèmes complets brevetés (Optima) qui évitent les ponts thermiques",
            "Évolution vers des laines de plus en plus saines et douces",
            "Produits omniprésents en réseaux pro (Point.P, etc.)",
        ],
        cons: [
            "Isolants minéraux craignant fortement l'eau/l'humidité",
            "La laine de verre peut s'affaisser si elle est mal posée",
            "Bilan carbone initial moins bon que des isolants biosourcés",
        ],
        warranty: "Inhérent à la durée de vie du bâtiment (+ décennale)",
        priceRange: {
            fourniture: "8€ - 30€ / m²",
            pose: "20€ - 60€ / m²",
        },
        savRating: 5,
        qualityRating: 4,
        priceRating: 5,
        faq: [
            {
                question: "La laine de verre Isover gratte-t-elle toujours autant ?",
                answer: "Les nouvelles formulations des laines minérales Isover sont beaucoup plus douces et génèrent moins de poussière. Cependant, votre artisan sera de toute façon équipé des protections intégrales EPI obligatoires.",
            },
            {
                question: "Isover propose-t-il des isolants biosourcés ?",
                answer: "Oui, face à l'exigence de la RE2020, Isover propose notamment la laine de bois Isonat (le groupe a racheté Isonat), idéale pour le confort d'été et un bilan carbone très bas.",
            },
            {
                question: "Pourquoi l'artisan m'ajoute-t-il une membrane Vario Isover ?",
                answer: "La membrane hydro-régulante (ex: Vario) posée sur la laine de verre est indispensable pour garantir l'étanchéité à l'air du bâti et éviter que la vapeur de la maison ne vienne mouiller l'isolant.",
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
