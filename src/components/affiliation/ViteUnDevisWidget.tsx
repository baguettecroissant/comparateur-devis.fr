"use client";

import { useEffect, useRef } from "react";
import { Category } from "@/lib/categories";

interface ViteUnDevisWidgetProps {
    category?: Category;
    keyword?: string;
}

/**
 * Widget ViteUnDevis — marque blanche.
 * 
 * Logique de détection du métier (par priorité) :
 * 1. `category.name` si une catégorie est passée en prop (pages /[category]/[city])
 * 2. `keyword` explicite si passé en prop (page /devis avec query param)
 * 3. Fallback vide → ViteUnDevis affichera son formulaire multi-métiers
 */
export function ViteUnDevisWidget({ category, keyword }: ViteUnDevisWidgetProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const injected = useRef(false);

    useEffect(() => {
        if (injected.current) return;
        injected.current = true;

        const w = window as any;
        w.vud_partenaire_id = '2353';
        w.vud_box_id = '1c2e8ce774';

        // Keyword detection: category name > explicit keyword > empty (multi-métiers)
        if (category?.name) {
            w.vud_keyword = encodeURI(category.name);
        } else if (keyword) {
            w.vud_keyword = encodeURI(keyword);
        } else {
            w.vud_keyword = '';
        }

        // Pass category ID if available (ViteUnDevis may use it)
        if (category?.id) {
            w.vud_categorie_id = category.id.toString();
        }

        // Create and inject script
        const vud_js = document.createElement('script');
        vud_js.type = 'text/javascript';
        vud_js.async = true;
        vud_js.src = '//www.viteundevis.com/marqueblanche/?b=' + w.vud_box_id + '&p=' + w.vud_partenaire_id + '&c=' + w.vud_keyword;

        if (containerRef.current) {
            containerRef.current.appendChild(vud_js);
        }
    }, [category, keyword]);

    return (
        <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-200">
            <div id="v1c2e8ce774d" ref={containerRef} className="min-h-[400px] flex items-center justify-center text-slate-400">
            </div>
            <p className="text-center text-xs text-slate-400 mt-2">
                Service gratuit et sans engagement
            </p>
        </div>
    );
}
