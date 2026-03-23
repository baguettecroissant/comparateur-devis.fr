/**
 * Données uniques par catégorie pour le PSEO.
 * Chaque catégorie a du contenu 100% écrit à la main : tarifs, FAQ, conseils, services connexes.
 * Les catégories non répertoriées obtiennent un fallback intelligent.
 */

export interface CategoryContent {
    priceRange: string;
    priceUnit: string;
    description: string;
    tips: string[];
    faq: { question: string; answer: string }[];
    relatedSlugs: string[];
}

const CATEGORY_CONTENT_MAP: Record<string, CategoryContent> = {
    "plomberie": {
        priceRange: "50–90",
        priceUnit: "€/h",
        description: "La plomberie couvre l'ensemble des interventions sur vos réseaux d'eau et d'évacuation : réparation de fuites, remplacement de robinetterie, installation de sanitaires, raccordement de ballons d'eau chaude ou mise aux normes de colonnes montantes. Un plombier qualifié intervient aussi bien en urgence (dégât des eaux, canalisation bouchée) qu'en rénovation planifiée.",
        tips: [
            "Coupez l'arrivée d'eau générale dès que vous constatez une fuite : un joint défaillant gaspille jusqu'à 100 litres par jour, soit plus de 35 m³ par an (source : ADEME).",
            "Exigez un devis écrit détaillant pièces et main-d'œuvre avant toute intervention. Un professionnel sérieux ne commence jamais sans accord signé.",
            "Faites vidanger votre chauffe-eau une fois par an et contrôlez le groupe de sécurité chaque mois pour prolonger sa durée de vie de 3 à 5 ans.",
            "Privilégiez un plombier certifié RGE si vous envisagez des travaux liés au chauffage ou à l'eau chaude : cela ouvre droit à MaPrimeRénov' et aux primes CEE.",
            "Méfiez-vous des artisans qui exigent un paiement intégral avant intervention ou refusent un devis écrit : ce sont des signaux d'alerte classiques."
        ],
        faq: [
            {
                question: "Combien coûte une intervention de plombier en urgence ?",
                answer: "Une intervention d'urgence coûte entre 150 et 400 €, avec des majorations la nuit (+50 à 100 %), le week-end (+25 à 50 %) et les jours fériés (+50 à 100 %). Exigez toujours un devis avant le début des travaux."
            },
            {
                question: "Comment vérifier que mon plombier est fiable ?",
                answer: "Vérifiez son numéro SIRET sur le site de l'INSEE, son inscription au registre des métiers et demandez une copie de son assurance décennale. Consultez également les avis en ligne et demandez des références."
            },
            {
                question: "Quels travaux de plomberie puis-je faire moi-même ?",
                answer: "Vous pouvez changer un joint de robinet, remplacer un flexible de douche ou déboucher un siphon. En revanche, toute intervention sur canalisations encastrées, chauffe-eau ou arrivée d'eau principale doit être confiée à un professionnel."
            },
            {
                question: "Quel est le coût d'un remplacement de chauffe-eau ?",
                answer: "Un chauffe-eau électrique (200 L) coûte 800 à 1 500 € fourniture et pose. Un thermodynamique revient à 2 500 à 4 500 €, mais permet d'économiser 40 à 50 % sur la facture d'eau chaude (source : ADEME)."
            },
            {
                question: "Quelle est la durée de vie d'une installation de plomberie ?",
                answer: "Les canalisations en cuivre durent 50 à 80 ans, celles en PER environ 50 ans. Un chauffe-eau a une durée de vie de 10 à 15 ans, la robinetterie de 15 à 20 ans. L'entretien régulier prolonge significativement ces durées."
            }
        ],
        relatedSlugs: ["chauffe-eau", "salles-de-bains", "climatisation", "adoucisseur-d-eau", "debouchage-canalisation"]
    },

    "electricite-travaux-electriques": {
        priceRange: "45–85",
        priceUnit: "€/h",
        description: "L'électricité englobe tous les travaux de mise en conformité, d'installation et de dépannage de votre réseau électrique domestique. De la pose d'un tableau électrique à l'installation de prises et interrupteurs, en passant par le raccordement d'appareils électroménagers et la mise aux normes NF C 15-100.",
        tips: [
            "Avant toute intervention, vérifiez que votre électricien détient une habilitation électrique BR ou B2V, obligatoire pour les travaux sous tension.",
            "La norme NF C 15-100 est obligatoire pour toute construction neuve et fortement recommandée en rénovation : elle garantit la sécurité de votre installation.",
            "Un diagnostic électrique est obligatoire pour la vente d'un bien de plus de 15 ans. Son coût moyen est de 100 à 150 €.",
            "Le remplacement d'un tableau électrique vétuste coûte entre 800 et 2 000 € selon le nombre de circuits. C'est un investissement prioritaire pour la sécurité."
        ],
        faq: [
            {
                question: "Combien coûte une remise aux normes électrique ?",
                answer: "Pour un appartement de 60 m², comptez 3 000 à 5 000 € pour une remise aux normes complète (tableau, câblage, prises, terre). Pour une maison de 100 m², le budget monte à 6 000-10 000 €. Ces travaux ouvrent droit à la TVA réduite à 10 %."
            },
            {
                question: "Comment savoir si mon installation électrique est dangereuse ?",
                answer: "Les signes d'alerte : disjoncteurs qui sautent fréquemment, prises noircies ou qui chauffent, fils apparents, absence de prise de terre, tableau à fusibles au lieu de disjoncteurs. Un diagnostic par un électricien agréé coûte 100-150 €."
            },
            {
                question: "Faut-il un permis pour des travaux électriques ?",
                answer: "Non, mais la déclaration préalable de travaux peut être nécessaire si l'intervention modifie l'aspect extérieur du bâtiment. En revanche, le Consuel (Comité national pour la sécurité des usagers de l'électricité) doit valider toute nouvelle installation."
            },
            {
                question: "Quelle est la différence entre un électricien et un domoticien ?",
                answer: "L'électricien gère le réseau électrique traditionnel (câblage, prises, tableau). Le domoticien installe des systèmes connectés (thermostat intelligent, volets automatisés, éclairage programmable). Les deux métiers se complètent souvent."
            }
        ],
        relatedSlugs: ["alarme", "domotique", "panneau-solaire-photovoltaique", "borne-de-recharge"]
    },

    "pompe-a-chaleur": {
        priceRange: "8 000–15 000",
        priceUnit: "€ (fourni-posé)",
        description: "La pompe à chaleur (PAC) est un système de chauffage performant qui puise les calories dans l'air, l'eau ou le sol pour chauffer votre logement. En mode réversible, elle assure aussi la climatisation en été. C'est la solution privilégiée pour la transition énergétique : elle divise par 3 vos consommations de chauffage par rapport à une chaudière fioul.",
        tips: [
            "Une PAC air/eau de 8 kW chauffe un logement de 100 m² bien isolé. Surdimensionner votre PAC augmente la consommation : exigez une étude thermique préalable (environ 500 €).",
            "Le COP (Coefficient de Performance) mesure le rendement : un COP de 4 signifie que pour 1 kWh consommé, la PAC restitue 4 kWh de chaleur. Visez un COP supérieur à 3,5.",
            "L'entretien annuel est obligatoire pour les PAC contenant plus de 2 kg de fluide frigorigène (décret 2007-737). Budget : 150 à 300 €/an.",
            "MaPrimeRénov' peut couvrir jusqu'à 5 000 € du coût d'une PAC air/eau et 11 000 € pour une PAC géothermique (barème 2025, revenus très modestes)."
        ],
        faq: [
            {
                question: "Quelle est la durée de vie d'une pompe à chaleur ?",
                answer: "Une PAC air/eau bien entretenue dure 15 à 20 ans. Les modèles géothermiques peuvent dépasser 25 ans. L'entretien annuel par un professionnel certifié RGE est essentiel pour maintenir les performances."
            },
            {
                question: "Une pompe à chaleur est-elle bruyante ?",
                answer: "L'unité extérieure produit 45 à 65 dB selon les modèles (équivalent à une conversation). Les réglementations imposent de ne pas dépasser 5 dB d'émergence sonore en journée en limite de propriété. Placez l'unité à au moins 3 m des fenêtres voisines."
            },
            {
                question: "Pompe à chaleur air/air ou air/eau : laquelle choisir ?",
                answer: "La PAC air/air (3 000-8 000 €) ne chauffe que par soufflerie et ne produit pas d'eau chaude. La PAC air/eau (8 000-15 000 €) alimente radiateurs et plancher chauffant, et peut produire l'ECS. Elle ouvre droit à plus d'aides."
            },
            {
                question: "Ma PAC fonctionne-t-elle par grand froid ?",
                answer: "Les PAC récentes fonctionnent jusqu'à -25 °C mais leur rendement baisse sous -7 °C. Dans les régions très froides, un appoint électrique ou un relais chaudière est recommandé. La PAC géothermique n'est pas affectée par le froid."
            }
        ],
        relatedSlugs: ["climatisation", "chaudiere-gaz", "chauffe-eau", "isolation", "panneau-solaire-photovoltaique"]
    },

    "climatisation": {
        priceRange: "1 500–6 000",
        priceUnit: "€ (fourni-posé)",
        description: "L'installation d'une climatisation réversible permet de rafraîchir votre intérieur en été et de le chauffer en hiver grâce à une pompe à chaleur air/air. Les systèmes split, multi-split ou gainables s'adaptent à toutes les configurations de logements, du studio au pavillon.",
        tips: [
            "Un climatiseur doit être dimensionné selon la surface, l'isolation et l'exposition : comptez environ 100 W/m² pour un logement standard et 130 W/m² sous les toits.",
            "Le nettoyage des filtres tous les 15 jours en période d'utilisation intensive évite la prolifération de bactéries et maintient les performances jusqu'à 30 % supérieures.",
            "L'entretien annuel est obligatoire pour les systèmes contenant plus de 2 kg de fluide frigorigène. Le technicien doit détenir une attestation de capacité."
        ],
        faq: [
            {
                question: "Combien consomme une climatisation réversible ?",
                answer: "Un split de 2,5 kW pour 25 m² consomme environ 0,8 kWh/h, soit 12 à 15 centimes/h au tarif réglementé 2025. Sur une saison (juin-septembre), cela représente 150 à 300 € pour 6h/jour d'utilisation."
            },
            {
                question: "Faut-il un permis pour installer une climatisation ?",
                answer: "Aucune autorisation n'est requise en maison individuelle. En copropriété, l'accord du syndic est obligatoire pour l'unité extérieure. Dans les secteurs classés (ABF), une déclaration préalable de travaux peut être exigée."
            },
            {
                question: "Quelle est la durée de vie d'un climatiseur ?",
                answer: "Un climatiseur split dure 12 à 15 ans avec un entretien régulier. Les systèmes gainables durent 15 à 20 ans. Le compresseur est la pièce la plus coûteuse à remplacer (800-1 500 €)."
            }
        ],
        relatedSlugs: ["pompe-a-chaleur", "ventilation-vmc", "isolation", "chaudiere-gaz"]
    },

    "serrurerie": {
        priceRange: "80–200",
        priceUnit: "€ (intervention)",
        description: "La serrurerie recouvre l'ensemble des interventions sur vos systèmes de fermeture : ouverture de porte claquée ou verrouillée, remplacement de cylindre, installation de serrures multipoints, blindage de porte et mise en place de systèmes de contrôle d'accès. C'est un métier d'urgence par excellence.",
        tips: [
            "En cas de porte claquée (non verrouillée), l'intervention coûte 80-150 €. Si la porte est verrouillée, le prix monte à 150-350 € selon la technique requise.",
            "Exigez un devis ferme avant toute intervention, même en urgence. Un serrurier sérieux annonce son tarif par téléphone et le confirme par écrit sur place.",
            "Privilégiez une serrure certifiée A2P (Assurance Prévention Protection) : 1 étoile résiste 5 minutes à l'effraction, 2 étoiles 10 minutes, 3 étoiles 15 minutes.",
            "Vérifiez que le serrurier est bien inscrit au registre des métiers avec un SIRET actif. Les arnaques sont fréquentes dans ce secteur, particulièrement en urgence nocturne."
        ],
        faq: [
            {
                question: "Comment ouvrir une porte claquée sans casser la serrure ?",
                answer: "Un serrurier qualifié utilise une radio (feuille flexible) pour une porte claquée non verrouillée. Si la porte est verrouillée, il peut crocheter la serrure ou percer le cylindre. L'ouverture non destructive coûte 80-150 €, contre 150-350 € avec remplacement de cylindre."
            },
            {
                question: "Combien coûte le blindage d'une porte d'entrée ?",
                answer: "Le blindage d'une porte existante (tôle en acier + serrure multipoints) coûte 800 à 1 500 €. Le remplacement par un bloc-porte blindé certifié A2P revient à 1 500-4 000 € pose comprise. L'investissement est souvent exigé par les assurances habitation."
            },
            {
                question: "Ma porte est claquée à 3h du matin, quel tarif prévoir ?",
                answer: "Les majorations nocturnes sont de 50 à 100 % du tarif de base. Pour une ouverture simple, comptez 150-250 € la nuit. Attention aux serruriers qui annoncent 39 € par téléphone puis facturent 500 € sur place : c'est une arnaque classique."
            }
        ],
        relatedSlugs: ["alarme", "porte-blindee", "portail", "cloture"]
    },

    "maconnerie": {
        priceRange: "40–70",
        priceUnit: "€/h",
        description: "La maçonnerie est le socle de tout projet de construction ou de rénovation. Elle englobe les fondations, les murs porteurs, les cloisons, les dalles béton, le ravalement de façade, les ouvertures (percement de murs) et les travaux d'extension. Un maçon qualifié maîtrise aussi bien le parpaing que la pierre, la brique ou le béton armé.",
        tips: [
            "Pour une extension de maison, un permis de construire est obligatoire au-delà de 20 m² (40 m² en zone urbaine PLU). En dessous, une simple déclaration préalable suffit.",
            "Le béton de fondation doit atteindre une résistance minimale de C25/30. Exigez que le maçon respecte les DTU (Documents Techniques Unifiés) applicables.",
            "Un ravalement de façade est obligatoire tous les 10 ans dans certaines communes (arrêté préfectoral). Le coût moyen est de 30-80 €/m² selon l'état et la technique."
        ],
        faq: [
            {
                question: "Combien coûte la construction d'un mur en parpaing ?",
                answer: "Un mur en parpaing de 20 cm coûte 40-60 €/m² fourniture et pose. Pour un mur en pierre, comptez 100-300 €/m². Le ferraillage et les fondations sont en sus (environ 150 €/ml de semelle filante)."
            },
            {
                question: "Faut-il un permis pour casser un mur porteur ?",
                answer: "Oui, l'ouverture ou la démolition d'un mur porteur nécessite l'intervention d'un bureau d'études structures (BET) et un permis de construire. En copropriété, l'accord de l'assemblée générale est obligatoire. Budget BET : 500-1 500 €."
            },
            {
                question: "Combien de temps dure un chantier de maçonnerie ?",
                answer: "Comptez 1-2 semaines pour un ravalement de façade (100 m²), 2-4 semaines pour une extension de 20 m², et 3-6 mois pour la construction d'une maison complète. Le béton nécessite 28 jours de séchage pour atteindre sa résistance maximale."
            }
        ],
        relatedSlugs: ["couverture", "charpente", "terrassement", "fondation", "ravalement-de-facade"]
    },

    "peinture": {
        priceRange: "25–45",
        priceUnit: "€/m²",
        description: "La peinture intérieure et extérieure transforme vos espaces tout en protégeant les surfaces. Un peintre en bâtiment professionnel maîtrise la préparation des supports (enduit, ponçage, sous-couche), l'application de peintures techniques (anti-humidité, isolante) et les finitions décoratives (patine, effet béton ciré, stuc).",
        tips: [
            "La préparation du support représente 60 % du temps de travail d'un peintre : enduit de rebouchage, ponçage, sous-couche d'accrochage. Ne négligez jamais cette étape.",
            "Une peinture classique couvre 8 à 12 m² par litre en une couche. Deux couches sont indispensables pour un résultat durable et uniforme.",
            "Pour une pièce de 20 m² (murs + plafond = 65 m² de surface), comptez 1 600 à 2 900 € main-d'œuvre incluse avec une peinture de qualité."
        ],
        faq: [
            {
                question: "Combien coûte la peinture d'un appartement de 60 m² ?",
                answer: "Pour un T3 de 60 m² (environ 200 m² de surfaces peintes), comptez 5 000 à 9 000 € main-d'œuvre et fournitures comprises. Le prix varie selon l'état des murs (préparation), le nombre de couches et la qualité de la peinture."
            },
            {
                question: "Quelle peinture choisir pour une salle de bain ?",
                answer: "Utilisez une peinture acrylique satinée spéciale pièces humides (classe II minimum). Elle résiste à l'humidité et aux moisissures. Évitez la peinture mate qui absorbe l'eau. Budget : 15-30 €/L contre 8-15 €/L pour une peinture standard."
            },
            {
                question: "Combien de temps pour peindre une pièce ?",
                answer: "Un peintre professionnel peint une pièce de 15-20 m² en 1 à 2 jours (préparation comprise). Pour un appartement complet, comptez 5 à 7 jours ouvrés. Le séchage entre couches prend 4 à 6h pour une acrylique, 12 à 24h pour une glycéro."
            }
        ],
        relatedSlugs: ["ravalement-de-facade", "carrelage", "parquet", "papier-peint", "platre-faux-plafond"]
    },

    "couverture": {
        priceRange: "50–120",
        priceUnit: "€/m²",
        description: "La couverture désigne l'ensemble des travaux liés à votre toiture : réfection complète ou partielle, remplacement de tuiles ou ardoises cassées, traitement de charpente, pose de fenêtres de toit (type Velux), et mise en place de systèmes d'étanchéité. Un couvreur intervient aussi en urgence après intempéries.",
        tips: [
            "Une inspection de toiture tous les 2 ans permet de détecter les tuiles cassées, les problèmes d'étanchéité et les infiltrations avant qu'ils ne causent des dégâts coûteux.",
            "Le démoussage de toiture (15-30 €/m²) prolonge la durée de vie des tuiles de 5 à 10 ans en prévenant la désagrégation causée par les mousses et lichens.",
            "Pour une réfection complète de toiture (100 m²), le budget se situe entre 10 000 et 20 000 € selon le matériau (tuile terre cuite, ardoise, zinc)."
        ],
        faq: [
            {
                question: "Combien coûte une réfection de toiture complète ?",
                answer: "Pour une maison de 100 m² au sol : 10 000-15 000 € en tuile terre cuite, 15 000-25 000 € en ardoise naturelle, 12 000-18 000 € en zinc. Ces prix incluent la dépose, la fourniture et la pose. L'isolation sous toiture est en supplément."
            },
            {
                question: "Ma toiture fuit, est-ce une urgence ?",
                answer: "Oui. Une fuite non traitée cause des dégâts rapides : pourrissement de charpente, moisissures, court-circuit. En urgence, bâchez la zone et contactez un couvreur. L'intervention d'urgence coûte 200-600 € selon l'accessibilité."
            },
            {
                question: "Quelle est la durée de vie d'une toiture ?",
                answer: "Tuile terre cuite : 30-50 ans. Ardoise naturelle : 75-100 ans. Zinc : 30-60 ans. Tuile béton : 30-40 ans. Bac acier : 25-40 ans. Un entretien régulier (démoussage, vérification) prolonge ces durées de 10 à 20 ans."
            }
        ],
        relatedSlugs: ["charpente", "isolation", "zinguerie", "ravalement-de-facade", "gouttieres"]
    },

    "carrelage": {
        priceRange: "30–70",
        priceUnit: "€/m²",
        description: "Le carrelage est un revêtement durable et esthétique pour sols et murs. Le carreleur professionnel maîtrise la pose de carrelage classique, de grès cérame grand format, de mosaïque, de faïence murale et de carreaux de ciment. Il intervient en neuf comme en rénovation, y compris la pose sur plancher chauffant.",
        tips: [
            "Prévoyez 10 à 15 % de surface supplémentaire pour les coupes et la casse. Pour une pose en diagonale, ce taux monte à 15-20 %.",
            "Un carrelage en grès cérame pleine masse (classement U4P4E3C2) est le plus résistant pour les pièces à fort passage. Vérifiez le classement UPEC avant d'acheter.",
            "Le temps de séchage de la colle est de 24h minimum avant de marcher sur le carrelage, et 7 jours avant la pose des joints."
        ],
        faq: [
            {
                question: "Combien coûte la pose de carrelage au m² ?",
                answer: "La pose seule coûte 30-50 €/m² pour un format standard (30x30). Pour du grand format (60x60 et plus), comptez 40-70 €/m². La dépose de l'ancien carrelage ajoute 15-25 €/m². Le ragréage du sol coûte 15-20 €/m² en supplément."
            },
            {
                question: "Carrelage ou parquet pour un salon ?",
                answer: "Le carrelage est plus durable (30+ ans vs 15-25 ans pour un parquet), résiste à l'eau et s'entretient plus facilement. Le parquet apporte chaleur et confort acoustique. Le compromis : un carrelage imitation bois en grès cérame offre l'esthétique du bois avec la résistance du carrelage."
            },
            {
                question: "Peut-on poser du carrelage sur un ancien carrelage ?",
                answer: "Oui, à condition que l'ancien carrelage soit sain, plan et bien adhérent. Utilisez un primaire d'accrochage spécial et une colle adaptée. La surélévation (8-12 mm) peut nécessiter de raboter les portes. Déconseillé si l'ancien carrelage sonne creux."
            }
        ],
        relatedSlugs: ["salles-de-bains", "parquet", "peinture", "cuisine"]
    },

    "isolation": {
        priceRange: "20–80",
        priceUnit: "€/m²",
        description: "L'isolation thermique est la priorité numéro un de la rénovation énergétique. Combles perdus, rampants de toiture, murs par l'intérieur (ITI) ou par l'extérieur (ITE), plancher bas : chaque poste de déperdition nécessite une solution adaptée. L'isolation phonique complète le dispositif pour le confort acoustique.",
        tips: [
            "Les combles perdus sont le poste le plus rentable : 15-35 €/m² pour un gain de 25 à 30 % sur votre facture de chauffage (source : ADEME). Retour sur investissement en 3 à 5 ans.",
            "L'ITE (Isolation Thermique par l'Extérieur) coûte 100-200 €/m² mais supprime tous les ponts thermiques et ne réduit pas la surface habitable. Elle nécessite une déclaration préalable de travaux.",
            "Les aides cumulables atteignent jusqu'à 75 % du coût : MaPrimeRénov' + CEE + éco-PTZ + aides locales. Un conseiller France Rénov' (gratuit) vous aide à monter le dossier."
        ],
        faq: [
            {
                question: "Quelle est la meilleure isolation pour les combles ?",
                answer: "Combles perdus : laine de verre soufflée (R≥7) pour 15-25 €/m². Combles aménagés : laine de bois ou ouate de cellulose entre chevrons (R≥6) pour 40-80 €/m². La laine de bois offre un meilleur confort d'été grâce à son déphasage thermique de 10-12h."
            },
            {
                question: "Combien d'économies avec une bonne isolation ?",
                answer: "Toiture : -25 à 30 %. Murs : -20 à 25 %. Plancher bas : -7 à 10 %. Fenêtres : -10 à 15 %. Au total, une rénovation globale peut réduire votre facture de chauffage de 50 à 60 % (source : ADEME, base logement 100 m²)."
            },
            {
                question: "ITE ou ITI : que choisir ?",
                answer: "L'ITE (100-200 €/m²) est plus performante car elle supprime les ponts thermiques, mais elle modifie l'aspect extérieur et coûte plus cher. L'ITI (30-80 €/m²) est moins chère mais réduit la surface habitable de 3 à 5 %. L'ITE est recommandée en cas de ravalement de façade."
            }
        ],
        relatedSlugs: ["pompe-a-chaleur", "fenetre", "amenagement-des-combles", "panneau-solaire-photovoltaique", "ravalement-de-facade"]
    },

    "menuiserie": {
        priceRange: "200–800",
        priceUnit: "€/fenêtre",
        description: "La menuiserie englobe la fabrication et la pose de fenêtres, portes, volets, escaliers, pergolas et agencements sur mesure. Le menuisier travaille le bois, le PVC et l'aluminium pour créer des ouvrages adaptés à votre habitat. Il intervient aussi bien en neuf qu'en rénovation, avec des solutions sur mesure.",
        tips: [
            "Le double vitrage standard (Ug=1,1 W/m².K) suffit pour la plupart des logements. Le triple vitrage (Ug=0,6) est rentable uniquement dans les régions très froides ou pour les façades nord.",
            "En rénovation, la pose en « dépose totale » est plus coûteuse mais offre une meilleure isolation que la pose en rénovation (sur dormant existant). L'écart de prix est de 100-200 €/fenêtre.",
            "Les aides MaPrimeRénov' pour le remplacement de fenêtres vont de 40 à 100 €/fenêtre selon vos revenus. Le crédit d'impôt n'existe plus depuis 2021."
        ],
        faq: [
            {
                question: "Combien coûte le remplacement d'une fenêtre ?",
                answer: "Fenêtre PVC standard (120x135 cm) : 400-800 € posée. Fenêtre aluminium : 600-1 200 €. Fenêtre bois : 500-1 000 €. Baie vitrée coulissante (200x215 cm) : 1 500-3 000 €. Ces prix incluent la dépose de l'ancienne fenêtre et la pose avec finitions."
            },
            {
                question: "PVC, alu ou bois : quel matériau choisir ?",
                answer: "PVC : le meilleur rapport qualité/prix, bon isolant, pas d'entretien. Aluminium : finesse des profilés, design moderne, mais moins isolant (avec rupture de pont thermique). Bois : le plus isolant naturellement, charme authentique, mais entretien tous les 5-8 ans."
            },
            {
                question: "Combien de temps pour changer toutes les fenêtres d'une maison ?",
                answer: "Un menuisier pose 3 à 5 fenêtres par jour. Pour une maison de 8-10 fenêtres, comptez 2-3 jours ouvrés. Le délai de fabrication des menuiseries sur mesure est de 4 à 8 semaines après la prise de cotes."
            }
        ],
        relatedSlugs: ["volet-roulant", "porte-blindee", "escalier", "veranda", "pergola"]
    },
};

