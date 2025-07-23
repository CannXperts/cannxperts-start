// API endpoints for news that both website and mobile app can use
// This connects to the shared database from the main CannXperts platform

import { NewsArticle, ApiResponse } from '../shared/types';

const BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'https://compliance-connect-andy623.replit.app';

export class NewsAPI {
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

  // Get latest news articles
  static async getNews(limit = 10): Promise<ApiResponse<NewsArticle[]>> {
    try {
      const response = await this.fetch(`/api/news?limit=${limit}`);
      
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
        error: error instanceof Error ? error.message : 'Failed to fetch news'
      };
    }
  }

  // Get single news article
  static async getArticle(id: number): Promise<ApiResponse<NewsArticle>> {
    try {
      const response = await this.fetch(`/api/news/${id}`);
      
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
        error: error instanceof Error ? error.message : 'Failed to fetch article'
      };
    }
  }

  // Get news by category
  static async getNewsByCategory(category: string, limit = 10): Promise<ApiResponse<NewsArticle[]>> {
    try {
      const response = await this.fetch(`/api/news?category=${encodeURIComponent(category)}&limit=${limit}`);
      
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
        error: error instanceof Error ? error.message : 'Failed to fetch news by category'
      };
    }
  }
}

// Utility functions for news display
export const formatNewsDate = (date: Date | string): string => {
  const newsDate = new Date(date);
  const now = new Date();
  const diffInHours = Math.floor((now.getTime() - newsDate.getTime()) / (1000 * 60 * 60));
  
  if (diffInHours < 1) {
    return 'Just now';
  } else if (diffInHours < 24) {
    return `${diffInHours}h ago`;
  } else if (diffInHours < 48) {
    return 'Yesterday';
  } else {
    return newsDate.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: newsDate.getFullYear() !== now.getFullYear() ? 'numeric' : undefined
    });
  }
};

export const getCategoryColor = (category: string): string => {
  const colors = {
    'Industry News': 'bg-blue-100 text-blue-800',
    'Compliance': 'bg-green-100 text-green-800',
    'FDA Updates': 'bg-purple-100 text-purple-800',
    'Market Analysis': 'bg-orange-100 text-orange-800',
    'Environmental': 'bg-teal-100 text-teal-800',
    'Regulatory': 'bg-red-100 text-red-800',
    'Legal': 'bg-gray-100 text-gray-800',
  };
  
  return colors[category as keyof typeof colors] || 'bg-gray-100 text-gray-800';
};

export const truncateContent = (content: string, maxLength = 150): string => {
  if (content.length <= maxLength) return content;
  return content.slice(0, maxLength) + '...';
};

export const isPriorityNews = (article: NewsArticle): boolean => {
  return article.priority > 0;
};