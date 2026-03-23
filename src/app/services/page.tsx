import Link from "next/link";
import { ChevronRight, Map, MapPin, Users, TrendingUp } from "lucide-react";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { SERVICE_GROUPS } from "@/lib/services-data";
import { MobileStickyCta } from "@/components/ui/MobileStickyCta";
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Tous nos services artisans | Comparateur Devis",
    description: "Trouvez le professionnel idéal pour tous vos travaux. Artisans référencés, devis gratuits. 160 métiers de l'artisanat.",
};

export default function ServicesIndexPage() {
    return (
        <div className="min-h-screen bg-slate-50 pb-20 md:pb-0">
            {/* Premium Dark Hero Section harmonized with Home */}
            <section className="relative bg-slate-950 pt-16 pb-24 overflow-hidden border-b border-slate-800">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full overflow-hidden pointer-events-none">
                    <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[70%] bg-orange-600/10 blur-[120px] rounded-full mix-blend-screen"></div>
                    <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[60%] bg-blue-600/10 blur-[120px] rounded-full mix-blend-screen"></div>
                </div>

                <div className="container mx-auto px-4 text-center relative z-10">
                    <div className="mb-6 flex justify-center">
                        <div className="inline-flex items-center gap-2 bg-slate-900 border border-slate-700 text-orange-400 px-4 py-1.5 rounded-full text-sm font-medium">
                            <svg className="w-4 h-4 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                            </svg>
                            160 métiers de l'Habitat
                        </div>
                    </div>
                    
                    <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight text-white">
                        Tous nos <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-300">services</span> artisans
                    </h1>
                    <p className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto mb-10">
                        Trouvez le professionnel idéal pour tous vos travaux. Artisans référencés, devis gratuits.
                    </p>

                    <div className="inline-flex items-center gap-4 bg-slate-900 border border-slate-700 p-4 rounded-2xl">
                        <div className="bg-orange-500/10 p-2 rounded-lg">
                            <TrendingUp className="h-6 w-6 text-orange-400" />
                        </div>
                        <div className="text-left">
                            <div className="text-xl font-bold text-white">2h</div>
                            <div className="text-sm text-slate-400">Temps de réponse</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Navigation Cards */}
            <section className="py-8 -mt-8 relative z-10">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="bg-white rounded-t-2xl px-6 py-4 shadow-sm border-b border-slate-100 flex items-center justify-center">
                         <Breadcrumbs
                            items={[ { label: "Services" } ]}
                        />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 xl:gap-6 pt-6">
                        <Link href="/annuaire" className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md hover:border-orange-300 transition-all group flex items-center gap-4">
                            <div className="bg-orange-50 p-4 rounded-xl group-hover:bg-orange-100 transition-colors">
                                <Map className="h-6 w-6 text-orange-600" />
                            </div>
                            <div>
                                <div className="font-bold text-slate-900 group-hover:text-orange-600 transition-colors">Par région</div>
                                <div className="text-sm text-slate-500 mt-1">13 régions</div>
                            </div>
                        </Link>

                        <Link href="/annuaire" className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md hover:border-emerald-300 transition-all group flex items-center gap-4">
                            <div className="bg-emerald-50 p-4 rounded-xl group-hover:bg-emerald-100 transition-colors">
                                <MapPin className="h-6 w-6 text-emerald-600" />
                            </div>
                            <div>
                                <div className="font-bold text-slate-900 group-hover:text-emerald-600 transition-colors">Par département</div>
                                <div className="text-sm text-slate-500 mt-1">101 départements</div>
                            </div>
                        </Link>

                        <Link href="/annuaire" className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md hover:border-blue-300 transition-all group flex items-center gap-4">
                            <div className="bg-blue-50 p-4 rounded-xl group-hover:bg-blue-100 transition-colors">
                                <Users className="h-6 w-6 text-blue-600" />
                            </div>
                            <div>
                                <div className="font-bold text-slate-900 group-hover:text-blue-600 transition-colors">Par ville</div>
                                <div className="text-sm text-slate-500 mt-1">35 000+ villes</div>
                            </div>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Filtered Services List */}
            <section className="py-12 bg-slate-50">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="grid gap-12">
                        {SERVICE_GROUPS.map(group => (
                            <div key={group.title} className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm">
                                <div className="flex items-center gap-4 mb-8">
                                    <div className={`${group.bgColor} p-4 rounded-2xl`}>
                                        <group.icon className={`h-8 w-8 ${group.color}`} />
                                    </div>
                                    <div>
                                        <h2 className="text-2xl font-bold text-slate-900">{group.title}</h2>
                                        <p className="text-slate-500 font-medium">{group.items.length} services populaires</p>
                                    </div>
                                </div>

                                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                    {group.items.map(service => (
                                        <Link 
                                            key={service.slug} 
                                            href={`/${service.slug}`}
                                            className="group/item flex items-center justify-between p-4 rounded-2xl border border-slate-100 hover:border-orange-200 hover:bg-orange-50/50 transition-all"
                                        >
                                            <div>
                                                <div className="font-bold text-slate-800 group-hover/item:text-orange-700">{service.name}</div>
                                                <div className="text-sm text-slate-500 mt-1">{service.desc}</div>
                                            </div>
                                            <div className="bg-white w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center shadow-sm group-hover/item:border-orange-300 group-hover/item:bg-orange-100 transition-all">
                                                <ChevronRight className="h-4 w-4 text-slate-400 group-hover/item:text-orange-600" />
                                            </div>
                                        </Link>
                                    ))}
                                    
                                    {/* Link "See more" which brings back to standard annuaire */}
                                    <Link 
                                        href={`/annuaire`}
                                        className="flex items-center justify-center p-4 rounded-2xl border border-dashed border-slate-300 hover:border-orange-400 hover:bg-orange-50 transition-all group/more text-slate-500 hover:text-orange-600 font-medium h-full min-h-[82px]"
                                    >
                                        Voir plus d'artisans
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            
            <MobileStickyCta href="/devis" text="Recevoir 3 devis gratuits" />
        </div>
    );
}
