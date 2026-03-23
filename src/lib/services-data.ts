import { Clock, Flame, HardHat, Paintbrush, LayoutDashboard, TreePine } from "lucide-react";

export const SERVICE_GROUPS = [
    {
        title: "Urgences 24h/24",
        color: "text-red-500",
        bgColor: "bg-red-50",
        icon: Clock,
        items: [
            { name: "Plomberie", slug: "plomberie", desc: "Fuites, débouchage..." },
            { name: "Serrurerie", slug: "serrurerie", desc: "Ouverture de porte..." },
            { name: "Electricité", slug: "electricite-travaux-electriques", desc: "Panne, dépannage..." },
            { name: "Dépannage PAC", slug: "depannage-pompe-a-chaleur-climatisation", desc: "Air/Air, Air/Eau..." }
        ]
    },
    {
        title: "Chauffage & Clim",
        color: "text-orange-500",
        bgColor: "bg-orange-50",
        icon: Flame,
        items: [
            { name: "Pompe à chaleur", slug: "pompe-a-chaleur", desc: "Installation, entretien..." },
            { name: "Climatisation", slug: "climatisation", desc: "Pose, dépannage..." },
            { name: "Chaudière gaz", slug: "chaudiere-gaz", desc: "Remplacement..." },
            { name: "Chauffe-eau", slug: "chauffe-eau", desc: "Ballon thermodynamique..." }
        ]
    },
    {
        title: "Bâtiment",
        color: "text-blue-500",
        bgColor: "bg-blue-50",
        icon: HardHat,
        items: [
            { name: "Maçonnerie", slug: "maconnerie", desc: "Construction, rénovation..." },
            { name: "Couverture", slug: "couverture", desc: "Toiture, zinguerie..." },
            { name: "Menuiserie", slug: "menuiserie", desc: "Fenêtres, portes..." },
            { name: "Isolation", slug: "isolation", desc: "Combles, murs..." }
        ]
    },
    {
        title: "Finitions",
        color: "text-green-500",
        bgColor: "bg-green-50",
        icon: Paintbrush,
        items: [
            { name: "Peinture", slug: "peinture", desc: "Intérieur, extérieur..." },
            { name: "Carrelage", slug: "carrelage", desc: "Salles de bain, sols..." },
            { name: "Parquet", slug: "parquet", desc: "Pose, ponçage..." },
            { name: "Placo", slug: "cloison", desc: "Séparation, faux-plafonds..." }
        ]
    },
    {
        title: "Aménagement",
        color: "text-pink-500",
        bgColor: "bg-pink-50",
        icon: LayoutDashboard,
        items: [
            { name: "Salles de bains", slug: "salles-de-bains", desc: "Création, rénovation..." },
            { name: "Cuisine", slug: "cuisine", desc: "Sur mesure..." },
            { name: "Aménagement combles", slug: "amenagement-des-combles", desc: "Isolation, placo..." },
            { name: "Monte-escalier", slug: "monte-escalier", desc: "Droit ou tournant..." }
        ]
    },
    {
        title: "Extérieur",
        color: "text-emerald-500",
        bgColor: "bg-emerald-50",
        icon: TreePine,
        items: [
            { name: "Terrasses", slug: "terrasses", desc: "Bois, béton..." },
            { name: "Entretien jardin", slug: "entretien-jardin", desc: "Taille, tonte..." },
            { name: "Portail", slug: "portail", desc: "Pose, motorisation..." },
            { name: "Piscine", slug: "piscine", desc: "Construction, entretien..." }
        ]
    }
];
