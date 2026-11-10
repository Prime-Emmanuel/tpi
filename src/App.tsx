import React, { useState } from 'react';
import { Language } from './types/content';
import { Hero } from './components/Hero';
import { MarqueeTicker } from './components/MarqueeTicker';
import { ServicesShowcase } from './components/ServicesShowcase';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ConsultationModal } from './components/ConsultationModal';

export default function App() {
  const [lang, setLang] = useState<Language>('fr');
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [selectedService, setSelectedService] = useState<string>('');
  const [selectedSector, setSelectedSector] = useState<string>('');

  const handleOpenContact = (service?: string, sector?: string) => {
    setSelectedService(service || '');
    setSelectedSector(sector || '');
    setModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#0b0f0c] text-white flex flex-col font-sans selection:bg-[#d4fb38] selection:text-black">
      {/* Main Showcase Hero recreating the Dribbble reference */}
      <main className="flex-1">
        <Hero
          lang={lang}
          onToggleLang={setLang}
          onOpenContact={handleOpenContact}
        />

        {/* Brand Continuous Marquee */}
        <MarqueeTicker lang={lang} />

        {/* Official 3 Pillars Showcase */}
        <ServicesShowcase
          lang={lang}
          onSelectServiceForContact={(svc) => handleOpenContact(svc)}
        />

        {/* Direct Contacts & Consultation Hub */}
        <ContactSection
          lang={lang}
          initialService={selectedService}
          initialSector={selectedSector}
        />
      </main>

      {/* Streamlined Footer */}
      <Footer lang={lang} onOpenContact={() => handleOpenContact()} />

      {/* Interactive Consultation Modal */}
      <ConsultationModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        lang={lang}
        initialService={selectedService}
        initialSector={selectedSector}
      />
    </div>
  );
}
