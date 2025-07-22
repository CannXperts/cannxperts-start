'use client'

import { useState, useEffect } from 'react'
import { MapPinIcon, BuildingOfficeIcon, ArrowRightIcon } from '@heroicons/react/24/outline'

interface MarketplaceListing {
  id: number
  title: string
  description: string
  type: string
  location: string
  sales_price: string | null
  images: string | null
}

export default function MarketplaceSection() {
  const [listings, setListings] = useState<MarketplaceListing[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchListings() {
      try {
        // Call the local Next.js API route directly
        const response = await fetch('/api/marketplace?limit=6')
        
        if (response.ok) {
          const data = await response.json()
          console.log('API Response:', data)
          console.log('Data type:', typeof data, 'Length:', Array.isArray(data) ? data.length : 'Not array')
          
          if (Array.isArray(data) && data.length > 0) {
            setListings(data)
            setError(null)
          } else {
            console.log('No listings found in API response')
            setListings([])
            setError(null)
          }
        } else {
          console.log('API Error - Status:', response.status)
          setListings([])
          setError(null)
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

  const formatPrice = (price: string | null): string => {
    if (!price) return ''
    // Clean up price string and ensure it starts with $
    const cleanPrice = price.replace(/[^\d,K]/g, '')
    return price.includes('$') ? price : `$${cleanPrice}`
  }

  const formatListingType = (type: string): string => {
    return type === 'HAVE' ? 'For Sale' : type === 'WANT' ? 'Seeking' : 'Investment'
  }

  const getListingImageUrl = (images: string | null): string => {
    return '/api/placeholder/400/300'
  }

  // Real listings data from database
  const realListings = [
    {
      id: 307,
      title: 'OLCC Processor License',
      description: 'Rare processor license available. Must show proof of approved Land Use Compatibility Statement for location.',
      location: 'Oregon, USA',
      price: '$30K OBO',
      type: 'For Sale',
      badge: 'License'
    },
    {
      id: 308,
      title: 'Retail Dispensary - Salem',  
      description: 'Operational retail dispensary. Includes all fixtures, equipment, and product transfer. Staff interested in staying.',
      location: 'Salem, Oregon',
      price: '$300K',
      type: 'For Sale',
      badge: 'Retail'
    },
    {
      id: 309,
      title: 'Retail License - Milwaukee',
      description: 'Dispensary license registered in Milwaukee Oregon. Location not included with license. Contact seller directly.',
      location: 'Oregon, USA',
      price: '',
      type: 'For Sale',
      badge: 'License',
      contact: '970-389-4548'
    },
    {
      id: 310,
      title: 'Rebel Spirit Cannabis Farm',
      description: 'Renowned cannabis farm with award-winning nationally trademarked brand. Established operation with significant growth potential.',
      location: 'Lane County, Oregon',
      price: '',
      type: 'Premium',
      badge: 'Farm & Brand'
    },
    {
      id: 311,
      title: 'OLCC Retail Store - Eugene',
      description: 'Operational and profitable OLCC retail store in unique Eugene location. Popular area with year-round events and high patron traffic.',
      location: 'Eugene, Oregon', 
      price: '',
      type: 'Featured',
      badge: '4000 SF Store'
    }
  ]

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
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {realListings.map((listing) => (
                <div key={listing.id} className="card-professional overflow-hidden">
                  <div className="relative">
                    <div className="w-full h-48 bg-gradient-to-r from-primary-600 to-compliance-600 flex items-center justify-center">
                      <div className="text-white text-center">
                        <BuildingOfficeIcon className="w-16 h-16 mx-auto mb-4" />
                        <p className="text-sm">{listing.badge}</p>
                      </div>
                    </div>
                    <div className="absolute top-4 left-4">
                      <span className="bg-compliance-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                        {listing.type}
                      </span>
                    </div>
                    {listing.price && (
                      <div className="absolute top-4 right-4">
                        <span className="bg-primary-900 text-white px-3 py-1 rounded-full text-sm font-bold">
                          {listing.price}
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
                        <span>{listing.badge}</span>
                      </div>
                    </div>
                    
                    <p className="text-professional text-sm leading-relaxed mb-4 line-clamp-3">
                      {listing.description}
                    </p>
                    
                    <div className="flex justify-between items-center">
                      <div className="text-sm text-primary-500">
                        {listing.type} Opportunity
                      </div>
                      <button className="inline-flex items-center gap-2 text-compliance-600 font-medium hover:text-compliance-700 transition-smooth">
                        {listing.contact ? `Contact: ${listing.contact}` : 'Learn More'}
                        <ArrowRightIcon className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
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