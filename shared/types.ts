// Shared types for the CannXperts platform that both website and mobile app can use

export interface User {
  id: number;
  username: string;
  firstName: string;
  lastName: string;
  isPremium: boolean;
  role: string;
  createdAt: Date;
}

export interface MarketplaceListing {
  id: number;
  userId: number;
  title: string;
  description: string;
  type: 'HAVE' | 'WANT' | 'NEED';
  category: string;
  contactInfo: string;
  is_active: boolean;
  createdAt: Date;
  salesPrice?: string;
  location?: string;
  businessType?: string;
  licenseType?: string;
  licenseStatus?: string;
  equipmentIncluded?: boolean;
  fixturesIncluded?: boolean;
  productTransfer?: boolean;
  leaseAssumable?: boolean;
  staffWillStay?: boolean;
  sku?: string;
  images?: string[];
  additionalDetails?: string;
  sourceUrl?: string;
}

export interface NewsArticle {
  id: number;
  title: string;
  content: string;
  category: string;
  publishedAt: Date;
  priority: number;
}

export interface ComplianceService {
  id: string;
  title: string;
  description: string;
  category: 'license' | 'inspection' | 'consultation' | 'receivership';
  pricing?: string;
  duration?: string;
  features: string[];
}

// API Response Types
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

export interface PaginatedResponse<T> {
  success: boolean;
  data: T[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    hasNext: boolean;
  };
}

// Form Types for Website
export interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company?: string;
  service: string;
  message: string;
}

export interface NewsletterSignupData {
  firstName: string;
  lastName: string;
  email: string;
}

// Mobile App Specific Types
export interface MobileUser extends User {
  pushNotifications: boolean;
  lastLogin: Date;
  deviceId?: string;
}

export interface MobileListingFilters {
  type?: 'HAVE' | 'WANT' | 'NEED';
  category?: string;
  location?: string;
  priceRange?: {
    min: number;
    max: number;
  };
  businessType?: string;
  licenseType?: string;
}

export interface NotificationData {
  id: number;
  userId: number;
  title: string;
  message: string;
  type: 'listing' | 'news' | 'compliance' | 'system';
  read: boolean;
  createdAt: Date;
}

// Compliance Service Categories
export const COMPLIANCE_SERVICES: ComplianceService[] = [
  {
    id: 'license-management',
    title: 'License Management',
    description: 'Professional license management and regulatory navigation support',
    category: 'license',
    pricing: 'Starting at $500/month',
    duration: 'Ongoing support',
    features: [
      'License application assistance',
      'Renewal management',
      'Regulatory compliance monitoring',
      'Government liaison support'
    ]
  },
  {
    id: 'compliance-officers',
    title: 'Compliance Officers',
    description: 'Dedicated compliance officer services for your cannabis business',
    category: 'consultation',
    pricing: 'Starting at $1,200/month',
    duration: 'Full-time or part-time',
    features: [
      'On-site compliance management',
      'Policy development',
      'Staff training',
      'Regulatory updates'
    ]
  },
  {
    id: 'compliance-inspections',
    title: 'Compliance Inspections',
    description: 'Comprehensive facility audits and compliance assessments',
    category: 'inspection',
    pricing: 'Starting at $800 per inspection',
    duration: '1-2 days',
    features: [
      'Pre-regulatory inspections',
      'Detailed compliance reports',
      'Corrective action plans',
      'Follow-up support'
    ]
  },
  {
    id: 'receivership',
    title: 'Receivership Services',
    description: 'Court-appointed receivership and asset management',
    category: 'receivership',
    pricing: 'Contact for pricing',
    duration: 'As needed',
    features: [
      'Asset management',
      'Business operations oversight',
      'Stakeholder communication',
      'Legal compliance'
    ]
  }
];

// API Endpoints
export const API_ENDPOINTS = {
  // Authentication
  LOGIN: '/api/auth/login',
  LOGOUT: '/api/auth/logout',
  REGISTER: '/api/auth/register',
  
  // Marketplace
  MARKETPLACE_LISTINGS: '/api/marketplace',
  MARKETPLACE_LISTING: (id: number) => `/api/marketplace/${id}`,
  CREATE_LISTING: '/api/marketplace',
  UPDATE_LISTING: (id: number) => `/api/marketplace/${id}`,
  
  // News
  NEWS: '/api/news',
  NEWS_ARTICLE: (id: number) => `/api/news/${id}`,
  
  // Services
  SERVICES: '/api/services',
  SERVICE_INQUIRY: '/api/services/inquiry',
  
  // Contact
  CONTACT: '/api/contact',
  NEWSLETTER: '/api/newsletter',
  
  // Mobile specific
  MOBILE_SYNC: '/api/mobile/sync',
  NOTIFICATIONS: '/api/mobile/notifications',
  PUSH_TOKEN: '/api/mobile/push-token',
} as const;