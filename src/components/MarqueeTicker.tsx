import React from 'react';
import { Language } from '../types/content';

interface MarqueeTickerProps {
  lang: Language;
}

export const MarqueeTicker: React.FC<MarqueeTickerProps> = ({ lang }) => {
  const items =
    lang === 'fr'
      ? [
          'ÉLECTRICITÉ TERTIAIRE',
          'ÉNERGIES RENOUVELABLES',
          'GÉNIE CIVIL — ÉTUDES & PLANS',
          'RÉALISATION & SUPERVISION',
          'BÂTIR UN AVENIR DURABLE',
          'CAMEROUN & INTERNATIONAL',
          'PARTICULIERS · ENTREPRISES · INSTITUTIONS',
        ]
      : [
          'COMMERCIAL ELECTRICITY',
          'RENEWABLE SOLAR ENERGIES',
          'CIVIL ENGINEERING & BLUEPRINTS',
          'CONSTRUCTION EXECUTION',
          'BUILDING A SUSTAINABLE FUTURE',
          'CAMEROON & GLOBAL REACH',
          'INDIVIDUALS · ENTERPRISES · INSTITUTIONS',
        ];

  return (
    <div className="w-full bg-[#0a0f0c] border-y border-white/10 py-3.5 overflow-hidden select-none">
      <div className="flex animate-marquee whitespace-nowrap">
        {/* Render twice for continuous loop */}
        {[...items, ...items, ...items].map((text, idx) => (
          <div key={idx} className="flex items-center mx-5">
            <span className="font-['Syne'] text-xs font-bold tracking-[0.2em] text-white/90 uppercase">
              {text}
            </span>
            <span className="mx-5 text-[#d4fb38] text-xs font-bold" aria-hidden="true">
              ✦
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
