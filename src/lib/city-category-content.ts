/**
 * Génère du contenu unique pour chaque combinaison ville+catégorie.
 * Tout est déterministe grâce au hash DJB2 (pas de Math.random).
 * Ce module est le cœur de l'unicité des pages pSEO.
 */

import { City } from '@/types';
import { Category } from '@/lib/categories';
import { CategoryContent } from '@/lib/category-content';
import { hashDeterministic, pickVariant, getCityTier } from '@/lib/text-utils';

// ──────────────────────────────────────────────
// Types
// ──────────────────────────────────────────────

export interface UniqueFaqItem {
    question: string;
    answer: string;
}

export interface UniquePageContent {
    introTitle: string;
    introText: string;
    localContextText: string;
    faq: UniqueFaqItem[];
    metaTitle: string;
    metaDescription: string;
    tipsContextualized: string[];
    servicesIntro: string;
    whyProIntro: string;
    aidsIntro: string;
}

// ──────────────────────────────────────────────
// Helpers locaux
// ──────────────────────────────────────────────

function pick<T>(variants: T[], seed: string): T {
    return pickVariant(variants, seed);
}

function populationLabel(city: City): string {
    const pop = city.population || 0;
    if (pop > 100000) return `grande métropole de ${pop.toLocaleString('fr-FR')} habitants`;
    if (pop > 50000) return `agglomération de ${pop.toLocaleString('fr-FR')} habitants`;
    if (pop > 10000) return `ville de ${pop.toLocaleString('fr-FR')} habitants`;
    if (pop > 2000) return `commune de ${pop.toLocaleString('fr-FR')} habitants`;
    if (pop > 500) return `bourg de ${pop.toLocaleString('fr-FR')} habitants`;
    if (pop > 0) return `village de ${pop.toLocaleString('fr-FR')} habitants`;
    return 'commune';
}

// ──────────────────────────────────────────────
// Génération du contenu unique
// ──────────────────────────────────────────────

