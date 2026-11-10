import React from 'react';
import { COMPANY_INFO } from '../data/translations';
import { Language } from '../types/content';
import { Phone, Mail, MapPin, ArrowUp, ArrowUpRight } from 'lucide-react';

interface FooterProps {
  lang: Language;
  onOpenContact: () => void;
}

export const Footer: React.FC<FooterProps> = ({ lang, onOpenContact }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#070a08] border-t border-white/10 text-slate-300">
      {/* Top Footer Banner */}
      <div className="border-b border-white/10 py-12">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl overflow-hidden bg-black p-0.5 shadow-md shrink-0 border border-white/15">
                <img
                  src={COMPANY_INFO.logoSrc}
                  alt="Logo TPI Engineering Group"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <div>
                <span className="font-['Syne'] text-xl font-black tracking-tight text-white uppercase">
                  {COMPANY_INFO.name}
                </span>
                <p className="text-xs font-mono text-[#d4fb38] tracking-widest uppercase font-semibold">
                  {COMPANY_INFO.legalName} · {COMPANY_INFO.slogan[lang]}
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={onOpenContact}
                className="flex items-center gap-2 px-6 py-3 text-xs font-['Syne'] font-extrabold uppercase tracking-wider bg-[#d4fb38] hover:bg-[#c2ed28] text-black rounded-full transition-all shadow-md active:scale-95"
              >
                <span>{lang === 'fr' ? 'Demander une Étude' : 'Request Technical Study'}</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={scrollToTop}
                className="p-3 rounded-full bg-[#141b16] hover:bg-[#1a251e] border border-white/15 text-[#d4fb38] hover:text-white transition-colors"
                aria-label="Retour en haut de page"
              >
                <ArrowUp className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Col 1: Identity */}
          <div className="space-y-4">
            <h4 className="font-['Cinzel'] text-sm font-bold text-white uppercase tracking-wider">
              {lang === 'fr' ? 'Le Groupe' : 'The Firm'}
            </h4>
            <p className="text-xs leading-relaxed text-slate-400">
              {lang === 'fr'
                ? 'TPI Engineering Group intervient au Cameroun et sur les marchés internationaux pour concevoir et concrétiser des projets d’ingénierie durables en électricité, énergies renouvelables et génie civil.'
                : 'TPI Engineering Group operates in Cameroon and international markets, delivering sustainable engineering across tertiary electricity, renewable energy, and civil works.'}
            </p>
            <div className="pt-2 text-xs font-mono text-emerald-400">
              {COMPANY_INFO.locations[lang]}
            </div>
          </div>

          {/* Col 2: Services Pillars */}
          <div className="space-y-4">
            <h4 className="font-['Cinzel'] text-sm font-bold text-white uppercase tracking-wider">
              {lang === 'fr' ? 'Pôles d’Ingénierie' : 'Engineering Pillars'}
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#services" className="hover:text-emerald-300 transition-colors">
                  01. {lang === 'fr' ? 'Électricité Tertiaire' : 'Commercial Electricity'}
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-emerald-300 transition-colors">
                  02. {lang === 'fr' ? 'Énergies Renouvelables' : 'Renewable Energies'}
                </a>
              </li>
              <li>
                <a href="#civil-spotlight" className="hover:text-emerald-300 transition-colors">
                  03. {lang === 'fr' ? 'Génie Civil — Études & Plans' : 'Civil Engineering — Studies & Plans'}
                </a>
              </li>
              <li>
                <a href="#civil-spotlight" className="hover:text-emerald-300 transition-colors">
                  04. {lang === 'fr' ? 'Réalisation & Suivi de Chantier' : 'Construction Execution & Oversight'}
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Sectors */}
          <div className="space-y-4">
            <h4 className="font-['Cinzel'] text-sm font-bold text-white uppercase tracking-wider">
              {lang === 'fr' ? 'Typologies Clients' : 'Client Sectors'}
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#sectors" className="hover:text-emerald-300 transition-colors">
                  • {lang === 'fr' ? 'Particuliers & Résidentiel' : 'Individuals & Private Estates'}
                </a>
              </li>
              <li>
                <a href="#sectors" className="hover:text-emerald-300 transition-colors">
                  • {lang === 'fr' ? 'Entreprises Privées & Tertiaire' : 'Private Commercial Enterprises'}
                </a>
              </li>
              <li>
                <a href="#sectors" className="hover:text-emerald-300 transition-colors">
                  • {lang === 'fr' ? 'Institutions & Organismes Publics' : 'Public Institutions & Authorities'}
                </a>
              </li>
              <li>
                <a href="#coverage" className="hover:text-emerald-300 transition-colors">
                  • {lang === 'fr' ? 'Cameroun & International' : 'Cameroon & International Markets'}
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Direct Contacts */}
          <div className="space-y-4">
            <h4 className="font-['Cinzel'] text-sm font-bold text-white uppercase tracking-wider">
              {lang === 'fr' ? 'Contacts Directs' : 'Direct Contacts'}
            </h4>
            <div className="space-y-2 text-xs font-mono">
              <a
                href={`mailto:${COMPANY_INFO.email}`}
                className="flex items-center gap-2 hover:text-emerald-300 transition-colors truncate"
              >
                <Mail className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>{COMPANY_INFO.email}</span>
              </a>
              {COMPANY_INFO.phones.map((p, idx) => (
                <a
                  key={idx}
                  href={`tel:${p.raw}`}
                  className="flex items-center gap-2 hover:text-emerald-300 transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>{p.display}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-emerald-500/10 py-6 text-xs text-slate-500 font-mono">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            © {new Date().getFullYear()} {COMPANY_INFO.legalName}. {lang === 'fr' ? 'Tous droits réservés.' : 'All rights reserved.'}
          </div>
          <div className="text-emerald-400/80">
            {COMPANY_INFO.slogan[lang]}
          </div>
        </div>
      </div>
    </footer>
  );
};
