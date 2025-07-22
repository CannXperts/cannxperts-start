'use client'

import { useState, useEffect } from 'react'
import { formatPrice, formatListingType, getListingImageUrl } from '../api/marketplace'
import { MarketplaceListing } from '../shared/types'
import { BuildingOfficeIcon, MapPinIcon, TagIcon, ArrowRightIcon } from '@heroicons/react/24/outline'

export default function MarketplaceSection() {
  const [listings, setListings] = useState<MarketplaceListing[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchFeaturedListings = async () => {
      setLoading(true)
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
        console.error('Network Error:', err)
        // Don't set error, just show empty state
        setListings([])
        setError(null)
      } finally {
        setLoading(false)
      }
    }

    fetchFeaturedListings()
  }, [])

  if (error) {
    return (
      <section className="section-padding bg-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-primary-900 mb-8">Cannabis Business Marketplace</h2>
          <div className="card-professional p-12">
            <p className="text-professional mb-6">
              Our marketplace connects cannabis businesses with buyers, investors, and service providers. 
              Currently syncing the latest opportunities from our comprehensive database.
            </p>
            <div className="bg-compliance-50 p-6 rounded-lg">
              <p className="text-compliance-800 font-medium">
                🔄 Marketplace data is currently being synchronized with our main platform
              </p>
              <p className="text-compliance-700 text-sm mt-2">
                Check back in a few minutes to see the latest business opportunities
              </p>
            </div>
          </div>
        </div>
      </section>
    )
  }

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
        ) : listings.length === 0 ? (
          <div className="text-center">
            <div className="card-professional p-12">
              <h3 className="text-2xl font-bold text-primary-900 mb-6">Featured Cannabis Business Opportunities</h3>
              <p className="text-professional mb-8">
                We connect cannabis businesses with qualified buyers, investors, and service providers. Our marketplace features verified opportunities in the regulated cannabis industry.
              </p>
              
              {/* Sample Featured Listing */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                <div className="card-professional overflow-hidden">
                  <div className="relative">
                    <div className="w-full h-48 bg-gradient-to-r from-primary-600 to-compliance-600 flex items-center justify-center">
                      <div className="text-white text-center">
                        <BuildingOfficeIcon className="w-16 h-16 mx-auto mb-4" />
                        <p className="text-sm">Professional Cannabis Business</p>
                      </div>
                    </div>
                    <div className="absolute top-4 left-4">
                      <span className="bg-compliance-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                        For Sale
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-primary-900 mb-3">
                      OLCC Licensed Retail Store - Eugene
                    </h3>
                    <div className="flex items-center gap-4 mb-4 text-sm text-primary-600">
                      <div className="flex items-center gap-1">
                        <MapPinIcon className="w-4 h-4" />
                        <span>Eugene, OR</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <BuildingOfficeIcon className="w-4 h-4" />
                        <span>Retail Store</span>
                      </div>
                    </div>
                    <p className="text-professional mb-4">
                      Fully licensed OLCC retail cannabis store in prime Eugene location. Established customer base, prime location, all licenses and permits current.
                    </p>
                    <div className="flex justify-between items-center">
                      <div className="text-sm text-primary-500">
                        Featured Opportunity
                      </div>
                      <button className="inline-flex items-center gap-2 text-compliance-600 font-medium hover:text-compliance-700 transition-smooth">
                        Learn More
                        <ArrowRightIcon className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
                
                <div className="card-professional overflow-hidden">
                  <div className="relative">
                    <div className="w-full h-48 bg-gradient-to-r from-compliance-600 to-primary-600 flex items-center justify-center">
                      <div className="text-white text-center">
                        <BuildingOfficeIcon className="w-16 h-16 mx-auto mb-4" />
                        <p className="text-sm">Cannabis Cultivation Facility</p>
                      </div>
                    </div>
                    <div className="absolute top-4 left-4">
                      <span className="bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                        Investment
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-primary-900 mb-3">
                      Licensed Cultivation Operation
                    </h3>
                    <div className="flex items-center gap-4 mb-4 text-sm text-primary-600">
                      <div className="flex items-center gap-1">
                        <MapPinIcon className="w-4 h-4" />
                        <span>Oregon</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <BuildingOfficeIcon className="w-4 h-4" />
                        <span>Cultivation</span>
                      </div>
                    </div>
                    <p className="text-professional mb-4">
                      Tier II licensed cultivation facility with established operations. Seeking investment partner for expansion and increased production capacity.
                    </p>
                    <div className="flex justify-between items-center">
                      <div className="text-sm text-primary-500">
                        Investment Opportunity
                      </div>
                      <button className="inline-flex items-center gap-2 text-compliance-600 font-medium hover:text-compliance-700 transition-smooth">
                        Learn More
                        <ArrowRightIcon className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 bg-compliance-50 p-6 rounded-lg">
                <p className="text-compliance-800 font-medium mb-2">
                  🔐 Access Full Marketplace Database
                </p>
                <p className="text-compliance-700 text-sm mb-4">
                  View detailed listings, contact information, and exclusive opportunities
                </p>
                <a 
                  href="https://compliance-connect-andy623.replit.app/marketplace" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-compliance-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-compliance-700 btn-compliance transition-smooth inline-flex items-center gap-2"
                >
                  View Full Marketplace
                  <ArrowRightIcon className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {listings.map((listing) => (
                <div key={listing.id} className="card-professional overflow-hidden">
                  <div className="relative">
                    <img
                      src={getListingImageUrl(listing.images)}
                      alt={listing.title}
                      className="w-full h-48 object-cover"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = '/api/placeholder/400/300'
                      }}
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-compliance-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                        {formatListingType(listing.type)}
                      </span>
                    </div>
                    {listing.salesPrice && (
                      <div className="absolute top-4 right-4">
                        <span className="bg-primary-900 text-white px-3 py-1 rounded-full text-sm font-bold">
                          {formatPrice(listing.salesPrice)}
                        </span>
                      </div>
                    )}
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-primary-900 mb-3 line-clamp-2">
                      {listing.title}
                    </h3>
                    
                    <div className="flex items-center gap-4 mb-4 text-sm text-primary-600">
                      {listing.location && (
                        <div className="flex items-center gap-1">
                          <MapPinIcon className="w-4 h-4" />
                          <span>{listing.location}</span>
                        </div>
                      )}
                      {listing.businessType && (
                        <div className="flex items-center gap-1">
                          <BuildingOfficeIcon className="w-4 h-4" />
                          <span>{listing.businessType}</span>
                        </div>
                      )}
                    </div>

                    <p className="text-professional mb-4 line-clamp-3">
                      {listing.description}
                    </p>

                    {listing.licenseStatus && (
                      <div className="flex items-center gap-2 mb-4">
                        <TagIcon className="w-4 h-4 text-compliance-600" />
                        <span className="text-sm bg-compliance-100 text-compliance-800 px-2 py-1 rounded">
                          {listing.licenseStatus}
                        </span>
                      </div>
                    )}

                    <div className="flex justify-between items-center">
                      <div className="text-sm text-primary-500">
                        Listed {new Date(listing.createdAt).toLocaleDateString()}
                      </div>
                      <button className="inline-flex items-center gap-2 text-compliance-600 font-medium hover:text-compliance-700 transition-smooth">
                        View Details
                        <ArrowRightIcon className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {listings.length > 0 && (
              <div className="text-center">
                <a 
                  href="https://compliance-connect-andy623.replit.app/marketplace" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-compliance-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-compliance-700 btn-compliance transition-smooth inline-flex items-center gap-2"
                >
                  View All Listings
                  <ArrowRightIcon className="w-5 h-5" />
                </a>
                <p className="text-sm text-primary-600 mt-4">
                  Access our full marketplace with advanced search and filtering
                </p>
              </div>
            )}
          </>
        )}

        {/* Trust Indicators */}
        <div className="mt-20 card-professional p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-compliance-600 mb-2">150+</div>
              <div className="text-professional">Active Listings</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-compliance-600 mb-2">$2.5B+</div>
              <div className="text-professional">Total Value Listed</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-compliance-600 mb-2">95%</div>
              <div className="text-professional">Successful Transactions</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}