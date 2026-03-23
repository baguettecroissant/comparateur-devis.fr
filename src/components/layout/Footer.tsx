import Link from "next/link";
import { ShieldCheck, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, Hammer } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-slate-950 text-slate-400 pt-20 pb-10 border-t border-slate-800">
            <div className="container mx-auto px-4 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand & Description */}
                    <div className="space-y-6">
                        <Link href="/" className="inline-block">
                            <span className="text-3xl font-extrabold text-white tracking-tight flex items-center gap-2">
                                <Hammer className="h-8 w-8 text-orange-500" />
                                Comparateur<span className="text-orange-500">Devis</span>
                            </span>
                        </Link>
                        <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
                            La plateforme de référence pour estimer le coût de vos travaux et trouver les meilleurs artisans certifiés RGE partout en France. Devis gratuits et sans engagement.
                        </p>
                        <div className="flex items-center gap-4 pt-2">
                            <a href="#" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-orange-500 hover:text-white transition-all">
                                <Facebook className="w-5 h-5" />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-orange-500 hover:text-white transition-all">
                                <Twitter className="w-5 h-5" />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-orange-500 hover:text-white transition-all">
                                <Instagram className="w-5 h-5" />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-orange-500 hover:text-white transition-all">
                                <Linkedin className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    {/* Navigation */}
                    <div>
                        <h4 className="text-white font-bold text-lg mb-6">Plateforme</h4>
                        <ul className="space-y-4">
                            <li><Link href="/services" className="hover:text-orange-400 transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-orange-500 opacity-0 transition-opacity group-hover:opacity-100"></span>Tous les services</Link></li>
                            <li><Link href="/regions" className="hover:text-orange-400 transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-orange-500 opacity-0 transition-opacity group-hover:opacity-100"></span>Régions de France</Link></li>
                            <li><Link href="/annuaire" className="hover:text-orange-400 transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-orange-500 opacity-0 transition-opacity group-hover:opacity-100"></span>Annuaire des artisans</Link></li>
                            <li><Link href="/guides" className="hover:text-orange-400 transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-orange-500 opacity-0 transition-opacity group-hover:opacity-100"></span>Guides & Conseils</Link></li>
                            <li><Link href="/devis" className="hover:text-orange-400 transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-orange-500 opacity-0 transition-opacity group-hover:opacity-100"></span>Demander un devis</Link></li>
                        </ul>
                    </div>

                    {/* Legal */}
                    <div>
                        <h4 className="text-white font-bold text-lg mb-6">Informations</h4>
                        <ul className="space-y-4">
                            <li><Link href="/qui-sommes-nous" className="hover:text-orange-400 transition-colors">Qui sommes-nous ?</Link></li>
                            <li><Link href="/mentions-legales" className="hover:text-orange-400 transition-colors">Mentions légales</Link></li>
                            <li><Link href="/faq" className="hover:text-orange-400 transition-colors">Foire aux questions</Link></li>
                        </ul>
                    </div>

                    {/* Trust / Contact */}
                    <div>
                        <h4 className="text-white font-bold text-lg mb-6">Confiance & Sécurité</h4>
                        <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 space-y-4">
                            <div className="flex items-start gap-4">
                                <ShieldCheck className="w-8 h-8 text-green-500 shrink-0" />
                                <div>
                                    <h5 className="text-slate-200 font-semibold mb-1">Artisans Vérifiés</h5>
                                    <p className="text-xs text-slate-500">Labels RGE, Qualibat, assurances décennales contrôlées</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
                    <p>© {new Date().getFullYear()} Comparateur-Devis.fr — Tous droits réservés.</p>
                    <div className="flex gap-6">
                        <span className="flex items-center gap-1.5">
                            <span className="w-2 h-2 rounded-full bg-green-500"></span> Service actif
                        </span>
                        <span>Fait avec ❤️ en France</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
