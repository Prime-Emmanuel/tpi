import React, { useState } from 'react';
import { SECTORS_DATA, MARKETS_DATA } from '../data/translations';
import { Language } from '../types/content';
import { UserCheck, Building, Landmark, Globe, MapPin, ArrowUpRight } from 'lucide-react';

interface SectorsAndReachProps {
  lang: Language;
  onOpenContact: (sector?: string) => void;
}

export const SectorsAndReach: React.FC<SectorsAndReachProps> = ({ lang, onOpenContact }) => {
  const sectors = SECTORS_DATA[lang];
  const markets = MARKETS_DATA[lang];
  const [selectedSectorId, setSelectedSectorId] = useState<string>(sectors[1].id); // default to companies

  const getSectorIcon = (id: string) => {
    switch (id) {
      case 'particuliers':
        return <UserCheck className="w-5 h-5 text-emerald-400" />;
      case 'entreprises':
        return <Building className="w-5 h-5 text-emerald-400" />;
      case 'institutions':
        return <Landmark className="w-5 h-5 text-emerald-400" />;
      default:
        return <Building className="w-5 h-5 text-emerald-400" />;
    }
  };

  return (
    <section id="sectors" className="py-24 bg-[#07130c] relative border-b border-emerald-500/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-mono tracking-widest text-emerald-400 uppercase mb-3">
            04 · {lang === 'fr' ? 'TYPOLOGIES DE CLIENTS & COUVERTURE' : 'CLIENT PROFILES & COVERAGE'}
          </div>
          <h2 className="font-['Cinzel'] text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
            {lang === 'fr' ? (
              <>
                Des solutions calibrées pour <span className="text-emerald-400">chaque acteur</span>.
              </>
            ) : (
              <>
                Engineered solutions for <span className="text-emerald-400">every client tier</span>.
              </>
            )}
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed">
            {lang === 'fr'
              ? 'TPI Engineering Group s’adapte aux exigences techniques, budgétaires et administratives de trois grandes familles de maîtres d’ouvrage au Cameroun et à l’international.'
              : 'TPI Engineering Group tailors its engineering models, budgetary requirements, and administrative frameworks to serve three key client segments across Cameroon and international territories.'}
          </p>
        </div>

        {/* 3 Client Sectors Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {sectors.map((sec) => (
            <div
              key={sec.id}
              onClick={() => setSelectedSectorId(sec.id)}
              className={`p-8 rounded-2xl border transition-all duration-300 flex flex-col justify-between cursor-pointer ${
                selectedSectorId === sec.id
                  ? 'bg-[#0f291a] border-emerald-400 shadow-xl scale-[1.02]'
                  : 'bg-[#0b1c11] border-emerald-500/20 hover:border-emerald-500/40 hover:bg-[#0d2215]'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20">
                    {getSectorIcon(sec.id)}
                  </div>
                  <span className="text-xs font-mono text-emerald-400 uppercase tracking-widest">
                    {sec.id}
                  </span>
                </div>

                <h3 className="font-['Cinzel'] text-xl font-bold text-white mb-2">
                  {sec.title}
                </h3>

                <p className="text-xs font-mono text-emerald-300/80 mb-4">{sec.audience}</p>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                  {sec.description}
                </p>

                <div className="pt-4 border-t border-emerald-500/15">
                  <div className="text-[11px] font-mono uppercase tracking-widest text-slate-400 mb-2">
                    {lang === 'fr' ? 'Champs d’accompagnement :' : 'Key capabilities:'}
                  </div>
                  <ul className="space-y-2">
                    {sec.capabilities.map((cap, idx) => (
                      <li key={idx} className="text-xs text-slate-200 flex items-start gap-2">
                        <span className="text-emerald-400 font-bold">•</span>
                        <span>{cap}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-8">
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    onOpenContact(sec.id);
                  }}
                  className="w-full flex items-center justify-center gap-2 py-2.5 px-4 text-xs font-bold uppercase tracking-wider bg-emerald-500 hover:bg-emerald-400 text-[#051108] rounded-md transition-all active:scale-95"
                >
                  <span>{lang === 'fr' ? 'Échanger sur ce profil' : 'Connect on this scope'}</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Geographic Reach Section */}
        <div id="coverage" className="pt-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="text-xs font-mono tracking-widest text-emerald-400 uppercase mb-2">
              {lang === 'fr' ? 'RAYONNEMENT GÉOGRAPHIQUE' : 'GEOGRAPHIC REACH'}
            </div>
            <h3 className="font-['Cinzel'] text-2xl sm:text-3xl font-bold text-white tracking-wide">
              {lang === 'fr' ? 'Présence Nationale & Internationale' : 'National Footprint & Global Reach'}
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-slate-300">
              {lang === 'fr'
                ? 'Une organisation agile capable de mobiliser ses compétences d’études et de chantiers sur site.'
                : 'An agile organization capable of deploying planning teams and construction supervision wherever needed.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {markets.map((mkt, idx) => (
              <div
                key={idx}
                className="p-8 rounded-2xl bg-[#0b1c11] border border-emerald-500/20 relative overflow-hidden"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2 text-xs font-mono text-emerald-400">
                    {idx === 0 ? <MapPin className="w-4 h-4" /> : <Globe className="w-4 h-4" />}
                    <span>{mkt.badge}</span>
                  </div>
                  <span className="text-[11px] font-mono text-slate-400">{mkt.focus}</span>
                </div>

                <h4 className="font-['Cinzel'] text-xl font-bold text-white mb-3">
                  {mkt.title}
                </h4>

                <p className="text-sm text-slate-300 leading-relaxed mb-6">
                  {mkt.description}
                </p>

                <div className="pt-4 border-t border-emerald-500/15 flex items-center justify-between text-xs font-mono text-emerald-300">
                  <span>{lang === 'fr' ? 'Coordination centralisée' : 'Centralized coordination'}</span>
                  <span>TPI ENGINEERING GROUP</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
