'use client'

import { useState, useEffect } from 'react'
import { MapPinIcon, BuildingOfficeIcon, ArrowRightIcon } from '@heroicons/react/24/outline'

interface MarketplaceListing {
  id: number
  userId?: number
  title: string
  description: string
  type: string
  category?: string
  location: string
  contactInfo?: string
  salesPrice?: string | number | null
  sales_price?: string | null
  isActive?: boolean
  is_active?: boolean
  createdAt?: Date | string
  businessType?: string
  licenseType?: string
  licenseStatus?: string
  equipmentIncluded?: boolean
  fixturesIncluded?: boolean
  productTransfer?: boolean
  leaseAssumable?: boolean
  staffWillStay?: boolean
  sourceUrl?: string
}

export default function MarketplaceSection() {
  const [listings, setListings] = useState<MarketplaceListing[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchListings() {
      try {
        // Call the local Next.js API route directly
        console.log('Fetching marketplace listings...')
        const response = await fetch('/api/marketplace?limit=6')
        
        if (response.ok) {
          const data = await response.json()
          console.log('API Response received:', data)
          console.log('Data type:', typeof data, 'Length:', Array.isArray(data) ? data.length : 'Not array')
          
          if (Array.isArray(data)) {
            console.log('Setting', data.length, 'listings')
            setListings(data)
            setError(null)
          } else {
            console.log('Data is not an array:', data)
            setListings([])
            setError(null)
          }
        } else {
          console.log('API Error - Status:', response.status)
          const errorText = await response.text()
          console.log('Error details:', errorText)
          setListings([])
          setError(`API Error: ${response.status}`)
        }
      } catch (err) {
        console.error('Marketplace fetch error:', err)
        setListings([])
        setError(null)
      } finally {
        setLoading(false)
      }
    }

    fetchListings()
  }, [])

  const formatPrice = (listing: MarketplaceListing): string => {
    const price = listing.salesPrice || listing.sales_price
    if (!price) return ''
    if (typeof price === 'number') return `$${price.toLocaleString()}`
    if (typeof price === 'string') {
      if (price.toLowerCase().includes('contact')) return price
      if (price.toLowerCase().includes('sealed bid')) return price
      if (price.includes('$')) return price
      return `$${price}`
    }
    return ''
  }

  const formatListingType = (type: string): string => {
    if (!type) return 'Listing'
    switch (type.toUpperCase()) {
      case 'HAVE': return 'For Sale'
      case 'WANT': return 'Seeking'
      case 'NEED': return 'Investment'
      default: return type
    }
  }

  const getListingImageUrl = (images: string | null): string => {
    return '/api/placeholder/400/300'
  }

  // Filter only active listings from API data  
  const activeListings = listings.filter(listing => (listing.isActive !== false && listing.is_active !== false))

  return (
    <section className="section-padding bg-primary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary-900 mb-6">
            Cannabis Business Marketplace
          </h2>
          <p className="text-xl text-professional max-w-3xl mx-auto">
            Exclusive opportunities for cannabis business acquisitions, investments, and partnerships
          </p>
          <div className="w-24 h-1 bg-compliance-600 mx-auto mt-6"></div>
        </div>

        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="card-professional p-6 animate-pulse">
                <div className="h-48 bg-primary-200 rounded-lg mb-6"></div>
                <div className="h-4 bg-primary-200 rounded mb-3"></div>
                <div className="h-3 bg-primary-200 rounded mb-2"></div>
                <div className="h-3 bg-primary-200 rounded w-2/3"></div>
              </div>
            ))}
          </div>
        ) : (
          <>
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-primary-900 mb-4">Current Business Opportunities</h3>
              <p className="text-xl text-professional max-w-2xl mx-auto">
                Browse our complete database of verified cannabis business listings
              </p>
            </div>
            
            {/* Debug Info */}
            <div className="bg-yellow-100 border border-yellow-400 rounded p-4 mb-8 text-sm">
              <p><strong>Debug Info:</strong></p>
              <p>Total listings received: {listings.length}</p>
              <p>Active listings: {activeListings.length}</p>
              <p>Loading: {loading.toString()}</p>
              <p>Error: {error || 'None'}</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {activeListings.length > 0 ? activeListings.map((listing) => (
                <div key={listing.id} className="card-professional overflow-hidden">
                  <div className="relative">
                    <div className="w-full h-48 bg-gradient-to-r from-primary-600 to-compliance-600 flex items-center justify-center">
                      <div className="text-white text-center">
                        <BuildingOfficeIcon className="w-16 h-16 mx-auto mb-4" />
                        <p className="text-sm">{formatListingType(listing.type)}</p>
                      </div>
                    </div>
                    <div className="absolute top-4 left-4">
                      <span className="bg-compliance-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                        {formatListingType(listing.type)}
                      </span>
                    </div>
                    {formatPrice(listing) && (
                      <div className="absolute top-4 right-4">
                        <span className="bg-primary-900 text-white px-3 py-1 rounded-full text-sm font-bold">
                          {formatPrice(listing)}
                        </span>
                      </div>
                    )}
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-primary-900 mb-3 line-clamp-2">
                      {listing.title}
                    </h3>
                    
                    <div className="flex items-center gap-4 mb-4 text-sm text-primary-600">
                      <div className="flex items-center gap-1">
                        <MapPinIcon className="w-4 h-4" />
                        <span>{listing.location}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <BuildingOfficeIcon className="w-4 h-4" />
                        <span>{formatListingType(listing.type)}</span>
                      </div>
                    </div>
                    
                    <p className="text-professional text-sm leading-relaxed mb-4 line-clamp-3">
                      {listing.description}
                    </p>
                    
                    <div className="flex justify-between items-center">
                      <div className="text-sm text-primary-500">
                        {formatListingType(listing.type)} Opportunity
                      </div>
                      <button className="inline-flex items-center gap-2 text-compliance-600 font-medium hover:text-compliance-700 transition-smooth">
                        Learn More
                        <ArrowRightIcon className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              )) : (
                <div className="col-span-full bg-red-100 border border-red-400 rounded-lg p-8 text-center">
                  <h3 className="text-xl font-bold text-red-800 mb-4">No Listings Found</h3>
                  <p className="text-red-700 mb-4">
                    Unable to load marketplace listings. This could be due to:
                  </p>
                  <ul className="text-red-700 text-left max-w-md mx-auto">
                    <li>• API connection issues</li>
                    <li>• Database not responding</li>
                    <li>• All listings marked as inactive</li>
                  </ul>
                  <p className="text-red-700 mt-4">
                    <strong>Check browser console for detailed error messages.</strong>
                  </p>
                </div>
              )}
            </div>

            <div className="text-center bg-compliance-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-primary-900 mb-4">
                Professional Cannabis Business Brokerage
              </h3>
              <p className="text-professional mb-6 max-w-3xl mx-auto">
                CannXperts provides expert guidance for cannabis business transactions. Our team of industry professionals ensures compliance, due diligence, and successful outcomes for buyers and sellers.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="https://compliance-connect-andy623.replit.app/marketplace" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-compliance-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-compliance-700 btn-compliance transition-smooth inline-flex items-center gap-2 justify-center"
                >
                  View Full Database
                  <ArrowRightIcon className="w-5 h-5" />
                </a>
                <a 
                  href="/contact" 
                  className="border-2 border-compliance-600 text-compliance-600 px-8 py-4 rounded-lg font-semibold hover:bg-compliance-600 hover:text-white transition-smooth"
                >
                  Contact Our Team
                </a>
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  )
}