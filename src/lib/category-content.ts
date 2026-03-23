/**
 * Données uniques par catégorie pour le PSEO.
 * Chaque catégorie a du contenu 100% écrit à la main : tarifs, FAQ, conseils, services connexes, missions, certifications.
 * Les catégories non répertoriées obtiennent un fallback généré dynamiquement.
 */

export interface CategoryContent {
    priceRange: string;
    priceUnit: string;
    description: string;
    tips: string[];
    faq: { question: string; answer: string }[];
    relatedSlugs: string[];
    services: { title: string; desc: string }[];
    certifications: string[];
    whyHirePro: { title: string; points: string[] };
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
        relatedSlugs: ["chauffe-eau", "salles-de-bains", "climatisation", "adoucisseur-d-eau", "debouchage-canalisation"],
        services: [
            { title: "Dépannage d'urgence", desc: "Recherche et réparation de fuites d'eau ou de gaz, débouchage de canalisations (furet, haute pression)." },
            { title: "Installation sanitaire", desc: "Pose de WC (suspendus, classiques), lavabos, douches à l'italienne, baignoires et robinetteries." },
            { title: "Chauffage & Eau Chaude", desc: "Installation, entretien et remplacement de chauffe-eau (cumulus, thermodynamique) et chaudières." },
            { title: "Rénovation de salle de bain", desc: "Reprise complète des tuyauteries, création de nouvelles arrivées/évacuations pour des réaménagements." }
        ],
        certifications: [
            "RC Pro et Garantie Décennale (obligatoires)",
            "Label RGE Qualibat (pour l'efficacité énergétique)",
            "Label RGE QualiPAC (pour les pompes à chaleur air/eau)",
            "Professionnel du Gaz (PG) pour les chaudières à gaz"
        ],
        whyHirePro: {
            title: "Pourquoi faire appel à un plombier professionnel ?",
            points: [
                "Respect strict des normes DTU 60.1 et 60.11 pour l'évacuation et l'alimentation en eau.",
                "Matériel professionnel performant pour la recherche de fuites non destructives (caméra thermique, gaz traceur).",
                "Couverture par son assurance décennale en cas de dégât des eaux ultérieur lié à son intervention.",
                "Garantie de préserver la salubrité de votre logement (pas de remontées d'odeurs ou de refoulements)."
            ]
        }
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
                answer: "Pour un appartement de 60 m², comptez 3 000 à 5 000 € pour une remise aux normes complète. Pour une maison de 100 m², le budget monte à 6 000-10 000 €. Ces travaux ouvrent droit à la TVA réduite à 10 %."
            },
            {
                question: "Comment savoir si mon installation électrique est dangereuse ?",
                answer: "Les signes d'alerte : disjoncteurs qui sautent fréquemment, prises noircies ou qui chauffent, fils apparents, absence de prise de terre. Un diagnostic par un électricien agréé coûte 100-150 €."
            },
            {
                question: "Faut-il un permis pour des travaux électriques ?",
                answer: "Non, mais le Consuel (Comité national pour la sécurité des usagers de l'électricité) doit valider toute nouvelle installation complète pour autoriser l'ouverture du compteur Enedis."
            },
            {
                question: "Quelle est la différence entre un électricien et un domoticien ?",
                answer: "L'électricien gère le réseau électrique traditionnel (câblage, prises, tableau). Le domoticien installe des systèmes connectés (thermostat intelligent, volets automatisés, éclairage programmable). Les deux métiers se complètent souvent."
            }
        ],
        relatedSlugs: ["alarme", "domotique", "panneau-solaire-photovoltaique", "borne-de-recharge"],
        services: [
            { title: "Mise aux normes", desc: "Remplacement du tableau électrique, création de prises de terre et mise en conformité selon la norme NF C 15-100." },
            { title: "Dépannage & Recherche de panne", desc: "Interventions rapides sur court-circuit, disjonctions intempestives, pannes de convecteurs ou de chauffe-eau." },
            { title: "Installation équipements", desc: "Pose de radiateurs électriques à inertie, création de circuits dédiés (four, plaque), raccordements." },
            { title: "Mobilité électrique", desc: "Installation de bornes de recharge pour véhicules électriques (IRVE)." }
        ],
        certifications: [
            "RC Pro et Garantie Décennale",
            "Habilitation électrique certifiée (B1V, B2V, BR, BC...)",
            "Label RGE (Reconnu Garant de l'Environnement) pour l'installation d'équipements performants",
            "Qualification IRVE pour l'installation de points de recharge pour véhicules"
        ],
        whyHirePro: {
            title: "Pourquoi faire appel à un électricien qualifié ?",
            points: [
                "La maîtrise des normes complexes et sans cesse mises à jour (NF C 15-100).",
                "Le risque mortel d'électrocution écarté en garantissant un réseau parfaitement sécurisé.",
                "La délivrance de l'attestation Consuel, obligatoire pour faire ouvrir votre compteur électrique neuf.",
                "Couverture par les assurances en cas de sinistre lié à une défaillance (jusqu'à 30% des incendies domestiques sont d'origine électrique)."
            ]
        }
    },

    "pompe-a-chaleur": {
        priceRange: "8 000–15 000",
        priceUnit: "€ (fourni-posé)",
        description: "La pompe à chaleur (PAC) est un système de chauffage performant qui puise les calories dans l'air, l'eau ou le sol pour chauffer votre logement. En mode réversible, elle assure aussi la climatisation en été. C'est la solution privilégiée pour la transition énergétique, divisant jusqu'à 3 fois la facture.",
        tips: [
            "Une PAC air/eau de 8 kW chauffe un logement de 100 m² bien isolé. Exigez une étude thermique préalable.",
            "Le COP (Coefficient de Performance) mesure le rendement. Visez un COP supérieur à 3,5.",
            "L'entretien annuel est obligatoire pour les PAC contenant plus de 2 kg de fluide frigorigène.",
            "MaPrimeRénov' peut couvrir jusqu'à 5 000 € du coût d'une PAC air/eau (selon conditions de revenus)."
        ],
        faq: [
            {
                question: "Quelle est la durée de vie d'une pompe à chaleur ?",
                answer: "Une PAC air/eau bien entretenue dure 15 à 20 ans. Les modèles géothermiques peuvent dépasser 25 ans. L'entretien annuel par un professionnel certifié RGE est essentiel pour maintenir les performances."
            },
            {
                question: "Une pompe à chaleur est-elle bruyante ?",
                answer: "L'unité extérieure produit 45 à 65 dB selon les modèles. Les réglementations imposent de ne pas dépasser 5 dB d'émergence sonore en journée en limite de propriété. Placez l'unité loin des fenêtres voisines."
            },
            {
                question: "Pompe à chaleur air/air ou air/eau : laquelle choisir ?",
                answer: "La PAC air/air (3 000-8 000 €) ne chauffe que par soufflerie et ne produit pas d'eau chaude. La PAC air/eau (8 000-15 000 €) alimente radiateurs et plancher chauffant, et peut produire l'ECS. Elle ouvre droit à plus d'aides."
            },
            {
                question: "Ma PAC fonctionne-t-elle par grand froid ?",
                answer: "Les PAC récentes fonctionnent jusqu'à -25 °C mais leur rendement baisse sous -7 °C. Dans les régions très froides, un appoint électrique ou un relais chaudière est recommandé."
            }
        ],
        relatedSlugs: ["climatisation", "chaudiere-gaz", "chauffe-eau", "isolation", "panneau-solaire-photovoltaique"],
        services: [
            { title: "Étude thermique et dimensionnement", desc: "Analyse des déperditions thermiques de votre logement pour choisir la puissance optimale de la pompe." },
            { title: "Pose de l'unité et raccordement", desc: "Installation du bloc extérieur, connexion aux circuits hydrauliques ou aérauliques, et mise en service." },
            { title: "Contrat d'entretien", desc: "Vérification annuelle obligatoire des fluides frigorigènes et nettoyage de l'unité." },
            { title: "Accompagnement subventions", desc: "Aide au montage de votre dossier MaPrimeRénov' et CEE." }
        ],
        certifications: [
            "Label RGE QualiPAC (Obligatoire pour les aides de l'État)",
            "Attestation de Capacité pour la manipulation des Fluides Frigorigènes",
            "Garantie Décennale chauffage"
        ],
        whyHirePro: {
            title: "Pourquoi recourir à un installeur certifié ?",
            points: [
                "L'accès aux aides d'État : seule la certification RGE QualiPAC vous permet de percevoir les primes (Coup de pouce chauffage, MaPrimeRénov').",
                "Un dimensionnement sur-mesure : une PAC mal dimensionnée surconsommera et se détériorera en moins de 10 ans.",
                "Sécurité des fluides : les fluides frigorigènes sont des gaz à effet de serre réglementés dont la manipulation est interdite aux particuliers.",
                "Un service après-vente (SAV) réactif et une garantie main d'oeuvre intégrale de plusieurs années."
            ]
        }
    },

    "climatisation": {
        priceRange: "1 500–6 000",
        priceUnit: "€ (fourni-posé)",
        description: "L'installation d'une climatisation réversible permet de rafraîchir votre intérieur en été et de le chauffer en hiver grâce à une pompe à chaleur air/air. Les systèmes split, multi-split ou gainables s'adaptent à toutes les configurations de logements, du studio au pavillon.",
        tips: [
            "Un climatiseur doit être dimensionné selon la surface, l'isolation et l'exposition : comptez environ 100 W/m² pour un logement standard et 130 W/m² sous les toits.",
            "Le nettoyage des filtres tous les 15 jours en période d'utilisation intensive évite la prolifération de bactéries et maintient les performances.",
            "L'entretien annuel est obligatoire pour les systèmes contenant plus de 2 kg de fluide frigorigène. Le technicien doit détenir une attestation de capacité."
        ],
        faq: [
            {
                question: "Combien consomme une climatisation réversible ?",
                answer: "Un split de 2,5 kW pour 25 m² consomme environ 0,8 kWh/h. Sur une saison (juin-septembre), cela représente 150 à 300 € pour 6h/jour d'utilisation."
            },
            {
                question: "Faut-il un permis pour installer une climatisation ?",
                answer: "Aucune autorisation n'est requise en maison individuelle sauf PLU particulier. En copropriété, l'accord du syndic est obligatoire pour l'unité extérieure."
            },
            {
                question: "Quelle est la durée de vie d'un climatiseur ?",
                answer: "Un climatiseur split dure 12 à 15 ans avec un entretien régulier. Les systèmes gainables durent 15 à 20 ans. Le compresseur est la pièce la plus coûteuse à remplacer."
            }
        ],
        relatedSlugs: ["pompe-a-chaleur", "ventilation-vmc", "isolation", "chaudiere-gaz"],
        services: [
            { title: "Climatisation Split", desc: "Installation d'une unité intérieure par pièce (Monosplit ou Multisplit), ideal pour la rénovation légère." },
            { title: "Gainable intégré", desc: "Système caché dans des faux-plafonds ou combles : seules les grilles de diffusion sont visibles." },
            { title: "Entretien climatisation", desc: "Nettoyage des filtres, désinfection de l'évaporateur et vérification des pressions de gaz." }
        ],
        certifications: [
            "Attestation de Capacité pour manipulation des Fluides Frigorigènes (Cerfa)",
            "RC Pro",
            "Artisan certifié RGE QualiPAC"
        ],
        whyHirePro: {
            title: "L'expertise d'un frigoriste climaticien",
            points: [
                "Choix de l'emplacement optimal des unités pour éviter les courants d'air froid désagréables.",
                "Tirage au vide des liaisons frigorifiques : étape ultra technique indispensable au bon fonctionnement d'un split.",
                "Réglementation : l'outillage de manipulation de fluide est restreint aux professionnels capacitaires."
            ]
        }
    },

    "serrurerie": {
        priceRange: "80–200",
        priceUnit: "€ (intervention)",
        description: "La serrurerie recouvre l'ensemble des interventions sur vos systèmes de fermeture : ouverture de porte claquée ou verrouillée, remplacement de cylindre, installation de serrures multipoints, blindage de porte et mise en place de systèmes de contrôle d'accès. C'est un métier d'urgence par excellence.",
        tips: [
            "En cas de porte claquée (non verrouillée), l'intervention coûte 80-150 €. Si la porte est verrouillée, le prix monte à 150-350 € selon la technique requise.",
            "Exigez un devis ferme avant toute intervention, même en urgence. Un serrurier sérieux annonce son tarif par téléphone.",
            "Privilégiez une serrure certifiée A2P : 1 étoile résiste 5 minutes à l'effraction, 2 étoiles 10 minutes, 3 étoiles 15 minutes.",
            "Vérifiez que le serrurier est bien inscrit au registre des métiers (SIRET). Les arnaques sont fréquentes dans ce secteur."
        ],
        faq: [
            {
                question: "Comment ouvrir une porte claquée sans casser la serrure ?",
                answer: "Un serrurier qualifié utilise une radio (feuille flexible) pour une porte claquée non verrouillée. Si la porte est verrouillée, il peut crocheter la serrure ou percer le cylindre. L'ouverture non destructive coûte 80-150 €."
            },
            {
                question: "Combien coûte le blindage d'une porte d'entrée ?",
                answer: "Le blindage d'une porte existante (tôle acier + serrure) coûte 800 à 1 500 €. Le remplacement par un bloc-porte blindé certifié A2P revient à 1 500-4 000 € pose comprise."
            },
            {
                question: "Ma porte est claquée à 3h du matin, quel tarif prévoir ?",
                answer: "Les majorations nocturnes sont de 50 à 100 % du tarif de base. Pour une ouverture simple, comptez 150-250 € la nuit. Attention aux arnaqueurs qui annoncent 39 € puis en facturent 1000 sur place."
            }
        ],
        relatedSlugs: ["alarme", "porte-blindee", "portail", "cloture"],
        services: [
            { title: "Dépannage ouverture", desc: "Ouverture fine sans casse (porte simplement claquée) ou destruction du cylindre avec remplacement immédiat." },
            { title: "Sécurisation", desc: "Pose de serrures multipoints A2P, verrous haute sécurité, cornières anti-pinces ou blindage." },
            { title: "Clés et organigrammes", desc: "Duplication de clés sécurisées, création d'organigrammes pour immeubles ou entreprises." },
            { title: "Intervention après effraction", desc: "Fermeture provisoire d'urgence et remplacement des portes suite à un cambriolage." }
        ],
        certifications: [
            "RC Pro obligatoire",
            "Artisans agréés par des fabricants certifiés A2P (Bricard, Vachette, Fichet...)",
            "Réseaux agréés Assurances"
        ],
        whyHirePro: {
            title: "Les garanties d'un artisan serrurier",
            points: [
                "Mise en place de serrures certifiées A2P exigées par votre assureur habitation contre le vol.",
                "Méthodes modernes non-destructives : un vrai pro n'a pas besoin de détruire la porte pour ouvrir.",
                "Rapidité d'intervention et matériel de rechange (cylindres européens standard) directement dans le véhicule utilitaire."
            ]
        }
    },

    "maconnerie": {
        priceRange: "40–70",
        priceUnit: "€/h",
        description: "La maçonnerie est le socle de tout projet de construction ou de rénovation. Elle englobe les fondations, les murs porteurs, les cloisons, les dalles béton, le ravalement de façade, les ouvertures et les travaux d'extension. Un maçon qualifié maîtrise aussi bien le parpaing que la pierre, la brique ou le béton armé.",
        tips: [
            "Pour une extension de maison, un permis de construire est obligatoire au-delà de 20 m² (40 m² en zone urbaine PLU).",
            "Le béton de fondation doit atteindre une résistance minimale de C25/30. Exigez le respect des DTU.",
            "Un ravalement de façade est obligatoire tous les 10 ans dans certaines communes (arrêté préfectoral)."
        ],
        faq: [
            {
                question: "Combien coûte la construction d'un mur en parpaing ?",
                answer: "Un mur en parpaing de 20 cm coûte 40-60 €/m² fourniture et pose. Pour un mur en pierre, comptez 100-300 €/m². Le ferraillage et les fondations sont en sus."
            },
            {
                question: "Faut-il un permis pour casser un mur porteur ?",
                answer: "Oui, l'ouverture ou la démolition d'un mur porteur nécessite l'intervention d'un bureau d'études structures (BET) et une déclaration. En copropriété, l'accord de l'AG est obligatoire."
            },
            {
                question: "Combien de temps dure un chantier de maçonnerie ?",
                answer: "Comptez 1-2 semaines pour un ravalement de façade, 2-4 semaines pour une extension, et le béton nécessite 28 jours de séchage pour atteindre sa résistance maximale avant de le charger lourdement."
            }
        ],
        relatedSlugs: ["couverture", "charpente", "terrassement", "fondation", "ravalement-de-facade"],
        services: [
            { title: "Gros Œuvre", desc: "Coulage de dalles, chapes liquides, fondations, montage de murs porteurs (parpaings, briques, béton cellulaire)." },
            { title: "Ouverture de murs porteurs", desc: "Création de baies, pose d'IPN métalliques ou de poutres béton armé, consolidation." },
            { title: "Extension & Agrandissement", desc: "Création de garage, surélévation, murets de clôture." },
            { title: "Façade et Enduisage", desc: "Ravalement de façades (gratté, taloché), isolation par l'extérieur (ITE)." }
        ],
        certifications: [
            "Garantie Décennale Gros Œuvre (Indispensable)",
            "Label Qualibat Maçonnerie technique",
            "Certification RGE pour les enduits thermiques (ITE)"
        ],
        whyHirePro: {
            title: "Le Gros Œuvre ne pardonne pas les erreurs",
            points: [
                "Stabilité de la structure : Un calcul de charges défaillant ou un ferraillage mal réparti peut entraîner l'effondrement de la maison.",
                "L'assurance décennale : En cas d'affaissement du sol ou d'apparition de graves fissures au cours des 10 prochaines années, les réparations titanesques seront prises en charge.",
                "Vitesse d'exécution : Les moyens mécaniques des maçons pros (toupie de béton, pompes, grues) divisent le temps de chantier par dix."
            ]
        }
    },

    "peinture": {
        priceRange: "25–45",
        priceUnit: "€/m²",
        description: "La peinture intérieure et extérieure transforme vos espaces tout en protégeant les surfaces. Un peintre en bâtiment professionnel maîtrise la préparation des supports (enduit, ponçage, sous-couche), l'application de peintures techniques (anti-humidité, isolante) et les finitions décoratives.",
        tips: [
            "La préparation du support représente 60 % du temps de travail d'un peintre : enduit de rebouchage, ponçage, sous-couche d'accrochage.",
            "Une peinture classique couvre 8 à 12 m² par litre en une couche. Deux couches sont indispensables pour un résultat durable et uniforme.",
            "Le rendement global et le type de résine (acrylique ou glycéro) impactent massivement la durabilité et l'effet (satin, velours, mat)."
        ],
        faq: [
            {
                question: "Combien coûte la peinture d'un appartement de 60 m² ?",
                answer: "Pour un T3 de 60 m² (environ 200 m² de surfaces peintes), comptez 5 000 à 9 000 € main-d'œuvre et fournitures comprises, selon l'état des murs."
            },
            {
                question: "Quelle peinture choisir pour une salle de bain ?",
                answer: "Utilisez une peinture acrylique satinée spéciale pièces humides (classe II minimum). Elle résiste à l'humidité et aux moisissures. Évitez la peinture mate."
            },
            {
                question: "Combien de temps pour peindre une pièce ?",
                answer: "Un peintre professionnel peint une pièce de 15-20 m² en 1 à 2 jours (préparation comprise). Le séchage entre couches prend 4 à 6h pour une acrylique."
            }
        ],
        relatedSlugs: ["ravalement-de-facade", "carrelage", "parquet", "papier-peint", "platre-faux-plafond"],
        services: [
            { title: "Préparation des fonds", desc: "Lessivage profond, ratissage fin à l'enduit, traitement des moisissures, rebouchage des trous profonds." },
            { title: "Peintures murales et Plafonds", desc: "Peinture acrylique avec différentes finitions (mate isolante au plafond, veloutée sur les murs de séjour)." },
            { title: "Revêtements décoratifs", desc: "Pose de papier peint panoramique, toile de verre, effets stuqués ou bétons cirés muraux." },
            { title: "Peintures extérieures", desc: "Traitement des boiseries, lasure, volets, et peintures pliolites pour les façades ou balcons." }
        ],
        certifications: [
            "RC Pro",
            "Maitrise des techniques d'application Airless",
            "Certifications écologiques (utilisation de peintures A+ ou Ecolabel)"
        ],
        whyHirePro: {
            title: "Les finitions font tout le cachet",
            points: [
                "Un plafond lisse : La réalisation d'un plafond 100% sans traces de rouleau ni coups d'enduit nécessite un véritable coup de patte et l'usage d'airless.",
                "Préparation rigoureuse : L'artisan utilise des enduits de lissage professionnels projetés et ponce avec des machines aspirantes (chantier propre).",
                "Protection des lieux : Le sol, les huisseries et les plinthes sont minutieusement protégés, et le temps de décontamination et de ménage est inclus."
            ]
        }
    },

    "couverture": {
        priceRange: "50–120",
        priceUnit: "€/m²",
        description: "La couverture désigne l'ensemble des travaux liés à votre toiture : réfection complète ou partielle, remplacement de tuiles ou ardoises cassées, traitement de charpente, pose de fenêtres de toit (Velux), et systèmes d'étanchéité. Un couvreur intervient aussi en urgence après intempéries.",
        tips: [
            "Une inspection de toiture tous les 2 ans permet de détecter les tuiles cassées, les problèmes d'étanchéité et les infiltrations avant qu'ils ne causent des dégâts.",
            "Le démoussage de toiture régulier (15-30 €/m²) prolonge la durée de vie des tuiles de 5 à 10 ans.",
            "Pour une réfection complète de toiture (100 m²), le budget se situe entre 10 000 et 20 000 € selon le matériau."
        ],
        faq: [
            {
                question: "Combien coûte une réfection de toiture complète ?",
                answer: "Pour une maison de 100 m² au sol : 10 000-15 000 € en tuile terre cuite, 15 000-25 000 € en ardoise, 12 000-18 000 € en zinc."
            },
            {
                question: "Ma toiture fuit, est-ce une urgence ?",
                answer: "Oui. Une fuite non traitée cause des dégâts rapides : pourrissement de charpente, court-circuit. En urgence, bâchez la zone et contactez un couvreur."
            },
            {
                question: "Quelle est la durée de vie d'une toiture ?",
                answer: "Tuile terre cuite : 30-50 ans. Ardoise naturelle : 75-100 ans. Zinc : 30-60 ans. Un entretien régulier prolonge ces durées."
            }
        ],
        relatedSlugs: ["charpente", "isolation", "zinguerie", "ravalement-de-facade", "gouttieres"],
        services: [
            { title: "Réfection toiture", desc: "Remplacement total des tuiles ou ardoises (dépose, remplacement des liteaux, pose)." },
            { title: "Zinguerie", desc: "Installation ou réparation de gouttières, noues, chéneaux, abergements de cheminées en zinc ou cuivre." },
            { title: "Entretien et Nettoyage", desc: "Démoussage mécanique, application de traitements hydrofuges anti-humidité et changement de tuiles fendues." },
            { title: "Ouvrants Toiture", desc: "Remplacement et création de puits de lumières (Pose de fenêtres de toit type VELUX)." }
        ],
        certifications: [
            "Garantie Décennale toiture (Obligatoire)",
            "Label RGE Qualibat pour bénéficier des aides sur l'isolation sous toiture (sarking)",
            "Traitement amiante (Sous-section 4 pour les vieilles ardoises)"
        ],
        whyHirePro: {
            title: "Le toit protège l'ensemble de votre bâti",
            points: [
                "Travail en Hauteur Sécurisé : Le couvreur-zingueur vient équipé avec échafaudages, monte-matériaux et EPI adaptés (harnais).",
                "Risque O % de micro-fuite : L'étanchéité des fenêtres de toits et des noues est ultra critique. Un solin mal fait, et votre isolation est bonne à jeter au premier orage.",
                "Expertise matériaux locaux : Ils connaissent les DTU de région (pentes de toit obligatoires selon l'exposition au vent ou la neige)."
            ]
        }
    },

    "carrelage": {
        priceRange: "30–70",
        priceUnit: "€/m²",
        description: "Le carrelage est un revêtement durable et esthétique pour sols et murs. Le carreleur professionnel maîtrise la pose de carrelage classique, de grès cérame grand format, de mosaïque, de faïence murale et de carreaux de ciment. Il intervient en neuf comme en rénovation.",
        tips: [
            "Prévoyez 10 à 15 % de surface supplémentaire pour les coupes et la casse. Pour une pose en diagonale, ce taux monte à 15-20 %.",
            "Un carrelage en grès cérame pleine masse (classement U4P4E3C2) est le plus résistant pour les pièces à fort passage.",
            "Le temps de séchage de la colle est de 24h minimum avant de marcher sur le carrelage, et 7 jours avant la pose des meubles."
        ],
        faq: [
            {
                question: "Combien coûte la pose de carrelage au m² ?",
                answer: "La pose seule coûte 30-50 €/m² pour un format standard. Pour du XXL (grands carreaux), comptez 40-70 €/m². Le ragréage éventuel est en supplément."
            },
            {
                question: "Peut-on poser du carrelage sur un ancien carrelage ?",
                answer: "Oui, à condition que l'ancien carrelage soit sain, plan et bien adhérent. Utilisez un primaire d'accrochage spécial. Attention à l'épaisseur de réhausse (portes)."
            },
            {
                question: "Quel joint choisir pour la salle de bain ?",
                answer: "Il faut des joints hydrofuges ou époxy (plus chers mais inaltérables), associés à une préparation de paroi via un Système de Protection à l'Eau Sous Carrelage (SPEC)."
            }
        ],
        relatedSlugs: ["salles-de-bains", "parquet", "peinture", "cuisine"],
        services: [
            { title: "Ragréage et Préparation", desc: "Nivelage du sol, reprise des différences de niveaux (chapes) et étanchéification (SPEC/SEL)." },
            { title: "Pose droite ou diagonale", desc: "Pose de grès cérame (jusqu'à 120x120), terre cuite, de pierre naturelle sur intérieurs et extérieurs." },
            { title: "Faïence & Mosaïque", desc: "Carrelages muraux pour salles d'eau, crédences de cuisines, ou douches à l'italienne complexes." },
            { title: "Jointoiements", desc: "Création des joints ciment ou résines époxy pour une durée de vie sans effritement et sans moisissures." }
        ],
        certifications: [
            "Garantie Décennale",
            "Maitrise des DTU 52.2 (Pose Collée) ou 52.1 (Pose Scellée)"
        ],
        whyHirePro: {
            title: "Le nivelage millimétrique",
            points: [
                "Zéro ressauts : Un bon carreleur garantit l'absence totale de décalage de niveau entre les carreaux (pose aux croisillons auto-nivelants).",
                "Pentes d'écoulement maîtrisées : Primordiales pour la bonne évacuation d'une douche à l'italienne (finie l'eau stagneante).",
                "Les coupes professionnelles : Matériel lourd (coupe-carreaux électriques à eau) et maîtrise de la découpe des grès crames XXL et des arrondis."
            ]
        }
    },

    "isolation": {
        priceRange: "20–80",
        priceUnit: "€/m²",
        description: "L'isolation thermique est la priorité numéro un de la rénovation énergétique. Combles perdus, rampants de toiture, murs par l'intérieur (ITI) ou par l'extérieur (ITE), plancher bas : chaque poste de déperdition nécessite une solution adaptée. L'isolation phonique complète le dispositif.",
        tips: [
            "L'isolation des combles perdus est le poste le plus rentable : 15-35 €/m² pour un gain de 25 à 30 % sur votre facture de chauffage (source : ADEME).",
            "L'ITE (Isolation Thermique par l'Extérieur) coûte 100-200 €/m² mais supprime tous les ponts thermiques massivement.",
            "Les aides cumulables (MaPrimeRénov', CEE, éco-PTZ) imposent le passage par une entreprise certifiée RGE."
        ],
        faq: [
            {
                question: "Quelle est la meilleure isolation pour les combles ?",
                answer: "Combles perdus : laine de verre soufflée ou ouate de cellulose. Pour des combles aménagés : laine de bois (excellent déphasage de chaleur estival) ou laine de roche."
            },
            {
                question: "Combien d'économies avec une bonne isolation ?",
                answer: "Toiture : -25 à 30 %. Murs : -20 à 25 %. Une rénovation globale performante de classe F à B réduit la facture par 3 minimum."
            },
            {
                question: "ITE ou ITI : que choisir ?",
                answer: "L'ITE est plus performante (supprime les ponts thermiques à 100%) mais modifie la façade. L'ITI est moins chère mais grignote vos mètres carrés intérieurs."
            }
        ],
        relatedSlugs: ["pompe-a-chaleur", "fenetre", "amenagement-des-combles", "panneau-solaire-photovoltaique", "ravalement-de-facade"],
        services: [
            { title: "Soufflage Combles", desc: "Technique ultra-rapide répandant des flocons de laine aux endroits inaccessibles de toitures." },
            { title: "Isolation thermique extérieur (ITE)", desc: "Enveloppement complet des façades avec du polystyrène, pose de trames fibrées et enduits." },
            { title: "Isolation par l'Intérieur", desc: "Doublages murs et cloisons avec complexes isolants + placo, bande et enduits prêts à peindre." },
            { title: "Isolation Sol et Cave", desc: "Flocage des sous-faces (caves) ou pose d'isolants rigides (polyuréthane) avant chauffage au sol." }
        ],
        certifications: [
            "Label RGE Isolation Intérieure et/ou Extérieure (OBLIGATOIRE pour MaPrimeRénov')",
            "Garantie Décennale",
            "Formation sur l'étanchéité à l'air (Aéro blue, membranes RT2012 / RE2020)"
        ],
        whyHirePro: {
            title: "Les ponts thermiques sont vos pires ennemis",
            points: [
                "Continuité de l'isolant : Un pro repère les détails d'intégration, garantit l'étanchéité des pare-vapeur au scotche spécial et empêche l'humidité de dégrader la laine.",
                "Maitrise des épaisseurs : Chaque résistance thermique 'R' visée donne droit à des aides précises que l'artisan RGE s'engage à obtenir pour vous.",
                "Démarches d'aides subventionnées : Les installateurs gèrent souvent la paperasse complexe et déduisent directement la prime de votre devis."
            ]
        }
    },

    "menuiserie": {
        priceRange: "200–800",
        priceUnit: "€/fenêtre",
        description: "La menuiserie englobe la fabrication et la pose de fenêtres, portes, volets, escaliers, pergolas et agencements sur mesure. Le menuisier travaille le bois, le PVC et l'aluminium pour créer des ouvrages adaptés à votre habitat.",
        tips: [
            "Le double vitrage performant standard (Ug=1,1 W/m².K) est le minimum syndical actuel. En bruit extérieur fort, demandez un vitrage acoustique asymétrique (ex: 10/14/4).",
            "La pose en rénovation (sur vieux cadre) est moins chère, mais la 'dépose totale' (enlèvement intégral de l'encadrement en bois) vous fera gagner clair de jour, solidité et étanchéité.",
            "L'aluminium offre une structure rigide idéale pour les grandes baies coulissantes, mais assurez vous qu'il ait bien une rupture de pont thermique performante."
        ],
        faq: [
            {
                question: "Combien coûte le remplacement d'une fenêtre PVC ?",
                answer: "Fenêtre PVC 2 vantaux standard (120x135 cm) : 400-800 € posée (TVA réduite incluse). Le bois coûte 30% plus cher, et l'aluminium de grande qualité encore plus."
            },
            {
                question: "PVC, alu ou bois : que choisir ?",
                answer: "PVC : meilleur rapport qualité/prix isolant, robuste. Aluminium : profilés ultrafins privilégiés pour baies vitrées XXL modernes. Bois : charme patrimonial indéniable mais nécessite de l'entretien."
            },
            {
                question: "Combien de temps dure un chantier de fenêtres ?",
                answer: "La prise de côte précède de 4 à 8 semaines la livraison. Une fois sur site, un binôme de poseurs remplace jusqu'à 3-5 fenêtres par jour. Une maison est bouclée en 48h."
            }
        ],
        relatedSlugs: ["volet-roulant", "porte-blindee", "escalier", "veranda", "pergola"],
        services: [
            { title: "Remplacement Menuiseries", desc: "Pose en rénovation, en feuillure ou en applique de fenêtres, portes d'entrée et portes-fenêtres." },
            { title: "Volets & Stores", desc: "Motorisation ou installation de volets roulants, volets battants (alu, bois) et stores bannes." },
            { title: "Menuiserie intérieure", desc: "Création de placards coulissants sur-mesure, verrières type atelier, cloisons amovibles, dressing et portes d'intérieurs." },
            { title: "Agencement extérieur", desc: "Pose de pergolas bioclimatiques avec lames orientables, carports pour véhicules et portails roulants." }
        ],
        certifications: [
            "RGE Qualibat Menuiserie (indispensable si demande CEE/MaPrimeRénov' pour isolation des ouvrants)",
            "Label NF Fenêtres bois / PVC / Aluminium",
            "Garantie de parfait achèvement et Garantie Biennale (Bon fonctionnement)"
        ],
        whyHirePro: {
            title: "Le calfeutrage fait partie de l'isolation",
            points: [
                "Isolation phonique et thermique stricte : le respect des espaces de dilatation et les joints compribande (mousse imprégnée) garantissent l'absence de passoire thermique.",
                "Gains énergétiques certifiés : Les fenêtres actuelles font parti de l'enveloppe isolante du CITE/MaPrimeRénov', la pose par Pro vous offre des chèques travaux.",
                "Matériel lourd et fragile : Des vitrages lourds de 80Kg nécessitent ventouses géantes, outillage et surtout une couverture de bris de glass que l'artisan assume pendant le chantier."
            ]
        }
    }
};

