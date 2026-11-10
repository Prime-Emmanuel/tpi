import React from 'react';
import { Language } from '../types/content';
import { Compass, FileSpreadsheet, HardHat, CheckCircle2, ArrowUpRight } from 'lucide-react';

interface CivilEngineeringSpotlightProps {
  lang: Language;
  onOpenContact: (service?: string) => void;
}

export const CivilEngineeringSpotlight: React.FC<CivilEngineeringSpotlightProps> = ({
  lang,
  onOpenContact,
}) => {
  const steps = [
    {
      step: '01',
      title: lang === 'fr' ? 'Études Techniques & Calculs' : 'Engineering Studies & Calculations',
      icon: <Compass className="w-5 h-5 text-emerald-400" />,
      tagline:
        lang === 'fr'
          ? 'Modélisation des charges, mécanique des sols et dimensionnement prédictif'
          : 'Structural load modeling, soil mechanics, and predictive structural sizing',
      details:
        lang === 'fr'
          ? [
              'Analyses de descente de charges et stabilité des fondations',
              'Calculs sismiques, contraintes au vent et résistance des matériaux',
              'Notes de calculs conformes aux codes de construction en vigueur',
            ]
          : [
              'Load path calculation and foundation stability assessments',
              'Wind, seismic, and dynamic structural response calculations',
              'Comprehensive calculation reports compliant with standard codes',
            ],
    },
    {
      step: '02',
      title: lang === 'fr' ? 'Plans & Dossiers d’Exécution' : 'Technical Plans & Blueprints',
      icon: <FileSpreadsheet className="w-5 h-5 text-emerald-400" />,
      tagline:
        lang === 'fr'
          ? 'Conception architecturale et plans de détail prêts pour la construction'
          : 'Architectural drafting and constructible reinforced concrete execution plans',
      details:
        lang === 'fr'
          ? [
              'Plans de coffrage et plans de ferraillage haute précision',
              'Dossiers techniques complets (CCTP, métrés et devis quantitatifs)',
              'Coordination 3D des réservations techniques (gaines, réseaux)',
            ]
          : [
              'High-precision formwork blueprints and rebar detailing schedules',
              'Complete technical tender dossiers and bill of quantities (BOQ)',
              '3D multidisciplinary clash detection for MEP penetrations',
            ],
    },
    {
      step: '03',
      title: lang === 'fr' ? 'Réalisation & Suivi de Chantier' : 'On-Site Execution & Supervision',
      icon: <HardHat className="w-5 h-5 text-emerald-400" />,
      tagline:
        lang === 'fr'
          ? 'Direction opérationnelle des travaux, contrôle qualité et réceptions'
          : 'Operational site supervision, rigorous material testing, and commissioning',
      details:
        lang === 'fr'
          ? [
              'Supervision permanente et respect des tolérances de mise en œuvre',
              'Contrôle qualité des bétons, armatures et assemblages',
              'Réceptions techniques intermédiaires et procès-verbaux de livraison',
            ]
          : [
              'Continuous site stewardship and adherence to engineering tolerances',
              'Quality assurance testing for concrete batches and steel reinforcements',
              'Milestone engineering sign-offs and final handover documentation',
            ],
    },
  ];

  return (
    <section id="civil-spotlight" className="py-24 bg-[#06110a] relative border-b border-emerald-500/15 overflow-hidden">
      {/* Subtle background glow */}
      <div
        className="absolute bottom-10 left-1/3 w-[500px] h-[500px] bg-emerald-600/5 rounded-full blur-[150px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-mono tracking-widest text-emerald-400 uppercase mb-3">
            03 · {lang === 'fr' ? 'ZOOM SUR NOTRE EXPERTISE MAJEURE' : 'CORE EXPERTISE FOCUS'}
          </div>
          <h2 className="font-['Cinzel'] text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
            {lang === 'fr' ? (
              <>
                Génie Civil : <span className="text-emerald-400">Études, Plans & Réalisation</span>
              </>
            ) : (
              <>
                Civil Engineering: <span className="text-emerald-400">Studies, Plans & Execution</span>
              </>
            )}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            {lang === 'fr'
              ? 'TPI Engineering Group prend en charge la totalité de la chaîne de valeur du génie civil. De la note de calcul initiale à la livraison clé en main, nous bâtissons des structures pérennes, sûres et rigoureusement contrôlées.'
              : 'TPI Engineering Group delivers the complete civil engineering value chain. From the initial mathematical calculation to turnkey on-site delivery, we engineer enduring, safe, and rigorously inspected structures.'}
          </p>
        </div>

        {/* 3 Process / Competency Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((item) => (
            <div
              key={item.step}
              className="p-8 rounded-2xl bg-[#0b1d12] border border-emerald-500/20 hover:border-emerald-500/40 transition-all flex flex-col justify-between group hover:-translate-y-1 duration-300 shadow-lg"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20">
                    {item.icon}
                  </div>
                  <span className="font-['Cinzel'] text-3xl font-bold text-emerald-400/40 group-hover:text-emerald-400 transition-colors">
                    {item.step}
                  </span>
                </div>

                <h3 className="font-['Cinzel'] text-xl font-bold text-white mb-2">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-emerald-300/90 font-mono mb-6 leading-relaxed">
                  {item.tagline}
                </p>

                <ul className="space-y-3 pt-4 border-t border-emerald-500/15">
                  {item.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-8">
                <button
                  type="button"
                  onClick={() => onOpenContact('genie_civil')}
                  className="w-full flex items-center justify-center gap-2 py-2.5 px-4 text-xs font-mono uppercase tracking-wider text-emerald-300 hover:text-white bg-[#0e2718] hover:bg-emerald-600 rounded-md border border-emerald-500/30 transition-colors"
                >
                  <span>{lang === 'fr' ? 'Consulter pour ce volet' : 'Inquire for this step'}</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
