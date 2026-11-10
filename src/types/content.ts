export type Language = 'fr' | 'en';

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  scopePoints: string[];
  deliverables: string[];
  image: string;
  accent: string;
}

export interface ClientSector {
  id: string;
  title: string;
  audience: string;
  description: string;
  capabilities: string[];
}

export interface GeographicMarket {
  region: string;
  title: string;
  focus: string;
  badge: string;
  description: string;
}

export interface ContactFormData {
  fullName: string;
  email: string;
  phone: string;
  organization: string;
  sector: 'individual' | 'private_company' | 'public_institution' | '';
  serviceInterest: 'electricite_tertiaire' | 'energies_renouvelables' | 'genie_civil' | 'multi' | '';
  location: string;
  message: string;
}
