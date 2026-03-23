"use client";

import { useState } from "react";
import Link from "next/link";
import { Wrench, Shield, Home, Droplets, Zap, Sun, TreePine, PaintRoller, ChevronDown, Flame, HardHat } from "lucide-react";
import { getAllCategories } from "@/lib/categories";

const iconMap: Record<string, any> = {
    'abattage-d-arbres': TreePine,
    'adoucisseur-d-eau': Droplets,
    'alarme': Shield,
    'alarme-incendie': Shield,
    'amenagement-des-combles': Home,
    'architecte-construction-de-maison': Home,
    'assainissement': Droplets,
    'borne-de-recharge': Zap,
    'peinture': PaintRoller,
    'panneau-solaire-photovoltaique': Sun,
    'panneaux-solaires': Sun,
    'plomberie': Droplets,
    'electricite-travaux-electriques': Zap,
    'pompe-a-chaleur': Flame,
    'climatisation': Flame,
    'chaudiere-gaz': Flame,
    'chauffe-eau': Flame,
    'maconnerie': HardHat,
    'couverture': HardHat,
    'isolation': HardHat,
    'menuiserie': HardHat,
    'carrelage': PaintRoller,
    'parquet': PaintRoller,
    'terrasses': TreePine,
    'piscine': Droplets,
    'portail': HardHat,
    'entretien-jardin': TreePine,
};

const INITIAL_SHOW = 24;

export function CategoriesGrid({ baseUrl = "" }: { baseUrl?: string }) {
    const allCategories = getAllCategories();
    const [showAll, setShowAll] = useState(false);
    
    const displayCategories = showAll ? allCategories : allCategories.slice(0, INITIAL_SHOW);
    const hasMore = allCategories.length > INITIAL_SHOW;

    return (
        <div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {displayCategories.map(category => {
                    const Icon = iconMap[category.slug] || Wrench;
                    const href = baseUrl ? `/${category.slug}${baseUrl}` : `/${category.slug}`;
                    return (
                        <Link 
                            key={category.slug} 
                            href={href} 
                            className="group bg-white border border-slate-200 hover:border-orange-500 rounded-xl p-6 text-left shadow-sm hover:shadow-md transition-all flex flex-col items-start gap-4"
                        >
                            <div className="w-12 h-12 bg-orange-50 rounded-lg flex items-center justify-center text-orange-600 group-hover:scale-110 transition-transform">
                                <Icon className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="font-bold text-slate-800 group-hover:text-orange-600 line-clamp-2">{category.name}</h3>
                            </div>
                        </Link>
                    );
                })}
            </div>

            {hasMore && !showAll && (
                <div className="text-center mt-8">
                    <button
                        onClick={() => setShowAll(true)}
                        className="inline-flex items-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold px-6 py-3 rounded-xl transition-colors"
                    >
                        <ChevronDown className="h-5 w-5" />
                        Voir les {allCategories.length - INITIAL_SHOW} autres prestations
                    </button>
                </div>
            )}

            {showAll && (
                <div className="text-center mt-6 text-sm text-slate-500">
                    {allCategories.length} prestations disponibles
                </div>
            )}
        </div>
    );
}
