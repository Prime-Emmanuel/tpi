import React, { useState, useEffect } from 'react';
import { COMPANY_INFO } from '../data/translations';
import { Language, ContactFormData } from '../types/content';
import { validateContactForm } from '../utils/validation';
import { X, Phone, Mail, Send, CheckCircle2, AlertCircle } from 'lucide-react';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
  initialService?: string;
  initialSector?: string;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({
  isOpen,
  onClose,
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

  useEffect(() => {
    if (initialService) {
      setFormData((prev) => ({ ...prev, serviceInterest: initialService as any }));
    }
    if (initialSector) {
      setFormData((prev) => ({ ...prev, sector: initialSector as any }));
    }
  }, [initialService, initialSector]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = validateContactForm(formData, lang);
    if (!result.isValid) {
      setErrors(result.errors);
      return;
    }
    setErrors({});
    setSubmitted(true);
  };

  const handleClose = () => {
    setSubmitted(false);
    onClose();
  };

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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-sm">
      <div
        className="relative w-full max-w-2xl bg-[#0c1f14] border border-emerald-500/30 rounded-2xl p-6 sm:p-8 shadow-2xl my-8 overflow-hidden"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        <button
          type="button"
          onClick={handleClose}
          className="absolute top-4 right-4 p-2 rounded-lg text-slate-400 hover:text-white bg-[#07130c] border border-emerald-500/20"
          aria-label="Fermer la boîte de dialogue"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            <div className="mb-6">
              <div className="text-xs font-mono text-emerald-400 uppercase tracking-widest mb-1">
                TPI ENGINEERING GROUP · CONSULTATION
              </div>
              <h3 id="modal-title" className="font-['Cinzel'] text-2xl font-bold text-white">
                {lang === 'fr' ? 'Demande de Consultation Technique' : 'Request Technical Consultation'}
              </h3>
              <p className="text-xs text-slate-300 mt-1">
                {lang === 'fr'
                  ? 'Transmettez les paramètres de votre projet pour analyse par nos équipes.'
                  : 'Submit your requirements for evaluation by our engineering team.'}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4" noValidate>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="modal-name" className="block text-xs font-mono text-slate-300 mb-1">
                    {lang === 'fr' ? 'Nom Complet *' : 'Full Name *'}
                  </label>
                  <input
                    type="text"
                    id="modal-name"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full px-3 py-2 text-sm rounded bg-[#07130c] border border-emerald-500/20 text-white focus:outline-none focus:ring-1 focus:ring-emerald-400"
                  />
                  {errors.fullName && (
                    <span className="text-[11px] text-red-400 flex items-center gap-1 mt-0.5">
                      <AlertCircle className="w-3 h-3" /> {errors.fullName}
                    </span>
                  )}
                </div>

                <div>
                  <label htmlFor="modal-email" className="block text-xs font-mono text-slate-300 mb-1">
                    {lang === 'fr' ? 'Email *' : 'Email *'}
                  </label>
                  <input
                    type="email"
                    id="modal-email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3 py-2 text-sm rounded bg-[#07130c] border border-emerald-500/20 text-white focus:outline-none focus:ring-1 focus:ring-emerald-400"
                  />
                  {errors.email && (
                    <span className="text-[11px] text-red-400 flex items-center gap-1 mt-0.5">
                      <AlertCircle className="w-3 h-3" /> {errors.email}
                    </span>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="modal-phone" className="block text-xs font-mono text-slate-300 mb-1">
                    {lang === 'fr' ? 'Téléphone *' : 'Phone *'}
                  </label>
                  <input
                    type="tel"
                    id="modal-phone"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+237 ..."
                    className="w-full px-3 py-2 text-sm rounded bg-[#07130c] border border-emerald-500/20 text-white focus:outline-none focus:ring-1 focus:ring-emerald-400"
                  />
                  {errors.phone && (
                    <span className="text-[11px] text-red-400 flex items-center gap-1 mt-0.5">
                      <AlertCircle className="w-3 h-3" /> {errors.phone}
                    </span>
                  )}
                </div>

                <div>
                  <label htmlFor="modal-org" className="block text-xs font-mono text-slate-300 mb-1">
                    {lang === 'fr' ? 'Structure / Organisation' : 'Organization'}
                  </label>
                  <input
                    type="text"
                    id="modal-org"
                    value={formData.organization}
                    onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                    className="w-full px-3 py-2 text-sm rounded bg-[#07130c] border border-emerald-500/20 text-white focus:outline-none focus:ring-1 focus:ring-emerald-400"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="modal-sector" className="block text-xs font-mono text-slate-300 mb-1">
                    {lang === 'fr' ? 'Secteur *' : 'Sector *'}
                  </label>
                  <select
                    id="modal-sector"
                    value={formData.sector}
                    onChange={(e) => setFormData({ ...formData, sector: e.target.value as any })}
                    className="w-full px-3 py-2 text-sm rounded bg-[#07130c] border border-emerald-500/20 text-white focus:outline-none focus:ring-1 focus:ring-emerald-400"
                  >
                    <option value="">{lang === 'fr' ? '— Choisir —' : '— Select —'}</option>
                    <option value="individual">{lang === 'fr' ? 'Particulier' : 'Individual'}</option>
                    <option value="private_company">{lang === 'fr' ? 'Entreprise Privée' : 'Private Company'}</option>
                    <option value="public_institution">
                      {lang === 'fr' ? 'Institution Publique' : 'Public Institution'}
                    </option>
                  </select>
                  {errors.sector && (
                    <span className="text-[11px] text-red-400 flex items-center gap-1 mt-0.5">
                      <AlertCircle className="w-3 h-3" /> {errors.sector}
                    </span>
                  )}
                </div>

                <div>
                  <label htmlFor="modal-pillar" className="block text-xs font-mono text-slate-300 mb-1">
                    {lang === 'fr' ? 'Pôle Concerné *' : 'Pillar *'}
                  </label>
                  <select
                    id="modal-pillar"
                    value={formData.serviceInterest}
                    onChange={(e) =>
                      setFormData({ ...formData, serviceInterest: e.target.value as any })
                    }
                    className="w-full px-3 py-2 text-sm rounded bg-[#07130c] border border-emerald-500/20 text-white focus:outline-none focus:ring-1 focus:ring-emerald-400"
                  >
                    <option value="">{lang === 'fr' ? '— Choisir un pôle —' : '— Select a pillar —'}</option>
                    <option value="electricite_tertiaire">
                      {lang === 'fr' ? '01. Électricité Tertiaire' : '01. Commercial Electricity'}
                    </option>
                    <option value="energies_renouvelables">
                      {lang === 'fr' ? '02. Énergies Renouvelables' : '02. Renewable Energies'}
                    </option>
                    <option value="genie_civil">
                      {lang === 'fr' ? '03. Génie Civil (Études & Plans)' : '03. Civil Engineering'}
                    </option>
                    <option value="multi">
                      {lang === 'fr' ? '04. Projet Multidisciplinaire' : '04. Multidisciplinary'}
                    </option>
                  </select>
                  {errors.serviceInterest && (
                    <span className="text-[11px] text-red-400 flex items-center gap-1 mt-0.5">
                      <AlertCircle className="w-3 h-3" /> {errors.serviceInterest}
                    </span>
                  )}
                </div>
              </div>

              <div>
                <label htmlFor="modal-msg" className="block text-xs font-mono text-slate-300 mb-1">
                  {lang === 'fr' ? 'Description Succincte du Projet *' : 'Project Summary *'}
                </label>
                <textarea
                  id="modal-msg"
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder={
                    lang === 'fr'
                      ? 'Localisation, surface, objectifs techniques...'
                      : 'Location, scope, engineering objectives...'
                  }
                  className="w-full px-3 py-2 text-sm rounded bg-[#07130c] border border-emerald-500/20 text-white focus:outline-none focus:ring-1 focus:ring-emerald-400"
                />
                {errors.message && (
                  <span className="text-[11px] text-red-400 flex items-center gap-1 mt-0.5">
                    <AlertCircle className="w-3 h-3" /> {errors.message}
                  </span>
                )}
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3 px-6 text-xs font-['Syne'] font-extrabold uppercase tracking-wider bg-[#d4fb38] hover:bg-[#c2ed28] text-black rounded-full transition-all shadow-md active:scale-95"
                >
                  {lang === 'fr' ? 'Valider et Préparer le Dossier' : 'Validate & Prepare Dossier'}
                </button>
              </div>
            </form>
          </div>
        ) : (
          <div className="space-y-6 text-center py-4">
            <div className="w-12 h-12 mx-auto rounded-full bg-emerald-500/20 border border-emerald-400 flex items-center justify-center text-emerald-400">
              <CheckCircle2 className="w-6 h-6" />
            </div>

            <h3 className="font-['Cinzel'] text-xl font-bold text-white">
              {lang === 'fr' ? 'Dossier Validé avec Succès' : 'Dossier Prepared Successfully'}
            </h3>

            <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
              {lang === 'fr'
                ? `Votre demande a été formulée. Cliquez ci-dessous pour transmettre l'ensemble des éléments techniques à Tpiengineeringsarl@hotmail.com ou joignez directement notre permanence téléphonique.`
                : `Your brief has been compiled. Click below to forward details directly to Tpiengineeringsarl@hotmail.com or call our engineers.`}
            </p>

            <div className="space-y-3 pt-2">
              <a
                href={prefilledMailto}
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-6 text-xs font-bold uppercase tracking-wider bg-emerald-500 hover:bg-emerald-400 text-[#051108] rounded-md transition-all"
              >
                <Mail className="w-4 h-4" />
                <span>
                  {lang === 'fr'
                    ? 'Envoyer à Tpiengineeringsarl@hotmail.com'
                    : 'Send to Tpiengineeringsarl@hotmail.com'}
                </span>
              </a>

              <button
                type="button"
                onClick={handleClose}
                className="w-full py-2.5 px-4 text-xs font-mono rounded bg-[#07130c] border border-emerald-500/20 text-slate-300 hover:text-white"
              >
                {lang === 'fr' ? 'Fermer' : 'Close'}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
