import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata = {
    title: "Mentions Légales & Confidentialité | Cout-Monte-Escalier.fr",
    description: "Mentions légales, éditeur, hébergement et politique de confidentialité du site Cout-Monte-Escalier.fr.",
    robots: {
        index: false,
        follow: false,
    },
};

export default function MentionsLegalesPage() {
    return (
        <div className="bg-slate-50 min-h-screen py-12 md:py-20">
            <div className="container mx-auto px-4 max-w-4xl">
                <div className="mb-8">
                    <Link
                        href="/"
                        className="inline-flex items-center text-slate-600 hover:text-orange-600 transition-colors font-medium mb-4"
                    >
                        <ArrowLeft className="h-4 w-4 mr-2" />
                        Retour à l'accueil
                    </Link>
                    <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
                        Mentions Légales & Confidentialité
                    </h1>
                    <p className="text-slate-500 text-lg">
                        Dernière mise à jour : 14 Janvier 2026
                    </p>
                </div>

                <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8 md:p-12 space-y-12">

                    {/* Section Mentions Légales */}
                    <section>
                        <h2 className="text-2xl font-bold text-slate-900 mb-6 pb-2 border-b border-slate-100">
                            Mentions Légales
                        </h2>

                        <div className="space-y-8">
                            <div>
                                <h3 className="text-xl font-bold text-slate-800 mb-3">1. Éditeur du site</h3>
                                <div className="text-slate-600 leading-relaxed">
                                    <p className="mb-2">Le site <strong>cout-monte-escalier.fr</strong> est édité par la société :</p>
                                    <ul className="bg-slate-50 p-6 rounded-lg border border-slate-200 space-y-2">
                                        <li className="font-bold text-slate-900">WADE STUDIO LTD</li>
                                        <li>Société enregistrée auprès du Registrar of Companies de Maurice.</li>
                                        <li>Business Registration Number (BRN) : C25227533</li>
                                        <li>File No : C227533</li>
                                        <li>Siège social : 432 Ave Bounty, Morcellement Balaclava, MAURITIUS.</li>
                                    </ul>
                                    <div className="mt-4">
                                        <p><strong>Email de contact :</strong> contact@cout-monte-escalier.fr</p>
                                        <p><strong>Directeur de la publication :</strong> Wade Timothy</p>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <h3 className="text-xl font-bold text-slate-800 mb-3">2. Hébergement</h3>
                                <p className="text-slate-600 leading-relaxed">
                                    Le site est hébergé par la société <strong>Vercel Inc.</strong><br />
                                    Adresse : 340 S Lemon Ave #4133 Walnut, CA 91789, USA.<br />
                                    Le stockage des données est assuré sur des serveurs sécurisés.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-xl font-bold text-slate-800 mb-3">3. Propriété intellectuelle</h3>
                                <p className="text-slate-600 leading-relaxed">
                                    L'ensemble de ce site relève de la législation internationale sur le droit d'auteur et la propriété intellectuelle. Tous les droits de reproduction sont réservés. La marque "WADE STUDIO LTD" et le nom de domaine "cout-monte-escalier.fr" sont la propriété exclusive de l'éditeur.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-xl font-bold text-slate-800 mb-3">4. Limitation de responsabilité</h3>
                                <div className="text-slate-600 leading-relaxed space-y-4">
                                    <p>
                                        Le site cout-monte-escalier.fr agit en tant qu'intermédiaire technique (apporteur d'affaires). Il a pour but de faciliter la mise en relation entre des particuliers et des professionnels du bâtiment via des partenaires affiliés.
                                    </p>
                                    <p>
                                        La société WADE STUDIO LTD n'est pas une entreprise de bâtiment et n'effectue aucun travaux.
                                    </p>
                                    <div className="bg-orange-50 border-l-4 border-orange-500 p-4 rounded-r-lg">
                                        <p className="text-orange-900 text-sm">
                                            En conséquence, la responsabilité de l'éditeur ne saurait être engagée en cas de litige relatif à l'exécution des travaux (malfaçon, retard, prix) qui reste de la responsabilité exclusive de l'artisan sélectionné par l'utilisateur.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Section Politique de Confidentialité */}
                    <section id="confidentialite">
                        <h2 className="text-2xl font-bold text-slate-900 mb-6 pb-2 border-b border-slate-100">
                            Politique de Confidentialité et Données Personnelles
                        </h2>

                        <div className="space-y-8">
                            <div>
                                <h3 className="text-xl font-bold text-slate-800 mb-3">1. Responsable du traitement</h3>
                                <p className="text-slate-600 leading-relaxed">
                                    Le responsable du traitement des données collectées sur ce site est la société WADE STUDIO LTD, sise au 432 Ave Bounty, Morcellement Balaclava, MAURITIUS (BRN: C25227533).
                                </p>
                            </div>

                            <div>
                                <h3 className="text-xl font-bold text-slate-800 mb-3">2. Nature des données collectées</h3>
                                <p className="text-slate-600 mb-2">Dans le cadre de l'utilisation du service de demande de devis, nous sommes amenés à collecter les données suivantes :</p>
                                <ul className="list-disc list-inside text-slate-600 space-y-1 ml-4">
                                    <li><strong>Identité :</strong> Nom, Prénom.</li>
                                    <li><strong>Coordonnées :</strong> Adresse email, Numéro de téléphone, Code postal, Ville.</li>
                                    <li><strong>Projet :</strong> Type de travaux, surface, échéance.</li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="text-xl font-bold text-slate-800 mb-3">3. Finalité du traitement</h3>
                                <p className="text-slate-600 mb-2">Vos données sont collectées pour :</p>
                                <ul className="list-disc list-inside text-slate-600 space-y-1 ml-4">
                                    <li><strong>Mise en relation :</strong> Transmettre votre demande de devis à nos partenaires professionnels (artisans et régies d'affiliation) en France afin qu'ils puissent chiffrer votre projet.</li>
                                    <li><strong>Gestion de la relation client :</strong> Suivi de votre demande.</li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="text-xl font-bold text-slate-800 mb-3">4. Transmission des données à des tiers</h3>
                                <div className="text-slate-600 leading-relaxed space-y-4">
                                    <p>
                                        En utilisant le service de demande de devis, l'utilisateur accepte expressément que ses données soient transmises à des partenaires commerciaux situés en France (Entreprises de BTP, Courtiers, Plateformes de mise en relation type Travaux.com/HabitatPresto) dans le seul but de répondre à sa demande.
                                    </p>
                                    <p className="font-medium text-slate-900">
                                        WADE STUDIO LTD s'engage à ne pas vendre vos données à des tiers pour des usages sans lien avec votre projet de travaux.
                                    </p>
                                </div>
                            </div>

                            <div>
                                <h3 className="text-xl font-bold text-slate-800 mb-3">5. Transfert de données hors UE</h3>
                                <p className="text-slate-600 leading-relaxed">
                                    L'éditeur du site étant établi à Maurice, les données peuvent transiter techniquement hors de l'Union Européenne. WADE STUDIO LTD s'engage à prendre toutes les mesures de sécurité nécessaires pour garantir un niveau de protection des données conforme aux standards du RGPD lors de ces traitements techniques.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-xl font-bold text-slate-800 mb-3">6. Vos droits (RGPD)</h3>
                                <p className="text-slate-600 leading-relaxed mb-4">
                                    Conformément à la réglementation européenne, vous disposez d'un droit d'accès, de rectification, de suppression et d'opposition concernant vos données.
                                </p>
                                <div className="bg-blue-50 p-4 rounded-lg flex items-start gap-3">
                                    <div className="text-blue-600 mt-1">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
                                    </div>
                                    <p className="text-blue-900 text-sm">
                                        Pour exercer ce droit, contactez-nous à : <strong>contact@cout-monte-escalier.fr</strong> ou par courrier à notre siège social.
                                    </p>
                                </div>
                            </div>

                            <div>
                                <h3 className="text-xl font-bold text-slate-800 mb-3">7. Cookies</h3>
                                <p className="text-slate-600 leading-relaxed">
                                    Le site utilise des cookies pour le fonctionnement technique et le suivi de l'affiliation (nécessaire pour rémunérer notre service d'apporteur d'affaires gratuit pour l'utilisateur).
                                </p>
                            </div>
                        </div>
                    </section>

                </div>
            </div>
        </div>
    );
}