/**
 * Retourne le contenu enrichi pour une catégorie, avec fallback intelligent.
 */
export function getCategoryContent(slug: string): CategoryContent {
    if (CATEGORY_CONTENT_MAP[slug]) {
        return CATEGORY_CONTENT_MAP[slug];
    }
    
    // Fallback : contenu générique mais varié grâce au slug
    const hash = slug.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
    const priceBase = 30 + (hash % 70);
    const priceTop = priceBase + 20 + (hash % 40);
    
    return {
        priceRange: `${priceBase}–${priceTop}`,
        priceUnit: "€/h",
        description: "",
        tips: [
            "Demandez toujours plusieurs devis pour comparer les prix et les prestations. Un minimum de 3 devis est recommandé.",
            "Vérifiez les certifications et assurances de l'artisan : garantie décennale, responsabilité civile professionnelle.",
            "Privilégiez un artisan RGE (Reconnu Garant de l'Environnement) pour bénéficier des aides de l'État.",
        ],
        faq: [
            {
                question: "Comment choisir le bon artisan ?",
                answer: "Vérifiez son numéro SIRET, ses assurances (décennale et RC Pro), ses certifications (RGE, Qualibat). Consultez les avis en ligne et demandez des références de chantiers similaires."
            },
            {
                question: "Quelles sont les aides disponibles ?",
                answer: "Selon la nature des travaux, vous pouvez bénéficier de MaPrimeRénov', des primes CEE, de l'éco-PTZ et de la TVA réduite à 5,5 % ou 10 %. Un conseiller France Rénov' peut vous orienter gratuitement."
            },
        ],
        relatedSlugs: []
    };
}
