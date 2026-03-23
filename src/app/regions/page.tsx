import Link from 'next/link';
import { Metadata } from 'next';
import { getRegions, slugifyRegion, getAllDepartments } from '@/lib/cities';
import { Globe, Building2, Users, ChevronRight, MapPin } from 'lucide-react';
import { Breadcrumbs } from '@/components/seo/Breadcrumbs';
import { MobileStickyCta } from "@/components/ui/MobileStickyCta";

export const metadata: Metadata = {
    title: "22 régions, un réseau national d'artisans | Comparateur Devis",
    description: "Des artisans référencés via les données SIREN dans toutes les régions de France. Explorez l'annuaire des artisans du bâtiment par région.",
};

export default function RegionsHubPage() {
    const regions = getRegions();
    const departmentsCount = getAllDepartments().length;

    // Filter out Outre-Mer for visual grouping if we wanted, or just list them all.
    // For simplicity we will list them all.
    const isOutreMer = (region: string) => ["Guadeloupe", "Martinique", "Guyane", "La Réunion", "Mayotte"].includes(region);
    
    const metropoleRegions = regions.filter(r => !isOutreMer(r));
    const outreMerRegions = regions.filter(r => isOutreMer(r));

    const renderRegionCard = (region: string) => {
        const dCount = getAllDepartments().filter(d => d.region === region).length;
        return (
            <Link 
                key={region} 
                href={`/regions/${slugifyRegion(region)}`}
                className="bg-white rounded-2xl border border-slate-200 p-6 flex items-center justify-between group hover:border-emerald-300 hover:shadow-md transition-all h-full"
            >
                <div className="flex items-center gap-4">
                    <div className="bg-emerald-50 text-emerald-600 p-3 rounded-xl group-hover:bg-emerald-100 group-hover:text-emerald-700 transition-colors">
                        <Globe className="h-6 w-6" />
                    </div>
                    <div>
                        <h3 className="text-lg font-bold text-slate-800 group-hover:text-emerald-700 transition-colors">{region}</h3>
                        <p className="text-sm text-slate-500 font-medium">{dCount} département{dCount > 1 ? 's' : ''}</p>
                    </div>
                </div>
                <div className="bg-slate-50 p-2 rounded-full group-hover:bg-emerald-50 transition-colors">
                    <ChevronRight className="h-5 w-5 text-slate-400 group-hover:text-emerald-600" />
                </div>
            </Link>
        );
    }

    return (
        <div className="min-h-screen bg-slate-50 pb-20 md:pb-0">
            {/* Premium Dark Hero harmonized with Home */}
            <section className="relative bg-slate-950 pt-16 pb-32 overflow-hidden border-b border-slate-800">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full overflow-hidden pointer-events-none">
                    <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[70%] bg-orange-600/10 blur-[120px] rounded-full mix-blend-screen"></div>
                    <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[60%] bg-blue-600/10 blur-[120px] rounded-full mix-blend-screen"></div>
                </div>

                <div className="container mx-auto px-4 relative z-10 text-center">
                    <div className="mb-6 flex justify-center">
                        <div className="inline-flex items-center gap-2 bg-slate-900 border border-slate-700 text-emerald-400 px-4 py-1.5 rounded-full text-sm font-medium">
                            <Globe className="h-4 w-4" />
                            Régions • France métropolitaine et outre-mer
                        </div>
                    </div>
                    
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 tracking-tight">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">{regions.length} régions</span>, un réseau<br/>national
                    </h1>
                    <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-12">
                        Des artisans référencés via les données SIREN dans toutes les régions de France. Explorez l'annuaire des artisans du bâtiment.
                    </p>

                    <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
                        <div className="bg-slate-900 border border-slate-700 rounded-2xl p-4 flex items-center gap-4 min-w-[200px] text-left">
                            <Globe className="h-6 w-6 text-emerald-500" />
                            <div>
                                <div className="text-2xl font-bold text-white">{regions.length}</div>
                                <div className="text-xs text-slate-400 uppercase tracking-wider">Régions</div>
                            </div>
                        </div>
                        <div className="bg-slate-900 border border-slate-700 rounded-2xl p-4 flex items-center gap-4 min-w-[200px] text-left">
                            <Building2 className="h-6 w-6 text-orange-500" />
                            <div>
                                <div className="text-2xl font-bold text-white">{departmentsCount}</div>
                                <div className="text-xs text-slate-400 uppercase tracking-wider">Départements</div>
                            </div>
                        </div>
                        <div className="bg-slate-900 border border-slate-700 rounded-2xl p-4 flex items-center gap-4 min-w-[200px] text-left">
                            <Users className="h-6 w-6 text-blue-500" />
                            <div>
                                <div className="text-2xl font-bold text-white flex items-center gap-1">SIREN</div>
                                <div className="text-xs text-slate-400 uppercase tracking-wider">Données officielles</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-16 relative z-10">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-slate-900 mb-4">Choisissez votre région</h2>
                        <p className="text-slate-500 text-lg">Chaque région dispose d'artisans qualifiés pour tous vos projets de travaux.</p>
                    </div>

                    {metropoleRegions.length > 0 && (
                        <div className="mb-12">
                            <div className="flex items-center gap-2 text-sm font-bold text-slate-500 uppercase tracking-wider mb-6">
                                <MapPin className="h-5 w-5 text-blue-600" /> FRANCE MÉTROPOLITAINE
                            </div>
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 xl:gap-6">
                                {metropoleRegions.map(renderRegionCard)}
                            </div>
                        </div>
                    )}

                    {outreMerRegions.length > 0 && (
                        <div>
                           <div className="flex items-center gap-2 text-sm font-bold text-slate-500 uppercase tracking-wider mb-6">
                                <Globe className="h-5 w-5 text-emerald-600" /> OUTRE-MER
                            </div>
                            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 xl:gap-6">
                                {outreMerRegions.map(renderRegionCard)}
                            </div>
                        </div>
                    )}

                    <div className="mt-16 pt-8 border-t border-slate-200 flex flex-col sm:flex-row justify-between items-center gap-4">
                        <Link href="/annuaire" className="text-blue-600 font-bold hover:underline flex items-center gap-2">
                            Voir toutes les régions <ChevronRight className="h-4 w-4" />
                        </Link>
                        <div className="text-sm font-medium flex items-center gap-2 text-slate-500">
                            <Globe className="h-4 w-4 text-emerald-500" /> Couverture nationale complète
                        </div>
                    </div>
                </div>
            </section>
            
            <MobileStickyCta href="/devis" text="Trouver un pro pour 0€" />
        </div>
    );
}
