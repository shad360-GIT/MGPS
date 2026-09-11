export interface ProductionHub {
  id: string;
  city: string;
  country: string;
  region: 'Americas' | 'Europe & UK' | 'Asia-Pacific' | 'Specialized Units';
  timezone: string;
  timeZoneCode: string;
  permitTurnaround: string;
  taxRebate: string;
  strengths: string[];
  headOfProduction: string;
  addressSummary: string;
  status: 'Operational' | 'Active Units on Set';
}

export interface ServiceCapability {
  id: string;
  index: string;
  title: string;
  category: string;
  summary: string;
  deliverables: string[];
  fieldNote: string;
}

export interface PortfolioProject {
  id: string;
  index: string;
  title: string;
  client: string;
  format: 'Commercial' | 'Feature / Doc' | 'Fashion Editorial' | 'Brand Film';
  year: string;
  locations: string[];
  heroImage: string;
  cameraPackage: string;
  crewSize: number;
  shootDays: number;
  logisticsChallenge: string;
  aspectRatio: string;
  tags: string[];
}

export interface ProductionPillar {
  number: string;
  title: string;
  subtitle: string;
  body: string;
  metric: string;
  metricLabel: string;
}

export interface InquiryFormData {
  name: string;
  email: string;
  company: string;
  projectType: string;
  primaryLocation: string;
  targetTimeline: string;
  estimatedBudget: string;
  needsPermits: boolean;
  needsCarnet: boolean;
  needsRemoteMonitoring: boolean;
  briefDetails: string;
}
