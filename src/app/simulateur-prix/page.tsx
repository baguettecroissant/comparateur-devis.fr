"use client";

import { useState } from "react";
import Link from "next/link";
import { Calculator, ArrowRight, CheckCircle, Info, Euro } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";

type EscalierType = "droit" | "tournant" | "exterieur";
type Longueur = "court" | "moyen" | "long";

interface PriceRange {
    min: number;
    max: number;
}

// Price matrix based on type and length
const PRICE_MATRIX: Record<EscalierType, Record<Longueur, PriceRange>> = {
    droit: {
        court: { min: 2500, max: 3500 },
        moyen: { min: 3500, max: 4500 },
        long: { min: 4500, max: 6000 },
    },
    tournant: {
        court: { min: 7000, max: 9000 },
        moyen: { min: 9000, max: 11000 },
        long: { min: 11000, max: 14000 },
    },
    exterieur: {
        court: { min: 4000, max: 6000 },
        moyen: { min: 6000, max: 9000 },
        long: { min: 9000, max: 14000 },
    },
};

// Options costs
const OPTIONS = {
    pivotant: { label: "Siège pivotant motorisé", cost: 600 },
    reposepieds: { label: "Repose-pieds automatique", cost: 300 },
    rail_relevable: { label: "Rail relevable (bas)", cost: 1200 },
    telecommande: { label: "Télécommande supplémentaire", cost: 150 },
};

