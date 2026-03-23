import { City } from "@/types";
import { Category } from "@/lib/categories";
import { FileText, UserCheck, Wrench } from "lucide-react";

interface StepsModuleProps {
    city: City;
    category: Category;
}

export function StepsModule({ city, category }: StepsModuleProps) {
    const steps = [
        {
            icon: FileText,
            title: "Demande de Devis",
            desc: `Trouvez le bon artisan pour votre projet de ${category.name.toLowerCase()}.`
        },
        {
            icon: UserCheck,
            title: "Visite ou Premier Contact",
            desc: `Un expert partenaire du ${city.department_code} étudie votre demande.`
        },
        {
            icon: Wrench,
            title: "Réalisation",
            desc: "Vos travaux sont effectués par des artisans rigoureusement sélectionnés."
        }
    ];

    return (
        <section className="py-12 bg-white">
            <div className="container mx-auto px-4 max-w-4xl">
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-8 text-center">
                    Comment se déroule votre projet à {city.name} ?
                </h2>

                <div className="relative">
                    {/* Connector Line (Hidden on mobile) */}
                    <div className="hidden md:block absolute top-8 left-0 right-0 h-0.5 bg-slate-100" />

                    <div className="grid md:grid-cols-3 gap-8">
                        {steps.map((step, idx) => (
                            <div key={idx} className="relative flex flex-col items-center text-center group">
                                <div className="w-16 h-16 bg-white border-2 border-orange-100 rounded-full flex items-center justify-center mb-4 z-10 group-hover:border-orange-500 group-hover:bg-orange-50 transition-colors">
                                    <step.icon className="h-8 w-8 text-orange-600" />
                                </div>
                                <h3 className="font-bold text-lg text-slate-900 mb-2">{step.title}</h3>
                                <p className="text-sm text-slate-600">{step.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
