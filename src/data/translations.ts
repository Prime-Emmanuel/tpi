import { ServiceItem, ClientSector, GeographicMarket } from '../types/content';

export const COMPANY_INFO = {
  name: 'TPI Engineering Group',
  legalName: 'TPI ENGINEERING GROUP',
  slogan: {
    fr: 'BÂTIR UN AVENIR DURABLE',
    en: 'BUILDING A SUSTAINABLE FUTURE',
  },
  email: 'Tpiengineeringsarl@hotmail.com',
  phones: [
    { display: '+237 694 11 94 17', raw: '+237694119417', label: 'Ligne Principale / Douala' },
    { display: '+237 678 85 45 06', raw: '+237678854506', label: 'Ligne Technique & Études' },
  ],
  locations: {
    fr: 'Siège social au Cameroun · Projets nationaux & internationaux',
    en: 'Headquarters in Cameroon · National & International Operations',
  },
  logoSrc: '/assets/aistudio/logo_tpi_1a01e898.jpg',
  receptionImage: '/assets/reception_tpi.png',
};

export const SERVICES_DATA: Record<'fr' | 'en', ServiceItem[]> = {
  fr: [
    {
      id: 'electricite-tertiaire',
      number: '01',
      title: 'Électricité Tertiaire',
      tagline: 'Infrastructures électriques haute fiabilité pour bâtiments et complexes d’affaires',
      description:
        'Conception, déploiement et sécurisation des réseaux électriques pour bâtiments tertiaires, sièges d’entreprises, ensembles commerciaux et installations industrielles. TPI Engineering assure la continuité de service et la conformité aux normes électrotechniques les plus exigeantes.',
      scopePoints: [
        'Distribution basse tension et armoires de puissance modulaires',
        'Réseaux d’éclairage architectural et systèmes de gestion technique de bâtiment (GTB)',
        'Systèmes de secours et d’alimentation ininterrompue (onduleurs, inverseurs de source)',
        'Audits de sécurité électrique, mise à la terre et protection différentielle',
      ],
      deliverables: [
        'Schémas unifilaires et bilans de puissance détaillés',
        'Implantation physique des tableaux et cheminements de câbles',
        'Installation, raccordement et essais de mise sous tension',
      ],
      image: '/src/assets/images/service_electricite_tertiaire_1794325054611.jpg',
      accent: 'emerald',
    },
    {
      id: 'energies-renouvelables',
      number: '02',
      title: 'Énergies Renouvelables',
      tagline: 'Solutions solaires et systèmes énergétiques durables pour l’autonomie électrique',
      description:
        'Dimensionnement et mise en œuvre de solutions d’énergie solaire photovoltaïque et de stockage d’énergie de pointe. TPI Engineering Group accompagne la transition vers des modèles énergétiques résilients, réduisant l’empreinte carbone et garantissant la stabilité d’alimentation face aux aléas de réseau.',
      scopePoints: [
        'Centrales solaires photovoltaïques en toiture et au sol',
        'Systèmes hybrides avec parcs de batteries et gestion intelligente de charge',
        'Études d’irradiation solaire, d’ombrage et de rendement annuel prévisionnel',
        'Optimisation de l’efficacité énergétique et réduction des coûts opérationnels',
      ],
      deliverables: [
        'Calculs précis de dimensionnement et simulations énergétiques',
        'Fourniture et intégration des équipements photovoltaïques certifiés',
        'Protocoles de mise en service et maintenance préventive',
      ],
      image: '/src/assets/images/service_energies_renouvelables_1794325054166.jpg',
      accent: 'emerald',
    },
    {
      id: 'genie-civil',
      number: '03',
      title: 'Génie Civil — Études, Plans et Réalisation',
      tagline: 'Ingénierie des structures, conception technique et supervision rigoureuse des chantiers',
      description:
        'Prise en charge intégrale du cycle de vie des projets de construction : calculs de structures, élaboration des dossiers d’exécution détaillés, et pilotage opérationnel des travaux. Nous allions rigueur technique et respect des délais pour bâtir des ouvrages solides et durables.',
      scopePoints: [
        'Études techniques de faisabilité, de mécanique des sols et de stabilité',
        'Conception des plans architecturaux, plans de coffrage et de ferraillage',
        'Élaboration des devis quantitatifs et descriptifs (CCTP, DQE)',
        'Réalisation, coordination de chantier et contrôle qualité des ouvrages',
      ],
      deliverables: [
        'Notes de calcul conformes aux Eurocodes et normes en vigueur',
        'Dossier complet de plans d’exécution prêts pour construction',
        'Suivi de chantier rigoureux et réceptions techniques des étapes clés',
      ],
      image: '/src/assets/images/service_genie_civil_etudes_1794325055479.jpg',
      accent: 'emerald',
    },
  ],
  en: [
    {
      id: 'electricite-tertiaire',
      number: '01',
      title: 'Tertiary & Commercial Electricity',
      tagline: 'High-reliability electrical systems for commercial towers, campuses, and industrial sites',
      description:
        'Engineering, deployment, and protection of electrical distribution systems for corporate buildings, commercial centers, and industrial facilities. TPI Engineering ensures operational continuity, safety, and compliance with the most rigorous international standards.',
      scopePoints: [
        'Low-voltage power distribution and modular main switchboards',
        'Architectural lighting systems and Building Management Systems (BMS)',
        'Emergency power backups, uninterruptible power supplies (UPS), and transfer switches',
        'Electrical safety audits, grounding systems, and surge protection',
      ],
      deliverables: [
        'Single-line diagrams and precise power load schedules',
        'Physical cable tray routing and switchboard arrangement layouts',
        'Assembly, on-site commissioning, and comprehensive energization testing',
      ],
      image: '/src/assets/images/service_electricite_tertiaire_1794325054611.jpg',
      accent: 'emerald',
    },
    {
      id: 'energies-renouvelables',
      number: '02',
      title: 'Renewable Energies',
      tagline: 'Clean solar photovoltaic infrastructure and resilient power storage solutions',
      description:
        'Custom engineering and turnkey installation of photovoltaic solar plants and high-capacity battery storage systems. TPI Engineering accelerates your energy transition, driving down operational costs and securing continuous power in challenging grid conditions.',
      scopePoints: [
        'Rooftop and ground-mounted solar photovoltaic generating plants',
        'Hybrid off-grid and grid-tied systems with intelligent battery banks',
        'Solar irradiation modeling, shadow analysis, and yield forecasts',
        'Energy efficiency auditing and facility load optimization',
      ],
      deliverables: [
        'Technical sizing models and annualized production projections',
        'Procurement of tier-one PV modules, inverters, and switchgear',
        'Commissioning protocols, performance validation, and maintenance plans',
      ],
      image: '/src/assets/images/service_energies_renouvelables_1794325054166.jpg',
      accent: 'emerald',
    },
    {
      id: 'genie-civil',
      number: '03',
      title: 'Civil Engineering — Studies, Plans & Execution',
      tagline: 'Comprehensive structural engineering, detailed technical drafting, and on-site construction management',
      description:
        'End-to-end stewardship of civil and building projects: from structural load calculations and detailed execution blueprints to turnkey on-site execution and rigorous supervision. We unite mathematical precision with buildability to construct enduring infrastructure.',
      scopePoints: [
        'Technical feasibility, soil analysis interpretation, and structural stability calculations',
        'Architectural detailing, formwork plans, and reinforced concrete rebar schedules',
        'Bill of quantities, technical specifications, and budgetary planning',
        'Construction management, on-site quality assurance, and milestone verification',
      ],
      deliverables: [
        'Structural calculation notes adhering strictly to recognized standards',
        'Complete set of approved-for-construction execution drawings',
        'Supervision reports, milestone sign-offs, and final technical delivery',
      ],
      image: '/src/assets/images/service_genie_civil_etudes_1794325055479.jpg',
      accent: 'emerald',
    },
  ],
};