export function getUniquePageContent(
    city: City,
    category: Category,
    content: CategoryContent
): UniquePageContent {
    const catLower = category.name.toLowerCase();
    const seed = `${city.slug}::${category.slug}`;
    const tier = getCityTier(city);
    const popLabel = populationLabel(city);
    const deptName = city.department_name;
    const region = city.region;
    const zip = city.zip;

    // ─── Intro Title ───
    const introTitles = [
        `Votre projet de ${catLower} à ${city.name}`,
        `${category.name} à ${city.name} : ce qu'il faut savoir`,
        `Tout savoir sur la ${catLower} à ${city.name} (${zip})`,
        `${category.name} à ${city.name} — guide local`,
    ];
    const introTitle = pick(introTitles, seed + '-title');

    // ─── Intro Text (unique par combinaison) ───
    const introTexts = [
        `${city.name}, ${popLabel} du département ${deptName}, offre un cadre propice à la réalisation de vos travaux de ${catLower}. Que votre logement soit ancien ou récent, les artisans certifiés de la région ${region} maîtrisent les contraintes locales — climat, type de bâti, réglementations départementales — pour vous garantir un résultat durable et conforme aux normes.`,
        `Vous résidez à ${city.name} (${zip}) et envisagez des travaux de ${catLower} ? Le département ${deptName} compte de nombreux professionnels qualifiés capables d'intervenir rapidement. Comparer plusieurs devis reste le meilleur moyen d'obtenir le juste prix pour votre chantier tout en bénéficiant des meilleures garanties.`,
        `À ${city.name}, ${popLabel} en ${region}, les travaux de ${catLower} représentent une part importante de l'activité des artisans du bâtiment. Que vous souhaitiez rénover, installer ou dépanner, les professionnels du ${city.department_code} interviennent dans le respect des DTU et de la réglementation locale.`,
        `Situé dans le ${deptName} (${region}), ${city.name} bénéficie d'un tissu d'artisans en ${catLower} expérimentés. Des interventions d'urgence aux projets de rénovation complète, comparer les devis vous permet de sélectionner le professionnel le plus adapté à votre besoin et à votre budget.`,
    ];
    const introText = pick(introTexts, seed + '-intro');

    // ─── Contexte local (bloc unique) ───
    const localTexts: string[] = [];

    if (tier <= 2) {
        localTexts.push(
            `En tant que ${popLabel}, ${city.name} dispose d'un large choix de prestataires en ${catLower}. La concurrence entre les artisans du ${city.department_code} joue en votre faveur : les tarifs sont compétitifs et les délais d'intervention souvent courts.`,
            `L'activité du bâtiment est soutenue à ${city.name}, ${popLabel} où les chantiers de ${catLower} sont réguliers. Vous trouverez facilement des artisans disponibles, y compris pour les interventions en urgence.`,
        );
    } else if (tier === 3) {
        localTexts.push(
            `${city.name}, ${popLabel}, est desservie par les entreprises du bâtiment du secteur ${city.department_code}. Pour votre projet de ${catLower}, les artisans qualifiés de la région se déplacent sans frais supplémentaires dans les communes de cette envergure.`,
            `Commune à taille humaine, ${city.name} profite de la proximité avec les zones d'activité du ${deptName}. Les professionnels en ${catLower} interviennent dans un périmètre large et garantissent un suivi de chantier personnalisé.`,
        );
    } else {
        localTexts.push(
            `Même en zone rurale, ${city.name} bénéficie d'une bonne couverture par les artisans en ${catLower} du ${deptName}. Les professionnels de la région ${region} sont habitués à se déplacer dans les communes périphériques et proposent les mêmes garanties qu'en ville.`,
            `${city.name}, ${popLabel} du ${city.department_code}, fait partie de la zone d'intervention des artisans en ${catLower} du secteur. Vous accédez aux mêmes services, aux mêmes aides financières et aux mêmes garanties décennales que les habitants des grandes villes.`,
        );
    }
    const localContextText = pick(localTexts, seed + '-local');

    // ─── FAQ unique ───
    const faq = generateUniqueFaq(city, category, content, seed);

    // ─── Meta SEO ───
    const metaTitles = [
        `${category.name} à ${city.name} (${zip}) — Tarifs ${content.priceRange} ${content.priceUnit} | Devis Gratuit`,
        `Devis ${category.name} à ${city.name} (${zip}) — Comparez les artisans du ${city.department_code}`,
        `${category.name} ${city.name} ${zip} : prix, artisans et devis gratuit`,
    ];
    const metaTitle = pick(metaTitles, seed + '-meta-title');

    const metaDescs = [
        `Comparez jusqu'à 3 devis gratuits pour votre ${catLower} à ${city.name} (${zip}). Tarif moyen : ${content.priceRange} ${content.priceUnit}. Artisans certifiés du ${deptName}.`,
        `Besoin d'un professionnel en ${catLower} à ${city.name} ? Obtenez des devis gratuits d'artisans vérifiés du ${city.department_code}. Tarifs, aides et conseils.`,
        `${category.name} à ${city.name} (${zip}) : comparez les prix des artisans qualifiés du ${deptName}. Devis gratuit, sans engagement, réponse sous 48h.`,
    ];
    const metaDescription = pick(metaDescs, seed + '-meta-desc');

    // ─── Tips contextualisés ───
    const tipsContextualized = content.tips.map((tip, i) => {
        const prefixes = [
            `À ${city.name}, `,
            `Pour les habitants du ${city.department_code}, `,
            `Dans le ${deptName}, `,
            `En ${region}, `,
        ];
        // Seul le premier tip de chaque page est préfixé localement
        if (i === 0) {
            return pick(prefixes, seed + `-tip-${i}`) + tip.charAt(0).toLowerCase() + tip.slice(1);
        }
        return tip;
    });

    // ─── Intros de section ───
    const servicesIntros = [
        `Les artisans en ${catLower} à ${city.name} proposent un éventail de prestations adaptées à tous types de projets :`,
        `Voici les principales interventions de ${catLower} réalisables par les professionnels du ${city.department_code} :`,
        `Du dépannage à la rénovation complète, les spécialistes en ${catLower} de ${city.name} couvrent les prestations suivantes :`,
    ];
    const servicesIntro = pick(servicesIntros, seed + '-svc-intro');

    const whyProIntros = [
        `Confier votre ${catLower} à un professionnel du ${deptName} vous offre des garanties indispensables :`,
        `Un expert en ${catLower} à ${city.name} vous apporte bien plus qu'un simple coup de main :`,
        `Voici pourquoi les habitants de ${city.name} choisissent un professionnel certifié pour leur ${catLower} :`,
    ];
    const whyProIntro = pick(whyProIntros, seed + '-why-intro');

    const aidsIntros = [
        `Les résidents de ${city.name} (${zip}) peuvent prétendre à plusieurs aides pour leurs travaux de ${catLower} :`,
        `Bonne nouvelle pour les habitants du ${city.department_code} : des aides financières existent pour votre projet de ${catLower} :`,
        `Dans le ${deptName}, votre projet de ${catLower} peut être partiellement financé grâce aux dispositifs suivants :`,
    ];
    const aidsIntro = pick(aidsIntros, seed + '-aids-intro');

    return {
        introTitle,
        introText,
        localContextText,
        faq,
        metaTitle,
        metaDescription,
        tipsContextualized,
        servicesIntro,
        whyProIntro,
        aidsIntro,
    };
}

