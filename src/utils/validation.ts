import { ContactFormData } from '../types/content';

export function isValidEmail(email: string): boolean {
  if (!email || typeof email !== 'string') return false;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email.trim());
}

export function isValidPhone(phone: string): boolean {
  if (!phone || typeof phone !== 'string') return false;
  const cleaned = phone.replace(/[\s\-\(\)\.]/g, '');
  // Accepts standard international formats with + or at least 8 digits
  return /^\+?[0-9]{8,15}$/.test(cleaned);
}

export interface ValidationResult {
  isValid: boolean;
  errors: Partial<Record<keyof ContactFormData, string>>;
}

export function validateContactForm(
  data: ContactFormData,
  lang: 'fr' | 'en' = 'fr'
): ValidationResult {
  const errors: Partial<Record<keyof ContactFormData, string>> = {};

  if (!data.fullName || data.fullName.trim().length < 2) {
    errors.fullName =
      lang === 'fr'
        ? 'Veuillez renseigner votre nom complet (au moins 2 caractères).'
        : 'Please provide your full name (at least 2 characters).';
  }

  if (!data.email || !isValidEmail(data.email)) {
    errors.email =
      lang === 'fr'
        ? 'Veuillez saisir une adresse email valide.'
        : 'Please enter a valid email address.';
  }

  if (!data.phone || !isValidPhone(data.phone)) {
    errors.phone =
      lang === 'fr'
        ? 'Veuillez renseigner un numéro de téléphone valide.'
        : 'Please provide a valid contact telephone number.';
  }

  if (!data.serviceInterest) {
    errors.serviceInterest =
      lang === 'fr'
        ? 'Veuillez sélectionner un domaine de service.'
        : 'Please select a service area of interest.';
  }

  if (!data.sector) {
    errors.sector =
      lang === 'fr'
        ? 'Veuillez préciser votre profil (particulier, entreprise, institution).'
        : 'Please specify your sector profile.';
  }

  if (!data.message || data.message.trim().length < 10) {
    errors.message =
      lang === 'fr'
        ? 'Veuillez détailler brièvement votre projet ou demande (minimum 10 caractères).'
        : 'Please describe your request or project briefly (minimum 10 characters).';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}
