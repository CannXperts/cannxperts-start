'use client'

import { useState } from 'react'
import { MagnifyingGlassIcon, FunnelIcon, MapPinIcon, CurrencyDollarIcon, BuildingOfficeIcon } from '@heroicons/react/24/outline'

interface Business {
  id: number
  title: string
  location: string
  price: string
  revenue: string
  type: string
  description: string
  image: string
  features: string[]
}

export default function BusinessesPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedType, setSelectedType] = useState('')
  const [priceRange, setPriceRange] = useState('')

  const businesses: Business[] = [
    {
      id: 1,
      title: 'Premium Dispensary - Downtown Denver',
      location: 'Denver, CO',
      price: '$2.5M',
      revenue: '$850K/year',
      type: 'Dispensary',
      description: 'Prime location dispensary with established customer base and strong revenue growth.',
      image: '/api/placeholder/400/300',
      features: ['Prime Location', 'Established Customer Base', 'Growth Potential', 'Full License']
    },
    {
      id: 2,
      title: 'Cultivation Facility - Oregon',
      location: 'Portland, OR',
      price: '$1.8M',
      revenue: '$1.2M/year',
      type: 'Cultivation',
      description: 'State-of-the-art indoor cultivation facility with automated systems and high yields.',
      image: '/api/placeholder/400/300',
      features: ['Automated Systems', 'High Yield', 'Climate Controlled', 'Experienced Staff']
    },
    {
      id: 3,
      title: 'Processing Operation - California',
      location: 'Los Angeles, CA',
      price: '$950K',
      revenue: '$680K/year',
      type: 'Processing',
      description: 'Full-scale extraction and processing facility with modern equipment.',
      image: '/api/placeholder/400/300',
      features: ['Modern Equipment', 'Multiple Product Lines', 'Certified Facility', 'Growth Ready']
    },
    {
      id: 4,
      title: 'Delivery Service - Bay Area',
      location: 'San Francisco, CA',
      price: '$750K',
      revenue: '$450K/year',
      type: 'Delivery',
      description: 'Established delivery service covering the entire Bay Area with loyal customer base.',
      image: '/api/placeholder/400/300',
      features: ['Established Routes', 'Loyal Customers', 'Technology Platform', 'Growth Market']
    },
    {
      id: 5,
      title: 'Multi-License Operation - Nevada',
      location: 'Las Vegas, NV',
      price: '$3.2M',
      revenue: '$1.5M/year',
      type: 'Multi-License',
      description: 'Vertically integrated operation with cultivation, processing, and retail licenses.',
      image: '/api/placeholder/400/300',
      features: ['Vertical Integration', 'Multiple Licenses', 'Tourist Market', 'High Profitability']
    },
    {
      id: 6,
      title: 'Boutique Dispensary - Seattle',
      location: 'Seattle, WA',
      price: '$1.1M',
      revenue: '$620K/year',
      type: 'Dispensary',
      description: 'Upscale boutique dispensary in trendy neighborhood with premium product focus.',
      image: '/api/placeholder/400/300',
      features: ['Premium Products', 'Trendy Location', 'High Margins', 'Brand Recognition']
    }
  ]

  const filteredBusinesses = businesses.filter(business => {
    const matchesSearch = business.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         business.location.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesType = selectedType === '' || business.type === selectedType
    const matchesPrice = priceRange === '' || 
                        (priceRange === 'under1m' && parseFloat(business.price.replace(/[$M]/g, '')) < 1) ||
                        (priceRange === '1m-2m' && parseFloat(business.price.replace(/[$M]/g, '')) >= 1 && parseFloat(business.price.replace(/[$M]/g, '')) <= 2) ||
                        (priceRange === 'over2m' && parseFloat(business.price.replace(/[$M]/g, '')) > 2)
    
    return matchesSearch && matchesType && matchesPrice
  })

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Cannabis Businesses for Sale</h1>
            <p className="text-xl text-gray-600">Discover premium cannabis business opportunities</p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Filters */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* Search */}
            <div className="relative">
              <MagnifyingGlassIcon className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search businesses..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cannabis-500 focus:border-transparent"
              />
            </div>

            {/* Business Type */}
            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cannabis-500 focus:border-transparent"
            >
              <option value="">All Business Types</option>
              <option value="Dispensary">Dispensary</option>
              <option value="Cultivation">Cultivation</option>
              <option value="Processing">Processing</option>
              <option value="Delivery">Delivery</option>
              <option value="Multi-License">Multi-License</option>
            </select>

            {/* Price Range */}
            <select
              value={priceRange}
              onChange={(e) => setPriceRange(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cannabis-500 focus:border-transparent"
            >
              <option value="">All Price Ranges</option>
              <option value="under1m">Under $1M</option>
              <option value="1m-2m">$1M - $2M</option>
              <option value="over2m">Over $2M</option>
            </select>

            {/* Filter Button */}
            <button className="bg-cannabis-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-cannabis-700 transition-colors flex items-center justify-center gap-2">
              <FunnelIcon className="w-5 h-5" />
              Filter
            </button>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-gray-600">
            Showing <span className="font-semibold">{filteredBusinesses.length}</span> businesses
          </p>
        </div>

        {/* Business Listings */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredBusinesses.map((business) => (
            <div key={business.id} className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all overflow-hidden">
              {/* Image Placeholder */}
              <div className="h-48 bg-gradient-to-br from-cannabis-100 to-cannabis-200 flex items-center justify-center">
                <BuildingOfficeIcon className="w-16 h-16 text-cannabis-600" />
              </div>
              
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <span className="bg-cannabis-100 text-cannabis-800 px-3 py-1 rounded-full text-sm font-medium">
                    {business.type}
                  </span>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-cannabis-600">{business.price}</div>
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{business.title}</h3>
                
                <div className="flex items-center gap-2 text-gray-600 mb-3">
                  <MapPinIcon className="w-4 h-4" />
                  <span className="text-sm">{business.location}</span>
                </div>
                
                <div className="flex items-center gap-1 text-green-600 mb-4">
                  <CurrencyDollarIcon className="w-4 h-4" />
                  <span className="text-sm font-medium">Revenue: {business.revenue}</span>
                </div>
                
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">{business.description}</p>
                
                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {business.features.slice(0, 2).map((feature, index) => (
                    <span key={index} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                      {feature}
                    </span>
                  ))}
                  {business.features.length > 2 && (
                    <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                      +{business.features.length - 2} more
                    </span>
                  )}
                </div>
                
                <button className="w-full bg-cannabis-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-cannabis-700 transition-colors">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredBusinesses.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <BuildingOfficeIcon className="w-16 h-16 mx-auto" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No businesses found</h3>
            <p className="text-gray-600">Try adjusting your search criteria</p>
          </div>
        )}

        {/* Load More */}
        {filteredBusinesses.length > 0 && (
          <div className="text-center mt-12">
            <button className="bg-white border-2 border-cannabis-600 text-cannabis-600 px-8 py-3 rounded-lg font-semibold hover:bg-cannabis-50 transition-colors">
              Load More Businesses
            </button>
          </div>
        )}
      </div>
    </div>
  )
}