// ──────────────────────────────────────────────
// FAQ unique
// ──────────────────────────────────────────────

function generateUniqueFaq(
    city: City,
    category: Category,
    content: CategoryContent,
    baseSeed: string
): UniqueFaqItem[] {
    const catLower = category.name.toLowerCase();
    const deptName = city.department_name;
    const zip = city.zip;

    // 1. FAQ issues du contenu catégorie, contextualisées
    const categoryFaq: UniqueFaqItem[] = content.faq.map((f, i) => {
        // On contextualise la réponse avec la ville
        const localSuffixes = [
            ` À ${city.name}, n'hésitez pas à demander plusieurs devis pour comparer.`,
            ` Les professionnels du ${city.department_code} appliquent ces tarifs courants.`,
            ` Contactez un artisan certifié du ${deptName} pour une estimation précise.`,
            ` Cette information est valable pour les chantiers réalisés à ${city.name} (${zip}).`,
        ];
        const suffix = pick(localSuffixes, baseSeed + `-faq-suffix-${i}`);
        return {
            question: f.question,
            answer: f.answer + suffix,
        };
    });

    // 2. FAQ locales (toujours ajoutées en complément)
    const localFaq: UniqueFaqItem[] = [
        {
            question: `Comment trouver un bon artisan en ${catLower} à ${city.name} ?`,
            answer: `Vérifiez son numéro SIRET sur societe.com ou infogreffe.fr, contrôlez qu'il possède une assurance décennale valide, et consultez les avis d'anciens clients. À ${city.name}, notre comparateur vous met en relation avec des professionnels vérifiés du ${deptName}.`,
        },
        {
            question: `Quelles aides financières pour la ${catLower} à ${city.name} (${zip}) ?`,
            answer: `Selon la nature de vos travaux de ${catLower}, vous pouvez bénéficier de MaPrimeRénov', des primes CEE, de la TVA à taux réduit (5,5 % ou 10 %) ou d'aides locales du département ${deptName}${city.department_info?.aide_locale ? ` via ${city.department_info.aide_locale}` : ''}. Condition : faire appel à un artisan certifié RGE.`,
        },
        {
            question: `Quel délai pour une intervention de ${catLower} à ${city.name} ?`,
            answer: `Les délais varient selon la disponibilité des artisans et l'ampleur du chantier. En zone ${getCityTier(city) <= 2 ? 'urbaine comme ' + city.name : 'rurale'}, comptez 1 à 3 semaines pour un rendez-vous planifié. Les urgences sont traitées sous 24 à 48h par les professionnels du ${city.department_code}.`,
        },
    ];

    // Hash pour varier l'ordre et la sélection
    const h = hashDeterministic(baseSeed + '-faq-order');

    // On prend toutes les FAQ catégorie + 2 FAQ locales (en rotation)
    const selectedLocalFaq = [localFaq[h % 3], localFaq[(h + 1) % 3]];
    
    // Mélange déterministe : FAQ catégorie en premier, puis les locales
    return [...categoryFaq, ...selectedLocalFaq];
}