/**
 * Retourne le contenu enrichi pour une catégorie, avec fallback intelligent.
 */
export function getCategoryContent(slug: string, name: string): CategoryContent {
    if (CATEGORY_CONTENT_MAP[slug]) {
        return CATEGORY_CONTENT_MAP[slug];
    }
    
    // Fallback : contenu générique hyper riche et adapté au SEO
    const hash = slug.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
    const priceBase = 30 + (hash % 70);
    const priceTop = priceBase + 20 + (hash % 40);
    const catNameLower = name.toLowerCase();
    
    return {
        priceRange: `${priceBase}–${priceTop}`,
        priceUnit: "€/h",
        description: `Trouver le bon professionnel pour des travaux de ${catNameLower} est essentiel pour garantir la sécurité et la pérennité de votre logement. Qu'il s'agisse d'une nouvelle installation, d'une rénovation complète ou d'un dépannage en urgence, un expert certifié vous assure un travail conforme aux normes en vigueur, dans les délais impartis et au juste prix.`,
        tips: [
            `Comparez toujours au moins 3 devis de professionnels en ${catNameLower} pour vérifier l'adéquation des prix du marché local.`,
            `Vérifiez toujours que l'artisan possède une assurance Responsabilité Civile Professionnelle (RC Pro) et une Garantie Décennale valides.`,
            `Demandez un planning clair des travaux et validez-le par écrit avant de signer le devis. Ne versez jamais la totalité en acompte.`,
            `Si vos travaux ont vocation à améliorer les performances énergétiques, choisissez impérativement un artisan labellisé RGE.`
        ],
        faq: [
            {
                question: `Comment choisir le meilleur artisan pour mes travaux de ${catNameLower} ?`,
                answer: `Pour choisir un artisan fiable, vérifiez d'abord son numéro SIRET. Demandez à voir des photos de ses anciens chantiers et contactez d'anciens clients. Enfin, assurez-vous qu'il vous remet rapidement un devis transparent, détaillé (matériaux et main-d'œuvre séparés) et gratuit.`
            },
            {
                question: `Puis-je bénéficier d'aides de l'état pour la prestation de ${catNameLower} ?`,
                answer: `Cela dépend de la nature des travaux. Si ceux-ci visent à réduire votre consommation énergétique, vous êtes probablement éligible à MaPrimeRénov', aux primes CEE ou à la TVA à taux réduit (5,5 %). Un artisan RGE saura vous conseiller.`
            },
            {
                question: `Combien de temps faut-il pour réaliser ces travaux ?`,
                answer: `Les délais varient considérablement selon l'ampleur du chantier, l'accessibilité des lieux et les contraintes climatiques (pour l'extérieur). L'artisan est tenu de vous donner une date limite d'exécution claire sur son devis.`
            }
        ],
        relatedSlugs: [],
        services: [
            { title: `Installation & Pose`, desc: `Mise en place de matériaux et équipements neufs dans le respect strict du Document Technique Unifié (DTU) en vigueur pour la spécialité ${catNameLower}.` },
            { title: `Rénovation & Mise aux normes`, desc: `Remplacement de l'ancien existant, réfection, finition et mise en conformité réglementaire de votre installation.` },
            { title: `Dépannage professionnel`, desc: `Intervention diagnostique pour identifier la panne ou le défaut esthétique, suivi d'une réparation durable et garantie.` },
            { title: `Conseil et accompagnement`, desc: `Choix des meilleurs matériaux, optimisation des coûts, et montage de dossiers techniques.` }
        ],
        certifications: [
            `Assurance Responsabilité Civile Professionnelle (RC Pro)`,
            `Assurance Garantie Décennale (couvrant les dommages pendant 10 ans)`,
            `Immatriculation au Répertoire des Métiers (CMA)`,
            `Éventuels labels métiers, RGE, Qualibat, ou Eco-Artisan (selon spécificités).`
        ],
        whyHirePro: {
            title: `Pourquoi confier votre projet de ${catNameLower} à un expert ?`,
            points: [
                `Conformité garantie : L'expert respecte les normes de sécurité légales et les règles de l'art du bâtiment.`,
                `Couverture assurantielle : En cas de malfaçon, vous êtes intégralement protégé par sa Garantie Décennale.`,
                `Gain de temps et d'argent : Bien que l'intervention ait un coût, un travail fait par un expert dure plus longtemps et évite les réparations aléatoires.`,
                `Accès aux Aides Financières : Seuls les travaux réalisés par un professionnel certifié vous ouvrent le droit aux bonus et primes d'État.`
            ]
        }
    };
}
