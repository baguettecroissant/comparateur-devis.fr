"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { 
    Search, Menu, X, Home, ChevronDown, Check,
    Clock, MapPin, Hammer
} from "lucide-react";
import { getAllDepartments, getRegions, slugifyRegion } from "@/lib/cities";
import { SERVICE_GROUPS } from "@/lib/services-data";

const TOP_CITIES = [
    { name: "Paris", slug: "paris-1er-arrondissement" },
    { name: "Marseille", slug: "marseille-1er-arrondissement" },
    { name: "Lyon", slug: "lyon-1er-arrondissement" },
    { name: "Toulouse", slug: "toulouse" },
    { name: "Nice", slug: "nice" },
    { name: "Nantes", slug: "nantes" },
    { name: "Montpellier", slug: "montpellier" },
    { name: "Strasbourg", slug: "strasbourg" },
    { name: "Bordeaux", slug: "bordeaux" },
    { name: "Lille", slug: "lille" },
    { name: "Rennes", slug: "rennes" },
    { name: "Reims", slug: "reims" },
];

export function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const router = useRouter();

    const regions = getRegions();
    // Assuming we just take the first 12 for the Mega Menu visually
    const displayRegions = regions.slice(0, 12); 

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        if (searchQuery.trim()) {
            // Redirect to standard annuaire with a query if desired, or a default search page.
            // PSEO is usually click-based, but a search acts as a filter.
            router.push(`/annuaire?q=${encodeURIComponent(searchQuery)}`);
        }
    };

    return (
        <header className="w-full relative z-50">
            {/* Top Bar */}
            <div className="bg-[#fcfaf8] border-b border-slate-100 py-1.5 text-center text-xs sm:text-sm font-medium text-slate-600 flex items-center justify-center gap-2">
                <Check className="h-4 w-4 text-emerald-600" />
                Artisans vérifiés SIREN — Service 100% gratuit
            </div>

            {/* Main Header */}
            <div className="bg-white border-b border-slate-200">
                <div className="container mx-auto flex h-16 md:h-20 items-center justify-between px-4 sm:px-6 lg:px-8">
                    
                    {/* Left: Logo */}
                    <Link href="/" className="flex items-center gap-3 shrink-0 mr-4 lg:mr-8">
                        <span className="text-xl md:text-2xl font-extrabold text-[#1a1c29] tracking-tight flex items-center gap-2">
                            <Hammer className="h-6 w-6 md:h-7 md:w-7 text-orange-500" />
                            Comparateur<span className="text-orange-500">Devis</span>
                        </span>
                    </Link>

                    {/* Middle-Left: Search Bar (Hidden on Mobile) */}
                    <div className="hidden lg:block flex-1 max-w-sm mr-8">
                        <form onSubmit={handleSearch} className="relative flex items-center w-full">
                            <div className="absolute left-4 text-slate-400">
                                <Search className="h-4 w-4" />
                            </div>
                            <input
                                type="text"
                                placeholder="Rechercher un artisan"
                                className="w-full h-11 pl-10 pr-12 rounded-full border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all text-sm"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                            <button
                                type="submit"
                                aria-label="Rechercher"
                                className="absolute right-1.5 h-8 w-8 bg-blue-600 hover:bg-blue-700 text-white rounded-full flex items-center justify-center transition-colors"
                            >
                                <Search className="h-4 w-4" />
                            </button>
                        </form>
                    </div>

                    {/* Middle-Right: Navigation (Mega Menus) */}
                    <nav className="hidden lg:flex items-center gap-1 xl:gap-4 shrink-0 mr-4">
                        
                        {/* Services Mega Menu */}
                        <div className="relative group px-3 py-6 -my-6 cursor-pointer">
                            <span className="flex items-center gap-1 text-[15px] font-medium text-slate-700 group-hover:text-slate-900 transition-colors">
                                Services <ChevronDown className="h-4 w-4 text-slate-400 group-hover:rotate-180 transition-transform duration-200" />
                            </span>
                            
                            {/* Dropdown Box */}
                            <div className="absolute top-full left-1/2 -translate-x-1/2 w-[90vw] max-w-[1200px] bg-white border border-slate-200 rounded-b-2xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform origin-top -translate-y-2 group-hover:translate-y-0 p-8 grid grid-cols-6 gap-8 cursor-default">
                                <div className="col-span-6 flex items-center justify-between pb-4 border-b border-slate-100 mb-2">
                                    <div>
                                        <h3 className="text-xl font-bold text-slate-900">Tous nos services artisans</h3>
                                        <p className="text-slate-500 mt-1">160 métiers, des milliers d'artisans qualifiés partout en France</p>
                                    </div>
                                    <div className="bg-blue-900 text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2">
                                        <Check className="h-4 w-4" /> 35 000+ villes couvertes
                                    </div>
                                </div>
                                
                                {SERVICE_GROUPS.map((group) => (
                                    <div key={group.title} className="flex flex-col gap-5">
                                        <h4 className={`flex items-center gap-2 font-bold ${group.color}`}>
                                            <group.icon className="h-5 w-5" />
                                            {group.title}
                                        </h4>
                                        <ul className="space-y-4">
                                            {group.items.map((item) => (
                                                <li key={item.slug}>
                                                    <Link href={`/${item.slug}`} className="group/item block hover:opacity-80">
                                                        <div className="font-medium text-slate-800 group-hover/item:text-orange-600 transition-colors">{item.name}</div>
                                                        <div className="text-xs text-slate-500 mt-0.5">{item.desc}</div>
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}

                                <div className="col-span-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                                    <Link href="/services" className="text-blue-600 font-medium hover:underline flex items-center gap-1">
                                        Voir tous les services →
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {/* Villes Mega Menu */}
                        <div className="relative group px-3 py-6 -my-6 cursor-pointer">
                            <span className="flex items-center gap-1 text-[15px] font-medium text-slate-700 group-hover:text-slate-900 transition-colors">
                                Villes <ChevronDown className="h-4 w-4 text-slate-400 group-hover:rotate-180 transition-transform duration-200" />
                            </span>
                            <div className="absolute top-full left-1/2 -translate-x-1/2 w-[800px] bg-white border border-slate-200 rounded-b-2xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform origin-top -translate-y-2 group-hover:translate-y-0 p-8 cursor-default">
                                <h3 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-4 mb-6">Trouvez un artisan par grande ville</h3>
                                <div className="grid grid-cols-4 gap-6">
                                    {TOP_CITIES.map(city => (
                                        <Link key={city.slug} href={`/annuaire`} className="flex items-center gap-2 text-slate-600 hover:text-orange-600 hover:bg-orange-50 p-2 -mx-2 rounded-lg transition-all">
                                            <MapPin className="h-4 w-4 text-slate-400" />
                                            <span className="font-medium">{city.name}</span>
                                        </Link>
                                    ))}
                                </div>
                                <div className="mt-6 pt-4 border-t border-slate-100 flex justify-between items-center text-sm">
                                    <Link href="/annuaire" className="text-blue-600 font-medium hover:underline">Voir toutes les villes →</Link>
                                    <span className="text-emerald-600 flex items-center gap-1"><Check className="h-4 w-4"/> Artisans référencés dans chaque ville</span>
                                </div>
                            </div>
                        </div>

                        {/* Régions Mega Menu (Simplified) */}
                        <div className="relative group px-3 py-6 -my-6 cursor-pointer">
                            <span className="flex items-center gap-1 text-[15px] font-medium text-slate-700 group-hover:text-slate-900 transition-colors">
                                Régions <ChevronDown className="h-4 w-4 text-slate-400 group-hover:rotate-180 transition-transform duration-200" />
                            </span>
                            <div className="absolute top-full left-1/2 -translate-x-1/2 w-[800px] bg-white border border-slate-200 rounded-b-2xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform origin-top -translate-y-2 group-hover:translate-y-0 p-8 cursor-default">
                                <h3 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-4 mb-6">Toutes les régions de France</h3>
                                <div className="grid grid-cols-3 gap-4">
                                    {displayRegions.map(region => (
                                        <Link key={region} href={`/regions/${slugifyRegion(region)}`} className="group/reg flex items-center gap-3 p-3 border border-slate-100 rounded-xl hover:border-orange-200 hover:shadow-sm transition-all">
                                            <div className="bg-slate-50 p-2 rounded-lg group-hover/reg:bg-orange-50 transition-colors">
                                                <MapPin className="h-5 w-5 text-slate-400 group-hover/reg:text-orange-500" />
                                            </div>
                                            <span className="font-medium text-slate-700 group-hover/reg:text-orange-700">{region}</span>
                                        </Link>
                                    ))}
                                </div>
                                <div className="mt-6 pt-4 border-t border-slate-100 flex justify-center text-sm">
                                    <Link href="/regions" className="text-blue-600 font-medium hover:underline">Voir toutes les régions →</Link>
                                </div>
                            </div>
                        </div>

                        {/* Plus Dropdown */}
                        <div className="relative group px-3 py-6 -my-6 cursor-pointer">
                            <span className="flex items-center gap-1 text-[15px] font-medium text-slate-700 group-hover:text-slate-900 transition-colors">
                                Plus <ChevronDown className="h-4 w-4 text-slate-400 group-hover:rotate-180 transition-transform duration-200" />
                            </span>
                            <div className="absolute top-full right-0 w-56 bg-white border border-slate-200 rounded-b-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform origin-top -translate-y-2 group-hover:translate-y-0 py-2 cursor-default">
                                {[
                                    { label: "Avis artisans", href: "/guides" },
                                    { label: "Tarifs", href: "/simulateur-prix" },
                                    { label: "Guides travaux", href: "/guides" },
                                    { label: "FAQ", href: "/faq" },
                                    { label: "Comparatifs", href: "/marques" },
                                    { label: "Glossaire", href: "/glossaire" }
                                ].map(link => (
                                    <Link key={link.label} href={link.href} className="block px-4 py-2.5 text-sm font-medium text-slate-600 hover:text-orange-600 hover:bg-slate-50 transition-colors">
                                        {link.label}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </nav>

                    {/* Right: CTAs */}
                    <div className="flex items-center gap-3 sm:gap-4 shrink-0">

                        <Link href="/devis">
                            <Button className="bg-orange-600 hover:bg-orange-500 text-white text-sm md:text-base px-4 md:px-6 h-[40px] md:h-[42px] rounded-full shadow-[0_0_20px_-5px_rgba(234,88,12,0.4)] transition-all font-bold">
                                Trouver un artisan
                            </Button>
                        </Link>

                        {/* Mobile Menu Toggle */}
                        <button
                            className="lg:hidden p-2 text-slate-600 hover:text-orange-600 transition-colors -mr-2"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            aria-label="Menu"
                        >
                            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Backdrop */}
            {mobileMenuOpen && (
                <div className="lg:hidden absolute top-full left-0 w-full bg-white border-t border-slate-100 shadow-2xl h-[calc(100vh-80px)] overflow-y-auto">
                    <div className="p-4 space-y-6">
                        {/* Mobile Search */}
                        <form onSubmit={handleSearch} className="relative flex items-center">
                            <div className="absolute left-4 text-slate-400">
                                <Search className="h-4 w-4" />
                            </div>
                            <input
                                type="text"
                                placeholder="Rechercher un artisan"
                                className="w-full h-12 pl-12 pr-4 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-orange-500/20 text-base"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                        </form>

                        <nav className="space-y-4">
                            <div>
                                <h4 className="font-bold text-slate-900 border-b border-slate-100 pb-2 mb-3">Menu</h4>
                                <ul className="space-y-1">
                                    <li><Link href="/services" onClick={() => setMobileMenuOpen(false)} className="block py-2.5 text-slate-700 font-medium hover:text-orange-600">Tous nos services</Link></li>
                                    <li><Link href="/annuaire" onClick={() => setMobileMenuOpen(false)} className="block py-2.5 text-slate-700 font-medium hover:text-orange-600">Villes couvertes</Link></li>
                                    <li><Link href="/regions" onClick={() => setMobileMenuOpen(false)} className="block py-2.5 text-slate-700 font-medium hover:text-orange-600">Régions de France</Link></li>
                                    <li><Link href="/guides" onClick={() => setMobileMenuOpen(false)} className="block py-2.5 text-slate-700 font-medium hover:text-orange-600">Guides travaux</Link></li>
                                    <li><Link href="/simulateur-prix" onClick={() => setMobileMenuOpen(false)} className="block py-2.5 text-slate-700 font-medium hover:text-orange-600">Tarifs & Prix</Link></li>
                                </ul>
                            </div>
                            
                            <div className="pt-4 mt-4 border-t border-slate-100">
                                <Link href="/devis" onClick={() => setMobileMenuOpen(false)}>
                                    <Button className="w-full bg-orange-600 hover:bg-orange-500 text-white h-12 rounded-full text-lg font-bold shadow-[0_0_20px_-5px_rgba(234,88,12,0.4)]">
                                        Trouver un artisan
                                    </Button>
                                </Link>
                            </div>
                        </nav>
                    </div>
                </div>
            )}
        </header>
    );
}
