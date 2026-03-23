import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, FileText, ArrowRight, Truck, CheckCircle } from "lucide-react";
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Délais Installation Monte-Escalier | Simulation 2026",
    description: "Combien de temps pour installer un monte-escalier ? Découvrez les délais moyens de fabrication et de pose selon votre modèle (droit ou tournant).",
};

export default function DelaisPage() {
    return (
        <div className="bg-slate-50 min-h-screen">
            {/* Header */}
            <div className="bg-white border-b border-slate-200">
                <div className="container mx-auto px-4 py-8">
                    <Link href="/" className="inline-flex items-center text-slate-500 hover:text-orange-600 transition-colors mb-6">
                        <ArrowLeft className="h-4 w-4 mr-2" />
                        Retour à l'accueil
                    </Link>
                    <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
                        Délais d'installation : <span className="text-orange-600">À quoi s'attendre ?</span>
                    </h1>
                    <p className="text-xl text-slate-600 max-w-2xl">
                        Le temps d'attente dépend principalement de la complexité de votre escalier (sur-mesure) et de la disponibilité des installeurs.
                    </p>
                </div>
            </div>

            <div className="container mx-auto px-4 py-12">
                <div className="grid lg:grid-cols-3 gap-12">
                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-8">
                        {/* Summary Card */}
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
                            <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                                <Calendar className="h-6 w-6 text-orange-500" />
                                Délais Moyens Constatés (2026)
                            </h2>
                            <div className="overflow-x-auto">
                                <table className="w-full text-left border-collapse">
                                    <thead>
                                        <tr className="border-b border-slate-100">
                                            <th className="py-4 font-semibold text-slate-900">Type de Monte-Escalier</th>
                                            <th className="py-4 font-semibold text-slate-900">Fabrication + Livraison</th>
                                            <th className="py-4 font-semibold text-slate-900">Installation</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-slate-100">
                                        <tr>
                                            <td className="py-4 text-slate-700 font-medium">Escalier Droit (Standard)</td>
                                            <td className="py-4 text-green-600 font-bold">1 à 2 semaines</td>
                                            <td className="py-4 text-slate-600">1/2 journée</td>
                                        </tr>
                                        <tr>
                                            <td className="py-4 text-slate-700 font-medium">Escalier Tournant (Sur-mesure)</td>
                                            <td className="py-4 text-orange-600 font-bold">3 à 5 semaines</td>
                                            <td className="py-4 text-slate-600">1 journée</td>
                                        </tr>
                                        <tr>
                                            <td className="py-4 text-slate-700 font-medium">Modèle Extérieur</td>
                                            <td className="py-4 text-blue-600 font-bold">2 à 4 semaines</td>
                                            <td className="py-4 text-slate-600">1/2 journée</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="mt-6 bg-slate-50 p-4 rounded-lg text-sm text-slate-600">
                                <strong>Note :</strong> Ces délais sont indicatifs. En cas d'urgence (sortie d'hôpital, perte d'autonomie soudaine), certains fabricants proposent un service "Express" permettant une installation sous 48h à 72h.
                            </div>
                        </div>

                        {/* Process Steps */}
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
                            <h3 className="text-xl font-bold text-slate-900 mb-6">Pourquoi ces délais ?</h3>
                            <div className="space-y-6">
                                <div className="flex gap-4">
                                    <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center shrink-0 font-bold text-orange-600">1</div>
                                    <div>
                                        <h4 className="font-bold text-slate-900 mb-1">Prise de mesure (Photurométrie)</h4>
                                        <p className="text-slate-600 text-sm">Pour un rail sur-mesure, l'escalier est modélisé en 3D au millimètre près. Cette étape est cruciale pour une fluidité parfaite.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center shrink-0 font-bold text-orange-600">2</div>
                                    <div>
                                        <h4 className="font-bold text-slate-900 mb-1">Fabrication en usine</h4>
                                        <p className="text-slate-600 text-sm">Le rail est courbé spécifiquement pour VOTRE escalier. Ce n'est pas un produit stocké.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center shrink-0 font-bold text-orange-600">3</div>
                                    <div>
                                        <h4 className="font-bold text-slate-900 mb-1">Expédition & Pose</h4>
                                        <p className="text-slate-600 text-sm">Une fois reçu, le technicien installateur vient poser le système. C'est l'étape la plus rapide.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Sidebar CTA */}
                    <div className="lg:col-span-1">
                        <div className="sticky top-24">
                            <div className="bg-slate-900 text-white p-8 rounded-2xl shadow-xl text-center">
                                <h3 className="text-2xl font-bold mb-4">Besoin d'un délai précis ?</h3>
                                <p className="text-slate-300 mb-8">
                                    Seuls les installateurs de votre région peuvent vous confirmer leur disponibilité actuelle.
                                </p>

                                <div className="space-y-4 mb-8 text-left bg-white/10 p-4 rounded-xl">
                                    <div className="flex items-center gap-3">
                                        <CheckCircle className="h-5 w-5 text-green-400" />
                                        <span className="text-sm">Vérifier les stocks locaux</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <CheckCircle className="h-5 w-5 text-green-400" />
                                        <span className="text-sm">Option installation urgente</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <CheckCircle className="h-5 w-5 text-green-400" />
                                        <span className="text-sm">Devis gratuit sous 24h</span>
                                    </div>
                                </div>

                                <Link href="/devis">
                                    <Button size="lg" className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold h-14 rounded-xl">
                                        Interroger les artisans <ArrowRight className="ml-2 h-5 w-5" />
                                    </Button>
                                </Link>
                                <p className="mt-4 text-xs text-slate-500">
                                    Gratuit et sans engagement
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
