import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Shield, Star, MapPin, Euro, Clock, HeartHandshake, Hammer, ShieldCheck, TreePine, Droplets, Zap, Flame, HardHat, Paintbrush } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CategoriesGrid } from "@/components/features/CategoriesGrid";
import { MobileStickyCta } from "@/components/ui/MobileStickyCta";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: 'Comparateur de Devis Artisan | Obtenez jusqu\'à 3 devis gratuits',
  description: 'Comparez gratuitement les devis d\'artisans qualifiés près de chez vous. Tous travaux et aménagements. Devis gratuits, rapides et sans engagement.',
  alternates: {
    canonical: 'https://www.comparateur-devis.fr',
  },
};

const topSearches = [
    { name: "Pompe à chaleur", slug: "pompe-a-chaleur", icon: Flame },
    { name: "Électricité", slug: "electricite-travaux-electriques", icon: Zap },
    { name: "Plomberie", slug: "plomberie", icon: Droplets },
    { name: "Maçonnerie", slug: "maconnerie", icon: HardHat },
    { name: "Peinture", slug: "peinture", icon: Paintbrush },
    { name: "Aménagement Extérieur", slug: "terrasses", icon: TreePine },
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50 pb-20 md:pb-0">
      {/* Hero Section - Premium Dark */}
      <section className="relative bg-slate-950 pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden border-b border-slate-800">
        {/* Abstract Background Shapes */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full overflow-hidden pointer-events-none">
            <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[70%] bg-orange-600/10 blur-[120px] rounded-full mix-blend-screen"></div>
            <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[60%] bg-blue-600/10 blur-[120px] rounded-full mix-blend-screen"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/20 text-orange-400 px-4 py-1.5 rounded-full text-sm font-medium mb-8">
              <Star className="h-4 w-4 fill-orange-400" />
              <span>Gagnez du temps et de l'argent sur vos travaux</span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white mb-8 tracking-tight leading-[1.1]">
              Comparez les meilleurs <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-300">Artisans de votre Région</span>
            </h1>

            <p className="text-xl md:text-2xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              Estimez le coût de vos projets instantanément. Recevez jusqu'à 3 devis gratuits d'installateurs <strong className="text-white">certifiés RGE</strong> près de chez vous.
            </p>

            {/* Quick Actions Search-like Grid */}
            <div className="bg-white/5 border border-white/10 p-2 md:p-3 rounded-2xl md:rounded-full backdrop-blur-md inline-block w-full max-w-4xl mb-12">
                <div className="grid grid-cols-2 lg:grid-cols-6 gap-2">
                    {topSearches.map((svc) => {
                        const Icon = svc.icon;
                        return (
                            <Link key={svc.slug} href={`/${svc.slug}`} className="flex flex-col items-center justify-center p-3 sm:py-4 rounded-xl md:rounded-full hover:bg-white/10 transition-colors group">
                                <Icon className="w-6 h-6 text-slate-400 group-hover:text-orange-400 mb-2" />
                                <span className="text-xs sm:text-sm font-medium text-slate-200 text-center line-clamp-1">{svc.name}</span>
                            </Link>
                        );
                    })}
                </div>
            </div>

            <div>
                <Link href="/devis">
                <Button size="lg" className="bg-orange-600 hover:bg-orange-500 text-white text-lg px-10 h-16 rounded-full shadow-[0_0_40px_-10px_rgba(234,88,12,0.5)] transition-all transform hover:scale-105 hover:shadow-[0_0_60px_-15px_rgba(234,88,12,0.6)]">
                    Faire une demande générale
                    <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar - Sleek */}
      <section className="bg-white border-b border-slate-200">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-slate-100/50 md:divide-slate-200 py-8">
            <div className="flex flex-col items-center justify-center text-center p-4">
                <ShieldCheck className="h-8 w-8 text-green-500 mb-3" />
                <span className="font-bold text-slate-900">Artisans Vérifiés</span>
                <span className="text-xs text-slate-500">Labels RGE, Qualibat, Décennale</span>
            </div>
            <div className="flex flex-col items-center justify-center text-center p-4">
                <Euro className="h-8 w-8 text-orange-500 mb-3" />
                <span className="font-bold text-slate-900">100% Gratuit</span>
                <span className="text-xs text-slate-500">Sans aucun engagement</span>
            </div>
            <div className="flex flex-col items-center justify-center text-center p-4">
                <Clock className="h-8 w-8 text-blue-500 mb-3" />
                <span className="font-bold text-slate-900">Réponse en 48h</span>
                <span className="text-xs text-slate-500">Mise en relation prioritaire</span>
            </div>
            <div className="flex flex-col items-center justify-center text-center p-4">
                <HeartHandshake className="h-8 w-8 text-purple-500 mb-3" />
                <span className="font-bold text-slate-900">Économies</span>
                <span className="text-xs text-slate-500">Jusqu'à -30% sur devis</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-slate-50 relative">
        <div className="container mx-auto px-4 max-w-6xl">
             <div className="text-center mb-16">
                 <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6">Que souhaitez-vous <span className="text-orange-600">réaliser ?</span></h2>
                 <p className="text-lg text-slate-600 max-w-2xl mx-auto">Explorez nos +150 travaux répertoriés. Découvrez les prix moyens pratiqués dans votre région et recevez des devis ciblés.</p>
             </div>
             <CategoriesGrid />
        </div>
      </section>

      {/* Value Proposition Cards */}
      <section className="py-24 bg-white border-y border-slate-200">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            
            <div className="lg:w-1/2 space-y-8">
                <div className="inline-block bg-orange-100 text-orange-700 px-4 py-1.5 rounded-full text-sm font-bold">
                    Notre Promesse
                </div>
                <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight">
                    Pourquoi comparer ses <br/>devis avec nous ?
                </h2>
                <p className="text-lg text-slate-600 leading-relaxed">
                    Le marché des travaux est complexe et les écarts de prix pour un même projet peuvent aller du simple au double. Notre rôle est de rééquilibrer la balance en votre faveur.
                </p>
                
                <ul className="space-y-6">
                    <li className="flex gap-4">
                        <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                            <CheckCircle className="w-6 h-6 text-green-600" />
                        </div>
                        <div>
                            <h4 className="text-xl font-bold text-slate-900 mb-1">Qualité garantie</h4>
                            <p className="text-slate-600 text-sm">Finis les mauvaises surprises. Nous vérifions méticuleusement chaque partenaire (SIRET, Assurance, Labels).</p>
                        </div>
                    </li>
                    <li className="flex gap-4">
                        <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                            <Euro className="w-6 h-6 text-blue-600" />
                        </div>
                        <div>
                            <h4 className="text-xl font-bold text-slate-900 mb-1">Prix justes, sans surcoût</h4>
                            <p className="text-slate-600 text-sm">Faire jouer la concurrence locale vous assure d'obtenir le tarif le plus bas pour les mêmes prestations.</p>
                        </div>
                    </li>
                </ul>

                <div className="pt-4">
                    <Link href="/qui-sommes-nous" className="text-orange-600 font-bold hover:text-orange-700 inline-flex items-center gap-1 group">
                        Découvrir notre histoire
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>
            </div>

            <div className="lg:w-1/2 w-full">
                <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-tr from-orange-400 to-amber-300 rounded-[2rem] transform rotate-3 scale-102 opacity-20 -z-10 blur-xl"></div>
                    <Image
                        src="/images/about-team.png"
                        alt="Notre équipe d'experts et artisans partenaires"
                        width={600}
                        height={600}
                        className="rounded-[2rem] shadow-2xl object-cover w-full aspect-square"
                    />
                    
                    {/* Floating badges */}
                    <div className="absolute -bottom-6 -left-2 sm:-left-6 bg-white p-4 sm:p-6 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-3 sm:gap-4">
                        <div className="bg-orange-100 text-orange-600 p-2 sm:p-3 rounded-full">
                            <Hammer className="w-5 h-5 sm:w-6 sm:h-6" />
                        </div>
                        <div>
                            <div className="text-xl sm:text-2xl font-extrabold text-slate-900">150+</div>
                            <div className="text-slate-500 text-xs sm:text-sm">Métiers couverts</div>
                        </div>
                    </div>
                    <div className="absolute -top-6 -right-2 sm:-right-6 bg-slate-900 p-4 sm:p-6 rounded-2xl shadow-xl flex items-center gap-3 sm:gap-4">
                        <div className="bg-blue-900/50 text-blue-400 p-2 sm:p-3 rounded-full">
                            <MapPin className="w-5 h-5 sm:w-6 sm:h-6" />
                        </div>
                        <div>
                            <div className="text-xl sm:text-2xl font-extrabold text-white">35k</div>
                            <div className="text-slate-400 text-xs sm:text-sm">Communes</div>
                        </div>
                    </div>
                </div>
            </div>

          </div>
        </div>
      </section>

      {/* Dynamic Internal Linking - Territories */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-slate-900 mb-4">Un maillage national</h2>
            <p className="text-slate-600 text-lg">Trouvez les meilleurs pros dans votre région et département.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
                <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                    <MapPin className="w-6 h-6 text-orange-500" />
                    Régions Populaires
                </h3>
                <div className="flex flex-wrap gap-3">
                    <Link href="/regions/ile-de-france" className="px-5 py-2.5 bg-white border border-slate-200 rounded-full text-sm font-medium text-slate-700 hover:border-orange-500 hover:text-orange-600 shadow-sm transition-all">Île-de-France</Link>
                    <Link href="/regions/auvergne-rhone-alpes" className="px-5 py-2.5 bg-white border border-slate-200 rounded-full text-sm font-medium text-slate-700 hover:border-orange-500 hover:text-orange-600 shadow-sm transition-all">Auvergne-Rhône-Alpes</Link>
                    <Link href="/regions/provence-alpes-cote-d-azur" className="px-5 py-2.5 bg-white border border-slate-200 rounded-full text-sm font-medium text-slate-700 hover:border-orange-500 hover:text-orange-600 shadow-sm transition-all">PACA</Link>
                    <Link href="/regions/nouvelle-aquitaine" className="px-5 py-2.5 bg-white border border-slate-200 rounded-full text-sm font-medium text-slate-700 hover:border-orange-500 hover:text-orange-600 shadow-sm transition-all">Nouvelle-Aquitaine</Link>
                    <Link href="/regions/occitanie" className="px-5 py-2.5 bg-white border border-slate-200 rounded-full text-sm font-medium text-slate-700 hover:border-orange-500 hover:text-orange-600 shadow-sm transition-all">Occitanie</Link>
                    <Link href="/regions/hauts-de-france" className="px-5 py-2.5 bg-white border border-slate-200 rounded-full text-sm font-medium text-slate-700 hover:border-orange-500 hover:text-orange-600 shadow-sm transition-all">Hauts-de-France</Link>
                </div>
                <div className="mt-6">
                    <Link href="/regions" className="text-orange-600 font-bold hover:underline">Toutes les régions →</Link>
                </div>
            </div>

            <div>
                <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                    <MapPin className="w-6 h-6 text-blue-500" />
                    Principaux Départements
                </h3>
                <div className="flex flex-wrap gap-3">
                    <Link href="/annuaire/paris-75" className="px-4 py-2 bg-slate-100 rounded-md text-sm font-medium text-slate-600 hover:bg-slate-200 transition-colors">Paris (75)</Link>
                    <Link href="/annuaire/nord-59" className="px-4 py-2 bg-slate-100 rounded-md text-sm font-medium text-slate-600 hover:bg-slate-200 transition-colors">Nord (59)</Link>
                    <Link href="/annuaire/bouches-du-rhone-13" className="px-4 py-2 bg-slate-100 rounded-md text-sm font-medium text-slate-600 hover:bg-slate-200 transition-colors">B. du Rhône (13)</Link>
                    <Link href="/annuaire/rhone-69" className="px-4 py-2 bg-slate-100 rounded-md text-sm font-medium text-slate-600 hover:bg-slate-200 transition-colors">Rhône (69)</Link>
                    <Link href="/annuaire/gironde-33" className="px-4 py-2 bg-slate-100 rounded-md text-sm font-medium text-slate-600 hover:bg-slate-200 transition-colors">Gironde (33)</Link>
                    <Link href="/annuaire/haute-garonne-31" className="px-4 py-2 bg-slate-100 rounded-md text-sm font-medium text-slate-600 hover:bg-slate-200 transition-colors">Hte-Garonne (31)</Link>
                    <Link href="/annuaire/seine-et-marne-77" className="px-4 py-2 bg-slate-100 rounded-md text-sm font-medium text-slate-600 hover:bg-slate-200 transition-colors">Seine-et-M. (77)</Link>
                    <Link href="/annuaire/loire-atlantique-44" className="px-4 py-2 bg-slate-100 rounded-md text-sm font-medium text-slate-600 hover:bg-slate-200 transition-colors">Loire-Atl. (44)</Link>
                </div>
                <div className="mt-6">
                    <Link href="/annuaire" className="text-blue-600 font-bold hover:underline">Voir l'annuaire complet →</Link>
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="py-24 bg-white border-y border-slate-200">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-extrabold text-center text-slate-900 mb-12">Questions Fréquentes</h2>

          <Accordion type="single" collapsible className="w-full space-y-4">
            <AccordionItem value="item-1" className="border border-slate-200 rounded-xl px-4 bg-slate-50 data-[state=open]:bg-white transition-colors">
              <AccordionTrigger className="text-lg font-bold text-slate-800 hover:no-underline hover:text-orange-600 py-5">
                Est-ce que l'utilisation du comparateur est vraiment gratuite ?
              </AccordionTrigger>
              <AccordionContent className="text-slate-600 leading-relaxed pb-5 text-base">
                Oui, l'utilisation de notre plateforme est <strong>100% gratuite et sans engagement</strong> pour les particuliers. Nous nous rémunérons en facturant aux artisans partenaires le coût de la mise en relation, ce qui n'a aucun impact sur les prix de vos devis.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-2" className="border border-slate-200 rounded-xl px-4 bg-slate-50 data-[state=open]:bg-white transition-colors">
              <AccordionTrigger className="text-lg font-bold text-slate-800 hover:no-underline hover:text-orange-600 py-5">
                Comment sont choisis les artisans partenaires ?
              </AccordionTrigger>
              <AccordionContent className="text-slate-600 leading-relaxed pb-5 text-base">
                Nos partenaires sont des professionnels rigoureusement séléctionnés et régulièrement mis à jour. Nous vérifions systématiquement : 
                <ul className="list-disc pl-5 mt-2 space-y-1">
                    <li>La validité de leur registre de commerce (SIRET)</li>
                    <li>S'ils possèdent bien une assurance responsabilité civile / décennale</li>
                    <li>Leur habilitation pour les aides de l'état (labels RGE "Reconnu Garant de l'Environnement")</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="border border-slate-200 rounded-xl px-4 bg-slate-50 data-[state=open]:bg-white transition-colors">
              <AccordionTrigger className="text-lg font-bold text-slate-800 hover:no-underline hover:text-orange-600 py-5">
                Combien de temps faut-il pour recevoir un devis ?
              </AccordionTrigger>
              <AccordionContent className="text-slate-600 leading-relaxed pb-5 text-base">
                En moyenne, nos artisans partenaires locaux vous contactent **sous 48 heures** (jours ouvrés) après votre demande afin d'affiner vos besoins et convenir d'une visite gratuite si nécessaire. 
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* CTA Bottom - Dark */}
      <section className="relative py-24 bg-slate-950 overflow-hidden text-center">
        {/* Abstract Background Shapes */}
        <div className="absolute inset-0 pointer-events-none opacity-50">
            <div className="absolute bottom-0 right-[10%] w-[40%] h-[150%] bg-orange-600/20 blur-[100px] rounded-full mix-blend-screen"></div>
        </div>

        <div className="container mx-auto px-4 max-w-4xl relative z-10">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">Prêt à confier votre projet<br/>aux bons pros ?</h2>
          <p className="text-xl text-slate-400 mb-10 max-w-2xl mx-auto">
            Saisissez vos critères et laissez notre plateforme vous proposer les solutions adaptées près de chez vous.
          </p>
          <Link href="/devis">
            <Button size="lg" className="bg-orange-600 hover:bg-orange-500 text-white text-xl font-bold px-12 h-16 rounded-full shadow-[0_0_40px_-10px_rgba(234,88,12,0.5)] transition-transform hover:scale-105">
              Trouver un pro pour 0€
              <ArrowRight className="ml-3 h-6 w-6" />
            </Button>
          </Link>
          <div className="mt-8 flex justify-center items-center gap-6 text-sm text-slate-500">
            <span className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-500"/> 100% Gratuit</span>
            <span className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-500"/> Sans engagement</span>
          </div>
        </div>
      </section>
      
      <MobileStickyCta href="/devis" text="Trouver un pro pour 0€" />
    </div>
  );
}