export const SECTORS_DATA: Record<'fr' | 'en', ClientSector[]> = {
  fr: [
    {
      id: 'particuliers',
      title: 'Particuliers',
      audience: 'Résidences privées, villas de haut standing et projets immobiliers personnels',
      description:
        'Accompagnement sur-mesure pour vos projets de construction, d’installation électrique sécurisée et d’autonomie solaire domestique avec un haut niveau de finition.',
      capabilities: [
        'Plans architecturaux et suivi de construction de résidences',
        'Installations solaires autonomes avec stockage pour zéro coupure',
        'Réseaux électriques domestiques fiables et sécurisés',
      ],
    },
    {
      id: 'entreprises',
      title: 'Entreprises Privées',
      audience: 'Immeubles de bureaux, industries, commerces et complexes tertiaires',
      description:
        'Solutions d’ingénierie intégrée répondant aux exigences de continuité de service, de rentabilité d’investissement et de conformité aux normes industrielles.',
      capabilities: [
        'Infrastructures électriques tertiaires et armoires industrielles',
        'Centrales solaires d’autoconsommation pour entreprises',
        'Études et réalisation de bâtiments d’affaires et dépôts logistiques',
      ],
    },
    {
      id: 'institutions',
      title: 'Institutions & Organismes Publics',
      audience: 'Collectivités, ministères, agences étatiques et organisations internationales',
      description:
        'Rigueur administrative, conformité technique stricte aux cahiers des charges et gestion transparente pour la livraison d’infrastructures durables d’intérêt général.',
      capabilities: [
        'Études structurelles et plans d’exécution pour marchés publics',
        'Électrification de bâtiments institutionnels et centres médicaux',
        'Projets d’énergie renouvelable à impact durable',
      ],
    },
  ],
  en: [
    {
      id: 'particuliers',
      title: 'Individuals',
      audience: 'Private luxury residences, personal developments, and family estates',
      description:
        'Tailored engineering support for bespoke residential construction, dependable electrical networks, and uninterrupted rooftop solar solutions.',
      capabilities: [
        'Architectural and structural blueprints for private homes',
        'Solar photovoltaic systems with battery storage for grid resilience',
        'Certified residential electrical wiring and safety protections',
      ],
    },
    {
      id: 'entreprises',
      title: 'Private Companies',
      audience: 'Office headquarters, logistics hubs, retail developments, and industrial facilities',
      description:
        'Integrated engineering services engineered for operational continuity, ROI optimization, and compliance with rigorous industrial benchmarks.',
      capabilities: [
        'Tertiary low-voltage networks and high-capacity distribution panels',
        'Commercial self-consumption solar arrays reducing operational costs',
        'Civil engineering design and construction management for business facilities',
      ],
    },
    {
      id: 'institutions',
      title: 'Public Institutions & Organizations',
      audience: 'Government bodies, regional authorities, public agencies, and international entities',
      description:
        'Rigorous technical discipline, adherence to public procurement specifications, and transparent project oversight for sustainable public assets.',
      capabilities: [
        'Comprehensive structural calculations and tender-ready blueprints',
        'High-capacity electrical installations for institutional facilities',
        'Renewable energy infrastructure with lasting socio-economic benefits',
      ],
    },
  ],
};

