"use client";

import { useSearchParams } from "next/navigation";
import { ViteUnDevisWidget } from "@/components/affiliation/ViteUnDevisWidget";
import { getCategoryFromSlug } from "@/lib/categories";
import { CheckCircle, Shield, Clock } from "lucide-react";
import Link from "next/link";
import { Suspense } from "react";

function DevisContent() {
    const searchParams = useSearchParams();
    const categorySlug = searchParams.get("category");
    const category = categorySlug ? getCategoryFromSlug(categorySlug) : undefined;

    const title = category
        ? `Devis ${category.name} — Gratuit & Sans Engagement`
        : "Recevez 3 Devis Gratuits pour tous vos Travaux";

    const subtitle = category
        ? `Comparez les artisans spécialisés en ${category.name.toLowerCase()} près de chez vous.`
        : "Comparez les installateurs certifiés de votre région et économisez jusqu'à 30% sur votre installation.";

    return (
        <div className="min-h-screen bg-slate-50 pb-20">
            {/* Dark Hero Background for Header */}
            <section className="relative bg-slate-950 pt-16 pb-40 overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full overflow-hidden pointer-events-none">
                    <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[70%] bg-orange-600/10 blur-[120px] rounded-full mix-blend-screen"></div>
                    <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[60%] bg-blue-600/10 blur-[120px] rounded-full mix-blend-screen"></div>
                </div>
                <div className="container mx-auto px-4 max-w-4xl relative z-10 text-center">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 tracking-tight">
                        {category ? (
                            <>Devis <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-300">{category?.name}</span><br className="hidden sm:block"/>Gratuit &amp; Sans Engagement</>
                        ) : (
                            <>Recevez <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-300">3 Devis Gratuits</span><br className="hidden sm:block"/>pour vos Travaux</>
                        )}
                    </h1>
                    <p className="text-xl text-slate-400 max-w-2xl mx-auto">{subtitle}</p>
                </div>
            </section>

            {/* Content overlapping the hero */}
            <div className="container mx-auto px-4 max-w-5xl -mt-24 relative z-20">
                <div className="grid lg:grid-cols-3 gap-8 items-start">
                    {/* Main Widget Area */}
                    <div className="lg:col-span-2 bg-white rounded-2xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)] border border-slate-100 overflow-hidden">
                        <div className="p-1 md:p-4 bg-white relative z-10">
                            <ViteUnDevisWidget category={category} />
                        </div>
                        <div className="bg-slate-50 p-4 text-center border-t border-slate-100 text-sm text-slate-500 font-medium relative z-0">
                            Vos données sont sécurisées et validées.
                        </div>
                    </div>

                    {/* Sidebar Trust Signals */}
                    <div className="space-y-6">
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                            <h3 className="font-bold text-slate-900 mb-4 text-lg">Pourquoi comparer ?</h3>
                            <ul className="space-y-4">
                                <li className="flex items-start gap-3">
                                    <div className="bg-green-100 p-1.5 rounded-full shrink-0 mt-0.5">
                                        <CheckCircle className="h-5 w-5 text-green-600" />
                                    </div>
                                    <div>
                                        <span className="font-bold block text-slate-900">100% Gratuit</span>
                                        <span className="text-sm text-slate-600">Aucun frais, aucun engagement.</span>
                                    </div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="bg-blue-100 p-1.5 rounded-full shrink-0 mt-0.5">
                                        <Shield className="h-5 w-5 text-blue-600" />
                                    </div>
                                    <div>
                                        <span className="font-bold block text-slate-900">Artisans Vérifiés</span>
                                        <span className="text-sm text-slate-600">RGE, Qualibat et décennale à jour.</span>
                                    </div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="bg-orange-100 p-1.5 rounded-full shrink-0 mt-0.5">
                                        <Clock className="h-5 w-5 text-orange-600" />
                                    </div>
                                    <div>
                                        <span className="font-bold block text-slate-900">Rapide</span>
                                        <span className="text-sm text-slate-600">Vos devis sous 48h maximum.</span>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        <div className="bg-slate-900 p-6 rounded-xl text-center text-white shadow-lg border border-slate-800">
                            <div className="text-4xl font-bold text-orange-400 mb-2">1 500+</div>
                            <div className="text-slate-300 font-medium">Familles accompagnées en 2026</div>
                        </div>
                    </div>
                </div>


                {/* SEO Content Section */}
                <div className="mt-20 pt-16 border-t border-slate-200">
                    <div className="grid lg:grid-cols-3 gap-12">
                        <div className="lg:col-span-2">
                             <article className="prose prose-slate max-w-none">
                                <h2 className="text-2xl font-bold text-slate-900 mb-6">Pourquoi comparer plusieurs devis pour vos travaux ?</h2>
                                <p>
                                    Tout projet d'aménagement ou de rénovation est sur-mesure, et son prix peut varier considérablement selon les prestataires.
                                    En moyenne, nos utilisateurs constatent des écarts de prix allant jusqu'à <strong>30%</strong> pour une configuration identique.
                                </p>
                                <p>
                                    Demander plusieurs devis vous permet de :
                                </p>
                                <ul className="list-disc pl-5 space-y-2 text-slate-700 mb-6">
                                    <li>Comparer les <strong>solutions techniques</strong> proposées par différents artisans.</li>
                                    <li>Négocier les tarifs en faisant jouer la concurrence locale.</li>
                                    <li>Vérifier les garanties et les contrats de maintenance inclus.</li>
                                </ul>

                                <h2 className="text-2xl font-bold text-slate-900 mb-6 mt-12">Quels éléments font varier le devis ?</h2>
                                <p>
                                    Le coût final dépend de plusieurs facteurs clés :
                                </p>
                                <ul className="space-y-4 mb-8">
                                    <li className="bg-white p-4 rounded-lg border border-slate-100 shadow-sm">
                                        <strong className="text-slate-900 block mb-1">La complexité de l'installation</strong>
                                        <span className="text-slate-600 text-sm">Difficulté d'accès, surface, ou techniques sur-mesure nécessaires.</span>
                                    </li>
                                    <li className="bg-white p-4 rounded-lg border border-slate-100 shadow-sm">
                                        <strong className="text-slate-900 block mb-1">Le choix des matériaux et de la gamme</strong>
                                        <span className="text-slate-600 text-sm">Finitions, options de confort, et marques sélectionnées.</span>
                                    </li>
                                    <li className="bg-white p-4 rounded-lg border border-slate-100 shadow-sm">
                                        <strong className="text-slate-900 block mb-1">Les travaux annexes</strong>
                                        <span className="text-slate-600 text-sm">Aménagements complémentaires indispensables (électricité, plomberie, finition).</span>
                                    </li>
                                </ul>

                                <div className="bg-blue-50 border-l-4 border-blue-500 p-6 my-8 rounded-r-lg">
                                    <h3 className="text-blue-900 font-bold mb-2">Bon à savoir : Les aides financières</h3>
                                    <p className="text-blue-800 text-sm">
                                        De nombreux travaux d'aménagement donnent droit à des aides de l'État comme <strong>MaPrimeRénov'</strong>, <strong>MaPrimeAdapt'</strong> ou les primes CEE. Un artisan RGE saura vous conseiller.
                                    </p>
                                </div>
                            </article>
                        </div>

                        <div className="lg:col-span-1">
                            <div className="sticky top-24">
                                <h3 className="text-xl font-bold text-slate-900 mb-6">Questions Fréquentes</h3>
                                <div className="space-y-4">
                                    <details className="group bg-white rounded-lg border border-slate-200 overflow-hidden">
                                        <summary className="flex cursor-pointer items-center justify-between p-4 font-medium text-slate-900 group-hover:bg-slate-50 transition-colors">
                                            La demande est-elle payante ?
                                            <span className="text-slate-400 group-open:rotate-180 transition-transform">▼</span>
                                        </summary>
                                        <div className="p-4 pt-0 text-sm text-slate-600 leading-relaxed">
                                            Non, notre service de mise en relation est <strong>100% gratuit</strong> pour vous. Nous sommes rémunérés par les artisans partenaires, ce qui n'impacte pas votre devis final.
                                        </div>
                                    </details>

                                    <details className="group bg-white rounded-lg border border-slate-200 overflow-hidden">
                                        <summary className="flex cursor-pointer items-center justify-between p-4 font-medium text-slate-900 group-hover:bg-slate-50 transition-colors">
                                            Suis-je engagé ?
                                            <span className="text-slate-400 group-open:rotate-180 transition-transform">▼</span>
                                        </summary>
                                        <div className="p-4 pt-0 text-sm text-slate-600 leading-relaxed">
                                            Absolument pas. Vous recevez vos devis librement. Si aucune proposition ne vous convient, vous n'avez aucune obligation de signer.
                                        </div>
                                    </details>

                                    <details className="group bg-white rounded-lg border border-slate-200 overflow-hidden">
                                        <summary className="flex cursor-pointer items-center justify-between p-4 font-medium text-slate-900 group-hover:bg-slate-50 transition-colors">
                                            Quelle durée de validité ?
                                            <span className="text-slate-400 group-open:rotate-180 transition-transform">▼</span>
                                        </summary>
                                        <div className="p-4 pt-0 text-sm text-slate-600 leading-relaxed">
                                            Un devis est généralement valable entre <strong>1 et 3 mois</strong>. Au-delà, les tarifs des matériaux peuvent évoluer.
                                        </div>
                                    </details>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default function DevisPage() {
    return (
        <Suspense fallback={
            <div className="bg-slate-50 min-h-screen py-12 flex items-center justify-center">
                <div className="text-slate-400">Chargement...</div>
            </div>
        }>
            <DevisContent />
        </Suspense>
    );
}
