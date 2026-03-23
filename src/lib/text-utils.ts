
import { City } from '@/types';

/**
 * Returns a random string from the provided options.
 */
export function getRandomSpintax(options: string[]): string {
    // Simple pseudo-random based on string length or date to avoid hydration mismatch? 
    // Ideally we'd want deterministic randomness based on the City slug to be consistent across builds/renders.
    // BUT user asked for "Spintax (variations aléatoires)".
    // If we use Math.random(), next build might change it. That's usually fine for pSEO.
    // To safe for hydration on Next.js, we should be careful.
    // If this runs on server component only, Math.random() is fine.

    return options[Math.floor(Math.random() * options.length)];
}

/**
 * Generates an SEO-optimized intro based on city population.
 */
export function getCityIntro(city: City): string {
    const pop = city.population || 0;

    // Tier 1: Major Cities (> 50k)
    if (pop > 50000) {
        const options = [
            `Métropole dynamique du département ${city.department_name}, ${city.name} dispose de nombreux installateurs qualifiés pour sécuriser votre escalier.`,
            `Grâce à son réseau d'experts, la grande agglomération de ${city.name} offre un large choix de solutions d'accessibilité.`,
            `Au cœur de ${city.name}, améliorez votre confort de vie grâce aux spécialistes du monte-escalier présents dans la région ${city.region}.`,
            `Résider dans une grande ville comme ${city.name} vous assure un accès rapide aux meilleurs techniciens pour votre installation.`
        ];
        return getRandomSpintax(options);
    }

    // Tier 2: Cities (> 10k)
    if (pop > 10000) {
        const options = [
            `Ville active du ${city.department_name}, ${city.name} bénéficie d'une excellente couverture par les installateurs de la région.`,
            `À ${city.name}, ville en mouvement, sécuriser son domicile est simple grâce à la proximité de nombreux artisans certifiés.`,
            `Commune importante de la région ${city.region}, ${city.name} propose diverses options pour l'installation rapide d'un monte-escalier.`,
            `Que vous soyez en centre-ville ou en périphérie de ${city.name}, nos partenaires interviennent rapidement pour votre devis.`
        ];
        return getRandomSpintax(options);
    }

    // Tier 3: Towns (> 2k)
    if (pop > 2000) {
        const options = [
            `Cadre de vie agréable à ${city.name}, où le maintien à domicile est facilité par l'intervention d'artisans locaux qualifiés.`,
            `Située en ${city.region}, la commune de ${city.name} est bien desservie par les experts du monte-escalier.`,
            `Profitez du calme de ${city.name} tout en sécurisant votre maison grâce aux solutions d'accessibilité disponibles dans le ${city.department_code}.`,
            `À ${city.name}, commune à taille humaine, bénéficiez d'un accompagnement personnalisé pour votre projet de monte-escalier.`
        ];
        return getRandomSpintax(options);
    }

    // Tier 4: Villages (> 0)
    if (pop > 0) {
        const options = [
            `Village paisible, ${city.name} est parfaitement couverte par les techniciens de la région ${city.region}, habitués à intervenir en zone rurale.`,
            `Au calme à ${city.name}, préservez votre autonomie avec une installation sur-mesure réalisée par des pros locaux.`,
            `Vivre à ${city.name} offre une tranquillité appréciable. Nos artisans se déplacent même dans les plus petites communes du ${city.department_name}.`,
            `Charmante localité rurale, ${city.name} bénéficie des mêmes aides (MaPrimeAdapt') que les grandes villes pour vos travaux.`
        ];
        return getRandomSpintax(options);
    }

    // Tier 5: Fallback / Unknown Population (0 or undefined)
    const options = [
        `Dans le département ${city.department_name}, ${city.name} est desservie par notre réseau d'installateurs agréés.`,
        `Habiter à ${city.name} vous permet de bénéficier de devis gratuits pour l'installation de votre monte-escalier.`,
        `La commune de ${city.name} fait partie de notre zone d'intervention prioritaire en région ${city.region}.`,
        `Pour votre projet à ${city.name}, faites confiance aux artisans partenaires intervenant régulièrement dans le ${city.department_code}.`
    ];
    return getRandomSpintax(options);
}
