import { getAllDepartments, DepartmentInfo } from '@/lib/cities';
import Link from 'next/link';
import { Metadata } from 'next';
import { Map as MapIcon, ChevronRight } from 'lucide-react';
import { MobileStickyCta } from "@/components/ui/MobileStickyCta";

export const metadata: Metadata = {
    title: "Annuaire National des Artisans du Bâtiment par Département | Comparateur Devis",
    description: "Parcourez notre annuaire national pour trouver un artisan qualifié dans votre département. Comparez les prix et les avis région par région.",
};

export default function AnnuairePage() {
    const departments = getAllDepartments();

    // Group departments by Region
    const regionsMap = new Map<string, DepartmentInfo[]>();

    departments.forEach(dept => {
        const current = regionsMap.get(dept.region) || [];
        current.push(dept);
        regionsMap.set(dept.region, current);
    });

    // Sort regions alphabetically
    const sortedRegions = Array.from(regionsMap.keys()).sort();

    return (
        <div className="min-h-screen bg-white pb-20 md:pb-0">
            {/* Premium Dark Hero Section */}
            <section className="relative bg-slate-950 pt-16 pb-24 overflow-hidden border-b border-slate-800">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full overflow-hidden pointer-events-none">
                    <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[70%] bg-orange-600/10 blur-[120px] rounded-full mix-blend-screen"></div>
                    <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[60%] bg-blue-600/10 blur-[120px] rounded-full mix-blend-screen"></div>
                </div>

                <div className="container mx-auto px-4 text-center relative z-10">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 tracking-tight">
                        Annuaire National des <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-300">Artisans</span>
                    </h1>
                    <p className="text-xl text-slate-400 max-w-3xl mx-auto">
                        Sélectionnez votre région ou votre département pour découvrir les professionnels qualifiés,
                        les aides locales disponibles et les tarifs moyens constatés près de chez vous.
                    </p>
                </div>
            </section>

            {/* Regions Grid */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <div className="grid gap-12 max-w-6xl mx-auto">
                        {sortedRegions.map(region => (
                            <div key={region} className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
                                <div className="bg-orange-50 px-6 py-4 border-b border-orange-100 flex items-center gap-2">
                                    <MapIcon className="h-5 w-5 text-orange-600" />
                                    <h2 className="text-xl font-bold text-slate-800">{region}</h2>
                                </div>
                                <div className="p-6">
                                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                        {regionsMap.get(region)?.map(dept => {
                                            const slug = `${dept.name.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '')}-${dept.code}`;
                                            return (
                                                <Link
                                                    key={dept.code}
                                                    href={`/annuaire/${slug}`}
                                                    className="group flex items-center justify-between p-3 rounded-lg hover:bg-slate-50 border border-transparent hover:border-slate-200 transition-all"
                                                >
                                                    <div className="flex items-center gap-3">
                                                        <span className="bg-slate-100 text-slate-600 font-mono text-sm font-bold bg-opacity-70 px-2 py-1 rounded">
                                                            {dept.code}
                                                        </span>
                                                        <span className="text-slate-700 font-medium group-hover:text-orange-700">
                                                            {dept.name}
                                                        </span>
                                                    </div>
                                                    <ChevronRight className="h-4 w-4 text-slate-300 group-hover:text-orange-400" />
                                                </Link>
                                            );
                                        })}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* SEO Text */}
            <section className="bg-slate-50 py-16 border-t border-slate-200">
                <div className="container mx-auto px-4 max-w-4xl prose prose-slate">
                    <h3>Pourquoi utiliser notre annuaire ?</h3>
                    <p>
                        La réalisation de travaux requiert une expertise locale et des professionnels de confiance.
                    </p>
                    <p>
                        Notre annuaire référence des milliers d'artisans capables d'intervenir rapidement chez vous pour :
                    </p>
                    <ul>
                        <li>Effectuer une visite technique gratuite.</li>
                        <li>Établir des devis précis et sans engagement.</li>
                        <li>Vous conseiller sur les aides de l'État (MaPrimeRénov', primes CEE) et subventions locales.</li>
                    </ul>
                </div>
            </section>
            
            <MobileStickyCta href="/devis" text="Consulter l'annuaire" />
        </div>
    );
}
