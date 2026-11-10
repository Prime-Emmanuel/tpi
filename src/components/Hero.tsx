import React, { useState } from 'react';
import { COMPANY_INFO } from '../data/translations';
import { Language } from '../types/content';
import { ArrowUpRight, Sun, Phone, Mail, Menu, X, Globe, MapPin } from 'lucide-react';

interface HeroProps {
  lang: Language;
  onToggleLang: (lang: Language) => void;
  onOpenContact: (service?: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ lang, onToggleLang, onOpenContact }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: '#services', label: lang === 'fr' ? 'Nos 3 Pôles' : '3 Pillars' },
    { href: '#contact', label: lang === 'fr' ? 'Cameroun & International' : 'Reach & Presence' },
  ];

  return (
    <div className="relative w-full bg-[#f4f5f2] text-[#0a0a0a] overflow-x-hidden border-b border-black/10">
      {/* Dynamic Luminous Lime Gradient Wash in Top-Right quadrant matching Dribbble reference */}
      <div
        className="absolute top-0 right-0 w-[70vw] max-w-[950px] h-[90vh] max-h-[900px] pointer-events-none select-none z-0"
        style={{
          background:
            'radial-gradient(circle at 80% 25%, #d4fb38 0%, #bbf127 30%, #e2fc75 55%, transparent 75%)',
          filter: 'blur(35px)',
          opacity: 0.95,
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12 pt-5 sm:pt-6 pb-12 sm:pb-16 flex flex-col justify-between min-h-[92vh]">
        {/* Top Navigation Bar adhering to the Dribbble reference */}
        <header className="flex items-center justify-between gap-4 pb-6 sm:pb-8 z-30">
          {/* Left Brand Lockup: ✦ TPI */}
          <a
            href="#"
            className="flex items-center gap-2.5 sm:gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-black rounded-md shrink-0"
            aria-label="TPI Engineering Group"
          >
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-md overflow-hidden bg-black flex items-center justify-center p-0.5 shadow-sm group-hover:scale-105 transition-transform">
              <img
                src={COMPANY_INFO.logoSrc}
                alt="Logo TPI"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover rounded-sm"
              />
            </div>
            <span className="font-['Syne'] font-black text-lg sm:text-2xl tracking-tighter text-[#0a0a0a] uppercase flex items-center gap-1.5 whitespace-nowrap">
              <span className="text-black text-base" aria-hidden="true">✦</span>
              <span>TPI</span>
            </span>
          </a>

          {/* Center Navigation Capsule (Desktop) */}
          <nav
            className="hidden md:flex items-center gap-5 text-xs font-['Plus_Jakarta_Sans'] font-semibold text-black/85"
            aria-label="Navigation principale"
          >
            <a
              href="#services"
              className="flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-black/15 bg-white/75 backdrop-blur-md shadow-xs hover:bg-white transition-colors whitespace-nowrap"
            >
              <span className="w-4 h-4 rounded-full bg-emerald-700 flex items-center justify-center text-[9px] font-bold text-white">
                T
              </span>
              <span>{lang === 'fr' ? 'Bâtir l’Avenir' : 'Our Mission'}</span>
            </a>

            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-black transition-colors py-1 whitespace-nowrap"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action: Language Switch + Bold Uppercase CONTACT US + Mobile Hamburger */}
          <div className="flex items-center gap-2 sm:gap-4 shrink-0">
            {/* Language Switch */}
            <div className="flex items-center text-[11px] sm:text-xs font-mono border border-black/15 rounded-full px-2 sm:px-2.5 py-0.5 sm:py-1 bg-white/75 backdrop-blur-md">
              <button
                type="button"
                onClick={() => onToggleLang('fr')}
                className={`transition-colors px-1 ${
                  lang === 'fr'
                    ? 'font-bold text-[#0a0a0a]'
                    : 'text-black/40 hover:text-black'
                }`}
                aria-label="Passer en Français"
              >
                FR
              </button>
              <span className="text-black/25">/</span>
              <button
                type="button"
                onClick={() => onToggleLang('en')}
                className={`transition-colors px-1 ${
                  lang === 'en'
                    ? 'font-bold text-[#0a0a0a]'
                    : 'text-black/40 hover:text-black'
                }`}
                aria-label="Switch to English"
              >
                EN
              </button>
            </div>

            {/* Desktop Contact Action */}
            <button
              type="button"
              onClick={() => onOpenContact()}
              className="hidden sm:inline-block font-['Syne'] font-black text-xs sm:text-sm tracking-wider uppercase text-[#0a0a0a] hover:opacity-70 transition-opacity whitespace-nowrap focus:outline-none focus-visible:underline"
            >
              {lang === 'fr' ? 'CONTACTEZ-NOUS' : 'CONTACT US'}
            </button>

            {/* Mobile Hamburger Drawer Trigger */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="md:hidden p-2 rounded-full bg-white/80 border border-black/15 text-black hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-black"
              aria-label="Ouvrir le menu de navigation"
              aria-expanded={mobileMenuOpen}
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </header>

        {/* Mobile Menu Drawer Overlay */}
        {mobileMenuOpen && (
          <div className="fixed inset-0 z-50 md:hidden bg-black/60 backdrop-blur-sm flex justify-end animate-fadeIn">
            <div className="w-[85vw] max-w-[340px] bg-[#f4f5f2] h-full shadow-2xl flex flex-col justify-between p-6 overflow-y-auto">
              <div className="space-y-6">
                {/* Drawer Header */}
                <div className="flex items-center justify-between pb-4 border-b border-black/10">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded bg-black p-0.5">
                      <img src={COMPANY_INFO.logoSrc} alt="Logo" className="w-full h-full object-cover" />
                    </div>
                    <span className="font-['Syne'] font-black text-lg text-black">TPI GROUP</span>
                  </div>
                  <button
                    type="button"
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-1.5 rounded-full bg-black/5 hover:bg-black/10 text-black"
                    aria-label="Fermer le menu"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Navigation Links */}
                <nav className="flex flex-col gap-3 pt-2">
                  <a
                    href="#services"
                    onClick={() => setMobileMenuOpen(false)}
                    className="font-['Syne'] text-base font-bold text-black py-2 hover:text-emerald-700 transition-colors border-b border-black/5"
                  >
                    01. {lang === 'fr' ? 'Nos 3 Pôles d’Ingénierie' : 'Our 3 Pillars'}
                  </a>
                  <a
                    href="#contact"
                    onClick={() => setMobileMenuOpen(false)}
                    className="font-['Syne'] text-base font-bold text-black py-2 hover:text-emerald-700 transition-colors border-b border-black/5"
                  >
                    02. {lang === 'fr' ? 'Cameroun & International' : 'Reach & Presence'}
                  </a>
                  <a
                    href="#contact"
                    onClick={() => setMobileMenuOpen(false)}
                    className="font-['Syne'] text-base font-bold text-black py-2 hover:text-emerald-700 transition-colors border-b border-black/5"
                  >
                    03. {lang === 'fr' ? 'Demande de Devis & Étude' : 'Consultation & Quotes'}
                  </a>
                </nav>

                {/* Primary CTA in Drawer */}
                <button
                  type="button"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenContact();
                  }}
                  className="w-full py-3 px-4 rounded-full bg-[#0a0a0a] text-white text-xs font-['Syne'] font-extrabold uppercase tracking-wider shadow-md flex items-center justify-center gap-2"
                >
                  <span>{lang === 'fr' ? 'DEMANDER UNE ÉTUDE' : 'REQUEST A STUDY'}</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>

              {/* Drawer Footer with Official Contacts */}
              <div className="pt-6 border-t border-black/10 space-y-3">
                <div className="text-[10px] font-mono uppercase tracking-widest text-black/60 font-bold">
                  {lang === 'fr' ? 'Assistance Directe' : 'Direct Contacts'}
                </div>
                <a
                  href={`tel:${COMPANY_INFO.phones[0].raw}`}
                  className="flex items-center gap-2 text-xs font-mono font-bold text-black"
                >
                  <Phone className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
                  <span>{COMPANY_INFO.phones[0].display}</span>
                </a>
                <a
                  href={`mailto:${COMPANY_INFO.email}`}
                  className="flex items-center gap-2 text-xs font-mono text-black/80 truncate"
                >
                  <Mail className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
                  <span className="truncate">{COMPANY_INFO.email}</span>
                </a>
              </div>
            </div>
          </div>
        )}

        {/* Central Display: 2-Column Grid on Laptop/Desktop (Zero overlap, Image placed strictly on the RIGHT) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center my-auto py-4 sm:py-8 z-10">
          {/* Left Column (lg:col-span-6): 100% Unobstructed Headline, Subtitle, Value Statement, and Primary CTAs */}
          <div className="lg:col-span-6 space-y-5 sm:space-y-6">
            <div>
              <h1 className="font-['Syne'] font-black text-5xl sm:text-6xl md:text-7xl lg:text-7xl xl:text-8xl leading-[0.88] tracking-[-0.03em] text-[#0a0a0a] uppercase select-none">
                TPI<br />
                GROUP
              </h1>
              <div className="mt-3 flex flex-wrap items-center gap-2 text-[10px] sm:text-xs font-mono uppercase tracking-widest text-black/70 font-semibold">
                <span className="w-2 h-2 rounded-full bg-emerald-600 shrink-0" />
                <span>{COMPANY_INFO.legalName}</span>
                <span>·</span>
                <span>{COMPANY_INFO.slogan[lang]}</span>
              </div>
            </div>

            <p className="font-['Syne'] text-xs sm:text-sm font-extrabold text-[#0a0a0a] uppercase tracking-wide leading-relaxed max-w-xl">
              {lang === 'fr'
                ? 'TPI ENGINEERING GROUP EST UNE RÉFÉRENCE MAJEURE EN ÉLECTRICITÉ TERTIAIRE, ÉNERGIES RENOUVELABLES ET GÉNIE CIVIL AU CAMEROUN ET À L’INTERNATIONAL.'
                : 'TPI ENGINEERING GROUP IS A PIONEERING LEADER IN COMMERCIAL ELECTRICITY, RENEWABLE SOLAR ENERGY, AND CIVIL INFRASTRUCTURE ACROSS CAMEROON AND GLOBALLY.'}
            </p>

            <div className="h-[1px] w-full max-w-xl bg-black/15" />

            <div className="flex flex-wrap items-center gap-5 sm:gap-6 pt-1">
              <div>
                <div className="font-['Syne'] text-3xl sm:text-4xl font-black text-[#0a0a0a] leading-none">
                  3 PÔLES
                </div>
                <div className="text-[10px] sm:text-[11px] font-mono uppercase tracking-wider text-black/60 mt-1">
                  {lang === 'fr' ? 'Études, Plans & Réalisation' : 'Studies, Blueprints & Execution'}
                </div>
              </div>

              <button
                type="button"
                onClick={() => onOpenContact()}
                className="px-6 py-3 rounded-full bg-[#0a0a0a] text-white hover:bg-black/85 text-xs font-['Syne'] font-extrabold tracking-wider uppercase transition-all shadow-md active:scale-95 flex items-center gap-2"
              >
                <span>{lang === 'fr' ? 'Demander une étude' : 'Request study'}</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Direct telephone indicator */}
            <div className="pt-1 flex items-center gap-2 text-xs font-mono text-black/70">
              <Phone className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
              <span>
                {lang === 'fr' ? 'Ligne directe :' : 'Direct phone:'}{' '}
                <a
                  href={`tel:${COMPANY_INFO.phones[0].raw}`}
                  className="font-bold text-black underline underline-offset-4"
                >
                  {COMPANY_INFO.phones[0].display}
                </a>
              </span>
            </div>
          </div>

          {/* Right Column (lg:col-span-6): Company Reception Image placed to the RIGHT + Roman Numeral III + Spec Card */}
          <div className="lg:col-span-6 flex flex-col gap-5 sm:gap-6">
            {/* Top row in right column: Tag + Roman Numeral III (Echoing XII in Dribbble reference) */}
            <div className="flex items-center justify-between">
              <div className="text-[10px] font-mono tracking-widest uppercase text-black/70 font-bold bg-white/80 backdrop-blur-sm px-3 py-1 rounded-full border border-black/10 shadow-xs flex items-center gap-1.5">
                <MapPin className="w-3 h-3 text-emerald-700" />
                <span>SIÈGE TPI · CAMEROUN</span>
              </div>

              <div className="text-right">
                <span className="font-['Syne'] font-black text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-none text-[#0a0a0a] uppercase tracking-tight select-none">
                  III
                </span>
                <span className="block text-[9px] sm:text-[10px] font-mono tracking-widest uppercase text-black/60 font-bold">
                  {lang === 'fr' ? '3 PÔLES D’INGÉNIERIE' : '3 CORE PILLARS'}
                </span>
              </div>
            </div>

            {/* The Company Reception Image: 100% visible, no distortion, placed cleanly on the RIGHT */}
            <div className="relative group w-full">
              <div className="rounded-2xl sm:rounded-3xl p-2.5 sm:p-3 bg-white/90 backdrop-blur-md border border-black/15 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.25)] transition-all">
                <div className="relative aspect-[16/11] sm:aspect-[4/3] rounded-xl sm:rounded-2xl overflow-hidden bg-black">
                  <img
                    src={COMPANY_INFO.receptionImage}
                    alt="Réception et siège moderne de TPI Engineering Group"
                    className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

                  {/* Overlaid Badge */}
                  <div className="absolute top-2.5 left-2.5 sm:top-3 sm:left-3 bg-[#0a0a0a]/90 text-white border border-white/20 backdrop-blur-md px-2.5 sm:px-3 py-1 rounded-full text-[9px] sm:text-[10px] font-mono tracking-wider flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#d4fb38]" />
                    <span>SHOWROOM & ENTRÉE PRINCIPALE</span>
                  </div>

                  {/* Overlaid Bottom Tag */}
                  <div className="absolute bottom-2.5 left-2.5 right-2.5 sm:bottom-3 sm:left-3 sm:right-3 p-2.5 sm:p-3 rounded-lg sm:rounded-xl bg-black/85 backdrop-blur-md border border-white/10 text-white flex items-center justify-between">
                    <div>
                      <div className="text-[11px] sm:text-xs font-bold font-['Syne']">
                        RÉCEPTION TECHNIQUE TPI
                      </div>
                      <div className="text-[9px] sm:text-[10px] text-white/70 font-mono">
                        Panneaux Solaires · Batteries VELA GEL · Équipements CAT
                      </div>
                    </div>
                    <div className="text-right font-mono text-[10px] sm:text-[11px] text-[#d4fb38] font-bold">
                      VERIFIED
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative engineering corner accents */}
              <div className="absolute -top-2 -left-2 w-4 h-4 border-t-2 border-l-2 border-black pointer-events-none" />
              <div className="absolute -bottom-2 -right-2 w-4 h-4 border-b-2 border-r-2 border-black pointer-events-none" />
            </div>

            {/* Floating Technical Spec Card (Mirroring Dribbble charging card) placed neatly below the photo on the right */}
            <div className="w-full bg-white/90 backdrop-blur-md border border-black/15 rounded-2xl p-4 sm:p-5 shadow-lg flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl bg-[#d4fb38] border border-black/15 flex items-center justify-center p-2.5 shrink-0 shadow-xs">
                  <Sun className="w-full h-full text-black" />
                </div>
                <div>
                  <div className="text-xs font-black text-[#0a0a0a] font-['Syne'] uppercase">
                    {lang === 'fr' ? 'Énergie Solaire & Tertiaire' : 'Solar & Commercial Power'}
                  </div>
                  <div className="text-[10px] text-black/60 font-mono">
                    CAT · VELA GEL · ONDULEURS
                  </div>
                </div>
              </div>

              <button
                type="button"
                onClick={() => onOpenContact('energies_renouvelables')}
                className="px-5 py-2.5 rounded-full bg-[#0a0a0a] text-white hover:bg-black/85 text-[11px] font-['Syne'] font-extrabold tracking-wider uppercase transition-colors flex items-center gap-1.5 shrink-0 shadow-sm active:scale-95"
              >
                <span>{lang === 'fr' ? 'DÉCOUVRIR LE PÔLE' : 'LEARN MORE'}</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
