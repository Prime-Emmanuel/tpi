import React, { useState } from 'react';
import { SERVICES_DATA } from '../data/translations';
import { Language, ServiceItem } from '../types/content';
import { ArrowUpRight, CheckCircle2, Zap, Sun, Building, FileText } from 'lucide-react';

interface ServicesShowcaseProps {
  lang: Language;
  onSelectServiceForContact: (serviceId: string) => void;
}

export const ServicesShowcase: React.FC<ServicesShowcaseProps> = ({
  lang,
  onSelectServiceForContact,
}) => {
  const services = SERVICES_DATA[lang];
  const [activeTabId, setActiveTabId] = useState<string>(services[0].id);

  const activeService: ServiceItem =
    services.find((s) => s.id === activeTabId) || services[0];

  const getServiceIcon = (id: string) => {
    switch (id) {
      case 'electricite-tertiaire':
        return <Zap className="w-5 h-5 text-[#d4fb38]" />;
      case 'energies-renouvelables':
        return <Sun className="w-5 h-5 text-[#d4fb38]" />;
      case 'genie-civil':
        return <Building className="w-5 h-5 text-[#d4fb38]" />;
      default:
        return <FileText className="w-5 h-5 text-[#d4fb38]" />;
    }
  };

  return (
    <section id="services" className="py-20 sm:py-28 bg-[#0a0f0c] text-white relative border-b border-white/10">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-[#d4fb38] uppercase mb-3 font-semibold">
              <span className="w-2 h-2 rounded-full bg-[#d4fb38]" />
              <span>01 · {lang === 'fr' ? 'NOS 3 PÔLES OFFICIELS' : 'OUR 3 CORE PILLARS'}</span>
            </div>
            <h2 className="font-['Syne'] text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight uppercase">
              {lang === 'fr' ? 'Pôles d’Ingénierie' : 'Core Disciplines'}
            </h2>
            <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed font-sans">
              {lang === 'fr'
                ? 'Conception, dimensionnement rigoureux et exécution de chantiers pour particuliers, entreprises et institutions au Cameroun et à l’international.'
                : 'Turnkey engineering, structural calculations, and certified on-site execution for private, commercial, and institutional clients.'}
            </p>
          </div>

          {/* Interactive Pillar Selector Tabs */}
          <div className="flex flex-wrap gap-2 p-1.5 bg-[#141b16] border border-white/15 rounded-full">
            {services.map((service) => (
              <button
                key={service.id}
                type="button"
                onClick={() => setActiveTabId(service.id)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-['Syne'] font-extrabold uppercase tracking-wider transition-all ${
                  activeTabId === service.id
                    ? 'bg-[#d4fb38] text-black shadow-md scale-102'
                    : 'text-slate-300 hover:text-white hover:bg-white/10'
                }`}
                aria-pressed={activeTabId === service.id}
              >
                <span>{service.number}.</span>
                <span className="truncate max-w-[150px] sm:max-w-none">{service.title}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Active Service Showcase - Bento Split Feature Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Visual Showcase (col-span-6) */}
          <div className="lg:col-span-6 flex flex-col">
            <div className="relative rounded-3xl overflow-hidden border border-white/15 bg-[#121915] shadow-2xl h-full flex flex-col group">
              <div className="relative aspect-[4/3] sm:aspect-[16/11] overflow-hidden flex-1">
                <img
                  src={activeService.image}
                  alt={`Illustration technique de ${activeService.title}`}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f0c] via-black/25 to-transparent" />

                <div className="absolute top-4 left-4 bg-black/85 border border-white/20 backdrop-blur-md px-3.5 py-1.5 rounded-full text-xs font-mono text-[#d4fb38] flex items-center gap-2">
                  {getServiceIcon(activeService.id)}
                  <span>PÔLE {activeService.number}</span>
                </div>

                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-black/85 border border-white/15 backdrop-blur-md">
                  <div className="text-[10px] font-mono text-[#d4fb38] uppercase tracking-widest font-bold">
                    {lang === 'fr' ? 'Spécification Technique' : 'Technical Focus'}
                  </div>
                  <div className="text-sm font-semibold text-white mt-1 line-clamp-2 font-['Syne']">
                    {activeService.tagline}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Details & Deliverables Panel (col-span-6) */}
          <div className="lg:col-span-6 flex flex-col justify-between p-6 sm:p-10 rounded-3xl bg-[#121915] border border-white/15 space-y-6">
            <div>
              <div className="flex items-center justify-between text-xs font-mono text-[#d4fb38] mb-2 font-bold">
                <span>{lang === 'fr' ? 'PÉRIMÈTRE OPÉRATIONNEL' : 'OPERATIONAL SCOPE'}</span>
                <span className="text-slate-400">TPI ENGINEERING GROUP</span>
              </div>
              <h3 className="font-['Syne'] text-2xl sm:text-3xl font-black text-white tracking-tight uppercase">
                {activeService.title}
              </h3>
              <p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed font-sans">
                {activeService.description}
              </p>
            </div>

            {/* Scope Points */}
            <div>
              <h4 className="text-xs font-mono uppercase tracking-widest text-[#d4fb38] mb-3 flex items-center gap-2 font-bold">
                <span className="w-1.5 h-1.5 rounded-full bg-[#d4fb38]" />
                {lang === 'fr' ? 'Champs d’Intervention' : 'Core Capabilities'}
              </h4>
              <ul className="space-y-2.5">
                {activeService.scopePoints.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-[#d4fb38] shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Deliverables */}
            <div className="pt-4 border-t border-white/10">
              <h4 className="text-xs font-mono uppercase tracking-widest text-[#d4fb38] mb-3 flex items-center gap-2 font-bold">
                <span className="w-1.5 h-1.5 rounded-full bg-[#d4fb38]" />
                {lang === 'fr' ? 'Livrables & Garanties' : 'Deliverables & Sign-offs'}
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono text-slate-300">
                {activeService.deliverables.map((deliv, idx) => (
                  <div key={idx} className="p-3 rounded-xl bg-black/60 border border-white/10">
                    • {deliv}
                  </div>
                ))}
              </div>
            </div>

            {/* CTA for this service */}
            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 border-t border-white/10">
              <button
                type="button"
                onClick={() => onSelectServiceForContact(activeService.id)}
                className="flex items-center justify-center gap-2 px-6 py-3 text-xs font-['Syne'] font-extrabold uppercase tracking-wider bg-[#d4fb38] hover:bg-[#c2ed28] text-black rounded-full transition-all shadow-md active:scale-95"
              >
                <span>
                  {lang === 'fr'
                    ? `Demander une étude pour ce pôle`
                    : `Inquire About ${activeService.title}`}
                </span>
                <ArrowUpRight className="w-4 h-4" />
              </button>

              <span className="text-[11px] text-slate-400 text-center sm:text-right font-mono">
                {lang === 'fr' ? 'Cameroun & International' : 'Cameroon & International'}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
