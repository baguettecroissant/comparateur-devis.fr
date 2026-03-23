"use client";

import { useState } from "react";
import Link from "next/link";
import { Calculator, ArrowRight, CheckCircle, Info, Euro, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";

type RevenusCategory = "tres_modestes" | "modestes" | "intermediaires" | "superieurs";
type Situation = "proprietaire" | "locataire";

interface AidesResult {
    maPrimeAdapt: number;
    tauxMaPrimeAdapt: number;
    creditImpot: number;
    tvaReduite: number;
    totalAides: number;
    resteACharge: number;
}

// Plafonds de revenus 2026 (Île-de-France)
const PLAFONDS_IDF = {
    tres_modestes: { 1: 23541, 2: 34551, 3: 41493, 4: 48447, 5: 55427 },
    modestes: { 1: 28657, 2: 42058, 3: 50513, 4: 58981, 5: 67473 },
};

// Plafonds de revenus 2026 (Province)
const PLAFONDS_PROVINCE = {
    tres_modestes: { 1: 17009, 2: 24875, 3: 29917, 4: 34948, 5: 40002 },
    modestes: { 1: 21805, 2: 31889, 3: 38349, 4: 44802, 5: 51281 },
};

export default function CalculateurAides() {
    const [step, setStep] = useState(1);
    const [prixTravaux, setPrixTravaux] = useState<number>(8000);
    const [situation, setSituation] = useState<Situation | null>(null);
    const [zone, setZone] = useState<"idf" | "province" | null>(null);
    const [foyer, setFoyer] = useState<number>(1);
    const [revenus, setRevenus] = useState<number>(0);
    const [showResult, setShowResult] = useState(false);

    const getRevenusCategory = (): RevenusCategory => {
        const plafonds = zone === "idf" ? PLAFONDS_IDF : PLAFONDS_PROVINCE;
        const personnes = Math.min(foyer, 5) as 1 | 2 | 3 | 4 | 5;

        if (revenus <= plafonds.tres_modestes[personnes]) return "tres_modestes";
        if (revenus <= plafonds.modestes[personnes]) return "modestes";
        if (revenus <= plafonds.modestes[personnes] * 1.5) return "intermediaires";
        return "superieurs";
    };

    const calculateAides = (): AidesResult | null => {
        if (!situation || !zone) return null;

        const category = getRevenusCategory();
        let maPrimeAdaptTaux = 0;

        // Taux MaPrimeAdapt' selon revenus
        if (category === "tres_modestes") maPrimeAdaptTaux = 0.70;
        else if (category === "modestes") maPrimeAdaptTaux = 0.50;
        else maPrimeAdaptTaux = 0; // Non éligible

        // Plafond MaPrimeAdapt' à 22 000€
        const montantEligible = Math.min(prixTravaux, 22000);
        const maPrimeAdapt = Math.round(montantEligible * maPrimeAdaptTaux);

        // Crédit d'impôt (25% si pas de MaPrimeAdapt')
        let creditImpot = 0;
        if (maPrimeAdaptTaux === 0 && situation === "proprietaire") {
            creditImpot = Math.round(Math.min(prixTravaux, 5000) * 0.25); // Plafond 5000€
        }

        // TVA réduite 5.5% au lieu de 20% = économie de 14.5%
        const tvaReduite = Math.round(prixTravaux * 0.145 * 0.5); // Estimation économie

        const totalAides = maPrimeAdapt + creditImpot + tvaReduite;
        const resteACharge = Math.max(0, prixTravaux - totalAides);

        return {
            maPrimeAdapt,
            tauxMaPrimeAdapt: maPrimeAdaptTaux * 100,
            creditImpot,
            tvaReduite,
            totalAides,
            resteACharge,
        };
    };

    const formatPrice = (amount: number) => {
        return new Intl.NumberFormat("fr-FR", {
            style: "currency",
            currency: "EUR",
            maximumFractionDigits: 0,
        }).format(amount);
    };

    const handleSubmit = () => {
        if (situation && zone && revenus > 0) {
            setShowResult(true);
        }
    };

    const result = calculateAides();

    return (
        <div className="min-h-screen bg-slate-50">
            {/* Hero */}
            <section className="bg-slate-900 text-white py-12">
                <div className="container mx-auto px-4">
                    <Breadcrumbs items={[{ label: "Calculateur d'Aides" }]} />
                    <div className="max-w-3xl mx-auto text-center mt-4">
                        <div className="inline-flex items-center gap-2 bg-green-500/20 border border-green-500/30 text-green-300 px-4 py-1.5 rounded-full text-sm font-medium mb-6">
                            <Calculator className="h-4 w-4" />
                            Simulation MaPrimeAdapt' 2026
                        </div>
                        <h1 className="text-3xl md:text-5xl font-bold mb-4">
                            Calculez vos Aides Financières
                        </h1>
                        <p className="text-xl text-slate-300">
                            MaPrimeAdapt', crédit d'impôt, TVA réduite : découvrez votre reste à charge
                        </p>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-12">
                <div className="container mx-auto px-4 max-w-3xl">
                    {!showResult ? (
                        <div className="bg-white rounded-2xl shadow-lg border border-slate-200 overflow-hidden">
                            <div className="p-6 md:p-8">
                                {/* Step 1: Prix des travaux */}
                                {step === 1 && (
                                    <div>
                                        <h2 className="text-2xl font-bold text-slate-900 mb-6">
                                            Quel est le montant estimé des travaux ?
                                        </h2>
                                        <div className="mb-8">
                                            <div className="flex items-center gap-4 mb-4">
                                                <input
                                                    type="range"
                                                    min="2000"
                                                    max="20000"
                                                    step="500"
                                                    value={prixTravaux}
                                                    onChange={(e) => setPrixTravaux(Number(e.target.value))}
                                                    className="w-full h-3 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-orange-600"
                                                />
                                            </div>
                                            <div className="text-center">
                                                <span className="text-4xl font-bold text-orange-600">{formatPrice(prixTravaux)}</span>
                                            </div>
                                        </div>
                                        <p className="text-sm text-slate-500 mb-6 flex items-start gap-2">
                                            <HelpCircle className="h-4 w-4 shrink-0 mt-0.5" />
                                            <span>Pas encore de devis ? <Link href="/simulateur-prix" className="text-orange-600 underline">Estimez d'abord le prix</Link></span>
                                        </p>
                                        <Button
                                            onClick={() => setStep(2)}
                                            className="w-full bg-orange-600 hover:bg-orange-700 text-white h-14 text-lg rounded-xl"
                                        >
                                            Continuer
                                            <ArrowRight className="ml-2 h-5 w-5" />
                                        </Button>
                                    </div>
                                )}

                                {/* Step 2: Situation */}
                                {step === 2 && (
                                    <div>
                                        <button onClick={() => setStep(1)} className="text-sm text-slate-500 hover:text-orange-600 mb-4">
                                            ← Retour
                                        </button>
                                        <h2 className="text-2xl font-bold text-slate-900 mb-6">
                                            Vous êtes ?
                                        </h2>
                                        <div className="grid gap-4 mb-8">
                                            {[
                                                { value: "proprietaire", label: "Propriétaire occupant", desc: "Le logement est votre résidence principale" },
                                                { value: "locataire", label: "Locataire", desc: "Avec accord du propriétaire" },
                                            ].map((s) => (
                                                <button
                                                    key={s.value}
                                                    onClick={() => {
                                                        setSituation(s.value as Situation);
                                                        setStep(3);
                                                    }}
                                                    className={`p-4 border-2 rounded-xl text-left transition-all ${situation === s.value
                                                        ? 'border-orange-500 bg-orange-50'
                                                        : 'border-slate-200 hover:border-orange-300'
                                                        }`}
                                                >
                                                    <div className="font-bold text-slate-900">{s.label}</div>
                                                    <div className="text-sm text-slate-500">{s.desc}</div>
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {/* Step 3: Zone géographique */}
                                {step === 3 && (
                                    <div>
                                        <button onClick={() => setStep(2)} className="text-sm text-slate-500 hover:text-orange-600 mb-4">
                                            ← Retour
                                        </button>
                                        <h2 className="text-2xl font-bold text-slate-900 mb-6">
                                            Où habitez-vous ?
                                        </h2>
                                        <div className="grid gap-4 mb-8">
                                            {[
                                                { value: "idf", label: "Île-de-France", desc: "Paris et départements 77, 78, 91, 92, 93, 94, 95" },
                                                { value: "province", label: "Province", desc: "Tous les autres départements" },
                                            ].map((z) => (
                                                <button
                                                    key={z.value}
                                                    onClick={() => {
                                                        setZone(z.value as "idf" | "province");
                                                        setStep(4);
                                                    }}
                                                    className={`p-4 border-2 rounded-xl text-left transition-all ${zone === z.value
                                                        ? 'border-orange-500 bg-orange-50'
                                                        : 'border-slate-200 hover:border-orange-300'
                                                        }`}
                                                >
                                                    <div className="font-bold text-slate-900">{z.label}</div>
                                                    <div className="text-sm text-slate-500">{z.desc}</div>
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {/* Step 4: Foyer & Revenus */}
                                {step === 4 && (
                                    <div>
                                        <button onClick={() => setStep(3)} className="text-sm text-slate-500 hover:text-orange-600 mb-4">
                                            ← Retour
                                        </button>
                                        <h2 className="text-2xl font-bold text-slate-900 mb-6">
                                            Informations sur votre foyer
                                        </h2>

                                        <div className="space-y-6 mb-8">
                                            <div>
                                                <label className="block text-sm font-medium text-slate-700 mb-2">
                                                    Nombre de personnes dans le foyer
                                                </label>
                                                <div className="flex gap-2">
                                                    {[1, 2, 3, 4, 5].map((n) => (
                                                        <button
                                                            key={n}
                                                            onClick={() => setFoyer(n)}
                                                            className={`w-12 h-12 rounded-lg font-bold transition-all ${foyer === n
                                                                ? 'bg-orange-600 text-white'
                                                                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                                                                }`}
                                                        >
                                                            {n}{n === 5 ? '+' : ''}
                                                        </button>
                                                    ))}
                                                </div>
                                            </div>

                                            <div>
                                                <label className="block text-sm font-medium text-slate-700 mb-2">
                                                    Revenu fiscal de référence (avis d'imposition N-1)
                                                </label>
                                                <div className="relative">
                                                    <input
                                                        type="number"
                                                        value={revenus || ''}
                                                        onChange={(e) => setRevenus(Number(e.target.value))}
                                                        placeholder="Ex: 25000"
                                                        className="w-full h-14 px-4 border-2 border-slate-200 rounded-xl focus:border-orange-500 focus:ring-0 text-lg"
                                                    />
                                                    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400">€/an</span>
                                                </div>
                                                <p className="text-xs text-slate-500 mt-2">
                                                    Ce montant figure sur votre avis d'imposition, ligne "Revenu fiscal de référence"
                                                </p>
                                            </div>
                                        </div>

                                        <Button
                                            onClick={handleSubmit}
                                            disabled={revenus <= 0}
                                            className="w-full bg-orange-600 hover:bg-orange-700 text-white h-14 text-lg rounded-xl disabled:opacity-50"
                                        >
                                            Calculer mes aides
                                            <ArrowRight className="ml-2 h-5 w-5" />
                                        </Button>
                                    </div>
                                )}
                            </div>
                        </div>
                    ) : (
                        /* Results */
                        <div className="space-y-6">
                            <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-6 md:p-8">
                                <div className="text-center mb-8">
                                    <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                                        <CheckCircle className="h-8 w-8 text-green-600" />
                                    </div>
                                    <h2 className="text-2xl font-bold text-slate-900 mb-2">Vos aides estimées</h2>
                                    <p className="text-slate-500">Pour un projet de {formatPrice(prixTravaux)}</p>
                                </div>

                                {result && (
                                    <>
                                        {/* Main Result */}
                                        <div className="grid sm:grid-cols-2 gap-4 mb-8">
                                            <div className="bg-green-50 rounded-xl p-6 text-center border border-green-200">
                                                <div className="text-sm text-green-700 mb-1">Total des aides</div>
                                                <div className="text-3xl font-bold text-green-600">{formatPrice(result.totalAides)}</div>
                                            </div>
                                            <div className="bg-orange-50 rounded-xl p-6 text-center border border-orange-200">
                                                <div className="text-sm text-orange-700 mb-1">Reste à charge</div>
                                                <div className="text-3xl font-bold text-orange-600">{formatPrice(result.resteACharge)}</div>
                                            </div>
                                        </div>

                                        {/* Breakdown */}
                                        <div className="bg-slate-50 rounded-xl p-4 mb-6">
                                            <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                                                <Euro className="h-5 w-5 text-green-600" />
                                                Détail des aides
                                            </h3>
                                            <ul className="space-y-3">
                                                {result.maPrimeAdapt > 0 ? (
                                                    <li className="flex justify-between items-center p-3 bg-white rounded-lg">
                                                        <div>
                                                            <span className="font-medium text-slate-900">MaPrimeAdapt'</span>
                                                            <span className="ml-2 text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full">
                                                                {result.tauxMaPrimeAdapt}% prise en charge
                                                            </span>
                                                        </div>
                                                        <span className="font-bold text-green-600">-{formatPrice(result.maPrimeAdapt)}</span>
                                                    </li>
                                                ) : (
                                                    <li className="flex justify-between items-center p-3 bg-white rounded-lg text-slate-400">
                                                        <span>MaPrimeAdapt'</span>
                                                        <span className="text-sm">Non éligible (revenus trop élevés)</span>
                                                    </li>
                                                )}
                                                {result.creditImpot > 0 && (
                                                    <li className="flex justify-between items-center p-3 bg-white rounded-lg">
                                                        <div>
                                                            <span className="font-medium text-slate-900">Crédit d'impôt</span>
                                                            <span className="ml-2 text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full">25%</span>
                                                        </div>
                                                        <span className="font-bold text-green-600">-{formatPrice(result.creditImpot)}</span>
                                                    </li>
                                                )}
                                                <li className="flex justify-between items-center p-3 bg-white rounded-lg">
                                                    <div>
                                                        <span className="font-medium text-slate-900">TVA réduite 5,5%</span>
                                                        <span className="ml-2 text-xs bg-purple-100 text-purple-700 px-2 py-0.5 rounded-full">au lieu de 20%</span>
                                                    </div>
                                                    <span className="font-bold text-green-600">≈ -{formatPrice(result.tvaReduite)}</span>
                                                </li>
                                            </ul>
                                        </div>

                                        {/* Info Box */}
                                        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg mb-6">
                                            <div className="flex gap-3">
                                                <Info className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
                                                <div className="text-sm text-blue-800">
                                                    <strong>Important :</strong> Ces montants sont estimatifs. Le calcul définitif sera réalisé par l'ANAH lors de votre demande officielle.
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                )}

                                <div className="grid sm:grid-cols-2 gap-4">
                                    <Button
                                        onClick={() => {
                                            setShowResult(false);
                                            setStep(1);
                                        }}
                                        variant="outline"
                                        className="h-12"
                                    >
                                        Refaire une simulation
                                    </Button>
                                    <Link href="/devis">
                                        <Button className="w-full bg-orange-600 hover:bg-orange-700 text-white h-12">
                                            Obtenir un devis précis
                                            <ArrowRight className="ml-2 h-4 w-4" />
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </section>

            {/* SEO Content */}
            <section className="py-16 bg-white border-t border-slate-200">
                <div className="container mx-auto px-4 max-w-3xl prose prose-slate">
                    <h2>Comment fonctionnent les aides pour un monte-escalier ?</h2>
                    <h3>MaPrimeAdapt' (ex-AAH habitat)</h3>
                    <p>
                        <strong>MaPrimeAdapt'</strong> est la principale aide de l'État pour l'adaptation du logement au vieillissement ou au handicap.
                        Elle peut financer jusqu'à <strong>70% du coût</strong> pour les ménages très modestes et <strong>50%</strong> pour les ménages modestes.
                    </p>
                    <ul>
                        <li>Plafond de travaux : 22 000€ HT</li>
                        <li>Conditions : être propriétaire occupant ou locataire (avec accord)</li>
                        <li>Le logement doit avoir plus de 15 ans</li>
                    </ul>

                    <h3>Crédit d'impôt</h3>
                    <p>
                        Si vous n'êtes pas éligible à MaPrimeAdapt', vous pouvez bénéficier d'un <strong>crédit d'impôt de 25%</strong>
                        sur le coût des équipements (plafonné à 5 000€ pour une personne seule, 10 000€ pour un couple).
                    </p>

                    <h3>TVA réduite à 5,5%</h3>
                    <p>
                        L'installation d'un monte-escalier bénéficie du taux de TVA réduit à 5,5% (au lieu de 20%)
                        si votre logement a plus de 2 ans.
                    </p>

                    <p>
                        <Link href="/guides/remboursement-monte-escalier-securite-sociale" className="text-orange-600">
                            Consultez notre guide complet des aides et remboursements →
                        </Link>
                    </p>
                </div>
            </section>
        </div>
    );
}
