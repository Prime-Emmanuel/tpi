import React, { useState } from 'react';
import { COMPANY_INFO } from '../data/translations';
import { Language } from '../types/content';
import { Phone, Mail, Menu, X, Globe, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  lang: Language;
  onToggleLang: (lang: Language) => void;
  onOpenContact: (preselectService?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ lang, onToggleLang, onOpenContact }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: '#services', label: lang === 'fr' ? 'Nos Pôles' : 'Services' },
    { href: '#civil-spotlight', label: lang === 'fr' ? 'Génie Civil' : 'Civil Engineering' },
    { href: '#sectors', label: lang === 'fr' ? 'Clients' : 'Sectors' },
    { href: '#coverage', label: lang === 'fr' ? 'Présence' : 'Coverage' },
    { href: '#about', label: lang === 'fr' ? 'À Propos' : 'About' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-[#07130c]/90 backdrop-blur-md border-b border-emerald-500/15 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-8">
          {/* Zone 1: Brand Zone (Single element lockup with genuine logo) */}
          <a
            href="#"
            className="flex items-center gap-2.5 sm:gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 rounded-md shrink-0"
            aria-label="TPI Engineering Group - Accueil"
          >
            <div className="relative w-9 h-9 sm:w-11 sm:h-11 rounded-lg overflow-hidden border border-emerald-500/30 bg-[#0e2718] p-0.5 shadow-sm group-hover:border-emerald-400 transition-colors shrink-0">
              <img
                src={COMPANY_INFO.logoSrc}
                alt="Logo TPI Engineering Group"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover rounded-md"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-['Cinzel'] text-sm sm:text-base lg:text-lg font-bold tracking-wider text-white group-hover:text-emerald-300 transition-colors whitespace-nowrap">
                TPI ENGINEERING
              </span>
              <span className="hidden sm:block text-[10px] uppercase font-mono tracking-widest text-emerald-400/90 whitespace-nowrap">
                Group · Bâtir un Avenir Durable
              </span>
            </div>
          </a>

          {/* Zone 2: 4-5 Navigation Links (Clean typography, whitespace-nowrap) */}
          <nav className="hidden md:flex items-center gap-7" aria-label="Navigation principale">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-slate-300 hover:text-white transition-colors relative py-1 group whitespace-nowrap"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-emerald-400 transition-all duration-200 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Zone 3: 1 Primary Action + Clean Language Toggle */}
          <div className="hidden lg:flex items-center gap-4 shrink-0">
            {/* Language Switcher */}
            <div className="flex items-center bg-[#0d2216] border border-emerald-500/20 rounded-md p-0.5 text-xs font-mono">
              <button
                type="button"
                onClick={() => onToggleLang('fr')}
                className={`px-2.5 py-1 rounded transition-colors ${
                  lang === 'fr'
                    ? 'bg-emerald-600 text-white font-semibold'
                    : 'text-slate-400 hover:text-white'
                }`}
                aria-label="Passer le site en Français"
              >
                FR
              </button>
              <button
                type="button"
                onClick={() => onToggleLang('en')}
                className={`px-2.5 py-1 rounded transition-colors ${
                  lang === 'en'
                    ? 'bg-emerald-600 text-white font-semibold'
                    : 'text-slate-400 hover:text-white'
                }`}
                aria-label="Switch website to English"
              >
                EN
              </button>
            </div>

            {/* Primary Action Button */}
            <button
              type="button"
              onClick={() => onOpenContact()}
              className="flex items-center gap-2 px-5 py-2.5 text-xs font-bold tracking-wider uppercase bg-emerald-500 text-[#051108] hover:bg-emerald-400 rounded-md transition-all shadow-sm hover:shadow-emerald-500/20 active:scale-95 whitespace-nowrap"
            >
              <span>{lang === 'fr' ? 'Prendre Contact' : 'Consult Us'}</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden items-center gap-3">
            {/* Language switch on mobile */}
            <button
              type="button"
              onClick={() => onToggleLang(lang === 'fr' ? 'en' : 'fr')}
              className="flex items-center gap-1 px-2.5 py-1 text-xs font-mono rounded border border-emerald-500/30 text-emerald-300 bg-[#0d2216]"
            >
              <Globe className="w-3 h-3" />
              <span className="uppercase">{lang}</span>
            </button>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md text-slate-300 hover:text-white hover:bg-[#0f2a1b] focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
              aria-label={mobileMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#07130c]/98 border-b border-emerald-500/20 px-6 py-6 space-y-4">
          <nav className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-slate-200 hover:text-emerald-400 transition-colors py-2 border-b border-emerald-950"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="pt-3 space-y-3">
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenContact();
              }}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 text-xs font-bold tracking-wider uppercase bg-emerald-500 text-[#051108] hover:bg-emerald-400 rounded-md transition-colors"
            >
              <span>{lang === 'fr' ? 'Prendre Contact' : 'Consult Us'}</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>

            <div className="grid grid-cols-2 gap-2 pt-2">
              <a
                href={`tel:${COMPANY_INFO.phones[0].raw}`}
                className="flex items-center justify-center gap-2 py-2 px-3 text-xs text-slate-300 bg-[#0d2216] border border-emerald-500/20 rounded hover:text-white"
              >
                <Phone className="w-3.5 h-3.5 text-emerald-400" />
                <span className="truncate">+237 694 11 94 17</span>
              </a>
              <a
                href={`mailto:${COMPANY_INFO.email}`}
                className="flex items-center justify-center gap-2 py-2 px-3 text-xs text-slate-300 bg-[#0d2216] border border-emerald-500/20 rounded hover:text-white"
              >
                <Mail className="w-3.5 h-3.5 text-emerald-400" />
                <span>Email</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
