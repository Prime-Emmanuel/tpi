import React from 'react';
import { COMPANY_INFO } from '../data/translations';
import { Language } from '../types/content';
import { CheckCircle2, MapPin, Building2, Layers, ShieldCheck } from 'lucide-react';

interface AboutSectionProps {
  lang: Language;
  onOpenContact: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ lang, onOpenContact }) => {
  return (
    <section id="about" className="py-24 bg-[#07130c] relative border-b border-emerald-500/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-mono tracking-widest text-emerald-400 uppercase mb-3">
            01 · {lang === 'fr' ? 'À PROPOS DU GROUPE' : 'ABOUT THE GROUP'}
          </div>
          <h2 className="font-['Cinzel'] text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
            {lang === 'fr' ? (
              <>
                Une exigence d’ingénierie au service du <span className="text-emerald-400">bâtiment durable</span>.
              </>
            ) : (
              <>
                Engineering rigor dedicated to <span className="text-emerald-400">sustainable construction</span>.
              </>
            )}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            {lang === 'fr'
              ? 'TPI Engineering Group (TPI ENGINEERING SARL) est une structure d’ingénierie multidisciplinaire fondée avec une ambition claire : apporter aux maîtres d’ouvrage privés, institutionnels et particuliers des solutions techniques irréprochables en électricité, énergies propres et génie civil.'
              : 'TPI Engineering Group (TPI ENGINEERING SARL) is a multidisciplinary engineering practice established with a clear mandate: providing private developers, institutional entities, and private clients with impeccable technical solutions across tertiary electricity, clean energies, and comprehensive civil works.'}
          </p>
        </div>

        {/* 2-Column Split: Image of corporate reception/office + Core Pillars of Commitment */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          {/* Left Column: Office photograph showcase */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div className="relative rounded-2xl overflow-hidden border border-emerald-500/25 bg-[#0c1f15] shadow-xl h-full flex flex-col">
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src="/src/assets/images/office_tpi_corporate_reception_1794325055518.jpg"
                  alt="Locaux et espace d'accueil TPI Engineering Group"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#07130c] via-black/20 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs font-mono text-slate-200 bg-[#07130c]/85 border border-emerald-500/20 px-3 py-2 rounded">
                  <span className="flex items-center gap-2">
                    <Building2 className="w-4 h-4 text-emerald-400" />
                    {lang === 'fr' ? 'Siège & Direction Technique' : 'Headquarters & Engineering Office'}
                  </span>
                  <span className="text-emerald-400">CAMEROUN</span>
                </div>
              </div>

              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-4">
                <blockquote className="text-slate-300 text-sm sm:text-base italic leading-relaxed border-l-2 border-emerald-400 pl-4">
                  « {lang === 'fr' ? COMPANY_INFO.slogan.fr : COMPANY_INFO.slogan.en} »
                  <footer className="text-xs font-mono font-normal not-italic text-emerald-400/90 mt-2">
                    — {COMPANY_INFO.name}
                  </footer>
                </blockquote>

                <div className="pt-4 border-t border-emerald-500/15 flex items-center justify-between text-xs text-slate-400">
                  <span className="flex items-center gap-2">
                    <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                    {COMPANY_INFO.locations[lang]}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Transparent Corporate Commitments */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <h3 className="font-['Cinzel'] text-xl sm:text-2xl font-bold text-white tracking-wide">
                {lang === 'fr' ? 'Nos Fondations Opérationnelles' : 'Our Operational Foundations'}
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                {lang === 'fr'
                  ? 'Plutôt que des promesses abstraites, TPI Engineering s’engage sur la précision mathématique des calculs, la rigueur des plans d’exécution et la transparence totale sur les étapes de chantier.'
                  : 'Rather than abstract promises, TPI Engineering commits to mathematical accuracy in structural calculations, exact execution blueprints, and absolute transparency throughout construction phases.'}
              </p>
            </div>

            <div className="space-y-4">
              <div className="p-5 rounded-xl bg-[#0c1e14] border border-emerald-500/20 hover:border-emerald-500/40 transition-colors">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400 shrink-0">
                    <Layers className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-base font-semibold text-white">
                      {lang === 'fr' ? 'Synergie Multidisciplinaire' : 'Multidisciplinary Synergy'}
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-300 mt-1 leading-relaxed">
                      {lang === 'fr'
                        ? 'En réunissant sous une même gouvernance le génie civil, l’électricité tertiaire et le solaire, nous éliminons les conflits de réseau et les surcoûts d’interface.'
                        : 'By uniting civil structural works, tertiary power networks, and solar systems under a single engineering oversight, we eliminate network clashes and interface overruns.'}
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-5 rounded-xl bg-[#0c1e14] border border-emerald-500/20 hover:border-emerald-500/40 transition-colors">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400 shrink-0">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-base font-semibold text-white">
                      {lang === 'fr' ? 'Conformité & Durabilité' : 'Compliance & Durability'}
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-300 mt-1 leading-relaxed">
                      {lang === 'fr'
                        ? 'Chaque plan, tableau électrique ou champ photovoltaïque est conçu pour durer, résister aux contraintes d’environnement et protéger les investissements de nos clients.'
                        : 'Every structural drawing, electrical switchboard, or solar field is designed for longevity, harsh environmental tolerance, and capital protection.'}
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-5 rounded-xl bg-[#0c1e14] border border-emerald-500/20 hover:border-emerald-500/40 transition-colors">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400 shrink-0">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-base font-semibold text-white">
                      {lang === 'fr' ? 'Disponibilité & Contact Direct' : 'Availability & Direct Contact'}
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-300 mt-1 leading-relaxed">
                      {lang === 'fr'
                        ? 'Nos ingénieurs et techniciens restent directement joignables par téléphone et email pour l’analyse de vos cahiers des charges et visites de sites.'
                        : 'Our engineers and project managers remain directly reachable by telephone and email for specification analysis and site assessments.'}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <button
                type="button"
                onClick={onOpenContact}
                className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-emerald-400 hover:text-emerald-300 font-semibold underline underline-offset-8"
              >
                {lang === 'fr' ? 'Échanger avec notre direction technique →' : 'Discuss with our technical team →'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
