// API endpoints for marketplace that both website and mobile app can use
// This connects to the shared database from the main CannXperts platform

import { MarketplaceListing, ApiResponse, PaginatedResponse } from '../shared/types';

const BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'https://compliance-connect-andy623.replit.app';

export class MarketplaceAPI {
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

  // Get all marketplace listings
  static async getListings(params?: {
    page?: number;
    limit?: number;
    type?: 'HAVE' | 'WANT' | 'NEED';
    category?: string;
    location?: string;
  }): Promise<ApiResponse<MarketplaceListing[]>> {
    try {
      const searchParams = new URLSearchParams();
      if (params?.page) searchParams.append('page', params.page.toString());
      if (params?.limit) searchParams.append('limit', params.limit.toString());
      if (params?.type) searchParams.append('type', params.type);
      if (params?.category) searchParams.append('category', params.category);
      if (params?.location) searchParams.append('location', params.location);

      const response = await this.fetch(`/api/marketplace?${searchParams}`);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      return {
        success: true,
        data: data
      };
    } catch (error) {
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Failed to fetch listings'
      };
    }
  }

  // Get single marketplace listing
  static async getListing(id: number): Promise<ApiResponse<MarketplaceListing>> {
    try {
      const response = await this.fetch(`/api/marketplace/${id}`);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      return {
        success: true,
        data: data
      };
    } catch (error) {
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Failed to fetch listing'
      };
    }
  }

  // Create new marketplace listing (requires authentication)
  static async createListing(listing: Partial<MarketplaceListing>): Promise<ApiResponse<MarketplaceListing>> {
    try {
      const response = await this.fetch('/api/marketplace', {
        method: 'POST',
        body: JSON.stringify(listing)
      });
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      return {
        success: true,
        data: data
      };
    } catch (error) {
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Failed to create listing'
      };
    }
  }

  // Update marketplace listing (requires authentication)
  static async updateListing(id: number, updates: Partial<MarketplaceListing>): Promise<ApiResponse<MarketplaceListing>> {
    try {
      const response = await this.fetch(`/api/marketplace/${id}`, {
        method: 'PATCH',
        body: JSON.stringify(updates)
      });
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      return {
        success: true,
        data: data
      };
    } catch (error) {
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Failed to update listing'
      };
    }
  }

  // Search marketplace listings
  static async searchListings(query: string): Promise<ApiResponse<MarketplaceListing[]>> {
    try {
      const response = await this.fetch(`/api/marketplace/search?q=${encodeURIComponent(query)}`);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      return {
        success: true,
        data: data
      };
    } catch (error) {
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Failed to search listings'
      };
    }
  }

  // Get featured listings (for website homepage)
  static async getFeaturedListings(limit = 6): Promise<ApiResponse<MarketplaceListing[]>> {
    try {
      const response = await this.fetch(`/api/marketplace/featured?limit=${limit}`);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      return {
        success: true,
        data: data
      };
    } catch (error) {
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Failed to fetch featured listings'
      };
    }
  }
}

// Utility functions for the website
export const formatPrice = (price?: string): string => {
  if (!price) return 'Contact for pricing';
  return price;
};

export const formatListingType = (type: string): string => {
  const types = {
    'HAVE': 'For Sale',
    'WANT': 'Looking For',
    'NEED': 'Seeking'
  };
  return types[type as keyof typeof types] || type;
};

export const formatBusinessType = (businessType?: string): string => {
  if (!businessType) return 'Cannabis Business';
  return businessType;
};

export const getListingImageUrl = (images?: string[]): string => {
  if (!images || images.length === 0) {
    return '/images/placeholder-business.jpg'; // Default placeholder
  }
  return images[0];
};

export const isListingFeatured = (listing: MarketplaceListing): boolean => {
  if (listing.title.toLowerCase().includes('featured')) {
    return true;
  }
  
  if (listing.salesPrice) {
    const priceNumber = parseInt(listing.salesPrice.replace(/[^0-9]/g, ''));
    return priceNumber > 500000;
  }
  
  return false;
};