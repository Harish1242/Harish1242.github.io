export interface Subsidiary {
  id: string;
  name: string;
  registrationNumber?: string;
  type: 'active' | 'pipeline';
  industry: 'Retail' | 'Logistics' | 'SaaS & AI' | 'Real Estate';
  description: string;
  longDescription: string;
  achievements: string[];
  metrics: {
    label: string;
    value: string;
  }[];
  iconName: string; // Dynamic icon rendering helper
}

export interface Executive {
  name: string;
  role: string;
  initials: string;
  description: string;
  specialization: string;
  credentials: string[];
  theme: 'gold' | 'navy' | 'charcoal' | 'gray';
}

export interface ContactSubmission {
  name: string;
  email: string;
  category: string;
  message: string;
}
