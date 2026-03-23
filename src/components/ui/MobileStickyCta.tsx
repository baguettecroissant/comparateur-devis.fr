import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface MobileStickyCtaProps {
    href: string;
    text: string;
}

export function MobileStickyCta({ href, text }: MobileStickyCtaProps) {
    return (
        <div className="md:hidden fixed bottom-0 left-0 w-full p-4 bg-white border-t border-slate-200 shadow-[0_-4px_20px_rgba(0,0,0,0.1)] z-[100]">
            <Link href={href} className="flex items-center justify-center gap-2 bg-orange-600 hover:bg-orange-500 text-white font-bold text-lg w-full h-14 rounded-full shadow-[0_0_20px_-5px_rgba(234,88,12,0.5)] transition-all transform active:scale-95">
                {text}
                <ArrowRight className="h-5 w-5" />
            </Link>
        </div>
    );
}
