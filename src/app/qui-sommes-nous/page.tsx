import { Metadata } from 'next';
import Link from 'next/link';
import { ShieldCheck, Target, Users, MapPin, Wrench, ArrowRight, Award, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

export const metadata: Metadata = {
    title: "Qui Sommes-Nous ? | Comparateur-Devis.fr",
    description: "Découvrez la mission de Comparateur-Devis.fr : vous accompagner dans tous vos travaux en vous connectant aux meilleurs artisans de France. 150+ services, 35 000 villes.",
};

export default function QuiSommesNousPage() {
    return (
        <div className="bg-white min-h-screen">
            {/* Hero Section */}
            <section className="bg-slate-950 border-b border-slate-800 py-24 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[50%] h-full bg-orange-600/10 blur-[100px] pointer-events-none"></div>
                
                <div className="container mx-auto px-4 text-center max-w-4xl relative z-10">
                    <div className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/20 text-orange-400 px-4 py-1.5 rounded-full text-sm font-medium mb-6">
                        <Target className="h-4 w-4" />
                        <span>Notre Mission</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 tracking-tight">
                        Redonner le pouvoir aux <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-300">Particuliers</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-slate-300 leading-relaxed max-w-3xl mx-auto">
                        Le marché des travaux est complexe. Notre vocation est d'apporter de la transparence sur les prix et de vous connecter aux artisans les plus qualifiés de votre région.
                    </p>
                </div>
            </section>

            {/* Numbers Section */}
            <section className="py-12 bg-white border-b border-slate-100">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-slate-100">
                        <div className="text-center px-4">
                            <div className="text-4xl font-extrabold text-slate-900 mb-2">150+</div>
                            <div className="text-sm text-slate-500 font-medium uppercase tracking-wider">Métiers couverts</div>
                        </div>
                        <div className="text-center px-4">
                            <div className="text-4xl font-extrabold text-slate-900 mb-2">35k</div>
                            <div className="text-sm text-slate-500 font-medium uppercase tracking-wider">Communes desservies</div>
                        </div>
                        <div className="text-center px-4">
                            <div className="text-4xl font-extrabold text-slate-900 mb-2">48h</div>
                            <div className="text-sm text-slate-500 font-medium uppercase tracking-wider">Délai de réponse moyen</div>
                        </div>
                        <div className="text-center px-4">
                            <div className="text-4xl font-extrabold text-orange-500 mb-2">100%</div>
                            <div className="text-sm text-slate-500 font-medium uppercase tracking-wider">Gratuit pour vous</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <div className="container mx-auto px-4 py-20 max-w-5xl">
                <div className="grid md:grid-cols-3 gap-16">
                    
                    {/* Left Body */}
                    <div className="md:col-span-2 prose prose-lg prose-slate max-w-none">
                        <div className="mb-10 rounded-3xl overflow-hidden shadow-2xl relative">
                            <Image 
                                src="/images/about-team.png" 
                                alt="L'équipe Comparateur-Devis et ses artisans partenaires" 
                                width={800} 
                                height={400} 
                                className="w-full h-[400px] object-cover m-0"
                            />
                            <div className="absolute inset-0 border-4 border-white/10 rounded-3xl mix-blend-overlay pointer-events-none"></div>
                        </div>

                        <h2 className="text-3xl font-bold text-slate-900 mb-6 mt-0">Notre Histoire et notre Vision</h2>
                        <p>
                            Lancé par des passionnés du web et de l'habitat, <strong>Comparateur-Devis.fr</strong> est né d'un constat partagé par de nombreux Français : il est souvent difficile de trouver le bon artisan, de vérifier ses qualifications, et surtout, d'être sûr de payer le <em>juste prix</em>.
                        </p>
                        <p>
                            Que ce soit pour l'installation d'une <Link href="/pompe-a-chaleur" className="text-orange-600 no-underline hover:underline font-medium">pompe à chaleur</Link>, 
                            une urgence en <Link href="/plomberie" className="text-orange-600 no-underline hover:underline font-medium">plomberie</Link>, 
                            ou la rénovation complète d'une <Link href="/salles-de-bains" className="text-orange-600 no-underline hover:underline font-medium">salle de bain</Link>, 
                            le processus peut être anxiogène.
                        </p>

                        <div className="bg-slate-50 border-l-4 border-slate-900 p-8 my-10 not-prose rounded-r-2xl">
                            <h3 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                                <Zap className="w-6 h-6 text-orange-500" />
                                Un réseau de partenaires d'excellence
                            </h3>
                            <p className="text-slate-700 leading-relaxed mb-4">
                                Pour vous garantir la meilleure expérience, nous avons noué un partenariat technologique fort avec le réseau national d'artisans <strong>ViteUnDevis.com</strong>.
                            </p>
                            <p className="text-slate-700 leading-relaxed">
                                Ce partenariat nous permet de trier et de qualifier des milliers de demandes chaque mois, en orientant votre projet uniquement vers des entreprises locales disposant des bonnes habilitations (<strong>RGE</strong>, Qualibat, assurances décennales).
                            </p>
                        </div>

                        <h2 className="text-3xl font-bold text-slate-900 mt-16 mb-6">Notre fonctionnement, pas à pas</h2>
                        <ol className="space-y-6">
                            <li>
                                <strong>Expression du besoin :</strong> Via notre portail <Link href="/devis" className="text-orange-600 no-underline hover:underline">devis gratuit</Link>, vous nous expliquez votre projet en 2 minutes chrono.
                            </li>
                            <li>
                                <strong>Analyse & Ciblage :</strong> Notre algorithme (appuyé par nos conseillers) identifie les artisans disponibles dans notre <Link href="/annuaire" className="text-orange-600 no-underline hover:underline">annuaire national</Link> qui correspondent exactement à votre type de chantier et à votre zone géographique (voir nos <Link href="/regions" className="text-orange-600 no-underline hover:underline">régions desservies</Link>).
                            </li>
                            <li>
                                <strong>Mise en relation :</strong> Un maximum de 3 artisans vous contactent pour affiner le chiffrage. Vous comparez les prix, vous choisissez, ou vous déclinez sans frais.
                            </li>
                        </ol>

                        <h2 className="text-3xl font-bold text-slate-900 mt-16 mb-6">Pourquoi ce service est-il gratuit ?</h2>
                        <p>
                            La transparence est notre maître-mot. Vous ne paierez jamais un centime pour utiliser Comparateur-Devis.fr. 
                            Notre modèle économique repose sur les professionnels : ce sont les artisans qui nous rémunèrent (ou notre partenaire de réseau) sous forme d'abonnement ou de frais de mise en relation pour avoir l'opportunité de vous proposer leurs services. 
                            <strong>Ce coût n'est jamais répercuté sur votre devis final</strong>, bien au contraire : la mise en concurrence fait mécaniquement baisser les prix.
                        </p>
                    </div>

                    {/* Right Sidebar - Internal Linking Focus */}
                    <div>
                        <div className="sticky top-10 space-y-8">
                            
                            {/* Fast Actions */}
                            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                                <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                                    <Wrench className="w-5 h-5 text-orange-500" />
                                    Découvrir nos services
                                </h3>
                                <ul className="space-y-3">
                                    <li><Link href="/services" className="text-slate-600 hover:text-orange-600 flex items-center justify-between group"><span>Toutes les catégories</span> <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-orange-500"/></Link></li>
                                    <li><Link href="/guides" className="text-slate-600 hover:text-orange-600 flex items-center justify-between group"><span>Guides d'experts</span> <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-orange-500"/></Link></li>
                                    <li><Link href="/outils" className="text-slate-600 hover:text-orange-600 flex items-center justify-between group"><span>Outils de calcul</span> <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-orange-500"/></Link></li>
                                    <li><Link href="/faq" className="text-slate-600 hover:text-orange-600 flex items-center justify-between group"><span>Questions fréquentes</span> <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-orange-500"/></Link></li>
                                </ul>
                            </div>

                            {/* Top Regions Grid */}
                            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                                <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                                    <MapPin className="w-5 h-5 text-blue-500" />
                                    Notre réseau local
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                    <Link href="/regions/ile-de-france" className="text-xs font-semibold px-3 py-1.5 bg-white border border-slate-200 text-slate-600 rounded-lg hover:border-blue-500 hover:text-blue-600">Île-de-France</Link>
                                    <Link href="/regions/provence-alpes-cote-d-azur" className="text-xs font-semibold px-3 py-1.5 bg-white border border-slate-200 text-slate-600 rounded-lg hover:border-blue-500 hover:text-blue-600">PACA</Link>
                                    <Link href="/regions/auvergne-rhone-alpes" className="text-xs font-semibold px-3 py-1.5 bg-white border border-slate-200 text-slate-600 rounded-lg hover:border-blue-500 hover:text-blue-600">Rhône-Alpes</Link>
                                    <Link href="/regions/nouvelle-aquitaine" className="text-xs font-semibold px-3 py-1.5 bg-white border border-slate-200 text-slate-600 rounded-lg hover:border-blue-500 hover:text-blue-600">Nouvelle-Aquitaine</Link>
                                </div>
                                <Link href="/regions" className="text-sm font-bold text-blue-600 mt-4 inline-block hover:underline">Voir les 13 régions →</Link>
                            </div>

                            {/* Trust Badge */}
                             <div className="bg-slate-900 p-6 rounded-2xl text-center">
                                <Award className="w-12 h-12 text-orange-400 mx-auto mb-4" />
                                <h4 className="text-white font-bold mb-2">Des artisans qualifiés</h4>
                                <p className="text-slate-400 text-sm mb-6">Notre charte qualité impose le contrôle systématique des assurances professionnelles.</p>
                                <Link href="/devis">
                                    <Button className="w-full bg-orange-600 hover:bg-orange-500 text-white rounded-xl">
                                        Lancer un projet
                                    </Button>
                                </Link>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
