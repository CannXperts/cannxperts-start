// API endpoints for services that both website and mobile app can use

import { ComplianceService, ContactFormData, NewsletterSignupData, ApiResponse } from '../shared/types';

const BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'https://compliance-connect-andy623.replit.app';

export class ServicesAPI {
  private static async fetch(endpoint: string, options: RequestInit = {}): Promise<Response> {
    const url = `${BASE_URL}${endpoint}`;
    
    const defaultOptions: RequestInit = {
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
    };
    
    return fetch(url, { ...defaultOptions, ...options });
  }

  // Submit contact form
  static async submitContactForm(formData: ContactFormData): Promise<ApiResponse<{ message: string }>> {
    try {
      const response = await this.fetch('/api/contact', {
        method: 'POST',
        body: JSON.stringify(formData)
      });
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      return {
        success: true,
        data: { message: 'Contact form submitted successfully' }
      };
    } catch (error) {
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Failed to submit contact form'
      };
    }
  }

  // Submit newsletter signup
  static async submitNewsletterSignup(formData: NewsletterSignupData): Promise<ApiResponse<{ message: string }>> {
    try {
      const response = await this.fetch('/api/newsletter', {
        method: 'POST',
        body: JSON.stringify(formData)
      });
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      return {
        success: true,
        data: { message: 'Newsletter signup successful' }
      };
    } catch (error) {
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Failed to sign up for newsletter'
      };
    }
  }

  // Submit service inquiry
  static async submitServiceInquiry(serviceId: string, formData: ContactFormData): Promise<ApiResponse<{ message: string }>> {
    try {
      const response = await this.fetch('/api/services/inquiry', {
        method: 'POST',
        body: JSON.stringify({ serviceId, ...formData })
      });
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      return {
        success: true,
        data: { message: 'Service inquiry submitted successfully' }
      };
    } catch (error) {
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Failed to submit service inquiry'
      };
    }
  }
}

// Static service information (matches the compliance services from the main app)
export const COMPLIANCE_SERVICES: ComplianceService[] = [
  {
    id: 'license-management',
    title: 'License Management',
    description: 'Professional license management and regulatory navigation support. Our dedicated License Managers take the burden of complex government regulations off your shoulders.',
    category: 'license',
    pricing: 'Contact for pricing',
    duration: 'Ongoing support',
    features: [
      'License application assistance',
      'Renewal management and tracking',
      'Regulatory compliance monitoring',
      'Government liaison and communication',
      'Documentation management',
      'Compliance calendar maintenance'
    ]
  },
  {
    id: 'compliance-officers',
    title: 'Compliance Officers',
    description: 'In the ever-evolving cannabis compliance landscape, staying informed and ahead of the curve is not just beneficial—it\'s essential.',
    category: 'consultation',
    pricing: 'Contact for pricing',
    duration: 'Full-time or part-time placement',
    features: [
      'Dedicated compliance officer placement',
      'On-site compliance management',
      'Policy development and implementation',
      'Staff training and education',
      'Regulatory update monitoring',
      'Internal audit coordination'
    ]
  },
  {
    id: 'compliance-inspections',
    title: 'Compliance Inspections',
    description: 'Our Inspectors conduct regular audits on licensed facilities to proactively detect any procedures that could potentially lead to fines, suspensions, or license revocation.',
    category: 'inspection',
    pricing: 'Contact for pricing',
    duration: '1-3 days per inspection',
    features: [
      'Pre-regulatory state inspections',
      'Comprehensive facility audits',
      'Detailed compliance reports',
      'Corrective action plans',
      'Follow-up inspections',
      'Preparation for regulatory visits'
    ]
  },
  {
    id: 'bank-insurance',
    title: 'Bank, Insurance, Property Management',
    description: 'Ensure your business meets industry standards with our professional due diligence and compliance inspection services.',
    category: 'inspection',
    pricing: 'Contact for pricing',
    duration: '2-5 days',
    features: [
      'Due diligence inspections',
      'Financial compliance verification',
      'Insurance requirement assessments',
      'Property management compliance',
      'Investment readiness evaluation',
      'Third-party verification reports'
    ]
  },
  {
    id: 'receivership',
    title: 'Receivership',
    description: 'Whether you\'re a business owner, investor, legal professional, or financial institution, we deliver expert solutions that protect your interests and ensure compliance.',
    category: 'receivership',
    pricing: 'Court-appointed rates',
    duration: 'As required by court order',
    features: [
      'Court-appointed receivership services',
      'Asset management and protection',
      'Business operations oversight',
      'Stakeholder communication',
      'Legal and regulatory compliance',
      'Financial reporting and accountability'
    ]
  }
];

// Utility functions for services
export const getServiceById = (serviceId: string): ComplianceService | undefined => {
  return COMPLIANCE_SERVICES.find(service => service.id === serviceId);
};

export const getServicesByCategory = (category: ComplianceService['category']): ComplianceService[] => {
  return COMPLIANCE_SERVICES.filter(service => service.category === category);
};

export const formatServiceDuration = (duration: string): string => {
  return duration;
};

export const getServiceIcon = (category: ComplianceService['category']): string => {
  const icons = {
    'license': '📋',
    'inspection': '🔍',
    'consultation': '👥',
    'receivership': '⚖️'
  };
  return icons[category] || '🏢';
};