export const MARKETS_DATA: Record<'fr' | 'en', GeographicMarket[]> = {
  fr: [
    {
      region: 'Cameroun',
      title: 'Ancrage National au Cameroun',
      focus: 'Douala · Yaoundé · Toutes régions',
      badge: 'Territoire National',
      description:
        'Implanté au cœur du tissu économique camerounais, TPI Engineering Group intervient sur l’ensemble du territoire national pour concevoir et concrétiser des projets d’ingénierie électrique, solaire et civile répondant aux réalités climatiques et réglementaires locales.',
    },
    {
      region: 'International',
      title: 'Déploiement International',
      focus: 'Afrique Centrale & Marchés Internationaux',
      badge: 'Dimension Globale',
      description:
        'Grâce à la maîtrise des normes internationales d’ingénierie et de modélisation technique, TPI Engineering Group collabore avec des partenaires, maîtres d’ouvrage et investisseurs au-delà des frontières camerounaises pour des études et des réalisations à fort impact.',
    },
  ],
  en: [
    {
      region: 'Cameroon',
      title: 'National Base in Cameroon',
      focus: 'Douala · Yaoundé · All Regions',
      badge: 'National Territory',
      description:
        'Deeply anchored in Cameroon’s dynamic industrial ecosystem, TPI Engineering Group executes electrical, solar, and civil engineering projects across the country, engineered specifically to endure local environmental and operational requirements.',
    },
    {
      region: 'International',
      title: 'International Reach',
      focus: 'Central Africa & Global Markets',
      badge: 'Global Capability',
      description:
        'Applying international design codes and advanced drafting standards, TPI Engineering Group works with cross-border investors, developers, and institutional bodies on strategic engineering studies and turnkey construction assignments.',
    },
  ],
};
