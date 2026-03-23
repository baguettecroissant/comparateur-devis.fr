
import { City } from '@/types';

/**
 * Hash déterministe DJB2 — produit un entier positif stable pour une chaîne donnée.
 * Garantit : même input → même output (pas de Math.random).
 */
export function hashDeterministic(input: string): number {
    let hash = 5381;
    for (let i = 0; i < input.length; i++) {
        hash = ((hash << 5) + hash) + input.charCodeAt(i);
        hash = hash & hash;
    }
    return Math.abs(hash);
}

/**
 * Sélectionne un élément parmi un tableau de variantes de façon déterministe.
 */
export function pickVariant<T>(variants: T[], seed: string): T {
    return variants[hashDeterministic(seed) % variants.length];
}

/**
 * Classifie la taille d'une ville en tier (1 = métropole, 5 = inconnu/micro).
 */
export function getCityTier(city: City): 1 | 2 | 3 | 4 | 5 {
    const pop = city.population || 0;
    if (pop > 50000) return 1;
    if (pop > 10000) return 2;
    if (pop > 2000) return 3;
    if (pop > 0) return 4;
    return 5;
}

/**
 * Retourne un qualificatif contextuel pour la ville, déterministe.
 */
export function getCityQualifier(city: City, seed: string): string {
    const tier = getCityTier(city);
    const variants: Record<number, string[]> = {
        1: [
            `grande agglomération du ${city.department_name}`,
            `métropole dynamique de la région ${city.region}`,
            `ville majeure du département ${city.department_code}`,
            `pôle urbain incontournable du ${city.department_name}`,
        ],
        2: [
            `ville active du ${city.department_name}`,
            `commune importante de la région ${city.region}`,
            `bassin de vie dynamique du ${city.department_code}`,
            `cité en plein développement du ${city.department_name}`,
        ],
        3: [
            `commune à taille humaine du ${city.department_name}`,
            `bourg animé de la région ${city.region}`,
            `localité agréable du département ${city.department_code}`,
            `petite ville conviviale du ${city.department_name}`,
        ],
        4: [
            `village paisible du ${city.department_name}`,
            `commune rurale de la région ${city.region}`,
            `hameau typique du ${city.department_code}`,
            `localité au cadre de vie préservé en ${city.region}`,
        ],
        5: [
            `commune du ${city.department_name}`,
            `localité du département ${city.department_code}`,
            `secteur résidentiel de la région ${city.region}`,
        ],
    };
    return pickVariant(variants[tier], seed);
}

/**
 * Génère un paragraphe d'introduction contextualisé par catégorie + ville.
 * 100% déterministe (même résultat à chaque build pour une même paire).
 */
export function getCityIntro(city: City, categoryName?: string): string {
    const catName = categoryName ? categoryName.toLowerCase() : 'travaux';
    const seed = `intro-${city.slug}-${catName}`;
    const qualifier = getCityQualifier(city, seed);
    const tier = getCityTier(city);
    const pop = city.population || 0;

    // Blocs de phrases contextuelles
    const openings: string[] = [
        `${city.name}, ${qualifier}, dispose d'un réseau étoffé de professionnels qualifiés en ${catName}.`,
        `Habitant·e de ${city.name} (${city.zip}), vous recherchez un spécialiste en ${catName} ? Notre comparateur vous met en relation avec les artisans certifiés du ${city.department_name}.`,
        `Que vous habitiez en centre-ville ou en périphérie de ${city.name}, les professionnels en ${catName} du ${city.department_code} interviennent rapidement dans votre secteur.`,
        `${city.name} (${city.department_name}), ${qualifier}, bénéficie d'une excellente couverture par les artisans spécialisés en ${catName} de la région ${city.region}.`,
        `Besoin d'un expert en ${catName} à ${city.name} ? Les artisans du département ${city.department_name} couvrent l'intégralité de la commune et ses environs.`,
    ];

    let contextSuffix = '';
    if (tier <= 2 && pop > 10000) {
        const suffixes = [
            `Avec ${pop.toLocaleString('fr-FR')} habitants, ${city.name} concentre de nombreux chantiers de ${catName} chaque année, ce qui garantit la disponibilité d'artisans expérimentés.`,
            `La densité de professionnels à ${city.name} vous assure un large choix de devis compétitifs pour votre projet de ${catName}.`,
            `Dans une agglomération comme ${city.name}, les interventions de ${catName} sont fréquentes — les artisans locaux connaissent parfaitement les spécificités du bâti de la région.`,
        ];
        contextSuffix = ' ' + pickVariant(suffixes, seed + '-suffix');
    } else if (tier === 3) {
        const suffixes = [
            `Les professionnels du ${city.department_code} se déplacent régulièrement sur ${city.name} et ses alentours.`,
            `Malgré sa taille, ${city.name} est bien desservie par les artisans en ${catName} du secteur.`,
        ];
        contextSuffix = ' ' + pickVariant(suffixes, seed + '-suffix');
    } else if (tier >= 4) {
        const suffixes = [
            `Les artisans de la région ${city.region} interviennent également dans les communes rurales comme ${city.name} — vous bénéficiez des mêmes prestations et garanties.`,
            `Même en zone rurale, ${city.name} est couverte par notre réseau d'experts en ${catName}, habitués à se déplacer dans le ${city.department_name}.`,
        ];
        contextSuffix = ' ' + pickVariant(suffixes, seed + '-suffix');
    }

    return pickVariant(openings, seed + '-opening') + contextSuffix;
}
