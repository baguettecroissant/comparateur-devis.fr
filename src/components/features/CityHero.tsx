"use client";

import { City } from "@/types";
import { Category } from "@/lib/categories";
import { Button } from "@/components/ui/button";
import { FileText, MapPin } from "lucide-react";
import Link from 'next/link';

interface CityHeroProps {
    city: City;
    category: Category;
}

export function CityHero({ city, category }: CityHeroProps) {
    return (
        <section className="relative bg-slate-950 pt-16 pb-20 lg:pt-24 lg:pb-24 overflow-hidden border-b border-slate-800">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[70%] bg-orange-600/10 blur-[120px] rounded-full mix-blend-screen"></div>
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[60%] bg-blue-600/10 blur-[120px] rounded-full mix-blend-screen"></div>
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl relative z-10">
                <div className="inline-flex items-center gap-2 bg-slate-900 border border-slate-700 text-slate-300 px-4 py-2 rounded-full font-medium mb-8">
                    <MapPin className="h-4 w-4 text-orange-500" />
                    <span>Artisans disponibles à {city.name} ({city.zip})</span>
                </div>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
                    Devis {category.name} à <br className="hidden sm:block"/><span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-300">{city.name}</span>
                </h1>

                <p className="text-xl text-slate-400 mb-10 leading-relaxed">
                    Comparez les tarifs des artisans qualifiés dans le {city.department_name} ({city.region}).
                    Obtenez jusqu'à 3 devis gratuits sans engagement pour réaliser votre projet.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Button asChild size="lg" className="bg-orange-600 hover:bg-orange-500 text-white text-lg px-10 h-16 w-full sm:w-auto rounded-full shadow-[0_0_40px_-10px_rgba(234,88,12,0.5)] transition-all transform hover:scale-105">
                        <Link href="#devis">
                            <FileText className="mr-2 h-5 w-5" />
                            Recevoir mes devis gratuits
                        </Link>
                    </Button>
                    <p className="text-sm text-slate-500 mt-2 sm:mt-0">
                        Gratuit & Sans engagement
                    </p>
                </div>
            </div>
        </section>
    );
}
