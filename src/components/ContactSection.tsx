import React, { useState } from 'react';
import { COMPANY_INFO } from '../data/translations';
import { Language, ContactFormData } from '../types/content';
import { validateContactForm, ValidationResult } from '../utils/validation';
import {
  Phone,
  Mail,
  MapPin,
  Send,
  CheckCircle2,
  Clock,
  Building2,
  MessageSquare,
  AlertCircle,
  ExternalLink,
} from 'lucide-react';

interface ContactSectionProps {
  lang: Language;
  initialService?: string;
  initialSector?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  lang,
  initialService = '',
  initialSector = '',
}) => {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    email: '',
    phone: '',
    organization: '',
    sector: (initialSector as any) || '',
    serviceInterest: (initialService as any) || '',
    location: '',
    message: '',
  });

  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [inquirySummary, setInquirySummary] = useState<ContactFormData | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result: ValidationResult = validateContactForm(formData, lang);

    if (!result.isValid) {
      setErrors(result.errors);
      return;
    }

    setErrors({});
    setSubmitted(true);
    setInquirySummary(formData);
  };

  const handleReset = () => {
    setSubmitted(false);
    setInquirySummary(null);
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      organization: '',
      sector: '',
      serviceInterest: '',
      location: '',
      message: '',
    });
  };

  // Build mailto URI pre-filled with form contents
  const mailtoSubject = encodeURIComponent(
    `Demande d'Étude Technique TPI - ${formData.organization || formData.fullName}`
  );
  const mailtoBody = encodeURIComponent(
    `Bonjour TPI Engineering Group,\n\nNom: ${formData.fullName}\nSociété/Organisation: ${
      formData.organization || 'N/A'
    }\nTéléphone: ${formData.phone}\nEmail: ${formData.email}\nSecteur: ${
      formData.sector
    }\nPôle concerné: ${formData.serviceInterest}\nLocalisation du projet: ${
      formData.location || 'Cameroun'
    }\n\nDétails du besoin / Cahier des charges:\n${formData.message}\n\nMerci.`
  );
  const prefilledMailto = `mailto:${COMPANY_INFO.email}?subject=${mailtoSubject}&body=${mailtoBody}`;

  return (
    <section id="contact" className="py-24 bg-[#0a0f0c] relative border-b border-white/10 text-white">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-[#d4fb38] uppercase mb-3 font-semibold">
            <span className="w-2 h-2 rounded-full bg-[#d4fb38]" />
            <span>02 · {lang === 'fr' ? 'PRENDRE CONTACT & DEMANDE D’ÉTUDE' : 'CONTACT & CONSULTATION'}</span>
          </div>
          <h2 className="font-['Syne'] text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight uppercase">
            {lang === 'fr' ? (
              <>
                Initiez votre projet avec <span className="text-[#d4fb38]">TPI</span>.
              </>
            ) : (
              <>
                Initiate your engineering project with <span className="text-[#d4fb38]">TPI</span>.
              </>
            )}
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed font-sans">
            {lang === 'fr'
              ? 'Contactez directement nos ingénieurs par téléphone, transmettez vos termes de référence ou soumettez votre demande d’étude ci-dessous.'
              : 'Connect directly with our engineering team by phone, email your tender documentation, or submit your study inquiry below.'}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Official Contact Cards */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 rounded-2xl bg-[#0b1c11] border border-emerald-500/25 space-y-6">
              <h3 className="font-['Cinzel'] text-xl font-bold text-white">
                {lang === 'fr' ? 'Coordonnées Directes' : 'Direct Channels'}
              </h3>

              {/* Direct Telephone Numbers */}
              <div className="space-y-4">
                <div className="text-xs font-mono uppercase tracking-widest text-emerald-400">
                  {lang === 'fr' ? 'Lignes Téléphoniques Officielles' : 'Official Telephone Lines'}
                </div>
                {COMPANY_INFO.phones.map((phone, idx) => (
                  <a
                    key={idx}
                    href={`tel:${phone.raw}`}
                    className="flex items-center justify-between p-4 rounded-xl bg-[#0e2417] border border-emerald-500/20 hover:border-emerald-400 transition-colors group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 rounded-lg bg-emerald-500/10 text-emerald-400 group-hover:bg-emerald-500 group-hover:text-[#051108] transition-colors">
                        <Phone className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-sm font-bold font-mono text-white group-hover:text-emerald-300 transition-colors">
                          {phone.display}
                        </div>
                        <div className="text-[11px] text-slate-400">{phone.label}</div>
                      </div>
                    </div>
                    <span className="text-xs font-mono text-emerald-400 group-hover:translate-x-1 transition-transform">
                      Appeler →
                    </span>
                  </a>
                ))}
              </div>

              {/* Official Email */}
              <div className="pt-4 border-t border-emerald-500/15 space-y-2">
                <div className="text-xs font-mono uppercase tracking-widest text-emerald-400">
                  {lang === 'fr' ? 'Courrier Électronique Officiel' : 'Official Email Address'}
                </div>
                <a
                  href={`mailto:${COMPANY_INFO.email}`}
                  className="flex items-center justify-between p-4 rounded-xl bg-[#0e2417] border border-emerald-500/20 hover:border-emerald-400 transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-lg bg-emerald-500/10 text-emerald-400 group-hover:bg-emerald-500 group-hover:text-[#051108] transition-colors">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-sm font-bold font-mono text-white group-hover:text-emerald-300 transition-colors truncate max-w-[200px] sm:max-w-xs">
                        {COMPANY_INFO.email}
                      </div>
                      <div className="text-[11px] text-slate-400">
                        {lang === 'fr' ? 'Dossiers techniques & devis' : 'Technical bids & inquiries'}
                      </div>
                    </div>
                  </div>
                  <span className="text-xs font-mono text-emerald-400 group-hover:translate-x-1 transition-transform">
                    Écrire →
                  </span>
                </a>
              </div>

              {/* Location & Coverage note */}
              <div className="pt-4 border-t border-emerald-500/15 text-xs text-slate-300 space-y-2">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>
                    <strong>{lang === 'fr' ? 'Implantation :' : 'Location:'}</strong>{' '}
                    {COMPANY_INFO.locations[lang]}
                  </span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Clock className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>
                    {lang === 'fr'
                      ? 'Réception des demandes techniques : Lundi – Vendredi (8h00 – 18h00 GMT+1)'
                      : 'Technical inquiry processing: Monday – Friday (8:00 AM – 6:00 PM GMT+1)'}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Inquiry Consultation Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-2xl bg-[#0b1c11] border border-emerald-500/25">
              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                  <div className="flex items-center justify-between border-b border-emerald-500/15 pb-4">
                    <div>
                      <h3 className="font-['Cinzel'] text-xl font-bold text-white">
                        {lang === 'fr' ? 'Formulaire de Consultation Technique' : 'Technical Study Inquiry'}
                      </h3>
                      <p className="text-xs text-slate-400 mt-1">
                        {lang === 'fr'
                          ? 'Transmettez les paramètres de votre projet pour analyse.'
                          : 'Submit your project parameters for engineering appraisal.'}
                      </p>
                    </div>
                    <span className="text-[11px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-1 rounded">
                      TPI ENGINEERING GROUP
                    </span>
                  </div>

                  {/* Name and Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="fullName" className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-1.5">
                        {lang === 'fr' ? 'Nom Complet *' : 'Full Name *'}
                      </label>
                      <input
                        type="text"
                        id="fullName"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder={lang === 'fr' ? 'Ex: M. Jean-Paul Mbarga' : 'e.g., John Doe'}
                        className={`w-full px-4 py-2.5 rounded-lg bg-[#07130c] border text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-emerald-400 ${
                          errors.fullName ? 'border-red-500' : 'border-emerald-500/20'
                        }`}
                      />
                      {errors.fullName && (
                        <p className="text-xs text-red-400 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.fullName}
                        </p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-1.5">
                        {lang === 'fr' ? 'Adresse Email *' : 'Email Address *'}
                      </label>
                      <input
                        type="email"
                        id="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="contact@exemple.com"
                        className={`w-full px-4 py-2.5 rounded-lg bg-[#07130c] border text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-emerald-400 ${
                          errors.email ? 'border-red-500' : 'border-emerald-500/20'
                        }`}
                      />
                      {errors.email && (
                        <p className="text-xs text-red-400 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Phone & Organization */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="phone" className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-1.5">
                        {lang === 'fr' ? 'Téléphone de Contact *' : 'Telephone Number *'}
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+237 6..."
                        className={`w-full px-4 py-2.5 rounded-lg bg-[#07130c] border text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-emerald-400 ${
                          errors.phone ? 'border-red-500' : 'border-emerald-500/20'
                        }`}
                      />
                      {errors.phone && (
                        <p className="text-xs text-red-400 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.phone}
                        </p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="organization" className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-1.5">
                        {lang === 'fr' ? 'Entreprise / Organisme' : 'Company / Organization'}
                      </label>
                      <input
                        type="text"
                        id="organization"
                        value={formData.organization}
                        onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                        placeholder={lang === 'fr' ? 'Nom de la structure' : 'Entity name'}
                        className="w-full px-4 py-2.5 rounded-lg bg-[#07130c] border border-emerald-500/20 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-emerald-400"
                      />
                    </div>
                  </div>

                  {/* Sector & Service Pillar */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="sector" className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-1.5">
                        {lang === 'fr' ? 'Profil Demandeur *' : 'Client Sector *'}
                      </label>
                      <select
                        id="sector"
                        value={formData.sector}
                        onChange={(e) => setFormData({ ...formData, sector: e.target.value as any })}
                        className={`w-full px-4 py-2.5 rounded-lg bg-[#07130c] border text-sm text-white focus:outline-none focus:ring-1 focus:ring-emerald-400 ${
                          errors.sector ? 'border-red-500' : 'border-emerald-500/20'
                        }`}
                      >
                        <option value="">{lang === 'fr' ? '— Choisir un profil —' : '— Select a profile —'}</option>
                        <option value="individual">{lang === 'fr' ? 'Particulier' : 'Individual / Private'}</option>
                        <option value="private_company">{lang === 'fr' ? 'Entreprise Privée' : 'Private Enterprise'}</option>
                        <option value="public_institution">
                          {lang === 'fr' ? 'Institution / Organisme Public' : 'Public Institution / Government'}
                        </option>
                      </select>
                      {errors.sector && (
                        <p className="text-xs text-red-400 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.sector}
                        </p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="serviceInterest" className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-1.5">
                        {lang === 'fr' ? 'Pôle d’Ingénierie *' : 'Service Pillar *'}
                      </label>
                      <select
                        id="serviceInterest"
                        value={formData.serviceInterest}
                        onChange={(e) =>
                          setFormData({ ...formData, serviceInterest: e.target.value as any })
                        }
                        className={`w-full px-4 py-2.5 rounded-lg bg-[#07130c] border text-sm text-white focus:outline-none focus:ring-1 focus:ring-emerald-400 ${
                          errors.serviceInterest ? 'border-red-500' : 'border-emerald-500/20'
                        }`}
                      >
                        <option value="">{lang === 'fr' ? '— Sélectionner un pôle —' : '— Select a pillar —'}</option>
                        <option value="electricite_tertiaire">
                          01. {lang === 'fr' ? 'Électricité Tertiaire' : 'Commercial Electricity'}
                        </option>
                        <option value="energies_renouvelables">
                          02. {lang === 'fr' ? 'Énergies Renouvelables' : 'Renewable Energies'}
                        </option>
                        <option value="genie_civil">
                          03. {lang === 'fr' ? 'Génie Civil (Études, Plans, Réalisation)' : 'Civil Engineering (Studies, Plans, Execution)'}
                        </option>
                        <option value="multi">
                          04. {lang === 'fr' ? 'Projet Global Multidisciplinaire' : 'Comprehensive Multidisciplinary'}
                        </option>
                      </select>
                      {errors.serviceInterest && (
                        <p className="text-xs text-red-400 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.serviceInterest}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Location of Project */}
                  <div>
                    <label htmlFor="location" className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-1.5">
                      {lang === 'fr' ? 'Localisation du Chantier ou Projet' : 'Project / Site Location'}
                    </label>
                    <input
                      type="text"
                      id="location"
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      placeholder={lang === 'fr' ? 'Ex: Douala, Yaoundé, ou International' : 'e.g., Douala, Yaoundé, or International'}
                      className="w-full px-4 py-2.5 rounded-lg bg-[#07130c] border border-emerald-500/20 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-emerald-400"
                    />
                  </div>

                  {/* Message / Project brief */}
                  <div>
                    <label htmlFor="message" className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-1.5">
                      {lang === 'fr' ? 'Description des Besoins & Spécifications *' : 'Project Scope & Requirements *'}
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder={
                        lang === 'fr'
                          ? 'Précisez la nature de votre besoin (dimensionnement solaire, réfection tableau tertiaire, étude de structure, plans d’architecte...)'
                          : 'Describe your requirements (solar sizing, tertiary electrical upgrade, structural study, architectural drawings...)'
                      }
                      className={`w-full px-4 py-2.5 rounded-lg bg-[#07130c] border text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-emerald-400 ${
                        errors.message ? 'border-red-500' : 'border-emerald-500/20'
                      }`}
                    />
                    {errors.message && (
                      <p className="text-xs text-red-400 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.message}
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full flex items-center justify-center gap-2 py-3.5 px-6 text-xs font-['Syne'] font-extrabold uppercase tracking-widest bg-[#d4fb38] hover:bg-[#c2ed28] text-black rounded-full transition-all shadow-md active:scale-95"
                    >
                      <Send className="w-4 h-4" />
                      <span>{lang === 'fr' ? 'Valider et Préparer la Demande' : 'Validate & Prepare Inquiry'}</span>
                    </button>
                    <p className="text-[11px] text-slate-400 text-center mt-2 font-mono">
                      {lang === 'fr'
                        ? 'Données strictement confidentielles · Transmission directe à TPI ENGINEERING GROUP'
                        : 'Confidential technical data · Direct submission to TPI ENGINEERING GROUP'}
                    </p>
                  </div>
                </form>
              ) : (
                /* Honest, Complete Confirmation State */
                <div className="space-y-6">
                  <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-emerald-400 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-['Cinzel'] text-lg font-bold text-white">
                        {lang === 'fr' ? 'Demande Enregistrée avec Succès' : 'Inquiry Validated Successfully'}
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-300 mt-1 leading-relaxed">
                        {lang === 'fr'
                          ? `Merci M./Mme ${inquirySummary?.fullName}. Votre dossier de consultation a été synthétisé avec succès pour transmission à la direction technique de TPI Engineering Group.`
                          : `Thank you ${inquirySummary?.fullName}. Your technical brief has been validated and compiled for TPI Engineering Group technical leadership.`}
                      </p>
                    </div>
                  </div>

                  {/* Summary Recap */}
                  <div className="p-5 rounded-xl bg-[#07130c] border border-emerald-500/20 text-xs font-mono space-y-2 text-slate-300">
                    <div className="text-emerald-400 font-bold uppercase tracking-wider mb-2">
                      {lang === 'fr' ? 'Récapitulatif de la Consultation' : 'Inquiry Technical Summary'}
                    </div>
                    <div>• {lang === 'fr' ? 'Demandeur' : 'Applicant'} : <span className="text-white">{inquirySummary?.fullName}</span></div>
                    <div>• Email : <span className="text-white">{inquirySummary?.email}</span></div>
                    <div>• {lang === 'fr' ? 'Téléphone' : 'Phone'} : <span className="text-white">{inquirySummary?.phone}</span></div>
                    <div>• {lang === 'fr' ? 'Pôle technique' : 'Service Pillar'} : <span className="text-emerald-400 font-semibold">{inquirySummary?.serviceInterest}</span></div>
                    <div>• {lang === 'fr' ? 'Localisation' : 'Location'} : <span className="text-white">{inquirySummary?.location || 'Cameroun'}</span></div>
                  </div>

                  {/* Action buttons: Direct 1-Click Email to Official Hotmail + Call */}
                  <div className="space-y-3 pt-2">
                    <a
                      href={prefilledMailto}
                      className="w-full flex items-center justify-center gap-2 py-3 px-6 text-xs font-bold uppercase tracking-wider bg-emerald-500 hover:bg-emerald-400 text-[#051108] rounded-md transition-all shadow"
                    >
                      <Mail className="w-4 h-4" />
                      <span>
                        {lang === 'fr'
                          ? 'Envoyer directement par Email à Tpiengineeringsarl@hotmail.com'
                          : 'Send Direct Email to Tpiengineeringsarl@hotmail.com'}
                      </span>
                    </a>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <a
                        href={`tel:${COMPANY_INFO.phones[0].raw}`}
                        className="flex items-center justify-center gap-2 py-2.5 px-4 text-xs font-mono rounded-md bg-[#0e2718] border border-emerald-500/25 text-emerald-300 hover:text-white"
                      >
                        <Phone className="w-3.5 h-3.5" />
                        <span>{lang === 'fr' ? 'Appeler' : 'Call'} {COMPANY_INFO.phones[0].display}</span>
                      </a>

                      <button
                        type="button"
                        onClick={handleReset}
                        className="py-2.5 px-4 text-xs font-mono rounded-md bg-[#0e2718] border border-emerald-500/25 text-slate-300 hover:text-white"
                      >
                        {lang === 'fr' ? 'Nouvelle demande' : 'Submit another inquiry'}
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
