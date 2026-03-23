import Link from "next/link";
import { BookOpen, ArrowRight } from "lucide-react";

const FEATURED_GUIDES = [
    { slug: "prix-monte-escalier-2026", title: "Prix Monte-Escalier 2026 : Guide Complet" },
    { slug: "devis-monte-escalier-pieges", title: "7 Pièges à Éviter sur un Devis" },
    { slug: "monte-escalier-occasion", title: "Monte-Escalier d'Occasion : Bonne Idée ?" },
    { slug: "cout-entretien-monte-escalier", title: "Coût Entretien Monte-Escalier" },
];

export function GuidesWidget() {
    return (
        <section className="mb-16">
            <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                <BookOpen className="h-6 w-6 text-orange-500" />
                Guides utiles pour votre projet
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
                {FEATURED_GUIDES.map((guide) => (
                    <Link
                        key={guide.slug}
                        href={`/guides/${guide.slug}`}
                        className="flex items-center gap-3 p-4 bg-slate-50 border border-slate-200 rounded-xl hover:border-orange-500 hover:shadow-md transition-all group"
                    >
                        <div className="bg-orange-100 p-2 rounded-lg group-hover:bg-orange-200 transition-colors shrink-0">
                            <ArrowRight className="h-4 w-4 text-orange-600" />
                        </div>
                        <span className="font-medium text-slate-700 group-hover:text-orange-700 text-sm line-clamp-2">
                            {guide.title}
                        </span>
                    </Link>
                ))}
            </div>
        </section>
    );
}
