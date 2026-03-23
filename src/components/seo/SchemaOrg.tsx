import { City } from "@/types";
import { Category } from "@/lib/categories";

interface SchemaOrgProps {
    city: City;
    category: Category;
}

export function SchemaOrg({ city, category }: SchemaOrgProps) {
    const schema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": `Installation et devis ${category.name} à ${city.name}`,
        "description": `Trouvez un professionnel pour votre projet de ${category.name.toLowerCase()} à ${city.name} (${city.zip}). Devis gratuits d'artisans.`,
        "areaServed": {
            "@type": "City",
            "name": city.name,
            "address": {
                "@type": "PostalAddress",
                "postalCode": city.zip,
                "addressCountry": "FR"
            }
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": city.coordinates.lat,
            "longitude": city.coordinates.lng
        },
        "url": `https://www.comparateur-devis.fr/${category.slug}/${city.slug}`,
        "provider": {
            "@type": "Organization",
            "name": "Comparateur-Devis.fr",
            "url": "https://www.comparateur-devis.fr"
        }
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}