export default function SimulateurPrix() {
    const [step, setStep] = useState(1);
    const [escalierType, setEscalierType] = useState<EscalierType | null>(null);
    const [longueur, setLongueur] = useState<Longueur | null>(null);
    const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
    const [showResult, setShowResult] = useState(false);

    const toggleOption = (option: string) => {
        setSelectedOptions(prev =>
            prev.includes(option)
                ? prev.filter(o => o !== option)
                : [...prev, option]
        );
    };

    const calculatePrice = (): PriceRange | null => {
        if (!escalierType || !longueur) return null;

        const basePrice = PRICE_MATRIX[escalierType][longueur];
        const optionsCost = selectedOptions.reduce(
            (sum, opt) => sum + (OPTIONS[opt as keyof typeof OPTIONS]?.cost || 0),
            0
        );

        return {
            min: basePrice.min + optionsCost,
            max: basePrice.max + optionsCost,
        };
    };

    const handleSubmit = () => {
        if (escalierType && longueur) {
            setShowResult(true);
        }
    };

    const price = calculatePrice();

    const formatPrice = (amount: number) => {
        return new Intl.NumberFormat("fr-FR", {
            style: "currency",
            currency: "EUR",
            maximumFractionDigits: 0,
        }).format(amount);
    };

    return (
        <div className="min-h-screen bg-slate-50">
            {/* Hero */}
            <section className="bg-slate-900 text-white py-12">
                <div className="container mx-auto px-4">
                    <Breadcrumbs items={[{ label: "Simulateur de Prix" }]} />
                    <div className="max-w-3xl mx-auto text-center mt-4">
                        <div className="inline-flex items-center gap-2 bg-orange-500/20 border border-orange-500/30 text-orange-300 px-4 py-1.5 rounded-full text-sm font-medium mb-6">
                            <Calculator className="h-4 w-4" />
                            Outil Gratuit
                        </div>
                        <h1 className="text-3xl md:text-5xl font-bold mb-4">
                            Simulateur de Prix Monte-Escalier
                        </h1>
                        <p className="text-xl text-slate-300">
                            Estimez le coût de votre installation en 30 secondes
                        </p>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-12">
                <div className="container mx-auto px-4 max-w-3xl">
                    {!showResult ? (
                        <div className="bg-white rounded-2xl shadow-lg border border-slate-200 overflow-hidden">
                            {/* Progress Bar */}
                            <div className="bg-slate-50 px-6 py-4 border-b border-slate-200">
                                <div className="flex items-center gap-4">
                                    <div className={`flex items-center gap-2 ${step >= 1 ? 'text-orange-600' : 'text-slate-400'}`}>
                                        <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${step >= 1 ? 'bg-orange-600 text-white' : 'bg-slate-200'}`}>1</div>
                                        <span className="hidden sm:inline font-medium">Type</span>
                                    </div>
                                    <div className="flex-1 h-1 bg-slate-200 rounded">
                                        <div className={`h-full bg-orange-600 rounded transition-all ${step >= 2 ? 'w-full' : 'w-0'}`}></div>
                                    </div>
                                    <div className={`flex items-center gap-2 ${step >= 2 ? 'text-orange-600' : 'text-slate-400'}`}>
                                        <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${step >= 2 ? 'bg-orange-600 text-white' : 'bg-slate-200'}`}>2</div>
                                        <span className="hidden sm:inline font-medium">Longueur</span>
                                    </div>
                                    <div className="flex-1 h-1 bg-slate-200 rounded">
                                        <div className={`h-full bg-orange-600 rounded transition-all ${step >= 3 ? 'w-full' : 'w-0'}`}></div>
                                    </div>
                                    <div className={`flex items-center gap-2 ${step >= 3 ? 'text-orange-600' : 'text-slate-400'}`}>
                                        <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${step >= 3 ? 'bg-orange-600 text-white' : 'bg-slate-200'}`}>3</div>
                                        <span className="hidden sm:inline font-medium">Options</span>
                                    </div>
                                </div>
                            </div>

                            <div className="p-6 md:p-8">
                                {/* Step 1: Type */}
                                {step === 1 && (
                                    <div>
                                        <h2 className="text-2xl font-bold text-slate-900 mb-6">
                                            Quel type d'escalier avez-vous ?
                                        </h2>
                                        <div className="grid gap-4">
                                            {[
                                                { value: "droit", label: "Escalier Droit", desc: "Sans virage, le plus économique" },
                                                { value: "tournant", label: "Escalier Tournant", desc: "Avec un ou plusieurs virages" },
                                                { value: "exterieur", label: "Escalier Extérieur", desc: "Perron, jardin, accès garage" },
                                            ].map((type) => (
                                                <button
                                                    key={type.value}
                                                    onClick={() => {
                                                        setEscalierType(type.value as EscalierType);
                                                        setStep(2);
                                                    }}
                                                    className={`p-4 border-2 rounded-xl text-left transition-all ${escalierType === type.value
                                                        ? 'border-orange-500 bg-orange-50'
                                                        : 'border-slate-200 hover:border-orange-300'
                                                        }`}
                                                >
                                                    <div className="font-bold text-slate-900">{type.label}</div>
                                                    <div className="text-sm text-slate-500">{type.desc}</div>
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {/* Step 2: Longueur */}
                                {step === 2 && (
                                    <div>
                                        <button onClick={() => setStep(1)} className="text-sm text-slate-500 hover:text-orange-600 mb-4">
                                            ← Retour
                                        </button>
                                        <h2 className="text-2xl font-bold text-slate-900 mb-6">
                                            Combien de marches environ ?
                                        </h2>
                                        <div className="grid gap-4">
                                            {[
                                                { value: "court", label: "Moins de 10 marches", desc: "Escalier court (rez-de-chaussée)" },
                                                { value: "moyen", label: "10 à 15 marches", desc: "Escalier standard (1 étage)" },
                                                { value: "long", label: "Plus de 15 marches", desc: "Escalier long (2 étages ou plus)" },
                                            ].map((len) => (
                                                <button
                                                    key={len.value}
                                                    onClick={() => {
                                                        setLongueur(len.value as Longueur);
                                                        setStep(3);
                                                    }}
                                                    className={`p-4 border-2 rounded-xl text-left transition-all ${longueur === len.value
                                                        ? 'border-orange-500 bg-orange-50'
                                                        : 'border-slate-200 hover:border-orange-300'
                                                        }`}
                                                >
                                                    <div className="font-bold text-slate-900">{len.label}</div>
                                                    <div className="text-sm text-slate-500">{len.desc}</div>
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {/* Step 3: Options */}
                                {step === 3 && (
                                    <div>
                                        <button onClick={() => setStep(2)} className="text-sm text-slate-500 hover:text-orange-600 mb-4">
                                            ← Retour
                                        </button>
                                        <h2 className="text-2xl font-bold text-slate-900 mb-2">
                                            Options souhaitées
                                        </h2>
                                        <p className="text-slate-500 mb-6">(Facultatif, vous pouvez passer cette étape)</p>
                                        <div className="grid gap-3 mb-8">
                                            {Object.entries(OPTIONS).map(([key, opt]) => (
                                                <label
                                                    key={key}
                                                    className={`flex items-center justify-between p-4 border-2 rounded-xl cursor-pointer transition-all ${selectedOptions.includes(key)
                                                        ? 'border-orange-500 bg-orange-50'
                                                        : 'border-slate-200 hover:border-orange-300'
                                                        }`}
                                                >
                                                    <div className="flex items-center gap-3">
                                                        <input
                                                            type="checkbox"
                                                            checked={selectedOptions.includes(key)}
                                                            onChange={() => toggleOption(key)}
                                                            className="w-5 h-5 text-orange-600 rounded border-slate-300 focus:ring-orange-500"
                                                        />
                                                        <span className="font-medium text-slate-900">{opt.label}</span>
                                                    </div>
                                                    <span className="text-orange-600 font-bold">+{opt.cost}€</span>
                                                </label>
                                            ))}
                                        </div>

                                        <Button
                                            onClick={handleSubmit}
                                            className="w-full bg-orange-600 hover:bg-orange-700 text-white h-14 text-lg rounded-xl"
                                        >
                                            Voir mon estimation
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
                                    <h2 className="text-2xl font-bold text-slate-900 mb-2">Votre estimation de prix</h2>
                                    <p className="text-slate-500">Monte-escalier {escalierType} • {longueur === 'court' ? '<10' : longueur === 'moyen' ? '10-15' : '>15'} marches</p>
                                </div>

                                {price && (
                                    <div className="bg-gradient-to-r from-orange-500 to-amber-500 text-white rounded-2xl p-6 text-center mb-8">
                                        <div className="text-sm uppercase tracking-wider mb-2 opacity-90">Estimation (pose comprise)</div>
                                        <div className="text-4xl md:text-5xl font-bold">
                                            {formatPrice(price.min)} - {formatPrice(price.max)}
                                        </div>
                                    </div>
                                )}

                                {/* Breakdown */}
                                <div className="bg-slate-50 rounded-xl p-4 mb-6">
                                    <h3 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
                                        <Euro className="h-5 w-5 text-orange-600" />
                                        Détail du calcul
                                    </h3>
                                    <ul className="space-y-2 text-sm">
                                        <li className="flex justify-between">
                                            <span className="text-slate-600">Monte-escalier {escalierType} ({longueur})</span>
                                            <span className="font-medium">{formatPrice(PRICE_MATRIX[escalierType!][longueur!].min)} - {formatPrice(PRICE_MATRIX[escalierType!][longueur!].max)}</span>
                                        </li>
                                        {selectedOptions.map(opt => (
                                            <li key={opt} className="flex justify-between">
                                                <span className="text-slate-600">{OPTIONS[opt as keyof typeof OPTIONS].label}</span>
                                                <span className="font-medium">+{formatPrice(OPTIONS[opt as keyof typeof OPTIONS].cost)}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Info Box */}
                                <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg mb-6">
                                    <div className="flex gap-3">
                                        <Info className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
                                        <div className="text-sm text-blue-800">
                                            <strong>Bon à savoir :</strong> Ces prix peuvent être réduits de 25% à 70% grâce aux aides (MaPrimeAdapt', crédit d'impôt).{' '}
                                            <Link href="/calculateur-aides" className="underline font-medium">Calculez vos aides →</Link>
                                        </div>
                                    </div>
                                </div>

                                <div className="grid sm:grid-cols-2 gap-4">
                                    <Button
                                        onClick={() => {
                                            setShowResult(false);
                                            setStep(1);
                                            setEscalierType(null);
                                            setLongueur(null);
                                            setSelectedOptions([]);
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

                            {/* Trust signals */}
                            <div className="bg-white rounded-xl border border-slate-200 p-6">
                                <p className="text-center text-slate-600 text-sm">
                                    <strong>Pourquoi demander un devis ?</strong> Cette estimation est indicative. Seule une visite technique à domicile (gratuite) permet un chiffrage précis tenant compte de votre escalier unique.
                                </p>
                            </div>
                        </div>
                    )}
                </div>
            </section>

            {/* SEO Content */}
            <section className="py-16 bg-white border-t border-slate-200">
                <div className="container mx-auto px-4 max-w-3xl prose prose-slate">
                    <h2>Comment fonctionne notre simulateur de prix ?</h2>
                    <p>
                        Notre outil de simulation vous permet d'obtenir une <strong>estimation réaliste du coût d'un monte-escalier</strong> en quelques clics.
                        Les prix sont basés sur les tarifs moyens constatés en France en 2026, pose comprise.
                    </p>
                    <h3>Facteurs pris en compte</h3>
                    <ul>
                        <li><strong>Type d'escalier :</strong> Un escalier droit nécessite un rail standard, tandis qu'un tournant demande une fabrication sur-mesure.</li>
                        <li><strong>Longueur du rail :</strong> Plus votre escalier est long, plus le coût du rail augmente.</li>
                        <li><strong>Options de confort :</strong> Le siège pivotant, le repose-pieds automatique et le rail relevable sont des options populaires.</li>
                    </ul>
                    <p>
                        <Link href="/guides/prix-monte-escalier-2026" className="text-orange-600">Consultez notre guide complet des prix 2026</Link> pour plus de détails.
                    </p>
                </div>
            </section>
        </div>
    );
}
